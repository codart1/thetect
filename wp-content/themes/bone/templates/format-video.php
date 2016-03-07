<?php
	if ( !isset($size) ) {
		$size = 'md_bone_lg';
	}

	if ( !function_exists('rwmb_meta') ) {
		if ( has_post_thumbnail() )
			md_bone_featured_img( $size );
		return;
	}
     	
	$video_url = md_bone_get_metabox( 'format_video_url' );
	$embed = wp_oembed_get( $video_url, array( 'width' => 820 ) );

	if ($embed == '') {
		md_bone_featured_img( $size );
		return;
	}
?>
<div class="postFormatMedia postFormatMedia--video">
	<div class="responsiveEmbedVideo">
		<?php echo wp_oembed_get( $video_url, array( 'width' => 820 ) ); ?>
	</div>
</div>