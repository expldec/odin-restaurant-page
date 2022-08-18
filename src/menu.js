const menu = [
    {
        name: "Pasta alla carbonara",
        description: "Our most popular dish",
        price: "9",
    },
    {
        name: "Carciofi alla giudia",
        description: "The world famous Roman classic",
        price: "10",
    },
    {
        name: "Coda alla vaccinara",
        description: "A centuries old classic",
        price: "11",
    },
    {
        name: "Desserts from our house selection",
        description: "Ask our staff for our selection",
        price: "5",
    },
];

function buildMenu() {
    const content = document.createElement("div");
    content.id = "content";

    menu.forEach((element) => {
        let menuItem = document.createElement("div");
        menuItem.classList.add('menu-item')
        menuItem.innerHTML = `<h3>${element.name}</h3>
                    <p>${element.description}</p>
                    <p><strong>Euro ${element.price}</strong></p>`;
        content.appendChild(menuItem);
    });

    return content;
}

export { buildMenu };
