#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import minimist from 'minimist';
const readline_1 = __importDefault(require("readline"));
const rlInterface = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
let billAmount;
let tipRate;
let tip;
let total;
rlInterface.question(`What is the bill amount?`, (answer) => {
    billAmount = Number(parseFloat(answer).toFixed(2));
    rlInterface.question(`What is the tip rate?"`, (answer) => {
        tipRate = parseInt(answer);
        tip = (billAmount * tipRate) / 100;
        total = billAmount + tip;
        console.log(`Tip: ${tip}`);
        console.log(`Total: ${total}`);
        rlInterface.close();
    });
});
