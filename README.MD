(HTML CODE)
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SkyNavigator Flights</title>
    
    <!-- poppins font -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    
    <!-- stylesheet -->
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <!-- navbar -->
    <header class="navbar">
        <div class="logo">
            <h1><box-icon name='plane-alt' color='#f0a500'></box-icon> SkyNavigator Flights</h1>
        </div>
        <nav>
            <ul>
                <li><a href="#book"><box-icon name='calendar'></box-icon> Book a Flight</a></li>
                <li><a href="#about"><box-icon name='info-circle'></box-icon> About</a></li>
                <li><a href="#contact"><box-icon name='phone'></box-icon> Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- booking section -->
    <section id="book" class="booking-section">
        <div class="container">
            <h2>Book Your Flight</h2>
            <form id="booking-form" class="booking-form">
                <div class="form-group autocomplete">
                    <label for="from">From:</label>
                    <input type="text" id="from" name="from" placeholder="Enter Departure City">
                    <span id="from-error" class="error-message">* This box is required</span>
                </div>
                <div class="form-group autocomplete">
                    <label for="to">To:</label>
                    <input type="text" id="to" name="to" placeholder="Enter Destination City">
                    <span id="to-error" class="error-message">* This box is required</span>
                </div>
                <div class="form-group">
                    <label for="departure">Departure Date:</label>
                    <input type="date" id="departure" name="departure">
                    <span id="departure-error" class="error-message">* This box is required</span>
                </div>
                <div class="form-group">
                    <label for="return">Return Date:</label>
                    <input type="date" id="return" name="return">
                    <span id="return-error" class="error-message">* This box is required</span>
                </div>
                <button type="button" id="search-flights" class="btn-primary"><box-icon name='search-alt'></box-icon> Search Flights</button>
            </form>
        </div>
    </section>

    <!-- about section -->
    <section id="about" class="info-section">
        <div class="container">
            <h2>Why Choose Us?</h2>
            <div class="info-cards">
                <div class="info-card">
                    <box-icon name='check-shield' color='#f0a500' size='lg'></box-icon>
                    <h3>Reliable Service</h3>
                    <p>We ensure all bookings are reliable and efficient, making your journey stress-free.</p>
                </div>
                <div class="info-card">
                    <box-icon name='money' color='#f0a500' size='lg'></box-icon>
                    <h3>Affordable Prices</h3>
                    <p>Get the best prices on all flights, without compromising on quality or comfort.</p>
                </div>
                <div class="info-card">
                    <box-icon name='support' color='#f0a500' size='lg'></box-icon>
                    <h3>24/7 Support</h3>
                    <p>Our dedicated support team is available around the clock to assist you.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- contact section -->
    <section id="contact" class="contact-section">
        <div class="container">
            <h2>Contact Us</h2>
            <form id="contact-form" class="contact-form">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="" class="" disabled>Send Message </button>
            </form>
        </div>

        
    </section>

    <!-- flight results popup -->
    <div id="flight-modal" class="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Available Flights</h2>
            <div class="flight-results"></div>
        </div>
    </div>

    

    <!-- success popup -->
    <div id="success-modal" class="success-modal">
        <div class="success-modal-content">
            <span class="success-close-button">&times;</span>
            <h2>Successfully Booked!</h2>
            <p class="success-message">Your flight has been successfully booked.</p>
            <button class="btn-ok">OK</button>
        </div>
    </div>


    <!-- footer -->
    <footer>
        <p>SkyNavigator, the best airplane-booking website</a></p>
    </footer>

    <!-- script -->
    <script src="script.js"></script>
</body>

</html>

(CSS CODE)
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #f0f4f8;
    color: #333;
    line-height: 1.6;
    scroll-behavior: smooth; 
}

.navbar {
    background-color: #003366;
    color: #fff;
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 15px 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar .logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.navbar .logo h1 {
    margin: 0;
    font-size: 26px;
    font-weight: 700;
    color: #ffffff;
}

.navbar nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
}

.navbar nav ul li {
    position: relative;
}

