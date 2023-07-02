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
        const infoWindow = new google.maps.InfoWindow({
          content: '<div>' +
            '<strong>Nome do Posto:</strong> Posto ABC<br>' +
            '<strong>GASOLINA:</strong> R$5,20 <strong> | </strong> <strong>ÁLCOOL:</strong> R$3,50 <br>' +
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
        const anotherInfoWindow = new google.maps.InfoWindow({
          content: '<div>' +
            '<strong>Nome do Posto:</strong> Posto EFG<br>' +
            '<strong>GASOLINA:</strong> R$4,90 <strong> | </strong> <strong>ÁLCOOL:</strong> R$3,30 <br>' +
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
        const thirdInfoWindow = new google.maps.InfoWindow({
          content: '<div>' +
            '<strong>Nome do Posto:</strong> Posto PQR<br>' +
            '<strong>GASOLINA:</strong> R$5,00 <strong> | </strong> <strong>ÁLCOOL:</strong> R$3,40 <br>' +
            '</div>'
        });
        thirdMarker.addListener('click', function() {
          thirdInfoWindow.open(map, thirdMarker);
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
        const fourthInfoWindow = new google.maps.InfoWindow({
          content: '<div>' +
            '<strong>Nome do Posto:</strong> Posto XYZ<br>' +
            '<strong>GASOLINA:</strong> R$4,80 <strong> | </strong> <strong>ÁLCOOL:</strong> R$3,20 <br>' +
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