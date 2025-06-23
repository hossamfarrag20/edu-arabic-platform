
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Users, BookOpen, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-l from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              معلم معتمد ومميز
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              مرحباً، أنا
              <span className="block text-yellow-400">أحمد محمد</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              ابدأ رحلتك التعليمية معي واكتشف عالم المعرفة!
            </p>
            
            <p className="text-lg text-blue-200 max-w-lg mx-auto lg:mx-0">
              أقدم لك محتوى تعليمي عالي الجودة مع أكثر من 10 سنوات من الخبرة في التدريس. 
              انضم إلى آلاف الطلاب الذين حققوا أهدافهم معي.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/student-login">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all hover:scale-105">
                  ابدأ التعلم الآن
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg transition-all">
                  تصفح الدورات
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-500/30">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-yellow-400 ml-2" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <p className="text-blue-200 text-sm">طالب نشط</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6 text-yellow-400 ml-2" />
                  <span className="text-2xl font-bold">25+</span>
                </div>
                <p className="text-blue-200 text-sm">دورة تدريبية</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-yellow-400 ml-2" />
                  <span className="text-2xl font-bold">98%</span>
                </div>
                <p className="text-blue-200 text-sm">معدل النجاح</p>
              </div>
            </div>
          </div>
          
          {/* Teacher Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="المدرس أحمد محمد" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg animate-bounce">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg animate-pulse">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
