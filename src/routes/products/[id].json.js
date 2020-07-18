import products from './_products.js';

const lookup = new Map();
products.forEach(product => {
	lookup.set(product.id, JSON.stringify(product));
});

export function get(req, res, next) {
	// the `id` parameter is available because
	// this file is called [id].json.js
	const { id } = req.params;

	if (lookup.has(id)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(id));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
