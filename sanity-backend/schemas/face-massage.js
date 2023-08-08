// schemas/face-massage.js
export default {
    name: 'faceMassage',
    type: 'document',
    title: 'Masaze twarzy',
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
            name: 'etap',
            type: 'string',
            title: 'Etap główny tytuł'
        },
        {
            name: 'etapDescription',
            type: 'string',
            title: 'Etap główny opis'
        },
        {
            name: 'effects',
            type: 'string',
            title: 'Efekty tytuł'
        },
        {
            name: 'effectsDescription',
            type: 'string',
            title: 'Efekty opis'
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
    ]
}