function fib(){
    var num = 0;
    var num2 = 1;
    function nacci(){
        result = num + num2;
        num2 = num;
        num = result;
        console.log(result);
    }
    return nacci;
}

var fibonacci = fib();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
