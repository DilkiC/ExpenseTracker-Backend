var express = require('express');
const Expenses = require("../model/Transaction");
var router = express.Router();


router.get("/allexpenses", async (req, res) => {
    const expenses = await Expenses.find();
    res.send(expenses);
  });
  

  router.get("/specexpenses/:password", async (req, res) => {

    const expenses = await Expenses.find({ password: { '$in': req.params.password } });
    console.log(expenses);  
    res.send(expenses);
    // ({ uid: "C001" })
    
});

router.get("/sumexpenses/:password", async (req, res) => {

  const expenses = await Expenses.find({ password: { '$sum ': req.params.value } });
  console.log(expenses);  
  res.send(expenses);
  // ({ uid: "C001" })
  
});

  router.get("/abcd", async (req,res)=>{
    const expenses = await Expenses.find();
    res.send(expenses);
})
  

  router.post('/addTrans',async(req,res)=>{
    const data=await Expenses.create(req.body);
    res.send(data)
})

  router.get("/oneexpense/:password", async (req, res) => {
    try {
      const expenses = await Expenses.findOne(req.params);
      res.send({ data: expenses });
    } catch {
      res.status(404).send({ error: "expenses not found!" });
    }
  });

  router.get('/oneexchange/:amount',async (req,res)=>{
    //const id="60dc0e0020aa31f976c5b4c2";
    //const foundUser = await User.findOne ({ "email" : req.body.email });
    const exchanges = await Expenses.findOne(req.params);
    res.send(exchanges);
    
})

  router.get("/countexpenses/:password", async (req, res) => {
    try {
      const expenses = await Expenses.countDocuments(req.params);
      res.send( expenses );
    } catch {
      res.status(404).send({ error: "expenses not found!" });
    }
  });

  router.patch("/updateexpenses/:password", async (req, res) => {
    try {
      const expenses = await Expenses.findOne(req.params);
      Object.assign(expenses, req.body);
      expenses.save();
      res.send( expenses );
    } catch {
      res.status(404).send({ error: "expenses not found!" });
    }
  });

  router.delete("/deleteexpenses/:password", async (req, res) => {
    try {
      const expenses = await User.findById(req.params.password);
      await expenses.remove();
      res.send({ data: true });
    } catch {
      res.status(404).send({ error: "expenses not found!" });
    }
  });

  router.get("/incexpenses/:nic", async (req, res) => {
    const expenses = await exchange.aggregate([
      { $match: { type: "Expence" , nic: req.params.nic} },
      {
        "$group": {
          "_id": "$nic",
          "total": { $sum: "$value" }
        }
      }
    ]);
     
    res.send(expenses);
  });

  router.get("/exexpenses/:nic", async (req, res) => {
    const expenses = await exchange.aggregate([
      { $match: { type: "Income" , nic: req.params.nic} },
      {
        "$group": {
          "_id": "$nic",
          "total": { $sum: "$value" }
        }
      }
    ]);
     
    res.send(expenses);
  });

  
  

module.exports = router;