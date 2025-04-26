<template>
    <div>
      <!-- Navbar -->
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

      <section class="hero-section text-center pt-5 mt-5">
        <div class="container">
            <h1 class="fw-bold display-5 mb-3 text-orange">Considerações finais</h1>
            <p class="lead text-muted">Diretrizes e detalhes importantes sobre o andamento do Trote Solidário 2025 - Uni-FACEF </p>
        </div>
      </section>

      <!-- Conteúdo Principal -->
      <section class="py-4">
        <div class="container">
          <!-- Observações -->
          <div class="card shadow-sm mb-5 goal-card border-orange">
            <h2 class="text-center fw-bold text-orange mb-4"><i class="fa fa-info-circle me-2"></i> Regulamento </h2>
            <div class="card shadow-sm my-5 goal-card border-orange">
              <h4 class="fw-bold text-start mb-3">Presença obrigatória</h4>
              <div class="alert-orange border-orange d-flex align-items-center" role="alert">
                <div class="rounded-circle text-white d-flex justify-content-center align-items-center m-3" style="width: 65px; height: 40px; font-weight: bold; background-color: rgb(255, 136, 0);">
                  1
                </div>
                <h5 class="text-muted mb-0">
                  Na noite de encerramento, a presença dos estudantes será indispensável, sendo um requisito obrigatório para a emissão do certificado de participação no evento Trote Solidário Uni-FACEF 2025.
                </h5>
              </div>
            </div>
            <div class="card shadow-sm mb-5 goal-card border-orange">
              <h4 class="fw-bold text-start mb-3">Pedir doações</h4>
              <div class="alert-orange border-orange d-flex align-items-center" role="alert">
                <div class="rounded-circle text-white d-flex justify-content-center align-items-center m-3" style="width: 105px; height: 40px; font-weight: bold; background-color: rgb(255, 136, 0);">
                  2
                </div>
                <h5 class="px-3 py-1 text-muted">
                  É proibido solicitar doações em dinheiro em nome específico do Hospital do Câncer ou de qualquer entidade filantrópica. As doações devem ser informadas como destinadas ao TROTE SOLIDÁRIO Uni-FACEF 2025. Caso seja necessário um ofício, procure a Coordenação em uma das Unidades.
                </h5>
              </div>
            </div>
            <div class="card shadow-sm mb-5 goal-card border-orange">
              <h4 class="fw-bold text-start mb-3">Restrição de barulho</h4>
              <div class="alert-orange border-orange d-flex align-items-center" role="alert">
                <div class="rounded-circle text-white d-flex justify-content-center align-items-center m-3" style="width: 90px; height: 40px; font-weight: bold; background-color: rgb(255, 136, 0);">
                  3
                </div>
                <h5 class="px-3 py-1 text-muted">
                  Não será permitido o uso de apitos, buzinas ou quaisquer dispositivos que produzam sons excessivos durante as provas da noite de encerramento, assim como o uso de efeitos pirotécnicos em qualquer momento, sob pena de perda de pontos.
                </h5>
              </div>
            </div>
            <div class="card shadow-sm mb-5 goal-card border-orange">
              <h4 class="fw-bold text-start mb-3">Arrecadações</h4>
              <div class="alert-orange border-orange d-flex align-items-center" role="alert">
                <div class="rounded-circle text-white d-flex justify-content-center align-items-center m-3" style="width: 85px; height: 40px; font-weight: bold; background-color: rgb(255, 136, 0);">
                  4
                </div>
                <h5 class="px-3 py-1 text-muted">
                  Os resultados das arrecadações da 1ª Etapa serão destinados às Entidades que encaminharem ofício ao Uni-FACEF, respeitando a ordem de envio, com exceção dos suplementos, que serão reservados para os Voluntários da Saúde.
                </h5>
              </div>
            </div>
            <div class="card shadow-sm mb-5 goal-card border-orange">
              <h4 class="fw-bold text-start mb-3">Doação de sangue</h4>
              <div class="alert-orange border-orange d-flex align-items-center" role="alert">
                <div class="rounded-circle text-white d-flex justify-content-center align-items-center m-3" style="width: 90px; height: 40px; font-weight: bold; background-color: rgb(255, 136, 0);">
                  5
                </div>
                <h5 class="px-3 py-1 text-muted">
                  Durante a prova de Doações de Sangue, o foco é incentivar novas doações por meio do Trote Solidário. Portanto, será proibida qualquer abordagem a doadores que já estejam no hemocentro ou que estejam chegando para realizar a doação.
                </h5>
              </div>
            </div>
            <div class="card shadow-sm mb-5 goal-card border-orange">
              <h4 class="fw-bold text-start mb-3">Omissão</h4>
              <div class="alert-orange border-orange d-flex align-items-center" role="alert">
                <div class="rounded-circle text-white d-flex justify-content-center align-items-center m-3" style="width: 40px; height: 40px; font-weight: bold; background-color: rgb(255, 136, 0);">
                  6
                </div>
                <h5 class="px-3 py-1 text-muted">
                    Quaisquer situações não previstas neste Regulamento serão analisadas pela Comissão Organizadora.
                </h5>
              </div>
            </div>
          </div>

          <!-- Coordenação -->
          <div class="card shadow-sm mb-5 goal-card border-orange">
            <h2 class="text-center fw-bold text-orange mb-4"><i class="fa fa-video-camera me-2"></i> Coordenação Uni-FACEF 2025</h2>
            <div class="row">
              <div class="col-md-6">
              <a href="mailto:trotesolidario@facef.br" class="text-decoration-none">
                <div class="card shadow-sm mb-4 goal-card border-orange">
                  <div class="card-col">
                    <h5 class="fw-bold text-start mb-3"><i class="fa fa-address-book me-2"></i>CONTATO</h5>
                    <h6 class="fw-bold text-start">Equipe Trote Solidário</h6>
                    <p class="text-start">trotesolidario@facef.br</p>
                  </div>
                </div>
              </a>
              </div>
              <div class="col-md-6">
              <a href="mailto:flaviahaddad@facef.br" class="text-decoration-none">
                <div class="card shadow-sm mb-4 goal-card border-orange">
                  <div class="card-col">
                    <h5 class="fw-bold text-start mb-4"><i class="fa fa-vcard me-2"></i>COORDENAÇÃO DE EXTENSÃO</h5>
                    <h6 class="fw-bold text-start">Profa. Ma. Flávia Haddad França</h6>
                    <p class="text-start">flaviahaddad@facef.br</p>
                  </div>
                </div>
              </a>
              </div>
              <div class="col-md-6">
              <a href="mailto:reitoria@facef.br" class="text-decoration-none">
                <div class="card shadow-sm mb-4 goal-card border-orange">
                  <div class="card-col">
                    <h5 class="fw-bold text-start mb-4"><i class="fa fa-mortar-board me-2"></i>REITORIA</h5>
                    <h6 class="fw-bold text-start">Prof. Dr. José Alfredo de Pádua Guerra</h6>
                    <p class="text-start">reitoria@facef.br</p>
                  </div>
                </div>
              </a>
              </div>
              <div class="col-md-6">
              <a href="mailto:melissa@facef.br" class="text-decoration-none">
                <div class="card shadow-sm mb-4 goal-card border-orange">
                  <div class="card-col">
                    <h5 class="fw-bold text-start mb-4"><i class="fa fa-user-circle me-2"></i>PRÓ-REITORIA EXTENSÃO</h5>
                    <h6 class="fw-bold text-start">Profa. Dra. Melissa Franchini C. Bandos</h6>
                    <p class="text-start">melissa@facef.br</p>
                  </div>
                </div>
              </a>
              </div>
              <div class="row text-start">
              <div class="col-md-4">
                <a href="mailto:josealfredo@facef.br" class="text-decoration-none">
                <div class="card shadow-sm mb-4 goal-card border-orange">
                  <div class="card-col2">
                    <h6 class="fw-bold text-start mb-4"><i class="fa fa-university me-2"></i>PRÓ-REITOR ADMINISTRAÇÃO</h6>
                    <h7 class="fw-bold text-start">Prof. Dr. Alfredo José Machado Neto</h7>
                    <p class="text-start">josealfredo@facef.br</p>
                  </div>
                </div>
                </a>
              </div>
              <div class="col-md-4">
                <a href="mailto:lucas@facef.br" class="text-decoration-none">
                <div class="card shadow-sm mb-4 goal-card border-orange">
                  <div class="card-col2">
                    <h6 class="fw-bold text-start mb-4"><i class="fa fa-tags me-2"></i>SETOR DE EVENTOS</h6>
                    <h7 class="fw-bold text-start">Me. Lucas Antônio Santos</h7>
                    <p class="text-start">lucas@facef.br</p>
                  </div>
                </div>
                </a>
              </div>
              <div class="col-md-4">
                <a href="mailto:alba@facef.br" class="text-decoration-none">
                <div class="card shadow-sm mb-4 goal-card border-orange">
                  <div class="card-col2">
                    <h6 class="fw-bold text-start mb-4"><i class="fa fa-video-camera me-2"></i>COORDERADORA DE MARKETING</h6>
                    <h7 class="fw-bold text-start">Profa. Ma. Alba Penteado</h7>
                    <p class="text-start">alba@facef.br</p>
                  </div>
                </div>
                </a>
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
    name: 'Gincana'
  }
