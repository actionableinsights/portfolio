// const express = require('express');
// const path = require('path');

// const app = express();

// app.use(express.static(path.join(__dirname, 'dist')));

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

//calls resolve when done
// new Promise ( (resolve, reject) => {
//     return reject (new Error('no bears'));
//     setTimeout( ()=> {
//         console.log('Bears');
//         resolve('time to fuck you up');
//     },2000);
// })
// .then( (quote) => {
//     console.log(quote);
// })
// .catch( (error) => console.log('error', error));




// app.use( (err, req, res, next )=> {
//     res.status(500).json({type: 'error', message: err.messsage});
// })

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));
