import React from 'react';
import Header from './Header';
import Footer from './Footer';

import Intro from './Intro';
import Stack from './Stack';
import Work from './Work';
import { Box } from '@radix-ui/themes';
import Team from './Team';

interface HomeProps {
	theme: string;
	changeTheme: () => void;
}
const Home: React.FC<HomeProps> = ({ changeTheme, theme }) => (
	<div className="overflow-hidden">
		<Header changeTheme={changeTheme} theme={theme} />
		<Intro />
		<Stack />
		<Work />
		<Team />
		<Box height="200px" />
		<Footer theme={theme} />
	</div>
);

export default Home;
