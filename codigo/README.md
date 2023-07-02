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

    // Initialize and add the map
function initMap() {
    // The map, centered at the current location
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12
    });
  
    // Obter a localização atual
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
  
          // Centralizar o mapa na localização atual
          map.setCenter(pos);
  
          // Adicionar um marcador na localização atual
          new google.maps.Marker({
            position: pos,
            map: map,
            title: 'Localização Atual'
          });
  
          // Adicionar um marcador em um posto 1 (local personalizado)
          const customLocation = { lat: -19.922797706609582, lng: -43.97943221074983 };
          const customMarker = new google.maps.Marker({
            position: customLocation,
            map: map,
            title: 'Local Personalizado',
            icon: {
              url: 'https://maps.google.com/mapfiles/ms/icons/gas.png',
              scaledSize: new google.maps.Size(32, 32)
            },
          });
          const gasPriceABC = 4.87; // Preço da gasolina do posto ABC
const alcoholPriceABC = 3.50; // Preço do álcool do posto ABC

const infoWindow = new google.maps.InfoWindow({
  content: '<div>' +
    '<strong>Nome do Posto:</strong> Posto Bretas<br>' +
    '<strong>GASOLINA:</strong> <span style="color: green;">R$' + gasPriceABC.toFixed(2) + '</span>' +
    ' <strong>|</strong> ' +
    '<strong>ÁLCOOL:</strong> <span style="color: red;">R$' + alcoholPriceABC.toFixed(2) + '</span><br>' +
    '</div>'
});

          customMarker.addListener('click', function() {
            infoWindow.open(map, customMarker);
          });
  
          // Adicionar outro marcador em uma localização específica (posto 2)
          const anotherLocation = { lat: -19.9215069157032, lng: -43.98231149715435 };
          const anotherMarker = new google.maps.Marker({
            position: anotherLocation,
            map: map,
            title: 'Segundo Local',
            icon: {
              url: 'https://maps.google.com/mapfiles/ms/icons/gas.png',
              scaledSize: new google.maps.Size(32, 32)
            },
          });
          const gasPrice = 4.90; // Preço da gasolina
const alcoholPrice = 3.30; // Preço do álcool

// Verifica se o resultado da divisão é menor ou igual a 0.7
if (gasPrice / alcoholPrice <= 0.7) {
  // Preço da gasolina em vermelho e do álcool em verde
  var gasColor = 'red';
  var alcoholColor = 'green';
} else {
  // Preço da gasolina em verde e do álcool em vermelho
  var gasColor = 'green';
  var alcoholColor = 'red';
}

const anotherInfoWindow = new google.maps.InfoWindow({
  content: '<div>' +
    '<strong>Nome do Posto:</strong> Posto Petrobras<br>' +
    '<strong>GASOLINA:</strong> <span style="color: ' + gasColor + ';">R$' + gasPrice.toFixed(2) + '</span>' +
    ' <strong>|</strong> ' +
    '<strong>ÁLCOOL:</strong> <span style="color: ' + alcoholColor + ';">R$' + alcoholPrice.toFixed(2) + '</span><br>' +
    '</div>'
});

          anotherMarker.addListener('click', function() {
            anotherInfoWindow.open(map, anotherMarker);
          });
  
          // Adicionar o terceiro marcador em uma localização específica (posto 3)
          const thirdLocation = { lat: -19.916394681189953, lng: -43.964994451816274 };
          const thirdMarker = new google.maps.Marker({
            position: thirdLocation,
            map: map,
            title: 'Terceiro Local',
            icon: {
              url: 'https://maps.google.com/mapfiles/ms/icons/gas.png',
              scaledSize: new google.maps.Size(32, 32)
            },
          });
          const gasPricePQR = 5.00; // Preço da gasolina do posto PQR
const alcoholPricePQR = 3.40; // Preço do álcool do posto PQR

