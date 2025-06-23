
import React from 'react';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { icon: Award, title: "خبرة 10+ سنوات", description: "في مجال التدريس والتعليم" },
    { icon: Users, title: "500+ طالب", description: "استفادوا من دوراتي التدريبية" },
    { icon: CheckCircle, title: "معتمد دولياً", description: "شهادات معترف بها عالمياً" },
    { icon: Clock, title: "متاح 24/7", description: "دعم فني ومتابعة مستمرة" }
  ];

  const skills = [
    "تطوير المناهج التعليمية",
    "التدريس التفاعلي",
    "استخدام التكنولوجيا في التعليم",
    "تقييم وتطوير الأداء",
    "بناء المحتوى الرقمي"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="التدريس والتعلم" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            {/* Background Shape */}
            <div className="absolute top-8 right-8 w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl -z-10"></div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">من أنا</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                أنا أحمد محمد، مدرس ومطور مناهج تعليمية بخبرة تزيد عن 10 سنوات في مجال التعليم. 
                أؤمن بقوة التعليم التفاعلي وأهمية استخدام التكنولوجيا الحديثة لجعل عملية التعلم أكثر متعة وفعالية.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                رسالتي هي مساعدة الطلاب على تحقيق أهدافهم التعليمية من خلال منهجية مبتكرة وشاملة 
                تركز على الفهم العميق وتطبيق المعرفة في الحياة العملية.
              </p>
            </div>
            
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-4 text-center hover:shadow-lg transition-all">
                  <achievement.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-slate-800 text-sm">{achievement.title}</h3>
                  <p className="text-xs text-slate-600 mt-1">{achievement.description}</p>
                </div>
              ))}
            </div>
            
            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">مجالات خبرتي</h3>
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
