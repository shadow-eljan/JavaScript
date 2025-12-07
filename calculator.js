function add(num1, num2){
    console.log(num1 + num2);
}

function minus(num1, num2){
    console.log(num1 - num2)
}

//module.exorts = add;
//module.exports = sub;

exports.sum = add;
exports.sub = minus;
