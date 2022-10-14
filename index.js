const express = require("express");

var app = express();

const PORT = process.env.PORT;

//global
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
  app.all("/", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
//end of global

//database
const CyclicDB = require("cyclic-dynamodb")
const db = CyclicDB("wild-plum-bunny-togaCyclicDB")


const animals = db.collection("animals")

async function test(){
    // create an item in collection with key "leo"
    let leo = await animals.set("leo", {
        type: "cat",
        color: "orange"
    })

    // get an item at key "leo" from collection animals
    let item = await animals.get("leo")
    console.log(item)
}

test()

//test
app.get("/", async(req, res, next) => {
    test()
    //en el GET
    console.log(req.query.num)

    res.json({msg:"welcome :3"});
    await animals.list() //da toooooodooooooooooo
});


app.get("/set", async(req, res, next) => {
    var nameReq=req.query.name
    var valueReq=req.query.value
    await animals.set({name:nameReq,value:valueReq})
    res.json({msg:"set"});
});  







app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });