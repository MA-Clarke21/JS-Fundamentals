// 3-value_argument.js
const args = process.argv[2];
if (args === undefined) {
    console.log("No argument");
} else {
    console.log(args);    
}