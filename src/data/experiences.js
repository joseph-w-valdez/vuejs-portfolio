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
					'Led frontend architecture across three distinct runtime environments — Chrome Extensions, Desktop Safari, and iOS Safari. Ensured consistent behavior, predictable performance, and partner-aligned experiences across platforms that traditionally diverge heavily in APIs, lifecycle behavior, and security constraints.',
					'Coordinated with backend, QA, PM, and product design to define specifications, reduce ambiguity, and guide features from exploration → planning → delivery.',
					'Provided architectural oversight and senior code reviews across multiple teams, promoting code clarity, shared patterns, and maintainable systems.',
				],
			},
			{
				title: 'AI Conversation Page (AICP) Injection System',
				description: [
					'Architected and led development of AICP, enabling Wildfire\'s cashback ecosystem to function inside major AI platforms such as ChatGPT, Gemini, and Claude.',
					'Built product-entity detection and decoration logic adapted for AI chat interfaces rather than traditional SERPs.',
					'Implemented automated cashback activation flows compatible with diverse partner requirements.',
					'Integrated AICP into shared extension templates to ensure rapid adoption across partner extensions with minimal integration overhead.',
					'Designed with remote configuration controls to enable updates without client-side releases.',
				],
			},
			{
				title: 'Host App Authentication Flows (Swift + Safari Web Extension Handler)',
				description: [
					'Contributed Swift and extension-handler logic enabling automated login across Citi\'s iOS application and the Safari Web Extension.',
					'Designed secure cross-process communication between host app ↔ extension.',
					'Reduced friction during activation and ensured authentication reliability across devices and app states.',
				],
			},
			{
				title: 'AI-Assisted Engineering Practices',
				description: [
					'Used Claude, Cursor, and Copilot as amplification tools — not replacements — to evaluate design approaches, stress-test architectural decisions, and improve development velocity while maintaining full ownership of correctness and system integrity.',
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
				title: 'Accessibility (ADA / WCAG 2.1 AA) Compliance for Citi',
				description: [
					'Executed full accessibility remediation in partnership with TPGI auditors, resolving issues across:',
					'semantic structure',
					'keyboard navigation',
					'aria-live and announcement behavior',
					'focus movement and trap prevention',
					'screen reader interaction patterns',
					'This effort established reusable accessible patterns now shared across partner templates.',
				],
			},
			{
				title: 'Cross-Platform Template Rebuild & Parity Enforcement',
				description: [
					'Rebuilt shared Chrome/Safari/iOS extension templates to eliminate years of drift and inconsistent behaviors. This work:',
					'dramatically improved code parity',
					'reduced bugs caused by platform divergence',
					'simplified onboarding for new engineers',
					'enabled future features to be implemented once and deployed everywhere',
					'(This is the foundation that later enabled the DSL/SSR system.)',
				],
			},
			{
				title: 'CI/CD & Release Automation',
				description: [
					'Maintained and expanded GitHub Actions CI/CD pipelines:',
					'improved reliability and repeatability of builds',
					'standardized release behavior across partner repos',
					'introduced monorepo tooling for safer, synchronized deployments',
				],
			},
		],
	},
];

export default experiences;
