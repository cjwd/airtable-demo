var Airtable = require('airtable');

var base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);
const table = base('Models');
const view = "Grid view";

exports.getModels = (req, res) => {
  table.select({
      view: view,
      pageSize: 10
  }).firstPage((err, records) => {
      if (err) { console.error(err); }
      var models = records.map( record => {
          return {
            _id: record.getId(),
            name: record.get('Full Name'),
            photo: record.get('Headshot')
          }
      });

      // console.log(models);
      res.render('index', { title: 'Models', models });

  });
}