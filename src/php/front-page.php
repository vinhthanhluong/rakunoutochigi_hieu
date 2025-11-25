<?php get_header(); ?>
<main>

<!--MVスライダー-->
<div>
<ul class="mv__bg js-slider">
        <?php
        $args = array(
          'post_type' => 'mv_slider',
          'posts_per_page' => 1,
        );
        $the_query = new WP_Query($args);
        if ($the_query->have_posts()) : while ($the_query->have_posts()) : $the_query->the_post();
            foreach (get_field('slider') as $num => $slider) {
              if ($slider[$num . '_image']) {
                if ($slider[$num . '_url']) {
                  echo '<li><a href="' . $slider[$num . '_url'] . '"><div style="background-image: url(' . $slider[$num . '_image'] . ')"></div></a></li>';
                } else {
                  echo '<li><div class="" style="background-image: url(' . $slider[$num . '_image'] . ');"></div></li>';
                }
              }
            }
        ?>

        <?php endwhile;
        else : endif; ?>

      </ul>
        </div>

<!---->

<!--投稿タイプの一部表示-->
<?php
      $args = array(
        'post_type' => '投稿タイプ名', 
        'posts_per_page' => 1,
      );
      $news_query = new WP_Query($args);
      if ($news_query->have_posts()) :
        while ($news_query->have_posts()) :
          $news_query->the_post();
          $categories = get_the_terms($post->ID, 'タクソノミー名');
      ?>
      
      <?php
        endwhile;
        if (function_exists('wp_pagenavi')) :
          wp_pagenavi();
        endif;
      else :
        echo '<p class="empty">現在お知らせはありません。</p>';
      endif;
      wp_reset_query();
      ?>
<!---->

    </main>
<?php get_footer(); ?>
