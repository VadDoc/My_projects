<?php
/**
 * pearlspa functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package pearlspa
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'pearlspa_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function pearlspa_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on pearlspa, use a find and replace
		 * to change 'pearlspa' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'pearlspa', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		// register_nav_menus(
		// 	array(
		// 		'menu-1' => esc_html__( 'Primary', 'pearlspa' ),
		// 	)
		// );

		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Верхнее меню', 'pearlspa' ),
			)
		);

		register_nav_menus(
			array(
				'menu-2' => esc_html__( 'Наши услуги', 'pearlspa' ),
			)
		);

		register_nav_menus(
			array(
				'menu-3' => esc_html__( 'Готовые программы', 'pearlspa' ),
			)
		);

		register_nav_menus(
			array(
				'menu-4' => esc_html__( 'Меню в футере 1', 'pearlspa' ),
			)
		);

		register_nav_menus(
			array(
				'menu-5' => esc_html__( 'Меню в футере 2', 'pearlspa' ),
			)
		);

		register_nav_menus(
			array(
				'menu-6' => esc_html__( 'Меню мобильное', 'pearlspa' ),
			)
		);



		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'pearlspa_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'pearlspa_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function pearlspa_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'pearlspa_content_width', 640 );
}
add_action( 'after_setup_theme', 'pearlspa_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function pearlspa_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'pearlspa' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'pearlspa' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'pearlspa_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function pearlspa_scripts() {
	wp_enqueue_style( 'pearlspa-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'pearlspa-style', 'rtl', 'replace' );

	wp_enqueue_script( 'pearlspa-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	wp_enqueue_script('pearlspa-header-slider', get_template_directory_uri() . '/js/header-slider.js');
	wp_enqueue_script('pearlspa-order-form', get_template_directory_uri() . '/js/order-form.js');
	wp_enqueue_script('pearlspa-service-order-form', get_template_directory_uri() . '/js/service-order-form.js');
	wp_enqueue_script('pearlspa-mobile-menu', get_template_directory_uri() . '/js/mobile-menu.js');

	if( is_page( '91' ) ) {
		wp_enqueue_script('pearlspa-photo-gallery', get_template_directory_uri() . '/js/photo-gallery.js');
	 }



	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'pearlspa_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

function breadcrumbs() {

	/* === ОПЦИИ === */
	$text['home']     = 'Главная'; // текст ссылки "Главная"
	$text['category'] = '%s'; // текст для страницы рубрики
	$text['search']   = 'Результаты поиска по запросу: %s'; // текст для страницы с результатами поиска
	$text['tag']      = 'Записи с тегом "%s"'; // текст для страницы тега
	$text['author']   = 'Статьи автора %s'; // текст для страницы автора
	$text['404']      = 'Ошибка 404'; // текст для страницы 404
  
	$showCurrent = 1; // 1 - показывать название текущей статьи/страницы, 0 - не показывать
	$showOnHome  = 0; // 1 - показывать "хлебные крошки" на главной странице, 0 - не показывать
	$delimiter   = '<span class="slash">&nbsp;&nbsp;/&nbsp;&nbsp;</span>  '; // разделить между "крошками"
	$before      = '<span class="current">'; // тег перед текущей "крошкой"
	$after       = '</span>'; // тег после текущей "крошки"
	/* === КОНЕЦ ОПЦИЙ === */
  
	global $post;
	$homeLink = get_bloginfo('url') . '/';
	$linkBefore = '<span typeof="v:Breadcrumb">';
	$linkAfter = '</span>';
	$linkAttr = ' itemprop="url" rel="v:url" property="v:title"';
	$link = $linkBefore . '<span itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a' . $linkAttr . ' href="%1$s">%2$s</a></span>' . $linkAfter;
  
	if (is_home() || is_front_page()) {
  
	  if ($showOnHome == 1) echo '<div id="bredcrumbs"><a href="' . $homeLink . '">' . $text['home'] . '</a></div>';
  
	} else {
  
	  echo '<div id="bredcrumbs" xmlns:v="http://rdf.data-vocabulary.org/#">' . sprintf($link, $homeLink, $text['home']) . $delimiter;
  
	  if ( is_category() ) {
		$thisCat = get_category(get_query_var('cat'), false);
		if ($thisCat->parent != 0) {
		  $cats = get_category_parents($thisCat->parent, TRUE, $delimiter);		
		  $cats = str_replace('<a', $linkBefore . '<span itemscope itemtype="http://data-vocabulary.org/Breadcrumb"><a ' . $linkAttr, $cats);
		  $cats = str_replace('</a>', '</a></span>' . $linkAfter, $cats);
		  echo $cats;
		}
		echo $before . sprintf($text['category'], single_cat_title('', false)) . $after;
  
	  } elseif ( is_search() ) {
		echo $before . sprintf($text['search'], get_search_query()) . $after;
  
	  } elseif ( is_day() ) {
		echo sprintf($link, get_year_link(get_the_time('Y')), get_the_time('Y')) . $delimiter;
		echo sprintf($link, get_month_link(get_the_time('Y'),get_the_time('m')), get_the_time('F')) . $delimiter;
		echo $before . get_the_time('d') . $after;
  
	  } elseif ( is_month() ) {
		echo sprintf($link, get_year_link(get_the_time('Y')), get_the_time('Y')) . $delimiter;
		echo $before . get_the_time('F') . $after;
  
	  } elseif ( is_year() ) {
		echo $before . get_the_time('Y') . $after;
  
	  } elseif ( is_single() && !is_attachment() ) {
		if ( get_post_type() != 'post' ) {
		  $post_type = get_post_type_object(get_post_type());
		  $slug = $post_type->rewrite;
		  printf($link, $homeLink . '/' . $slug['slug'] . '/', $post_type->labels->singular_name);
		  if ($showCurrent == 1) echo $delimiter . $before . get_the_title() . $after;
		} else {
		  $cat = get_the_category(); $cat = $cat[0];
		  $cats = get_category_parents($cat, TRUE, $delimiter);
		  if ($showCurrent == 0) $cats = preg_replace("#^(.+)$delimiter$#", "$1", $cats);
		  $cats = str_replace('<a', $linkBefore . '<a' . $linkAttr, $cats);
		  $cats = str_replace('</a>', '</a>' . $linkAfter, $cats);
		  echo $cats;
		  if ($showCurrent == 1) echo $before . get_the_title() . $after;
		}
  
	  } elseif ( !is_single() && !is_page() && get_post_type() != 'post' && !is_404() ) {
		$post_type = get_post_type_object(get_post_type());
		echo $before . $post_type->labels->singular_name . $after;
  
	  } elseif ( is_attachment() ) {
		$parent = get_post($post->post_parent);
		$cat = get_the_category($parent->ID); $cat = $cat[0];
		$cats = get_category_parents($cat, TRUE, $delimiter);
		$cats = str_replace('<a', $linkBefore . '<a' . $linkAttr, $cats);
		$cats = str_replace('</a>', '</a>' . $linkAfter, $cats);
		echo $cats;
		printf($link, get_permalink($parent), $parent->post_title);
		if ($showCurrent == 1) echo $delimiter . $before . get_the_title() . $after;
  
	  } elseif ( is_page() && !$post->post_parent ) {
		if ($showCurrent == 1) echo $before . get_the_title() . $after;
  
	  } elseif ( is_page() && $post->post_parent ) {
		$parent_id  = $post->post_parent;
		$breadcrumbs = array();
		while ($parent_id) {
		  $page = get_page($parent_id);
		  $breadcrumbs[] = sprintf($link, get_permalink($page->ID), get_the_title($page->ID));
		  $parent_id  = $page->post_parent;
		}
		$breadcrumbs = array_reverse($breadcrumbs);
		for ($i = 0; $i < count($breadcrumbs); $i++) {
		  echo $breadcrumbs[$i];
		  if ($i != count($breadcrumbs)-1) echo $delimiter;
		}
		if ($showCurrent == 1) echo $delimiter . $before . get_the_title() . $after;
  
	  } elseif ( is_tag() ) {
		echo $before . sprintf($text['tag'], single_tag_title('', false)) . $after;
  
	  } elseif ( is_author() ) {
		global $author;
		$userdata = get_userdata($author);
		echo $before . sprintf($text['author'], $userdata->display_name) . $after;
  
	  } elseif ( is_404() ) {
		echo $before . $text['404'] . $after;
	  }
  
	  if ( get_query_var('paged') ) {
		if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) echo ' (';
		echo __('Page') . ' ' . get_query_var('paged');
		if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) echo ')';
	  }
  
	  echo '</div>';
  
	}
  } 



