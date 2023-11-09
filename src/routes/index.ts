const Movie = require('../app/model/Movies');
const newsRouter = require('./news');

const route = (app) => {
  app.get('/', (req, res) => {
    // res.render("home");
    const movie = Movie.where();
    console.log(movie);
    res.json({
      name: 'helllo'
    });
  });

  app.use('/news', newsRouter);
};

module.exports = route;
