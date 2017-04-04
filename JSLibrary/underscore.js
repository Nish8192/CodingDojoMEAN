var _ = {
   map: function(list, callback) {
     var arr = [];
     for(let i = 0; i < list.length; i++){
         arr.push(callback(list[i]));
     }
     return arr;
   },
   reduce: function(list, callback, memo) {
     for(let i = 0; i < list.length; i++){
        memo = callback(memo, list[i]);
     }
     return memo;
   },
   find: function(list, callback) {
     for(let i = 0; i < list.length; i++){
         if(callback(list[i])){
             return list[i];
         }
     }
     return undefined;
   },
   filter: function(list, callback) {
     var arr = [];
     for(let i = 0; i < list.length; i++){
         if(callback(list[i])){
             arr.push(list[i]);
         }
     }
     return arr;
   },
   reject: function(list, callback) {
     var arr = [];
     for(let i = 0; i < list.length; i++){
         if(!callback(list[i])){
             arr.push(list[i]);
         }
     }
     return arr;
   }
 }

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
var output = _.reduce([1,2,3,4,5,6], function(memo, num){return memo + num; }, 0);
console.log(evens);
console.log(output);
