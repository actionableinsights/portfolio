
# switching to Express

$ npm i express@4.16.4 --save

Index.js

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
## Using Parcel
run using npm run dev



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));


then in package.json
"start": "parcel build src/index.html"

11.08 


https://hidden-dawn-25969.herokuapp.com

need some other APIs?

https://github.com/toddmotto/public-apis