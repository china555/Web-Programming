// const path = require('path');
// const express = require('express');
// const app = express();
// const router = express.Router();

// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')

// // const youtube = require('./routers/router-Youtube');
// // app.use('/');

// app.listen(8080, function () 
// {
//     console.log('Listening at Port ' + 8080);

// }) 

const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = arr.filter((element) => {
    if (element % 2 === 0) {
        return element
    }

})
console.log(arr2)