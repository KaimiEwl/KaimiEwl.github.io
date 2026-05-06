window.PORTFOLIO_FEATURED = [
  {
    title: "Easy Weight Loss Profile App",
    kicker: "Mobile product surface",
    summary: "A phone-first profile flow for goals, calories and nutrition settings. It feels like a small product, not a screenshot dump.",
    image: "assets/ewl-app-preview.svg",
    notes: [
      { label: "Problem", value: "A user needs to understand goals and nutrition targets without a desktop dashboard." },
      { label: "Result", value: "A live mobile-style flow with profile inputs, target summaries and local persistence." },
      { label: "Proof", value: "Public GitHub Pages demo plus clean public repository export." }
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "localStorage"],
    links: [
      { label: "Open live app", url: "https://kaimiewl.github.io/EWL/profile/", primary: true },
      { label: "View code", url: "https://github.com/KaimiEwl/ewl-nutrition-pwa" }
    ]
  },
  {
    title: "Hook & Loot Fishing Game",
    kicker: "Playable browser game",
    summary: "A live game loop with rewards, upgrades and a clean mobile-friendly entry point. It is something a visitor can actually play.",
    image: "assets/live-fishing.png",
    notes: [
      { label: "Problem", value: "A game prototype needs a real loop, not only a concept page." },
      { label: "Result", value: "A deployed fishing game with reward feedback and an upgrade path." },
      { label: "Proof", value: "Public game link and code repository." }
    ],
    stack: ["Browser game", "Rewards", "Mobile", "GitHub Pages"],
    links: [
      { label: "Play game", url: "https://kaimiewl.github.io/fishing-game/", primary: true },
      { label: "View code", url: "https://github.com/KaimiEwl/fishing-game" }
    ]
  },
  {
    title: "AI Video Render Worker",
    kicker: "Automation pipeline",
    summary: "A queue-based worker that turns jobs into AI voice, subtitles, ffmpeg renders and final video outputs.",
    image: "assets/video-worker-pipeline.svg",
    notes: [
      { label: "Problem", value: "Video generation needs a repeatable worker path instead of manual render steps." },
      { label: "Result", value: "A case-study style public repository showing queue, voice, subtitle and ffmpeg structure." },
      { label: "Proof", value: "Public-safe code export with private runtime artifacts removed." }
    ],
    stack: ["Python", "Node.js", "Queue", "AI voice", "ffmpeg"],
    links: [
      { label: "View worker code", url: "https://github.com/KaimiEwl/ai-video-render-worker", primary: true },
      { label: "Open portfolio card", url: "https://kaimiewl.github.io/#work" }
    ]
  }
];

