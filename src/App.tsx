import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Theme } from '@radix-ui/themes';
import React, { useState } from 'react';

import Home from './Components/Home';
import Workspace from './Components/WS.tsx';
import './App.css';
import { workspaceContext } from './Functionaity/Interfaces.tsx';

const queryClient = new QueryClient();

const App: React.FC<unknown> = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>('dark');
	const [ws, setWs] = useState<boolean>(false);
	function changeTheme() {
		if (theme === 'light') setTheme('dark');
		else setTheme('light');
	}

	function workspace(value: boolean) {
		setWs(value);
		return value;
	}

	return (
		<QueryClientProvider client={queryClient}>
			<Theme appearance={theme} accentColor="amber" grayColor="gray">
				<workspaceContext.Provider value={workspace}>{ws ? <Workspace /> : <Home changeTheme={changeTheme} theme={theme} />}</workspaceContext.Provider>
			</Theme>
		</QueryClientProvider>
	);
};

export default App;
