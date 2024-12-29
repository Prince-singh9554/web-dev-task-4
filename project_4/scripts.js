// Initialize Google Map (replace YOUR_API_KEY with your actual Google Maps API key)
function initMap() {
    const India = { lat: 28.656052 , lng: 77.241286};  // Coordinates for Delhi, India
    const map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 12,
        center: India
    });

    // Add markers for top attractions
    const Prem_mandir = new google.maps.Marker({
        position: { lat: 27.572001, lng: 77.672044 },
        map: map,
        title: "Prem Mandir"
    });

    const Ram_mandir = new google.maps.Marker({
        position: { lat: 26.795530, lng: 82.194398 },
        map: map,
        title: "Ram Mandir"
    });
    const Varanasi = new google.maps.Marker({
        position: { lat: 25.298961, lng: 83.007447 },
        map: map,
        title: "Varanasi"
    });
    const Golden_temple = new google.maps.Marker({
        position: { lat: 31.621001, lng: 74.877115 },
        map: map,
        title: "Golden temple"
    });
    const India_gate = new google.maps.Marker({
        position: { lat: 28.612895, lng: 77.229614 },
        map: map,
        title: "India Gate"
    });
    const Red_fort = new google.maps.Marker({
        position: { lat: 28.655900, lng: 77.241014 },
        map: map,
        title: "Red Fort"
    });
}

// Load Google Maps API
function loadMap() {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC0_qS-Pb72dThHOnOSpPYuHZ71dhK5ciA&callback=initMap`;
    document.body.appendChild(script);
}

loadMap();
