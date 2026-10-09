// Static packages metadata for rich visual lookup
const packageData = {
    "Goa": {
        cityName: "Goa",
        durationDays: 5,
        cost: 6999,
        overview: "Enjoy vibrant beaches, thrilling water sports, and lively nightlife across popular spots like Baga and Calangute. A perfect mix of relaxation and fun for friends and couples.",
        hotelDetails: "5-Star Luxury Beachside Resort accommodation.",
        transportation: "Private AC Sedan transfers throughout the trip.",
        mealPlan: "Full Board (Breakfast, Lunch, Dinner buffets).",
        travelInsurance: "Comprehensive travel insurance coverage included.",
        emergencySupport: "24/7 Dedicated local coordinator helpline.",
        weather: "Sunny beach climate, typical tropical temperatures.",
        cancellationPolicy: "Free cancellation up to 48 hours prior to arrival date.",
        highlights: ["Sunset boat cruise on Mandovi River", "Scuba diving & water activities at Grand Island", "Explore historical Old Goa heritage churches", "Baga beach nightlife crawl & shacks visiting"],
        adventureActivities: ["Scuba Diving", "Parasailing", "Jet Skiing", "Banana Boat Rides"],
        inclusions: ["Luxury hotel room stay", "All private airport transfers", "Tour sightseeing cab", "All breakfast/dinner meals"],
        exclusions: ["Lunch meals & snacks", "Personal shopping expenses", "Return flight tickets"],
        amenities: ["High-speed Wi-Fi", "Infinity Swimming Pool", "Private Beach Access", "Gourmet Dining Bar"],
        schedule: [
            {
                "day": 1,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Dabolim Airport Pick-up", "type": "transfer", "description": "Private AC Sedan pick-up and transport to your premium beachside resort." },
                    { "time": "02:00 PM", "venueName": "Luxury Resort Check-in", "type": "hotel", "description": "Settle into your premium ocean view room and enjoy welcome drinks." },
                    { "time": "06:00 PM", "venueName": "Baga Beach Sunset Walk", "type": "beach", "description": "Relax at beachside shacks, explore local shorelines, and watch a gorgeous sunset." }
                ]
            },
            {
                "day": 2,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Grand Island Scuba Diving", "type": "activity", "description": "Explore rich coral reefs and exotic marine life with certified scuba instructors." },
                    { "time": "05:00 PM", "venueName": "Mandovi River Sunset Cruise", "type": "sightseeing", "description": "Scenic cruise along the Mandovi River with traditional Goan music and dance performances." }
                ]
            },
            {
                "day": 3,
                "slots": [
                    { "time": "10:00 AM", "venueName": "Old Goa Heritage Churches", "type": "sightseeing", "description": "Guided historical tour of Basilica of Bom Jesus and Se Cathedral." },
                    { "time": "01:00 PM", "venueName": "Traditional Goan Fish Curry Lunch", "type": "meal", "description": "Enjoy authentic local culinary flavors at a beachside bistro." },
                    { "time": "08:00 PM", "venueName": "Baga Beach Nightlife Crawl", "type": "leisure", "description": "Explore popular nightclubs and live music lounges on Baga's famous strip." }
                ]
            },
            {
                "day": 4,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Dudhsagar Waterfalls Jeep Safari", "type": "adventure", "description": "Thrilling jeep ride through the rugged terrain of Bhagwan Mahavir Wildlife Sanctuary." },
                    { "time": "03:00 PM", "venueName": "Sahakari Spice Plantation", "type": "nature", "description": "Guided walk through spice gardens followed by a traditional buffet lunch." }
                ]
            },
            {
                "day": 5,
                "slots": [
                    { "time": "10:00 AM", "venueName": "Resort Check-out", "type": "hotel", "description": "Complete check-out procedures and settle resort bills." },
                    { "time": "12:00 PM", "venueName": "Panaji Souvenir Market", "type": "shopping", "description": "Final souvenir shopping and local cashew purchases in the capital city." },
                    { "time": "04:00 PM", "venueName": "Dabolim Airport Drop-off", "type": "transfer", "description": "AC cab transfer to the airport for your return journey home." }
                ]
            }
        ]
    },
    "Manali": {
        cityName: "Manali",
        durationDays: 6,
        cost: 7999,
        overview: "Explore snowy mountains, Solang Valley adventures, and scenic views around Rohtang Pass. Ideal destination for nature lovers and adventure seekers.",
        hotelDetails: "Premium Mountain View Wooden Chalet stay.",
        transportation: "AC Luxury SUV transfers for valley routes.",
        mealPlan: "Half Board (Daily Breakfast & multi-cuisine Dinner).",
        travelInsurance: "High-altitude travel insurance coverage included.",
        emergencySupport: "Certified mountaineer support assistant helpline.",
        weather: "Chilly alpine climate. Perfect for winter snowboarding.",
        cancellationPolicy: "Free cancellation up to 72 hours before arrival.",
        highlights: ["Skiing & snowboarding Solang Valley tour", "Rohtang Pass high-altitude snow expedition", "Hadimba Temple heritage pine forest walk", "Relaxing at Jogini Waterfalls hike trails"],
        adventureActivities: ["Skiing", "Paragliding", "River Rafting", "Trekking"],
        inclusions: ["Pine forest resort room", "Sightseeing mountain transport", "Gourmet breakfasts & dinners", "Paragliding activity pass"],
        exclusions: ["Rohtang permit charge", "Lunch meals", "Winter gear rental"],
        amenities: ["Heated Rooms", "Mountain View Balcony", "Fireplace Lounge", "In-house Cafe"],
        schedule: [
            {
                "day": 1,
                "slots": [
                    { "time": "08:00 AM", "venueName": "Volvo Bus Stand Pick-up", "type": "transfer", "description": "AC Luxury SUV pickup and transfer to your premium chalet resort." },
                    { "time": "02:00 PM", "venueName": "Chalet Resort Check-in", "type": "hotel", "description": "Settle into your heated wooden chalet and enjoy hot tea with mountain views." },
                    { "time": "05:00 PM", "venueName": "Mall Road Evening Walk", "type": "leisure", "description": "Stroll along Manali's vibrant Mall Road and try local street food." }
                ]
            },
            {
                "day": 2,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Hadimba Temple Forest Walk", "type": "sightseeing", "description": "Visit the iconic wooden Hadimba temple nested in towering pine forests." },
                    { "time": "02:00 PM", "venueName": "Vashisht Hot Water Springs", "type": "nature", "description": "Bathe in relaxing natural sulfur springs and visit Vashisht Temple." }
                ]
            },
            {
                "day": 3,
                "slots": [
                    { "time": "08:00 AM", "venueName": "Solang Valley Adventure Tour", "type": "activity", "description": "Experience thrilling activities like paragliding, zorbing, and quad biking." },
                    { "time": "04:00 PM", "venueName": "Anjani Mahadev Trek", "type": "adventure", "description": "Short trek to a stunning waterfall and outdoor Shiva shrine." }
                ]
            },
            {
                "day": 4,
                "slots": [
                    { "time": "06:00 AM", "venueName": "Rohtang Pass Snow Expedition", "type": "adventure", "description": "Travel to 13,058 ft for snow sports, skiing, and panoramic Himalayan views." },
                    { "time": "03:00 PM", "venueName": "Solang Valley Snowboarding", "type": "activity", "description": "Guided snowboarding lessons in the high valley snow slopes." }
                ]
            },
            {
                "day": 5,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Jogini Waterfalls Hike", "type": "adventure", "description": "Scenic trek through orchards and pine forests to cascading waterfalls." },
                    { "time": "02:00 PM", "venueName": "Old Manali Cafe Crawl", "type": "leisure", "description": "Explore hipster cafes, live music, and local art galleries in Old Manali." }
                ]
            },
            {
                "day": 6,
                "slots": [
                    { "time": "10:00 AM", "venueName": "Chalet Check-out", "type": "hotel", "description": "Complete checkout and store bags at resort reception." },
                    { "time": "02:00 PM", "venueName": "Tibetan Monastery Shopping", "type": "shopping", "description": "Shop for hand-woven shawls, wooden crafts, and singing bowls." },
                    { "time": "06:00 PM", "venueName": "Manali Bus Stand Drop-off", "type": "transfer", "description": "Drop off for your return luxury Volvo bus journey." }
                ]
            }
        ]
    },
    "Jaipur": {
        cityName: "Jaipur",
        durationDays: 4,
        cost: 5999,
        overview: "Visit iconic spots like Hawa Mahal, Amber Fort, and vibrant local bazaars. Experience royal heritage and rich culture in the Pink City.",
        hotelDetails: "Heritage Palace Haveli Hotel accommodation.",
        transportation: "AC Executive Cab transfers for city tours.",
        mealPlan: "Traditional Rajasthani Breakfast & Dinner.",
        travelInsurance: "Standard tour insurance coverage included.",
        emergencySupport: "Dedicated Jaipur travel agency helpline.",
        weather: "Warm, dry desert climate. Sun block recommended.",
        cancellationPolicy: "Free cancellation up to 48 hours before check-in.",
        highlights: ["Guided historic Amber Fort elephant ride", "Visit iconic Hawa Mahal & City Palace museums", "Shopping tour of Johari Bazaar local crafts", "Traditional Chokhi Dhani cultural dinner show"],
        adventureActivities: ["Hot Air Ballooning", "Cultural Camel Safari", "Historic Sightseeing"],
        inclusions: ["Haveli luxury room stay", "All local monuments transfers", "Heritage entry pass tickets", "Rajasthani buffet dining"],
        exclusions: ["Camel ride charges", "Personal shopping", "Lunch meals"],
        amenities: ["Heritage Courtyard", "Swimming Pool", "Rooftop Restaurant", "Cultural Folk Music"],
        schedule: [
            {
                "day": 1,
                "slots": [
                    { "time": "10:00 AM", "venueName": "Jaipur Junction Pick-up", "type": "transfer", "description": "AC Executive Cab pick-up and transfer to your luxury Heritage Haveli Hotel." },
                    { "time": "02:00 PM", "venueName": "Palace Haveli Check-in", "type": "hotel", "description": "Settle into your royal room and enjoy traditional Rajasthani welcome folk music." },
                    { "time": "05:00 PM", "venueName": "Albert Hall Museum Visit", "type": "sightseeing", "description": "Admire the stunning Indo-Saracenic architecture illuminated at sunset." }
                ]
            },
            {
                "day": 2,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Amber Fort Elephant Ride", "type": "adventure", "description": "Ride up to the fort entrance and explore majestic courtyards and Sheesh Mahal." },
                    { "time": "02:00 PM", "venueName": "Hawa Mahal & Jantar Mantar", "type": "sightseeing", "description": "Guided tour of the unique Palace of Winds and astronomical observatory." }
                ]
            },
            {
                "day": 3,
                "slots": [
                    { "time": "10:00 AM", "venueName": "City Palace Museum Tour", "type": "sightseeing", "description": "Explore the royal residence, armor museums, and art galleries." },
                    { "time": "02:00 PM", "venueName": "Johari Bazaar Shopping", "type": "shopping", "description": "Shop for precious gemstones, silver jewelry, and block-printed textiles." },
                    { "time": "06:00 PM", "venueName": "Chokhi Dhani Cultural Show", "type": "meal", "description": "Traditional village-style ethnic resort experience with folk dances and dinner." }
                ]
            },
            {
                "day": 4,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Nahargarh Fort Viewpoint", "type": "sightseeing", "description": "Panoramic morning views of the Pink City from the fort ramparts." },
                    { "time": "12:00 PM", "venueName": "Haveli Hotel Check-out", "type": "hotel", "description": "Check out and pack bags." },
                    { "time": "03:00 PM", "venueName": "Jaipur Junction Drop-off", "type": "transfer", "description": "Drop off for your return train or airport flight." }
                ]
            }
        ]
    },
    "Andaman and Nicobar Islands": {
        cityName: "Andaman and Nicobar Islands",
        durationDays: 7,
        cost: 14999,
        overview: "Relax at Radhanagar Beach and explore Havelock Island with exciting water activities. A perfect tropical escape with crystal-clear water and peaceful vibes.",
        hotelDetails: "Exclusive Beachfront Lagoon Villa stay.",
        transportation: "Inter-island premium cruise ferry tickets.",
        mealPlan: "Full Board (Seafood delicacies & multi-cuisine buffets).",
        travelInsurance: "Marine sports travel insurance included.",
        emergencySupport: "24/7 Island representative helper.",
        weather: "Tropical island breeze, warm oceanic waters.",
        cancellationPolicy: "Non-refundable booking due to cruise tickets.",
        highlights: ["Snorkeling at Elephant Beach coral reef", "Watch sunset at Radhanagar Beach (Asia's cleanest)", "Heritage tour of historic Cellular Jail light show", "Glass bottom boat ride at Neil Island"],
        adventureActivities: ["Scuba Diving", "Sea Walking", "Snorkeling", "Glass Bottom Boat"],
        inclusions: ["Lagoon villa accommodation", "Premium cruise ferry tickets", "All island pickup transfers", "Inclusive daily seafood buffets"],
        exclusions: ["Camera entry fees", "Scuba dive kit hire", "Personal tour guide fees"],
        amenities: ["Ocean View Deck", "Private Beach Sunbeds", "Seafront Grill Bar", "Snorkeling Gear Rental"],
        schedule: [
            {
                "day": 1,
                "slots": [
                    { "time": "08:00 AM", "venueName": "Port Blair Airport Pick-up", "type": "transfer", "description": "Pick up and transfer to your seaside hotel in Port Blair." },
                    { "time": "02:00 PM", "venueName": "Hotel Check-in & Rest", "type": "hotel", "description": "Check in, settle down, and refresh after your flight." },
                    { "time": "05:00 PM", "venueName": "Cellular Jail Sound & Light Show", "type": "sightseeing", "description": "Moving historical show narrating the story of India's freedom struggle." }
                ]
            },
            {
                "day": 2,
                "slots": [
                    { "time": "08:00 AM", "venueName": "Havelock Island Cruise Ferry", "type": "transfer", "description": "Board the luxury high-speed catamaran ferry to Havelock Island." },
                    { "time": "12:00 PM", "venueName": "Lagoon Villa Check-in", "type": "hotel", "description": "Check into your private beachfront lagoon villa with ocean access." },
                    { "time": "04:00 PM", "venueName": "Radhanagar Beach Sunset", "type": "beach", "description": "Relax at Asia's clean award-winning white-sand beach and watch sunset." }
                ]
            },
            {
                "day": 3,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Elephant Beach Snorkeling", "type": "activity", "description": "Speedboat ride to Elephant beach for snorkeling and marine coral viewing." },
                    { "time": "02:00 PM", "venueName": "Undersea Walking Experience", "type": "adventure", "description": "Walk on the seabed and feed tropical fish with specialized breathing helmets." }
                ]
            },
            {
                "day": 4,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Havelock Scuba Diving", "type": "activity", "description": "Discover scuba dive session in crystal clear Havelock waters with PADI instructors." },
                    { "time": "03:00 PM", "venueName": "Beachside Spa & Relaxation", "type": "leisure", "description": "Enjoy a rejuvenating couple's massage at the resort spa." }
                ]
            },
            {
                "day": 5,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Neil Island Cruise", "type": "transfer", "description": "Take the ferry to Neil Island, a tranquil and peaceful farming isle." },
                    { "time": "02:00 PM", "venueName": "Neil Island Natural Bridge", "type": "sightseeing", "description": "Walk along reef flats to see the unique naturally formed rock bridge." }
                ]
            },
            {
                "day": 6,
                "slots": [
                    { "time": "10:00 AM", "venueName": "Neil Island Beach Tour", "type": "beach", "description": "Visit Bharatpur and Laxmanpur beaches for swimming and glass bottom boat rides." },
                    { "time": "04:00 PM", "venueName": "Port Blair Ferry Return", "type": "transfer", "description": "Return ferry back to Port Blair and check into your hotel." }
                ]
            },
            {
                "day": 7,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Hotel Check-out", "type": "hotel", "description": "Pack bags and complete checkout." },
                    { "time": "11:00 AM", "venueName": "Port Blair Airport Drop-off", "type": "transfer", "description": "Transfer to airport for departure." }
                ]
            }
        ]
    },
    "Munnar": {
        cityName: "Munnar",
        durationDays: 5,
        cost: 6499,
        overview: "Walk through tea plantations, see scenic viewpoints, and enjoy cool hill station climate. Ideal for a refreshing nature retreat.",
        hotelDetails: "Eco-friendly Misty Valley Treehouse Resort stay.",
        transportation: "AC Cab transfers for hill station sightseeing.",
        mealPlan: "Organic South Indian Breakfast & Dinner.",
        travelInsurance: "Standard hill country tour coverage included.",
        emergencySupport: "Dedicated Munnar tour agency liaison.",
        weather: "Cool, misty hill station climate. Carry light jackets.",
        cancellationPolicy: "Free cancellation up to 48 hours before check-in.",
        highlights: ["Walk through Tata Tea Museum estate", "Boating tour of scenic Mattupetty Dam reservoir", "Watch sunrise trek at Echo Point hills", "Explore Eravikulam National Park Nilgiri Tahr wildlife"],
        adventureActivities: ["Hill Trekking", "Ziplining", "Boating", "Spice Plantation Walk"],
        inclusions: ["Misty view treehouse cottage", "All mountain route transport", "Organic breakfast & dinner buffets", "Tea museum entry tickets"],
        exclusions: ["Boating activity tickets", "Lunch meals", "Personal spices shopping"],
        amenities: ["Foggy Hillside Balcony", "Organic Tea Station", "Eco Trekking Trails", "Campfire Gathering Area"],
        schedule: [
            {
                "day": 1,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Kochi Airport Pick-up", "type": "transfer", "description": "AC Cab pick-up and scenic winding drive up through mountain forests to Munnar." },
                    { "time": "02:00 PM", "venueName": "Treehouse Resort Check-in", "type": "hotel", "description": "Check into your high eco-friendly treehouse resort overlooking tea valleys." },
                    { "time": "05:00 PM", "venueName": "Resort Estate Walk", "type": "nature", "description": "Explore the surrounding cardamom spice woods." }
                ]
            },
            {
                "day": 2,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Tata Tea Museum Visit", "type": "sightseeing", "description": "Guided tour showcasing tea processing evolution and tea tasting session." },
                    { "time": "02:00 PM", "venueName": "Mattupetty Dam Reservoir", "type": "nature", "description": "Enjoy a speed boat ride in the beautiful mountain reservoir lake." }
                ]
            },
            {
                "day": 3,
                "slots": [
                    { "time": "06:00 AM", "venueName": "Echo Point Sunrise Trek", "type": "adventure", "description": "Trek to Echo Point hills to see the early morning mist rising off the valley." },
                    { "time": "02:00 PM", "venueName": "Kundala Lake Boating", "type": "leisure", "description": "Relaxing rowboat ride amidst beautiful cherry blossom surroundings." }
                ]
            },
            {
                "day": 4,
                "slots": [
                    { "time": "08:30 AM", "venueName": "Eravikulam National Park", "type": "nature", "description": "Spot the endangered Nilgiri Tahr mountain goat species and view Anamudi peak." },
                    { "time": "03:00 PM", "venueName": "Spice Plantation Tour", "type": "nature", "description": "Guided walk showing pepper, vanilla, and cinnamon cultivation." }
                ]
            },
            {
                "day": 5,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Treehouse Check-out", "type": "hotel", "description": "Check-out and buy organic spices at resort shop." },
                    { "time": "04:00 PM", "venueName": "Kochi Airport Drop-off", "type": "transfer", "description": "Scenic drive down to Kochi airport for your departure." }
                ]
            }
        ]
    },
    "Ladakh": {
        cityName: "Ladakh",
        durationDays: 7,
        cost: 12999,
        overview: "Visit Pangong Lake, high-altitude monasteries, and enjoy thrilling road trips seeking rugged terrains.",
        hotelDetails: "Heated Deluxe Alpine Glamping Tents stay.",
        transportation: "4x4 Rugged Mountain SUV transfers.",
        mealPlan: "Full Board (Fresh organic local meals).",
        travelInsurance: "High-altitude medical emergency coverage.",
        emergencySupport: "Oxygen cylinders & medical escort vehicle.",
        weather: "Cold desert winds, bright sunny days, freezing nights.",
        cancellationPolicy: "Free cancellation up to 5 days before check-in.",
        highlights: ["Scenic drive to high-altitude Pangong Lake", "Cross Khardung La Pass (highest motorable road)", "Tour historic Thiksey Monastery & Leh Palace", "Watch double-humped camel safari at Nubra Valley"],
        adventureActivities: ["Rafting Indus River", "Mountain Biking", "High-Pass Trekking"],
        inclusions: ["Premium heated tents stay", "4x4 Leh SUV transport", "Gourmet breakfasts/lunch/dinners", "Inner Line permit charges"],
        exclusions: ["Acclimatization day expenses", "Bike hire charges", "Personal dry fruits shopping"],
        amenities: ["Tent Room Heaters", "Stargazing Glass Roof", "Oxygen Cylinder Kits", "Local Ladakhi Dining Tent"],
        schedule: [
            {
                "day": 1,
                "slots": [
                    { "time": "08:00 AM", "venueName": "Leh Kushok Bakula Airport Pick-up", "type": "transfer", "description": "4x4 SUV pickup and transfer to your hotel." },
                    { "time": "11:00 AM", "venueName": "Hotel Check-in & Rest", "type": "hotel", "description": "Complete rest required for high-altitude acclimatization." },
                    { "time": "05:00 PM", "venueName": "Leh Market Gentle Stroll", "type": "leisure", "description": "Brief evening walk to adapt to thin air." }
                ]
            },
            {
                "day": 2,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Thiksey Monastery Tour", "type": "sightseeing", "description": "Visit the stunning twelve-story monastery resembling the Potala Palace." },
                    { "time": "02:00 PM", "venueName": "Leh Palace & Shanti Stupa", "type": "sightseeing", "description": "Explore the historic palace ruins and enjoy sunset from the white stupa." }
                ]
            },
            {
                "day": 3,
                "slots": [
                    { "time": "07:30 AM", "venueName": "Khardung La Pass Crossing", "type": "adventure", "description": "Drive across the world's highest motorable pass at 17,582 ft." },
                    { "time": "01:00 PM", "venueName": "Nubra Valley Desert Camp", "type": "hotel", "description": "Check into premium safari tents in the high-altitude desert valley." },
                    { "time": "05:00 PM", "venueName": "Bactrian Camel Safari", "type": "activity", "description": "Ride rare double-humped camels through golden sand dunes of Hunder." }
                ]
            },
            {
                "day": 4,
                "slots": [
                    { "time": "09:00 AM", "venueName": "Diskit Monastery Viewpoint", "type": "sightseeing", "description": "Visit the massive 106-ft Maitreya Buddha statue overlooking the Shyok river." },
                    { "time": "01:00 PM", "venueName": "Nubra Valley Mountain Biking", "type": "adventure", "description": "Exciting downhill bicycle tour on smooth tarmac routes." }
                ]
            },
            {
                "day": 5,
                "slots": [
                    { "time": "08:00 AM", "venueName": "Pangong Tso Lake Drive", "type": "adventure", "description": "Drive along winding routes via Chang La pass to the stunning blue lake." },
                    { "time": "02:00 PM", "venueName": "Pangong Deluxe Alpine Glamping", "type": "hotel", "description": "Check into heated deluxe tents directly on the shoreline of Pangong Lake." }
                ]
            },
            {
                "day": 6,
                "slots": [
                    { "time": "07:00 AM", "venueName": "Pangong Lake Sunrise View", "type": "nature", "description": "Gaze at the color-shifting lake waters at early sunrise." },
                    { "time": "10:00 AM", "venueName": "Return Drive to Leh", "type": "transfer", "description": "Scenic SUV drive back to Leh city for your final night." }
                ]
            },
            {
                "day": 7,
                "slots": [
                    { "time": "07:00 AM", "venueName": "Hotel Check-out", "type": "hotel", "description": "Checkout and packing." },
                    { "time": "08:30 AM", "venueName": "Leh Airport Drop-off", "type": "transfer", "description": "Transfer to airport for your scenic flight back home." }
                ]
            }
        ]
    }
};


