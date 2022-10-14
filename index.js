const express = require("express");

var app = express();

const PORT = process.env.PORT;

//database
const CyclicDB = require("cyclic-dynamodb")
const db = CyclicDB("wild-plum-bunny-togaCyclicDB")


const animals = db.collection("animals")

async function test('should first', () => { second })(){
    // create an item in collection with key "leo"
    let leo = await animals.set("leo", {
        type: "cat",
        color: "orange"
    })

    // get an item at key "leo" from collection animals
    let item = await animals.get("leo")
    console.log(item)
}

animals()







app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });