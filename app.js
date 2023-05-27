const express = require('express');
const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', function (req, res) {
    res.render('home');
})

app.listen(3000, () => {

})