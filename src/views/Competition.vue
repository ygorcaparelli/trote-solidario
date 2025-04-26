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
              <li class="nav-item"><a class="nav-link" href="/gincana"><i class="fa fa-trophy"></i> Gincana</a></li>
              <li class="nav-item"><a class="nav-link" href="/integracao"><i class="fa fa-users"></i> Integração</a></li>
              <li class="nav-item"><a class="nav-link" href="/observacoes"><i class="fa fa-sticky-note"></i> Observações</a></li>
              <li class="nav-item"><a class="nav-link" href="/calculadoras"><i class="fa fa-calculator"></i> Calculadoras</a></li>
            </ul>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="hero-section text-center pt-5 mt-5">
        <div class="container">
          <h1 class="fw-bold display-5 mb-3 text-orange">Gincana do Trote Solidário</h1>
          <p class="lead text-muted">Competições e desafios que promovem a solidariedade e integração entre os alunos</p>
        </div>
      </section>

      <!-- Conteúdo Principal -->
      <section class="py-5">
        <div class="container">
          <!-- Equipes -->
          <div class="card shadow-sm mb-5 goal-card border-orange">
              <div class="card-body">
              <h2 class="text-center fw-bold text-orange mb-4"><i class="fa fa-users me-2"></i> Equipes do Trote Solidário 2025</h2>
              <p class="text-muted text-center mb-4">
                  Equipes formadas pela Reitoria, de forma equilibrada, reconhecidas por cores sorteadas.
              </p>
              <div class="alert border-red" role="alert">
                  Cada equipe será reconhecida por uma cor (Laranja, Preta, Roxa, Verde, Vermelha) sorteada em 18/02/2025.
              </div>

              <div class="table-responsive mb-4">
                  <h5 class="fw-bold text-center mb-3">Equipes e Padrinhos</h5>
                  <table class="table table-bordered align-middle">
                  <thead class="table-light">
                      <tr>
                      <th>Equipe</th>
                      <th>Cursos</th>
                      <th>Alunos</th>
                      <th>Padrinhos</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <td><span class="badge bg-warning text-dark">Laranja</span></td>
                      <td>Matemática, Letras (Português/Inglês), Engenharia de Software</td>
                      <td>97</td>
                      <td>Em breve</td>
                      </tr>
                      <tr>
                      <td><span class="badge bg-dark">Preta</span></td>
                      <td>Medicina, Enfermagem</td>
                      <td>103</td>
                      <td>Em breve</td>
                      </tr>
                      <tr>
                      <td><span class="badge purple">Roxa</span></td>
                      <td>Comunicação Social – PP, Sistemas de Informação, Ciência da Computação</td>
                      <td>102</td>
                      <td>Em breve</td>
                      </tr>
                      <tr>
                      <td><span class="badge bg-success">Verde</span></td>
                      <td>Engenharia de Produção, Engenharia Civil, Psicologia</td>
                      <td>88</td>
                      <td>Em breve</td>
                      </tr>
                      <tr>
                      <td><span class="badge bg-danger">Vermelha</span></td>
                      <td>Administração, Ciências Contábeis</td>
                      <td>93</td>
                      <td>Em breve</td>
                      </tr>
                  </tbody>
                  </table>

                <div class="table-responsive">
                  <h5 class="fw-bold text-center mt-5 mb-3">Cursos e Alunos</h5>
                  <table class="table table-bordered align-middle">
                      <thead class="table-light">
                      <tr>
                          <th>Curso</th>
                          <th>Alunos</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr><td>Administração</td><td>70</td></tr>
                      <tr><td>Ciência da Computação</td><td>36</td></tr>
                      <tr><td>Ciências Contábeis</td><td>23</td></tr>
                      <tr><td>Comunicação Social – PP</td><td>37</td></tr>
                      <tr><td>Enfermagem</td><td>19</td></tr>
                      <tr><td>Engenharia Civil</td><td>20</td></tr>
                      <tr><td>Engenharia de Produção</td><td>9</td></tr>
                      <tr><td>Engenharia de Software</td><td>60</td></tr>
                      <tr><td>Letras (Port./Inglês)</td><td>22</td></tr>
                      <tr><td>Matemática</td><td>16</td></tr>
                      <tr><td>Medicina</td><td>84</td></tr>
                      <tr><td>Psicologia</td><td>60</td></tr>
                      <tr><td>Sistemas de Informação</td><td>29</td></tr>
                      </tbody>
                  </table>
              </div>
              </div>
              <p class="text-muted text-center mt-3 small">Fonte: Sistema Acadêmico/Uni-FACEF, em 18/02/2025</p>
              </div>
          </div>

          <!-- Alimentos e Suplementos -->
          <div class="card shadow-sm mb-5 goal-card border-orange">
              <div class="card-body">
                  <h2 class="text-center fw-bold text-orange mb-4"><i class="fa fa-cutlery me-2"></i> Alimentos e Suplementos</h2>
                  <p class="text-muted text-center mb-4">
                      Arrecadação/doação de alimentos que posteriormente seráo entregues a entidades e intstituições assistenciais onde Voluntários da Saúde atuam no Hospital do Câncer de Franca.
                  </p>
                  <div class="card shadow-sm mb-5 goal-card border-orange">
                      <h5 class="fw-bold text-center mb-3">Kit Alimentação</h5>
                      <p class="mb-4">
                          Itens <strong>OBRIGATÓRIOS</strong> que devem estar presentes em cada kit alimentação:
                      </p>

                      <ul class="list-activities">
                          <li><strong>2 un.</strong> Pacote 5kg de arroz - Tipo 1</li>
                          <li><strong>2 un.</strong> Pacote 2kg (ou <strong>4 un.</strong> 1kg) de feijão - Tipo carioca</li>
                          <li><strong>3 un.</strong> Óleo de soja (1 litro ou 900ml)</li>
                          <li><strong>6 un.</strong> Pacote de macarrão 400/500g (ou <strong> 3un.</strong> de 1 Kg)</li>
                      </ul>
                  </div>
                  <div class="card shadow-sm mb-5 goal-card border-orange">
                      <h5 class="fw-bold text-center mb-3">Suplementos</h5>
                      <p class="mb-4">
                        Suplementos preferencialmente no sabor baunilha:
                      </p>

                      <ul class="list-activities">
                          <li><strong>400 g.</strong> Esure </li>
                          <p>ou</p>
                          <li><strong>400 g.</strong> Nutren 1.0 </li>
                      </ul>
                  </div>
                  <div class="card shadow-sm mb-5 goal-card border-orange">
                    <h5 class="fw-bold text-center mb-3">Metas das equipes</h5>
                    <div class="table-responsive mb-4">
                        <table class="table table-bordered align-middle">
                        <thead class="table-light">
                            <tr>
                            <th>Equipe</th>
                            <th style="width: 30%;">Cursos</th>
                            <th>Meta</th>
                            <th>80%</th>
                            <th>50%</th>
                            <th>20%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><span class="badge bg-warning text-dark">Laranja</span></td>
                            <td>Matemática, Letras (Português/Inglês), Engenharia de Software</td>
                            <td>97 Kits - 49 Sup.</td>
                            <td>78 Kits - 39 Sup.</td>
                            <td>49 Kits - 25 Sup.</td>
                            <td>19 Kits - 10 Sup.</td>
                            </tr>
                            <tr>
                            <td><span class="badge bg-dark">Preta</span></td>
                            <td>Medicina, Enfermagem</td>
                            <td>103 Kits - 52 Sup.</td>
                            <td>82 Kits - 42 Sup.</td>
                            <td>52 Kits - 26 Sup.</td>
                            <td>21 Kits - 10 Sup.</td>
                            </tr>
                            <tr>
                            <td><span class="badge purple">Roxa</span></td>
                            <td>Comunicação Social – PP, Sistemas de Informação, Ciência da Computação</td>
                            <td>102 Kits - 51 Sup.</td>
                            <td>82 Kits - 41 Sup.</td>
                            <td>51 Kits - 26 Sup.</td>
                            <td>20 Kits - 10 Sup.</td>
                            </tr>
                            <tr>
                            <td><span class="badge bg-success">Verde</span></td>
                            <td>Engenharia de Produção, Engenharia Civil, Psicologia</td>
                            <td>88 Kits - 44 Sup.</td>
                            <td>70 Kits - 35 Sup.</td>
                            <td>44 Kits - 22 Sup.</td>
                            <td>18 Kits - 9 Sup.</td>
                            </tr>
                            <tr>
                            <td><span class="badge bg-danger">Vermelha</span></td>
                            <td>Administração, Ciências Contábeis</td>
                            <td>93 Kits - 47 Sup.</td>
                            <td>74 Kits - 38 Sup.</td>
                            <td>47 Kits - 24 Sup.</td>
                            <td>19 Kits - 9 Sup.</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                  </div>
                  <div class="card shadow-sm mb-5 goal-card border-orange">
                      <h5 class="fw-bold text-center mb-3">Pontuação</h5>
                      <ul class="list-activities">
                          <li><strong>5.000 pts.</strong> Caso haja 100% dos itens entregues</li>
                          <li><strong>4.000 pts.</strong> Caso haja 80% dos itens entregues</li>
                          <li><strong>2.500 pts.</strong> Caso haja 50% dos itens entregues</li>
                          <li><strong>1.000 pts.</strong> Caso haja 20% dos itens entregues</li>
                          <li class="mt-4">A equipe não pontua caso haja <strong>abaixo</strong> de 20% dos itens entregues</li>
                      </ul>
                  </div>
                  <p class="text-muted text-center mt-3 small">Fonte: Sistema Acadêmico/Uni-FACEF, em 18/02/2025</p>
              </div>
          </div>

          <!-- Doação de sangue -->
          <div class="card shadow-sm mb-5 goal-card border-orange">
            <h2 class="text-center fw-bold text-orange mb-4"><i class="fa fa-stethoscope me-1" style="font-size: 35px;"></i> Doação de sangue</h2>
            <p class="aviso badge mb-4 animate__animated animate__headShake animate__slower animate__infinite">
              <i class="fa fa-info-circle p-1"></i>
              A meta é que 1 a cada 2 alunos doem sangue!
            </p>
            <p class="text-muted text-center mb-4">
              A doação de sangue é um ato de solidariedade e cidadania. O sangue doado é utilizado em transfusões, cirurgias e tratamentos médicos, salvando vidas e promovendo a saúde da população.
            </p>
            <div class="card shadow-sm mb-5 goal-card border-orange">
              <h5 class="fw-bold text-center mb-3">Pontuação</h5>
              <ul class="list-activities">
                  <li><strong>2.500 pts.</strong> Caso a meta seja cumprida </li>
                  <li><strong>BONUS + 20 pts.</strong> Caso haja uma doação além da meta (por doação)</li>
                  <li><strong>20 pts.</strong> Caso cada doação</li>
                  <li class="mt-4">A equipe não pontua caso <strong>NÃO</strong> haja doação.</li>
              </ul>
            </div>

            <div class="table-responsive mb-4">
                  <h5 class="fw-bold text-center mb-3">Meta doações de sangue</h5>
                  <table class="table table-bordered align-middle">
                    <thead class="table-light">
                        <tr>
                        <th style="width: 50%;">Equipe</th>
                        <th>Meta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td><span class="badge bg-warning text-dark">Laranja</span></td>
                          <td>49</td>
                        </tr>
                        <tr>
                          <td><span class="badge bg-dark">Preta</span></td>
                          <td>52</td>
                        </tr>
                        <tr>
                          <td><span class="badge purple">Roxa</span></td>
                          <td>51</td>
                        </tr>
                        <tr>
                          <td><span class="badge bg-success">Verde</span></td>
                          <td>44</td>
                        </tr>
                        <tr>
                          <td><span class="badge bg-danger">Vermelha</span></td>
                          <td>47</td>
                        </tr>
                    </tbody>
                  </table>
              </div>
          </div>

          <!-- Ação social -->
          <div class="card shadow-sm mb-5 goal-card border-orange">
            <h2 class="text-center fw-bold text-orange mb-4"><i class="fa fa-users me-2"></i> Ação social</h2>
            <div class="card shadow-sm mb-5 goal-card border-orange">
              <p class="aviso badge mb-4 animate__animated animate__pulse animate__infinite">
                <i class="fa fa-info-circle p-1"></i>
                <strong>+ 1.500 pts.</strong> caso a ação seja realizada
              </p>

              <p class="text-muted text-center mb-4">
                A ação visa promover a solidariedade e o compromisso social dos alunos do Uni-FACEF, incentivando a participação em atividades que beneficiem toda a comunidade. Deste modo, a ação social é uma oportunidade para os alunos se envolverem em projetos que tenham um impacto positivo na sociedade.
              </p>

              <p class="text-muted text-left">
                Os alunos estarão proprícios a elaborar um projeto de ação social, no qual será definido pela equipe.
              </p>

              <div class="alert-orange border-orange" role="alert">
                <ul>
                  <li class="mb-3">O local escolhido pela equipe deverá ser informado à comissão organizadora do Trote Solidário de modo que seja verificado a disponibilidade e a viabilidade da ação.</li>
                  <li>O prazo final para comunicar sobre a ação social é até o dia 28/02/2025.</li>
                </ul>
              </div>

              <h5 class="fw-bold text-center mb-3 mt-5">Os requisitos da ação</h5>
              <p>
                Data de entrega até 02/04/2025, de 08h às 10h no Uni-FACEF Unidade I. A entrega deverá ser feita via pendrive.
              </p>

              <p class="d-flex justify-content-start mt-4">Conteudo do pendrive: </p>
              <div class="alert-orange border-orange" role="alert">
                <ul>
                  <li>
                    <h6 class="mb-2">Relatório da ação social (<strong>máximo 5 páginas</strong>) com os seguintes tópicos:</h6>
                    <ul>
                      <li>Cor da equipe.</li>
                      <li>Nome | Curso | Semestre dos participantes da ação.</li>
                      <li>Data e local realizado</li>
                      <li>Entidade visitada</li>
                      <li>Objetivo</li>
                      <li>Detalhes da ação</li>
                      <li>Resultados da ação</li>
                    </ul>
                  </li>
                  <li class="mt-3">
                    Material Audiovisual
                  </li>
                </ul>
              </div>
              <p class="aviso badge mt-4 animate__animated animate__headShake animate__slower animate__infinite">
                <i class="fa fa-info-circle p-1"></i>
                A ação deve envolver pelo menos 8 estudantes, com a participação de mais calouros do que veteranos.
              </p>
            </div>
          </div>

          <!-- Ação social -->
          <div class="card shadow-sm mb-5 goal-card border-orange">
            <h2 class="text-center fw-bold text-orange mb-4"><i class="fa fa-video-camera me-2"></i> Sobre o material audiovisual</h2>
            <div class="row">
              <div class="col-md-6">
                <div class="card shadow-sm mb-4 goal-card border-orange">
                  <div class="card-col">
                    <h5 class="fw-bold text-center mb-3">PASTA 1</h5>
                    <p>Vídeos e fotos do material arrecadado</p>
                    <div class="text-start">
                      <p class="aviso badge animate__animated animate__headShake animate__slower animate__infinite">
                        <strong>1.000 pts</strong>.
                      </p>
                      <ul>
                        <li>30 fotos</li>
                        <li>05 vídeos doações de sangue</li>
                        <li>02 vídeos (horizontal e vertical)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card shadow-sm mb-4 goal-card border-orange">
                  <div class="card-col">
                    <h5 class="fw-bold text-center mb-3">PASTA 2</h5>
                    <p>Vídeos e fotos da ação social</p>
                    <div class="text-start">
                      <p class="aviso badge animate__animated animate__headShake animate__slower animate__infinite">
                        <strong>500 pts</strong>.
                      </p>
                      <ul>
                        <li>15 fotos</li>
                        <li>02 vídeos (horizontal e vertical)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="alert-orange border-orange" role="alert">
              <ul>
                <h5 class="my-2"><strong>Requisitos</strong></h5>
                <li class="mb-3"><h6>Fotos em <strong>.jpeg | .heic | .png</strong> com resolução de <strong>1080x1920</strong> (Full HD)</h6></li>
                <li class="mb-3"><h6>Videos em <strong>.MP4</strong> com resolução <strong>4K</strong> no formato <strong>16:9</strong> (horizontal) ou <strong>9:16</strong> (vertical)</h6></li>
              </ul>
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
    height: 25vh !important;
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
</style>