const thirdInfoWindow = new google.maps.InfoWindow({
  content: '<div>' +
    '<strong>Nome do Posto:</strong> Posto King<br>' +
    '<strong>GASOLINA:</strong> <span style="color: red;">R$' + gasPricePQR.toFixed(2) + '</span>' +
    ' <strong>|</strong> ' +
    '<strong>ÁLCOOL:</strong> <span style="color: green;">R$' + alcoholPricePQR.toFixed(2) + '</span><br>' +
    '</div>'
});

          thirdMarker.addListener('click', function() {
            thirdInfoWindow.open(map, thirdMarker);
          });

           // Adicionar o quinto marcador em uma localização específica (posto 5)
      const fifthLocation = { lat: -19.9342674224452, lng: -44.022015284549106 };
      const fifthMarker = new google.maps.Marker({
        position: fifthLocation,
        map: map,
        title: 'Quinto Local',
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/gas.png',
          scaledSize: new google.maps.Size(32, 32)
        },
      });

      const gasPriceBeijaFlor = 4.90; // Preço da gasolina do posto Beija Flor
const alcoholPriceBeijaFlor = 3.30; // Preço do álcool do posto Beija Flor

const fifthInfoWindow = new google.maps.InfoWindow({
  content: '<div>' +
    '<strong>Nome do Posto:</strong> Posto Beija Flor<br>' +
    '<strong>GASOLINA:</strong> <span style="color: red;">R$' + gasPriceBeijaFlor.toFixed(2) + '</span>' +
    ' <strong>|</strong> ' +
    '<strong>ÁLCOOL:</strong> <span style="color: green;">R$' + alcoholPriceBeijaFlor.toFixed(2) + '</span><br>' +
    '</div>'
});


      fifthMarker.addListener('click', function() {
        fifthInfoWindow.open(map, fifthMarker);
      });

            // Adicionar o sexto marcador em uma localização específica (posto 6)
            const sixthLocation = { lat: -19.937355358797056, lng: -44.028764628884154 };
            const sixthMarker = new google.maps.Marker({
              position: sixthLocation,
              map: map,
              title: 'Sexto Local',
              icon: {
                url: 'https://maps.google.com/mapfiles/ms/icons/gas.png',
                scaledSize: new google.maps.Size(32, 32)
              },
            });
      
            const gasPriceDEF = 4.95; // Preço da gasolina do posto DEF
const alcoholPriceDEF = 3.35; // Preço do álcool do posto DEF

const sixthInfoWindow = new google.maps.InfoWindow({
  content: '<div>' +
    '<strong>Nome do Posto:</strong> Posto Jupiter<br>' +
    '<strong>GASOLINA:</strong> <span style="color: red;">R$' + gasPriceDEF.toFixed(2) + '</span>' +
    ' <strong>|</strong> ' +
    '<strong>ÁLCOOL:</strong> <span style="color: green;">R$' + alcoholPriceDEF.toFixed(2) + '</span><br>' +
    '</div>'
});

      
            sixthMarker.addListener('click', function() {
              sixthInfoWindow.open(map, sixthMarker);
            });
      
            // Adicionar o sétimo marcador em uma localização específica (posto 7)
            const seventhLocation = { lat: -19.93546961547217, lng: -44.03355257292824 };
            const seventhMarker = new google.maps.Marker({
              position: seventhLocation,
              map: map,
              title: 'Sétimo Local',
              icon: {
                url: 'https://maps.google.com/mapfiles/ms/icons/gas.png',
                scaledSize: new google.maps.Size(32, 32)
              },
            });
      
            const gasPriceShell = 4.85; // Preço da gasolina do posto Shell
const alcoholPriceShell = 3.25; // Preço do álcool do posto Shell