// Global variables for active bookings
let currentBookingPackage = null;
let currentBookingStep = 1;
let currentBookingPricing = { totalMembers: 1, finalAmt: 0 };

// --- Fill Booking Planner & Open Details Modal ---
function fillBooking(place) {
    // Determine exact key match
    let matchedKey = Object.keys(packageData).find(key => key.toLowerCase().includes(place.toLowerCase())) || "Goa";
    const pkg = packageData[matchedKey];
    currentBookingPackage = pkg;

    // Fill form fields
    const placeInput = document.querySelector("#place_name");
    const guestsInput = document.querySelector("#guests");
    const arrivalInput = document.querySelector("#arrival_date");
    const leavingInput = document.querySelector("#leaving_date");

    if (placeInput) placeInput.value = pkg.cityName;
    if (guestsInput) guestsInput.value = 2;

    const today = new Date();
    const arrDate = new Date(today);
    arrDate.setDate(arrDate.getDate() + 7);
    const depDate = new Date(arrDate);
    depDate.setDate(depDate.getDate() + pkg.durationDays);

    if (arrivalInput) arrivalInput.value = arrDate.toISOString().split('T')[0];
    if (leavingInput) leavingInput.value = depDate.toISOString().split('T')[0];

    // Populate advanced package details modal
    document.getElementById('pkg-modal-title').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${pkg.cityName}`;
    document.getElementById('pkg-modal-duration').innerText = `${pkg.durationDays} Days`;
    document.getElementById('pkg-modal-cost').innerText = `₹${pkg.cost.toLocaleString('en-IN')}`;
    document.getElementById('pkg-modal-start').innerText = arrDate.toISOString().split('T')[0];
    document.getElementById('pkg-modal-end').innerText = depDate.toISOString().split('T')[0];

    document.getElementById('pkg-modal-overview').innerText = pkg.overview;
    document.getElementById('pkg-modal-hotel').innerText = pkg.hotelDetails;
    document.getElementById('pkg-modal-transport').innerText = pkg.transportation;
    document.getElementById('pkg-modal-meals').innerText = pkg.mealPlan;
    document.getElementById('pkg-modal-insurance').innerText = pkg.travelInsurance;
    document.getElementById('pkg-modal-emergency').innerText = pkg.emergencySupport;
    document.getElementById('pkg-modal-weather').innerText = pkg.weather;
    document.getElementById('pkg-modal-cancellation').innerText = pkg.cancellationPolicy;

    // Helper to fill custom lists
    const fillList = (id, arr) => {
        const el = document.getElementById(id);
        if (el && arr) {
            el.innerHTML = arr.map(item => `<li>${item}</li>`).join('');
        }
    };
    fillList('pkg-modal-highlights', pkg.highlights);
    fillList('pkg-modal-activities', pkg.adventureActivities);
    fillList('pkg-modal-inclusions', pkg.inclusions);
    fillList('pkg-modal-exclusions', pkg.exclusions);

    const tagsContainer = document.getElementById('pkg-modal-tags');
    if (tagsContainer) {
        tagsContainer.innerHTML = pkg.amenities.map(a => `<span>${a}</span>`).join('');
    }

    let timelineHTML = '';
    pkg.schedule.forEach(dayRecord => {
        timelineHTML += `<h4 style="color:var(--primary-orange); margin-top:2rem; margin-bottom:1rem; font-size:1.8rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:0.5rem;">Day ${dayRecord.day}</h4>`;
        dayRecord.slots.forEach(slot => {
            timelineHTML += `
                <div class="pkg-slot" style="margin-bottom:1rem; padding-left:1rem; border-left:2px solid var(--primary-orange);">
                    <div class="pkg-slot-time" style="font-weight:bold;">${slot.time}</div>
                    <div class="pkg-slot-venue" style="color:#fff; font-size:1.5rem;">${slot.venueName} <small style="color:var(--muted-text);">(${slot.type})</small></div>
                    <div class="pkg-slot-desc" style="color:var(--muted-text); font-size:1.3rem;">${slot.description}</div>
                </div>
            `;
        });
    });
    document.getElementById('pkg-modal-timeline').innerHTML = timelineHTML;

    // Fetch package-specific reviews and display inside modal
    const pkgReviewsList = document.getElementById('pkg-modal-reviews-list');
    if (pkgReviewsList) {
        pkgReviewsList.innerHTML = '<p style="color:var(--muted-text); font-size:1.4rem;">Loading reviews...</p>';
        const API_BASE = (typeof window.API_BASE !== "undefined") ? window.API_BASE : (window.location.protocol.startsWith("http") ? "" : "http://localhost:5000");
        fetch(`${API_BASE}/api/reviews/all`)
            .then(res => res.json())
            .then(data => {
                if (data.reviews) {
                    // Filter reviews by matching city name in the review text or user name
                    let matchedReviews = data.reviews.filter(r => 
                        r.review_text.toLowerCase().includes(pkg.cityName.toLowerCase())
                    );
                    
                    // Fallback to top reviews if none specifically mention this city
                    if (matchedReviews.length === 0) {
                        matchedReviews = data.reviews.slice(0, 3); // take top 3 general reviews
                    }
                    
                    pkgReviewsList.innerHTML = "";
                    if (matchedReviews.length === 0) {
                        pkgReviewsList.innerHTML = '<p style="color:var(--muted-text); font-size:1.4rem;">No reviews yet for this destination. Be the first to share your experience!</p>';
                        return;
                    }
                    
                    matchedReviews.forEach(r => {
                        const rDate = r.review_time ? new Date(r.review_time).toLocaleDateString() : "Recently";
                        let stars = "";
                        for (let i = 1; i <= 5; i++) {
                            if (i <= r.rating) {
                                stars += '<i class="fas fa-star" style="color:var(--primary-orange); margin-right:2px;"></i>';
                            } else {
                                stars += '<i class="far fa-star" style="color:var(--muted-text); margin-right:2px;"></i>';
                            }
                        }
                        
                        pkgReviewsList.innerHTML += `
                            <div class="pkg-modal-review-card" style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.05); padding:1.2rem; border-radius:0.8rem; margin-bottom:1rem;">
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                                    <div style="display:flex; align-items:center; gap:1rem;">
                                        <img src="${r.profile_image || 'Mini-Images/pic1.png'}" alt="user" style="width:3.5rem; height:3.5rem; border-radius:50%; object-fit:cover;">
                                        <div>
                                            <h4 style="font-size:1.4rem; color:#fff; font-weight:bold; margin:0; text-transform:none;">${r.name}</h4>
                                            <small style="color:var(--muted-text); font-size:1.1rem;">${rDate}</small>
                                        </div>
                                    </div>
                                    <div>${stars}</div>
                                </div>
                                <p style="font-size:1.3rem; color:var(--muted-text); line-height:1.5; margin:0; text-transform:none;">"${r.review_text}"</p>
                            </div>
                        `;
                    });
                }
            })
            .catch(err => {
                console.error("Error loading package reviews:", err);
                pkgReviewsList.innerHTML = '<p style="color:#ff4757; font-size:1.4rem;">Failed to load reviews.</p>';
            });
    }

    // Show details modal
    const modal = document.getElementById('package-details-modal');
    if (modal) {
        modal.classList.remove('hidden-section');
        document.body.classList.add('modal-open'); // Lock scroll
    }
}

function closePackageModal() {
    const modal = document.getElementById('package-details-modal');
    if (modal) {
        modal.classList.add('hidden-section');
        document.body.classList.remove('modal-open'); // Unlock scroll
    }
}

// --- Multi-Step Booking Wizard Logic ---
function startBookingWizard() {
    const token = localStorage.getItem("token");
    if (!token) {
        alert("Please Sign In or Register to continue booking.");
        closePackageModal();
        document.querySelector('.login-from-container').classList.add('active');
        return;
    }
    closePackageModal();
    const wizard = document.getElementById('booking-wizard-modal');
    if (wizard) {
        wizard.classList.remove('hidden-section');
        document.body.classList.add('modal-open'); // Lock scroll
    }
    currentBookingStep = 1;
    updateWizardUI();

    // Populate Step 1 Package Summary details
    document.getElementById('wiz-pkg-title').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${currentBookingPackage.cityName} Tour Package`;
    document.getElementById('wiz-pkg-overview').innerText = currentBookingPackage.overview;
    document.getElementById('wiz-pkg-duration').innerText = `${currentBookingPackage.durationDays} Days`;
    document.getElementById('wiz-pkg-cost').innerText = `₹${currentBookingPackage.cost.toLocaleString('en-IN')}/person`;

    // Auto fill primary traveler data if available
    document.getElementById('wiz-name').value = localStorage.getItem("name") || "";
    document.getElementById('wiz-email').value = localStorage.getItem("userName") || "";
    
    // Reset and initialize companion list
    companionMembers = [];
    renderCompanionMembers();
    
    // Reset payment radio and hidden inputs default state
    const defaultRadio = document.querySelector('input[name="payment-type"][value="UPI"]');
    if (defaultRadio) {
        defaultRadio.checked = true;
    }
    togglePaymentFields('UPI');
}

