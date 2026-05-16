const panel = document.querySelector("[data-liquid-panel]");
const canvas = document.querySelector("#liquidGlassCanvas");
const floatingCard = document.querySelector("[data-floating-card]");

if (panel && canvas) {
  const THREE = await import("https://unpkg.com/three@0.181.1/build/three.module.js").catch(() => null);

  if (!THREE) {
    panel.classList.add("is-webgl-off");
  } else {
    initLiquidGlassPanel(THREE);
  }
}

function initLiquidGlassPanel(THREE) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lowPower =
    /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    (navigator.hardwareConcurrency || 8) <= 4;
  const pixelRatioCap = lowPower ? 1.15 : 1.65;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: !lowPower,
      powerPreference: "high-performance",
    });
  } catch {
    panel.classList.add("is-webgl-off");
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, pixelRatioCap));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.14;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 60);
  camera.position.set(0, 0, 8.1);

  const environmentTexture = createEnvironmentTexture(THREE);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromEquirectangular(environmentTexture).texture;
  environmentTexture.dispose();
  pmrem.dispose();

  const ambient = new THREE.HemisphereLight("#ffffff", "#ffd0a8", 1.28);
  const key = new THREE.DirectionalLight("#ffffff", 3.4);
  key.position.set(-3.2, 4.8, 5.4);
  const rim = new THREE.PointLight("#7ee9ff", 3.6, 10, 2);
  rim.position.set(2.9, 1.2, 2.4);
  const warm = new THREE.PointLight("#ffb08b", 2.2, 9, 2);
  warm.position.set(-2.8, -1.6, 3.1);
  scene.add(ambient, key, rim, warm);

  const glassGroup = new THREE.Group();
  scene.add(glassGroup);

  const glassShape = createRoundedRectShape(THREE, 4.55, 3.18, 0.42);
  const glassGeometry = new THREE.ExtrudeGeometry(glassShape, {
    depth: 0.42,
    bevelEnabled: true,
    bevelSize: 0.075,
    bevelThickness: 0.09,
    bevelSegments: 18,
    curveSegments: 32,
  });
  glassGeometry.center();

  const normalMap = createRippleNormalMap(THREE);
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#d9fbff"),
    metalness: 0,
    roughness: 0.026,
    normalMap,
    normalScale: new THREE.Vector2(0.055, 0.055),
    transmission: 1,
    thickness: 1.52,
    ior: 1.58,
    attenuationColor: new THREE.Color("#c8f7ff"),
    attenuationDistance: 0.86,
    clearcoat: 1,
    clearcoatRoughness: 0.016,
    dispersion: 0.09,
    iridescence: 0.14,
    iridescenceIOR: 1.33,
    specularIntensity: 1,
    specularColor: new THREE.Color("#ffffff"),
    envMapIntensity: 3.15,
    transparent: true,
    opacity: 1,
    side: THREE.DoubleSide,
  });

  const glass = new THREE.Mesh(glassGeometry, glassMaterial);
  glass.rotation.z = -0.015;
  glassGroup.add(glass);

  const backPlate = new THREE.Mesh(
    glassGeometry.clone(),
    new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#eefeff"),
      metalness: 0,
      roughness: 0.11,
      transmission: 0.62,
      thickness: 0.82,
      ior: 1.46,
      attenuationColor: new THREE.Color("#ffffff"),
      attenuationDistance: 2.8,
      clearcoat: 0.82,
      clearcoatRoughness: 0.08,
      envMapIntensity: 1.8,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
      side: THREE.BackSide,
    })
  );
  backPlate.scale.set(1.012, 1.012, 1.012);
  glassGroup.add(backPlate);

  const edge = new THREE.LineSegments(
    new THREE.EdgesGeometry(glassGeometry, 24),
    new THREE.LineBasicMaterial({
      color: "#ffffff",
      transparent: true,
      opacity: 0.62,
    })
  );
  edge.scale.set(1.006, 1.006, 1.006);
  glassGroup.add(edge);

  const ribbonGroup = createRibbons(THREE);
  ribbonGroup.position.z = -0.46;
  glassGroup.add(ribbonGroup);

  const glints = createGlints(THREE);
  glints.position.z = 0.32;
  glassGroup.add(glints);

  let targetPointerX = 0;
  let targetPointerY = 0;
  let smoothPointerX = 0;
  let smoothPointerY = 0;
  let baseY = 0.08;

  panel.addEventListener(
    "pointermove",
    (event) => {
      const rect = panel.getBoundingClientRect();
      targetPointerX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      targetPointerY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
      updateFloatingCard(targetPointerX, targetPointerY);
    },
    { passive: true }
  );

  panel.addEventListener(
    "pointerleave",
    () => {
      targetPointerX = 0;
      targetPointerY = 0;
      updateFloatingCard(0, 0);
    },
    { passive: true }
  );

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(panel);
  window.addEventListener("resize", resize, { passive: true });
  resize();

  const clock = new THREE.Clock();

  function resize() {
    const rect = panel.getBoundingClientRect();
    const width = Math.max(1, Math.floor(rect.width));
    const height = Math.max(1, Math.floor(rect.height));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.fov = width < 700 ? 43 : 36;
    camera.position.z = width < 700 ? 8.8 : 7.9;
    camera.updateProjectionMatrix();

    const isCompact = width < 760;
    baseY = isCompact ? -0.72 : 0.06;
    glassGroup.position.set(isCompact ? 0 : 1.82, baseY, 0);
    glassGroup.scale.setScalar(isCompact ? 0.78 : 1);

    renderer.render(scene, camera);
  }

  function animate() {
    const elapsed = clock.getElapsedTime();
    const delta = Math.min(clock.getDelta(), 0.033);

    smoothPointerX = THREE.MathUtils.damp(smoothPointerX, targetPointerX, 4.8, delta);
    smoothPointerY = THREE.MathUtils.damp(smoothPointerY, targetPointerY, 4.8, delta);

    glassGroup.rotation.x = 0.055 - smoothPointerY * 0.105 + Math.sin(elapsed * 0.72) * 0.012;
    glassGroup.rotation.y = -0.09 + smoothPointerX * 0.15 + Math.sin(elapsed * 0.54) * 0.018;
    glassGroup.rotation.z = Math.sin(elapsed * 0.38) * 0.012;
    glassGroup.position.y = baseY + Math.sin(elapsed * 0.82) * 0.07;

    glassMaterial.thickness = 1.48 + Math.sin(elapsed * 0.9) * 0.08;
    rim.intensity = 3.15 + Math.sin(elapsed * 1.6) * 0.5;
    rim.position.x = 2.9 + Math.sin(elapsed * 0.9) * 0.42;
    warm.position.y = -1.5 + Math.cos(elapsed * 0.7) * 0.25;

    ribbonGroup.children.forEach((ribbon, index) => {
      ribbon.position.x = Math.sin(elapsed * (0.28 + index * 0.035) + index) * 0.1;
      ribbon.material.opacity = ribbon.userData.baseOpacity + Math.sin(elapsed * 0.8 + index) * 0.035;
    });

    glints.children.forEach((glint, index) => {
      glint.position.x = -1.9 + ((elapsed * (0.34 + index * 0.08) + index * 1.2) % 4.4);
      glint.material.opacity = glint.userData.baseOpacity + Math.sin(elapsed * 1.4 + index) * 0.035;
    });

    renderer.render(scene, camera);
    if (!reducedMotion) requestAnimationFrame(animate);
  }

  animate();
}

