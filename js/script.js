(function(mapContent) {
    mapContent.initMap = function(setup) {
        var mymap = L.map('mapid').setView([-22.907104, -47.063240], 12);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.satellite',
            accessToken: 'pk.eyJ1Ijoicm9iZXJ0YWphY2ltYmVydHQiLCJhIjoiY2pmNnhkMGtiMTlwOTJ4bzFjOGhxeWN4dSJ9.sm_36g6zwivXlk0NGxrfGw'
        }).addTo(mymap);

        var circle = L.circle([-22.907104, -47.063240], {
            color: 'yellow',
            fillColor: 'yellow',
            fillOpacity: 0.1,
            radius: 15000
        }).addTo(mymap);

        var parks = [{ coordinate: [-22.8720024, -47.0476037], legend: "<b>Taquaral</b><br>Av. Dr. Heitor Penteado, 1671 - Parque Taquaral, Campinas - SP, 13087-000" },
            { coordinate: [-22.8268947, -47.0820069], legend: "<b>Praça Durval Pattaro</b><br>R. Francisco de Barros Filho - Barão Geraldo, Campinas - SP, 13084-012" },
            { coordinate: [-22.8903441, -47.0923863], legend: "<b>Predreira do Chapadão</b><br>R. Dr. Alcídes Carvalho, S/n - Jardim Chapadão, Campinas - SP" },
            { coordinate: [-22.9041072, -47.0596227], legend: "<b>Largo do Rosário</b><br>Campinas, Largo do Rosario - Conceicao, Campinas - SP, 13010-070" },
            { coordinate: [-22.9063032, -47.0611977], legend: "<b>Praça Rui Barbosa</b><br>237, Rua 13 de Maio, 159 - Centro, Campinas - SP, 13010-070" },
            { coordinate: [-22.9061777, -47.0554188], legend: "<b>Praça Carlos Gomes</b><br>Conceicao, Campinas - SP, 13010-110" },
            { coordinate: [-22.9014867, -47.0537988], legend: "<b>Centro de Convivencia Cultural de Campinas</b><br>Praça Imprensa Fluminense, s/n - Cambuí, Campinas - SP, 13010-110" },
            { coordinate: [-22.8947771, -47.0589245], legend: "<b>Praça quinze de novembro</b><br>Praça Heróis da Laguna - Vila Itapura, Campinas - SP, 13012-100" },
            { coordinate: [-22.8933101, -47.1188617], legend: "<b>Praça Ângelo Rosseto</b><br>R. Quinze (Parque Via Norte) - Parque Via Norte, Campinas - SP, 13065-470" },
            { coordinate: [-22.8570629, -47.0689594], legend: "<b>Praça da Vila Costa e Silva</b><br>R. dos Imarés, 410 - Vila Costa e Silva, Campinas - SP, 13081-500" },
            { coordinate: [-22.8746352, -47.0436163], legend: "<b>Praça Arautos da Paz</b><br>Vila Nogueira, Campinas - SP, 13077-005" },
            { coordinate: [-22.9524272, -47.0339002], legend: "<b>Praça de Lazer</b><br>Jardim Antonio Von Zuben, Campinas - SP, 13044-520" },
            { coordinate: [-22.8216485, -47.0826997], legend: "<b>Praça do Côco</b><br>R. José Martins, 738 - Barão Geraldo, Campinas - SP, 13084-153" }
            // { coordinate: [], legend: "<b></b><br>" },

        ]
        parks.forEach(park => {
            L.marker(park.coordinate).addTo(mymap).bindPopup(park.legend).openPopup();
        });
    };
}(window));