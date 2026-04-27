module.exports = {
  name: 'Rail Batyrshin',
  title: 'Frontend Engineer',
  location: '<a href="https://maps.app.goo.gl/WpVBhV74LtBPXzYu8">Bishkek, Kyrgyzstan 723510</a>',
  email: '<a href="mailto:rail.batyrshin.js@gmail.com" target="_blank">rail.batyrshin.js@gmail.com</a>',
  phone: '<a href="tel:+996555240064">+996555240064</a>',
  github: '<a href="https://github.com/TangoPJ" target="_blank">TangoPJ</a>',
  linkedin: '<a href="https://www.linkedin.com/in/rail-batyrshin" target="_blank">Rail Batyrshin</a>',
  summary: 'Frontend Engineer with 5 years of experience building production-grade web and mobile products in React, TypeScript, and modern UI frameworks. Delivered multiple platforms from scratch, including A/B testing tools, AI-driven interfaces, and cross-platform apps, and independently shipped a SaaS MVP. Open-source contributor and technical writer.',
  skills: [
    { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next', 'Vue', 'Nuxt', 'React Native', 'Redux', 'Redux Toolkit', 'RTK Query', 'TanStack', 'MSW'] },
    { category: 'Backend', items: ['Node.js / Bun', 'Hono', 'PostgreSQL', 'Drizzle ORM', 'AWS S3'] },
    { category: 'Tooling', items: ['Vite', 'webpack', 'API integration', 'Responsive/Adaptive UI/UX design'] },
  ],
  experience: [
    {
      title: 'Frontend Engineer',
      company: 'MadDevs',
      location: 'Osh, Kyrgyzstan',
      period: 'Jun 2021 - Present',
      projects: [
        {
          project: 'Enji',
          period: '(Aug 2021 - Sep 2021, Sep 2022 - Aug 2023)',
          withSubprojects: false,
          responsibilities: [
            'Collaborated with founders to translate initial business requirements into actionable technical specifications',
            'Developed front-end architecture and implemented responsive UI components for all pages using <b>Vue 3</b> and <b>Quasar</b> framework, enabling a functional MVP for early user testing',
            'Integrated API endpoints to enable smooth data flow between front-end and back-end services, reducing data errors and improving reliability',
            'Ensured cross-browser compatibility and optimized user experience across devices',
            'Conducted unit testing and debugging to maintain functionality and minimize integration issues'
          ]
        },
        {
          project: 'maddevs.io',
          period: '(Sep 2021 - Sep 2022)',
          description: 'Official company website',
          withSubprojects: false,
          responsibilities: [
            'Planned, developed, tested, and maintained the front-end of the company website using <b>Vue 2</b>, <b>Nuxt.js</b>, and <b>SCSS</b>, ensuring responsive design across all devices',
            'Integrated <b>Prismic CMS</b> to allow easy content management and dynamic page updates',
            'Created adaptive and reusable slides for internal pages, improving content consistency and reducing future development time',
            'Integrated third-party APIs (<b>Mailgun</b>, <b>mad-radiator</b>) to automate analytics collection from Google Analytics, Glassdoor, Quora, and Reddit, delivering structured reports to Telegram and Slack',
            'Optimized front-end performance, reducing page load times and improving user experience'
          ]
        },
        {
          project: 'WalletPool',
          period: '(Mar 2023 - Aug 2023, Sep 2023 - Jun 2025)',
          description: 'Platform for team-based cryptocurrency asset management. Worked on front-end development using <b>React</b>, <b>Next.js</b>, <b>Chakra UI</b>, and <b>Web3</b> technologies',
          withSubprojects: true,
          responsibilities: [
            {
              subProject: '<b>Crypto Marry</b>',
              responsibilities: [
                'Developed responsive UI components and dashboard for team crypto management using <b>React</b>, <b>Next.js</b> and <b>Chakra UI</b> components library',
                'Integrated <b>Web3</b> features for wallet interactions and transaction tracking',
                'Ensured smooth performance and cross-browser compatibility'
              ],
            },
            {
              subProject: '<b>Joiny</b>',
              responsibilities: [
                'Built user interfaces and interactive forms for managing crypto assets within teams',
                'Implemented Web3 integrations for secure data transactions and wallet operations',
                'Conducted unit testing and debugging to maintain high reliability'
              ]
            }
          ]
        },
        {
          project: 'Optux',
          period: '(Aug 2023 - Jun 2025)',
          description: 'Platform for A/B testing websites. Developed full front-end from scratch using <b>React</b> and <b>Chakra UI</b>',
          withSubprojects: false,
          responsibilities: [
            'Architected and shipped the full front-end from scratch - main pages, editor, analytics dashboard, and settings - enabling the platform to reach production',
            'Developed a custom iframe-based editor for modifying third-party website pages, enabling live <b>A/B testing</b> functionality',
            'Implemented interactive analytics charts by processing raw backend data, giving users real-time visibility into test results',
            'Mocked backend responses with <b>MSW</b> to enable reliable unit testing independently of API readiness',
            'Collaborated with backend developers on API design to ensure clean data contracts across the stack'
          ]
        },
        {
          project: 'AI True PMF',
          period: '(Jun 2025 - Aug 2025)',
          description: 'Platform for validating startup ideas using AI-driven lead generation and team collaboration. Developed front-end using <b>React</b> and <b>TanStack</b> ecosystem',
          withSubprojects: false,
          responsibilities: [
            'Built interactive dashboards and session pages to manage experiments and track results',
            'Implemented real-time collaboration and online chat using <b>WebSockets</b>',
            'Integrated <b>AI</b> workflows to identify potential client companies and prioritize leads from cold call transcripts',
            'Designed responsive UI components for seamless cross-device experience',
            'Collaborated with backend developers to ensure smooth data flow between AI services, chat, and dashboards'
          ]
        },
        {
          project: 'Vivio',
          period: '(Aug 2025 - Present)',
          description: 'Cross-platform dating platform. Maintained and developed web interfaces, admin panels, and mobile apps using <b>React</b>, <b>React Native</b>, and <b>TanStack</b> ecosystem',
          withSubprojects: false,
          responsibilities: [
            'Resolved Google Play Console 16KB page alignment requirement, enabling successful app publication',
            'Migrated forms to TanStack Form with Zod validation, modernizing the codebase across multiple apps',
            'Implemented new features and performance optimizations across 12 interconnected applications',
            'Maintained consistent functionality across web, admin, and mobile platforms with shared codebase architecture',
          ]
        }
      ]
    }
  ],
  education: [
    {
      degree: 'Master\'s degree',
      specialty: 'Radio Engineering',
      schoolName: 'OmSTU',
      location: 'Russia, Omsk',
      graduationDate: 'Jul 2013'
    }
  ],
  activities: [
    {
      title: '<b>Side Projects</b>',
      descriptions: [
        '<a href="https://app.testless.tech" target="_blank">Testless</a> - Independently designed and shipped a fullstack SaaS MVP in 1 month. AI-powered A/B testing platform: AI-generated landing page variants, cookie-based traffic splitting, real-time analytics with automatic winner detection. Stack: TypeScript, Bun, Hono, PostgreSQL, Drizzle ORM, React, TanStack, Astro, AWS S3, Groq AI',
      ]
    },
    {
      title: '<b>Open-source contributions</b>',
      descriptions: [
        '<a href="https://github.com/chakra-ui/chakra-ui/pull/9388">Chakra UI</a>',
        '<a href="https://github.com/TangoPJ/hono-tanstack-jwt-auth">Hono+Supabase+React+TanStack (My JWT Auth example)</a>',
        '<a href="https://github.com/sneas/cv-template/pull/19">CV Template PR</a>',
        '<a href="https://github.com/vocably/language-learning-tool/pull/72">Vocably — a language-learning tool</a>',
      ]
    },
    {
      title: '<b>Articles</b>',
      descriptions: [
        '<a href="https://medium.com/@rail.batyrshin.js/creation-of-a-custom-hook-for-implementing-reactive-localstorage-in-react-7dbdda263ae9">Custom Hook for reactive localStorage in React</a>',
        '<a href="https://medium.com/@rail.batyrshin.js/code-cuddles-two-approaches-to-implement-slots-in-react-that-i-found-with-code-examples-3acad7990129">Two approaches to implement slots in React</a>',
        '<a href="https://medium.com/@rail.batyrshin.js/the-longest-common-prefix-string-2e2f62c0cacc">The Longest Common Prefix String</a>',
        '<a href="https://maddevs.io/blog/building-a-simple-before-after-comparison-slider-with-vue/">Building a Simple Before-After Comparison Slider with Vue 2</a>',
        '<a href="https://medium.com/@rail.batyrshin.js/abortcontroller-and-event-listener-management-975f63f1aa67">AbortController and Event Listener Management</a>',
      ]
    }
  ]
};
