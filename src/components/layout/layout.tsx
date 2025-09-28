import React, { useState, useEffect,ReactNode } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import './layout.scss';

interface LayoutProps {
    children: ReactNode;
  }
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1025;
      setIsMobile(mobile);
      if (mobile) {
        setIsExpanded(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="layout">
      <Sidebar isExpanded={isExpanded} onToggle={toggleSidebar} isMobile={isMobile} />
      <div className={`main-content ${isExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
        <Header onToggleSidebar={toggleSidebar} isExpanded={isExpanded} />
        <main className="page-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;