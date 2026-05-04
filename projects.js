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