const seventhInfoWindow = new google.maps.InfoWindow({
  content: '<div>' +
    '<strong>Nome do Posto:</strong> Posto Shell<br>' +
    '<strong>GASOLINA:</strong> <span style="color: red;">R$' + gasPriceShell.toFixed(2) + '</span>' +
    ' <strong>|</strong> ' +
    '<strong>ÁLCOOL:</strong> <span style="color: green;">R$' + alcoholPriceShell.toFixed(2) + '</span><br>' +
    '</div>'
});

      
            seventhMarker.addListener('click', function() {
              seventhInfoWindow.open(map, seventhMarker);
            });
      
            // Adicionar o oitavo marcador em uma localização específica (posto 8)
            const eighthLocation = { lat: -19.93369899615736, lng: -44.00501381549639 };
            const eighthMarker = new google.maps.Marker({
              position: eighthLocation,
              map: map,
              title: 'Oitavo Local',
              icon: {
                url: 'https://maps.google.com/mapfiles/ms/icons/gas.png',
                scaledSize: new google.maps.Size(32, 32)
              },
            });
      
            const gasPriceJKL = 4.75; // Preço da gasolina do posto JKL
            const alcoholPriceJKL = 3.15; // Preço do álcool do posto JKL
            
            const eighthInfoWindow = new google.maps.InfoWindow({
              content: '<div>' +
                '<strong>Nome do Posto:</strong> Posto São João<br>' +
                '<strong>GASOLINA:</strong> <span style="color: red;">R$' + gasPriceJKL.toFixed(2) + '</span>' +
                ' <strong>|</strong> ' +
                '<strong>ÁLCOOL:</strong> <span style="color: green;">R$' + alcoholPriceJKL.toFixed(2) + '</span><br>' +
                '</div>'
            });
            
      
            eighthMarker.addListener('click', function() {
              eighthInfoWindow.open(map, eighthMarker);
            });
      
            // Adicionar o nono marcador em uma localização específica (posto 9)
            const ninthLocation = { lat: -19.934369332546158, lng: -43.996370569933084 };
            const ninthMarker = new google.maps.Marker({
              position: ninthLocation,
              map: map,
              title: 'Nono Local',
              icon: {
                url: 'https://maps.google.com/mapfiles/ms/icons/gas.png',
                scaledSize: new google.maps.Size(32, 32)
              },
            });
      
            const ninthGasPrice = 4.70; // Preço da gasolina do posto 9
            const ninthAlcoholPrice = 3.10; // Preço do álcool do posto 9
            
            const ninthInfoWindow = new google.maps.InfoWindow({
              content: '<div>' +
                '<strong>Nome do Posto:</strong> Posto Águia<br>' +
                '<strong>GASOLINA:</strong> <span style="color: red;">R$' + ninthGasPrice.toFixed(2) + '</span>' +
                ' <strong>|</strong> ' +
                '<strong>ÁLCOOL:</strong> <span style="color: green;">R$' + ninthAlcoholPrice.toFixed(2) + '</span><br>' +
                '</div>'
            });
      
            ninthMarker.addListener('click', function() {
              ninthInfoWindow.open(map, ninthMarker);
            });


  
          // Adicionar o quarto marcador em uma localização específica (posto 4)
          const fourthLocation = { lat: -19.922532125746507, lng: -43.97441736330393 };
          const fourthMarker = new google.maps.Marker({
            position: fourthLocation,
            map: map,
            title: 'Quarto Local',
            icon: {
              url: 'https://maps.google.com/mapfiles/ms/icons/gas.png',
              scaledSize: new google.maps.Size(32, 32)
            },
          });

          const fourthGasPrice = 4.80; // Preço da gasolina do posto XYZ
const fourthAlcoholPrice = 3.20; // Preço do álcool do posto XYZ

