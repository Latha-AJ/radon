const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const MymiddleWare = require('./middlewares/commonMiddlewares')
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://function-UP:Latha7226@cluster0.acdvxwp.mongodb.net/LathaAJ?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (MymiddleWare.mid1);
  

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
