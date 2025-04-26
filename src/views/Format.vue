<template>
    <div>
        <!-- Navbar (igual a sua padrão) -->
        <header class="navbar navbar-expand-lg custom-navbar fixed-top shadow">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="/">
            <img src="../assets/images/logo2.jpeg" alt="Logo" width="50" height="50" class="me-2 logo-rounded" />
            <strong>Trote Solidário - 2025</strong>
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
            <h1 class="fw-bold display-5 mb-3 text-orange">Formato do Trote Solidário 2025</h1>
            <p class="lead text-muted">Organização, Integração e Solidariedade em ação!</p>
        </div>
        </section>

        <!-- Padrinhos das Equipes -->
        <section class="py-5">
        <div class="container">
            <div class="card shadow-sm mb-5 goal-card border-orange">
            <div class="card-body">
                <h2 class="text-center fw-bold text-orange mb-4">
                <i class="fa fa-user-tie me-2"></i> Padrinhos das Equipes
                </h2>
                <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="p-3 bg-light rounded floating">
                    <h5 class="fw-bold text-orange"><i class="fa fa-users me-2 mb-2"></i> Composição</h5>
                    <p>Três padrinhos (chefes de departamento ou docentes indicados) para cada equipe.</p>
                    <p>Equipes com dois cursos terão um professor adicional em comum.</p>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="p-3 bg-light rounded floating">
                    <h5 class="fw-bold text-orange"><i class="fa fa-external-link me-2 mb-2"></i> Atuação</h5>
                    <p>Responsáveis por orientar e acompanhar as atividades dos calouros em conjunto com os professores dos cursos.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <!-- Etapas do Trote -->
            <div class="card shadow-sm mb-5 goal-card border-orange">
            <div class="card-body">
                <h2 class="text-center fw-bold text-orange mb-4">
                <i class="fa fa-calendar-check me-2"></i> Etapas do Evento
                </h2>
                <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="p-3 bg-light rounded floating">
                    <h5 class="fw-bold text-orange"><i class="fa fa-shopping-basket me-2"></i> 1ª Etapa - Gincana Solidária</h5>
                    <ul class="list-activities">
                        <li><i class="fa fa-check text-success me-2"></i> Alimentos e Suplementos</li>
                        <li><i class="fa fa-check text-success me-2"></i> Campanha do Leite</li>
                        <li><i class="fa fa-check text-success me-2"></i> Doação de Sangue</li>
                        <li><i class="fa fa-check text-success me-2"></i> Ações em Entidades</li>
                        <li><i class="fa fa-check text-success me-2"></i> Registro Audiovisual</li>
                    </ul>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="p-3 bg-light rounded floating">
                    <h5 class="fw-bold text-orange"><i class="fa fa-users me-2"></i> 2ª Etapa - Integração e Envolvimento</h5>
                    <ul class="list-activities">
                        <li><i class="fa fa-check text-success me-2"></i> Homenagem a Esportistas</li>
                        <li><i class="fa fa-check text-success me-2"></i> Mascote da Equipe</li>
                        <li><i class="fa fa-check text-success me-2"></i> Caracterização e Animação</li>
                        <li><i class="fa fa-check text-success me-2"></i> Atividades Recreativas</li>
                        <li><i class="fa fa-check text-success me-2"></i> Apresentação de Ações Sociais</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <!-- Abertura Oficial -->
            <div class="card shadow-sm mb-5 goal-card border-orange">
            <div class="card-body">
                <h2 class="text-center fw-bold text-orange mb-4">
                <i class="fa fa-envelope-open me-2"></i> Abertura Oficial
                </h2>
                <div class="row text-center">
                <div class="col-md-4 mb-4">
                    <div class="p-3 bg-light rounded floating">
                    <i class="fa fa-clock-o fa-2x text-orange"></i>
                    <p class="mt-2">18 de fevereiro<br>às 18h15</p>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="p-3 bg-light rounded floating">
                    <i class="fa fa-map-marker fa-2x text-orange"></i>
                    <p class="mt-2">Auditório "Edna Maria Campanhol"<br>Unidade II</p>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="p-3 bg-light rounded floating">
                      <i class="fa fa-list fa-2x text-orange"></i>
                      <p class="mt-2">Programação:<br>Boas-vindas, Regulamento, Sorteio</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>
        </section>

    <!-- Footer -->
    <footer class="footer-section fixed-bottom">
        <div class="container text-center py-1">
            <p class="mt-2">&copy; 2025 Trote Solidário - Uni-FACEF</p>
            <div class="social-icons">
                <a href="https://www.facebook.com/unifacef" target="_blank"><i class="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/unifacef" target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/school/uni-facef" target="_blank"><i class="fa fa-linkedin"></i></a>
            </div>
        </div>
      </footer>
    </div>
</template>

<script>
  export default {
    name: 'Formato'
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

  .list-activities {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
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
