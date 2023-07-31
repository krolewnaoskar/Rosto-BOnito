// schemas/pet.js
export default {
  name: 'pet',
  type: 'document',
  title: 'Pet',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'Number',
      type: 'number',
      title: 'number'
    },
    {
      name: 'Image',
      type: 'image',
      title: 'photo'
    },
    {
      name: 'Margeting',
      type: 'string',
      title: 'marketing'
    }

  ]
}