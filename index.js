const express = require('express')
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override');


const app = express()
let port = 8080;
const path = require("path");
app.use(express.urlencoded({ extended: true}));

app.set("view engine" , "ejs");
app.set("views",path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride('_method'));


let Amount = {
  totalAmount : 0.00,
  currAmount : 0.00
}

let expenseArr = [
  // {
  //   id : uuidv4(),
  //   loss : 100,
  //   reason: "kyu kharch kiye"
  // },
  // {
  //   id : uuidv4(),
  //   loss : 100,
  //   reason: "kyu kharch kiye"
  // },
];
let incomeArr = [
  // {
  //   id : uuidv4(),
  //   gain : 100,
  //   reason: "chole bech ke"
  // },
  // {
  //   id : uuidv4(),
  //   gain : 100,
  //   reason: "paise kaise aaye"
  // },
];


app.get("/",function(req,res){
  expenseArr = [];
  incomeArr = [];
  res.render("initial.ejs");
})

app.post("/",function(req , res){
  Amount = req.body;
  Amount.totalAmount = Amount.Amount;
  Amount.currAmount = Amount.Amount;
 res.redirect("/expenses");
//  console.log(Amount);
})

app.get('/expenses', function (req, res) {
  res.render('index.ejs',{ Amount , expenseArr ,incomeArr});
})





app.get("/expenses/expense",function(req,res){
  res.render("expense.ejs");
})

app.post("/expenses/expense",function(req , res){
  let { loss, reason } = req.body;
  let id = uuidv4();
  
  expenseArr.push({id ,loss , reason});
  Amount.currAmount -= loss;
  res.redirect("/expenses");
})




app.get("/expenses/income",function(req,res){
  res.render("income.ejs");
})

app.post("/expenses/income",function(req , res){
  let { gain, reason } = req.body;
  let id = uuidv4();

  incomeArr.push({id ,gain , reason});
  Amount.currAmount = parseInt(Amount.currAmount) + parseInt(gain);
  res.redirect("/expenses");
  
  
})


app.patch("/expenses/expense/:id/edit",function(req,res){
  let { id } = req.params;
  let expense = expenseArr.find((exp) => id === exp.id);
  res.render("editExpense.ejs",{Amount , expense});

})
app.post("/expenses/expense/:id/edit",function(req,res){
  let { id } = req.params;
  let expense = expenseArr.find((exp) => id === exp.id);

  let {loss , reason} = req.body;
  Amount.currAmount = parseInt(Amount.currAmount) + parseInt(expense.loss);
  expense.loss = loss;
  expense.reason = reason;
  Amount.currAmount -= loss;
  res.redirect("/expenses");
})

app.patch("/expenses/income/:id/edit",function(req,res){
  let { id } = req.params;
  let income = incomeArr.find((profit) => id === profit.id);
  res.render("editIncome.ejs",{Amount , income});
})
app.post("/expenses/income/:id/edit",function(req,res){
  let { id }= req.params;
  let income = incomeArr.find((profit) => id === profit.id);

  let {gain , reason} = req.body;
  Amount.currAmount = parseInt(Amount.currAmount) - parseInt(income.gain);
  income.gain = gain;
  income.reason = reason;
  Amount.currAmount = parseInt(Amount.currAmount) + parseInt(income.gain);
  res.redirect("/expenses");
})


app.delete("/expenses/:id/delete",function(req,res){
   let { id } = req.params;
   let income = incomeArr.find((profit) => id === profit.id);
   let expense = expenseArr.find((exp) => id === exp.id);
   if(income){
    Amount.currAmount = parseInt(Amount.currAmount) - parseInt(income.gain);
    incomeArr = incomeArr.filter((ele) => ele.id !== id);
    res.redirect("/expenses");
   }
   else if(expense){
    Amount.currAmount = parseInt(Amount.currAmount) + parseInt(expense.loss);
    expenseArr = expenseArr.filter((ele) => ele.id !== id);
    res.redirect("/expenses");
   }
})









app.listen(port , function(){
    console.log("listenint on port : 8080");
});