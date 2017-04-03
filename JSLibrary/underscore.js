var _ = {
   map: function(list, iteratee) {
     var arr = [];
     for(let i = 0, i < list.length; i++){
         arr.push(iteratee(list[i]));
     }
     return arr;
   },
   reduce: function(list, iteratee, memo) {
     for(let i = 0; i < list.length; i++){
         iteratee(memo, list[i]);
     }
     return memo;
   },
   find: function(list, iteratee) {
     for(let i = 0; i < list.length; i++){
         if(iteratee(list[i])){
             return true;
         }
     }
     return undefined;
   },
   filter: function(list, iteratee) {
     var arr = [];
     for(let i = 0; i < list.length; i++){
         if(iteratee(list[i])){
             arr.push(list[i]);
         }
     }
     return arr;
   },
   reject: function(list, iteratee) {
     var arr = [];
     for(let i = 0; i < list.length; i++){
         if(!iteratee(list[i])){
             arr.push(list[i]);
         }
     }
     return arr;
   }
 }
