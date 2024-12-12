<?php
if (!defined('ABSPATH')) exit;

function gtperformance_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
}
add_action('after_setup_theme', 'gtperformance_setup');

function gtperformance_enqueue_scripts() {
    // Enqueue styles
    wp_enqueue_style('gtperformance-style', get_stylesheet_uri());
    wp_enqueue_style('gtperformance-tailwind', get_template_directory_uri() . '/dist/output.css');
    
    // Enqueue scripts
    wp_enqueue_script('gtperformance-react', get_template_directory_uri() . '/dist/main.js', array(), '1.0.0', true);
    
    // Localize script
    wp_localize_script('gtperformance-react', 'wpData', array(
        'restURL' => rest_url(),
        'nonce' => wp_create_nonce('wp_rest'),
        'templateURL' => get_template_directory_uri()
    ));
}
add_action('wp_enqueue_scripts', 'gtperformance_enqueue_scripts');