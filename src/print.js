import chalk from 'chalk'
const print = input => {


    // console.log(input.split(/.{0}/g))
    let m = input.match(/.{1,2}/g).map(i=>{
        
        let parts = i.split(/.{0}/)
        // console.log(i,parts)
        switch(parts[1]){
            case 'h':
            
                return chalk.red(parts[0])
                break;
            case 'd':
                return chalk.blue(parts[0])
                break;
            case 'c':
                return chalk.green(parts[0])
                break;
            case 's':
                // return chalk.black(parts[0])
                return parts[0]
                break;
            default:
                return chalk.gray(parts[0])
        }
    })
    return m.join('')
}

export default print