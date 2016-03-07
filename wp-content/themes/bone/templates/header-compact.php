<?php
	$feat_layout = md_bone_get_option('feat-layout','slider');
	$header_class = ( $feat_layout == 'slider-cover' )? ' siteHeader--transparent': '';
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
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<!-- siteWrap -->
	<div class="siteWrap">

		<!-- siteHeader -->
		<header class="siteHeader siteHeader--compact<?php if ( is_home() ) echo esc_attr($header_class); ?>">

			<div class="siteHeader-nav js-searchOuter">
				<div class="container">
					<div class="flexbox">
						<div class="flexbox-item">
							<div class="menuToggleBtn js-menu-toggle btn btn--circle hidden-sm hidden-md hidden-lg"><i class="fa fa-navicon"></i></div>
							<div class="menuToggleBtn js-menu-toggle btn btn--pill hidden-xs hidden-md hidden-lg"><i class="fa fa-navicon"></i><span><?php esc_html_e('Menu', 'bone'); ?></span></div>
							<div class="siteTitle siteTitle--default siteTitle--compact hidden-xs hidden-sm metaFont">
							<?php get_template_part('templates/logo-compact'); ?>
							</div>

							<nav class="navigation navigation--main navigation--standard hidden-xs hidden-sm">
								<?php
								if ( has_nav_menu( 'main-menu' ) ) {
									wp_nav_menu( array(
										'container' => false,
										'theme_location' => 'main-menu',
										'fallback_cb' => false,
										'depth' => 4,
									) );
								} else {
									echo '<a href="'.admin_url( 'nav-menus.php' ).'" class="menuSettingLink">'.esc_html__('Set up main navigation', 'bone').'&nbsp;&raquo;</a>';
								}
								?>
							</nav>
						</div>

						<div class="flexbox-item u-alignCenter hidden-md hidden-lg">
								<div class="siteTitle siteTitle--small siteTitle--compact metaFont">
								<?php get_template_part('templates/logo-compact-small'); ?>
								</div>
							</div>

						<div class="headerActions flexbox-item">
							<div class="compactSearch">
								<div class="searchToggleBtn btn btn--circle js-searchToggle hidden-sm"><i class="fa fa-search iconSearch"></i><i class="fa fa-times iconClose"></i></div>
								<div class="searchToggleBtn btn btn--pill js-searchToggle hidden-xs hidden-md hidden-lg"><i class="fa fa-search iconSearch"></i><i class="fa fa-times iconClose"></i><span><?php esc_html_e('Search', 'bone'); ?></span></div>
								<?php get_search_form(); ?>
							</div>
							
							<?php
							$header_login = md_bone_get_option('header-login-switch', '1');
							if ($header_login === '1') {
							?>
							<div class="hidden-xs hidden-sm">
								<?php get_template_part('templates/user-actions-compact'); ?>
							</div>
							<?php } ?>
						</div><!-- end headerActions -->
					</div>
				</div>
			</div><!-- end siteHeader-nav -->

			<div class="siteHeader--fixed js-fixedHeader js-searchOuter">
				<div class="container">
					<div class="flexbox">
						<div class="flexbox-item">
							<div class="menuToggleBtn js-menu-toggle hidden-md hidden-lg btn btn--circle"><i class="fa fa-navicon"></i></div>
							<div class="siteTitle siteTitle--default siteTitle--compact hidden-xs hidden-sm metaFont">
							<?php get_template_part('templates/logo-compact'); ?>
							</div>

							<div class="siteTitle siteTitle--compact siteTitle--small hidden-md hidden-lg metaFont">
							<?php get_template_part('templates/logo-compact-small'); ?>
							</div>

							<nav class="navigation navigation--main navigation--standard hidden-xs hidden-sm">
								<?php
								if ( has_nav_menu( 'main-menu' ) ) {
									wp_nav_menu( array(
										'container' => false,
										'theme_location' => 'main-menu',
										'fallback_cb' => false,
										'depth' => 4,
									) );
								} else {
									echo '<a href="'.admin_url( 'nav-menus.php' ).'" class="menuSettingLink">'.esc_html__('Set up main navigation', 'bone').'&nbsp;&raquo;</a>';
								}
								?>
							</nav>
						</div>

						<div class="headerActions flexbox-item">
							<div class="compactSearch">
								<div class="searchToggleBtn btn btn--circle js-searchToggle"><i class="fa fa-search iconSearch"></i><i class="fa fa-times iconClose"></i></div>
								<?php get_search_form(); ?>
							</div>

							<?php
							$header_login = md_bone_get_option('header-login-switch', '1');
							if ($header_login === '1') {
							?>
							<div class="hidden-xs hidden-sm">
								<?php get_template_part('templates/user-actions-compact'); ?>
							</div>
							<?php } ?>
						</div><!-- end headerActions -->
					</div>
				</div>
			</div><!-- end siteHeader-nav -->

		</header>
		<!-- end siteHeader -->