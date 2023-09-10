const projects = [
	{
		id: 1,
		title: 'ValoChecker',
		date: '6/2023',
		category: 'Web Application',
		thumbnail: require('@/assets/images/valochecker-logo.png'),
		liveLink: 'https://valochecker.app/',
		repoLink: 'https://github.com/joseph-w-valdez/Valorant-Checker',
		objectives: 'Created a dynamic full-stack application using TypeScript, React, and Tailwind CSS to provide users with up-to-date information from the unofficial Valorant API. Designed an efficient navigation system with React Router and allowed users to easily share and access specific character or weapon details by generating unique URLs.',
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
		challenges: 'Demonstrated problem-solving skills by developing custom functions to efficiently process API data, ensuring user-friendly information. Transitioned from ES5 and step-by-step AJAX to modern React, enhancing code quality and adding new features.',
		images: [
			require('@/assets/images/valochecker-1.gif'),
			require('@/assets/images/valochecker-2.gif'),
			require('@/assets/images/valochecker-3.gif'),
		],
	},
	{
		id: 2,
		title: 'Marvelous',
		date: '3/2023',
		category: 'Web Application',
		thumbnail: require('@/assets/images/mobile-project-2.jpg'),
		liveLink: 'https://marvelous.herokuapp.com/',
		repoLink: 'https://github.com/joseph-w-valdez/marvelous',
		objectives: 'Developed a dynamic full-stack web application, utilizing JavaScript ES6, Node, and React, to enable users to search for and favorite Marvel characters using the official Marvel Comics API. Created a user-friendly frontend with React Router, React Hook Form, and Tailwind CSS, and handled HTTP requests with Axios and file uploads with Multer. Ensured data security with user authentication and authorization powered by JSON Web Tokens and Argon2 password hashing.',
		technologies: ['JavaScript ES6', 'Node.js', 'Express.js', 'Tailwind CSS', 'Axios', 'Multer', 'PostgreSQL'],
		challenges: 'Led a development team to build an Olive Garden fanpage using Next.js 13, TypeScript, and Tailwind. Oversaw project management, including planning, daily standups, code reviews, and task allocation. Designed a custom API with hand-crafted endpoints for efficient data delivery and frontend functionality. Implemented secure user authentication and data tracking using Firebase and MongoDB.',
		images: [
			require('@/assets/images/web-project-2.jpg'),
			require('@/assets/images/web-project-2.jpg'),
		],
	},
	{
		id: 3,
		title: 'Olive Garden Fanpage (in development)',
		date: '7/2023',
		category: 'Web Application',
		thumbnail: require('@/assets/images/ui-project-1.jpg'),
		liveLink: 'https://olive-garden-fanpage.vercel.app/',
		repoLink: 'https://github.com/joseph-w-valdez/olive-garden-fanpage',
		objectives: 'Leading the development of a full-stack Olive Garden fanpage using Next.js 13, TypeScript, and Tailwind. Managing a small team, overseeing planning, daily standups, code reviews, and task allocation. Creating a custom API with hand-crafted endpoints for efficient data delivery and frontend functionality. Implementing secure user authentication and data tracking using Firebase and MongoDB.',
		technologies: ['HTML/CSS', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Firebase', 'MongoDB'],
		challenges: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		images: [
			require('@/assets/images/web-project-2.jpg'),
			require('@/assets/images/web-project-2.jpg'),
		],
	},
	{
		id: 4,
		title: 'ChatApp',
		date: '8/2023',
		category: 'Mobile Application',
		thumbnail: require('@/assets/images/ui-project-2.jpg'),
		liveLink: null,
		repoLink: 'https://github.com/example/chatapp',
		objectives: 'Developed a real-time chat application for seamless communication between users on various platforms. The primary goal was to create a user-friendly, cross-platform messaging experience that prioritizes privacy and security.',
		technologies: ['React Native', 'Firebase', 'Socket.io'],
		challenges: "Faced the challenge of implementing real-time messaging functionality using WebSocket technology and ensuring data security. Additionally, optimized the app's performance for smooth user interactions and responsiveness.",
		images: [
			require('@/assets/images/web-project-2.jpg'),
			require('@/assets/images/web-project-2.jpg'),
			require('@/assets/images/web-project-2.jpg'),
		],
	},
];

export default projects;
