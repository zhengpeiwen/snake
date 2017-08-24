(function (window,Food,Snake,document,Map) {
    var that;
    function Game(){
        that=this
        that.map=new Map();
        that.food = new Food({map:that.map});
        that.snake= new Snake({map:that.map});
        document.querySelector('input').addEventListener('click',function(){
            that.snake.move(that.food);
            //document.querySelector('span').innerHTML=cu;
        });

        document.addEventListener('keydown', function (e) {
            switch (e.keyCode){
                case 37:
                    !(that.snake.direction==='right')&&(that.snake.direction='left');
                    break;
                case 38:
                    !(that.snake.direction==='down')&&(that.snake.direction='up');
                    break;
                case 39:
                    !(that.snake.direction==='left')&&(that.snake.direction='right');
                    break;
                case 40:
                    !(that.snake.direction==='up')&&(that.snake.direction='down');
                    break;
            }
        });
    }
    window.Game=Game;
})(window,Food,Snake,document,Map)

