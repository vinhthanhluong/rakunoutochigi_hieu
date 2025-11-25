<?php get_header(); ?>
<main class="sus_main">

	<!--サブネイル画像表示、画像がない場合はnoimageを表示-->
	<figure>
		<?php
		if (has_post_thumbnail()) :
			the_post_thumbnail();
		else :
		?>
			<img src="<?php echo home_url(); ?>/images/common/no-image_l.jpg">
		<?php endif; ?>
	</figure>
	<!---->


	<!--カスタム投稿のタクソノミー名だけ表示　タクソノミーの記事がなくても表示-->
	<?php
	$args = array(
		'taxonomy' => 'タクソノミー名',
		'hide_empty' => '0'
	);
	$categories = get_categories($args);
	foreach ($categories as $category) {
		echo '<a class="" href="' . get_category_link($category->term_id) . '">#' . $category->name . '</a>';
	} ?>
	<!---->

	<!--カスタム投稿のタクソノミー名だけ表示　タクソノミーの記事がない場合は非表示-->
	<?php
	if ($terms = get_the_terms($post->ID, 'タクソノミー名')) {
		foreach ($terms as $term) {
			echo ('<p class="">');
			echo esc_html($term->name);
			echo ('</p>');
		}
	}
	?>
	<!---->

	<!--↓↓カスタム投稿とタクソノミーを表示↓↓-->
	<?php
	$the_query = new WP_Query();
	$paged = get_query_var('paged') ? get_query_var('paged') : 1;
	$args = array(
		'post_type' => '投稿タイプ名',
		'posts_per_page' => 12,
		'paged' => $paged,
		'tax_query' => array(
			array(
				'taxonomy' => 'タクソノミー名',
				'field' => 'slug',
				'terms' => 'unproducts',
				'operator'  => 'NOT IN'
			)
		)
	);
	$the_query->query($args);
	if ($the_query->have_posts()) : while ($the_query->have_posts()) : $the_query->the_post();
	?>

			<!--ここにコンテンツ-->
			<a href="<?php the_permalink(); ?>">
				<!--投稿記事へのリンク-->
				<p class=""><?php the_title(); ?></p>
				<!--投稿記事タイトル-->
				<p class=""><?php the_time('Y/m/d'); ?></p>
				<!--投稿記事日付-->
				<div class=""><? the_content(); ?></div>
				<!--投稿記事内容（エディター）-->
				<!--投稿記事（エディター内の）表示　86文字以上は...になる-->
				<?php
				if (mb_strlen($post->post_content, 'UTF-8') > 86) {
					$content = mb_substr($post->post_content, 0, 86, 'UTF-8');
					echo $content . '…';
				} else {
					echo $post->post_content;
				}
				?>
				<!--posy_contentをpost_titleにしたらtitleの文字制限になる-->
				<!---->

			</a>


	<?php
		endwhile;
		echo '</div>';
		if (function_exists('wp_pagenavi')) :
			echo '<div class="pagenavi-area_green">';
			wp_pagenavi();
			echo '</div>';
		endif;
	else :
		echo '<p>現在記事はありません。</p>';
	endif;
	wp_reset_query();
	?>
	<!--↑↑プラグインWPpagenaviをいれてページャーに↑↑-->

</main>
<?php get_footer(); ?>