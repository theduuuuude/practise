// // let myItem = localStorage.getItem('myItem')
// // console.log(myItem)

// let x = "123456789".match(/.{1,2}/g);
// // Results in:
// console.log(x)

import fs from 'fs'

fs.readFile('data.json',(err,data)=>{
    data = JSON.parse(data)
    data = data.result.equities[0]
    data = data.getTiePercentage()
    console.log(data)
})