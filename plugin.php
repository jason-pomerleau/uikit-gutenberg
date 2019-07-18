<?php
/**
 * Plugin Name: UIKit-Gutenberg
 * Plugin URI: https://github.com/jasonpomerleau/uikit-gutenberg
 * Description: A group of UIKit Blocks for Gutenberg
 * Author: to be determined
 * Author URI: the be determined
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package TBD
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
