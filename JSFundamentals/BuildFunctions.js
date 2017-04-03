function runningLogger(){
    console.log("I am running!");
}

function multiplyByTen(num){
    return num * 10;
}
// console.log(multiplyByTen(5));

function stringReturnOne(){
    return "This is the first function!";
}

function stringReturnTwo(){
    return "This is the second function!";
}

function caller(arg){
    if(typeof(arg) == "function"){
        arg();
    }
}

function myDoubleConsoleLog(param1, param2){
    if((typeof(param1) == "function") && (typeof(param2) == "function")){
        console.log(param1);
        console.log(param2);
    }
}

function caller2(param){
    console.log("Starting");
    var x = setTimeout(function(){
        if(typeof(param) == "function"){
            param(stringReturnOne, stringReturnTwo);
        }
    }, 2000);
    console.log("Ending?");
    return "Interesting";
}

myDoubleConsoleLog(caller2(stringReturnTwo()), caller2(stringReturnOne()));
