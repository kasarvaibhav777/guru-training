const express = require('express');
const router = express.Router();

router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random", function (req, res) {
    res.send("hi there")
})


router.get("/test-api", function (req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2", function (req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4", function (req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5", function (req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6", function (req, res) {
    res.send({ a: 56, b: 45 })
})

router.post("/test-post", function (req, res) {
    res.send([23, 45, 6])
})


router.post("/test-post-2", function (req, res) {
    res.send({ msg: "hi", status: true })
})

router.post("/test-post-3", function (req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log(req.body)

    res.send({ msg: "hi", status: true })
})



router.post("/test-post-4", function (req, res) {
    let arr = [12, "functionup"]
    let ele = req.body.element
    arr.push(ele)
    res.send({ msg: arr, status: true })
})
//PROBLEM 1:
let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },

    ]

router.post('/players', function (req, res) {

    let arrE = req.body.element

    for (let i = 0; i < players.length; i++) {
        let guru = players[i]
        if (guru.name === arrE.name) {
            return res.send("player is already exists")
        }
    }
    players.push(arrE)
    return res.send({ data: players, status: true })
})

//PROBLEM II:
// you will be given an array of persons (1.e an array of objects)..each person will have a 
//(name: String, age: Number, votingStatus: true/false(Boolean)} take input in query param as votingAge..
//and for all the people above that age, change votingStatus as true also return an array consisting of only
// the person that can vote

// WRITE A POST API TO THE ABOVE

// take this as sample for array of persons: 
let persons = [

    {
        name: "Vaibhav",

        age: 25, votingStatus: false
    },

    {
        name: "Anil",

        age: 20,

        votingStatus: false
    },

    {
        name: "Vishal", age: 70,

        votingStatus: false
    },

    {
        name: "Ganesh",

        age: 15, votingStatus: false
    },

    {
        name: "Akash",

        age: 40,

        votingStatus: false
    }
]

router.post('/persons', function (req, res) {

    let ageV = req.query.ageV;
    let listV=[];
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].age >= ageV) {

            persons[i].votingStatus = true;

            listV.push(persons[i])
        }
    }
    if (listV.length == 0) {
        return res.send("NO DATA FOUND")
    } else {
        return res.send(listV);
    }
})

//    router.post('/voting', function(req, res){
//     let age=req.query.age
    
//     let elegiPerson=[]
//     for (let i=0; i<persons.length; i++){
//         if(persons[i].age>=age){
//             persons[i].votingStatus=true
//             elegiPerson.push(persons[i])
//         }
//     }if(elegiPerson.length==0){
//         return res.send('No data to show.')
//     }else{
//     return res.send(elegiPerson)
//     }
// })
   //let listV=[];
   
 


module.exports = router;