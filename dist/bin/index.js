#!/usr/bin/env node
"use strict";
// import minimist from 'minimist';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const rlInterface = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
let billAmount;
let tipRate;
let tip;
let total;
const billAmountQuestion = 'What is the bill amount?';
const tipAmountQuestion = `What is the tip rate?"`;
const validNumberText = "amount you enter is not a valid number";
askForBillAmount();
function askForBillAmount() {
    rlInterface.question(billAmountQuestion, (answer) => {
        billAmount = Number(parseFloat(answer).toFixed(2));
        if (isValid(billAmount)) {
            askForTipAmount();
        }
        else {
            console.log(validNumberText);
            askForBillAmount();
        }
    });
}
function askForTipAmount() {
    rlInterface.question(tipAmountQuestion, (answer) => {
        tipRate = parseInt(answer);
        if (isValid(tipRate)) {
            tip = (billAmount * tipRate) / 100;
            total = billAmount + tip;
            console.log(`Tip: ${tip}`);
            console.log(`Total: ${total}`);
            rlInterface.close();
        }
        else {
            console.log(validNumberText);
            askForTipAmount();
        }
    });
}
function isValid(billAmount) {
    return !Number.isNaN(billAmount) && billAmount >= 0;
}
