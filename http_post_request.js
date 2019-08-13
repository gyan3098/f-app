// http post request with express and body parser module

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
const Joi = require('joi')

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });
    Joi.validate(req.body, schema, (err, result) => {
        if (err) {
            console.log(err)
            res.send('an error has occurred');
        }
        console.log(result)
        res.send('successfuly posted data');
    })
    // database work here
    //res.send('Successfully posted data')
    //res.json({ success: true });
})
app.listen(3000)