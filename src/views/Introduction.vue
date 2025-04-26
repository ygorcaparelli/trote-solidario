<template>
  <div>
    <!-- Header -->
    <header class="navbar navbar-expand-lg custom-navbar fixed-top shadow">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="/">
          <img src="../assets/images/logo2.jpeg" alt="Logo" width="50" height="50" class="me-2 logo-rounded" />
          <strong style="color: white">Trote Solidário - 2025</strong>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="/"><i class="fa fa-home"></i> Home</a></li>
            <li class="nav-item"><a class="nav-link" href="/introducao"><i class="fa fa-info-circle"></i> Introdução</a></li>
            <li class="nav-item"><a class="nav-link" href="/objetivo"><i class="fa fa-bullseye"></i> Objetivo</a></li>
            <li class="nav-item"><a class="nav-link" href="/formato"><i class="fa fa-list-alt"></i> Formato</a></li>
            <li class="nav-item"><a class="nav-link" href="/gincana"><i class="fa fa-trophy"></i> Gincana</a></li>
            <li class="nav-item"><a class="nav-link" href="#integracao"><i class="fa fa-users"></i> Integração</a></li>
            <li class="nav-item"><a class="nav-link" href="#observacoes"><i class="fa fa-sticky-note"></i> Observações</a></li>
            <li class="nav-item"><a class="nav-link" href="#calculadoras"><i class="fa fa-calculator"></i> Calculadoras</a></li>
          </ul>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-section text-center pt-5 mt-5">
      <div class="container">
        <h1 class="fw-bold display-5 mb-3">Conhecendo o Uni-FACEF</h1>
        <p class="lead text-muted">Excelência acadêmica, inovação e compromisso social.</p>
      </div>
    </section>

    <!-- Nossa História -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-md-5 text-center">
            <img src="../assets/images/facef.png" alt="Uni-FACEF" class="img-fluid floating-img" />
          </div>
          <div class="col-md-7">
            <h2 class="fw-bold text-orange mb-4"><i class="fa fa-landmark me-2"></i> Nossa História</h2>
            <p>O Uni-FACEF, criado em 1951, é uma instituição pública, referência em educação de qualidade, desenvolvimento científico e responsabilidade social.</p>
            <p>Atualizando constantemente suas práticas acadêmicas, a instituição forma profissionais comprometidos com a excelência e a transformação social.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Missão e Valores -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center fw-bold text-orange mb-5"><i class="fa fa-bullseye me-2"></i> Missão e Valores</h2>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card shadow-sm h-100 border-orange">
              <div class="card-body">
                <h5 class="card-title text-orange"><i class="fa fa-quote-left me-2"></i> Missão</h5>
                <p class="card-text">
                  "Construir e difundir o conhecimento, formando cidadãos éticos e comprometidos com a sociedade."
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card shadow-sm h-100 border-orange">
              <div class="card-body">
                <h5 class="card-title text-orange"><i class="fa fa-heart me-2"></i> Valores</h5>
                <ul class="list-activities">
                  <li><i class="fa fa-check-circle text-success me-2"></i> Ética e transparência</li>
                  <li><i class="fa fa-check-circle text-success me-2"></i> Compromisso social</li>
                  <li><i class="fa fa-check-circle text-success me-2"></i> Excelência acadêmica</li>
                  <li><i class="fa fa-check-circle text-success me-2"></i> Inovação e criatividade</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nossos Cursos -->
    <section class="py-5">
      <div class="container text-center">
        <h2 class="fw-bold text-orange mb-5"><i class="fa fa-graduation-cap me-2"></i> Nossos Cursos</h2>
        <p class="text-muted mb-5">O Uni-FACEF oferece 13 cursos de graduação e programas de pós-graduação para aproximadamente 2.000 alunos.</p>
        <div class="d-flex flex-wrap justify-content-center gap-3">
          <span class="cursos badge p-2">Administração</span>
          <span class="cursos badge p-2">Ciência da Computação</span>
          <span class="cursos badge p-2">Ciências Contábeis</span>
          <span class="cursos badge p-2">Publicidade</span>
          <span class="cursos badge p-2">Enfermagem</span>
          <span class="cursos badge p-2">Engenharia Civil</span>
          <span class="cursos badge p-2">Eng. Produção</span>
          <span class="cursos badge p-2">Eng. Software</span>
          <span class="cursos badge p-2">Letras</span>
          <span class="cursos badge p-2">Matemática</span>
          <span class="cursos badge p-2">Medicina</span>
          <span class="cursos badge p-2">Psicologia</span>
          <span class="cursos badge p-2">Sistemas de Informação</span>
        </div>

        <div class="mt-5 p-4 rounded shadow">
          <h5 class="text-orange mb-3"><i class="fa fa-chalkboard-teacher me-2"></i> Pós-Graduação</h5>
          <p>MBA, especializações (Lato Sensu) e Mestrado (Stricto Sensu) em Desenvolvimento Regional.</p>
        </div>
      </div>
    </section>

    <!-- Finalidades -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center fw-bold text-orange mb-5"><i class="fa fa-star me-2"></i> Nossas Finalidades</h2>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="card shadow-sm h-100">
              <div class="card-body">
                <h5 class="fw-bold text-orange">1. Formação Integral</h5>
                <p>Formar cidadãos éticos e participativos com excelência técnica e responsabilidade social.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card shadow-sm h-100">
              <div class="card-body">
                <h5 class="fw-bold text-orange">2. Construção do Conhecimento</h5>
                <p>Promover conhecimento crítico e atender às necessidades sociais e regionais.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card shadow-sm h-100">
              <div class="card-body">
                <h5 class="fw-bold text-orange">3. Educação Continuada</h5>
                <p>Fomentar o "aprender a aprender" e a formação contínua de profissionais.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card shadow-sm h-100">
              <div class="card-body">
                <h5 class="fw-bold text-orange">4. Compromisso Social</h5>
                <p>Buscar soluções para os problemas da comunidade e promover o bem-estar social.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- O Trote Solidário -->
    <section class="trote py-5">
      <div class="container text-center">
        <div class="p-4 rounded shadow">
          <h2 class="fw-bold text-orange mb-4"><i class="fa fa-hands-helping me-2"></i> O Trote Solidário</h2>
          <p class="text-muted">Presente há mais de 30 anos no Uni-FACEF, o Trote Solidário visa integrar os alunos através de ações sociais, incentivando ética, solidariedade e cidadania.</p>
        </div>
      </div>
    </section>

    <section class="trote py-5">
      <div class="container text-center">
        <div class="p-4 rounded shadow">
          <h2 class="fw-bold text-orange mb-4"><i class="fa fa-hands-helping me-2"></i> Anos anteriores</h2>
          <p class="subtitle text-muted">A seguir temos a representação dos trotes referentes aos anos anteriores.</p>
          <swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :keyboard="{
              enabled: true,
            }"
            :pagination="{
              clickable: true,
            }"
            :navigation="true"
            :effect="'cards'"
            :grabCursor="true"
            :modules="modules"
            class="trote-swiper"
          >
            <swiper-slide><img src='https://www.unifacef.com.br/wp-content/uploads/2025/02/trote_solidario_2025_edited-768x753.jpg'></swiper-slide>
            <swiper-slide><img src='https://www.unifacef.com.br/wp-content/uploads/2024/02/capa_site.png'></swiper-slide>
            <swiper-slide><img src='https://www.unifacef.com.br/wp-content/uploads/2023/02/trote.png'></swiper-slide>
            <swiper-slide><img src='https://www.unifacef.com.br/wp-content/uploads/2022/02/logo_trote_solidario_tema_vertical.png'></swiper-slide>
            <swiper-slide><img src='https://www.unifacef.com.br/wp-content/uploads/2021/04/Identidade-Visual-Trote-Fundo-transparente-722x1024.png'></swiper-slide>
            <swiper-slide><img src='https://www.unifacef.com.br/wp-content/uploads/2020/02/LOGO_v3_RGB_10fev2020-291x300.png'></swiper-slide>
            <swiper-slide><img src='https://www.unifacef.com.br/wp-content/uploads/2019/02/logo_trote2019.jpg'></swiper-slide>
            <swiper-slide><img src='https://www.unifacef.com.br/wp-content/uploads/2018/02/Logo-Trote-Solid%C3%A1rio-2018-rgb-alegria-1024x435.png'></swiper-slide>
            <swiper-slide><img src='https://www.unifacef.com.br/wp-content/uploads/2012/02/Banner-site.jpg'></swiper-slide>
            <swiper-slide><img src='https://www.unifacef.com.br/wp-content/uploads/2012/02/logo-fundo-degrad%C3%AA-201x300.jpg'></swiper-slide>
            <swiper-slide><img src='https://www.unifacef.com.br/wp-content/uploads/2015/02/Trote-Solid%C3%A1rio1.jpg'></swiper-slide>
            <swiper-slide><img src='https://www.unifacef.com.br/wp-content/uploads/2012/02/logo-trote-solidario-2014.png'></swiper-slide>
            <swiper-slide><img src='https://www.unifacef.com.br/wp-content/uploads/2012/02/Trote_Solidario_logo_v1_fev2013-e1362424601333.jpg'></swiper-slide>
            <swiper-slide><img src='https://www.unifacef.com.br/wp-content/uploads/2012/02/trote-solidario-2012-logo-peq.jpg'></swiper-slide>
          </swiper>
        </div>
      </div>

    </section>
  </div>
