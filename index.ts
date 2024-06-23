#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; //dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
); if(pinAnswer.pin === myPin){
    console.log("your pin is correct");

    let operationsAns = await inquirer.prompt([{
        name: "operations",
        message: "please select options",
        type: "list",
        choices:[ "withdraw" , "fastcash" , "checkbalance"],
    }]);

    // if user select withdraw
    if(operationsAns.operations === "withdraw"){
        let amountAns = await inquirer.prompt([{
            name: "amount",
            message: " enter your amount",
            type: "number"
        }])
        if(amountAns.amount <= myBalance){
            let balance = myBalance - amountAns.amount;
            console.log(`the remaining balance is ${balance}`)
        }else{
            console.log(` you have insuffient balance`);
        }
    }
    // if user select fast cash
    else if(operationsAns.operations === "fastcash"){
        let fastcashAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "list",
                    choices: ["1000" , "3000", "5000" , "10000" , "15000"]
                }
            ]
        );
        if(fastcashAns.amount <= myBalance){
            let balance2 = myBalance - fastcashAns.amount;
            console.log(`your balance is ${balance2}`);

        }else {
            console.log(`you have insufficient amount`)
        }
    }else if(operationsAns.operations === "checkbalance"){
        console.log(myBalance);
    }

}else{
    console.log("your pin is wrong");
}

