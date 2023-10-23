// schemas/navbar.js
export default {
    name: 'contact',
    type: 'document',
    title: 'Kontakt',
    fields: [
        {
            name: 'phone',
            type: 'number',
            title: 'Telefon'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'city',
            type: 'string',
            title: 'Miasto'
        },
        {
            name: 'street',
            type: 'string',
            title: 'Ulica'
        },
        {
            name: 'street2',
            type: 'string',
            title: 'Ulica 2'
        },
        {
            name: 'postCode',
            type: 'number',
            title: 'Kod pocztowy'
        },
    ]
}