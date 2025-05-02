export interface Template {
	type: string;
	title: string;
	description: string;
	md: string;
	Languages: string[];
	link: string;
	img: string;
	date: string;
}
export enum ShowCase {
	Projects = './json/projects.json',
	Writings = './json/writings.json',
}
