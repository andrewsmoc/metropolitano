// A. Datos generales del sistema de transporte
    
var transportationData = {
  stations: {
    name: "Estaciones principales",
    items: [
    { /* 0 */ name: "Naranjal", address: "Av. Túpac Amaru cdra 45 con Av. Chinchaysuyo cdra 1 - Independencia", coordinatelat: "-11.982013", coordinatelng: "-77.058663", },
    { /* 1 */ name: "Izaguirre", address: "Av. Túpac Amaru cdra 37 con Av. C Izaguirre cdra 1 - Independencia", coordinatelat: "-11.988667", coordinatelng: "-77.056915", },
    { /* 2 */ name: "Pacífico", address: "Av. Túpac Amaru cdra 35 con Av. Pacífico cdra 1 - Independencia", coordinatelat: "-11.994166", coordinatelng: "-77.056207", },
    { /* 3 */ name: "Independencia", address: "Av. Túpac Amaru cdra 33 con Av. Los Pinos cdra 1 - Independencia", coordinatelat: "-11.997383", coordinatelng: "-77.055225", },
    { /* 4 */ name: "Jazmines", address: "Av. Túpac Amaru cdra 72 con Av. Los Jazmines cdra 1 - Independencia", coordinatelat: "-12.002236", coordinatelng: "-77.054719", },
    { /* 5 */ name: "Tomás Valle", address: "Av. Túpac Amaru con Av. Tomás Valle cdra 1 - Independencia", coordinatelat: "-12.007316", coordinatelng: "-77.053793", },
    { /* 6 */ name: "El Milagro", address: "Av. Túpac Amaru cdra 14 con Av. Bartolomé cdra 1 - San Martín de Porres/Independencia", coordinatelat: "-12.010883", coordinatelng: "-77.053041", },
    { /* 7 */ name: "Honorio Delgado", address: "Av. Túpac Amaru cdra 8 con Av. - Honorio Delgado cdra 1 - San Martín de Porres/Independencia", coordinatelat: "-12.018145", coordinatelng: "-77.051475", },
    { /* 8 */ name: "UNI", address: "Av. Túpac Amaru cdra 2 - San Martín de Porres/Rímac", coordinatelat: "-12.023329", coordinatelng: "-77.049930", },
    { /* 9 */ name: "Parque del Trabajo", address: "Av. Caquetá cdra 7 con Antón Sánchez cdra 1 - San Martín de Porres/Rímac", coordinatelat: "-12.030884", coordinatelng: "-77.044158", },
    { /* 10 */ name: "Caquetá", address: "Av. Caquetá cdra 1 con Av. Zarumilla cdra 1 - San Martín de Porres/Rímac", coordinatelat: "-12.036467", coordinatelng: "-77.043621", },
    { /* 11 */ name: "Ramon Castilla", address: "Av. Emancipación cdra 9 con Jr. Tayacaja cdra 6, Cercado de Lima", coordinatelat: "-12.043373", coordinatelng: "-77.042721", },
    { /* 12 */ name: "2 de Mayo", address: "Av. Alfonso Ugarte cdra 4 y 5 con Plaza Dos de Mayo, Cercado de Lima", coordinatelat: "-12.046330", coordinatelng: "-77.042785", },
    { /* 13 */ name: "Quilca", address: "Av. Alfonso Ugarte cdra 9 con Jr. Pomabamba, Breña/Cercado de Lima", coordinatelat: "-12.050862", coordinatelng: "-77.042377", },
    { /* 14 */ name: "España", address: "Av. Alfonso Ugarte cdra 13 con Av. República de Portugal, Breña/Cercado de Lima", coordinatelat: "-12.058138", coordinatelng: "-77.041765", },
    { /* 15 */ name: "Tacna", address: "Av. Emancipación cdra 4 y 5 con Av. Tacna cdra 5, Cercado de Lima", coordinatelat: "-12.04633", coordinatelng: "-77.037445", },
    { /* 16 */ name: "Jirón de la Unión", address: "Av. Emancipación cdra 1 Jr. de la Unión cdra 6, Cercado de Lima", coordinatelat: "-12.049050", coordinatelng: "-77.033110", },
    { /* 17 */ name: "Colmena", address: "Av. Nicolás de Piérola (Colmena) cdra 11 con Jr. Lampa cdra 9, Cercado de Lima", coordinatelat: "2.052725", coordinatelng: "-77.033097", },
    { /* 18 */ name: "Central", address: "Parque Los Héroes Navales con Av. Paseo de la República 170, Cercado de Lima", coordinatelat: "-12.057756", coordinatelng: "-77.035983", },
    { /* 19 */ name: "Estadio Nacional", address: "Av. Paseo de la República cdra 9 con Puente Peatonal, Cercado de Lima/La Victoria", coordinatelat: "-12.068615", coordinatelng: "-77.032185", },
    { /* 20 */ name: "Mexico", address: "Av. Paseo de la República cdra 13 con Puente México, Cercado de Lima/La Victoria", coordinatelat: "-12.076835", coordinatelng: "-77.028837", },
    { /* 21 */ name: "Canadá", address: "Av. Paseo de la República cdra 19 con Puente Canadá, Lince/La Victoria", coordinatelat: "-12.082416", coordinatelng: "-77.026531", },
    { /* 22 */ name: "Javier Prado", address: "Av. Paseo de la República cdra 28 con Puente Javier Prado, San Isidro", coordinatelat: "-12.090815", coordinatelng: "-77.022888", },
    { /* 23 */ name: "Canaval y Moreira", address: "Av. Paseo de la República cdra 32 con Puente Canaval y Moreira, San Isidro", coordinatelat: "-12.096784", coordinatelng: "-77.025071", },
    { /* 24 */ name: "Aramburú", address: "Av. Paseo de la República cdra 37 con Puente Aramburú, San Isidro", coordinatelat: "-12.102821", coordinatelng: "-77.027336", },
    { /* 25 */ name: "Domingo Orué", address: "Av. Paseo de la República cdra 43 con Puente Domingo Oru&eacute, San Isidro", coordinatelat: "-12.108596", coordinatelng: "-77.026386", },
    { /* 26 */ name: "Angamos", address: "Av. Paseo de la República cdra 48 con Puente Angamos, San Isidro", coordinatelat: "-12.113484", coordinatelng: "-77.025983", },
    { /* 27 */ name: "Ricardo Palma", address: "Av. Paseo de la República cdra 55 con Puente Ricardo Palma, Miraflores/Surquillo", coordinatelat: "-12.119123", coordinatelng: "-77.025871", },
    { /* 28 */ name: "Benavides", address: "Av. Paseo de la República cdra 59 con Puente Benavides, Miraflores", coordinatelat: "-12.125338", coordinatelng: "-77.024138", },
    { /* 29 */ name: "28 de julio", address: "Av. Paseo de la República cdra 61 con Puente Miraflores, Miraflores", coordinatelat: "-12.129586", coordinatelng: "-77.022786", },
    { /* 30 */ name: "Plaza de Flores", address: "Av. Rosendo Vidaurre cdra 5 y 6, Barranco", coordinatelat: "-12.135965", coordinatelng: "-77.018433", },
    { /* 31 */ name: "Balta", address: "Av. República de Panamá (Bolognesi) cdra 10 con óvalo Balta, Barranco", coordinatelat: "-12.141722", coordinatelng: "-77.017797", },
    { /* 32 */ name: "Bulevar", address: "Av. República de Panamá (Bolognesi) cdra 3 con calle Juan Pazos, Barranco", coordinatelat: "-12.148067", coordinatelng: "-77.020061", },
    { /* 33 */ name: "Estadio Unión", address: "Av. Escuela Militar cdra 2 con Pasaje Anaya, Barranco", coordinatelat: "-12.152736", coordinatelng: "-77.019734", },
    { /* 34 */ name: "Escuela Militar", address: "Av. Escuela Militar cdra 8, Chorrillos", coordinatelat: "-12.160800", coordinatelng: "-77.019128", },
    { /* 35 */ name: "Terán", address: "Av. Prolongación Paseo de la República cdra 1 con Av. Fernando Terán cdra 8, Chorrillos", coordinatelat: "-12.168325", coordinatelng: "-77.018795", },
    { /* 36 */ name: "Rosario de Villa", address: "Av. Prolongación Paseo de la República cdra 8 con Jr. Costa Azul, Chorillos", coordinatelat: "-12.173512", coordinatelng: "-77.014761", },
    { /* 37 */ name: "Matellini", address: "Av. Prolongación Paseo de la República cdra 18 con Av. Ariosto Matellini, Chorillos", coordinatelat: "-12.178996", coordinatelng: "-77.009783", },
    ]
  },
  routes: {
    name: "Rutas disponibles",
    services: [
    { name: "Regular A",
      directions: [
        { name: "Central a Naranjal", days: [1,2,3,4,5,6], times: ["0540","2255"], stations: [0,1,2,3,4,5,6,7,8,9,10,11,15,16,17,18], },
        { name: "Naranjal a Central", days: [1,2,3,4,5,6], times: ["0500","2215"], stations: [0,1,2,3,4,5,6,7,8,9,10,11,15,16,17,18], },
        { name: "Central a Naranjal", days: [0], times: ["0555","2235"], stations: [0,1,2,3,4,5,6,7,8,9,10,11,15,16,17,18], },
        { name: "Naranjal a Central", days: [0], times: ["0515","2155"], stations: [0,1,2,3,4,5,6,7,8,9,10,11,15,16,17,18], },
      ]
    },
    { name: "Regular B",
      directions: [
        { name: "Matellini a Naranjal", days: [1,2,3,4,5,6], times: ["0520","2300"], stations: [0,1,2,3,4,5,6,7,8,9,10,12,13,14,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
        { name: "Naranjal a Matellini", days: [1,2,3,4,5,6], times: ["0500","2255"], stations: [0,1,2,3,4,5,6,7,8,9,10,12,13,14,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
        { name: "Matellini a Naranjal", days: [0], times: ["0530","2210"], stations: [0,1,2,3,4,5,6,7,8,9,10,12,13,14,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
        { name: "Naranjal a Matellini", days: [0], times: ["0500","2200"], stations: [0,1,2,3,4,5,6,7,8,9,10,12,13,14,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
      ]
    },
    { name: "Regular C",
      directions: [
        { name: "Matellini a Castilla", days: [1,2,3,4,5,6], times: ["0505","2205"], stations: [11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
        { name: "Castilla a Matellini", days: [1,2,3,4,5,6], times: ["0520","2255"], stations: [11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
        { name: "Matellini a Castilla", days: [0], times: ["0530","2200"], stations: [11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
        { name: "Castilla a Matellini", days: [0], times: ["0530","2155"], stations: [11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37], },
      ]
    },
    { name: "Expreso 1",
      directions: [
        { name: "Matellini a Naranjal", days: [1,2,3,4,5], times: ["0620","0900","1730","2130"], stations: [0,8,10,12,13,14,18,22,23,26,31,32,33,34,35,36,37], },
        { name: "Naranjal a Matellini", days: [1,2,3,4,5], times: ["0600","0855","1635","2115"], stations: [0,8,10,12,13,14,18,22,23,26,31,32,33,34,35,36,37], },
      ]
    },
    { name: "Expreso 2",
      directions: [
        { name: "Plaza de Flores a Naranjal", days: [1,2,3,4,5], times: ["0615","0905","1700","2115"], stations: [0,5,8,10,18,22,23,26,30], },
        { name: "Naranjal a Plaza de Flores", days: [1,2,3,4,5], times: ["0600","0900","1635","2050"], stations: [0,5,8,10,18,22,23,26,30], },
      ]
    },
    { name: "Expreso 3",
      directions: [
        { name: "Plaza de Flores a Naranjal (Mañanas)", days: [1,2,3,4,5], times: ["0615","0905"], stations: [30,28,26,24,23,22,21,18,14,1,0], },
        { name: "Naranjal a Plaza de Flores (Mañanas)", days: [1,2,3,4,5], times: ["0600","0900"], stations: [30,28,26,24,23,22,21,18,8,3,1,0], },
        { name: "Plaza de Flores a Naranjal (Tardes)", days: [1,2,3,4,5], times: ["1700","2115"], stations: [30,28,26,24,23,22,21,18,8,3,1,0], },
        { name: "Naranjal a Plaza de Flores (Tardes)", days: [1,2,3,4,5], times: ["1635","2050"], stations: [30,28,26,24,23,22,21,18,14,1,0], },
      ]
    },
    { name: "Expreso 4",
      directions: [
        { name: "Plaza de Flores a Naranjal", days: [6], times: ["0620","2145"], stations: [0,1,5,8,10,12,14,18,22,23,26,30], },
        { name: "Naranjal a Plaza de Flores", days: [6], times: ["0600","2110"], stations: [0,1,5,8,10,12,14,18,22,23,26,30], },
      ]
    },
    { name: "Expreso 5",
      directions: [
        { name: "Plaza de Flores a Naranjal", days: [1,2,3,4,5], times: ["0930","1715"], stations: [30,27,26,23,22,21,18,14,10,8,7,5,3,0], },
        { name: "Naranjal a Plaza de Flores", days: [1,2,3,4,5], times: ["0900","1630"], stations: [30,27,26,23,22,21,18,14,8,5,3,0], },
      ]
    },
    { name: "Súper Expreso (Mañanas)",
      directions: [
        { name: "Plaza de Flores a Naranjal", days: [1,2,3,4,5], times: ["0710","0935"], stations: [0,18,23,26,30], },
        { name: "Naranjal a Plaza de Flores", days: [1,2,3,4,5], times: ["0630","0930"], stations: [0,23,26,30], },
      ]
    },
    ]
  },
};

// B. Saltos hacia atrás en páginas de la aplicación

  //info
  document.querySelector('#btn-info-back').addEventListener ('click', function () {
    document.querySelector('#info').className = 'right';
    document.querySelector('[data-position="current"]').className = 'current';
  });
  //about
  document.querySelector('#btn-about-back').addEventListener ('click', function () {
    document.querySelector('#about').className = 'right';
    document.querySelector('[data-position="current"]').className = 'current';
  });
  //stations
  document.querySelector('#btn-stations-back').addEventListener ('click', function () {
    document.querySelector('#stations').className = 'right';
    document.querySelector('[data-position="current"]').className = 'current';
  });
  //station
  document.querySelector('#btn-station-back').addEventListener ('click', function () {
    document.querySelector('#station').className = 'right';
    document.querySelector('[data-position="current"]').className = 'current';
  });
  //removefavoritestations
  document.querySelector('#remove-favorite-stations').addEventListener ('click', function () {
    this.className = 'fade-out';
  });
  //favoritestations
  document.querySelector('#btn-favorite-back').addEventListener ('click', function () {
    document.querySelector('#favorite-stations').className = 'right';
    document.querySelector('[data-position="current"]').className = 'current';
  });
  //neareststations
  document.querySelector('#btn-nearest-back').addEventListener ('click', function () {
    document.querySelector('#nearest-stations').className = 'right';
    document.querySelector('[data-position="current"]').className = 'current';
  });
  //tweets
  document.querySelector('#btn-tweets-back').addEventListener ('click', function () {
    document.querySelector('#tweets').className = 'right';
    document.querySelector('[data-position="current"]').className = 'current';
  });
    
// C. Funciones generales

  function makeLink(text) // this REGEX converts http(s) links that are embedded in the tweet text into real hyperlinks.
  {  
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;  
    return text.replace(exp,"<a href='$1' target='_blank'>$1</a>");
  }

// D. Generadores de contenido para páginas 'dinámicas'

  function showinformation()
  {
    document.querySelector('#info').className = 'current';
  }
  
  function showabout()
  {
    document.querySelector('#about').className = 'current';
  }
  
  function showstations()
  {
    var htmlstations = "<ul>";
    var numberstations = transportationData.stations.items.length;
    for (var i=0; i<numberstations; i++)
    {
      htmlstations += "<li><a href='javascript:showstation("+i+",transportationData)'>";
      htmlstations += "<aside class='icon comms-icon contacts-location'></aside>";
      htmlstations += "<p>"+transportationData.stations.items[i].name+"</p></a></li>";
    }
    htmlstations += "</ul>";
    document.querySelector('#list-of-stations').innerHTML = htmlstations;
    document.querySelector('#stations').className = 'current';
  }
  
  function showstation(stationselected,transportationData)
  {
    var htmlstation = "";
    htmlstation += "<ul><li><aside class='icon comms-icon contacts-location'></aside>";
    htmlstation += "<p>"+transportationData.stations.items[stationselected].name+"</p>";
    htmlstation += "<p>"+transportationData.stations.items[stationselected].address+"</p>";
    htmlstation += "</li></ul>";
    if (stationselected == localStorage.getItem("myfavoritestations"))
      htmlstation += "<div id='favoritebutton'><a role='button' href='javascript:removefavoritestation("+stationselected+",transportationData)'>Dejar de ser favorita</a></div>";
    else
      htmlstation += "<div id='favoritebutton'><a role='button' href='javascript:addfavoritestation("+stationselected+",transportationData)'>Fijar como favorita</a></div>";
    var today = new Date();
    var dayname = "";
    switch (today.getDay()) {
      case 0: dayname = "Domingo"; break
      case 1: dayname = "Lunes"; break
      case 2: dayname = "Martes"; break
      case 3: dayname = "Miércoles"; break
      case 4: dayname = "Jueves"; break
      case 5: dayname = "Viernes"; break
      case 6: dayname = "Sábado"; break
    }
    htmlstation += "<header>Servicios hoy "+dayname+"</header><ul>";
    var numberservices = transportationData.routes.services.length;
    for (var i=0; i<numberservices; i++)
    { 
      var servicealreadylisted = false;
      var numberdirections = transportationData.routes.services[i].directions.length;
      for (var j=0; j<numberdirections; j++)
      { 
        var servicewithcoincidences = false;
        if ( (transportationData.routes.services[i].directions[j].days.indexOf(today.getDay())!==-1)
          && (transportationData.routes.services[i].directions[j].stations.indexOf(stationselected)!==-1)
          ) // If today this direction is available, and this direction pass through this station
        {
          servicewithcoincidences = true;
          if (!servicealreadylisted)
          { // I'm going to list the Service's name only once
            htmlstation += "<li><aside class='icon comms-icon contacts-link'></aside><p>";
            htmlstation += transportationData.routes.services[i].name+'</p>';
            servicealreadylisted = true;
          }
          htmlstation += "<p>"+transportationData.routes.services[i].directions[j].name+"</p>";
          htmlstation += "</p><p>- Partidas: ";
          var numbertimes = transportationData.routes.services[i].directions[j].times.length;
          for (var k=0; k<numbertimes; k++)
          { if (k===0)
            { htmlstation += ""+transportationData.routes.services[i].directions[j].times[k].toString()+"-"; }
            else if ( (k%2) === 0 )
            { htmlstation += ";"+transportationData.routes.services[i].directions[j].times[k]+"-"; }
            else 
            { htmlstation += ""+transportationData.routes.services[i].directions[j].times[k]+""; }
          }
          htmlstation += "</p>";
        }
        if (servicewithcoincidences && (j==numberdirections-1) )
        { // If this service has coincidences and this is the last iteration I'm closing the list of Services
          htmlstation += "</li>";
        }
      }
    }
    htmlstation += "</ul>";
    document.querySelector('#station-details').innerHTML = htmlstation;
    document.querySelector('#station').className = 'current';
    document.querySelector('[data-position="current"]').className = 'left';
  }
  
  function addfavoritestation(stationselected,transportationData)
  {
    localStorage.setItem("myfavoritestations",stationselected);
    if ("mozNotification" in navigator)
    { // FirefoxOS
      var notification = navigator.mozNotification.createNotification(
        "Metropolitano de Lima",
        "Nueva estación favorita"
        );
      notification.onshow = function () { setTimeout(notification.close(), 1000); }
                    notification.show();
    }
    else
    if ("Notification" in navigator)
    { // Firefox +22
      var n = new Notification("Metropolitano de Lima",{body:"Nueva estación favorita"});
    }
    var htmlbutton = "<a role='button' href='javascript:removefavoritestation("+stationselected+",transportationData)'>Dejar de ser favorita</a>";
    document.querySelector('#favoritebutton').innerHTML =  htmlbutton;
  }
  
  function removefavoritestation(stationselected,transportationData)
  {
    localStorage.removeItem("myfavoritestations");
    var htmlbutton = "<a role='button' href='javascript:addfavoritestation("+stationselected+",transportationData)'>Fijar como favorita</a>";
    document.querySelector('#favoritebutton').innerHTML =  htmlbutton;
  }
  
  function confirmremoveallfavorites()
  {
    localStorage.removeItem('myfavoritestations');
    showfavoritestations();
  }
  
  function showfavoritestations()
  { 
    var favoritestation = localStorage.getItem("myfavoritestations");
    var htmlfavoritestations = "";
    if (favoritestation)
    { htmlfavoritestations = "<ul>";
      htmlfavoritestations += "<li><a href='javascript:showstation("+favoritestation+",transportationData)'>";
      htmlfavoritestations += "<aside class='icon comms-icon contacts-location'></aside>";
      htmlfavoritestations += "<p>"+transportationData.stations.items[favoritestation].name+"</p></a></li>";
      htmlfavoritestations += "</ul>";
      htmlfavoritestations += "<a role='button' href='javascript:removeallfavorites()'>Quitar favorita</a>";
    }
    else
    {
      htmlfavoritestations = "<ul><li><p>No hay estación favorita</p></li></ul>";
    }
    document.querySelector('#list-of-favorite-stations').innerHTML = htmlfavoritestations;
    document.querySelector('#favorite-stations').className = 'current';
  }
  
  function removeallfavorites()
  {
    document.querySelector('#remove-favorite-stations').className = 'fade-in';
  }
  
  function showneareststations()
  {
    if (!navigator.onLine)
    {
      document.querySelector('#list-of-tweets').innerHTML = "<p class='small'>Usted no está conectado a Internet.</p>";
      document.querySelector('#tweets').className = 'current';
    }
    else
    {
      document.querySelector('#list-of-nearest-stations').innerHTML = "<p class='small'>Por favor, espere un momento ... <progress></progress></p>";
      document.querySelector('#nearest-stations').className = 'current';
      if ("geolocation" in navigator)
      {
        var options = {
          /*enableHighAccuracy: true,
          timeout: 15000, //15 sec
          maximumAge: 0*/
          };
        function success(pos)
        {
          var crd = pos.coords;
          //console.log('Latitude : ' + crd.latitude);
          //console.log('Longitude: ' + crd.longitude);
          //console.log('More or less ' + crd.accuracy + ' meters.');
          var myLatLong = new LatLon(Geo.parseDMS(crd.latitude), Geo.parseDMS(crd.longitude));
          var numberstations = transportationData.stations.items.length;
          var min_distance;
          var neareststation;
          for (var i=0; i<numberstations; i++)
          {
            var current_station = new LatLon(Geo.parseDMS(transportationData.stations.items[i].coordinatelat), Geo.parseDMS(transportationData.stations.items[i].coordinatelng));
            //console.log(myLatLong);
            var current_distance = myLatLong.distanceTo(current_station);
            //console.log(current_distance);
            if (i==0)
            {
              min_distance = current_distance;
              neareststation = 0;
            }
            if (parseFloat(current_distance) < parseFloat(min_distance))
            {
              neareststation = i;
            }
          }
          var htmlneareststations = "";
          if (neareststation)
          { htmlneareststations = "<ul>";
            htmlneareststations += "<li><a href='javascript:showstation("+neareststation+",transportationData)'>";
            htmlneareststations += "<aside class='icon comms-icon contacts-location'></aside>";
            htmlneareststations += "<p>"+transportationData.stations.items[neareststation].name+"</p><p>"+min_distance +"Km aprox.</p></a></li>";
            htmlneareststations += "</ul>";
          }
          else
          {
            htmlneareststations = "<ul><li><p>No se puede determinar estación cercana.</p></li></ul>";
          }
          document.querySelector('#list-of-nearest-stations').innerHTML = htmlneareststations;
        };
        function error(err)
        {
          //console.warn('ERROR(' + err.code + '): ' + err.message);
          var htmlneareststations = "<p class='small'>Lo sentimos, no se pudo determinar su ubicación.</p>";
          document.querySelector('#list-of-nearest-stations').innerHTML = htmlneareststations;
        };
        navigator.geolocation.getCurrentPosition(success, error, options);
      }
      else
      {
        /* geolocation IS NOT available */
        var htmlneareststations = "<p class='small'>La geolocalización no está disponible en su equipo.</p>";
        document.querySelector('#list-of-nearest-stations').innerHTML = htmlneareststations;
      }
    }
  }
  
  function showtweets()
  {
    if (!navigator.onLine)
    {
      document.querySelector('#list-of-tweets').innerHTML = "<p class='small'>Usted no está conectado a Internet.</p>";
      document.querySelector('#tweets').className = 'current';
    }
    else
    {
      document.querySelector('#list-of-tweets').innerHTML = "<p class='small'>Por favor, espere un momento ... <progress></progress></p>";
      document.querySelector('#tweets').className = 'current';
      var cb = new Codebird;
      cb.setConsumerKey("SARefZOgzpapJ53OkZVw", "TskSVBlbiwC8YAoE5A8eCl95uSJug0GISQKvFBbC88I");
      cb.__call(
        "search_tweets",
        "q=from:MetropolitanoPT",
        function (reply)
        { //console.log(reply);
          // If there are answers
          reply_length = reply.statuses.length;
          if (reply_length > 0)
          {
            var htmltweets = "";
            htmltweets = "<ul>";
            for (var i=0; i < reply_length; i++)
            { //console.log(reply.statuses[i].text);
              if (reply.statuses[i].text.charAt(0)!=='@')
              {
                htmltweets += "<li><aside class='icon comms-icon contacts-twitter'></aside><p>MetropolitanoPT</p>";
                htmltweets += '<p class="small">'+makeLink(reply.statuses[i].text)+"</p></a></li>";
              }
            }
            htmltweets += "</ul>";
            document.querySelector('#list-of-tweets').innerHTML = htmltweets;
          }
        },
        true // this parameter required by Codebird
      );
    }
  }
  
