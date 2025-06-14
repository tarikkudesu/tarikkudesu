import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import React, { useState } from 'react';

import Home from './Components/Home';
import Workspace from './Components/WS.tsx';
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
			<Theme appearance={theme} accentColor="teal" grayColor="gray">
				<BrowserRouter>
					<Routes>
						<Route index element={<Home changeTheme={changeTheme} theme={theme} />} />
						<Route path="/ws" element={<Workspace />} />
						<Route
							path="*"
							element={
								<div className="py-24">
									<div className="p-4 py-1 max-w-160 mx-auto text-center text-4xl font-semibold rounded-lg text-red-500 bg-red-700/10">404</div>
								</div>
							}
						/>
					</Routes>
				</BrowserRouter>
				{/* <ThemePanel /> */}
				{/* <ReactQueryDevtools /> */}
			</Theme>
		</QueryClientProvider>
	);
};

export default App;