function closeBookingWizard() {
    const wizard = document.getElementById('booking-wizard-modal');
    if (wizard) {
        wizard.classList.add('hidden-section');
        document.body.classList.remove('modal-open'); // Unlock scroll
    }
}

function updateWizardUI() {
    for (let i = 1; i <= 6; i++) {
        const stepDiv = document.getElementById(`wizard-step-${i}`);
        const indicator = document.getElementById(`step-${i}-indicator`);
        if (stepDiv) stepDiv.classList.remove('active');
        if (indicator) {
            indicator.classList.remove('active');
            indicator.classList.remove('completed');
            if (i < currentBookingStep) {
                indicator.classList.add('completed');
            }
        }
    }
    const currentDiv = document.getElementById(`wizard-step-${currentBookingStep}`);
    const currentInd = document.getElementById(`step-${currentBookingStep}-indicator`);
    if (currentDiv) currentDiv.classList.add('active');
    if (currentInd) currentInd.classList.add('active');
}

function nextWizardStep(step) {
    currentBookingStep = step;
    updateWizardUI();
}

function prevWizardStep(step) {
    currentBookingStep = step;
    updateWizardUI();
}

function calculatePriceSummary() {
    if (!currentBookingPackage) return;
    const totalMembers = 1 + companionMembers.length;

    const baseCostPP = currentBookingPackage.cost;
    const totalBase = baseCostPP * totalMembers;
    const taxes = totalBase * 0.18;
    const service = 500;
    const discount = totalBase * 0.1; // 10% promo discount
    const finalAmt = totalBase + taxes + service - discount;

    document.getElementById('sum-base-pp').innerText = `₹${baseCostPP.toLocaleString('en-IN')}`;
    document.getElementById('sum-members').innerText = totalMembers;
    document.getElementById('sum-base-total').innerText = `₹${totalBase.toLocaleString('en-IN')}`;
    document.getElementById('sum-taxes').innerText = `₹${taxes.toLocaleString('en-IN')}`;
    document.getElementById('sum-service').innerText = `₹${service.toLocaleString('en-IN')}`;
    document.getElementById('sum-discount').innerText = `-₹${discount.toLocaleString('en-IN')}`;
    document.getElementById('sum-final').innerText = `₹${finalAmt.toLocaleString('en-IN')}`;

    currentBookingPricing = { totalMembers, finalAmt };
}

