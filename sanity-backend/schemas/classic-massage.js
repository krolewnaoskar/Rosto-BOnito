// schemas/classic-massage.js
export default {
    name: 'classicMassage',
    type: 'document',
    title: 'Masaze klasyczne',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Tytuł'
        },
        {
            name: 'titleColor',
            type: 'string',
            title: 'Tytuł color'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Opis'
        },
        {
            name: 'time',
            type: 'string',
            title: 'Czas'
        },
        {
            name: 'price',
            type: 'string',
            title: 'Cena'
        },
        {
            name: 'time2',
            type: 'string',
            title: 'Czas 2'
        },
        {
            name: 'price2',
            type: 'string',
            title: 'Cena 2'
        },
    ]
}