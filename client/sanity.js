import imageUrlBuilder from '@sanity/image-url'
import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'aodo6wh1' , 
    dataset : 'production',
    useCdn : true , 
    apiVersion: '2021-10-21',
  })
const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);


export default client ; 

//sanity cors add http://localhost:3000 