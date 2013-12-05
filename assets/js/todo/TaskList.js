Class('TaskList').inherits(Widget)({
    HTML:'<div><span class="title"></span></div>',
    ELEMENT_CLASS:'task-list',
    prototype : {
        init : function (config){
            Widget.prototype.init.call(this, config);

            this.element.find('.title').html('Tasks '+this.listType+':');

            this.element.addClass(this.listType);

            return true;
        },
        addTask : function(taskData){
            // console.log('>>>>', this.element.attr('class')+' name: '+taskData.name+', status:'+taskData.status);
            var newTask = new Task({
                taskData : taskData
            });

            newTask.render(this.element);

            this.appendChild(newTask);
        }
    }
});