</script>

<style scoped>
  /* HERO */
  .hero-section {
    padding-top: 120px;
    padding-bottom: 20px;
  }

  .aviso{
    background-color: rgb(255, 136, 0);
    text-align: left;
    width: fit-content;
    color: #000000;
    font-weight: normal;
    font-size: medium;
    height: 35px;
  }

  @media (max-width: 768px) {
    .aviso {
      font-size: 12px;
    }
  }

  .purple {
      background-color: purple;
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

  .alert {
      background-color: rgb(255, 175, 175);
      text-align: left;
  }

  .alert-orange {
    background-color: rgb(255, 253, 221);
    text-align: left;
    border-radius: 8px;
    padding-top: 10px;
  }

  .alert-orange li {
      font-weight: 100 !important;
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

  .card-col {
    height: 100px !important;
  }

  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    will-change: transform;
  }

  .card:hover {
    transform: perspective(1px) rotateX(0deg) rotateY(0deg) scale(1.04);
    box-shadow: 0 150px 300px rgba(0, 0, 0, 1);
  }

  .text-orange {
    color: rgb(255, 136, 0);
  }

  .border-orange {
    border-left: 4px solid rgb(255, 136, 0);
  }

  .border-red {
    border-left: 4px solid rgb(255, 0, 0);
  }

  .objective-principal {
    margin-bottom: 100px;
  }
  /* FOOTER */
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
  }

  .list li {
    margin-bottom: 15px;
  }

  .list-activities p {
    margin: 10px;
  }

  .cursos {
    background-color: rgb(255, 136, 0);
  }

  @keyframes floating {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  #home-title {
    background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url('../assets/images/logo2.jpeg');
  }
</style>
