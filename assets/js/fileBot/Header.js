Class('Header').inherits(Widget)({

    HTML : '<div>\
        <div class="title">Densidad de flujo magnético e inducción magnética.</div>\
        <div class="button-container"></div>\
    </div>',

    ELEMENT_CLASS: 'header',

    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);

            this.titleEl = this.element.find('.title');
            this.buttonEl = this.element.find('.button-container');

            this.downloadButton = new DownloadButton();
            this.downloadButton.render(this.buttonEl);

            this._bindEvents();

            return this;
        },

        _bindEvents : function(){

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