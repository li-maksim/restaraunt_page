export const ContactsTab = (() => {
    const content = document.querySelector('#content');
    const contacts = document.createElement('div');
    contacts.setAttribute('class', 'home_tab');
    
    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'h2');
    h2.textContent = "Contacts";

    const contactsContent = document.createElement('div');
    contactsContent.setAttribute('class', 'contacts_content');

    const p1 = document.createElement('p');
    p1.setAttribute('class', 'text');
    p1.textContent = 'Give us feedback!';

    const contactCard = document.createElement('div');
    contactCard.setAttribute('class', 'contact_card');
    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'h3');
    h3.textContent = 'Email'
    const p2 = document.createElement('p');
    p2.setAttribute('class', 'email');
    p2.textContent = 'bobs@burgers.com';

    contactCard.appendChild(h3);
    contactCard.appendChild(p2);
    contactsContent.appendChild(p1);
    contactsContent.appendChild(contactCard);
    contacts.appendChild(h2);
    contacts.appendChild(contactsContent);
    content.appendChild(contacts);

});