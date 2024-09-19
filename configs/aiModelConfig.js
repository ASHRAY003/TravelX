/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */
import { GEMINI_API_KEY } from '../constants/index';


const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
        {
            role: "user",
            parts: [
                { text: "Generate Travel Plan For Location:Texas, USA, for 4 Days and 3 Nights for me with a Luxury budget with a Flight Details, Flight Price with booking URL, Hotel Options list with Hotel Name,Hotel Address, Price, hotel image url,Places to visit nearby  with placename, Place Details,Place Url Image,Geo Cordinates,Ticket Pricing, Time t travel of each of the location for {totalDays} days and {totalNights} night with each day plan with best time to visit in JSON Format\n" },
            ],
        },
        {
            role: "model",
            parts: [
                { text: "```json\n{\n  \"tripDetails\": {\n    \"location\": \"Texas, USA\",\n    \"duration\": {\n      \"days\": 4,\n      \"nights\": 3\n    },\n    \"budget\": \"Luxury\",\n    \"flightDetails\": {\n      \"departureAirport\": \"Your Departure Airport\",\n      \"arrivalAirport\": \"Dallas/Fort Worth International Airport (DFW)\",\n      \"flightPrice\": \"Example: $500 (round trip)\",\n      \"bookingUrl\": \"https://www.example.com/flight-booking\" \n    }\n  },\n  \"hotelOptions\": [\n    {\n      \"name\": \"The Mansion on Turtle Creek\",\n      \"address\": \"2821 Turtle Creek Blvd, Dallas, TX 75219\",\n      \"price\": \"$1,000+\",\n      \"imageUrl\": \"https://www.themansiononturtlecreek.com/images/hero-mansion.jpg\",\n      \"nearbyPlaces\": [\n        \"Klyde Warren Park\",\n        \"Perot Museum of Nature and Science\",\n        \"Dallas Arts District\"\n      ]\n    },\n    {\n      \"name\": \"The Ritz-Carlton, Dallas\",\n      \"address\": \"2114 Woodall Rodgers Freeway, Dallas, TX 75201\",\n      \"price\": \"$800+\",\n      \"imageUrl\": \"https://www.ritzcarlton.com/en/hotels/dallas/images/hotel-gallery/exterior-daytime-pool.jpg\",\n      \"nearbyPlaces\": [\n        \"Dallas Museum of Art\",\n        \"Nasher Sculpture Center\",\n        \"The Sixth Floor Museum at Dealey Plaza\"\n      ]\n    },\n    {\n      \"name\": \"The Joule\",\n      \"address\": \"1530 Main St, Dallas, TX 75201\",\n      \"price\": \"$700+\",\n      \"imageUrl\": \"https://www.thejouledallas.com/wp-content/uploads/2022/06/joule-exterior-night.jpg\",\n      \"nearbyPlaces\": [\n        \"Dallas World Aquarium\",\n        \"The Majestic Theatre\",\n        \"Pioneer Plaza\"\n      ]\n    }\n  ],\n  \"dailyItinerary\": [\n    {\n      \"day\": 1,\n      \"title\": \"Arrival in Dallas & Downtown Exploration\",\n      \"description\": \"Arrive at Dallas/Fort Worth International Airport (DFW). Transfer to your luxury hotel in downtown Dallas. After settling in, spend the afternoon exploring the vibrant Dallas Arts District, home to world-class museums like the Dallas Museum of Art and the Nasher Sculpture Center. Enjoy dinner at one of the many acclaimed restaurants in the area.\",\n      \"activities\": [\n        {\n          \"name\": \"Dallas Arts District\",\n          \"details\": \"A hub for art and culture, featuring museums, galleries, performance venues, and public art installations.\",\n          \"url\": \"https://www.dallasartsdistrict.org/\",\n          \"imageUrl\": \"https://www.dallasartsdistrict.org/assets/images/home-page/hero-image/hero-image-desktop.jpg\",\n          \"geoCoordinates\": \"32.7823, -96.7997\",\n          \"ticketPricing\": \"Free for most public spaces, individual museum entry fees may apply.\",\n          \"timeToSpend\": \"3-4 hours\"\n        },\n        {\n          \"name\": \"Dinner in Dallas Arts District\",\n          \"details\": \"Numerous upscale restaurants offer dining experiences from fine dining to innovative cuisine.\",\n          \"url\": \"https://www.dallasartsdistrict.org/explore/restaurants\",\n          \"imageUrl\": \"https://www.dallasartsdistrict.org/assets/images/home-page/hero-image/hero-image-desktop.jpg\",\n          \"geoCoordinates\": \"32.7823, -96.7997\",\n          \"ticketPricing\": \"Varies by restaurant\",\n          \"timeToSpend\": \"1-2 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"title\": \"Culture & History\",\n      \"description\": \"Start your day with a visit to the iconic Sixth Floor Museum at Dealey Plaza, gaining insight into the life and legacy of President John F. Kennedy. Afterward, enjoy a leisurely stroll through Klyde Warren Park, an urban oasis built over a freeway, before experiencing the interactive exhibits at the Perot Museum of Nature and Science.\",\n      \"activities\": [\n        {\n          \"name\": \"The Sixth Floor Museum at Dealey Plaza\",\n          \"details\": \"Learn about the events surrounding the assassination of President John F. Kennedy.\",\n          \"url\": \"https://www.jfk.org/\",\n          \"imageUrl\": \"https://www.jfk.org/media/images/dealey-plaza-museum-entrance-6-29-19_001_edit.jpg\",\n          \"geoCoordinates\": \"32.7765, -96.8080\",\n          \"ticketPricing\": \"$18 for adults\",\n          \"timeToSpend\": \"2-3 hours\"\n        },\n        {\n          \"name\": \"Klyde Warren Park\",\n          \"details\": \"An elevated park over a freeway, offering green space, public art, and events.\",\n          \"url\": \"https://klydewarrenpark.org/\",\n          \"imageUrl\": \"https://klydewarrenpark.org/wp-content/uploads/2021/07/Klyde-Warren-Park-Aerial-Hero-Image-1-scaled.jpg\",\n          \"geoCoordinates\": \"32.7808, -96.7999\",\n          \"ticketPricing\": \"Free\",\n          \"timeToSpend\": \"1-2 hours\"\n        },\n        {\n          \"name\": \"Perot Museum of Nature and Science\",\n          \"details\": \"Interactive exhibits exploring science, nature, and technology.\",\n          \"url\": \"https://www.perotmuseum.org/\",\n          \"imageUrl\": \"https://www.perotmuseum.org/sites/default/files/styles/perot_museum_hero_image/public/2021-12/Hero-Image-Perot-Museum-Nature-Science.jpg\",\n          \"geoCoordinates\": \"32.7834, -96.8004\",\n          \"ticketPricing\": \"$25 for adults\",\n          \"timeToSpend\": \"3-4 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"title\": \"Day Trip to Fort Worth & Texas Culture\",\n      \"description\": \"Embark on a day trip to Fort Worth, known for its Western heritage and vibrant arts scene. Visit the Stockyards National Historic District, a lively area with cowboy boots, rodeos, and traditional saloons. Explore the Kimbell Art Museum, renowned for its collection of masterpieces.\",\n      \"activities\": [\n        {\n          \"name\": \"Fort Worth Stockyards National Historic District\",\n          \"details\": \"A historic district with Western saloons, shops, and attractions, including the Fort Worth Stockyards Rodeo.\",\n          \"url\": \"https://www.fortworthstockyards.com/\",\n          \"imageUrl\": \"https://www.fortworthstockyards.com/uploads/images/hero-image/fort-worth-stockyards-aerial-hero-image.jpg\",\n          \"geoCoordinates\": \"32.7460, -97.3313\",\n          \"ticketPricing\": \"Varies by attraction\",\n          \"timeToSpend\": \"3-4 hours\"\n        },\n        {\n          \"name\": \"Kimbell Art Museum\",\n          \"details\": \"A world-class art museum showcasing a diverse collection of masterpieces from around the world.\",\n          \"url\": \"https://kimbellart.org/\",\n          \"imageUrl\": \"https://kimbellart.org/sites/default/files/styles/hero_image_full_width/public/2019-12/kimbell-art-museum-hero.jpg\",\n          \"geoCoordinates\": \"32.7475, -97.3426\",\n          \"ticketPricing\": \"Free admission\",\n          \"timeToSpend\": \"2-3 hours\"\n        }\n      ]\n    },\n    {\n      \"day\": 4,\n      \"title\": \"Departure & Farewell\",\n      \"description\": \"Enjoy a leisurely breakfast at your hotel. Depending on your flight schedule, you can explore more of Dallas or indulge in some last-minute shopping before heading to Dallas/Fort Worth International Airport (DFW) for your departure.\",\n      \"activities\": [\n        {\n          \"name\": \"Departure from Dallas/Fort Worth International Airport (DFW)\",\n          \"details\": \"Head to the airport for your flight back home.\",\n          \"url\": \"https://www.dfwairport.com/\",\n          \"imageUrl\": \"https://www.dfwairport.com/sites/default/files/media/2019/03/DFW-Airport-Terminal-C-Skylight.jpg\",\n          \"geoCoordinates\": \"32.8969, -97.0401\",\n          \"ticketPricing\": \"N/A\",\n          \"timeToSpend\": \"N/A\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Please note:**\n\n* This is a sample itinerary and can be customized based on your preferences and interests.\n* Flight prices and hotel rates are approximate and can vary depending on the season and availability.\n* Ticket pricing for attractions can also vary, and it's advisable to check the official websites for the most up-to-date information. \n* This itinerary does not include transportation costs, meals, or other incidental expenses.\n* Be sure to check the latest travel advisories and restrictions before your trip. \n" },
            ],
        },
    ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());