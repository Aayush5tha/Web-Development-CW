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

//checkout 

document.addEventListener('DOMContentLoaded', function() {
    const checkoutModal = document.getElementById('checkout-modal');
    const checkoutCloseButton = checkoutModal.querySelector('.close-button');
    const checkoutForm = document.getElementById('checkout-form');

    // Show the checkout modal when "Buy Now" is clicked
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-buy')) {
            flightModal.style.display = 'none'; 
            checkoutModal.style.display = 'block';
        }
    });

    // Close the checkout modal
    checkoutCloseButton.addEventListener('click', function() {
        checkoutModal.style.display = 'none';
    });

    // Handle form submission
    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Purchase completed successfully!');
        checkoutModal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === checkoutModal) {
            checkoutModal.style.display = 'none';
        }
    });
});