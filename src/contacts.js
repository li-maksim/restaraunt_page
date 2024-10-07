export const ContactsTab = (() => {
    const content = document.querySelector('#content');
    const contacts = document.createElement('div');
    contacts.setAttribute('class', 'home_tab');
    
    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'h2');
    h2.textContent = "Give us feedback";

    const contactsContent = document.createElement('div');
    contactsContent.setAttribute('class', 'contacts_content');

    const form = document.createElement('form');
    form.setAttribute('class', 'form');
    const nameInput = document.createElement('input');
    nameInput.placeholder = 'Your Name (required)';
    nameInput.setAttribute('class', 'input');
    const phoneInput = document.createElement('input');
    phoneInput.placeholder = 'Your Phone (required)';
    phoneInput.setAttribute('class', 'input');
    const message = document.createElement('textarea');
    message.setAttribute('class', 'message');
    message.placeholder = 'Your Message';
    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('class', 'button');
    submitBtn.setAttribute('id', 'submit_btn');
    submitBtn.textContent = 'Submit';

    function submit(evt) {
        evt.preventDefault();
        if (nameInput.value == '' && phoneInput.value == '') {
            nameInput.style.outline = 'solid red';
            phoneInput.style.outline = 'solid red';
        } else if (nameInput.value == '') {
            nameInput.style.outline = 'solid red';
        } else if (phoneInput.value == '') {
            phoneInput.style.outline = 'solid red';
        } else {
            nameInput.value = '';
            phoneInput.value = '';
            message.value = '';
            alert("Thanks! But right now this form doesn't do anything.")
        }
    };

    submitBtn.addEventListener('click', submit);

    form.appendChild(nameInput);
    form.appendChild(phoneInput);
    form.appendChild(message);
    form.appendChild(submitBtn);

    const contactCard = document.createElement('div');
    contactCard.setAttribute('class', 'contact_card');
    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'h3');
    h3.textContent = 'Our email:'
    const p = document.createElement('p');
    p.setAttribute('class', 'email');
    p.textContent = 'bobs@burgers.com';

    contactCard.appendChild(h3);
    contactCard.appendChild(p);
    contactsContent.appendChild(form);
    contactsContent.appendChild(contactCard);
    contacts.appendChild(h2);
    contacts.appendChild(contactsContent);
    content.appendChild(contacts);

});