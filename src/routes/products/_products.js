// import {writable } from 'svelte/store'

// const products = writable([
//   {id: 'p1', name: 'arcicle 1', description: 'incredible product' },
//   {id: 'p2', name: 'article 2', description: 'incredible product 2' }
// ])
const products = [
  {id: 'p1', name: 'Obama', description: 'Yes we can!', comment: 'Where is Michelle?', image: 'data:image/jpeg;base64,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', rating: '4', price: 15, quantity: 56 },
  {id: 'p3', image: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', name: 'sunrise', description: 'lever de soleil', comment: 'Hé, c\'est pas mal ça!' , rating: '3', price: 10, quantity: 9},
  
  {id: 'p4', image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg', name: 'sunset', description: 'crépuscule', comment: 'Magnifique!' },

]

export default products