// schemas/before-massage.js
export default {
  name: 'beforeMassage',
  type: 'document',
  title: 'Przed masażem',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Opis 1 ',
    },
    {
        name:'afterMassage',
        type: 'string',
        title: 'Po masażu'
    },
   {
    name:'contraindications',
    type:'string',
    title:'Przeciwskazania tytul'
   },
   {
    name:'description',
    type:'string',
    title:'Opis przeciwskazania'
   }
  ],
}
