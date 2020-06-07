import express from 'express';
import path from 'path';
import fs from 'fs';
import React from './../client/node_modules/react';
import {renderToString} from './../client/node_modules/react-dom/server';
import App from './../client/src/App';

const app = express();

app.get('/', (req, res) => {
  const app = renderToString(<App />);
  const indexFile = path.resolve('./client/build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error occured in reading file');
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static('client/build'));

let port = process.env.PORT || 108;

app.listen(port, ()=>{
	console.log(`server running on port ${port}`);
});
