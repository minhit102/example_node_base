const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;

const db = require('./config/db/connectDB');
db.connect();
const route = require('./routes');
const handleBars = require('express-handlebars');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }))


app.engine('hbs', handleBars.engine({
  extname: '.hbs',
  helpers: {
  sum : (a,b) => a+b
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(morgan('combined'));
app.use(express.json());

/*app.get('/', function (req, res) {
  res.send('Hello World')
})*/
app.use(express.static(path.join(__dirname, 'public')));

route(app);

app.listen(3000, () => console.log(`App : http://localhost:${port}`));
