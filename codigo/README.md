# Código do Projeto

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bomba Certa</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script type="module" src="./script.js"></script>
</head>
<body>
    <header>
        <nav class="navbar col-12 m-auto navbar-expand-lg bg-verde" style="z-index: 999;"> 
            <div class="container">
                <a class="navbar-logo" href="#"> 
                    <img src="img/gaslogo.png" alt="Logo-bolsa" width="50" height="50">
                </a>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Bomba Certa</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="loginLink" href="#">Login</a>
                            </li>
                            
                            <div class="overlay" id="overlay">
                                <div class="login-popup">
                                    <h2>Login</h2>
                                    <form id="loginForm">
                                        <label for="username">Usuário:</label>
                                        <input type="text" id="username">
                                        <label for="password">Senha:</label>
                                        <input type="password" id="password">
                                        <button type="submit">Entrar</button>
                                    </form>
                                    <button id="createAccountButton">Criar Conta</button>
                                </div>
                            </div>
                            <li class="nav-item">
                              <a class="nav-link active" href="gasolina.html">Gasolina</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link active" href="alcool.html">Álcool</a>
                            </li>
                            

                        </ul>
                        
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <section>
             <!-- MAPA -->
            <div id="map">
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDPlY0TgI31KocM3loQoEw-kCeV8WrWExw&callback=initMap&v=weekly" defer></script>
            </div>  
        </section> 
        <br> 

        
        <section class="postos-section">
            <h5>Postos em destaque</h5>
        
            <div class="posto-container">
              <div class="posto">
                <img class="posto-image" src="img/petrobras.png" alt="Posto 1">
                <div class="posto-details">
                  <div class="posto-nome">Posto Beija Flor</div>
                  <div class="posto-preco">Gasolina: R$ 5,21 <br> Álcool: R$ 3,49</div>
                </div>
              </div>
        
              <div class="posto">
                <img class="posto-image" src="img/petrobras.png" alt="Posto 2">
                <div class="posto-details">
                  <div class="posto-nome">Posto Bretas</div>
                  <div class="posto-preco">Gasolina: R$ 5,15 <br> Álcool: R$ 3,39</div>
                </div>
              </div>
        
              <div class="posto">
                <img class="posto-image" src="img/shell.png" alt="Posto 3">
                <div class="posto-details">
                  <div class="posto-nome">Posto Shell</div>
                  <div class="posto-preco">Gasolina: R$ 5,29 <br> Álcool: R$ 3,55</div>
                </div>
              </div>
        
              <div class="posto">
                <img class="posto-image" src="img/petrobras.png" alt="Posto 4">
                <div class="posto-details">
                  <div class="posto-nome">Posto Águia</div>
                  <div class="posto-preco">Gasolina: R$ 5,18 <br> Álcool: R$ 3,45</div>
                </div>
              </div>
        
              <div class="posto">
                <img class="posto-image" src="img/shell.png" alt="Posto 5">
                <div class="posto-details">
                  <div class="posto-nome">Posto Pica Pau</div>
                  <div class="posto-preco">Gasolina: R$ 5,35 <br> Álcool: R$ 3,59</div>
                </div>
              </div>

              <div class="posto">
                <img class="posto-image" src="img/shell.png" alt="Posto 5">
                <div class="posto-details">
                  <div class="posto-nome">Posto King</div>
                  <div class="posto-preco">Gasolina: R$ 5,35 / Álcool: R$ 3,59</div>
                </div>
              </div>
            </div>
          </section>

        <section>
            <h5>Portal de Notícias</h5>´
            <div class="ver-mais-button">
              <a href="pagina_noticias.html">Ver Mais</a>
            </div>
            <div class="container-wrapper">
            <div class="container">
                <div class="news">
                    <img class="image" src="img/gasolina.avif" alt="Ultimas noticias">
                    <div class="news-content">
                        <p>Preço médio da gasolina cai pela 4ª semana consecutiva nos postos, a R$ 5,21. Para mais informações <a href="https://g1.globo.com/economia/noticia/2023/06/03/preco-medio-da-gasolina-cai-pela-4a-semana-consecutiva-nos-postos-a-r-521.ghtml" target="_blank" rel="external">clique aqui</a></p>
                    </div>
                </div>
                <div class="news">
                    <img class="image" src="img/gasosa.jpg" alt="Ultimas noticias">
                    <div class="news-content">
                        <p>Como a mudança no ICMS tornou a gasolina mais cara <a href="https://www.metropoles.com/negocios/como-mudanca-no-icms-tornou-a-gasolina-mais-cara" target="_blank" rel="external">clique aqui</a></p>
                    </div>
                </div>
                <div class="news">
                    <img class="image" src="img/combustiveis.jpg" alt="Ultimas noticias">
                    <div class="news-content">
                        <p>Fortaleza tem a terceira gasolina mais cara do Nordeste, diz pesquisa da ANP <a href="https://g1.globo.com/ce/ceara/noticia/2023/06/03/fortaleza-tem-a-terceira-gasolina-mais-cara-do-nordeste-diz-pesquisa-da-anp.ghtml" target="_blank" rel="external">clique aqui</a></p>
                    </div>
                </div>
            </div>
          </div>
        </section>
        <br> <br>


        


    </main>

   


</body>
