Class('Task').inherits(Widget)({
    HTML:'<div><span class="name"></span></div>',
    ELEMENT_CLASS:'task',
    prototype : {
        init : function (config){
            Widget.prototype.init.call(this, config);

            this.nameEl = this.element.find('.name');

            this.setLabel(this.taskData.name);

            return true;
        },
        setLabel : function(label){
            this.nameEl.html(label);
        }
    }
});