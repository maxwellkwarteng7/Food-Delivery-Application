import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'restaurants',
  type: 'document',
  fields: [
    {
      name : 'name', 
      type : 'string',
      title : 'Name',
      validation : rule=> rule.required()
    },
    {
      name : 'description', 
      type : 'string',
      title : 'Description',
      validation : rule=> rule.max(200)
    },
    {
        name : 'image', 
        type : 'image',
        title : 'image of the restaurant',
      },
    {
      name : 'lat', 
      type : 'number',
      title : 'latitude of the restaurant',
    },
    {
        name : 'lng', 
        type : 'number',
        title : 'longitude of the restaurant',
      },
      {
        name : 'address', 
        type : 'string',
        title : 'Restaurant address',
        validation : rule=> rule.required()
      },
      {
        name : 'rating', 
        type : 'number',
        title : 'Rating (Enter a number between 0 and 6)',
        validation: rule=> rule.required().min(1).max(5).error('Please enter a value between 0 and 6')
      },
      {
        name : 'reviews', 
        type : 'string',
        title : 'Reviews',
      },
      {
        name: 'type',
        title: 'category',
        validation: rule=> rule.required(),
        type : 'reference',
        to : [{type:'category'}]
      },
      {
        name: 'dishes',
        title: 'Dishes',
        validation: rule=> rule.required(),
        type : 'array',
        of : [{type:'reference' , to : [{type: 'dish'}]}]
      }
  ],
})
