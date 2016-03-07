<?php
	$header_sticky = md_bone_get_option('header-sticky', '1');
	$layout_opt = md_bone_get_layout_opt();
?>
<!DOCTYPE html>
<!--[if IE 8]>    <html class="ie8" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?>> <!--<![endif]-->
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />	
	
	<script type="text/javascript">
		var cmConstants = {
			templateUrl: '<?php echo get_template_directory_uri() ?>'
		}
		
		function cmGetImgUrl(name) {
			return cmConstants.templateUrl + '/img/cm/' + name;
		}
	</script>
	
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<!-- siteWrap -->
	<div class="siteWrap">
		<?php
		if(is_active_sidebar('header-sidebar')) { ?>
			<div class="siteHeader-widgetArea">
			<?php dynamic_sidebar('header-sidebar'); ?>
			</div>
		<?php } ?>
		
		<!-- stickyHeader -->
		<div id="cm-sticky-header" class="cm-sticky-header">
			<div class="container">
				<div class="flexbox">
					<div class="flexbox-item cm-sticky-header-logo">
						<img class="cm-sticky-header-logoImg" src="<?php cm_img('logo-thetect-small-white.png') ?>"></img>
					</div>
					<div class="flexbox-item cm-sticky-header-menu">
						<div>MENU <i class="fa fa-chevron-down"></i></div>
					</div>
					<div class="flexbox-item"></div>
				</div>
			</div>
		</div>

		<!-- siteHeader -->
		<header class="siteHeader siteHeader--standard siteHeader--standard--center">
			<div class="siteHeader-content hidden-xs hidden-sm">
				<div class="container">
					<div class="flexbox">
						
						<div class="siteHeader-content-component siteHeader-content-component--center flexbox-item">
							<?php get_template_part('templates/logo'); ?>
						</div>
						
					</div>						
				</div>
			</div>

			<div class="cm-nav">
				<div class="container">
				<?php
				if ( has_nav_menu( 'main-menu' ) ) {
					wp_nav_menu( array(
						'container' => false,
						// 'menu_class' => 'menu clearfix',
						'theme_location' => 'main-menu',
						'fallback_cb' => false,
						'depth' => 4,
					) );
				} else {
					echo '<a href="'.admin_url( 'nav-menus.php' ).'" class="menuSettingLink">'.esc_html__('Set up main navigation', 'bone').'&nbsp;&raquo;</a>';
				}
				?>
				</div>
				
			</div>
		</header>
		<!-- site-header -->