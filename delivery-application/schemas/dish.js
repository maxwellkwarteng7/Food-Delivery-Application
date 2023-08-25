import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'dishes',
  type: 'document',
  fields: [
    {
      name : 'name', 
      type : 'string',
      title : 'dish name',
      validation : rule=> rule.required()
    },
    {
      name : 'description', 
      type : 'string',
      title : 'dish description',
      validation : rule=> rule.required()
    },
    {
        name : 'image', 
        type : 'image',
        title : 'image of category',
      },
    {
      name : 'price', 
      type : 'number',
      title : 'price of dish in Ghs',
    },
  ],
})
