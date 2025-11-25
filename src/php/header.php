<!DOCTYPE html>
<html lang="ja">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="format-detection" content="telephone=no, address=no, email=no">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta property="og:title" content="ページ名">
	<meta property="og:type" content="website">
	<meta property="og:url" content="">
	<meta property="og:image" content="">
	<meta property="og:site_name" content="サイト名">
	<meta property="og:description" content="説明文">
	<title>サイト名</title>
	<meta name="description" content="説明文" />
	<link rel="shortcut icon" href="#">
	<!--favicon-->
	<link href="<?php echo get_template_directory_uri(); ?>/assets/css/reset.css?ver=1.0.1" rel="stylesheet">
	<!--cssコーディングの場合-->
	<link href="<?php echo get_template_directory_uri(); ?>/assets/css/common.css?ver=1.0.1" rel="stylesheet">
	<!--cssコーディングの場合-->
	<link href="<?php echo get_template_directory_uri(); ?>/assets/css/index.css?ver=1.0.1" rel="stylesheet" type="text/css">
	<!--cssコーディングの場合-->
	<link href="<?php echo get_template_directory_uri(); ?>/assets/css/style.css?ver=1.0.1" rel="stylesheet">
	<!--sassコーディングの場合-->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<!--google fontの読み込みが早くなる-->
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<!--google fontの読み込みが早くなる-->
	<script type='text/javascript' defer></script>
	<!--読み込み速度があがる-->
	<script src="https://kit.fontawesome.com/4004085d58.js" crossorigin="anonymous"></script>
	<!--フォントオーサム-->

	<link href="<?php echo get_template_directory_uri(); ?>/assets/css/reset.css" rel="stylesheet">
	<link href="<?php echo get_template_directory_uri(); ?>/assets/js/plugin/slick/slick.css" rel="stylesheet">
	<link href="<?php echo get_template_directory_uri(); ?>/assets/js/plugin/slick/slick-theme.css" rel="stylesheet">
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">

	<?php if (is_front_page()) { ?>
		<link href="<?php echo get_template_directory_uri(); ?>/assets/css/index.css" rel="stylesheet">
		<!--cssコーディングの場合-->
	<?php }
	if (is_post_type_archive('') || is_singular('') || is_tax('')) { ?>

	<?php }
	if (is_page('')) { ?>

	<?php }
	if (is_404()) { ?>
		<link href="<?php echo get_template_directory_uri(); ?>/assets/css/404.css" rel="stylesheet">
		<!--cssコーディングの場合-->
	<?php } ?>

	<?php wp_head(); ?>
</head>

<body>
	<div id="wrapper">
		<header>
		</header>