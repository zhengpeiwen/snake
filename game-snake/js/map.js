(function (window) {
    var that;
   function Map(option){
       that=this;
       option=option||{};
       that.width=option.width||600;
       that.height=option.height||600;
       that.color=option.color||'#333';
       that.element=document.createElement('div');
       that.jc();
   }
    Map.prototype.jc= function () {
        var div=that.element;
        div.style.width=that.width+'px';
        div.style.height=that.height+'px';
        div.style.background=that.color;
        div.style.position='relative';
        document.querySelector('body').appendChild(div);
    }
    window.Map=Map;
})(window)
//new Map();