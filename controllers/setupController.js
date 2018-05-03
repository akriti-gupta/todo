var Todos = require('../models/todoModel');

module.exports = function(app) {
   app.get('/api/setupTodos', function(req, res) {
       
       var setUpTodos = [
           {
               username: 'Akriti',
               todo: 'To Do Task 1',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'Akriti',
               todo: 'To Do Task 2',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'Aparajit',
               todo: 'Learn 123',
               isDone: false,
               hasAttachment: false
           }
       ];
       Todos.create(setUpTodos, function(err, results) {
           res.send(results);
       }); 
   });
    
}