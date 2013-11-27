Class('FileBot').inherits(Widget)({
    prototype : {

        init : function(config){
            Widget.prototype.init.call(this, config);

            this.header = new Header();
            this.header.render(this.element);

            return this;
        },

        // emitEvent : function(){
        //     socket.emit('hello-i-am-the-socket', { my: 'data fuckeeer' });
        //     this.bindEvents();
        // },

        bindEvents : function(){
            this.element.click(function(){

            });
        }
    }
});