.navbar nav ul li a {
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 8px;
    transition: background-color 0.3s ease, color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.navbar nav ul li a:hover {
    background-color: #004080;
    color: #ffffff;
}

.booking-section {
    padding: 60px 20px;
    background-color: #ffffff;
}

.booking-section h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 32px;
    color: #003366;
}

.booking-form {
    background: #f9faff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    max-width: 700px;
    margin: 0 auto;
    position: relative;
}

.booking-form .form-group {
    margin-bottom: 25px;
    position: relative;
}

.booking-form .form-group label {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
    color: #003366;
}

.booking-form .form-group input,
.booking-form .form-group textarea {
    width: 100%;
    padding: 14px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 16px;
}

.suggestions {
    position: absolute;
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    max-height: 180px;
    overflow-y: auto;
    width: calc(100% - 28px); 
    top: calc(100% + 8px); 
    left: 14px; 
    z-index: 10;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.suggestion-item {
    padding: 12px;
    cursor: pointer;
}

.suggestion-item:hover {
    background-color: #f0f4f8;
}

.btn-primary {
    display: inline-flex;
    align-items: center;
    background-color: #003366;
    color: #ffffff;
    border: none;
    padding: 14px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 20px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-primary:hover {
    background-color: #004080;
    transform: scale(1.02);
}

.info-section {
    padding: 60px 20px;
    background-color: #f0f4f8;
}

.info-section h2 {
    text-align: center;
    font-size: 30px;
    color: #003366;
    margin-bottom: 20px;
}

.info-section p {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 30px;
    color: #555;
    font-size: 18px;
}

.info-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.info-card {
    background-color: #ffffff;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    text-align: center;
    flex: 1;
    min-width: 280px;
    max-width: 350px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
}

.info-card h3 {
    margin-top: 10px;
    color: #003366;
    font-size: 24px;
}

.info-card p {
    color: #777;
    font-size: 16px;
    margin-top: 8px;
}

.contact-section {
    padding: 60px 20px;
    background-color: #ffffff;
}

.contact-section h2 {
    text-align: center;
    font-size: 32px;
    color: #003366;
    margin-bottom: 30px;
}

.contact-form {
    max-width: 700px;
    margin: 0 auto;
    background-color: #f9faff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.contact-form .form-group {
    margin-bottom: 25px;
}

.contact-form .form-group label {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
    color: #003366;
}

.contact-form .form-group input,
.contact-form .form-group textarea {
    width: 100%;
    padding: 14px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 16px;
}

.contact-form textarea {
    height: 160px;
}

.contact-form button {
    display: inline-flex;
    align-items: center;
    background-color: #003366;
    color: #ffffff;
    border: none;
    padding: 14px 24px;
    border-radius: 8px;
    cursor: not-allowed;
    font-size: 20px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.contact-form button:hover {
    background-color: #004080;
    transform: scale(1.02);
}

footer {
    background-color: #003366;
    color: #ffffff;
    text-align: center;
    padding: 30px 20px;
    margin-top: 40px;
}

footer p {
    font-size: 18px;
    margin: 10px 0;
}

.footer-info {
    font-size: 16px;
}

.footer-info a {
    color: #f0a500;
    text-decoration: none;
}

.footer-info a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .navbar {
        padding: 15px 20px;
    }

    .navbar nav ul {
        flex-direction: column;
        gap: 10px;
    }

    .navbar nav ul li a {
        font-size: 16px;
        padding: 10px;
    }

    .booking-section h2, .info-section h2, .contact-section h2 {
        font-size: 24px;
    }

    .booking-form, .contact-form {
        padding: 20px;
    }

    .info-card {
        max-width: 100%;
    }
}

.modal {
    display: none; 
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.5s ease-in-out;
}

.modal-content {
    background-color: #ffffff;
    margin: 5% auto;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 800px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    animation: fadeIn 0.5s ease-in-out;
}

.close-button {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close-button:hover {
    color: #000;
}

.flight-results {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.flight-item {
    display: flex;
    align-items: center;
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    position: relative;
}

.flight-item:hover {
    background-color: #f1f1f1;
}

.flight-item img {
    width: 120px; 
    height: auto;
    border-radius: 5px;
    margin-right: 15px;
}

.flight-details p {
    margin: 5px 0;
    color: #333;
}

.flight-details strong {
    color: #007bff;
}

.btn-buy {
    background-color: #003366;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    margin-top: 10px;
}

.btn-buy:hover {
    background-color: #004080;
    transform: scale(1.05);
}


.success-modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.5s ease-in-out;
}

.success-modal-content {
    background-color: #ffffff;
    margin: 20% auto; 
    padding: 20px;
    border-radius: 8px;
    width: 90%; 
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;
    animation: fadeIn 0.5s ease-in-out;
    text-align: center;
}

.success-close-button {
    color: #aaa;
    float: right;
    font-size: 24px; 
    font-weight: bold;
    cursor: pointer;
}

.success-close-button:hover {
    color: #000;
}

.success-message {
    margin: 20px 0;
    font-size: 16px; 
    color: #333;
}

.btn-ok {
    background-color: #007bff;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.btn-ok:hover {
    background-color: #0056b3;
}

( JAVASCRIPT CODE )

// locations
const locations = [
    "Amsterdam", "Athens", "Auckland", "Atlanta", "Austin",   // A
    "Boston", "Barcelona", "Beijing", "Brisbane", "Budapest", // B
    "Chicago", "Cape Town", "Columbus", "Copenhagen", "Calgary", // C
    "Dubai", "Dallas", "Denver", "Dublin", "Detroit",         // D
    "Edinburgh", "El Paso", "Eindhoven", "Entebbe", "Essen",   // E
    "Frankfurt", "Fresno", "Florence", "Fort Worth", "Fukuoka", // F
    "Geneva", "Glasgow", "Guadalajara", "Gothenburg", "Graz",   // G
    "Hong Kong", "Houston", "Helsinki", "Hobart", "Honolulu",   // H
    "Istanbul", "Indianapolis", "Ithaca", "Iguaçu", "Ibiza",   // I
    "Jakarta", "Johannesburg", "Jeddah", "Jamaica", "Jacksonville", // J
    "Kyiv", "Kuala Lumpur", "Krakow", "Kitchener", "Kolkata", "Kathmandu", // K
    "Lisbon", "London", "Los Angeles", "Lima", "Luxembourg",   // L
    "Madrid", "Mexico City", "Melbourne", "Montreal", "Moscow", // M
    "New York", "Nairobi", "Naples", "Nashville", "Newcastle", // N
    "Oslo", "Orlando", "Ottawa", "Omaha", "Oporto",           // O
    "Paris", "Prague", "Perth", "Portland", "Pittsburgh", "Pokhara",     // P
    "Quebec", "Quito", "Queretaro", "Queenstown", "Quincy",  // Q
    "Rome", "Rio de Janeiro", "Riga", "Rochester", "Riyadh",  // R
    "Seoul", "Singapore", "San Francisco", "Stockholm", "Sydney", // S
    "Tokyo", "Toronto", "Tbilisi", "Tucson", "Tehran",         // T
    "Ulaanbaatar", "Utrecht", "Urbana", "Upington", "Ushuaia", // U
    "Vancouver", "Vienna", "Valencia", "Vladivostok", "Venice", // V
    "Warsaw", "Washington D.C.", "Wellington", "Winnipeg", "Wroclaw", // W
    "Xiamen", "Xian", "Xalapa", "Xalapa", "Xining",           // X
    "Yokohama", "Yerevan", "Yogyakarta", "Yunnan", "Yellowknife", // Y
    "Zagreb", "Zurich", "Zanzibar", "Zagreb", "Zamboanga"     // Z
];

function filterLocations(query) {
    return locations.filter(location => location.toLowerCase().includes(query.toLowerCase()));
}

function updateAutocomplete(input, suggestionsContainer) {
    const query = input.value;
    suggestionsContainer.innerHTML = '';

    if (query.length > 0) {
        const suggestions = filterLocations(query);
        suggestions.forEach(location => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = location;
            suggestionItem.className = 'suggestion-item';
            suggestionItem.addEventListener('click', () => {
                input.value = location;
                suggestionsContainer.innerHTML = '';
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const fromInput = document.getElementById('from');
    const toInput = document.getElementById('to');
    const fromSuggestions = document.createElement('div');
    const toSuggestions = document.createElement('div');

    fromSuggestions.className = 'suggestions';
    toSuggestions.className = 'suggestions';

    fromInput.parentElement.appendChild(fromSuggestions);
    toInput.parentElement.appendChild(toSuggestions);

    fromInput.addEventListener('input', () => updateAutocomplete(fromInput, fromSuggestions));
    toInput.addEventListener('input', () => updateAutocomplete(toInput, toSuggestions));
});

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-flights');
    const flightModal = document.getElementById('flight-modal');
    const successModal = document.getElementById('success-modal');
    const closeButton = document.querySelector('.close-button');
    const successCloseButton = document.querySelector('.success-close-button');
    const okButton = document.querySelector('.btn-ok');
    const flightResults = document.querySelector('.flight-results');
    const airplaneImages = [
        'https://th.bing.com/th/id/OIP.Xi3-w50N9NHQXNs5UqWcCwHaEv?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/R.49854eb13e8e8e2c492b262c63abca96?rik=YI8qel%2fglFw30A&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/OIP.29dldVD2w-jSO2-GnKO5SgHaE1?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.c6bwfJFG5wWYxUj4tl1N7gHaE2?rs=1&pid=ImgDetMain',
        'https://www.bartolmagprobe.com/wp-content/uploads/2015/09/3610-boeing-787-1920x1080-aircraft-wallpaper.jpg'
    ];

    searchButton.addEventListener('click', function() {
        const from = document.getElementById('from').value.trim();
        const to = document.getElementById('to').value.trim();
        const departure = document.getElementById('departure').value;
        const returnDate = document.getElementById('return').value;
        
        const fromError = document.getElementById('from-error');
        const toError = document.getElementById('to-error');
        const departureError = document.getElementById('departure-error');
        const returnError = document.getElementById('return-error');
        
        let isValid = true;
        
        if (!from) {
            fromError.classList.add('show');
            isValid = false;
        } else {
            fromError.classList.remove('show');
        }
        
        if (!to) {
            toError.classList.add('show');
            isValid = false;
        } else {
            toError.classList.remove('show');
        }
        
        if (!departure) {
            departureError.classList.add('show');
            isValid = false;
        } else {
            departureError.classList.remove('show');
        }
        
        if (!returnDate) {
            returnError.classList.add('show');
            isValid = false;
        } else {
            returnError.classList.remove('show');
        }
        
        if (isValid) {
            const flights = [];
            for (let i = 0; i < 5; i++) {
                const randomImage = airplaneImages[Math.floor(Math.random() * airplaneImages.length)];
                flights.push({
                    from: from,
                    to: to,
                    departure: departure,
                    return: returnDate,
                    price: `€${Math.floor(Math.random() * 200) + 100}`,
                    image: randomImage
                });
            }

            flightResults.innerHTML = '';
            
            flights.forEach((flight, index) => {
                const flightItem = document.createElement('div');
                flightItem.className = 'flight-item';
                flightItem.innerHTML = `
                    <img src="${flight.image}" alt="Flight Image">
                    <div class="flight-details">
                        <p><strong>From:</strong> ${flight.from} <strong>To:</strong> ${flight.to}</p>
                        <p><strong>Departure:</strong> ${flight.departure} <strong>Return:</strong> ${flight.return}</p>
                        <p><strong>Price:</strong> ${flight.price}</p>
                        <button class="btn-buy" data-index="${index}">Buy Now</button>
                    </div>
                `;
                flightResults.appendChild(flightItem);
            });
            
            flightModal.style.display = 'flex'; 
        }
    });
    
    closeButton.addEventListener('click', function() {
        flightModal.style.display = 'none';
    });
    
    successCloseButton.addEventListener('click', function() {
        successModal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    });
    
    okButton.addEventListener('click', function() {
        successModal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === flightModal) {
            flightModal.style.display = 'none';
        }
        if (event.target === successModal) {
            successModal.style.display = 'none';
        }
    });
    
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-buy')) {
            flightModal.style.display = 'none'; 
            successModal.style.display = 'flex'; 
        }
    });
});

