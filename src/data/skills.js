const skills = [
  // Core Languages & Frameworks (Most Important - Daily Use)
  {
    id: 1,
    title: 'TypeScript',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg',
    website: 'https://www.typescriptlang.org/'
  },
  {
    id: 2,
    title: 'React',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/react/react-original.svg',
    website: 'https://reactjs.org/'
  },
  {
    id: 3,
    title: 'JavaScript',
    logo: 'https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg',
    website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  
  // Platform-Specific (High Importance - Current Role)
  {
    id: 4,
    title: 'Chrome Extensions',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/chrome/chrome-original.svg',
    website: 'https://developer.chrome.com/docs/extensions/'
  },
  {
    id: 5,
    title: 'Safari Extensions',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/safari/safari-original.svg',
    website: 'https://developer.apple.com/safari/extensions/'
  },
  {
    id: 6,
    title: 'Swift',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/swift/swift-original.svg',
    website: 'https://www.swift.org/'
  },
  
  // Framework/Platform (Important Projects)
  {
    id: 7,
    title: 'Next.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/nextjs/nextjs-original.svg',
    website: 'https://nextjs.org/'
  },
  {
    id: 8,
    title: 'React Native',
    logo: require('../assets/images/react-native-devicon.png'),
    website: 'https://reactnative.dev/'
  },
  
  // Professional Tools (Work-Specific)
  {
    id: 9,
    title: 'GitHub Actions',
    logo: require('../assets/images/github actions icon.png'),
    website: 'https://github.com/features/actions'
  },
  {
    id: 10,
    title: 'Webpack',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/webpack/webpack-original.svg',
    website: 'https://webpack.js.org/'
  },
  {
    id: 11,
    title: 'Accessibility (WCAG)',
    logo: require('../assets/images/w3c icon.png'),
    website: 'https://www.w3.org/WAI/WCAG21/quickref/'
  },
  
  // Backend (Still Relevant)
  {
    id: 12,
    title: 'Node.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg',
    website: 'https://nodejs.org/en/docs'
  },
  {
    id: 13,
    title: 'Express',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/express/express-original.svg',
    website: 'https://expressjs.com/'
  },
  {
    id: 14,
    title: 'PostgreSQL',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original.svg',
    website: 'https://www.postgresql.org/'
  },
  
  // Styling (Frequently Used)
  {
    id: 15,
    title: 'Tailwind CSS',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg',
    website: 'https://tailwindcss.com/'
  },
  {
    id: 16,
    title: 'MaterialUI',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/materialui/materialui-plain.svg',
    website: 'https://mui.com/'
  },
  {
    id: 17,
    title: 'CSS3',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg',
    website: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    id: 18,
    title: 'HTML5',
    logo: 'https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg',
    website: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
  },
  
  // Services/Other Tools
  {
    id: 19,
    title: 'Firebase',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/firebase/firebase-plain.svg',
    website: 'https://firebase.google.com/'
  },
  {
    id: 20,
    title: 'Socket.IO',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/socketio/socketio-original.svg',
    website: 'https://socket.io/'
  },
  {
    id: 21,
    title: 'Vue.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/vuejs/vuejs-original.svg',
    website: 'https://vuejs.org/'
  },
  {
    id: 22,
    title: 'Docker',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/docker/docker-original.svg',
    website: 'https://www.docker.com/'
  },
  
  // Development Tools
  {
    id: 23,
    title: 'Git',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg',
    website: 'https://git-scm.com/'
  },
  {
    id: 24,
    title: 'VS Code',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original.svg',
    website: 'https://code.visualstudio.com/'
  },
  {
    id: 25,
    title: 'PNPM',
    logo: require('../assets/images/pnpm logo.png'),
    website: 'https://pnpm.io/'
  },
  {
    id: 26,
    title: 'npm',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/npm/npm-original-wordmark.svg',
    website: 'https://www.npmjs.com/'
  },
  
  // Design Tools
  {
    id: 27,
    title: 'Figma',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/figma/figma-original.svg',
    website: 'https://www.figma.com/'
  },
  {
    id: 28,
    title: 'Photoshop',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/photoshop/photoshop-plain.svg',
    website: 'https://www.adobe.com/products/photoshop.html'
  }
];

export default skills;
