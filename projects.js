window.PORTFOLIO_WORK_GROUPS = [
  {
    title: "Apps and websites",
    summary: "Useful screens people can open from a phone or browser.",
    items: [
      {
        title: "Easy Weight Loss Profile App",
        kind: "Phone app",
        status: "Works now",
        summary: "A mobile nutrition profile for goals, daily targets and personal settings.",
        screenshot: "assets/live-ewl-profile.png",
        tags: ["Mobile UX", "Nutrition", "React", "Next.js"],
        links: [
          { label: "Open EWL app", url: "https://kaimiewl.github.io/EWL/profile/", primary: true },
          { label: "View code", url: "https://github.com/KaimiEwl/ewl-nutrition-pwa" }
        ]
      },
      {
        title: "EWL Nutrition Planner",
        kind: "Phone app",
        status: "Demo",
        summary: "A food planning app for daily meals, calendar history and progress tracking.",
        screenshot: "assets/ewl.svg",
        tags: ["Planning", "Local data", "TypeScript", "Tailwind"],
        links: [
          { label: "Open planner", url: "https://KaimiEwl.github.io/ewl-nutrition-pwa/", primary: true },
          { label: "View code", url: "https://github.com/KaimiEwl/ewl-nutrition-pwa" }
        ]
      },
      {
        title: "Liquid Glass Visual Demo",
        kind: "Website demo",
        status: "Works now",
        summary: "A polished interactive visual for premium websites and product pages.",
        screenshot: "assets/liquid-glass.png",
        tags: ["Website", "3D", "React", "Three.js"],
        links: [
          { label: "Open visual demo", url: "https://KaimiEwl.github.io/liquid-glass-r3f/", primary: true },
          { label: "View code", url: "https://github.com/KaimiEwl/liquid-glass-r3f" }
        ]
      }
    ]
  },
  {
    title: "Games",
    summary: "Playable prototypes and game ideas that are easy to test.",
    items: [
      {
        title: "Hook & Loot Fishing Game",
        kind: "Browser game",
        status: "Works now",
        summary: "A simple fishing game with rewards, upgrades and a clear game loop.",
        screenshot: "assets/live-fishing.png",
        tags: ["Game loop", "Rewards", "Browser", "Mobile"],
        links: [
          { label: "Play Hook & Loot", url: "https://kaimiewl.github.io/fishing-game/", primary: true },
          { label: "View code", url: "https://github.com/KaimiEwl/fishing-game" }
        ]
      },
      {
        title: "NFT Miner",
        kind: "Browser game",
        status: "Works now",
        summary: "A public game page running on a real server behind Cloudflare.",
        screenshot: "assets/live-miner.png",
        tags: ["Game", "Deployment", "Cloudflare", "Web3"],
        links: [
          { label: "Open NFT Miner", url: "https://dev.freen8n.space/", primary: true },
          { label: "View code", url: "https://github.com/KaimiEwl/hookloot-web3-game" }
        ]
      },
      {
        title: "Godot Mobile Prototype",
        kind: "Mobile game",
        status: "Prototype",
        summary: "A mobile game prototype with scenes, custom assets and phone-first layout.",
        screenshot: "assets/godot.png",
        tags: ["Godot", "GDScript", "Mobile", "Prototype"],
        links: [
          { label: "View code", url: "https://github.com/KaimiEwl/godot-mobile-prototype", primary: true }
        ]
      }
    ]
  },
  {
    title: "Bots and automation",
    summary: "Bots, AI helpers and background workers for repetitive work.",
    items: [
      {
        title: "TGM Coin Bot",
        kind: "Telegram bot",
        status: "Demo",
        summary: "A Telegram bot for community rewards, referrals, admin controls and engagement.",
        screenshot: "assets/tgm.svg",
        tags: ["Telegram", "Rewards", "Python", "SQLite"],
        links: [
          { label: "View bot code", url: "https://github.com/KaimiEwl/tgm-coin-bot", primary: true }
        ]
      },
      {
        title: "AI Video Render Worker",
        kind: "Automation worker",
        status: "Case study",
        summary: "A background system for making videos with voice, subtitles and upload flow.",
        screenshot: "assets/video-worker.svg",
        tags: ["Video", "Voice", "Subtitles", "ffmpeg"],
        links: [
          { label: "View worker code", url: "https://github.com/KaimiEwl/ai-video-render-worker", primary: true }
        ]
      },
      {
        title: "BROAGENTS Browser Runtime",
        kind: "AI assistant tool",
        status: "Demo",
        summary: "A local control panel for running several AI browser assistants in a coordinated way.",
        screenshot: "assets/broagents.svg",
        tags: ["Browser work", "AI agents", "Chrome", "Node.js"],
        links: [
          { label: "View runtime code", url: "https://github.com/KaimiEwl/broagents-browser-ai-runtime", primary: true }
        ]
      },
      {
        title: "SMM Browser Agent API",
        kind: "Automation API",
        status: "Prototype",
        summary: "A prototype for launching browser tasks through an AI assistant from a simple web interface.",
        screenshot: "assets/smm-agent.svg",
        tags: ["Browser tasks", "FastAPI", "Playwright", "AI"],
        links: [
          { label: "View API code", url: "https://github.com/KaimiEwl/smm-browser-agent-api", primary: true }
        ]
      }
    ]
  },
  {
    title: "Automation infrastructure",
    summary: "Self-hosted systems and monitoring pages that support automation work.",
    items: [
      {
        title: "Lina Monitor",
        kind: "Dashboard",
        status: "Works now",
        summary: "A monitoring page for checking what an automation system is doing.",
        screenshot: "assets/live-lina-monitor.png",
        tags: ["Monitoring", "Dashboard", "Automation", "Ops"],
        links: [
          { label: "Open Lina Monitor", url: "https://n8ncodex.freen8n.space/lina-monitor/", primary: true }
        ]
      },
      {
        title: "n8n Codex Instance",
        kind: "Private automation server",
        status: "Private login",
        summary: "A self-hosted n8n workspace for workflows, integrations and background processes.",
        screenshot: "assets/n8n-codex-preview.svg",
        tags: ["n8n", "Workflows", "Server", "Cloudflare"],
        links: [
          { label: "Open n8n Codex", url: "https://n8ncodex.freen8n.space/", primary: true },
          { label: "View automation notes", url: "https://github.com/KaimiEwl/ai-automation-case-studies" }
        ]
      },
      {
        title: "Free n8n Instance",
        kind: "Private automation server",
        status: "Private login",
        summary: "A second separated n8n workspace for experiments and production separation.",
        screenshot: "assets/n8n-free-preview.svg",
        tags: ["n8n", "Workflows", "Isolation", "Ops"],
        links: [
          { label: "Open Free n8n", url: "https://freen8n.space/", primary: true },
          { label: "View automation notes", url: "https://github.com/KaimiEwl/ai-automation-case-studies" }
        ]
      },
      {
        title: "Automation Planning Notes",
        kind: "Business notes",
        status: "Case study",
        summary: "Short examples for lead sorting, old lead reactivation and automation planning.",
        screenshot: "assets/case-studies.svg",
        tags: ["Lead sorting", "CRM", "Planning", "Automation"],
        links: [
          { label: "Read automation notes", url: "https://github.com/KaimiEwl/ai-automation-case-studies", primary: true }
        ]
      }
    ]
  }
];
