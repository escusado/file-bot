Class('DownloadButton').inherits(Widget)({
    HTML : '<div>\
                <div class="icon-container">\
                    <i class="fa-2x fa-download"></i>\
                </div>\
                <div class="text">\
                    <div class="top">Download Document</div>\
                    <div class="bottom">Ultima version: 12/oct/2013 <span class="tag">Nuevo</span></div>\
                </div>\
            </div>',

    ELEMENT_CLASS : 'button-wrapper',

    prototype : {
        init : function (config){
            Widget.prototype.init.call(this, config);

            this.bindEvents();

            return true;
        },

        bindEvents : function(){
            this.element.click( this.requestDownload.bind(this) );
        },

        requestDownload : function(){
            socket.emit('request-download');
        }

    }
});