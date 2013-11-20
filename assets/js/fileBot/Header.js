Class('Header').inherits(Widget)({

    HTML : '<div>\
        <div class="title">This is a title</div>\
        <div class="button-container"></div>\
        <input type="text"/>\
    </div>',

    ELEMENT_CLASS: 'header',

    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);

            this.titleEl = this.element.find('.title');
            this.inputEl = this.element.find('input');

            this.bindEvents();

            return this;
        },

        bindEvents : function(){
            this.inputEl.bind('keyup', function(ev){

            });
        },

        setLabel : function(name){
            this.titleEl.html(name);

            return this;
        },

        changeBackground : function(){
            this.element.css('background-color', 'red');

            return this;
        }
    }
});