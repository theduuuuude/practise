import fs from 'fs'
import _ from 'lodash'
const storage = {
    get(key){
        fs.readFile('data.json',(err,data)=>{
            data = JSON.parse(data)
            return data[key]
        })
    },
    set(key,result){
        fs.readFile('data.json',(err,data)=>{
            data = JSON.parse(data)
            data = JSON.parse(data)
            console.log(
                'result',result,
                'data',data
            )
            console.log(`setting key ${key} and result ${result}`)
            data[key] = result
            data = _.uniq(data)
            console.log(data)
            fs.writeFile('data.json',JSON.stringify(JSON.stringify(data)),err=>console.error)
        })
    }
        
}



export default storage