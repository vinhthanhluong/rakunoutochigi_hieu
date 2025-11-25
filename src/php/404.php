<?php
/*
*	Template Name: 404
*/
?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>エラー | アイティメディア株式会社</title>
<meta http-equiv="content-style-type" content="text/css">
<meta http-equiv="content-script-type" content="text/javascript">
<link rel="stylesheet" href="/common/css/contents.css" type="text/css" media="all">
<link rel="stylesheet" href="http://corp.itmedia.co.jp/ir/wp-content/themes/ir/css/ir.css" type="text/css" media="all">

<?php get_template_part( 'head-meta' ); ?>
<?php get_template_part( 'local-meta' ); ?>
<?php get_template_part( 'favicon' ); ?>
<?php wp_head(); ?>
</head>
<body>
<div id="container">
<?php get_header(); ?>

<div class="container_sdgs">
<div id="topicPath">
    <p><a href="/">HOME</a> &gt; エラー</p>
<!-- / #topicPathLogo --></div>
<article id="contentsContainer">
<header id="pageHeader" class="ir">
    <h1>お探しのページは見つかりません。</h1>
<!-- / #pageHeader --></header>

<section class="box_section">
<div id="message" class="box_contents">


</br>
<h3>404：Not Found</h3>
お探しのページは見つかりません。</br>
一時的にアクセスできない状態か、移動もしくは削除されてしまった可能性があります。</br>
</br>
<a href="/">トップページに戻る</a></br>
</br>


<!-- / .box_contents --></div>
<!-- / .box_section --></section>

<!-- / #contentsContainer --></article>
</div>
<?php get_footer(); ?>
<!-- / #container --></div>
<?php wp_footer(); ?>
</body>
</html>
