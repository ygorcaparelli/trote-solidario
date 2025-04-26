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
              <li class="nav-item"><a class="nav-link" href="/"><i class="fa fa-home"></i> Home</a></li>
              <li class="nav-item"><a class="nav-link" href="/introducao"><i class="fa fa-info-circle"></i> Introdução</a></li>
              <li class="nav-item"><a class="nav-link" href="/objetivo"><i class="fa fa-bullseye"></i> Objetivo</a></li>
              <li class="nav-item"><a class="nav-link" href="/formato"><i class="fa fa-list-alt"></i> Formato</a></li>
              <li class="nav-item"><a class="nav-link active" href="/gincana"><i class="fa fa-trophy"></i> Gincana</a></li>
              <li class="nav-item"><a class="nav-link" href="/integracao"><i class="fa fa-users"></i> Integração</a></li>
              <li class="nav-item"><a class="nav-link" href="/observacoes"><i class="fa fa-sticky-note"></i> Observações</a></li>
              <li class="nav-item"><a class="nav-link" href="/calculadoras"><i class="fa fa-calculator"></i> Calculadoras</a></li>
            </ul>
          </div>
        </div>
      </header>

      <section class="hero-section text-center pt-5 mt-5">
        <div class="container">
            <h1 class="fw-bold display-5 mb-3 text-orange">Unidos para um futuro solidário</h1>
            <p class="lead text-muted">Fortalecendo laços entre calouros e veteranos no espírito do Trote Solidário</p>
        </div>
      </section>

      <!-- Conteúdo Principal -->
      <section class="py-4">
        <div class="container">
          <!-- Encerramento -->
          <div class="card shadow-sm mb-5 goal-card border-orange">
            <section id="home-title" class="hero-section text-center">
              <div class="container-title">
                  <h1 class="fw-bold display-5">Noite de Encerramento</h1>
                  <h5 class="mt-4">CENTRO UNIVERSITÁRIO MUNICIPAL DE FRANCA - <strong>Uni-FACEF</strong></h5>
              </div>
            </section>
            <div class="card shadow-sm my-5 goal-card border-orange">
              <h5 class="fw-bold text-start mb-3">Informações</h5>
              <div class="alert-orange border-orange" role="alert">
                <ul>
                  <li><h6><strong>Data: </strong>04 de abril de 2025</h6></li>
                  <li><h6><strong>Horário: </strong>19h15</h6></li>
                  <li><h6><strong>Local: </strong>Hall Central do Uni-FACEF - Unidade II</h6></li>
                </ul>
                <h6 class="px-3 py-1 text-muted">
                  Evento de encerramento do Trote Solidário 2025, onde serão apresentados
                  <br> os resultados das equipes e a entrega dos prêmios.
                </h6>
                <h6 class="px-3 py-2 text-muted">
                    Um momento único de celebração e integração, destacando as conquistas do Trote Solidário
                    <br> premiando as equipes mais dedicadas.
                </h6>
              </div>
            </div>
            <div class="card-body">
              <div class="card shadow-sm mb-5 goal-card border-orange">
                <p class="aviso badge mb-4 animate__animated animate__pulse animate__infinite">
                  <strong>+2.000 pts.</strong>
                </p>
                <h2 class="text-center fw-bold text-orange mb-4"><i class="fa fa-trophy me-2"></i> Homenagem </h2>
                <p class="text-muted text-start mb-4">
                  O Trote Solidário é uma tradição que promove a solidariedade e a integração entre os alunos do Uni-FACEF. 
                  Este evento é uma oportunidade para os calouros se unirem aos veteranos em prol de uma causa nobre, 
                  fortalecendo laços e construindo um ambiente universitário mais acolhedor e solidário.
                </p>
                <p class="aviso badge animate__animated animate__headShake animate__slower animate__infinite">
                    <h5 class="fw-bold text-start">Regras do evento</h5>
                  </p>

                  <ul class="list text-start">
                      <li> Cada equipe deve selecionar um esportista francano (nascido em Franca/SP ou reconhecido oficialmente como tal) para homenagear </li>
                      <li> Serão aceitas modalidades esportivas que fazem parte de jogos olímpicos ou similares, com exceção do basquete </li>
                      <li> O homenageado pode ser um atleta em atividade ou já aposentado </li>
                      <li> A escolha deve ser validada <strong> com antecedência </strong> no grupo de WhatsApp dos Líderes </li>
                      <li> O tempo máximo para cada apresentação será de <strong>5 minutos</strong></li>
                      <li> No máximo 3 integrantes da equipe podem participar da apresentação, sendo <strong> um de cada curso </strong></li>
                  </ul>

                  <div class="alert-orange border-orange mb-5" role="alert">
                    <p class="p-3">
                      <i class="fa fa-exclamation-triangle mb-2"></i>
                      <strong>  IMPORTANTE!</strong> <br>Caso a equipe ultrapasse o limite de 5 minutos para a apresentação, será aplicada uma penalização de 200 pontos (equivalente a 10% da pontuação total).
                    </p>
                  </div>
                  <h5 class="fw-bold text-start mb-3">Critérios</h5>
                  <div class="row text-start">
                    <div class="col-md-4">
                    <div class="card shadow-sm mb-4 goal-card border-orange">
                      <div class="card-col">
                      <h5 class="fw-bold mb-3">Clareza na apresentação</h5>
                      <p>até 600 pontos</p>
                      </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card shadow-sm mb-4 goal-card border-orange">
                      <div class="card-col">
                      <h5 class="fw-bold mb-3">Representatividade local</h5>
                      <p>até 600 pontos</p>
                      </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card shadow-sm mb-4 goal-card border-orange">
                      <div class="card-col">
                      <h5 class="fw-bold mb-3">Qualidade da pesquisa</h5>
                      <p>até 600 pontos</p>
                      </div>
                    </div>
                    </div>
                  </div>
              </div>
              <div class="card shadow-sm mb-5 goal-card border-orange">
                  <p class="aviso badge mb-4 animate__animated animate__pulse animate__infinite">
                    <strong>+500 pts.</strong>
                  </p>
                  <h2 class="text-center fw-bold text-orange mb-4"><i class="fa fa-bug me-2"></i> Mascote </h2>
                  <p class="mb-4 text-start">
                    Cada equipe deverá desenvolver um mascote exclusivo para representar e motivar sua equipe no evento de encerramento. <strong> Apenas um </strong>mascote será permitido por equipe, sujeito a desclassificação.
                  </p>

                  <h5 class="fw-bold text-start mb-3">Critérios</h5>
                  <div class="row text-start">
                    <div class="col-md-4">
                    <div class="card shadow-sm mb-4 goal-card border-orange">
                      <div class="card-col">
                      <h5 class="fw-bold mb-3">Exclusividade</h5>
                      <p>até 200 pontos</p>
                      </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card shadow-sm mb-4 goal-card border-orange">
                      <div class="card-col">
                      <h5 class="fw-bold mb-3">Caracterização</h5>
                      <p>até 200 pontos</p>
                      </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card shadow-sm mb-4 goal-card border-orange">
                      <div class="card-col">
                      <h5 class="fw-bold mb-3">Atuação</h5>
                      <p>até 150 pontos</p>
                      </div>
                    </div>
                    </div>
                  </div>
              </div>

              <div class="card shadow-sm goal-card border-orange">
                <p class="aviso badge mb-4 animate__animated animate__pulse animate__infinite">
                  <strong>+1.000 pts.</strong>
                </p>
                <h2 class="text-center fw-bold text-orange mb-4"><i class="fa fa-cubes me-2"></i> Animação e performance </h2>
                <p class="mb-4 text-start">
                  As equipes precisam criar uma identidade visual única, incluindo vestimentas e acessórios, para animar e representar sua torcida durante o encerramento.
                </p>
                <p class="text-start">
                  <strong>Sugestão: </strong>Atributos como bandeiras, cartazes, camisetas e outros elementos visuais são essenciais para criar um ambiente vibrante e envolvente. Além disso, as equipes devem desenvolver uma coreografia ou performance que destaque sua energia e entusiasmo durante o evento.
                </p>
                <p class="text-start mt-4">
                  <strong>Será avaliado e atribuída uma pontuação de acordo com o resultado obtido, podendo chegar à 1.000 pts.</strong>
                </p>
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
    height: 50px !important;
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
