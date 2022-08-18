function buildHome() {
    const content = document.createElement("div");
    content.id = "content";

    const aboutUs = document.createElement("div");
    aboutUs.id = "about-us";
    aboutUs.innerHTML = `<p>Our restaurant is run by food lovers, for food lovers.</p>
                    <p>We're a family-run business with a mission to serve you the best roman cuisine, made with local ingredients, right in the heart of Rome.</p>
                    <p>Come say hello!</p>`;

    const foodCarousel = document.createElement("div");
    foodCarousel.id = "food-carousel";
    foodCarousel.innerHTML = `<div class="dish-thumb"><img src="img/carbonara.jpg" alt=""></div>
                    <div class="dish-thumb"><img src="img/carciofi.jpg" alt=""></div>
                    <div class="dish-thumb"><img src="img/coda-vaccinara.jpg" alt=""></div>
                    <div class="dish-thumb"><img src="img/torta.jpg" alt=""></div>`;

    const hours = document.createElement('div');
    hours.id = 'hours';
    hours.innerHTML = `<p><strong>Closed on Wednesdays</strong></p>
    <p><strong>All other weekdays:</strong></p>
    <p>Lunch: 12:30 - 15:00</p>
    <p>Dinner: 19:00 - 23:00</p>`;

    const location = document.createElement('div');
    location.id = 'location';
    location.innerHTML = `Via Della Scrofa 123, Rome, Italy`;

    content.appendChild(aboutUs);
    content.appendChild(foodCarousel);
    content.appendChild(hours);
    content.appendChild(location);
    return content;
}

export {buildHome};