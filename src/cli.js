import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

export default () => {
    console.log('Welcome to the Brain Games!');
    rl.question('May I have your name?\n', (name) => {
        console.log(`Hello, ${name}!`);
    })  
};