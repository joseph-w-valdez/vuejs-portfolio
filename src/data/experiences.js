const experiences = [
	{
		id: 1,
		company: 'Wildfire Systems',
		position: 'Software Engineer Technical Lead',
		startDate: 'Jan 2025',
		endDate: 'Present',
		location: 'Remote',
		duration: 'Jan 2025 – Present · Remote',
		achievements: [
			{
				title: 'Cross-Platform Extension Architecture & Leadership',
				description: [
					'Led cross-platform extension architecture across Chrome, Safari, and iOS, serving 2M+ users across 20+ partner brands. Architected AI integration systems for ChatGPT, Gemini, and Claude, and provided technical leadership across multiple teams.',
					'Coordinated with backend, QA, PM, and product design to define specifications, reduce ambiguity, and guide features from exploration → planning → delivery.',
					'Provided architectural oversight and senior code reviews across multiple teams, promoting code clarity, shared patterns, and maintainable systems.',
				],
			},
			{
				title: 'AI Conversation Page (AICP) Injection System',
				description: [
					'Architected and led development of AICP, enabling Wildfire\'s cashback ecosystem to function inside major AI platforms such as ChatGPT, Gemini, and Claude.',
					'Built product-entity detection and decoration logic adapted for AI chat interfaces rather than traditional search engine results pages (SERPs).',
					'Implemented automated cashback activation flows compatible with diverse partner requirements.',
					'Integrated AICP into shared extension templates to ensure rapid adoption across partner extensions with minimal integration overhead.',
					'Designed with remote configuration controls to enable updates without client-side releases.',
				],
			},
			{
				title: 'Cross-Platform Template Rebuild & Parity Enforcement',
				description: [
					'Rebuilt shared Chrome, Safari, and iOS extension templates to eliminate multiple years of drift and inconsistent behavior and design principles.',
					'Improved code parity across platforms, reduced bugs caused by divergence, and simplified onboarding for new engineers.',
					'Enabled features to be implemented once and deployed consistently across all supported environments.'
				],
			},
			{
				title: 'Data-Driven Deployment System',
				description: [
					'Architected and implemented a data-driven deployment system to enable rapid, remote, and personalized updates across browser extensions without requiring frequent client releases.',
					'Identified structural limitations in existing deployment workflows, where multi-platform client releases introduced delays, risk, and operational friction, especially for partner-facing features.',
					'Researched and evaluated architectural approaches under browser security, CSP, and platform constraints, assessing tradeoffs between flexibility, safety, and long-term maintainability.',
					'Designed the system to safely render remotely-defined HTML and CSS, incorporating sanitization, caching strategies, and controlled update surfaces to meet Chrome Web Store and App Store requirements.',
					'Coordinated architectural direction with executive leadership and cross-functional teams, aligning risk tolerance, rollout strategy, and long-term platform goals.',
					'Laid the foundation for future capabilities, including faster iteration cycles, targeted personalization, and reduced dependency on store-based release timelines.',
				],
			},
			{
				title: 'Host App Authentication Flows',
				description: [
					'Implemented secure authentication flows between a native iOS host app and the Safari Web Extension Handler to support automatic user login.',
					'Designed and implemented reliable cross-process communication in Swift between the host app and extension, accounting for lifecycle boundaries, app state changes, and failure modes.',
					'Reduced user friction during activation while ensuring authentication correctness across devices, sessions, and extension states.',
				],
			},
			{
				title: 'AI-Assisted Engineering Practices',
				description: [
					'Used AI tools such as Claude, Cursor, ChatGPT, and Copilot to evaluate design approaches, explore implementation options, and accelerate iteration during development.',
					'Maintained full ownership of correctness, security, and architectural decisions by treating AI output as input for reasoning rather than authoritative solutions.',
				],
			},
		],
	},
	{
		id: 2,
		company: 'Wildfire Systems',
		position: 'Software Engineer',
		startDate: 'Nov 2023',
		endDate: 'Jan 2025',
		location: 'Remote',
		duration: 'Nov 2023 – Jan 2025 · Remote',
		achievements: [
			{
				title: 'Core Extension Development Across 20+ Partner Apps',
				description: [
					'Delivered features and platform improvements across more than 20 partner-branded browser extensions with a combined install base of 2M+ users across Chrome, Safari, and iOS Safari.',
					'Ensured consistent behavior across highly heterogeneous environments and partner configurations.',
					'Worked closely with PMs to estimate feasibility, define tradeoffs, and maintain predictable delivery timelines.',
				],
			},
			{
				title: 'Accessibility (ADA / WCAG 2.1 AA) Compliance for Citi Bank',
				description: [
					'Implemented accessibility remediation for Citi Bank partner extensions in collaboration with TPGI auditors, addressing WCAG 2.1 AA violations across semantics, keyboard navigation, focus management, and screen reader behavior.',
					'Evaluated auditor recommendations, identified incorrect or incomplete guidance, and proposed alternative implementations based on independent research and practical testing.',
					'Coordinated directly with TPGI, product management, client success, and engineering leadership to review findings, validate solutions, and align on corrected accessibility approaches.',
					'Advocated for improved accessibility testing practices by introducing physical devices for validation, replacing simulator-only testing to ensure real-world compliance.',
					'Established improved accessibility patterns and standards that informed subsequent partner implementations and template updates.',
				],
			},
			
			{
				title: 'CI/CD & Release Automation',
				description: [
					'Maintained and expanded GitHub Actions pipelines to improve build reliability, standardize release behavior, and reduce deployment risk across partner repositories.',
					'Introduced monorepo tooling and coordinated release workflows to support safer, synchronized deployments across multiple extensions.',
				],
			},
		],
	},
];

export default experiences;
