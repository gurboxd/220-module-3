
class Contact {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
}

function addContact(contacts) {
    let name = prompt("Enter contacts name:");
    let address = prompt("Enter contacts address:");
    let phone = prompt("Enter contacts phone number:");
    contacts.push(new Contact(name, address, phone));
}

function sortContacts(contacts) {
    contacts.sort((a, b) => a.name.localeCompare(b.name));
}

function displayContacts(contacts) {
    const contactsDiv = document.getElementById("contacts");
    contactsDiv.innerHTML = ''; // this is if you want to reset the contact list every time, if not you can just remove it. 
    contactsDiv.innerHTML += `<h2>Contacts:</h2>`;
    
    contacts.forEach(contact => {
        contactsDiv.innerHTML += `<p>Name: ${contact.name}, Address: ${contact.address}, Phone: ${contact.phone}</p>`;
    });
}

function addContacts() {
    const contacts = [];
    let addMore = true;

    while (addMore && contacts.length < 10) {
        addContact(contacts);

        if (contacts.length < 10) {
            addMore = confirm("Would you like to add another contact?");
        } else {
            alert("The maximum number of contacts has been reached.");
        }
    }

sortContacts(contacts);
displayContacts(contacts);
}