const fourthInfoWindow = new google.maps.InfoWindow({
  content: '<div>' +
    '<strong>Nome do Posto:</strong> Posto Alfa<br>' +
    '<strong>GASOLINA:</strong> <span style="color: red;">R$' + fourthGasPrice.toFixed(2) + '</span>' +
    ' <strong>|</strong> ' +
    '<strong>ÁLCOOL:</strong> <span style="color: green;">R$' + fourthAlcoholPrice.toFixed(2) + '</span><br>' +
    '</div>'
});

          
          fourthMarker.addListener('click', function() {
            fourthInfoWindow.open(map, fourthMarker);
          });

          
  
          
        },
        function() {
          handleLocationError(true, map.getCenter());
        }
      );
    } else {
      // Navegador não suporta geolocalização
      handleLocationError(false, map.getCenter());
    }
  }
  
  function handleLocationError(browserHasGeolocation, pos) {
    const infoWindow = new google.maps.InfoWindow({
      position: pos,
      content: browserHasGeolocation
        ? "Erro: O serviço de geolocalização falhou."
        : "Erro: Seu navegador não suporta geolocalização."
    });
    infoWindow.open(map);
  }
  
  window.initMap = initMap;
  
  // Verificar permissão de geolocalização ao carregar a página
  document.addEventListener("DOMContentLoaded", function() {
    if ("geolocation" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function(result) {
          if (result.state === "granted") {
            initMap(); // Inicialize o mapa se a permissão for concedida
          } else if (result.state === "prompt") {
            showLocationPermissionAlert(); // Solicitar permissão se ainda não foi concedida
          } else {
            showLocationPermissionDeniedAlert(); // Permissão de acesso à localização negada
          }
        });
    } else {
      // O navegador não suporta a API de geolocalização
      showLocationNotSupportedAlert();
    }
  });
  
  function showLocationPermissionAlert() {
    alert("Por favor, conceda acesso à sua localização para visualizar o mapa.");
  }
  
  function showLocationPermissionDeniedAlert() {
    alert("O acesso à sua localização foi negado. Alguns recursos podem não estar disponíveis.");
  }
  
  function showLocationNotSupportedAlert() {
    alert(
      "Seu navegador não suporta geolocalização. Alguns recursos podem não estar disponíveis."
    );
  }




// Obtém os elementos HTML relevantes
const loginLink = document.getElementById('loginLink');
const overlay = document.getElementById('overlay');
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const createAccountButton = document.getElementById('createAccountButton');

// Adiciona o evento de clique no link de login
loginLink.addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    overlay.style.display = 'flex'; // Exibe o overlay de login
});

// Adiciona o evento de envio do formulário de login
loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  // Valida o login com base nas informações armazenadas
  const username = usernameInput.value;
  const password = passwordInput.value;

  const storedAccountData = JSON.parse(localStorage.getItem('accountData'));
  if (storedAccountData && storedAccountData.username === username && storedAccountData.password === password) {
      // Redireciona o usuário para a página do usuário
      window.location.href = 'login.html';
  } else {
      alert('Usuário ou senha inválidos. Tente novamente.');
  }
});


// Adiciona o evento de clique no botão "Criar Conta"
createAccountButton.addEventListener('click', function (event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    
    const newUsername = usernameInput.value;
    const newPassword = passwordInput.value;
    
    // Armazena as informações da nova conta no LocalStorage
    const accountData = {
        username: newUsername,
        password: newPassword
    };
    localStorage.setItem('accountData', JSON.stringify(accountData));
    
    alert('Conta criada com sucesso! Faça login com as informações fornecidas.');
});

// Fecha o pop-up de login ao clicar fora dele
overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
});
/* cabeçalho */
.bg-verde {
    background-color: #ecf6ed; /* substitua pelo código da cor desejada */
  }

.navbar-brand{
    font-weight: bold;
    color: #444242;
}

#map {
  height: 500px; /* A altura padrão */
  width: 100%; /* A largura ocupa toda a largura da página */
  align-items: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #000; /* Adiciona uma borda sólida de 1 pixel com cor preta */

  /* Estilos para telas menores */
  @media screen and (max-width: 768px) {
    height: 350px; /* Reduz a altura para telas menores */
  }
}



/*login */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  justify-content: center;
  align-items: center;
}

.login-popup {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.login-popup h2 {
  margin-top: 0;
}

.login-popup label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.login-popup input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

.login-popup button {
  padding: 10px 30px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 0.5rem;
  margin-left: 2rem;
}

.login-popup button:hover {
  background-color: #45a049;
}

#overlay.show {
  display: flex;
}

/* Notícias */
section {
  margin-bottom: 20px;
}

h5 {
  font-size: 20px;
  font-weight: bold;
}

.container {
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  padding: 0px, 0px;
  margin: 0px, 0px;
}

.news {
  display: flex;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
}

.image {
  width: 150px;
  height: auto;
  margin-right: 10px;
}

.news-content {
  flex: 1;
  text-align: left;
}

.news-content p {
  margin: 0;
}

.news-content a {
  color: #2762a6;
  text-decoration: none;
}

.ver-mais-button {
  display: flex;
  align-items: center;
}

.ver-mais-button a {
  display: inline-block;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

</body>
