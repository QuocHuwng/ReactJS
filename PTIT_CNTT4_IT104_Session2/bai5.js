const phoneBooks = [];
function addContact(name, phone, email) {
    const contact = {
        name,
        phone,
        email,
    }
    phoneBooks.push(contact);
};
function displayContact() {
    for (const contact of phoneBooks) {
        console.log(`Ten: ${contact.name}`);
        console.log(`Phone: ${contact.phone}`);
        console.log(`Email: ${contact.email}`);
    }
}
addContact("An", "0123", "An@gmail.com");
addContact("Hung","0123456","hihi@gmail.com")
displayContact();