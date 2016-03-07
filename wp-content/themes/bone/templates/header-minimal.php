<?php
	$header_sticky = md_bone_get_option('header-sticky', '1');
	$header_logo = md_bone_get_option('logo', NULL);
	if ( $header_logo != NULL ) {
		if ( $header_logo['url'] == '' ) { $header_logo = NULL; }
	}
	$header_logo_small = md_bone_get_option('logo-small', NULL);
	if ( $header_logo_small != NULL ) {
		if ( $header_logo_small['url'] == '' ) { $header_logo_small = NULL; }
	}
	$feat_layout = md_bone_get_option('feat-layout','slider');
	$header_class = ( $feat_layout == 'slider-cover' )? ' siteHeader--transparent': '';
	$layout_opt = md_bone_get_layout_opt();

	$logo_style = '';
	$logo_padding = md_bone_get_option('logo-padding', array());
	if (!empty($logo_padding)) {
		$logo_max_height = (string)(70 - (int)$logo_padding['padding-top'] - (int)$logo_padding['padding-bottom']).'px';
		$logo_style .= 'max-height:'.$logo_max_height.';';
	}
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
		<header class="siteHeader siteHeader--minimal<?php if ( is_home() ) echo esc_attr($header_class); ?>">

			<div class="siteHeader-nav js-searchOuter">
				<div class="siteHeader-content container ">
					<div class="flexbox">
						<div class="siteHeader-content-component siteHeader-content-component--left flexbox-item">
							<div class="menuToggleBtn js-menu-toggle btn btn--circle hidden-sm hidden-md hidden-lg"><i class="fa fa-navicon"></i></div>
							<div class="menuToggleBtn js-menu-toggle btn btn--pill hidden-xs"><i class="fa fa-navicon"></i><span><?php esc_html_e('Menu', 'bone'); ?></span></div>
						</div>
						<div class="siteHeader-content-component siteHeader-content-component--center flexbox-item">
							<div class="siteTitle siteTitle--default siteTitle--compact hidden-xs hidden-sm metaFont">
							<?php get_template_part('templates/logo-compact'); ?>
							</div>

							<div class="siteTitle siteTitle--compact siteTitle--small hidden-md hidden-lg metaFont">
							<?php get_template_part('templates/logo-compact-small'); ?>
							</div>
						</div>
						
						<div class="siteHeader-content-component siteHeader-content-component--right headerActions flexbox-item">

							<div class="compactSearch">
								<div class="searchToggleBtn btn btn--circle js-searchToggle hidden-sm hidden-md hidden-lg"><i class="fa fa-search iconSearch"></i><i class="fa fa-times iconClose"></i></div>
								<div class="searchToggleBtn btn btn--pill js-searchToggle hidden-xs"><i class="fa fa-search iconSearch"></i><i class="fa fa-times iconClose"></i><span><?php esc_html_e('Search', 'bone'); ?></span></div>
								<?php get_search_form(); ?>
							</div>
							
						</div>
					</div>
				</div>
			</div>

			<div class="siteHeader--fixed js-fixedHeader js-searchOuter">
				<div class="siteHeader-content container">
					<div class="flexbox">
						<div class="siteHeader-content-component siteHeader-content-component--left flexbox-item">
							<div class="menuToggleBtn js-menu-toggle btn btn--pill"><i class="fa fa-navicon"></i><span class="hidden-xs">Menu</span></div>
						</div>
						<div class="siteHeader-content-component siteHeader-content-component--center flexbox-item">
							<div class="siteTitle siteTitle--default siteTitle--compact hidden-xs hidden-sm metaFont">
							<?php get_template_part('templates/logo-compact'); ?>
							</div>

							<div class="siteTitle siteTitle--compact siteTitle--small hidden-md hidden-lg metaFont">
							<?php get_template_part('templates/logo-compact-small'); ?>
							</div>
						</div>
						
						<div class="siteHeader-content-component siteHeader-content-component--right headerActions flexbox-item">

							<div class="compactSearch">
								<div class="searchToggleBtn btn btn--circle js-searchToggle hidden-sm hidden-md hidden-lg"><i class="fa fa-search iconSearch"></i><i class="fa fa-times iconClose"></i></div>
								<div class="searchToggleBtn btn btn--pill js-searchToggle hidden-xs"><i class="fa fa-search iconSearch"></i><i class="fa fa-times iconClose"></i><span><?php esc_html_e('Search', 'bone'); ?></span></div>
								<?php get_search_form(); ?>
							</div>
							
						</div>
					</div>
				</div>
			</div>

		</header>
		<!-- site-header -->