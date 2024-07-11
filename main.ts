import inquirer from "inquirer"
import chalk from "chalk"
import { differenceInSeconds } from "date-fns"


console.log(chalk.bold.blue("\n\t\t===={ wellcome in MURTAZA ALI countdown function\n"));



let user = await inquirer.prompt([
    {
        name:"input",
        message:chalk.green("enter the amount of second"),
        type:"number",
        validate:(input)=>{
          if(isNaN(input)){
            return "please enter a valid number"
            
          }
           else if(input >60 ){
            return "Second must be in 60"
            
          } 
           else{
            return true
          }
        }
    }
])
let input = user.input

function timer(value:number){
    let current_Time= new Date().setSeconds(new Date ().getSeconds() + value)
    let iniTime = new Date(current_Time)
   setInterval(()=>{
    let currentTime = new Date()
    let timedff = differenceInSeconds(iniTime,currentTime)
    if(timedff <= 0){
        console.log(chalk.bold.red("your timer has been expired"));
        process.exit()
     } 
      let min = Math.floor((timedff%(3600*24))/3600)     
      let sec =Math.floor(timedff % 60)
      console.log(chalk.yellow(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`));
      
    },1000)
}

timer(input)
















