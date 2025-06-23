
<?php get_header(); ?>

<main class="main-content">
    <!-- Hero Section -->
    <section class="hero-section relative overflow-hidden">
        <div class="absolute inset-0 bg-pattern opacity-20"></div>
        
        <div class="container mx-auto px-4 py-20 relative">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Content -->
                <div class="text-center lg:text-right space-y-6">
                    <div class="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                        <span class="text-yellow-400">⭐</span>
                        معلم معتمد ومميز
                    </div>
                    
                    <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
                        مرحباً، أنا
                        <span class="block text-yellow-400">أحمد محمد</span>
                    </h1>
                    
                    <p class="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                        ابدأ رحلتك التعليمية معي واكتشف عالم المعرفة!
                    </p>
                    
                    <p class="text-lg text-blue-200 max-w-lg mx-auto lg:mx-0">
                        أقدم لك محتوى تعليمي عالي الجودة مع أكثر من 10 سنوات من الخبرة في التدريس. 
                        انضم إلى آلاف الطلاب الذين حققوا أهدافهم معي.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="<?php echo home_url('/student-login'); ?>" class="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all hover:scale-105 inline-block text-center">
                            ابدأ التعلم الآن
                        </a>
                        <a href="<?php echo home_url('/courses'); ?>" class="border border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg transition-all inline-block text-center">
                            تصفح الدورات
                        </a>
                    </div>
                    
                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-6 pt-8 border-t border-blue-500/30">
                        <div class="text-center">
                            <div class="flex items-center justify-center mb-2">
                                <span class="text-yellow-400 ml-2">👥</span>
                                <span class="text-2xl font-bold">500+</span>
                            </div>
                            <p class="text-blue-200 text-sm">طالب نشط</p>
                        </div>
                        <div class="text-center">
                            <div class="flex items-center justify-center mb-2">
                                <span class="text-yellow-400 ml-2">📚</span>
                                <span class="text-2xl font-bold">25+</span>
                            </div>
                            <p class="text-blue-200 text-sm">دورة تدريبية</p>
                        </div>
                        <div class="text-center">
                            <div class="flex items-center justify-center mb-2">
                                <span class="text-yellow-400 ml-2">🏆</span>
                                <span class="text-2xl font-bold">98%</span>
                            </div>
                            <p class="text-blue-200 text-sm">معدل النجاح</p>
                        </div>
                    </div>
                </div>
                
                <!-- Teacher Image -->
                <div class="flex justify-center lg:justify-end">
                    <div class="relative">
                        <div class="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-1">
                            <div class="w-full h-full rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                                     alt="المدرس أحمد محمد" 
                                     class="w-full h-full object-cover">
                            </div>
                        </div>
                        <!-- Floating Elements -->
                        <div class="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg animate-bounce">
                            <span class="text-yellow-500">⭐</span>
                        </div>
                        <div class="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg animate-pulse">
                            <span class="text-blue-600">📚</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-slate-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-800 mb-4">من أنا؟</h2>
                <p class="text-xl text-slate-600 max-w-2xl mx-auto">
                    مدرس متخصص في مجال التعليم الإلكتروني مع خبرة واسعة في تقديم محتوى تعليمي متميز
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-xl shadow-lg text-center">
                    <div class="text-4xl mb-4">🎓</div>
                    <h3 class="text-xl font-bold mb-2">خبرة عالية</h3>
                    <p class="text-slate-600">أكثر من 10 سنوات في مجال التدريس والتعليم الإلكتروني</p>
                </div>
                
                <div class="bg-white p-8 rounded-xl shadow-lg text-center">
                    <div class="text-4xl mb-4">💡</div>
                    <h3 class="text-xl font-bold mb-2">محتوى متميز</h3>
                    <p class="text-slate-600">مناهج حديثة ومبتكرة تواكب أحدث التطورات التعليمية</p>
                </div>
                
                <div class="bg-white p-8 rounded-xl shadow-lg text-center">
                    <div class="text-4xl mb-4">🏆</div>
                    <h3 class="text-xl font-bold mb-2">نتائج مضمونة</h3>
                    <p class="text-slate-600">معدل نجاح عالي وتقييمات ممتازة من الطلاب</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Courses Section -->
    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-800 mb-4">الدورات المتاحة</h2>
                <p class="text-xl text-slate-600">اختر الدورة التي تناسب احتياجاتك وابدأ رحلة التعلم</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php
                $courses = array(
                    array(
                        'title' => 'أساسيات البرمجة',
                        'description' => 'تعلم أساسيات البرمجة من الصفر',
                        'price' => '299',
                        'students' => '150',
                        'image' => 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop'
                    ),
                    array(
                        'title' => 'تطوير المواقع',
                        'description' => 'تعلم تطوير المواقع الحديثة',
                        'price' => '399',
                        'students' => '200',
                        'image' => 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop'
                    ),
                    array(
                        'title' => 'قواعد البيانات',
                        'description' => 'إتقان التعامل مع قواعد البيانات',
                        'price' => '349',
                        'students' => '120',
                        'image' => 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop'
                    )
                );
                
                foreach($courses as $course): ?>
                <div class="course-card overflow-hidden">
                    <img src="<?php echo $course['image']; ?>" alt="<?php echo $course['title']; ?>" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2"><?php echo $course['title']; ?></h3>
                        <p class="text-slate-600 mb-4"><?php echo $course['description']; ?></p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold text-blue-600"><?php echo $course['price']; ?> ريال</span>
                            <span class="text-sm text-slate-500">👥 <?php echo $course['students']; ?> طالب</span>
                        </div>
                        <button class="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            اشترك الآن
                        </button>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
