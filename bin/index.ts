#!/usr/bin/env node

// import minimist from 'minimist';

import ReadLine from 'readline';
const rlInterface = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout
});
let billAmount: number;
let tipRate: number;
let tip: number;
let total: number
const billAmountQuestion = 'What is the bill amount?'
const tipAmountQuestion = `What is the tip rate?"`
const validNumberText="amount you enter is not a valid number"



askForBillAmount()



function askForBillAmount() {
  rlInterface.question(billAmountQuestion, (answer) => {
    billAmount = Number(parseFloat(answer).toFixed(2));
    if (isValid(billAmount)) {
      askForTipAmount()
    } else {
      console.log(validNumberText);
      askForBillAmount()
    }

  })
}

function askForTipAmount() {
  rlInterface.question(tipAmountQuestion, (answer) => {
    tipRate = parseInt(answer);
    if (isValid(tipRate)) {
      tip = (billAmount * tipRate) / 100;
      total = billAmount + tip
      console.log(`Tip: ${tip}`);
      console.log(`Total: ${total}`);
      rlInterface.close();
    } else {
      console.log(validNumberText);
      askForTipAmount()
    }
  })
}






function isValid(billAmount: number): boolean {
  return !Number.isNaN(billAmount) && billAmount >= 0;
}