// --- Submit Booking to Real MySQL Database Backend ---
async function processPayment() {
    const token = localStorage.getItem("token");
    if (!token || !currentBookingPackage) return;

    // Validate payment details conditionally based on selection
    const selectedMethod = document.querySelector('input[name="payment-type"]:checked').value;
    if (selectedMethod === 'UPI') {
        const upiId = document.getElementById('pay-upi-id').value.trim();
        if (!upiId) {
            alert('Please enter your UPI ID.');
            return;
        }
    } else if (selectedMethod === 'Card' || selectedMethod === 'Debit Card' || selectedMethod === 'Credit Card') {
        const cardNumber = document.getElementById('pay-card-number').value.trim();
        const cardName = document.getElementById('pay-card-name').value.trim();
        const cardExpiry = document.getElementById('pay-card-expiry').value.trim();
        const cardCvv = document.getElementById('pay-card-cvv').value.trim();
        
        if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
            alert('Please fill in all credit card details.');
            return;
        }
    } else if (selectedMethod === 'Net Banking') {
        const bank = document.getElementById('pay-bank-select').value;
        if (!bank) {
            alert('Please select your Bank.');
            return;
        }
    }

    // Pull dates dynamically from selected inputs
    const arrivalInput = document.querySelector("#arrival_date").value;
    const leavingInput = document.querySelector("#leaving_date").value;

    const bodyData = {
        place_name: currentBookingPackage.cityName,
        guests: currentBookingPricing.totalMembers,
        arrival_date: arrivalInput,
        leaving_date: leavingInput,
        booking_status: "confirmed",
        total_price: currentBookingPricing.finalAmt,
        payment_status: "paid"
    };

    try {
        const API_BASE = (typeof window.API_BASE !== "undefined") ? window.API_BASE : (window.location.protocol.startsWith("http") ? "" : "http://localhost:5000");
        const response = await fetch(`${API_BASE}/api/bookings/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(bodyData)
        });

        const data = await response.json();

        if (data.success) {
            // Log user activity if available
            if (window.logUserActivity) {
                window.logUserActivity("FORM_SUBMIT", "booking_wizard", `Booked package ${currentBookingPackage.cityName}`);
            }

            // Generate receipt info
            const mockBkgId = "BKG-" + Math.floor(100000 + Math.random() * 900000);
            const mockTxnId = "TXN-" + Date.now();
            document.getElementById('success-booking-id').innerText = mockBkgId;
            document.getElementById('success-txn-id').innerText = mockTxnId;

            // Fill receipt details on step 6 success page
            document.getElementById('success-pkg-name').innerText = currentBookingPackage.cityName;
            document.getElementById('success-travel-date').innerText = arrivalInput;
            document.getElementById('success-members').innerText = currentBookingPricing.totalMembers;
            document.getElementById('success-amount').innerText = `₹${currentBookingPricing.finalAmt.toLocaleString('en-IN')}`;

            // Reset forms
            document.getElementById('traveler-form').reset();
            if (document.getElementById('group-form')) {
                document.getElementById('group-form').reset();
            }
            if (document.getElementById('payment-form')) {
                document.getElementById('payment-form').reset();
            }
            companionMembers = [];
            renderCompanionMembers();

            // Advance step to success screen (step 6)
            nextWizardStep(6);

            // Reload bookings in background
            loadDashboardBookings();
        } else {
            alert(data.message || "Failed to finalize booking");
        }
    } catch (error) {
        console.error("Booking error", error);
        alert("Server error occurred during payment processing.");
    }
}

// --- User Dashboard Bookings Table Load ---
function getSkeletonLoaderHTML() {
    return `
        <div class="skeleton-shimmer" style="margin-bottom: 2rem; border-radius: 1.2rem; min-height: 200px; opacity: 0.85; display: flex; flex-direction: column; gap: 1.5rem; padding: 2.5rem; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: flex; gap: 2rem; align-items: center;">
                <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(255,255,255,0.04);"></div>
                <div style="flex: 1;">
                    <div style="width: 120px; height: 16px; background: rgba(255,255,255,0.04); border-radius: 4px; margin-bottom: 0.6rem;"></div>
                    <div style="width: 80px; height: 10px; background: rgba(255,255,255,0.04); border-radius: 4px;"></div>
                </div>
            </div>
            <div style="width: 85%; height: 12px; background: rgba(255,255,255,0.04); border-radius: 4px;"></div>
            <div style="width: 70%; height: 12px; background: rgba(255,255,255,0.04); border-radius: 4px;"></div>
            <div style="display: flex; gap: 1rem; margin-top: auto;">
                <div style="width: 90px; height: 28px; background: rgba(255,255,255,0.04); border-radius: 4px;"></div>
                <div style="width: 90px; height: 28px; background: rgba(255,255,255,0.04); border-radius: 4px;"></div>
            </div>
        </div>
        <div class="skeleton-shimmer" style="margin-bottom: 2rem; border-radius: 1.2rem; min-height: 200px; opacity: 0.85; display: flex; flex-direction: column; gap: 1.5rem; padding: 2.5rem; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05);">
            <div style="display: flex; gap: 2rem; align-items: center;">
                <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(255,255,255,0.04);"></div>
                <div style="flex: 1;">
                    <div style="width: 120px; height: 16px; background: rgba(255,255,255,0.04); border-radius: 4px; margin-bottom: 0.6rem;"></div>
                    <div style="width: 80px; height: 10px; background: rgba(255,255,255,0.04); border-radius: 4px;"></div>
                </div>
            </div>
            <div style="width: 85%; height: 12px; background: rgba(255,255,255,0.04); border-radius: 4px;"></div>
            <div style="width: 70%; height: 12px; background: rgba(255,255,255,0.04); border-radius: 4px;"></div>
            <div style="display: flex; gap: 1rem; margin-top: auto;">
                <div style="width: 90px; height: 28px; background: rgba(255,255,255,0.04); border-radius: 4px;"></div>
                <div style="width: 90px; height: 28px; background: rgba(255,255,255,0.04); border-radius: 4px;"></div>
            </div>
        </div>
    `;
}

async function loadDashboardBookings() {
    const container = document.getElementById('dash-bookings-container');
    if (!container) return;
    container.innerHTML = getSkeletonLoaderHTML();
    
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
        const API_BASE = (typeof window.API_BASE !== "undefined") ? window.API_BASE : (window.location.protocol.startsWith("http") ? "" : "http://localhost:5000");
        const res = await fetch(`${API_BASE}/api/bookings/my-bookings`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = await res.json();
        if (data.success) {
            window.dashBookingsCache = data.bookings || [];
            container.innerHTML = "";
            if (!data.bookings || data.bookings.length === 0) {
                container.innerHTML = '<p style="color:var(--muted-text); font-size:1.6rem;">No Bookings Found</p>';
                return;
            }
            data.bookings.forEach(booking => {
                const imgPath = getPackageImage(booking.place_name);
                container.innerHTML += `
                    <div class="dash-booking-card" style="margin-bottom: 2rem; overflow: hidden; display: flex; flex-direction: column; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 1.2rem; box-shadow: 0 8px 25px rgba(0,0,0,0.4); transition: transform 0.25s, border-color 0.25s;">
                        <div style="position: relative; height: 160px; overflow: hidden;">
                            <img src="${imgPath}" alt="${booking.place_name}" style="width:100%; height:100%; object-fit: cover; transition: transform 0.3s;">
                            <div style="position: absolute; top: 1.5rem; right: 1.5rem; background: rgba(18,18,18,0.85); padding: 0.5rem 1.2rem; border-radius: 50px; font-size: 1.2rem; font-weight: bold; border: 1px solid rgba(255,255,255,0.1); color: var(--primary-orange);">BKG-${booking.booking_id}</div>
                            <div style="position: absolute; bottom: 1.5rem; left: 1.5rem; background: rgba(18,18,18,0.8); padding: 0.4rem 1rem; border-radius: 4px; font-size: 1.1rem; text-transform: uppercase; font-weight: bold; color: #2ed573; border: 1px solid rgba(46,213,115,0.2);">${booking.booking_status}</div>
                        </div>
                        <div style="padding: 2rem;">
                            <h3 style="font-size: 2rem; color: #fff; margin-bottom: 1rem; text-transform: none;">${booking.place_name} Tour</h3>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; font-size: 1.35rem; color: var(--muted-text);">
                                <div><i class="fas fa-calendar-alt orange-text"></i> Date: <strong style="color:#fff;">${new Date(booking.arrival_date).toLocaleDateString()}</strong></div>
                                <div><i class="fas fa-users orange-text"></i> Guests: <strong style="color:#fff;">${booking.guests}</strong></div>
                                <div><i class="fas fa-wallet orange-text"></i> Paid: <strong class="orange-text">₹${parseFloat(booking.total_price).toLocaleString('en-IN')}</strong></div>
                                <div><i class="fas fa-credit-card orange-text"></i> Status: <strong style="color:#fff; text-transform:uppercase;">${booking.payment_status}</strong></div>
                            </div>
                            <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
                                <div style="display: flex; gap: 1rem; width: 100%;">
                                    <button class="btn-micro" style="flex: 1; margin: 0; background: rgba(255, 165, 0, 0.1); color: var(--primary-orange); border-color: rgba(255,165,0,0.25);" onclick="viewBookingDetails(${booking.booking_id}, '${booking.place_name}', ${booking.guests}, '${booking.arrival_date}', '${booking.leaving_date}', '${booking.booking_status}', ${booking.total_price}, '${booking.payment_status}')"><i class="fas fa-eye"></i> Details</button>
                                    <button class="btn-micro" style="flex: 1; margin: 0; background: rgba(255, 165, 0, 0.1); color: var(--primary-orange); border-color: rgba(255,165,0,0.25);" onclick="updateBooking(${booking.booking_id})"><i class="fas fa-edit"></i> Edit</button>
                                    <button class="btn-micro" style="flex: 1; margin: 0; background: rgba(255, 165, 0, 0.15); color: var(--primary-orange); border-color: rgba(255,165,0,0.3);" onclick="openAddReviewFromBooking('${booking.place_name}')"><i class="fas fa-star"></i> Review</button>
                                </div>
                                <div style="display: flex; gap: 1rem; width: 100%;">
                                    <button class="btn-micro" style="flex: 1; margin: 0; background: rgba(255,255,255,0.05); color: #fff; border-color: rgba(255,255,255,0.1);" onclick="downloadBookingReceipt(${booking.booking_id}, '${booking.place_name}', '${booking.arrival_date}', ${booking.guests}, ${booking.total_price})"><i class="fas fa-download"></i> Receipt</button>
                                    <button class="btn-micro" style="flex: 1; margin: 0; background: rgba(255, 71, 87, 0.1); color: #ff4757; border-color: rgba(255,71,87,0.2);" onclick="deleteBooking(${booking.booking_id})"><i class="fas fa-trash"></i> Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
    } catch (err) {
        container.innerHTML = '<p style="color:#ff4757; font-size:1.6rem;">Failed to load bookings.</p>';
    }
}

