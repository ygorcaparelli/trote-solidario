<template>
    <div>
      <!-- Header (já é seu padrão) -->
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
              <li class="nav-item"><router-link class="nav-link" to="/"><i class="fa fa-home"></i> Home </router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/introducao"><i class="fa fa-info-circle"></i> Introdução</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/objetivo"><i class="fa fa-bullseye"></i> Objetivo</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/formato"><i class="fa fa-list-alt"></i> Formato</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/gincana"><i class="fa fa-trophy"></i> Gincana</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/integracao"><i class="fa fa-users"></i> Integração</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/observacoes"><i class="fa fa-sticky-note"></i> Observações</router-link></li>
              <li class="nav-item"><router-link class="nav-link" to="/calculadoras"><i class="fa fa-calculator"></i> Calculadoras</router-link></li>
            </ul>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="hero-section text-center pt-5 mt-5">
        <div class="container">
          <h1 class="fw-bold display-5 mb-3 text-orange">Objetivos do Trote Solidário 2025</h1>
          <p class="lead text-muted">Integração, Solidariedade e Desenvolvimento Sustentável</p>
        </div>
      </section>

      <!-- Objetivo Principal -->
      <section class="py-5 objective-principal">
        <div class="container">
          <div class="card shadow-sm mb-5 goal-card">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-md-4 text-center mb-3 mb-md-0">
                  <div class="p-4">
                    <img src="../assets/images/logo2.jpeg" alt="Logo" width="250" height="250" class="me-2 logo-plus-rounded" />
                  </div>
                </div>
                <div class="col-md-8">
                  <h2 class="fw-bold text-orange mb-3"><i class="fa fa-bullseye me-2"></i> Objetivo Principal</h2>
                  <p class="lead">
                    Integrar os estudantes dos primeiros períodos de 2025 à comunidade acadêmica do Uni-FACEF,
                    promovendo ações solidárias que fortalecem a cidadania e o compromisso social.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- ODS Section -->
          <div class="card shadow-sm mb-5 border-orange highlight-box">
            <div class="card-body">
              <h2 class="text-center fw-bold text-orange mb-4">
                <i class="fa fa-globe-americas me-2"></i> Alinhamento com os ODS (ONU)
              </h2>
              <div class="row text-center">
                <div class="col-md-3 mb-4">
                  <div class="p-3 bg-light rounded floating">
                    <i class="fa fa-heart fa-2x text-success"></i>
                    <p class="mt-2">ODS 3<br>Saúde e Bem-Estar</p>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="p-3 bg-light rounded floating">
                    <i class="fa fa-graduation-cap fa-2x text-primary"></i>
                    <p class="mt-2">ODS 4<br>Educação de Qualidade</p>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="p-3 bg-light rounded floating">
                    <i class="fa fa-venus-mars fa-2x text-warning"></i>
                    <p class="mt-2">ODS 5<br>Igualdade de Gênero</p>
                  </div>
                </div>
                <div class="col-md-3 mb-4">
                  <div class="p-3 bg-light rounded floating">
                    <i class="fa fa-handshake-o fa-2x text-danger"></i>
                    <p class="mt-2">ODS 17<br>Parcerias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Organização das Equipes -->
          <div class="card shadow-sm mb-5 goal-card">
            <div class="card-body">
              <h2 class="text-center fw-bold text-orange mb-4">
                <i class="fa fa-users me-2"></i> Organização das Equipes
              </h2>
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="p-3 bg-light rounded floating">
                    <h5 class="fw-bold text-orange"><i class="fa fa-sitemap me-2"></i> Comissão de Representantes</h5>
                    <p>Formada por 2 estudantes de cada curso, responsáveis por repassar informações.</p>
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="p-3 bg-light rounded floating">
                    <h5 class="fw-bold text-orange"><i class="fa fa-bullhorn me-2"></i> Funções</h5>
                    <p>Manter a comunicação entre as turmas e a organização do evento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Benefícios -->
          <div class="card shadow-sm goal-card border-orange">
            <div class="card-body">
              <h2 class="text-center fw-bold text-orange mb-4">
                <i class="fa fa-award me-2"></i> Benefícios do Trote Solidário
              </h2>
              <div class="row text-center">
                <div class="col-md-4 mb-4">
                  <i class="fa fa-user-plus fa-2x text-primary mb-2"></i>
                  <h5 class="fw-bold">Integração</h5>
                  <p>Unindo calouros e veteranos com responsabilidade e acolhimento.</p>
                </div>
                <div class="col-md-4 mb-4">
                  <i class="fa fa-hand-paper-o fa-2x text-success mb-2"></i>
                  <h5 class="fw-bold">Solidariedade</h5>
                  <p>Desenvolvendo a consciência social dos estudantes.</p>
                </div>
                <div class="col-md-4 mb-4">
                  <i class="fa fa-certificate fa-2x text-warning mb-2"></i>
                  <h5 class="fw-bold">Certificação</h5>
                  <p>Horas complementares reconhecidas institucionalmente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>

  <script>
  export default {
    name: 'Objetivo'
  }
  </script>

<style scoped>
  /* HERO */
  .hero-section {
    padding-top: 120px;
    padding-bottom: 20px;
  }

  .logo-rounded {
    border-radius: 8px;
  }

  .logo-plus-rounded {
    border-radius: 50px;
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
    margin-bottom: 100px;
  }

  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    will-change: transform;
  }

  .card:hover {
    transform: perspective(1000px) rotateX(-5deg) rotateY(-5deg) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  .text-orange {
    color: rgb(255, 136, 0);
  }

  .border-orange {
    border-left: 4px solid rgb(255, 136, 0);
  }

  .objective-principal {
    margin-bottom: 100px;
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
