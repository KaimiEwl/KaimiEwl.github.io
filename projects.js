window.PORTFOLIO_WORK_GROUPS = [
  {
    title: "Apps and websites",
    summary: "Useful screens people can open from a phone or browser.",
    items: [
      {
        title: "Easy Weight Loss Profile App",
        kind: "App for phone",
        status: "Works now",
        summary: "A clean weight-loss profile app for goals, daily calories and personal nutrition settings.",
        screenshot: "assets/ewl-app-preview.svg",
        tags: ["iOS / Android style", "Nutrition", "React", "Next.js"],
        links: [
          { label: "Open EWL app", url: "https://kaimiewl.github.io/EWL/profile/", primary: true },
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
          { label: "Open visual demo", url: "https://kaimiewl.github.io/liquid-glass-r3f/", primary: true },
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
        screenshot: "assets/tgm-bot-preview.svg",
        tags: ["Telegram", "Rewards", "Python", "SQLite"],
        links: [
          { label: "View bot code", url: "https://github.com/KaimiEwl/tgm-coin-bot", primary: true }
        ]
      },
      {
        title: "AI Video Render Worker",
        kind: "Video automation machine",
        status: "Major project",
        summary: "A full render pipeline: job queue, VPS worker, AI voice, subtitles, ffmpeg render and upload-ready video output.",
        screenshot: "assets/video-worker-pipeline.svg",
        tags: ["VPS worker", "Queue", "AI voice", "ffmpeg"],
        links: [
          { label: "View worker code", url: "https://github.com/KaimiEwl/ai-video-render-worker", primary: true }
        ]
      },
      {
        title: "BROAGENTS Browser Runtime",
        kind: "Chrome app",
        status: "Demo",
        summary: "A Chrome extension and dashboard that connects multiple AI browser agents so they can work together.",
        screenshot: "assets/broagents-chrome-preview.svg",
        tags: ["Chrome extension", "AI agents", "Dashboard", "Node.js"],
        links: [
          { label: "View runtime code", url: "https://github.com/KaimiEwl/broagents-browser-ai-runtime", primary: true }
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
        kind: "AI influencer system",
        status: "Works now",
        summary: "An AI influencer workspace with two assistant agents, channel monitoring, post drafting and comment help.",
        screenshot: "assets/lina-ai-influencer-preview.svg",
        tags: ["AI influencer", "Monitoring", "Posting", "Comments"],
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
      }
    ]
  }
];
