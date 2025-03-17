const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/ramen1.webp", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/ramen2.webp", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ezo Restaurant", image: "images/ramen4.webp", rating: 9, comment: "Rich broth!" },
    { id: 3, name: "Shio ramen", restaurant: "Upepo", image: "images/ramen5.webp", rating: 6, comment: "Rich!" },
    { id: 3, name: "Wakayama ramen", restaurant: "Jiko", image: "images/ramen6.webp", rating: 5, comment: "Bravo!" },
    { id: 3, name: "Instant ramen", restaurant: "Tatu Restaurant By Fairmont", image: "images/ramen7.webp", rating: 5, comment: "Tamu!" },
    { id: 3, name: "Ramyeon ramen", restaurant: "The Carnivore Restaurant", image: "images/ramen8.webp", rating: 10, comment: "Ina slap!" },
    { id: 3, name: "Green onions", restaurant: "270° Rooftop", image: "images/ramen9.webp", rating: 9, comment: "Tamu Sana!" },
    { id: 3, name: "Beni shoga", restaurant: "Meko", image: "images/ramen10.webp", rating: 10, comment: "Sweet!" },
    { id: 3, name: "Kamaboko", restaurant: "Crave Kenya Kilimani", image: "images/ramen11.webp", rating: 8, comment: "Wow" },
];

// Function to display ramen images
function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

// Function to display ramen details
function handleClick(ramen) {
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

// Function to handle form submission
function addSubmitListener() {
    document.getElementById("new-ramen-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const newRamen = {
            id: ramens.length + 1,
            name: event.target.name.value,
            restaurant: event.target.restaurant.value,
            image: event.target.image.value,
            rating: event.target.rating.value,
            comment: event.target.comment.value,
        };

        ramens.push(newRamen);
        displayNewRamen(newRamen);

        event.target.reset();
    });
}

// Function to display newly added ramen
function displayNewRamen(ramen) {
    const ramenMenu = document.getElementById("ramen-menu");
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
}

// Initialize the app
function main() {
    displayRamens();
    addSubmitListener();
    handleClick(ramens[0]); // Display first ramen by default
}

document.addEventListener("DOMContentLoaded", main);