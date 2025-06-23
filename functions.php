
<?php
// تفعيل دعم WordPress
function edu_theme_setup() {
    // دعم العنوان التلقائي
    add_theme_support('title-tag');
    
    // دعم الصور المميزة
    add_theme_support('post-thumbnails');
    
    // دعم القوائم
    add_theme_support('menus');
    
    // تسجيل القوائم
    register_nav_menus(array(
        'main-menu' => 'القائمة الرئيسية',
        'footer-menu' => 'قائمة التذييل'
    ));
    
    // دعم HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'edu_theme_setup');

// تحميل الأنماط والسكريبتات
function edu_theme_scripts() {
    // تحميل Tailwind CSS
    wp_enqueue_script('tailwind', 'https://cdn.tailwindcss.com', array(), '1.0.0', false);
    
    // تحميل الخطوط العربية
    wp_enqueue_style('cairo-font', 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap');
    
    // تحميل ملف الأنماط الرئيسي
    wp_enqueue_style('edu-theme-style', get_stylesheet_uri());
    
    // إضافة jQuery
    wp_enqueue_script('jquery');
}
add_action('wp_enqueue_scripts', 'edu_theme_scripts');

// إنشاء جداول قاعدة البيانات للدورات والطلاب
function create_edu_tables() {
    global $wpdb;
    
    $charset_collate = $wpdb->get_charset_collate();
    
    // جدول الدورات
    $courses_table = $wpdb->prefix . 'edu_courses';
    $courses_sql = "CREATE TABLE $courses_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        title tinytext NOT NULL,
        description text,
        price decimal(10,2),
        instructor_id mediumint(9),
        students_count int DEFAULT 0,
        created_at datetime DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    ) $charset_collate;";
    
    // جدول التسجيلات
    $enrollments_table = $wpdb->prefix . 'edu_enrollments';
    $enrollments_sql = "CREATE TABLE $enrollments_table (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        student_id mediumint(9) NOT NULL,
        course_id mediumint(9) NOT NULL,
        enrolled_at datetime DEFAULT CURRENT_TIMESTAMP,
        status varchar(20) DEFAULT 'active',
        PRIMARY KEY (id)
    ) $charset_collate;";
    
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($courses_sql);
    dbDelta($enrollments_sql);
}
register_activation_hook(__FILE__, 'create_edu_tables');

// وظائف مساعدة للدورات
function get_course_count() {
    global $wpdb;
    $courses_table = $wpdb->prefix . 'edu_courses';
    return $wpdb->get_var("SELECT COUNT(*) FROM $courses_table");
}

function get_student_count() {
    global $wpdb;
    $enrollments_table = $wpdb->prefix . 'edu_enrollments';
    return $wpdb->get_var("SELECT COUNT(DISTINCT student_id) FROM $enrollments_table");
}

function get_recent_courses($limit = 5) {
    global $wpdb;
    $courses_table = $wpdb->prefix . 'edu_courses';
    return $wpdb->get_results($wpdb->prepare("SELECT * FROM $courses_table ORDER BY created_at DESC LIMIT %d", $limit));
}

// إضافة صفحات مخصصة
function create_custom_pages() {
    $pages = array(
        'student-login' => 'دخول الطالب',
        'teacher-login' => 'دخول المدرس',
        'teacher-dashboard' => 'لوحة تحكم المدرس',
        'register' => 'التسجيل',
        'courses' => 'الدورات',
        'contact' => 'تواصل معنا'
    );
    
    foreach($pages as $slug => $title) {
        $page = get_page_by_path($slug);
        if(!$page) {
            wp_insert_post(array(
                'post_title' => $title,
                'post_name' => $slug,
                'post_status' => 'publish',
                'post_type' => 'page',
                'post_content' => ''
            ));
        }
    }
}
add_action('init', 'create_custom_pages');

// تخصيص قوالب الصفحات
function get_custom_template($template) {
    if(is_page()) {
        $slug = get_post_field('post_name');
        $custom_template = get_template_directory() . '/page-' . $slug . '.php';
        if(file_exists($custom_template)) {
            return $custom_template;
        }
    }
    return $template;
}
add_filter('template_include', 'get_custom_template');

// تسجيل sidebars
function edu_widgets_init() {
    register_sidebar(array(
        'name' => 'الشريط الجانبي',
        'id' => 'sidebar-1',
        'description' => 'الشريط الجانبي الرئيسي',
        'before_widget' => '<div class="widget bg-white p-4 rounded-lg shadow-sm mb-4">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="text-lg font-semibold mb-3">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'edu_widgets_init');

// إضافة دعم RTL
function edu_rtl_support() {
    if(is_rtl()) {
        wp_enqueue_style('edu-rtl', get_template_directory_uri() . '/rtl.css');
    }
}
add_action('wp_enqueue_scripts', 'edu_rtl_support');
?>
