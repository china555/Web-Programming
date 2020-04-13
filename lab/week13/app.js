const express = require('express');
const path = require('path');
const app = express();
/* Router Module for handling routing */
const router = express.Router();
// Register the router
app.use(express.urlencoded({
    extended: true
}));

app.use('/', router);
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/contactus.html'));
});


router.post('/submit-form', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const text = req.body.txtMessage
    console.log(`I recieve it already`)

    const html = `<h1>Thank you ${name}!!</h1>  <h5>We will contact you via ${email} within 3 business days</h5>
    Your message: ${text}`
    res.send(html)
})


app.listen(8080, () => {
    console.log(`Open Port 8080 already`)
})