module.exports = {
  name: 'Rail Batyrshin',
  title: 'Web developer',
  location: '<a href="https://www.google.com/maps/place/Osh/@40.5171469,72.7941345,15z/data=!4m15!1m8!3m7!1s0x38bdac017f5a2e85:0xe0a3c61dc6f47b95!2sOsh!3b1!8m2!3d40.5165129!4d72.8033585!16zL20vMDRyMWg2!3m5!1s0x38bdac017f5a2e85:0xe0a3c61dc6f47b95!8m2!3d40.5165129!4d72.8033585!16zL20vMDRyMWg2?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D">Bishkek, Kyrgyzstan 723510</a>',
  email: '<a href="mailto:rail.batyrshin.js@gmail.com" target="_blank">rail.batyrshin.js@gmail.com</a>',
  phone: '<a href="tel:+996555240064">+996555240064</a>',
  summary: 'Web developer with 4 years of experience, specializing in front-end development. Skilled in building responsive user interfaces, implementing interactive features, testing, and debugging. Proficient in TypeScript, React, Next.js, Redux, React Query, TanStack, Redux Toolkit, Vue 2/3, Nuxt.js, Quasar, Chakra UI, MUI, Radix UI and MSW for API mocking. Able to self-manage independent projects and collaborate effectively in team environments.',
  skills: [
    ['HTML'],
    ['CSS'],
    ['JavaScript'],
    ['TypeScript'],
    ['React'],
    ['Next'],
    ['Redux'],
    ['Redux Toolkit'],
    ['RTK Query'],
    ['TanStack'],
    ['MSW'],
    ['Vue'],
    ['Nuxt'],
    ['Vite'],
    ['webpack'],
    ['API integration'],
    ['Responsive/Adaptive UI/UX design'],
    ['Open Source'],
  ],
  experience: [
    {
      title: 'Web Developer',
      company: 'MadDevs',
      location: 'Bishkek, Kyrgyzstan',
      period: '06/2021 - Current',
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
            'Built the entire front-end architecture from scratch, including main pages, editor page, analytics dashboard, and settings page',
            'Developed a custom iframe-based editor for modifying third-party website pages, enabling live <b>A/B testing</b> functionality',
            'Implemented dynamic data visualization for analytics, processing backend data to generate interactive charts and graphs',
            'Closely collaborated with backend developers to design API interactions and ensure smooth data flow',
            'Wrote unit tests using <b>MSW</b> to mock backend responses and ensure front-end reliability',
            'Deployed the initial production version, enabling early user testing and feedback'
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
      ]
    }
  ],
  education: [
    {
      degree: 'Master degree',
      specialty: 'Radio Engineering',
      schoolName: 'OmSTU',
      location: 'Russia, Omsk',
      graduationDate: '07/2013'
    }
  ],
  activities: [
    {
      title: '<b>Open-source contributions</b>',
      descriptions: [
        '<a href="https://github.com/chakra-ui/chakra-ui/pull/9388">Chakra UI</a>',
        '<a href="https://github.com/TangoPJ/hono-tanstack-jwt-auth">Hono+Supabase+React+TanStack (My JWT Auth example)</a>',
        '<a href="https://github.com/sneas/cv-template/pull/19">CV Template PR</a>',
      ]
    },
    {
      title: '<b>Articles</b>',
      descriptions: [
        '<a href="https://medium.com/@rail.batyrshin.js/creation-of-a-custom-hook-for-implementing-reactive-localstorage-in-react-7dbdda263ae9">Custom Hook for reactive localStorage in React</a>',
        '<a href="https://medium.com/@rail.batyrshin.js/code-cuddles-two-approaches-to-implement-slots-in-react-that-i-found-with-code-examples-3acad7990129">Two approaches to implement slots in React</a>',
        '<a href="https://medium.com/@rail.batyrshin.js/the-longest-common-prefix-string-2e2f62c0cacc">The Longest Common Prefix String</a>',
        '<a href="https://maddevs.io/blog/building-a-simple-before-after-comparison-slider-with-vue/">Building a Simple Before-After Comparison Slider with Vue 2</a>',
      ]
    }
  ]
};
