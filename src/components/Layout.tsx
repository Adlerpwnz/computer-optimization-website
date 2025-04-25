import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Laptop, Settings, Phone, Globe, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  activeClass?: string;
}

const NavLink = ({ to, children, activeClass = "" }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link to={to}>
      <Button 
        variant={isActive ? "default" : "ghost"} 
        className={`btn-animation relative ${isActive ? activeClass : ''}`}
      >
        {children}
      </Button>
    </Link>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };
  
  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };
  
  useEffect(() => {
    // Check for system preference on initial load
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center space-x-2">
              <Laptop className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold gradient-text">ByAdlerpwnz</span>
            </Link>
            <nav className="hidden md:flex items-center gap-2">
              <NavLink to="/" activeClass="gradient-bg">{language === 'ru' ? 'Главная' : 'Home'}</NavLink>
              <NavLink to="/services" activeClass="gradient-bg">{language === 'ru' ? 'Услуги' : 'Services'}</NavLink>
              <NavLink to="/contact" activeClass="gradient-bg">{language === 'ru' ? 'Контакты' : 'Contact'}</NavLink>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleLanguage} className="btn-animation">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Toggle language</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="btn-animation">
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto py-6 px-4 page-transition">
        {children}
      </main>
      
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
            © 2024 ByAdlerpwnz. {language === 'ru' ? 'Все права защищены' : 'All rights reserved'}.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://t.me/adlerpwnz" className="text-sm text-muted-foreground hover:text-foreground btn-animation">
              Telegram
            </a>
            <a href="https://discord.gg/adlerpwnz" className="text-sm text-muted-foreground hover:text-foreground btn-animation">
              Discord
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
