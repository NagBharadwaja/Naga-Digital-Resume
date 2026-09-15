import type { Resume } from "./types";

export const resume: Resume = {
	name: "Naga Dandibhotla",
	title: "Senior Full-Stack Engineer",
	summary:
		"Senior engineer specializing in MERN stack applications, cloud-native delivery, and developer productivity. Experienced in building reliable products with React, Node.js, TypeScript, Docker, AWS, GitHub Actions, and Jenkins, using spec-driven development with GitHub Copilot.",
	contact: {
		email: "naga.dandibhotla@example.com",
		location: "Hyderabad, India",
		website: "https://naga-dandibhotla.dev",
		linkedin: "https://www.linkedin.com/in/naga-dandibhotla",
		github: "https://github.com/naga-dandibhotla",
	},
	skills: [
		{ name: "JavaScript / TypeScript", level: "expert", category: "Languages" },
		{ name: "React", level: "expert", category: "Frontend" },
		{ name: "Node.js / Express", level: "expert", category: "Backend" },
		{ name: "MongoDB", level: "advanced", category: "Data" },
		{ name: "Docker", level: "advanced", category: "DevOps" },
		{ name: "AWS", level: "advanced", category: "Cloud" },
		{ name: "GitHub Actions", level: "advanced", category: "CI/CD" },
		{ name: "Jenkins", level: "advanced", category: "CI/CD" },
		{ name: "GitHub Copilot", level: "advanced", category: "Engineering Practices" },
	],
	experience: [
		{
			company: "Northstar Software Solutions",
			role: "Senior Full-Stack Engineer",
			location: "Remote",
			startDate: "2021-04",
			endDate: "Present",
			description: "Lead engineer for a multi-tenant logistics platform serving enterprise customers.",
			achievements: [
				"Led a five-person team delivering React and Node.js services that reduced shipment-processing time by 35%.",
				"Designed Docker-based workflows on AWS ECS, RDS, S3, CloudFront, and CloudWatch.",
				"Built GitHub Actions pipelines and Jenkins release jobs, cutting deployment time from two hours to 20 minutes.",
				"Introduced spec-driven development with GitHub Copilot, improving acceptance-test coverage and reducing feature lead time by 25%.",
			],
			technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Docker", "AWS", "GitHub Actions", "Jenkins"],
		},
		{
			company: "BluePeak Technologies",
			role: "Full-Stack Engineer",
			location: "Bengaluru, India",
			startDate: "2017-06",
			endDate: "2021-03",
			description: "Developed customer-facing SaaS products and internal engineering tools for financial services teams.",
			achievements: [
				"Delivered modular React interfaces and REST APIs used by more than 10,000 monthly users.",
				"Migrated legacy services to Node.js and MongoDB, improving API response times by 40%.",
				"Containerized applications with Docker and established automated test and deployment pipelines in Jenkins.",
			],
			technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Docker", "Jenkins", "AWS EC2"],
		},
	],
	education: [
		{
			institution: "Jawaharlal Nehru Technological University",
			degree: "Bachelor of Technology",
			field: "Computer Science and Engineering",
			startDate: "2013",
			endDate: "2017",
		},
	],
	projects: [
		{
			name: "SpecFlow Developer Portal",
			description: "An internal portal that turns product specifications into implementation checklists, test cases, and Copilot-ready engineering prompts.",
			technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Docker", "GitHub Actions"],
		},
	],
	certifications: [
		{ name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", date: "2023" },
		{ name: "Docker Certified Associate", issuer: "Mirantis", date: "2022" },
	],
};


