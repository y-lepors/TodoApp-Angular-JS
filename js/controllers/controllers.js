/**
 * The List Controller used to display the list with every task to do
 */
app.controller('TodoListController', function($scope) {
    var task = this;
    task.todos = JSON.parse(localStorage.getItem('task'));
    if(task.todos == null){
      task.todos = [];
    }

    $scope.delete = function(index){
      task.todos.splice(index,1);
      localStorage.setItem('task', JSON.stringify(task.todos));
    }

    $scope.done = function(index){
      console.log(index);
      task.todos[index].done = true;
      localStorage.setItem('task', JSON.stringify(task.todos));
    }

 
    task.remaining = function() {
      var count = 0;
      angular.forEach(task.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    task.archive = function() {
      var oldTodos = task.todos;
      task.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) task.todos.push(todo);
      });
    };
  });
/**
 * The add controller used to add new task in the list
 */
app.controller('AddController', function AddController($scope){

    // handle task creation
    $scope.name_task = null;
    $scope.desc_task = null;
    $scope.duree_task = null;
    $scope.context_task = null;
    $scope.date_task = null;
    $scope.url = null;
    
    $scope.addTask = function(){
      var task = this;

      task.todos = JSON.parse(localStorage.getItem('task'));
      if(!(task.todos)){
        task.todos = []
      }

        if($scope.name_task){

            let obj = {
                'id' : task.todos.length + 1,
                'name' : $scope.name_task,
                'context' : $scope.context_task,
                'desc' : $scope.desc_task,
                'duree' : $scope.duree_task,
                'date' : $scope.date_task,
                'url' : $scope.url_task,
                'done' : false
            }
            task.todos.push(obj);
              
        }

        localStorage.setItem('task', JSON.stringify(task.todos));
        window.location.href = "#!/";
    }

});

/**
 * This controller is used to edit the task
 */
app.controller('EditController', function EditController($scope, $routeParams){

    var task = this;
    task.todos = JSON.parse(localStorage.getItem('task'));

    var id = $routeParams.id;

    $scope.name_task = task.todos[id].name;
    $scope.context_task = task.todos[id].context;
    $scope.desc_task = task.todos[id].desc;
    $scope.duree_task = task.todos[id].duree;
    $scope.date_task = task.todos[id].date;
    $scope.url_task = task.todos[id].url;

    $scope.editTask = function(){
      task.todos[id] = {
        'id' : id,
        'name' : $scope.name_task,
        'context' : $scope.context_task,
        'desc' : $scope.desc_task,
        'duree' : $scope.duree_task,
        'date' : $scope.date_task,
        'url' : $scope.url_task,
        'done' : false
      }


      localStorage.setItem('task', JSON.stringify(task.todos));
      window.location.href = "#!/";
    }
});