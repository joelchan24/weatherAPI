
const argv = require('yargs').options({
    address:{
        alias:'d',
        desc:'address of the city to get the weather',
        demand:true
    }
}).argv;


console.log(argv.address);