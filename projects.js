window.PORTFOLIO_LIVE_SYSTEMS = [
  {
    id: "fishing-game-live",
    title: "Hook & Loot Fishing Game",
    kind: "Browser game",
    status: "Live",
    summary: "A playable fishing game that shows the game loop, rewards, upgrades and browser-ready product packaging.",
    proof: "Verified live via GitHub Pages. Good first click for non-technical reviewers because it is immediately interactive.",
    screenshot: "assets/live-fishing.png",
    liveUrl: "https://kaimiewl.github.io/fishing-game/",
    codeUrl: "https://github.com/KaimiEwl/fishing-game",
    cta: "Play Hook & Loot"
  },
  {
    id: "ewl-profile-live",
    title: "Easy Weight Loss Profile App",
    kind: "Mobile PWA",
    status: "Live",
    summary: "A mobile nutrition/profile flow for weight-loss planning, daily targets and app-like user experience.",
    proof: "Verified live on GitHub Pages. Shows product UX, mobile navigation and profile-driven state.",
    screenshot: "assets/live-ewl-profile.png",
    liveUrl: "https://kaimiewl.github.io/EWL/profile/",
    codeUrl: "https://github.com/KaimiEwl/ewl-nutrition-pwa",
    cta: "Open EWL profile"
  },
  {
    id: "nft-miner-live",
    title: "NFT Miner Deployment",
    kind: "Web3 game",
    status: "Live",
    summary: "A deployed game/product surface running behind Cloudflare on the freen8n infrastructure.",
    proof: "Verified live on the production domain. Shows deployment, routing and a public game interface beyond local demos.",
    screenshot: "assets/live-miner.png",
    liveUrl: "https://dev.freen8n.space/",
    codeUrl: "https://github.com/KaimiEwl/hookloot-web3-game",
    cta: "Open NFT Miner"
  },
  {
    id: "lina-monitor-live",
    title: "Lina Monitor",
    kind: "Operations UI",
    status: "Live",
    summary: "A live monitoring interface for automation/operator visibility instead of blind background scripts.",
    proof: "Verified live on the n8n Codex domain. Shows monitoring UX for automation work and production observability.",
    screenshot: "assets/live-lina-monitor.png",
    liveUrl: "https://n8ncodex.freen8n.space/lina-monitor/",
    codeUrl: "",
    cta: "Open Lina Monitor"
  },
  {
    id: "n8n-codex-live",
    title: "n8n Codex Automation Instance",
    kind: "Self-hosted n8n",
    status: "Login-protected",
    summary: "An isolated self-hosted n8n workspace for Codex-assisted automations and workflow operations.",
    proof: "Health endpoint verified. Public portfolio links only to the instance shell; private workflows and credentials stay out of GitHub.",
    screenshot: "assets/live-n8n-codex.png",
    liveUrl: "https://n8ncodex.freen8n.space/",
    codeUrl: "https://github.com/KaimiEwl/ai-automation-case-studies",
    cta: "Open n8n Codex"
  },
  {
    id: "n8n-main-live",
    title: "Free n8n Automation Instance",
    kind: "Self-hosted n8n",
    status: "Login-protected",
    summary: "A second isolated n8n deployment for workflow experiments, production separation and automation infrastructure.",
    proof: "Health endpoint verified. Listed as infrastructure proof, not as a public workflow dump.",
    screenshot: "assets/live-n8n-main.png",
    liveUrl: "https://freen8n.space/",
    codeUrl: "https://github.com/KaimiEwl/ai-automation-case-studies",
    cta: "Open Free n8n"
  }
];

