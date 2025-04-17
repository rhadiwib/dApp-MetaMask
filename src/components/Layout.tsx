import { Outlet, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Layout = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center">
      <header className="border-b border-border w-full flex justify-center">
        <div className="w-full max-w-screen-lg px-4">
          <nav className="py-4 flex justify-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-4 py-2 text-sm font-medium ${isActive ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`
              }
            >
              <span className="flex items-center">
                <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Home
              </span>
            </NavLink>
            <NavLink 
              to="/wallet" 
              className={({ isActive }) => 
                `px-4 py-2 text-sm font-medium ${isActive ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary'}`
              }
            >
              <span className="flex items-center">
                <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <circle cx="16" cy="12" r="2" />
                  <path d="M8 8h4" />
                  <path d="M8 12h2" />
                  <path d="M8 16h4" />
                </svg>
                Wallet
              </span>
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="w-full max-w-screen-lg px-4 py-6 flex flex-1 flex-col items-center">
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;