// Добавляем файл стилей в тег <head>
add_action('login_head', 'custom_login_page');
 
// Функция, которая подключает наш файл стилей к странице входа
function custom_login_page() {
echo '<link rel="stylesheet" type="text/css" href="' . get_bloginfo( 'stylesheet_directory' ) . '/custom-login-page.css" />';
}


add_filter( 'comment_form_default_fields', 'comment_form_default_add_my_fields' );


/**
 * Удаляет поле "Сайт" из формы комментирования для незарегистрированных пользователей.
 *
 * @param array $fields Дефолтные поля
 *
 * @return array
 */
function comment_form_default_add_my_fields( $fields ) {
	$fields   =  array(
		'author' => '<p class="comment-form-author">' . '<label for="author">' . __( 'Name' ) . ( $req ? ' <span class="required">*</span>' : '' ) . '</label> ' .
					'<input id="author" name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) . '" size="30" maxlength="245"' . $html_req . ' /></p>',
		'email'  => '<p class="comment-form-email"><label for="email">' . __( 'Email' ) . ( $req ? ' <span class="required">*</span>' : '' ) . '</label> ' .
					'<input id="email" name="email" ' . ( $html5 ? 'type="email"' : 'type="text"' ) . ' value="' . esc_attr(  $commenter['comment_author_email'] ) . '" size="30" maxlength="100" aria-describedby="email-notes"' . $html_req  . ' /></p>',
		'url'    => '<p class="comment-form-url"><label for="url">' . __( 'Website' ) . '</label> ' .
					'<input id="url" name="url" ' . ( $html5 ? 'type="url"' : 'type="text"' ) . ' value="' . esc_attr( $commenter['comment_author_url'] ) . '" size="30" maxlength="200" /></p>',
	);
	
	unset( $fields['url'] );

	return $fields;
}