// Delete Booking from database
async function deleteBooking(id) {
    const confirmDelete = confirm("Cancel this booking?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    try {
        const API_BASE = (typeof window.API_BASE !== "undefined") ? window.API_BASE : (window.location.protocol.startsWith("http") ? "" : "http://localhost:5000");
        const response = await fetch(`${API_BASE}/api/bookings/delete/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();
        alert(data.message);
        loadDashboardBookings();
    } catch (error) {
        console.error(error);
        alert("Delete Failed");
    }
}

// Update Booking details in database
async function updateBooking(id) {
    const place_name = prompt("Enter New Place Name");
    if (!place_name) return;
    const guests = prompt("Enter Number Of Guests");
    if (!guests) return;
    const arrival_date = prompt("Enter Arrival Date (YYYY-MM-DD)");
    if (!arrival_date) return;
    const leaving_date = prompt("Enter Leaving Date (YYYY-MM-DD)");
    if (!leaving_date) return;

    const token = localStorage.getItem("token");
    try {
        const API_BASE = (typeof window.API_BASE !== "undefined") ? window.API_BASE : (window.location.protocol.startsWith("http") ? "" : "http://localhost:5000");
        const response = await fetch(`${API_BASE}/api/bookings/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                place_name,
                guests,
                arrival_date,
                leaving_date,
                booking_status: "pending",
                total_price: 0,
                payment_status: "unpaid"
            })
        });
        const data = await response.json();
        alert(data.message);
        loadDashboardBookings();
    } catch (error) {
        console.error(error);
        alert("Update Failed");
    }
}

// --- Dashboard Modal Interactions ---
function openUserDashboard(tabId = 'my-profile') {
    const dash = document.getElementById('user-dashboard-modal');
    if (dash) {
        dash.classList.remove('hidden-section');
        document.body.classList.add('modal-open'); // Lock scroll
    }
    
    const loggedUserId = localStorage.getItem("user_id");
    
    // Set Profile Info
    const name = localStorage.getItem('name') || 'Guest';
    const email = localStorage.getItem('userName') || '';
    const initials = name.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase();
    
    const avatarEl = document.getElementById('dash-avatar');
    if (avatarEl) avatarEl.innerText = initials.substring(0,1); // Match screenshot (single initial)
    const nameEl = document.getElementById('dash-name');
    if (nameEl) nameEl.innerText = name;
    const emailEl = document.getElementById('dash-email');
    if (emailEl) emailEl.innerText = email;

    // Load phone and registration date
    const phone = localStorage.getItem(`user_phone_${loggedUserId}`) || "+91 98765 43210";
    const regDate = localStorage.getItem(`user_reg_date_${loggedUserId}`) || "May 2026";

    // Set Profile Summary Details
    const detailsAvatar = document.getElementById('profile-details-avatar');
    const detailsName = document.getElementById('profile-details-name');
    const detailsEmail = document.getElementById('profile-details-email');
    const detailsPhone = document.getElementById('profile-details-phone');
    const detailsRegdate = document.getElementById('profile-details-regdate');

    if (detailsAvatar) detailsAvatar.innerText = initials;
    if (detailsName) detailsName.innerText = name;
    if (detailsEmail) detailsEmail.innerText = email;
    if (detailsPhone) detailsPhone.innerText = phone;
    if (detailsRegdate) detailsRegdate.innerText = regDate;

    // Set profile form default values
    const profileNameInput = document.getElementById('dash-profile-name');
    const profileEmailInput = document.getElementById('dash-profile-email');
    const profilePhoneInput = document.getElementById('dash-profile-phone');
    if (profileNameInput) profileNameInput.value = name;
    if (profileEmailInput) profileEmailInput.value = email;
    if (profilePhoneInput) profilePhoneInput.value = phone;

    let navEl = document.getElementById(`tab-nav-${tabId.replace('my-', '')}`);
    switchDashTab(tabId, navEl);
}

function closeUserDashboard() {
    const dash = document.getElementById('user-dashboard-modal');
    if (dash) {
        dash.classList.add('hidden-section');
        document.body.classList.remove('modal-open'); // Unlock scroll
    }
}

function switchDashTab(tabId, element) {
    // Remove active styles from sidebar list item
    document.querySelectorAll('.dashboard-sidebar li').forEach(li => {
        li.style.background = 'transparent';
        li.style.color = 'var(--light-text)';
        li.classList.remove('active');
    });

    // Add active styles
    if (element) {
        element.style.background = 'var(--primary-orange)';
        element.style.color = '#fff';
        element.classList.add('active');
    }

    // Toggle content visibility
    document.querySelectorAll('.dash-tab').forEach(tab => {
        tab.style.display = 'none';
        tab.classList.remove('active');
    });

    const activeTab = document.getElementById(`dash-tab-${tabId}`);
    if (activeTab) {
        activeTab.style.display = 'block';
        activeTab.classList.add('active');
    }

    // Load tab records
    if (tabId === 'my-bookings') {
        loadDashboardBookings();
    } else if (tabId === 'my-itineraries') {
        if (window.loadItineraries) window.loadItineraries();
    } else if (tabId === 'my-reviews') {
        loadDashboardReviews();
    } else if (tabId === 'my-contacts') {
        loadDashboardContacts();
    } else if (tabId === 'notifications') {
        loadDashboardNotifications();
    }
}

