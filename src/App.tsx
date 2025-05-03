import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { useState } from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // ! remove later

import Home from './Components/Home';
import './App.css';

const queryClient = new QueryClient();

const App: React.FC<unknown> = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>('dark');

	function changeTheme() {
		if (theme === 'light') setTheme('dark');
		else setTheme('light');
	}

	return (
		<QueryClientProvider client={queryClient}>
			<Theme appearance={theme} accentColor="yellow" grayColor="sand">
				<BrowserRouter>
					<Routes>
						<Route index element={<Home changeTheme={changeTheme} />} />
					</Routes>
				</BrowserRouter>
				{/* <ThemePanel /> // ! remove later */}
				{/* <ReactQueryDevtools /> */}
			</Theme>
		</QueryClientProvider>
	);
};

export default App;
