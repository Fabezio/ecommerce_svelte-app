const products = {

    "name": "produits",
    "categories": [{
        "name": "robes",
        "content": [{
            image: 'https://www.robedesoireecourte.fr/tenue-robe-rouge-bustier-coeur-taille-a-paillettes-en-mousseline-img-PHDG0008-v-robe-bustier-coeur-rouge-courte-pour-soiree-anniversaire.jpg',
            "name": "robe en dentelle",
            "description": "petite robe rouge en dentelle ",
            "rates": [{
                    "author": "jamie",
                    avatar: 'data:image/jpeg;base64,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',
                    "comment": "trop joli",
                    "rating": 5
                },
                {
                    "author": "Naomi",
                    avatar: 'https://janeeverydaydoe.github.io/author/admin/avatar_hu5403e32a74f084656bf978c3d90d41f0_31288_250x250_fill_q90_lanczos_center.jpg',
                    "comment": "bien réalisé",
                    "rating": 0

                }
            ]
        }, ]
    }, {
        "name": "jupes",
        "content": [{
            image: 'https://www.apc.fr/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/apc/imedia/CODBS-F06094_IAI_01.jpg',
            "name": "jupe en jean",
            "description": "jupe courte, tissu jean",
            "rates": [{
                    "author": "dana",
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVQA7Za4Cfu8iA41fqM4TzY28up948U5f-EA&usqp=CAU',
                    "comment": "mmh, sexy!",
                    "rating": 3
                },
                {
                    "author": "troll",
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtVrVyaG6ILBy5jgmAoy3PmihfhDn_Lcb-aw&usqp=CAU',
                    "comment": "un peu trop voyant",
                    "rating": 1
                },
                {
                    "author": "Naomi",
                    avatar: 'https://janeeverydaydoe.github.io/author/admin/avatar_hu5403e32a74f084656bf978c3d90d41f0_31288_250x250_fill_q90_lanczos_center.jpg',
                    "comment": "paaas maal!",
                    "rating": 4

                }
            ]
        }, ]
    }]

}
export default products