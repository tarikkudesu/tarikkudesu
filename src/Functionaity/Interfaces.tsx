import { createContext } from 'react';

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
export enum API {
	Projects = './json/projects.json',
	Writings = './json/writings.json',
	Roadmap = './json/roadmap.json',
	Stack = './json/stack.json',
}

export const workspaceContext = createContext<(value: boolean) => boolean>((_value: boolean) => {
	return _value;
});
