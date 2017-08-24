(function (window) {
    //var map = document.querySelector('.map')
    var timer;
    var cu=0;
    function Snake(option){
        option=option||{};
        this.map=option.map;
        this.width=option.width||20;
        this.height=option.height||20;
        this.direction='right';
        this.data=[
            {
                x:2,
                y:2,
                color:'red',
                element:document.createElement('div')
            },
            {
                x:1,
                y:2,
                color:'green',
                element:document.createElement('div')
            },
            {
                x:0,
                y:2,
                color:'green',
                element:document.createElement('div')
            }
        ]
        this.body();
    }
    Snake.prototype={
        constructor:Snake,
        body: function () {
            var that=this;
            this.data.forEach(function (item,i) {
                var div=item.element;
                div.style.width=that.width+'px';
                div.style.height=that.height+'px';
                div.style.background=item.color;
                div.style.position='absolute';
                div.style.left=item.x*that.width+'px';
                div.style.top=item.y*that.height+'px';
                that.map.element.appendChild(div);
            })
        },
        move: function (food) {
            var that=this;
            var head=this.data[0];
            window.clearInterval(timer);
             timer= setInterval(function () {
                if(that.direction==='left'&&(head.x-1)*that.width<0){
                    return window.clearInterval(timer);
                }else if(that.direction==='up'&&(head.y-1)*that.height<0){
                    return window.clearInterval(timer);
                }else if(that.direction==='right'&&(head.x+1)*that.width>=that.map.offsetWidth){
                   return window.clearInterval(timer);
                }else if(that.direction==='down'&&(head.y+1)*that.height>=that.map.offsetHeight){
                   return window.clearInterval(timer);
                }
                for(var i=that.data.length-1;i>0;i--){
                    that.data[i].x=that.data[i-1].x;
                    that.data[i].y=that.data[i-1].y;
                }
                switch (that.direction) {
                    case 'left':
                        head.x--;
                        that.body();
                        break;
                    case 'right':
                        head.x++;
                        that.body();
                        break;
                    case 'up':
                        head.y--;
                        that.body();
                        break;
                    case 'down':
                        head.y++;
                        that.body();
                        break;
                }
                if(head.x == food.x && head.y == food.y){
                    cu+=1;
                    //var last=that.data[that.data.length-1];
                    //var element=document.createElement('div');
                    //element.style.width=that.width+'px';
                    //element.style.height=that.height+'px';
                    //element.style.background='green';
                    //element.style.position='absolute';
                    //element.style.left=last.x*that.width+'px';
                    //element.style.top=last.y*that.height+'px';
                    //map.appendChild(element);
                    that.data.push({
                        x:that.data[that.data.length-1].x,
                        y:that.data[that.data.length-1].y,
                        color:that.data[that.data.length-1].color,
                        element:document.createElement('div')
                    })
                    that.body();
                    food.ds();
                    document.querySelector('span').innerHTML=cu;
                }
            },200);
        }
    };
    window.Snake=Snake;
})(window)