function updateFloatingCard(pointerX, pointerY) {
  if (!floatingCard) return;
  floatingCard.style.setProperty("--card-tilt-x", `${(-pointerY * 2.6).toFixed(2)}deg`);
  floatingCard.style.setProperty("--card-tilt-y", `${(pointerX * 3.4).toFixed(2)}deg`);
  floatingCard.style.setProperty("--card-shift-x", `${(pointerX * 5).toFixed(1)}px`);
  floatingCard.style.setProperty("--card-shift-y", `${(pointerY * 4).toFixed(1)}px`);
}

function createRoundedRectShape(THREE, width, height, radius) {
  const x = -width / 2;
  const y = -height / 2;
  const shape = new THREE.Shape();

  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);

  return shape;
}

function createRibbons(THREE) {
  const group = new THREE.Group();
  const colors = ["#7fdfff", "#ffffff", "#ffb391", "#9bf1d8", "#c7b4ff"];
  const settings = [
    [-0.72, 0.88, 4.8, 0.2, -0.18, 0.22],
    [0.15, 0.38, 5.2, 0.16, 0.16, 0.18],
    [0.2, -0.34, 4.1, 0.18, -0.24, 0.17],
    [-0.1, -0.88, 5.4, 0.13, 0.1, 0.14],
  ];

  settings.forEach(([x, y, width, height, rotation, opacity], index) => {
    const material = new THREE.MeshBasicMaterial({
      color: colors[index % colors.length],
      transparent: true,
      opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
    mesh.position.set(x, y, -0.04 * index);
    mesh.rotation.z = rotation;
    mesh.userData.baseOpacity = opacity;
    group.add(mesh);
  });

  return group;
}

function createGlints(THREE) {
  const group = new THREE.Group();
  const geometry = new THREE.PlaneGeometry(1.25, 0.035);

  for (let i = 0; i < 5; i += 1) {
    const material = new THREE.MeshBasicMaterial({
      color: i % 2 ? "#ffffff" : "#8fecff",
      transparent: true,
      opacity: i % 2 ? 0.18 : 0.14,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const glint = new THREE.Mesh(geometry, material);
    glint.position.set(-1.8 + i * 0.56, -1.18 + i * 0.53, 0);
    glint.rotation.z = -0.28 + i * 0.05;
    glint.userData.baseOpacity = material.opacity;
    group.add(glint);
  }

  return group;
}

function createEnvironmentTexture(THREE) {
  const textureCanvas = document.createElement("canvas");
  textureCanvas.width = 1024;
  textureCanvas.height = 512;
  const ctx = textureCanvas.getContext("2d");

  const sky = ctx.createLinearGradient(0, 0, textureCanvas.width, textureCanvas.height);
  sky.addColorStop(0, "#f8fbff");
  sky.addColorStop(0.26, "#bceeff");
  sky.addColorStop(0.52, "#fff1e4");
  sky.addColorStop(0.76, "#b8d2ff");
  sky.addColorStop(1, "#ffffff");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, textureCanvas.width, textureCanvas.height);

  for (let i = 0; i < 18; i += 1) {
    const x = (i / 18) * textureCanvas.width;
    const width = 14 + (i % 5) * 9;
    ctx.fillStyle = i % 3 === 0 ? "rgba(255, 255, 255, 0.72)" : "rgba(104, 209, 255, 0.32)";
    ctx.fillRect(x, 34 + (i % 4) * 26, width, 390 - (i % 6) * 22);
  }

  ctx.globalCompositeOperation = "screen";
  const shine = ctx.createLinearGradient(120, 70, 880, 420);
  shine.addColorStop(0, "rgba(255, 255, 255, 0)");
  shine.addColorStop(0.48, "rgba(255, 255, 255, 0.86)");
  shine.addColorStop(0.54, "rgba(127, 231, 255, 0.5)");
  shine.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = shine;
  ctx.fillRect(0, 0, textureCanvas.width, textureCanvas.height);
  ctx.globalCompositeOperation = "source-over";

  const texture = new THREE.CanvasTexture(textureCanvas);
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createRippleNormalMap(THREE) {
  const size = 256;
  const normalCanvas = document.createElement("canvas");
  normalCanvas.width = size;
  normalCanvas.height = size;
  const ctx = normalCanvas.getContext("2d");
  const image = ctx.createImageData(size, size);
  const strength = 7.5;

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const sx = x / size;
      const sy = y / size;
      const height =
        Math.sin((sx * 5.2 + sy * 1.7) * Math.PI * 2) * 0.42 +
        Math.sin((sx * 1.8 - sy * 4.6) * Math.PI * 2) * 0.3 +
        Math.sin((sx * 9.8 + sy * 6.2) * Math.PI * 2) * 0.12;
      const nextX =
        Math.sin(((x + 1) / size * 5.2 + sy * 1.7) * Math.PI * 2) * 0.42 +
        Math.sin(((x + 1) / size * 1.8 - sy * 4.6) * Math.PI * 2) * 0.3 +
        Math.sin(((x + 1) / size * 9.8 + sy * 6.2) * Math.PI * 2) * 0.12;
      const nextY =
        Math.sin((sx * 5.2 + ((y + 1) / size) * 1.7) * Math.PI * 2) * 0.42 +
        Math.sin((sx * 1.8 - ((y + 1) / size) * 4.6) * Math.PI * 2) * 0.3 +
        Math.sin((sx * 9.8 + ((y + 1) / size) * 6.2) * Math.PI * 2) * 0.12;

      const dx = (height - nextX) * strength;
      const dy = (height - nextY) * strength;
      const length = Math.hypot(dx, dy, 1);
      const index = (y * size + x) * 4;
      image.data[index] = 128 + (dx / length) * 127;
      image.data[index + 1] = 128 + (dy / length) * 127;
      image.data[index + 2] = 128 + (1 / length) * 127;
      image.data[index + 3] = 255;
    }
  }

  ctx.putImageData(image, 0, 0);
  const texture = new THREE.CanvasTexture(normalCanvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1.2, 1.2);
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}
