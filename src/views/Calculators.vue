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
              <router-link class="nav-link" to="/introducao">Introdução</router-link>
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

      <section class="hero-section text-center pt-1 mt-1">
        <div class="container">
            <h1 class="fw-bold display-5 pt-5 mt-5 text-orange"><i class="fa fa-calculator me-2"></i>Calcule os pontos</h1>
            <p class="lead text-muted">Descubra a pontuação do seu time em cada atividade do Trote Solidário 2025</p>
        </div>
      </section>

      <!-- Conteúdo Principal -->
      <section class="py-4">
        <div class="container">
          <!-- Calculo dos pontos -->
          <div class="card shadow-sm mb-5 goal-card border-orange">
            <h3 class="text-start fw-bold text-orange mb-2"><i class="fa fa-info-circle me-2"></i> Como é feito o calculo </h3>
            <p class="lead text-start text-muted">Insira os pontos conquistados em cada categoria nos campos abaixo. Conforme você preenche, a barra de progresso exibirá de forma visual.</p>
            <div class="card shadow-sm my-3 goal-card border-orange">
              <h2 class="fw-bold text-start mb-5"><i class="fa fa-futbol-o me-3"></i>Esportes</h2>
              <div class="row">
              <div class="col-md-4 mb-3">
                <label for="mascote" class="form-label text-start d-block"><i class="fa fa-bug me-2"></i>Mascote do Time</label>
                <input type="number" id="mascote" class="form-control" placeholder="Pontos" max="500" />
              </div>
              <div class="col-md-4 mb-3">
                <label for="homenagem" class="form-label text-start d-block"><i class="fa fa-trophy me-2"></i>Homenagem</label>
                <input type="number" id="homenagem" class="form-control" placeholder="Pontos" max="2000" />
              </div>
              <div class="col-md-4 mb-3">
                <label for="caracterizacao" class="form-label text-start d-block"><i class="fa fa-cubes me-2"></i>Caracterização</label>
                <input type="number" id="caracterizacao" class="form-control" placeholder="Pontos" max="1000" />
              </div>
              <div class="mt-2">
                <progress class="progress progress-bar-esportes" value="0" style="width: 100%; height: 10px"></progress>
                <div class="text-esportes mt-1 fw-bold">0 / 3500</div>
              </div>
            </div>
            </div>
            <div class="card shadow-sm my-3 goal-card border-orange">
              <h2 class="fw-bold text-start mb-5"><i class="fa fa-handshake-o me-3"></i>Solidariedade</h2>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="arrecadacao" class="form-label text-start d-block"><i class="fa fa-shopping-cart me-2"></i>Arrecadação</label>
                  <input type="number" id="arrecadacao" class="form-control" placeholder="Pontos" max="5000"/>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="doacao" class="form-label text-start d-block"><i class="fa fa-stethoscope me-2"></i>Doação de Sangue</label>
                  <input type="number" id="doacao" class="form-control" placeholder="Pontos" max="2500"/>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="acaoSocial" class="form-label text-start d-block"><i class="fa fa-wheelchair-alt me-2"></i>Ação Social</label>
                  <input type="number" id="acaoSocial" class="form-control" placeholder="Pontos" max="1500"/>
                </div>
              </div>
              <div class="mt-2">
                <progress class="progress progress-bar-solidariedade" value="0" style="width: 100%; height: 10px"></progress>
                <div class="text-solidariedade mt-1 fw-bold">0 / 9000</div>
              </div>
            </div>
            <div class="card shadow-sm my-3 goal-card border-orange">
              <h2 class="fw-bold text-start mb-5"><i class="fa fa-camera-retro me-3"></i>Audiovisual</h2>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="fotos" class="form-label text-start d-block"><i class="fa fa-camera me-2"></i>Registro de Fotos</label>
                  <input type="number" id="fotos" class="form-control" placeholder="Pontos" max="1000"/>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="videos" class="form-label text-start d-block"><i class="fa fa-video-camera me-2"></i>Registro de Vídeos</label>
                  <input type="number" id="videos" class="form-control" placeholder="Pontos" max="500"/>
                </div>
              </div>
              <div class="mt-2">
                <progress class="progress progress-bar-audiovisual" value="0" style="width: 100%; height: 10px"></progress>
                <div class="text-audiovisual mt-1 fw-bold">0 / 1500</div>
              </div>
            </div>
          </div>

            <!-- Botões -->
            <div class="row justify-content-center my-4">
            <div class="col-6 col-md-3 mb-3">
              <button class="btn btn-primary w-100" @click="calcularPontuacoes">
              Calcular Pontuação
              </button>
            </div>
            <div class="col-6 col-md-3 mb-3">
              <button class="btn btn-outline-danger w-100" @click="limparCampos">
              Limpar Tudo
              </button>
            </div>
            </div>

          <div v-if="mostrarResultado" class="row mt-3">
            <div class="col-md-4 mb-3">
              <div class="card shadow-sm border-orange p-4">
                <h2 class="fw-bold mb-3">🏅 Esportes</h2>
                <p class="mb-0 fs-4"><strong> {{ totais.esportes }} </strong> pts.</p>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card shadow-sm border-orange p-4">
                <h2 class="fw-bold mb-3">🤝 Solidariedade</h2>
                <p class="mb-0 fs-4"><strong>{{ totais.solidariedade }} </strong> pts.</p>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div class="card shadow-sm border-orange p-4">
                <h2 class="fw-bold mb-3">🎥 Audiovisual</h2>
                <p class="mb-0 fs-4"><strong>{{ totais.audiovisual }} </strong> pts.</p>
              </div>
            </div>
            <div class="col-md-12 mt-3">
              <div class="card shadow-sm border-orange p-4">
                <h2 class="fw-bold mb-3">📊 Total Geral</h2>
                <p class="mb-0 fs-4"><strong>{{ totais.geral }}</strong> pts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
  export default {
    name: 'Gincana',
    mounted() {
      const atualizarBarra = (inputsSelector, barraSelector, textoSelector) => {
        const inputs = document.querySelectorAll(inputsSelector);
        const barra = document.querySelector(barraSelector);
        const texto = document.querySelector(textoSelector);

        let totalAtual = 0;
        let totalMax = 0;

        inputs.forEach(input => {
          const valor = parseInt(input.value) || 0;
          const max = parseInt(input.getAttribute('max')) || 0;

          totalAtual += Math.min(valor, max);
          totalMax += max;
        });

        if (barra && texto) {
          barra.max = totalMax;
          barra.value = totalAtual;
          texto.textContent = `${totalAtual} / ${totalMax}`;
        }
      };

      const categorias = [
        {
          inputs: '#mascote, #homenagem, #caracterizacao',
          barra: '.progress-bar-esportes',
          texto: '.text-esportes',
        },
        {
          inputs: '#arrecadacao, #doacao, #acaoSocial',
          barra: '.progress-bar-solidariedade',
          texto: '.text-solidariedade',
        },
        {
          inputs: '#fotos, #videos',
          barra: '.progress-bar-audiovisual',
          texto: '.text-audiovisual',
        }
      ];

      categorias.forEach(cat => {
        const inputs = document.querySelectorAll(cat.inputs);
        inputs.forEach(input => {
          input.addEventListener('input', () => {
            // Verifica e corrige valor acima do max
            const max = parseInt(input.getAttribute('max')) || 0;
            const valor = parseInt(input.value) || 0;

            if (valor > max) {
              input.value = max;
            }

            atualizarBarra(cat.inputs, cat.barra, cat.texto);
          });
        });
        atualizarBarra(cat.inputs, cat.barra, cat.texto);
      });
    },
    methods: {
      calcularCategoria(inputsSelector) {
        const inputs = document.querySelectorAll(inputsSelector);
        let total = 0;

        inputs.forEach(input => {
          let valor = parseInt(input.value) || 0;
          const max = parseInt(input.getAttribute('max')) || 0;
          if (valor > max) {
            valor = max;
            input.value = max;
          }
          total += valor;
        });

        return total;
      },

      calcularPontuacoes() {
        const esportes = this.calcularCategoria('#mascote, #homenagem, #caracterizacao');
        const solidariedade = this.calcularCategoria('#arrecadacao, #doacao, #acaoSocial');
        const audiovisual = this.calcularCategoria('#fotos, #videos');

        this.totais.esportes = esportes;
        this.totais.solidariedade = solidariedade;
        this.totais.audiovisual = audiovisual;
        this.totais.geral = esportes + solidariedade + audiovisual;

        this.mostrarResultado = true;
      },

      limparCampos() {
        const inputs = document.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
          input.value = '';
        });

        // Resetar os dados e esconder o card
        this.totais = {
          esportes: 0,
          solidariedade: 0,
          audiovisual: 0,
          geral: 0
        };

        this.mostrarResultado = false;

        // Atualizar as barras também
        const atualizarBarra = (inputsSelector, barraSelector, textoSelector) => {
          const inputs = document.querySelectorAll(inputsSelector);
          const barra = document.querySelector(barraSelector);
          const texto = document.querySelector(textoSelector);

          let totalAtual = 0;
          let totalMax = 0;

          inputs.forEach(input => {
            const valor = parseInt(input.value) || 0;
            const max = parseInt(input.getAttribute('max')) || 0;
            totalAtual += Math.min(valor, max);
            totalMax += max;
          });

          if (barra && texto) {
            barra.max = totalMax;
            barra.value = totalAtual;
            texto.textContent = `${totalAtual} / ${totalMax}`;
          }
        };

        atualizarBarra('#mascote, #homenagem, #caracterizacao', '.progress-bar-esportes', '.text-esportes');
        atualizarBarra('#arrecadacao, #doacao, #acaoSocial', '.progress-bar-solidariedade', '.text-solidariedade');
        atualizarBarra('#fotos, #videos', '.progress-bar-audiovisual', '.text-audiovisual');
      }
    },
    data() {
      return {
        totais: {
          esportes: 0,
          solidariedade: 0,
          audiovisual: 0,
          geral: 0
        },
        mostrarResultado: false
      };
    }
  };
</script>

<style scoped>
  /* HERO */
  .hero-section {
    padding-top: 120px;
    padding-bottom: 20px;
  }

  progress::-webkit-progress-value {
    background-color: rgb(255, 136, 0);
    height: 5px;
  }

  /* Parte do fundo da barra */
  progress::-webkit-progress-bar {
    background-color: #eee;
    height: 10px;
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
