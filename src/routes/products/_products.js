// import {writable } from 'svelte/store'

// const products = writable([
//   {id: 'p1', name: 'arcicle 1', description: 'incredible product' },
//   {id: 'p2', name: 'article 2', description: 'incredible product 2' }
// ])
const products = [

    // {
    //     id: 'p1 ',
    //     category: 'vêtements',
    //     image: 'https://thumbs.dreamstime.com/z/robe-dans-le-vecteur-v%C3%AAtements-de-dessin-de-main-cru-mode-85324129.jpg',
    //     name: 'robe',
    //     description: 'robe stylisée',
    //     comment: 'Magnifique!',
    //     rating: 5,
    //     price: 19.99
    // },
    {
        id: 'p2',
        category: 'poster',
        name: 'Obama',
        description: 'Yes we can!',
        comment: 'Where is Michelle?',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpetapixel.com%2Fassets%2Fuploads%2F2013%2F01%2Fobamaportrait1.jpg&f=1&nofb=1',
        rating: '4',
        price: 15,
        quantity: 56
    },
    {
        id: 'p3',
        category: 'poster',
        image: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        name: 'sunrise',
        description: 'lever de soleil',
        comment: 'Hé, c\'est pas mal ça!',
        rating: '3',
        price: 10,
        quantity: 9
    },

    {
        id: 'p4',
        category: 'poster',
        image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
        name: 'sunset',
        description: 'crépuscule',
        comment: 'Magnifique!'
    },
    {
        id: "p5",
        category: null,
        name: 'rien pour le moment',
        description: 'que dalle '
    }

]
export default products