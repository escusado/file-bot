Class('Todo').inherits(Widget)({
    ELEMENT_CLASS:'todo-wrapper',
    prototype : {
        init : function (config){
            Widget.prototype.init.call(this, config);

            this.getData(this.setupApp.bind(this));

            return true;
        },
        getData : function(callback){
            return $.get('/todo-data', function(data){
                callback(data);
            });
        },

        setupApp : function(data){
            this.data = JSON.parse(data);

            this.activeList = new TaskList({
                listType : 'active'
            });

            this.activeList.render(this.element);

            this.doneList = new TaskList({
                listType : 'done'
            });

            this.doneList.render(this.element);

            this.renderData();
        },

        renderData : function(){
            var todo = this;

            this.data.forEach(function(task){
                todo[task.status+'List'].addTask(task);
            });
        }
    }
});