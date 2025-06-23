
    <footer class="bg-slate-800 text-white py-16">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- About -->
                <div>
                    <div class="flex items-center gap-2 mb-4">
                        <span class="text-2xl">📚</span>
                        <span class="text-xl font-bold">منصة التعلم</span>
                    </div>
                    <p class="text-slate-300 mb-4">
                        منصة تعليمية متخصصة في تقديم محتوى تعليمي عالي الجودة باللغة العربية
                    </p>
                    <div class="flex gap-4">
                        <a href="#" class="text-slate-300 hover:text-white transition-colors">📘</a>
                        <a href="#" class="text-slate-300 hover:text-white transition-colors">🐦</a>
                        <a href="#" class="text-slate-300 hover:text-white transition-colors">📧</a>
                        <a href="#" class="text-slate-300 hover:text-white transition-colors">💼</a>
                    </div>
                </div>
                
                <!-- Quick Links -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">روابط سريعة</h3>
                    <ul class="space-y-2">
                        <li><a href="<?php echo home_url(); ?>" class="text-slate-300 hover:text-white transition-colors">الرئيسية</a></li>
                        <li><a href="<?php echo home_url('/courses'); ?>" class="text-slate-300 hover:text-white transition-colors">الدورات</a></li>
                        <li><a href="<?php echo home_url('/about'); ?>" class="text-slate-300 hover:text-white transition-colors">من نحن</a></li>
                        <li><a href="<?php echo home_url('/contact'); ?>" class="text-slate-300 hover:text-white transition-colors">تواصل معنا</a></li>
                    </ul>
                </div>
                
                <!-- Categories -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">التخصصات</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-slate-300 hover:text-white transition-colors">البرمجة</a></li>
                        <li><a href="#" class="text-slate-300 hover:text-white transition-colors">التصميم</a></li>
                        <li><a href="#" class="text-slate-300 hover:text-white transition-colors">الأعمال</a></li>
                        <li><a href="#" class="text-slate-300 hover:text-white transition-colors">التسويق</a></li>
                    </ul>
                </div>
                
                <!-- Contact -->
                <div>
                    <h3 class="text-lg font-semibold mb-4">تواصل معنا</h3>
                    <div class="space-y-2">
                        <p class="text-slate-300">📧 info@edu-platform.com</p>
                        <p class="text-slate-300">📱 +966 50 123 4567</p>
                        <p class="text-slate-300">📍 الرياض، المملكة العربية السعودية</p>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-slate-600 mt-12 pt-8 text-center">
                <p class="text-slate-300">
                    &copy; <?php echo date('Y'); ?> منصة التعلم. جميع الحقوق محفوظة.
                </p>
            </div>
        </div>
    </footer>

    <?php wp_footer(); ?>
</body>
</html>
