// const express = require('express');
// const path = require('path');

// const app = express();

// app.use(express.static(path.join(__dirname, 'dist')));

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));


// app.use( (err, req, res, next )=> {
//     res.status(500).json({type: 'error', message: err.messsage});
// })

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));
