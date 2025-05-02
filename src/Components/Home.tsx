import React from 'react';
import Header from './Header';
import Footer from './Footer';

import Intro from './Intro';
import Stack from './Stack';
import Work from './Work';
import { Box } from '@radix-ui/themes';

interface HomeProps {
	changeTheme: () => void;
}
const Home: React.FC<HomeProps> = ({ changeTheme }) => (
	<div className='overflow-hidden'>
		<Header changeTheme={changeTheme} />
		<Box className="relative">
			<Box height="200px" width="200px" className="opacity-25 absolute" top="0px" left="50%" style={{ borderColor: 'var(--gray-9)', borderWidth: 1, borderRadius: '50%', transform: 'translateX(-50%)' }}></Box>
			<Box height="400px" width="400px" className="opacity-25 absolute" top="0px" left="50%" style={{ borderColor: 'var(--gray-9)', borderWidth: 1, borderRadius: '50%', transform: 'translateX(-50%)' }}></Box>
			<Box height="600px" width="600px" className="opacity-25 absolute" top="0px" left="50%" style={{ borderColor: 'var(--gray-9)', borderWidth: 1, borderRadius: '50%', transform: 'translateX(-50%)' }}></Box>
			<Box height="1000px" width="1000px" className="opacity-25 absolute" top="0px" left="50%" style={{ borderColor: 'var(--gray-9)', borderWidth: 1, borderRadius: '50%', transform: 'translateX(-50%)' }}></Box>
		</Box>
		<Intro />
		<Stack />
		<Work />
		<Box height='200px' />
		<Footer />
	</div>
);

export default Home;
