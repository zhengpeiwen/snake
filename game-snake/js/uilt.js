(function (window) {
   var util={
       getRandom: function (min,max) {
           return Math.floor(Math.random()*(max-min)+min)
       }
   }
    window.util=util;
})(window)
