const mongoose = require('mongoose');
const database=require('catadop');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});
var conn =catadopt.Details;
var employeeSchema =new mongoose.Schema({
	name: String,
	ead: String,
	crit: String,
	
});

router.post('/', function(req, res, next) {
  var empDetails = new empModel({
    name: req.body.name,
    ead: req.body.ead,
    crit: req.body.crit,
 });

  Details.save(function(err,req1){
    if(err) throw err;
    employee.exec(function(err,data){
      if(err) throw err;
      res.render('index', { title: 'Adopter Data', records:data, success:'Saved Successfully' });
        });
  })
  
  
});


/*
async function getData()
{
  let result= await client.connect();
  let db = result.db(database);
  let collection = db.collection('products');
  let response = await collection.find({}).toArray();
  console.log(response);
}

getData();*/