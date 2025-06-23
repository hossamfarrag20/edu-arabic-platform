
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-white shadow-lg border-b border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-800">منصة التعلم</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${isActive('/') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              الرئيسية
            </Link>
            <Link 
              to="/courses" 
              className={`font-medium transition-colors ${isActive('/courses') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              الدورات
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${isActive('/contact') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            >
              تواصل معنا
            </Link>
          </nav>
          
          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/student-login">
              <Button variant="outline" className="gap-2">
                <User className="w-4 h-4" />
                دخول الطالب
              </Button>
            </Link>
            <Link to="/teacher-login">
              <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                <User className="w-4 h-4" />
                دخول المدرس
              </Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
