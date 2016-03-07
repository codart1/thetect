<?php
/**
 * Action callback: Add meta tags such as Google Authorship
 */
if ( !function_exists('md_bone_add_header_meta') ){
	function md_bone_add_header_meta(){
		if (is_single()) {
	        global $post;

	        // open graph meta
	        if (has_post_thumbnail($post->ID)) {
	            $post_image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'md_bone_sm' );
	            if (!empty($post_image[0])) {
	                echo '<meta property="og:image" content="' .  esc_attr($post_image[0]) . '" />';
	            }
	        }
	        $excerpt = wp_trim_words( $post->post_content, 30, '...' );
	        echo '<meta property="og:site_name" content="' .  esc_attr(get_bloginfo('name')) . '" />';
	        echo '<meta property="og:title" content="' .  esc_attr($post->post_title) . '" />';
	        echo '<meta property="og:type" content="article" />';
	        echo '<meta property="og:description" content="' . esc_attr($excerpt) . '" />';
	        echo '<meta property="og:url" content="' .  esc_url(get_permalink( $post->ID )) . '" />';

	        // show author meta tag on single pages
	        $post_author = get_the_author_meta('display_name', $post->post_author);
	        if ($post_author) {
	            echo '<meta name="author" content="'.esc_attr($post_author).'">'."\n";
	        }

	        // Google authorship
	        $gplus = get_the_author_meta('gplus', $post->post_author);
			
			if ($gplus) {
				echo '<link href="' . esc_url($gplus) .'" rel="author" />';
			}
	    }

	    // fav icon support
	    if ( ! function_exists( 'has_site_icon' ) || ! has_site_icon() ) {
		    $favicon = md_bone_get_option('favicon', NULL);
			if ( $favicon != NULL ) {
				if ( $favicon['url'] == '' ) { $favicon = NULL; }
			}
			if ( $favicon ) {
				echo '<link rel="shortcut icon" href="'.esc_url($favicon['url']).'" />';
			}
	    }
	}
}
add_filter('wp_head', 'md_bone_add_header_meta', 1);

/**
 * Add social links to user's profile
 */
if ( !function_exists('md_bone_contact_methods') ){
	function md_bone_contact_methods( $contactmethods ) {

		$contactmethods['twitter']   = 'Twitter Username';
		$contactmethods['facebook']  = 'Facebook Username';
		$contactmethods['google']    = 'Google Plus Username';
		$contactmethods['tumblr']    = 'Tumblr Username';
		$contactmethods['instagram'] = 'Instagram Username';
		$contactmethods['pinterest'] = 'Pinterest Username';

		return $contactmethods;
	}
}
add_filter('user_contactmethods','md_bone_contact_methods',10,1);

/**
 * Display date time in human readable format
 */
if ( !function_exists('md_bone_human_datetime') ) {
	function md_bone_human_datetime( $day_limit = 7 ){
		$post_time = get_the_time('U');
		$human_time = '';

		$time_now = date('U');

		// use human time if less than $day_limit days ago (14 days by default)
		// 60 seconds * 60 minutes * 24 hours * $day_limit days
		if ( $post_time > $time_now - ( 60 * 60 * 24 * $day_limit ) ) {
			$human_time = sprintf( esc_html__( '%s ago', 'bone'), human_time_diff( $post_time, current_time( 'timestamp' ) ) );
		} else {
			$human_time = get_the_date();
		}

		echo esc_html($human_time);
	}
}

/**
 * Add custom post class
 */
if ( !function_exists('md_bone_post_class') ){
	function md_bone_post_class( $classes ) {
		global $post;
		if ( !has_post_thumbnail( $post->ID ) ) {
			$classes[] = 'noThumb';
		}
		return $classes;
	}
}
add_filter( 'post_class', 'md_bone_post_class' );

function truncate($string,$length=100,$append="&hellip;") {
  $string = trim($string);

  if(strlen($string) > $length) {
    $string = wordwrap($string, $length);
    $string = explode("\n", $string, 2);
    $string = $string[0] . $append;
  }

  return $string;
}

/**
 * Custom post title word limit
 */
if ( !function_exists('md_bone_title') ){
	function md_bone_title($limit = 20, $echo = true) {
		if ($echo) {
			echo wp_trim_words(get_the_title(), $limit);
		} else {
			return wp_trim_words(get_the_title(), $limit);	
		}
	    
	}
}

/**
 * Custom string character limit, truncate at word
 */
if ( !function_exists('md_bone_truncate') ){
	function md_bone_truncate( $string, $limit = 100) {
		$decoded_string = html_entity_decode($string);
		if (strlen($decoded_string) > $limit) 
		{
		    $decoded_string = wordwrap($decoded_string, $limit);
		    $decoded_string = substr($decoded_string, 0, strpos($decoded_string, "\n"));
		    return htmlentities($decoded_string).'&hellip;';
		}
		return $string;
	}
}

/**
 * Custom post excerpt word limit
 */
if ( !function_exists('md_bone_excerpt') ){
	function md_bone_excerpt($limit = 20, $echo = true) {
		if ($echo) {
			echo wp_trim_words(get_the_excerpt(), $limit);
		} else {
			return wp_trim_words(get_the_excerpt(), $limit);
		}  
	}
}

/**
 * Custom post content word limit
 */
