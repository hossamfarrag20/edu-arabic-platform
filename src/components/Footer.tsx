
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Facebook, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">منصة التعلم</span>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              منصة تعليمية متقدمة تهدف إلى تقديم أفضل المحتويات التعليمية للطلاب العرب. 
              نسعى لجعل التعلم ممتعاً وفعالاً من خلال أحدث الطرق التعليمية.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-red-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-green-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-slate-300 hover:text-white transition-colors">
                  الدورات
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">تواصل معنا</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@myeduplatform.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +20 123 456 789
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 منصة التعلم. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
