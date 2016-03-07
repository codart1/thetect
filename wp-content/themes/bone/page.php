<?php
$article_schema = '';
$article_body_schema = '';
$single_layout = md_bone_get_single_layout();
$sidebar_position = md_bone_get_metabox( 'page-sidebar-position', 'none' );
if ($sidebar_position == 'default') {
	$sidebar_position = md_bone_get_option('single-sidebar-position', 'right');
}
$review_switch = md_bone_get_metabox( 'review_switch', '0' );
if ($review_switch == '1') {
    $article_schema = 'itemscope itemtype="http://schema.org/Review" ';
    $article_body_schema = 'itemprop="reviewBody" ';
} else {
    $article_schema = 'itemscope itemtype="http://schema.org/Article" ';
    $article_body_schema = 'itemprop="articleBody" ';
}
$sticky_sidebar = md_bone_get_option('sticky-sidebar', '1');
$main_classes = '';
$sidebar_classes = '';
if($sidebar_position == 'right') {
	$main_classes .= ' hasRightSidebar';
	$sidebar_classes .= ' sidebar--right';
} else {
	$main_classes .= ' hasLeftSidebar';
	$sidebar_classes .= ' sidebar--left';
}
if($sticky_sidebar) {
	$sidebar_classes .= ' js-sticky-sidebar';
}
$post_classes = array(
	'pageTemplate',
);
if ( has_post_thumbnail() ) {
	$thumb_id = get_post_thumbnail_id();
	$thumb_url_array = wp_get_attachment_image_src( $thumb_id, 'full', true );
	$thumb_url = $thumb_url_array[0];
} else {
	$thumb_url = '';
}
get_header(); ?>

<?php if (have_posts()) : the_post(); ?>
<main class="layoutBody">
	<article <?php echo esc_attr($article_schema); post_class($post_classes); ?>>
		
		<div class="pageMasthead">
			<?php if ($thumb_url != '') { ?>
			<div class="o-backgroundImg o-backgroundImg--dimmed" <?php echo 'style="background-image: url('.esc_url($thumb_url).')"'; ?>></div>
			<?php } ?>
			<h1 itemprop="name" class="pageMasthead-title"><?php the_title(); ?></h1>
		</div>

	<?php if ( $sidebar_position === 'none' ) { ?>
		<div class="container">
			<div class="layoutContent clearfix">
				<div class="contentWrap">

					<div <?php echo esc_attr($article_body_schema); ?>class="bodyCopy">
						<?php the_content(); ?>
					</div>
					
					<?php md_bone_post_pagination(); ?>

					<?php md_bone_review_score(); ?>
				</div>

				<?php
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;
				?>
			</div>
		</div>
	<?php } else { ?>
		<div class="container">
			<div class="layoutContent clearfix">

				<div class="layoutContent-main<?php echo esc_attr($main_classes); ?>">
						
					<div <?php echo esc_attr($article_body_schema); ?>class="bodyCopy">
						<?php the_content(); ?>
					</div>
					
					<?php md_bone_post_pagination(); ?>

					<?php md_bone_review_score(); ?>

					<?php
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;
					?>

				</div><!-- end layoutContent-main -->
				
				<aside id="mdSidebar" class="layoutContent-sidebar sidebar<?php echo esc_attr($sidebar_classes); ?>">
					<?php get_sidebar(); ?>
				</aside>

			</div><!-- end layoutContent -->
		</div><!-- end container -->
	<?php } ?>

	</article>
</main>
<?php endif; ?>

<?php if (is_active_sidebar('adsidebar-2')) { ?>
	<div class="adSidebar adSidebar--2">
	<?php dynamic_sidebar('adsidebar-2'); ?>	
	</div>
<?php } ?>

<?php get_footer();