window.PORTFOLIO_PROJECTS = [
  {
    id: "ewl-nutrition-pwa",
    title: "EWL Nutrition PWA",
    clientSummary: "A mobile-first nutrition planner for people who want fast daily food planning without spreadsheet friction.",
    technicalSummary: "Next.js app with profile-based macro targets, day planning, calendar history, product search and local persistence.",
    category: "Frontend",
    status: "Demo",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
    screenshot: "assets/ewl.svg",
    githubUrl: "https://github.com/KaimiEwl/ewl-nutrition-pwa",
    liveUrl: "https://KaimiEwl.github.io/ewl-nutrition-pwa/",
    videoUrl: "",
    caseStudyUrl: "#case-ewl"
  },
  {
    id: "ai-video-render-worker",
    title: "AI Video Render Worker",
    clientSummary: "A worker pipeline that turns queued content jobs into rendered videos with voice, subtitles and upload flow.",
    technicalSummary: "Python poller and renderer using OpenAI TTS, ffmpeg, ASS subtitles, recipe modules, R2/S3 upload and env-driven operations.",
    category: "Video",
    status: "Case Study",
    stack: ["Python", "ffmpeg", "OpenAI", "R2/S3", "n8n"],
    screenshot: "assets/video-worker.svg",
    githubUrl: "https://github.com/KaimiEwl/ai-video-render-worker",
    liveUrl: "",
    videoUrl: "",
    caseStudyUrl: "#case-video-worker"
  },
  {
    id: "hookloot-web3-game",
    title: "HookLoot Web3 Game",
    clientSummary: "A game/product prototype that combines gameplay, tasks, wallet flows and monetization systems.",
    technicalSummary: "Vite frontend with Fastify API, persistence layers, TON wallet/payment concepts, smoke tests, E2E tests and load tooling.",
    category: "Web3",
    status: "Prototype",
    stack: ["Vite", "Fastify", "Postgres", "Redis", "TON", "Playwright"],
    screenshot: "assets/nft-miner.png",
    githubUrl: "https://github.com/KaimiEwl/hookloot-web3-game",
    liveUrl: "https://KaimiEwl.github.io/hookloot-web3-game/",
    videoUrl: "",
    caseStudyUrl: "#case-hookloot"
  },
  {
    id: "broagents-browser-ai-runtime",
    title: "BROAGENTS Browser AI Runtime",
    clientSummary: "A local control center for coordinating AI browser tabs as role-based agents.",
    technicalSummary: "Portable Node.js runtime with WebSocket coordination, Chrome extension, dashboard, desktop launcher and agent role config.",
    category: "AI Automation",
    status: "Demo",
    stack: ["Node.js", "WebSocket", "Chrome Extension", "React"],
    screenshot: "assets/broagents.svg",
    githubUrl: "https://github.com/KaimiEwl/broagents-browser-ai-runtime",
    liveUrl: "",
    videoUrl: "",
    caseStudyUrl: "#case-broagents"
  },
  {
    id: "tgm-coin-bot",
    title: "TGM Coin Bot",
    clientSummary: "A Telegram economy bot with rewards, referrals and admin controls for community growth experiments.",
    technicalSummary: "Python Telegram bot with SQLite storage, anti-spam rules, owner tribute, referral logic, admin UI and mini-app roadmap.",
    category: "Telegram",
    status: "Demo",
    stack: ["Python", "Telegram Bot API", "Flask", "SQLite"],
    screenshot: "assets/tgm.svg",
    githubUrl: "https://github.com/KaimiEwl/tgm-coin-bot",
    liveUrl: "",
    videoUrl: "",
    caseStudyUrl: "#case-tgm"
  },
  {
    id: "liquid-glass-r3f",
    title: "Liquid Glass R3F",
    clientSummary: "A polished interactive visual experiment for premium web interfaces and product motion.",
    technicalSummary: "React Three Fiber scene with Three.js materials, realtime rendering and Vite deployment.",
    category: "Visual",
    status: "Live",
    stack: ["React", "Three.js", "R3F", "Vite"],
    screenshot: "assets/liquid-glass.png",
    githubUrl: "https://github.com/KaimiEwl/liquid-glass-r3f",
    liveUrl: "https://KaimiEwl.github.io/liquid-glass-r3f/",
    videoUrl: "",
    caseStudyUrl: "#case-visual"
  },
  {
    id: "godot-mobile-prototype",
    title: "Godot Mobile Prototype",
    clientSummary: "A vertical mobile game prototype showing custom assets, scene setup and mobile rendering decisions.",
    technicalSummary: "Godot 4.6 project with mobile renderer, Jolt physics, imported assets, scenes and gameplay scripts.",
    category: "Game / 3D",
    status: "Prototype",
    stack: ["Godot", "GDScript", "Jolt", "Mobile"],
    screenshot: "assets/godot.png",
    githubUrl: "https://github.com/KaimiEwl/godot-mobile-prototype",
    liveUrl: "",
    videoUrl: "",
    caseStudyUrl: "#case-godot"
  },
  {
    id: "smm-browser-agent-api",
    title: "SMM Browser Agent API",
    clientSummary: "A prototype web interface for launching browser automation tasks through an AI agent.",
    technicalSummary: "FastAPI service wrapping browser-use, LangChain/OpenAI and Playwright-style visible browser control.",
    category: "AI Automation",
    status: "Prototype",
    stack: ["FastAPI", "browser-use", "LangChain", "Playwright"],
    screenshot: "assets/smm-agent.svg",
    githubUrl: "https://github.com/KaimiEwl/smm-browser-agent-api",
    liveUrl: "",
    videoUrl: "",
    caseStudyUrl: "#case-smm"
  },
  {
    id: "ai-automation-case-studies",
    title: "AI Automation Case Studies",
    clientSummary: "Productized automation plans for lead qualification and old-lead reactivation.",
    technicalSummary: "Case-study repository with ICP, workflow specs, launch plans, compliance notes and implementation backlogs.",
    category: "Case Studies",
    status: "Case Study",
    stack: ["Product Strategy", "AI Workflows", "CRM", "Automation"],
    screenshot: "assets/case-studies.svg",
    githubUrl: "https://github.com/KaimiEwl/ai-automation-case-studies",
    liveUrl: "",
    videoUrl: "",
    caseStudyUrl: "#case-automation"
  }
];

window.PORTFOLIO_CASES = [
  {
    id: "case-video-worker",
    title: "From content queue to rendered video",
    problem: "Manual short-form video production is slow, repetitive and hard to scale.",
    result: "A worker polls jobs, generates voice, composes video, burns subtitles and prepares upload-ready outputs.",
    proof: "Shows backend automation, ffmpeg debugging, queue operations and production-style environment configuration."
  },
  {
    id: "case-hookloot",
    title: "Game economy with real product constraints",
    problem: "A game prototype needs more than visuals: tasks, wallet flows, persistence, tests and deployment discipline matter.",
    result: "The project combines gameplay UI, backend services, payment concepts, E2E coverage and load-test tooling.",
    proof: "Shows full-stack thinking across frontend, API, storage, Web3 and QA."
  },
  {
    id: "case-broagents",
    title: "Browser tabs as coordinated AI workers",
    problem: "AI workflows often get stuck in scattered manual browser tabs.",
    result: "A local runtime registers ChatGPT/Gemini tabs, assigns roles and coordinates agent work through a dashboard.",
    proof: "Shows AI tooling, Chrome extension work, WebSocket systems and operator-focused UX."
  }
];
