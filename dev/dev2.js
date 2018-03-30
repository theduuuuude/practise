var input = 'hoi'
let reg = /.{1,2}/g


console.log(input.match(/.{1,2}/g))


let r = "123456789".match(/.{1,2}/g);
console.log(r)
// // Results in:
// ["12", "34", "56", "78", "9"]