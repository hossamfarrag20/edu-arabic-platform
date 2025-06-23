
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Clock, Users, Star, Play } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "مقدمة في البرمجة",
      description: "تعلم أساسيات البرمجة من الصفر حتى الاحتراف مع أمثلة عملية وتطبيقات واقعية",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      price: "150",
      duration: "8 ساعات",
      students: 120,
      rating: 4.8,
      level: "مبتدئ"
    },
    {
      id: 2,
      title: "تطوير المواقع",
      description: "دورة شاملة في تطوير المواقع باستخدام أحدث التقنيات والأدوات المتقدمة",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      price: "250",
      duration: "12 ساعة",
      students: 85,
      rating: 4.9,
      level: "متوسط"
    },
    {
      id: 3,
      title: "تصميم واجهات المستخدم",
      description: "تعلم تصميم واجهات جذابة وسهلة الاستخدام مع أفضل الممارسات في التصميم",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      price: "200",
      duration: "10 ساعات",
      students: 95,
      rating: 4.7,
      level: "متوسط"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">الدورات المتاحة</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            اختر من بين مجموعة متنوعة من الدورات التدريبية المصممة خصيصاً لمساعدتك على تحقيق أهدافك التعليمية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <CardHeader className="p-0 relative">
                <div className="relative overflow-hidden">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {course.level}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {course.students} طالب
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    {course.rating}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">
                    {course.price} ج.م
                  </div>
                  <Link to={`/course/${course.id}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      اشترك الآن
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/courses">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              عرض جميع الدورات
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
