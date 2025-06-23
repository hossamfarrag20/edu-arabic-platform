
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?> - <?php bloginfo('description'); ?></title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- خطوط عربية -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet">
    
    <?php wp_head(); ?>
    
    <style>
        body { font-family: 'Cairo', sans-serif; direction: rtl; }
        .bg-pattern {
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
    </style>
</head>
<body <?php body_class(); ?>>

<header class="bg-white shadow-lg border-b border-slate-200">
    <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <a href="<?php echo home_url(); ?>" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <span class="text-blue-600 text-2xl">📚</span>
                <span class="text-2xl font-bold text-slate-800">منصة التعلم</span>
            </a>
            
            <!-- Navigation -->
            <nav class="hidden md:flex items-center gap-6">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'main-menu',
                    'menu_class' => 'flex items-center gap-6',
                    'container' => false,
                    'fallback_cb' => function() {
                        echo '<a href="' . home_url() . '" class="font-medium text-slate-600 hover:text-blue-600">الرئيسية</a>';
                        echo '<a href="' . home_url('/courses') . '" class="font-medium text-slate-600 hover:text-blue-600">الدورات</a>';
                        echo '<a href="' . home_url('/contact') . '" class="font-medium text-slate-600 hover:text-blue-600">تواصل معنا</a>';
                    }
                ));
                ?>
            </nav>
            
            <!-- Auth Buttons -->
            <div class="flex items-center gap-3">
                <a href="<?php echo home_url('/student-login'); ?>" class="flex items-center gap-2 border border-slate-300 text-slate-600 hover:bg-slate-50 px-4 py-2 rounded-lg transition-colors">
                    <span>👤</span>
                    دخول الطالب
                </a>
                <a href="<?php echo home_url('/teacher-login'); ?>" class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <span>👨‍🏫</span>
                    دخول المدرس
                </a>
                <button class="md:hidden border border-slate-300 p-2 rounded-lg">
                    <span>☰</span>
                </button>
            </div>
        </div>
    </div>
</header>
