export interface Resume {
	name: string;
	title: string;
	summary: string;
	contact: Contact;
	skills: Skill[];
	experience: Experience[];
	education: Education[];
	projects?: Project[];
	certifications?: Certification[];
}

export interface Contact {
	email: string;
	phone?: string;
	location?: string;
	website?: string;
	linkedin?: string;
	github?: string;
}

export interface Skill {
	name: string;
	level?: "beginner" | "intermediate" | "advanced" | "expert";
	category?: string;
}

export interface Experience {
	company: string;
	role: string;
	location?: string;
	startDate: string;
	endDate?: string;
	description?: string;
	achievements: string[];
	technologies?: string[];
}

export interface Education {
	institution: string;
	degree: string;
	field?: string;
	startDate?: string;
	endDate?: string;
	details?: string[];
}

export interface Project {
	name: string;
	description: string;
	url?: string;
	technologies?: string[];
}

export interface Certification {
	name: string;
	issuer: string;
	date?: string;
	url?: string;
}