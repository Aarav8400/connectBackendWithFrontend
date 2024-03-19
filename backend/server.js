import express from "express";

const app=express()
// app.get('/',(req,res)=>{
//     res.send('server is ready');
// })

//get a list of five jokes
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
          "id": 1,
          "title": "The Past, Present, and Future Walked Into a Bar",
          "content": "It was tense."
        },
        {
          "id": 2,
          "title": "Why Don't Scientists Trust Atoms?",
          "content": "Because they make up everything!"
        },
        {
          "id": 3,
          "title": "Parallel Lines Have So Much in Common",
          "content": "It’s a shame they’ll never meet."
        },
        {
          "id": 4,
          "title": "I Told My Wife She Should Embrace Her Mistakes",
          "content": "She gave me a hug."
        },
        {
          "id": 5,
          "title": "Why Did the Scarecrow Win an Award?",
          "content": "Because he was outstanding in his field!"
        }
      ]
    res.send(jokes)
      
})

const port =process.env.PORT||3000;

app.listen(port,()=>{
    console.log("server at ",port);
})