window.PORTFOLIO_WORK = [
  {
    category: "apps",
    title: "Easy Weight Loss Profile App",
    kind: "Mobile app",
    status: "Live",
    summary: "Profile, goal and nutrition target flow for a mobile wellness app.",
    result: "Shows product UI, local persistence and a clean path toward a backend-backed app.",
    image: "assets/ewl-app-preview.svg",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
    links: [
      { label: "Open app", url: "https://kaimiewl.github.io/EWL/profile/", primary: true },
      { label: "Code", url: "https://github.com/KaimiEwl/ewl-nutrition-pwa" }
    ]
  },
  {
    category: "apps",
    title: "Liquid Glass Visual Demo",
    kind: "3D website",
    status: "Live",
    summary: "Interactive glass-style visual for premium product and landing page motion.",
    result: "Demonstrates visual frontend craft with React, Three.js and public deployment.",
    image: "assets/liquid-glass.png",
    stack: ["React", "Three.js", "R3F", "Vite"],
    links: [
      { label: "Open demo", url: "https://kaimiewl.github.io/liquid-glass-r3f/", primary: true },
      { label: "Code", url: "https://github.com/KaimiEwl/liquid-glass-r3f" }
    ]
  },
  {
    category: "games",
    title: "Hook & Loot Fishing Game",
    kind: "Browser game",
    status: "Live",
    summary: "Playable fishing loop with rewards, upgrades and a simple browser entry point.",
    result: "A visitor can open it, play it and understand the loop without setup.",
    image: "assets/live-fishing.png",
    stack: ["Game loop", "Rewards", "Browser", "Mobile"],
    links: [
      { label: "Play", url: "https://kaimiewl.github.io/fishing-game/", primary: true },
      { label: "Code", url: "https://github.com/KaimiEwl/fishing-game" }
    ]
  },
  {
    category: "games",
    title: "NFT Miner",
    kind: "Game deployment",
    status: "Live",
    summary: "Public game/product surface running on a real server behind Cloudflare.",
    result: "Shows deployment, product surface and a Web3/game prototype direction.",
    image: "assets/live-miner.png",
    stack: ["Game", "Cloudflare", "Web3", "Deployment"],
    links: [
      { label: "Open miner", url: "https://dev.freen8n.space/", primary: true },
      { label: "Code", url: "https://github.com/KaimiEwl/hookloot-web3-game" }
    ]
  },
  {
    category: "bots",
    title: "TGM Coin Bot",
    kind: "Telegram bot",
    status: "Public code",
    summary: "Telegram rewards, referrals, balances and admin controls for community mechanics.",
    result: "Turns community actions into a trackable bot economy with public-safe code notes.",
    image: "assets/tgm-bot-preview.svg",
    stack: ["Telegram", "Python", "SQLite", "Rewards"],
    links: [
      { label: "View bot code", url: "https://github.com/KaimiEwl/tgm-coin-bot", primary: true }
    ]
  },
  {
    category: "bots",
    title: "AI Video Render Worker",
    kind: "Worker pipeline",
    status: "Case study",
    summary: "Queue-based system for AI voice, subtitles, ffmpeg rendering and output handling.",
    result: "Shows backend automation depth and the shape of a production worker.",
    image: "assets/video-worker-pipeline.svg",
    stack: ["Queue", "AI voice", "Subtitles", "ffmpeg"],
    links: [
      { label: "View worker code", url: "https://github.com/KaimiEwl/ai-video-render-worker", primary: true }
    ]
  },
  {
    category: "bots",
    title: "BROAGENTS Browser Runtime",
    kind: "Chrome app",
    status: "Public code",
    summary: "Chrome extension and dashboard for coordinating multiple AI browser agents.",
    result: "Shows browser-agent orchestration, local runtime thinking and dashboard UI.",
    image: "assets/broagents-chrome-preview.svg",
    stack: ["Chrome extension", "Agents", "Dashboard", "Node.js"],
    links: [
      { label: "View runtime code", url: "https://github.com/KaimiEwl/broagents-browser-ai-runtime", primary: true }
    ]
  },
  {
    category: "automation",
    title: "Lina Monitor",
    kind: "AI workspace",
    status: "Live",
    summary: "AI influencer workspace with assistants for monitoring, post drafting and comment help.",
    result: "A live monitoring surface connected to a private automation system.",
    image: "assets/lina-ai-influencer-preview.svg",
    stack: ["Monitoring", "Posting", "Comments", "AI assistants"],
    links: [
      { label: "Open monitor", url: "https://n8ncodex.freen8n.space/lina-monitor/", primary: true }
    ]
  },
  {
    category: "automation",
    title: "n8n Codex Instance",
    kind: "Automation server",
    status: "Private login",
    summary: "Self-hosted n8n workspace for integrations, workflow runs and background jobs.",
    result: "Public portfolio explains the architecture while credentials and workflows stay private.",
    image: "assets/n8n-codex-preview.svg",
    stack: ["n8n", "Workflows", "Server", "Cloudflare"],
    links: [
      { label: "Open login", url: "https://n8ncodex.freen8n.space/", primary: true },
      { label: "Case notes", url: "https://github.com/KaimiEwl/ai-automation-case-studies" }
    ]
  },
  {
    category: "automation",
    title: "Free n8n Instance",
    kind: "Automation server",
    status: "Private login",
    summary: "Second isolated n8n workspace for experiments, operations and separation of concerns.",
    result: "Shows infrastructure thinking: split workspaces, safer operations and public-safe notes.",
    image: "assets/n8n-free-preview.svg",
    stack: ["n8n", "Isolation", "Ops", "Workflows"],
    links: [
      { label: "Open login", url: "https://freen8n.space/", primary: true },
      { label: "Case notes", url: "https://github.com/KaimiEwl/ai-automation-case-studies" }
    ]
  }
];

window.PORTFOLIO_CAPABILITIES = [
  {
    title: "Launch a working app surface",
    summary: "Mobile flows, dashboards, landing pages and small product interfaces that can be opened and tested."
  },
  {
    title: "Automate repeated work",
    summary: "Telegram bots, n8n systems, reports, monitors, background workers and integration glue."
  },
  {
    title: "Build AI media pipelines",
    summary: "Queue-based workers for voice, subtitles, ffmpeg renders, uploads and repeatable video output."
  },
  {
    title: "Prototype games and visual demos",
    summary: "Playable browser loops, Web3-style product surfaces and interactive frontend demos."
  }
];
