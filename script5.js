//--High Order Function & CallBack--

//--High Order Function means function inside function as Argument

function add(a, b, cb) {
    let result = a +b;
    cb(result)
}

function showResult(val) {
    console.log("Hello i am cb" , val)
}

add(2,5, showResult)