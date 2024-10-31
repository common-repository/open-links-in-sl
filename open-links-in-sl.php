<?php
/**
 * @package Open_SL_Links
 * @version 0.10
 */

/**
 * Plugin Name:       Open Links in SL
 * Description:       Have your links to Second Life&copy; locations, groups, and profiles open in SL from your website. Simply activate plugin to use. Your SL links will open inside your viewer on click.
 * Version:           0.10
 * Requires at least: 5.0
 * Requires PHP:      7.0
 * Author:            Code Rocket Studios, LLC
 * Author URI:        https://coderocket.studio/second-life/
 * License:           GPL v3 or later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.en.html
 * Text Domain:       open-links-in-sl
 */

 /* Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed. */
 
function open_sl_links_enqueue_script() {
    wp_enqueue_script('open_sl_links', plugin_dir_url(__FILE__) . 'open-links-in-sl.js', array('jquery'), '0.7', true);
}
add_action( 'wp_enqueue_scripts', 'open_sl_links_enqueue_script' );