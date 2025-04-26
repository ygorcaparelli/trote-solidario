<template>
    <div>
      <!-- Header -->
      <header class="navbar navbar-expand-lg custom-navbar fixed-top shadow">
        <div class="container">
            <router-link class="navbar-brand d-flex align-items-center" to="/">
            <img src="../assets/images/logo2.jpeg" alt="Logo" width="50" height="50" class="me-2 logo-rounded" />
            <strong style="color: white">Trote Solidário - 2025</strong>
            </router-link>

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

      <!-- Hero -->
        <section id="home-title" class="hero-section text-center pt-5">
            <div class="container-title">
                <h1 class="fw-bold display-5">Trote Solidário - 2025</h1>
                <p class="lead mt-3">CENTRO UNIVERSITÁRIO MUNICIPAL DE FRANCA<br>Uni-FACEF</p>
                <a href="#" class="btn custom-btn mt-4">Regulamento Trote Solidário - 2025</a>
            </div>
        </section>

      <p class="lead mt-3 text-muted">Construa vitórias fora de campo e jogue pela solidariedade!</p>

      <!-- Cards Section -->
      <section class="cards-section py-10">
        <div class="container">
          <div class="row g-4">
              <div class="col-md-4">
                <div class="card shadow-sm h-100">
                    <div class="card-body">
                      <h5 class="card-title"><i class="fa fa-handshake-o"></i> Sobre o Trote Solidário</h5>
                      <p class="card-text">O Trote Solidário é uma iniciativa do Uni-FACEF que visa promover a integração entre calouros e veteranos através de atividades que beneficiam a comunidade.</p>
                    </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card shadow-sm h-100">
                    <div class="card-body">
                      <h5 class="card-title"><i class="fa fa-calendar"></i> Atividades Programadas</h5>
                      <ul class="list-activities">
                          <li><i class="fa fa-check text-success"></i> Arrecadação de alimentos</li>
                          <li><i class="fa fa-check text-success"></i> Doação de sangue</li>
                          <li><i class="fa fa-check text-success"></i> Gincana cultural e esportiva</li>
                          <li><i class="fa fa-check text-success"></i> Visitas sociais</li>
                          <li><i class="fa fa-check text-success"></i> Oficinas comunitárias</li>
                      </ul>
                    </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card shadow-sm h-100">
                    <div class="card-body text-center">
                      <h5 class="card-title"><i class="fa fa-user-plus"></i> Como Participar</h5>
                      <p class="card-text">Para participar, inscreva-se no site oficial do Uni-FACEF. Participação voluntária e certificação de horas complementares!</p>
                      <a href="#" class="btn custom-btn mt-2">Inscreva-se agora!</a>
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
    name: 'Home'
  }
  </script>

  <style scoped>
  /* HERO */
  .hero-section {
    padding-top: 120px;
    padding-bottom: 20px;
  }

  .card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    will-change: transform;
  }

  .card:hover {
    transform: perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
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
  .cards-section .card-title {
    font-weight: bold;
    color: rgb(255, 136, 0);
  }
  .cards-section .card-body i {
    margin-right: 8px;
  }

  .cards-section {
    margin-bottom: 13.4vh;
    margin-top: 50px;
  }

  /* BOTÕES */
  .custom-btn {
    background-color: rgb(255, 136, 0);
    border: none;
    color: #fff;
    font-weight: 600;
  }
  .custom-btn:hover {
    background-color: #e67e00;
  }

  /* LOGO */
  .logo-rounded {
    border-radius: 8px;
  }

  .logo-rounded:hover {
    box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.4);
    transition: box-shadow 0.3s ease-in-out;
  }

  .list-activities {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  #home-title {
    background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url('../assets/images/logo2.jpeg');
    margin-top: 100px;
  }
  </style>
