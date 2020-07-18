import products from './_products.js';

const contents = JSON.stringify(products.map(product => {
	return {
		name: product.name,
		description: product.description,
		id: product.id
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}