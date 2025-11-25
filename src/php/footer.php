
  <footer>
      <p class="copy"><small></small></p>
  </footer>

</div><!--wrapper-->
  <script src="<?php echo get_template_directory_uri(); ?>/assets/js/jquery/3.4.1/jquery.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/asetts/js/plugin/slick/slick.min.js"></script>
  
  <?php if(is_front_page()){ ?>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/js/index.js"></script>
  <?php } ?>

  <?php wp_footer(); ?>
  </body>
</html>