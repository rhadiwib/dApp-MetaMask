import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from './config/wagmi';
import { queryClient } from './config/query';
import { useState, useEffect } from 'react';
import HomePage from './pages/Home';
import WalletPage from './pages/Wallet';
import Layout from './components/Layout';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="theme-provider" data-theme={theme}>
      {children}
      <button 
        className="fixed top-4 right-4 p-2 rounded-full bg-secondary text-secondary-foreground"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
    </div>
  );
};

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="wallet" element={<WalletPage />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;