(function (window) {
    //var map = document.querySelector('.map');
    function Food(option) {
        option = option || {};
        this.map=option.map;
        this.width = option.width || 20;
        this.height = option.height || 20;
        this.color = option.color || 'green';
        this.div = document.createElement('div');
        this.x = 0;
        this.y = 0;
        this.ds();
        this.jc();

    }
    Food.prototype = {
        constructor: Food,
        jc: function () {
            this.div.style.width = this.width + 'px';
            this.div.style.height = this.height + 'px';
            this.div.style.background = this.color;
            this.div.style.position = 'absolute';
            this.map.element.appendChild(this.div);

        },
        ds: function () {
            this.x =util.getRandom(0,this.map.element.offsetWidth/this.width);
            this.y =util.getRandom(0,this.map.element.offsetHeight/this.height);
            this.div.style.left = this.x * this.width + 'px';
            this.div.style.top = this.y * this.height + 'px';

        }
    }
    window.Food=Food;
})(window,util)

