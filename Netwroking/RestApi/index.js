// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.all('/', (req, res) => {
    // console.log('Request--->',req);
    // console.log('Resposne--->',res);
    res.send('Im Up');
});



const todos = [
    {
        id: "1",
        title: "Task 1",
        completed: true,
    },
    {
        id: "2",
        title: "Task 2",
        completed: false,
    },
];

//READ

app.get('/todos', (req, res) => {
    res.json(todos);
});

//CREATE

app.post('/todos',(req,res)=> {
const newTodo = req.body;
todos.push(newTodo);
res.json({
    message:"new todo added",
})
});

//UPDATE

app.put("/todos/:id",(req,res) => {
    const newTodoDaa = req.body;
    const todoParamId = req.params.id;
    const todoIndex = todos.findIndex(td=>td.id===todoParamId);
    if(todoIndex!==-1) {
        todos[todoIndex] = {
            id:todoParamId,
            ...newTodoDaa,
        }
    }

    res.json({message:"data updated"});
});

//DELETE

app.delete('/todos/:id',(req,res)=>{
const todoParamId = req.params.id;
const todoIndex = todos.findIndex(td=>td.id===todoParamId);
if(todoIndex!==-1) {
todos.splice(todoIndex,1);
}

res.json({
    message:"data deleted",
})
});

const PORT = 5111;
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
});