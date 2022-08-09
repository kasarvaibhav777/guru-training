const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});


//1st question 
router.get('/movies', function (req, res){
    let movies = ['3-Idiots', 'Zindagi na milegi dobara', 'spectrum','Jason Bourne']
    console.log(movies);
    res.send(movies)
})



//2nd question 
router.get('/movies/:indexNumber',function(req, res){ 
    
   const movies=['rang de basanti','The shining','Lord of the rings','batman begins']

    let movieIndex = req.params.indexNumber;

     if(movieIndex < 0 || movieIndex >= movies.length){
        return res.send("Invalid Index,Use valid index number")
     }

     let requiredMovie=movies[movieIndex];
     res.send(requiredMovie);
})

//3rd question

// router.get('/q',function(req, res){ //student detail api he 
    
//     let movies=['rang de basanti','The shining','Lord of the rings','batman begins']
//     let movieindex=req.params.indexNumber;
//     let requiredMovie=movies[movieindex]
//     res.send(requiredMovie);
   
// })

//4th question
router.get('/films', function (req, res){
   const movieS = [{
        id: 1,
        name: "Marry Kom"
    },
    {
        id: 2,
        name: "Brothers"
    },
    {
        id: 3,
        name: "Major"
    },
    {
        id: 4,
        name: "Hera pheri"
    }]
    console.log(movieS);

    res.send(movieS)
})



//5th question
router.get('/films/:filmId', function(req, res){
   const films = [{
        "id": 1,
        "name": "spectrum"
    },
    {
        "id": 2,
        "name": "undisputed"
    },
    {
        "id": 3,
        "name": "persiuts happiness"
    },
    {
        "id": 4,
        "name": "bourne legacy"
    }]

    let filmId=req.params.filmId;
    for(let i=0;i<films.length;i++)
    {
        let movie=films[i];
        if(movie=filmId){
            return res.send(movie)
        }
    }
    res.send('the film Id is not Exist,write valid film Id')
    
    
})  

// router.get('/student-details/:name', function(req, res){
    
 
//     /*
//     params is an attribute inside request that contains 
//     dynamic values.
//     This value comes from the request url in the form of an 
//     object where key is the variable defined in code 
//     and value is what is sent in the request
//     */

//     let requestParams = req.params

//     // JSON strigify function helps to print an entire object
//     // We can use any ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
    
//     res.send('Dummy response')
// })
module.exports = router;    
  


