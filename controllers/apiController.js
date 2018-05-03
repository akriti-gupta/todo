var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    //API to get ToDo based on input username.
    app.get('/api/todos/:uname', function(req, res) {
        
        Todos.find({ username: req.params.uname }, function(err, todos) {
            if (err) throw err;
            
            res.send(todos);
        });
        
    });
    //API to get ToDo based on ToDo ID.
    app.get('/api/todo/:id', function(req, res) {
       
       Todos.findById({ _id: req.params.id }, function(err, todo) {
           if (err) throw err;
           
           res.send(todo);
       });
        
    });

    app.get('/api/todos', function(req, res) {
        
        Todos.find(function(err, todos) {
            if (err) throw err;
            res.send(todos);
        });
        
    });

    //API to create or update a ToDo
    app.post('/api/todo', function(req, res) {
        
        if (req.body.id) {

            var toDoData = {
                            todo: req.body.todo, 
                            isDone: req.body.isDone,
                            hasAttachment: req.body.hasAttachment 
                            };

            Todos.findByIdAndUpdate(req.body.id, toDoData, 
            function(err, todo) {
                if (err) throw err;
                
                res.send('Success');
            });
        }
        // Create a new ToDo if ID does not exist in the request
        else {
           var newTodo = Todos({
               username: req.body.user,
               todo: req.body.todo,
               isDone: req.body.isDone,
               hasAttachment: req.body.hasAttachment
           });
           newTodo.save(function(err) {
               if (err) throw err;
               res.send('Success');
           });   
        }
    });
    
    app.delete('/api/todo', function(req, res) {

        Todos.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
        })
    });
}