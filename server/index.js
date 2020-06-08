import express from 'express';
import path from 'path';
import fs from 'fs';
import React from './../client/node_modules/react';
import { renderToString } from './../client/node_modules/react-dom/server';
import App from './../client/src/App';
import fetch from 'node-fetch';

const app = express();

app.get('/', (req, res) => {

	fetch('http://hn.algolia.com/api/v1/search?tags=front_page&&hitsPerPage=30')
		.then(res => res.json())
		.then(data => {
			const initData = data.hits;
			let app = renderToString(<App initData={initData} />);
			const indexFile = path.resolve('./client/build/index.html');
			fs.readFile(indexFile, 'utf8', (err, data) => {
				if (err) {
					return res.status(500).send('Error occured in reading file');
				}
				data = data.replace('</head><body><div id="root">', `<script>window.initData = ${JSON.stringify(initData).replace(/</g, '\\u003c')}</script></head><body><div id="root">${app}`);
				//data = data.replace(`</body>`, `<script src="http://localhost:3000/static/js/bundle.js"></script><script src="http://localhost:3000/static/js/0.chunk.js"></script><script src="http://localhost:3000/static/js/1.chunk.js"></script><script src="http://localhost:3000/static/js/main.chunk.js"></script></body>`);

				return res.send(data);
			})

		})
		.catch((err) => {
			console.log(err);
			res.send("error occured while fetching data");
		});

});

app.use(express.static('client/build'));

let port = process.env.PORT || 108;

app.listen(port, () => {
	console.log(`server running on port ${port}`);
});
