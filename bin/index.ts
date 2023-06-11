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
rlInterface.question(`What is the bill amount?`, (answer) => {
  billAmount = Number(parseFloat(answer).toFixed(2));
  rlInterface.question(`What is the tip rate?"`, (answer) => {
    tipRate = parseInt(answer);
    tip = (billAmount * tipRate)/100;
    total = billAmount + tip
    console.log(`Tip: ${tip}`);
    console.log(`Total: ${total}`);
    rlInterface.close();
  })
})


