<script setup>
</script>

<template>
  <router-view></router-view>
  <footer class="footer-section">
  <div class="container text-center py-2">
      <p class="mt-2">&copy; 2025 Trote Solidário - Uni-FACEF</p>
      <div class="social-icons">
          <a href="https://www.facebook.com/unifacef" target="_blank"><i class="fa fa-facebook"></i></a>
          <a href="https://www.instagram.com/unifacef" target="_blank"><i class="fa fa-instagram"></i></a>
          <a href="https://www.linkedin.com/school/uni-facef" target="_blank"><i class="fa fa-linkedin"></i></a>
      </div>
  </div>
  </footer>
</template>

<style scoped>
  .footer-section {
    background-color: rgb(255, 136, 0);
    width: 100%;
    color: white;
  }

  .footer-section p {
    margin: 0;
    font-weight: 500;
  }

  .footer-section .social-icons a {
    color: white;
    margin: 0 8px;
    font-size: 24px;
    transition: color 0.3s;
  }

  .footer-section .social-icons a:hover {
    color: #000000;
  }
</style>
