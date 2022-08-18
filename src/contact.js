const contacts = [
    {
        name: "Gianluigi Bombatomica",
        phone: "06 123456",
        email: "gianluigi@example.com",
    },
    {
        name: "Supervalbrembana",
        phone: "06 234567",
        email: "supervalbrembana@example.com",
    },
    {
        name: "Jonathan Grass",
        phone: "06 345678",
        email: "jonathangrass@example.com",
    }
];

function buildContact() {
    const content = document.createElement("div");
    content.id = "content";

    contacts.forEach((element) => {
        let contactItem = document.createElement("div");
        contactItem.classList.add('contact-item')
        contactItem.innerHTML = `<h3>${element.name}</h3>
                    <p>&phone; ${element.phone}</p>
                    <p>&#9993; ${element.email}</p>`;
        content.appendChild(contactItem);
    });

    return content;
}

export { buildContact };
