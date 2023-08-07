// schemas/section-title.js
export default {
    name: 'section-title',
    type: 'document',
    title: 'Section Title',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tytuł'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Opis'
        },
    ]
}