if ( !function_exists('md_bone_content') ){
	function md_bone_content($limit = 80, $echo = true) {
		$content = explode(' ', get_the_content(), $limit);
		if (count($content)>=$limit) {
			array_pop($content);
			$content = implode(" ",$content).'&#8230;';
		} else {
			$content = implode(" ",$content);
		}
		$content = preg_replace('/[.+]/','', $content);
		$content = apply_filters('the_content', $content);
		$content = str_replace(']]>', ']]&gt;', $content);

		if ($echo) {
			echo wp_kses_post($content);
		} else {
			return wp_kses_post($content);
		}
	}
}

/**
 * Read more link
 */
if ( !function_exists( 'md_bone_content_more_link' ) ) {
	function md_bone_content_more_link( $more ){
		$link = sprintf( '<div class="articleReadMore"><a href="%1$s" class="articleReadMore-link btn btn--pill">%2$s</a></div>',
			esc_url( get_permalink( get_the_ID() ) ),
			sprintf( esc_html__( 'Continue reading %s', 'bone' ), '<span class="sr-only">' . get_the_title( get_the_ID() ) . '</span>' )
			);
		return $link;
	}
}
add_filter( 'the_content_more_link', 'md_bone_content_more_link' );
	
/**
 * Prevent scroll on read more link
 */
if ( !function_exists( 'md_bone_remove_more_link_scroll' ) ) {
	function md_bone_remove_more_link_scroll( $link ){
		$link = preg_replace( '|#more-[0-9]+|', '', $link );
		return $link;
	}
}
add_filter( 'the_content_more_link', 'md_bone_remove_more_link_scroll' );

/**
 * Filter callback: Fix search by limiting to posts
 */
if ( !function_exists('md_bone_fix_search') ){
	function md_bone_fix_search($query){
		global $wp_query;
		
		// not in admin and not on bbpress search
		if (!is_admin() && $query->is_search && empty($wp_query->bbp_search_terms)) {
			$query->set('post_type', 'post');
		}
		
		return $query;
	}
}
add_filter('pre_get_posts', 'md_bone_fix_search');

/**
 * Add responsive container to embeds video
 */
if ( !function_exists('md_bone_embed_html') ){
	function md_bone_embed_html( $embed, $url, $attr ) {
		$accepted_providers = array(
			'youtube',
			'vimeo',
			'slideshare',
			'dailymotion',
			'viddler.com',
			'hulu.com',
			'blip.tv',
			'revision3.com',
			'funnyordie.com',
			'wordpress.tv',
		);
		$resize = false;

		// Check each provider
		foreach ( $accepted_providers as $provider ) {
			if ( strstr( $url, $provider ) ) {
				$resize = true;
				break;
			}
		}
		if ( $resize ) {
	    	return '<div class="responsiveEmbedVideo">' . $embed . '</div>';
	    } else {
	    	return $embed;
	    }
	}
}
add_filter( 'embed_oembed_html', 'md_bone_embed_html', 10, 3 );
add_filter( 'video_embed_html', 'md_bone_embed_html' ); // Jetpack

/**
 * Limit number of tags in widget tag cloud
 */
if ( !function_exists('md_bone_tag_widget_limit') ) {
	function md_bone_tag_widget_limit($args){

		//Check if taxonomy option inside widget is set to tags
		if(isset($args['taxonomy']) && $args['taxonomy'] == 'post_tag'){
			$args['number'] = 16; //Limit number of tags
			$args['smallest'] = 12; //Size of lowest count tags
			$args['largest'] = 12; //Size of largest count tags
			$args['unit'] = 'px'; //Unit of font size
			$args['orderby'] = 'count'; //Order by counts
			$args['order'] = 'DESC';
		}

		return $args;
	}
}
add_filter('widget_tag_cloud_args', 'md_bone_tag_widget_limit');

/**
 * Edit default category widget html
 */
if ( !function_exists('md_bone_add_span_cat_count') ) {
	function md_bone_add_span_cat_count($links){
		$links = str_replace('</a> (', '<span>', $links);
		$links = str_replace(')', '</span></a>', $links);
		return $links;
	}
}
add_filter('wp_list_categories', 'md_bone_add_span_cat_count');

/**
 * Generate data-hidpi attribute
 */
if ( !function_exists('md_bone_inline_css_background_img') ) {
	function md_bone_inline_css_background_img($thumb_size = '', $hidpi = true){
		$thumb_url = '';
		$thumb_2x_url = '';
		if ( has_post_thumbnail() ) {
			$thumb_id = get_post_thumbnail_id();
			$thumb_url_array = wp_get_attachment_image_src( $thumb_id, $thumb_size, true );
			$thumb_url = $thumb_url_array[0];
			$high_resolution = md_bone_get_option('high-resolution-switch', '0');
			if (($high_resolution === '1') && $hidpi) {
				$thumb_2x_url = pathinfo($thumb_url, PATHINFO_DIRNAME).'/'.pathinfo($thumb_url, PATHINFO_FILENAME).'@2x.'.pathinfo($thumb_url, PATHINFO_EXTENSION);
			}
		}
		echo 'style="background-image: url('.esc_url($thumb_url).');"';
		if (($thumb_2x_url !== '') && (URL_exists($thumb_2x_url))) {
			echo ' data-hidpi="'.esc_url($thumb_2x_url).'"';
		}
	}
}

/**
 * Check if an URL exists
 */
function URL_exists($url){
   $headers=get_headers($url);
   return stripos($headers[0],"200 OK")?true:false;
}