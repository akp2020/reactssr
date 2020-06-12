import express from 'express';
import path from 'path';
import fs from 'fs';
import React from './../client/node_modules/react';
import { renderToString } from './../client/node_modules/react-dom/server';
import App from './../client/src/App';
import fetch from 'node-fetch';

const app = express();
let pageNum;

app.get('/', (req, res) => {
	let page;
	pageNum = req.query.page;
	if(pageNum === undefined) {
		page = "";
		global.curPage = 0;
	} else {
		page = `&page=${pageNum}`;
		global.curPage = pageNum;
	}
	
	fetch(`http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=20${page}`)
		.then(res => res.json())
		.then(data => {
			const initData = data.hits.map(({objectID,num_comments,points,url,title,created_at,author})=>({objectID,num_comments,points,url,title,created_at,author}));				
			let app = renderToString(<App initData={initData} />);
			//const indexFile = path.resolve('./client/public/index.html');
			const indexFile = path.resolve('./client/build/index.html');
			fs.readFile(indexFile, 'utf8', (err, data) => {
				if (err) {
					return res.status(500).send('Error occured in reading file');
				}
				data = data.replace('</head><body><div id="root">', `<script>window.curPage=${global.curPage};window.initData = ${JSON.stringify(initData).replace(/</g, '\\u003c')}</script></head><body><div id="root">${app}`);
				//data = data.replace(`</body>`, `<script src="http://localhost:3000/static/js/bundle.js"></script><script src="http://localhost:3000/static/js/0.chunk.js"></script><script src="http://localhost:3000/static/js/1.chunk.js"></script><script src="http://localhost:3000/static/js/main.chunk.js"></script></body>`);

				return res.send(data);
			})

		})
		.catch((err) => {
			console.log(err);
			res.send("error occured while fetching data");
		});

});

//app.use(express.static('client/public'));
app.use(express.static('client/build'));

let port = process.env.PORT || 108;

app.listen(port, () => {
	console.log(`server running on port ${port}`);
});
