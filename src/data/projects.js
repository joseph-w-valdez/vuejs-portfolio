const projects = [
	{
		id: 1,
		title: 'ValoChecker',
		date: '6/2023',
		categories: ['Web Application', 'Completed', 'Personal Project'],
		thumbnail: require('@/assets/images/valochecker-logo.gif'),
		liveLink: 'https://valochecker.app/',
		repoLink: 'https://github.com/joseph-w-valdez/Valorant-Checker',
		objectives1: 'My objective for this project was to create a dynamic and user-friendly full-stack application using modern technologies like TypeScript, React, and Tailwind CSS. The goal was to offer Valorant enthusiasts a convenient and efficient way to access up-to-date game information from the unofficial Valorant API. I aimed to eliminate the need for players to download the game, scour through YouTube videos, search for online articles, or wait for large patches to experience new content firsthand.',
		objectives2:'To achieve this, I designed a robust navigation system using React Router, enabling users to easily share and access specific character or weapon details through dynamically generated URLs. Additionally, I wanted to showcase my problem-solving skills by developing custom functions to efficiently process API data, ensuring a user-friendly experience.',
		challenges1: 'This application was very first web application built with pure HTML, CSS, and ES5 JavaScript with step-by-step AJAX methods. I came back to revamp this project and modernize it by  from a basic HTML, CSS, and ES5 JavaScript structure to a modern ES6 JavaScript, React, and TypeScript architecture. This transition required a thorough understanding of the principles behind these technologies and the ability to refactor existing code effectively.',
		challenges2: 'Additionally, ensuring seamless navigation within the application posed its own set of challenges. Designing a dynamic URL generation system with React Router required meticulous planning and implementation to provide users with an intuitive and efficient way to access specific game content. Despite these challenges, the project ultimately proved to be a valuable learning experience, allowing me to showcase my adaptability and growth as a developer. It reinforced the importance of staying up-to-date with modern coding practices and the satisfaction of delivering a polished, user-centric application.',
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
		images: [
			require('@/assets/images/valochecker-1.gif'),
			require('@/assets/images/valochecker-2.gif'),
			require('@/assets/images/valochecker-3.gif'),
		],
	},
	{
		id: 2,
		title: 'Valdez Eye Center',
		date: '8/2023',
		categories: ['Web Application', 'Completed', 'Professional Freelance'],
		thumbnail: require('@/assets/images/valdezeyecenter-logo.gif'),
		liveLink: 'https://valdezeyecenter.net',
		repoLink: 'https://github.com/joseph-w-valdez/valdezeyecenter',
		objectives1: "In this project, I created a tailored web application that prominently showcases their eye clinic's location, staff, services, mission, and easy contact options. My primary aim was to not only meet their requested specifications but to also exceed their expectations. I developed a dynamic and feature-rich platform using cutting-edge technologies such as TypeScript, React, and Next.js 13. A key aspect of this objective was establishing a strong client relationship, ensuring open communication, and actively involving them in the development process for both design and features.",
		objectives2: "The key tenets revolved around three core pillars: user experience, performance, and functionality. I dedicated my efforts to designing an intuitive and visually appealing interface that ensured a seamless experience for users, helping them easily understand the clinic's capabilities, services, and how to locate their clinic and surgery centers. Scalability was a top priority, enabling the platform to accommodate growth and future maintenance needs.",
		challenges1: "Throughout this project, the goal was to align the web application with the clinic's vision by consistently updating content to meet their specific requirements and preferences. This required frequent coordination with the clinic's team to incorporate new information, service updates, and changes in locations or contact details. The challenge extended beyond mere updates; it encompassed preserving the quality and cohesiveness of the application while swiftly adapting to evolving client expectations. Successfully addressing this challenge emphasized the significance of efficient content management systems and an adaptable development approach capable of accommodating the clinic's ever-changing needs.",
		technologies: ['React', 'TypeScript', 'Next.js 13', 'Tailwind CSS','Material UI', 'Google Maps', 'Vercel'],
		images: [
			require('@/assets/images/valdezeyecenter-1.gif'),
			require('@/assets/images/valdezeyecenter-2.gif'),
		],
	},
	{
		id: 3,
		title: 'Marvelous',
		date: '3/2023',
		categories: ['Web Application', 'Completed', 'Personal Project'],
		thumbnail: require('@/assets/images/marvelous-logo.gif'),
		liveLink: null,
		repoLink: 'https://github.com/joseph-w-valdez/marvelous',
		objectives1: "The primary goal of this project was to create a dynamic, full-stack web application using modern technologies. I aimed to build a user-friendly platform that leverages the official Marvel Comics API, enabling users to search for and favorite various Marvel characters. To achieve this, I focused on the frontend, employing React, React Router, and React Hook Form for an interactive and efficient user interface. Additionally, I utilized Axios for handling HTTP requests and Multer for seamless file uploads.",
		objectives2: "This project served as the final milestone in my web development program, encapsulating the culmination of my learning journey. Over the course of one week, I dedicated myself to in-depth research on the chosen technologies and independently implemented them. The key objective was to create a functional and secure web application that not only met the requirements but also demonstrated my proficiency in web development. One of the highlights of this project was the integration of user authentication and authorization mechanisms powered by JSON Web Tokens and Argon2 password hashing. The end goal was to present this application not only to my class but also to a broader audience within the institution, showcasing my growth and skills as a web developer.",
		challenges1: "Developing this dynamic web application posed several challenges, particularly in integrating various technologies seamlessly. One notable hurdle was the coordination between the frontend and backend components to ensure smooth data flow and user interactions. This required a deep understanding of React, React Router, and state management, as well as effective communication between frontend and backend using Axios for HTTP requests. Additionally, implementing user authentication and authorization with JSON Web Tokens and Argon2 password hashing demanded rigorous attention to security practices, ensuring user data remained protected.",
		challenges2: "The time constraint of one week for this final project presented its own set of challenges. The compressed timeline required intensive research, rapid decision-making, and efficient implementation. Learning and applying new technologies, such as Multer for file uploads and pg as the PostgreSQL client library, within this timeframe was a demanding task. Moreover, creating a user-friendly and aesthetically pleasing frontend with Tailwind CSS while ensuring it seamlessly interacted with the backend was a challenge in design and development synchronization. Despite these challenges, the project served as a valuable test of my ability to learn and adapt quickly, which is a crucial skill in the ever-evolving field of web development.",
		technologies: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Axios', 'Multer', 'PostgreSQL'],
		images: [
			require('@/assets/images/marvelous-1.gif'),
			require('@/assets/images/marvelous-2.gif'),
			require('@/assets/images/marvelous-3.gif'),
		],
	},
	{
		id: 4,
		title: 'Olive Garden Fanpage',
		date: '7/2023',
		categories: ['Web Application', 'In Development', 'Collaboration Project'],
		thumbnail: require('@/assets/images/olive-garden-fanpage-logo.png'),
		liveLink: 'https://olive-garden-fanpage.vercel.app/',
		repoLink: 'https://github.com/joseph-w-valdez/olive-garden-fanpage',
		objectives1: "The primary objective of this ongoing project is to lead the development of a comprehensive full-stack fanpage for Olive Garden. Leveraging Next.js 13, TypeScript, and Tailwind, we aimed to create an engaging and feature-rich web application that captures the essence of the brand. Central to this objective was the direction of a small team, overseeing all phases of the project. This encompassed meticulous planning, daily standups, code reviews, and efficient task allocation among team members to optimize workflow. My goal was to ensure the successful development of a user-friendly and interactive fanpage that resonated with Olive Garden enthusiasts.",
		objectives2: "An essential aspect of this project was the creation of a custom API from the ground up, featuring hand-crafted endpoints tailored to deliver data and facilitate seamless front-end functionality. Additionally, I spearheaded the implementation of robust authentication mechanisms using Firebase, AWS DynamoDB, and Prisma to manage and track user data securely. This objective was driven by the need to provide a personalized and secure experience for users of the Olive Garden fanpage.",
		challenges1: "Leading this ongoing project presented several significant challenges, particularly in managing a small team and coordinating all project phases. The responsibility of daily standups, code reviews, and task allocation required effective communication and project management skills. Ensuring that team members felt supported with clear goals was a constant challenge that demanded continuous attention and adaptability. Thorough planning was crucial, from creating the overall project steps to crafting detailed Figma specifications, setting up development environments, and creating structured issue lists with relevant tasks and branches.",
		challenges2: "An ongoing project of this nature inevitably encountered technical challenges that required my direct involvement. Handling the more complex aspects of the code and stepping in for bug fixing and polishing were regular tasks. I provided assistance and guidance to team members as needed, particularly when they requested help or submitted pull requests. Maintaining a clear vision and timeline for project milestones was another challenge that demanded constant monitoring and adjustment. Despite these challenges, my goal was to ensure the project's success by fostering a collaborative and efficient development environment while delivering a polished experience.",
		technologies: ['React', 'TypeScript', 'Next.js 13', 'Tailwind CSS', 'Vercel', 'Firebase', 'MongoDB', 'Google Maps API'],
		images: [
			require('@/assets/images/olive-garden-fanpage-1.gif'),
			require('@/assets/images/olive-garden-fanpage-2.gif'),
		],
	},
	{
		id: 5,
		title: 'DuelingBookEnhanced',
		date: '9/2023',
		categories: ['Web Extension', 'Completed', 'Collaboration Project'],
		thumbnail: require('@/assets/images/duelingbookenhanced-logo.gif'),
		liveLink: 'https://chrome.google.com/webstore/detail/duelingbookenhanced/hccoembadcmbnmldjjiijababfoppcel',
		repoLink: 'https://github.com/alexjraymond/DuelingBookEnhanced',
		objectives1: "The Dueling Book Enhanced project aims to significantly improve the user experience on DuelingBook by providing a Chrome extension that streamlines gameplay. The most prominent feature is the implementation of convenient hotkeys, empowering users to effortlessly execute various in-game actions. These actions include viewing their graveyard, main deck, or extra deck, as well as swiftly sending cards to specific zones for activation, retrieval, or discarding. Additionally, the extension offers features like a dark mode for enhanced visual comfort and automatic intro movie skipping. By enhancing the core functionalities of DuelingBook, this project seeks to make online dueling more efficient and enjoyable for its users.",
		objectives2: "Another key objective is to ensure seamless accessibility for its users. This Chrome extension is designed to simplify the user interface and save time during gameplay. With features like auto-connect, users can effortlessly log in and connect to the main menu or the last screen they were on. By automating these processes, the project aims to eliminate unnecessary clicks and waiting times, thus enhancing the overall efficiency of the DuelingBook platform. Through these objectives, the project strives to make dueling more convenient and enjoyable for both new and experienced users.",
		challenges1: "One of the primary challenges encountered during the development of the Dueling Book Enhanced project was the need to delve into the intricacies of working with webpack and building a browser extension. Given that the project hinges on the creation of a Chrome extension, it necessitated a comprehensive understanding of webpack to ensure the extension's compatibility and stability across various browsers and withstand the ever-evolving landscape of DuelingBook updates. ",
		challenges2: "Another challenge is community engagement and user adoption. While the extension offers valuable enhancements to the DuelingBook platform, attracting users and building a supportive community around the project can be challenging. Effective communication and promotion of the extension's features and benefits are essential to encourage users to install and use it. Additionally, user feedback is vital for ongoing development and improvement, but encouraging users to provide feedback and actively participate in the project's development can be a hurdle. Striking a balance between addressing user requests and maintaining the project's vision presents a continuous challenge for the development team. ",
		technologies: ['React', 'TypeScript', 'Web Extension', 'Tailwind', 'Webpack', 'css loader', 'file loader'],
		images: [
			require('@/assets/images/duelingbookenhanced-1.gif'),
			require('@/assets/images/duelingbookenhanced-2.gif'),
			require('@/assets/images/duelingbookenhanced-3.gif'),
		],
	},
	{
		id: 6,
		title: 'ChatApp',
		date: '8/2023',
		categories: ['Mobile Application', 'Completed', 'Collaboration Project'],
		thumbnail: require('@/assets/images/mobile-project-2.jpg'),
		liveLink: null,
		repoLink: 'https://github.com/joseph-w-valdez/react-native-chat',
		objectives1: "The central objective of this project was to develop a real-time chat application that facilitated seamless communication among users across various platforms. Our primary goal was to create a user-friendly messaging experience that transcended device boundaries, emphasizing privacy and security as paramount principles. This endeavor sought to provide users with a versatile, cross-platform messaging solution that prioritized their communication needs while safeguarding their data.",
		objectives2: "Collaborating with a friend in a hack-a-thon format over the span of 2 days, we undertook the challenge of learning the basics of React Native to demonstrate our ability to communicate, coordinate, and integrate as web developers with the mobile development team. The primary focus was to gain proficiency in React Native and its unique characteristics, enabling us to bridge the gap between web and mobile development. This objective was not only about developing the chat application but also about expanding our skillset and showcasing our adaptability as developers capable of working across different platforms.",
		challenges1:"One of the central challenges in this project was delving into the world of React Native, which presented a unique set of hurdles as we transitioned from web development to mobile application development. Adapting our web development skills to the mobile environment while understanding the idiosyncrasies of React Native architecture was a significant learning curve. Balancing our familiarity with React against the intricacies of React Native was essential to demonstrate our capability to bridge the gap between web and mobile development. This challenge required us to rapidly acquire new knowledge and adapt our coding practices to showcase our ability to deliver a robust chat application for potential seamless integration with mobile platforms.",
		technologies: ['React Native', 'React','Firebase', 'Socket.io'],
		images: [
			require('@/assets/images/chatApp-1.gif'),
		],
	},
];

export default projects;