</template>

<script>

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-cards';

  // import required modules
  import { Keyboard, Pagination, Navigation, EffectCards } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCards, Keyboard, Pagination, Navigation],
      };
    },
  };

</script>

<style scoped>

  /*CARROUSSEL */
  .swiper {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 768px) {
    .swiper {
      width: 200px; /* Ajusta a largura para 100% da tela */
      height: 200px; /* Define a altura para 50px em dispositivos móveis */
    }
  }

  .subtitle{
    margin-bottom: 50px;
  }

  .trote-swiper {
    margin-bottom: 100px;
  }

  ::v-deep(.swiper-slide img) {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 12px;
    background-color: #ffffff; /* ou qualquer cor de fundo desejada */
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #ffffff;
    object-fit: contain;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
  }

  /* HERO */
  .hero-section {
    padding-top: 120px;
    padding-bottom: 20px;
  }

  .logo-rounded {
    border-radius: 8px;
  }

  .logo-rounded:hover {
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.4);
    transition: box-shadow 0.3s ease-in-out;
  }

  /* NAVBAR */
  .custom-navbar {
    background-color: rgb(255, 136, 0);
  }

  .navbar-nav .nav-link {
    color: white;
    font-weight: 600;
  }
  .navbar-nav .nav-link:hover {
    color: #000000;
  }

  /* CARDS */
  .card-title {
    font-weight: bold;
  }

  .trote {
    margin-bottom: 10px;
  }

  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    will-change: transform;
  }

  .card:hover {
    transform: perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  .text-orange {
    color: rgb(255, 136, 0);
  }

  .border-orange {
    border-left: 4px solid rgb(255, 136, 0);
  }

  /* FLUTUANTE */
  .floating-img {
    animation: floating 3s ease-in-out infinite;
  }

  .list-activities {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
  }

  .cursos {
    background-color: rgb(255, 136, 0);
  }

  @keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
</style>