// --- Load User Reviews in Dashboard Tab ---
async function loadDashboardReviews() {
    const container = document.getElementById('dash-reviews-container');
    if (!container) return;
    container.innerHTML = getSkeletonLoaderHTML();
    
    const loggedUserId = Number(localStorage.getItem("user_id"));
    if (!loggedUserId) {
        container.innerHTML = '<p style="color:var(--muted-text); font-size:1.6rem;">Please login to view reviews.</p>';
        return;
    }
    
    try {
        const API_BASE = (typeof window.API_BASE !== "undefined") ? window.API_BASE : (window.location.protocol.startsWith("http") ? "" : "http://localhost:5000");
        const response = await fetch(`${API_BASE}/api/reviews/all`);
        const data = await response.json();
        if (data.reviews) {
            const myReviews = data.reviews.filter(r => Number(r.user_id) === loggedUserId);
            window.dashReviewsCache = myReviews;
            container.innerHTML = "";
            if (myReviews.length === 0) {
                container.innerHTML = '<p style="color:var(--muted-text); font-size:1.6rem;">You have not submitted any reviews yet.</p>';
                return;
            }
            myReviews.forEach(review => {
                const reviewDate = review.review_time ? new Date(review.review_time).toLocaleDateString() : "Recently";
                let stars = "";
                for (let i = 1; i <= 5; i++) {
                    if (i <= review.rating) {
                        stars += '<i class="fas fa-star" style="color: var(--primary-orange); margin-right: 0.3rem;"></i>';
                    } else {
                        stars += '<i class="far fa-star" style="color: var(--primary-orange); margin-right: 0.3rem;"></i>';
                    }
                }
                
                // Initials Avatar generator
                const name = review.name || 'Guest';
                const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
                const isStockImage = !review.profile_image || 
                                     review.profile_image.includes("shutterstock") || 
                                     review.profile_image.includes("pic1") || 
                                     review.profile_image.includes("pic2") ||
                                     review.profile_image.includes("pic3") ||
                                     review.profile_image.includes("pic4");
                const avatarHTML = isStockImage 
                    ? `<div class="review-avatar-initials" style="width: 4rem !important; height: 4rem !important; font-size: 1.4rem !important; border-width: 2px !important; box-shadow: none !important;">${initials}</div>` 
                    : `<img src="${review.profile_image}" alt="user" class="review-avatar-img" style="width: 4rem !important; height: 4rem !important; border-width: 2px !important; box-shadow: none !important;">`;

                const destinations = ["Goa", "Manali", "Jaipur", "Andaman", "Munnar", "Ladakh"];
                const matchedDest = destinations.find(d => review.review_text.toLowerCase().includes(d.toLowerCase()));
                const coverImg = matchedDest 
                    ? `Mini-Images/p_${destinations.indexOf(matchedDest) + 1}.jpeg`
                    : "Mini-Images/p_1.jpeg";

                const destBadge = matchedDest 
                    ? `<span class="review-dest-badge" style="background: rgba(255,165,0,0.1); border: 1px solid rgba(255,165,0,0.25); color: var(--primary-orange); padding: 0.4rem 1rem; border-radius: 50px; font-size: 1.2rem; font-weight: bold; display: inline-flex; align-items: center; gap: 0.5rem;"><i class="fas fa-map-marker-alt"></i> ${matchedDest}</span>` 
                    : `<span class="review-dest-badge" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: var(--muted-text); padding: 0.4rem 1rem; border-radius: 50px; font-size: 1.2rem; font-weight: bold; display: inline-flex; align-items: center; gap: 0.5rem;"><i class="fas fa-globe"></i> Travel</span>`;

                const text = review.review_text;
                let textHTML = "";
                if (text.length > 120) {
                    textHTML = `
                        <span class="review-text-short" id="dash-review-short-${review.review_id}">${text.substring(0, 120)}...</span>
                        <span class="review-text-full" id="dash-review-full-${review.review_id}" style="display:none;">${text}</span>
                        <a href="#" class="read-more-link" onclick="toggleDashReviewText(${review.review_id}, this); return false;" style="color: var(--primary-orange); font-size:1.3rem; font-weight:bold; margin-left:0.5rem; display:inline-block;">Read More</a>
                    `;
                } else {
                    textHTML = `<span>${text}</span>`;
                }

                container.innerHTML += `
                    <div class="review-card" style="margin-bottom: 2rem; width: 100%; max-width: 100% !important; height: auto !important; min-height: unset !important; padding: 2.5rem !important;">
                        <div style="display:flex; flex-wrap:wrap; gap:2.5rem; width: 100%; align-items: flex-start;">
                            <img src="${coverImg}" alt="cover" style="width: 160px; height: 120px; object-fit: cover; border-radius: 1.2rem; flex-shrink: 0; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
                            <div style="flex:1; display:flex; flex-direction:column; justify-content:space-between; min-width: 240px;">
                                <div>
                                    <div class="review-card-header" style="display: flex !important; align-items: center !important; gap: 1.2rem !important; margin-bottom: 0.8rem !important;">
                                        ${avatarHTML}
                                        <div>
                                            <h3 style="font-size:1.6rem !important; color:#fff !important; margin:0 !important; font-weight:bold !important; text-transform:none !important;">${review.name}</h3>
                                            <p class="review-date" style="font-size:1.1rem !important; color:var(--muted-text) !important; margin:0 !important;">📅 ${reviewDate}</p>
                                        </div>
                                    </div>
                                    <div class="stars" style="font-size:1.3rem !important; margin-bottom:0.8rem !important;">
                                        ${stars}
                                    </div>
                                    <p class="review-text" style="font-size: 1.35rem !important; color: var(--light-text) !important; line-height: 1.6 !important; margin-bottom: 1.5rem !important; text-transform: none !important;">
                                        ${textHTML}
                                    </p>
                                </div>
                                <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(255,255,255,0.06); padding-top:1.2rem; margin-top:1rem; flex-wrap:wrap; gap:1.2rem;">
                                    ${destBadge}
                                    <div style="display:flex; gap:1rem;">
                                        <button class="btn-micro" style="width:auto; margin:0; padding:0.6rem 1.2rem; background:rgba(255,165,0,0.15); color:var(--primary-orange); border-color:rgba(255,165,0,0.3);" onclick="editUserReview(${review.review_id}, '${review.review_text.replace(/'/g, "\\'")}', ${review.rating})">✏ Edit Review</button>
                                        <button class="btn-micro" style="width:auto; margin:0; padding:0.6rem 1.2rem; background:rgba(255,71,87,0.1); color:#ff4757; border-color:rgba(255,71,87,0.2);" onclick="deleteReview(${review.review_id})">🗑 Delete Review</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
    } catch (e) {
        console.error(e);
        container.innerHTML = '<p style="color:#ff4757; font-size:1.6rem;">Failed to load reviews.</p>';
    }
}

function toggleDashReviewText(id, link) {
    const shortText = document.getElementById(`dash-review-short-${id}`);
    const fullText = document.getElementById(`dash-review-full-${id}`);
    if (shortText && fullText) {
        if (shortText.style.display === 'none') {
            shortText.style.display = 'inline';
            fullText.style.display = 'none';
            link.innerText = 'Read More';
        } else {
            shortText.style.display = 'none';
            fullText.style.display = 'inline';
            link.innerText = 'Show Less';
        }
    }
}
window.toggleDashReviewText = toggleDashReviewText;

function editUserReview(id, text, rating) {
    if (window.closeUserDashboard) {
        window.closeUserDashboard();
    }
    
    // Open the add review modal instead of scrolling
    if (window.openAddReviewModal) {
        window.openAddReviewModal();
        
        document.getElementById('review_text').value = text;
        document.getElementById('rating').value = rating;
        if (window.highlightStars) {
            window.highlightStars(rating);
        }
        
        document.getElementById('review-form-title').innerText = "Edit Your Review";
        document.getElementById('review-submit-btn').value = "Update Review";
        
        window.currentEditingReviewId = id;
    }
}

// --- Load User Support Queries in Dashboard (Backed by MySQL) ---
async function loadDashboardContacts() {
    const container = document.getElementById('dash-contacts-container');
    if (!container) return;
    
    const token = localStorage.getItem("token");
    const loggedUserId = localStorage.getItem("user_id");
    let contactsList = [];

    if (token) {
        try {
            const API_BASE = (typeof window.API_BASE !== "undefined") ? window.API_BASE : (window.location.protocol.startsWith("http") ? "" : "http://localhost:5000");
            const response = await fetch(`${API_BASE}/api/contact/my-messages`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await response.json();
            if (data.success && Array.isArray(data.contacts)) {
                contactsList = data.contacts.map(c => ({
                    subject: c.subject,
                    message: c.message,
                    admin_reply: c.admin_reply,
                    reply_status: c.reply_status,
                    date: c.contact_time ? new Date(c.contact_time).toLocaleDateString() : 'Recently'
                }));
            }
        } catch (err) {
            console.warn("Could not fetch contacts from backend, falling back to local:", err);
        }
    }

    if (contactsList.length === 0) {
        contactsList = JSON.parse(localStorage.getItem(`contacts_${loggedUserId}`)) || [];
    }
    
    container.innerHTML = "";
    if (contactsList.length === 0) {
        container.innerHTML = '<p style="color:var(--muted-text); font-size:1.6rem;">You have not sent any support queries yet.</p>';
        return;
    }
    
    contactsList.forEach((contact, index) => {
        const replyText = contact.admin_reply || "Waiting for admin reply...";
        const replyStyle = contact.admin_reply 
            ? "background: rgba(46,213,115,0.05); border: 1px solid rgba(46,213,115,0.2); color: #2ed573;" 
            : "background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1); color: var(--muted-text);";
            
        container.innerHTML += `
            <div class="dash-booking-card" style="margin-bottom: 2rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 1.2rem; padding: 2.5rem; box-shadow: 0 8px 25px rgba(0,0,0,0.4);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
                    <span class="badge" style="background:var(--primary-orange); color:#fff; padding:0.4rem 1.2rem; border-radius:50px; font-size:1.2rem; font-weight:bold; text-transform:uppercase;">Pending Response</span>
                    <span style="color:var(--muted-text); font-size:1.3rem;">Query #${index + 1}</span>
                </div>
                <h3 style="font-size:1.8rem; color:#fff; margin-bottom:1rem; text-transform:none;">Subject: ${contact.subject}</h3>
                <p style="font-size:1.4rem; color:var(--light-text); margin-bottom:1.5rem; line-height:1.6; text-transform:none;">"${contact.message}"</p>
                
                <!-- Admin Reply section -->
                <div style="padding: 1.5rem; border-radius: 0.8rem; margin-bottom: 2rem; font-size: 1.35rem; ${replyStyle}">
                    <strong style="display:block; margin-bottom:0.5rem;"><i class="fas fa-reply"></i> Admin Reply:</strong>
                    <span>${replyText}</span>
                </div>

                <div style="border-top:1px solid rgba(255,255,255,0.06); padding-top:1.5rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
                    <span style="font-size:1.3rem; color:var(--muted-text);"><i class="fas fa-calendar-alt"></i> Sent: ${contact.date || 'Recently'}</span>
                    <div style="display:flex; gap:1rem;">
                        <button class="btn-micro" style="width:auto; margin:0; padding:0.6rem 1.2rem; background:rgba(255,165,0,0.15); color:var(--primary-orange); border-color:rgba(255,165,0,0.3);" onclick="editUserContact(${index})"><i class="fas fa-edit"></i> Edit</button>
                        <button class="btn-micro" style="width:auto; margin:0; padding:0.6rem 1.2rem; background:rgba(255,71,87,0.1); color:#ff4757; border-color:rgba(255,71,87,0.2);" onclick="deleteUserContact(${index})"><i class="fas fa-trash"></i> Delete</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function editUserContact(index) {
    const loggedUserId = localStorage.getItem("user_id");
    const localContacts = JSON.parse(localStorage.getItem(`contacts_${loggedUserId}`)) || [];
    const contact = localContacts[index];
    if (!contact) return;
    
    const newSubject = prompt("Edit Subject:", contact.subject);
    if (newSubject === null) return;
    const newMessage = prompt("Edit Message:", contact.message);
    if (newMessage === null) return;
    
    contact.subject = newSubject.trim() || contact.subject;
    contact.message = newMessage.trim() || contact.message;
    
    localStorage.setItem(`contacts_${loggedUserId}`, JSON.stringify(localContacts));
    loadDashboardContacts();
    alert("Query updated successfully!");
}

function deleteUserContact(index) {
    const confirmDelete = confirm("Delete this contact query?");
    if (!confirmDelete) return;
    
    const loggedUserId = localStorage.getItem("user_id");
    const localContacts = JSON.parse(localStorage.getItem(`contacts_${loggedUserId}`)) || [];
    
    localContacts.splice(index, 1);
    localStorage.setItem(`contacts_${loggedUserId}`, JSON.stringify(localContacts));
    loadDashboardContacts();
    alert("Query deleted successfully!");
}

// Bind contact methods to window
window.editUserContact = editUserContact;
window.deleteUserContact = deleteUserContact;

// --- Package Search & Filter Logic ---
function filterPackages() {
    const destVal = document.getElementById('pkg-filter-dest').value.toLowerCase().trim();
    const budgetVal = document.getElementById('pkg-filter-budget').value;
    const durationVal = document.getElementById('pkg-filter-duration').value;
    const typeVal = document.getElementById('pkg-filter-type').value;
    const traveltypeDropdown = document.getElementById('pkg-filter-traveltype');
    const traveltypeVal = traveltypeDropdown ? traveltypeDropdown.value : 'all';

    const cards = document.querySelectorAll('#packages-grid-container .box.card-premium');
    let visibleCount = 0;

    cards.forEach(card => {
        const dest = card.getAttribute('data-dest').toLowerCase();
        const price = parseInt(card.getAttribute('data-price'));
        const duration = card.getAttribute('data-duration');
        const category = card.getAttribute('data-category');
        const traveltypeAttr = card.getAttribute('data-traveltype') || "Solo,Couple,Family,Friends";

        let matchDest = dest.includes(destVal);
        let matchBudget = true;
        if (budgetVal !== 'all') {
            const maxBudget = parseInt(budgetVal);
            matchBudget = price <= maxBudget;
        }
        let matchDuration = true;
        if (durationVal !== 'all') {
            matchDuration = duration === durationVal;
        }
        let matchType = true;
        if (typeVal !== 'all') {
            matchType = category === typeVal;
        }
        let matchTravelType = true;
        if (traveltypeVal !== 'all') {
            matchTravelType = traveltypeAttr.split(',').map(s => s.trim().toLowerCase()).includes(traveltypeVal.toLowerCase());
        }

        if (matchDest && matchBudget && matchDuration && matchType && matchTravelType) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Update count badge
    const countBadge = document.getElementById('packages-count-badge');
    if (countBadge) {
        countBadge.innerText = `${visibleCount} ${visibleCount === 1 ? 'Package' : 'Packages'} Found`;
    }
}

function resetPackageFilters() {
    document.getElementById('pkg-filter-dest').value = '';
    document.getElementById('pkg-filter-budget').value = 'all';
    document.getElementById('pkg-filter-duration').value = 'all';
    document.getElementById('pkg-filter-type').value = 'all';
    const traveltypeDropdown = document.getElementById('pkg-filter-traveltype');
    if (traveltypeDropdown) traveltypeDropdown.value = 'all';
    filterPackages();
}

// On load
window.addEventListener("load", () => {
    loadDashboardBookings();
    filterPackages();
});

// Global variables for companion list
let companionMembers = [];

function addCompanionMember() {
    companionMembers.push({ name: '', age: '', gender: '' });
    renderCompanionMembers();
}

function removeCompanionMember(index) {
    companionMembers.splice(index, 1);
    renderCompanionMembers();
}

function updateCompanionMember(index, field, value) {
    if (companionMembers[index]) {
        if (field === 'age') {
            companionMembers[index][field] = parseInt(value) || 0;
        } else {
            companionMembers[index][field] = value;
        }
    }
}

function renderCompanionMembers() {
    const container = document.getElementById('wiz-companions-list');
    if (!container) return;
    
    if (companionMembers.length === 0) {
        container.innerHTML = `<p style="color: var(--muted-text); font-size: 1.4rem; text-align: center; padding: 2.5rem; border: 1px dashed rgba(255,255,255,0.08); border-radius: 0.8rem; margin: 0;">No group members added yet. Click Add Member to add companions.</p>`;
        return;
    }
    
    container.innerHTML = companionMembers.map((member, index) => `
        <div class="companion-card glass-card" style="padding: 1.8rem; margin-bottom: 1.5rem; border-radius: 0.8rem; border: 1px solid rgba(255,255,255,0.06); position: relative; background: rgba(255,255,255,0.01);">
            <h4 style="font-size: 1.5rem; color: var(--primary-orange); margin-bottom: 1.2rem; display: flex; justify-content: space-between; align-items: center; text-transform:none;">
                <span>Member #${index + 1}</span>
                <button type="button" class="btn-micro" style="background: rgba(255, 71, 87, 0.1); color: #ff4757; border-color: rgba(255,71,87,0.2); padding: 0.4rem 1rem; width: auto; margin: 0;" onclick="removeCompanionMember(${index})">Remove Member</button>
            </h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr)); gap: 1.2rem;">
                <div class="inputBox" style="margin-bottom: 0;">
                    <input type="text" placeholder="Full Name" value="${member.name || ''}" required oninput="updateCompanionMember(${index}, 'name', this.value)">
                </div>
                <div class="inputBox" style="margin-bottom: 0;">
                    <input type="number" placeholder="Age" min="1" max="120" value="${member.age || ''}" required oninput="updateCompanionMember(${index}, 'age', this.value)">
                </div>
                <div class="inputBox" style="margin-bottom: 0;">
                    <select required onchange="updateCompanionMember(${index}, 'gender', this.value)" style="width: 100%; padding: 1.4rem; background: var(--charcoal-deep); color: #fff; border: 1px solid var(--charcoal-light); border-radius: 0.8rem; font-size: 1.4rem;">
                        <option value="">Gender</option>
                        <option value="Male" ${member.gender === 'Male' ? 'selected' : ''}>Male</option>
                        <option value="Female" ${member.gender === 'Female' ? 'selected' : ''}>Female</option>
                        <option value="Other" ${member.gender === 'Other' ? 'selected' : ''}>Other</option>
                    </select>
                </div>
            </div>
        </div>
    `).join('');
}

// Dynamic Payment Fields toggle and required settings
function togglePaymentFields(method) {
    document.querySelectorAll('.payment-fields-section').forEach(sec => {
        sec.style.display = 'none';
        sec.querySelectorAll('input, select').forEach(input => {
            input.removeAttribute('required');
        });
    });
    
    if (method === 'UPI') {
        const sec = document.getElementById('pay-details-upi');
        if (sec) {
            sec.style.display = 'block';
            const upiInput = sec.querySelector('#pay-upi-id');
            if (upiInput) upiInput.setAttribute('required', 'true');
        }
    } else if (method === 'Card' || method === 'Debit Card' || method === 'Credit Card') {
        const sec = document.getElementById('pay-details-card');
        if (sec) {
            sec.style.display = 'block';
            sec.querySelectorAll('input').forEach(input => {
                input.setAttribute('required', 'true');
            });
        }
    } else if (method === 'Net Banking') {
        const sec = document.getElementById('pay-details-netbanking');
        if (sec) {
            sec.style.display = 'block';
            const bankSelect = sec.querySelector('#pay-bank-select');
            if (bankSelect) bankSelect.setAttribute('required', 'true');
        }
    } else if (method === 'Wallet') {
        const sec = document.getElementById('pay-details-wallet');
        if (sec) {
            sec.style.display = 'block';
        }
    }
}

// Receipt generation and download
function downloadReceipt() {
    if (!currentBookingPackage) return;
    const name = document.getElementById('wiz-name').value;
    const bookingId = document.getElementById('success-booking-id').innerText;
    const receiptContent = `
========================================
       TRAVEL BOOKING RECEIPT
========================================
Booking ID:     ${bookingId}
Package Name:   ${currentBookingPackage.cityName}
Traveler Name:  ${name}
Travel Date:    ${document.getElementById('success-travel-date').innerText}
Total Members:  ${currentBookingPricing.totalMembers}
Amount Paid:    ₹${currentBookingPricing.finalAmt.toLocaleString('en-IN')}
Status:         Confirmed
Payment Status: Paid

Thank you for booking with us!
========================================
`;
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Receipt-${bookingId}.txt`;
    link.click();
}

// Get image path for package destinations
function getPackageImage(placeName) {
    if (placeName.toLowerCase().includes("goa")) return "Mini-Images/p_1.jpeg";
    if (placeName.toLowerCase().includes("manali")) return "Mini-Images/p_2.jpeg";
    if (placeName.toLowerCase().includes("jaipur")) return "Mini-Images/p_3.jpeg";
    if (placeName.toLowerCase().includes("andaman")) return "Mini-Images/p_4.jpeg";
    if (placeName.toLowerCase().includes("munnar")) return "Mini-Images/p_5.jpeg";
    if (placeName.toLowerCase().includes("ladakh")) return "Mini-Images/p_6.jpeg";
    return "Mini-Images/p_1.jpeg"; // default fallback
}

// Display Booking details sub-modal
function viewBookingDetails(bookingId, placeName, guests, arrivalDate, leavingDate, status, price, paymentStatus) {
    const content = document.getElementById('booking-details-content');
    if (!content) return;
    
    const imgPath = getPackageImage(placeName);
    
    content.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.5rem;">
            <img src="${imgPath}" alt="${placeName}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 1rem; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
        </div>
        <div style="display: flex; justify-content: space-between;"><strong>Booking ID:</strong> <span class="orange-text" style="font-weight:bold;">BKG-${bookingId}</span></div>
        <div style="display: flex; justify-content: space-between;"><strong>Destination:</strong> <span>${placeName}</span></div>
        <div style="display: flex; justify-content: space-between;"><strong>Travel Dates:</strong> <span>${new Date(arrivalDate).toLocaleDateString()} - ${new Date(leavingDate).toLocaleDateString()}</span></div>
        <div style="display: flex; justify-content: space-between;"><strong>Total Members:</strong> <span>${guests} Guests</span></div>
        <div style="display: flex; justify-content: space-between;"><strong>Booking Status:</strong> <span class="badge" style="background:#2ed573; color:#fff; padding:0.2rem 1rem; border-radius:50px; font-size:1.2rem; text-transform:uppercase;">${status}</span></div>
        <div style="display: flex; justify-content: space-between;"><strong>Amount Paid:</strong> <span class="orange-text" style="font-weight:bold;">₹${parseFloat(price).toLocaleString('en-IN')}</span></div>
        <div style="display: flex; justify-content: space-between;"><strong>Payment Status:</strong> <span style="text-transform:uppercase; font-weight:bold;">${paymentStatus}</span></div>
    `;
    
    const modal = document.getElementById('booking-details-modal');
    if (modal) {
        modal.classList.remove('hidden-section');
        document.body.classList.add('modal-open');
    }
}

function closeBookingDetailsModal() {
    const modal = document.getElementById('booking-details-modal');
    if (modal) {
        modal.classList.add('hidden-section');
        // Only unlock scrolling if no other modal is currently active
        const wizardOpen = !document.getElementById('booking-wizard-modal').classList.contains('hidden-section');
        const dashOpen = !document.getElementById('user-dashboard-modal').classList.contains('hidden-section');
        if (!wizardOpen && !dashOpen) {
            document.body.classList.remove('modal-open');
        }
    }
}

// Download receipt for any dashboard booking card
function downloadBookingReceipt(bookingId, placeName, arrivalDate, guests, totalPrice) {
    const name = localStorage.getItem('name') || 'Valued Guest';
    const receiptContent = `
========================================
       TRAVEL BOOKING RECEIPT
========================================
Booking ID:     BKG-${bookingId}
Package Name:   ${placeName}
Traveler Name:  ${name}
Travel Date:    ${new Date(arrivalDate).toLocaleDateString()}
Total Members:  ${guests} Guests
Amount Paid:    ₹${parseFloat(totalPrice).toLocaleString('en-IN')}
Status:         Confirmed
Payment Status: Paid

Thank you for booking with us!
========================================
`;
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Receipt-BKG-${bookingId}.txt`;
    link.click();
}

// Close all modals globally
function closeAllModals() {
    closePackageModal();
    closeBookingWizard();
    closeUserDashboard();
    closeAddReviewModal();
    closeBookingDetailsModal();
    
    // Close other popup sections if active
    const loginForm = document.querySelector('.login-from-container');
    if (loginForm) loginForm.classList.remove('active');
    
    const registerForm = document.querySelector('.register-form-container');
    if (registerForm) registerForm.classList.remove('active');
}

// Global listeners for keydown ESC and click outside overlays
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeAllModals();
    }
});

function openAddReviewFromBooking(placeName) {
    closeUserDashboard();
    
    setTimeout(() => {
        if (window.openAddReviewModal) {
            window.openAddReviewModal();
            const textEl = document.getElementById('review_text');
            if (textEl) {
                textEl.value = `Wonderful experience on our ${placeName} Tour! `;
                textEl.focus();
            }
        }
    }, 300);
}

function loadDashboardNotifications() {
    const container = document.getElementById('dash-notifications-container');
    if (!container) return;
    container.innerHTML = getSkeletonLoaderHTML();
    
    const loggedUserId = Number(localStorage.getItem("user_id"));
    const token = localStorage.getItem("token");
    if (!loggedUserId) {
        container.innerHTML = '<p style="color:var(--muted-text); font-size:1.6rem;">Please login to view notifications.</p>';
        return;
    }
    
    const readList = JSON.parse(localStorage.getItem(`read_notif_${loggedUserId}`)) || [];
    const notifications = [];
    
    // 1. Bookings Notifications
    const bookingsData = window.dashBookingsCache || [];
    bookingsData.forEach(b => {
        notifications.push({
            id: `bkg-${b.booking_id}`,
            icon: 'fa-suitcase',
            title: 'Booking Confirmed',
            message: `Your booking for ${b.place_name} Tour (BKG-${b.booking_id}) has been successfully confirmed.`,
            date: new Date(b.arrival_date).toLocaleDateString()
        });
    });
    
    // 2. Reviews Notifications
    const reviewsData = window.dashReviewsCache || [];
    reviewsData.forEach(r => {
        notifications.push({
            id: `rev-${r.review_id}`,
            icon: 'fa-star',
            title: 'Review Submitted',
            message: `You submitted a ${r.rating}-star review: "${r.review_text.substring(0, 40)}..."`,
            date: r.review_time ? new Date(r.review_time).toLocaleDateString() : 'Recently'
        });
    });
    
    // 3. Contacts Notifications
    const contactsData = JSON.parse(localStorage.getItem(`contacts_${loggedUserId}`)) || [];
    contactsData.forEach((c, idx) => {
        notifications.push({
            id: `con-${idx}`,
            icon: 'fa-envelope',
            title: c.admin_reply ? 'Support Query Replied' : 'Support Query Sent',
            message: c.admin_reply 
                ? `Admin replied to your query "${c.subject}": "${c.admin_reply}"`
                : `Your support request "${c.subject}" was successfully sent to our administration team.`,
            date: c.date || 'Recently'
        });
    });
    
    // 4. AI Itineraries
    const plansData = window.dashPlansCache || [];
    plansData.forEach((p, idx) => {
        notifications.push({
            id: `plan-${p.plan_id || idx}`,
            icon: 'fa-map-marked-alt',
            title: 'AI Itinerary Generated',
            message: `An AI Itinerary has been successfully generated for ${p.place_name || 'your destination'}.`,
            date: 'Recently'
        });
    });
    
    if (notifications.length === 0) {
        container.innerHTML = '<p style="color:var(--muted-text); font-size:1.6rem;">No new notifications.</p>';
        return;
    }
    
    container.innerHTML = "";
    notifications.forEach(n => {
        const isRead = readList.includes(n.id);
        const readBadge = isRead 
            ? '<span style="font-size: 1.1rem; color: var(--muted-text); background: rgba(255,255,255,0.05); padding: 0.2rem 0.8rem; border-radius: 4px;">Read</span>'
            : `<button class="btn-micro" style="margin:0; padding:0.4rem 1rem; font-size:1.1rem; background:rgba(255,165,0,0.15); color:var(--primary-orange); border-color:rgba(255,165,0,0.3);" onclick="markNotifRead('${n.id}')">Mark Read</button>`;
            
        container.innerHTML += `
            <div class="dash-booking-card" style="margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:center; gap:2rem; padding: 2rem !important; opacity: ${isRead ? 0.6 : 1}; width: 100%;">
                <div style="display:flex; align-items:center; gap:1.5rem;">
                    <div style="width: 4.5rem; height: 4.5rem; border-radius:50%; background:rgba(255,165,0,0.1); border:1px solid rgba(255,165,0,0.2); display:flex; align-items:center; justify-content:center; color:var(--primary-orange); font-size:1.8rem; flex-shrink:0;">
                        <i class="fas ${n.icon}"></i>
                    </div>
                    <div>
                        <h4 style="font-size:1.5rem; color:#fff; font-weight:bold; margin-bottom:0.4rem;">${n.title}</h4>
                        <p style="font-size:1.3rem; color:var(--light-text); text-transform:none; margin-bottom:0.4rem; line-height: 1.5;">${n.message}</p>
                        <span style="font-size:1.1rem; color:var(--muted-text);">📅 ${n.date}</span>
                    </div>
                </div>
                <div>
                    ${readBadge}
                </div>
            </div>
        `;
    });
}

function markNotifRead(id) {
    const loggedUserId = localStorage.getItem("user_id");
    const readList = JSON.parse(localStorage.getItem(`read_notif_${loggedUserId}`)) || [];
    if (!readList.includes(id)) {
        readList.push(id);
        localStorage.setItem(`read_notif_${loggedUserId}`, JSON.stringify(readList));
    }
    loadDashboardNotifications();
}

// Bind methods globally to window for onclick hooks
window.loadDashboardNotifications = loadDashboardNotifications;
window.markNotifRead = markNotifRead;
window.openAddReviewFromBooking = openAddReviewFromBooking;
window.fillBooking = fillBooking;
window.deleteBooking = deleteBooking;
window.updateBooking = updateBooking;
window.closePackageModal = closePackageModal;
window.startBookingWizard = startBookingWizard;
window.closeBookingWizard = closeBookingWizard;
window.nextWizardStep = nextWizardStep;
window.prevWizardStep = prevWizardStep;
window.calculatePriceSummary = calculatePriceSummary;
window.processPayment = processPayment;
window.openUserDashboard = openUserDashboard;
window.closeUserDashboard = closeUserDashboard;
window.switchDashTab = switchDashTab;
window.loadDashboardBookings = loadDashboardBookings;
window.loadDashboardReviews = loadDashboardReviews;
window.editUserReview = editUserReview;
window.loadDashboardContacts = loadDashboardContacts;
window.filterPackages = filterPackages;
window.resetPackageFilters = resetPackageFilters;
window.addCompanionMember = addCompanionMember;
window.removeCompanionMember = removeCompanionMember;
window.updateCompanionMember = updateCompanionMember;
window.togglePaymentFields = togglePaymentFields;
window.downloadReceipt = downloadReceipt;
window.getPackageImage = getPackageImage;
window.viewBookingDetails = viewBookingDetails;
window.closeBookingDetailsModal = closeBookingDetailsModal;
window.downloadBookingReceipt = downloadBookingReceipt;
window.closeAllModals = closeAllModals;
window.getSkeletonLoaderHTML = getSkeletonLoaderHTML;