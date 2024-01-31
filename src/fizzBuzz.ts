'use strict';

const fs = require('fs');

type Sequence = 'standard' | 'fibonacci';
type OutputType = 'console' | 'file';
type Rule = (n: number) => string | null;

interface FizzBuzzCharacteristics {
  n: number;
  sequence?: Sequence;
  output?: OutputType;
  rules?: Rule[];
}

class FizzBuzz {
  private sequence: Sequence;
  private output: OutputType;
  private numbers: number[];
  private rules: Rule[];

  static defaultRules: Rule[] = [
    (n) => n % 3 === 0 && n % 5 === 0 ? 'FizzBuzz' : null,
    (n) => n % 3 === 0 ? 'Fizz' : null,
    (n) => n % 5 === 0 ? 'Buzz' : null,
  ];

  constructor(characteristics: FizzBuzzCharacteristics) {
    const { 
      n, 
      sequence = 'standard', 
      output = 'console', 
      rules = FizzBuzz.defaultRules 
    } = characteristics;

    this.sequence = sequence;
    this.output = output;
    this.rules = rules;

    switch (this.sequence) {
      case 'fibonacci':
        this.numbers = this.generateFibonacci(n);
        break;
      default:
        this.numbers = Array(n).fill(null).map((_, index) => index + 1);
        break;
    }
  }

  generate(): string[] {
    const answer: string[] = [];

    for (const item of this.numbers) {
      let isRuleApplied = false;

      for (const rule of this.rules) {
        const currentResult = rule(item);
        if (currentResult) {
          answer.push(currentResult);
          isRuleApplied = true;
          break;
        }
      }

      if (!isRuleApplied) {
        answer.push(item.toString());
      }
    }

    switch (this.output) {
      case 'file':
        this.fileOutput(answer);
        break;
      default:
        this.consoleOutput(answer);
        break;
    }

    return answer;
  }

  private generateFibonacci(n: number): number[] {
    const sequence: number[] = [];

    function fib(num: number): number {
      if (num < 2) {
        return num;
      }

      return fib(num - 1) + fib(num - 2);
    }

    for (let i = 1; i <= n; i++) {
      sequence.push(fib(i));
    }

    return sequence;
  }

  private consoleOutput(array: string[]) {
    array.forEach(item => console.log(item));
  }

  private fileOutput(array: string[]) {
    try {
      fs.writeFileSync('output.txt', array.join('\n'), 'utf-8');
      console.log('Answer was written to output.txt file.');
    } catch (error) {
      console.error;
    }
  }
}

const myRules: Rule[] = [
  (n) => n % 3 === 0 || n % 5 === 0 ? 'FizzBuzz' : null,
];

const standardConsoleDefaultRules = new FizzBuzz({ n: 5 });
standardConsoleDefaultRules.generate();

const fibonacciConsoleDefaultRules = new FizzBuzz({ n: 5, sequence: 'fibonacci' });
// fibonacciConsoleDefaultRules.generate();

const standardFileDefaultRules = new FizzBuzz({ n: 5, output: 'file' });
// standardFileDefaultRules.generate();

const fibonacciFileDefaultRules = new FizzBuzz({ 
  n: 5, 
  sequence: 'fibonacci', 
  output: 'file' 
});
// fibonacciFileDefaultRules.generate();

const fibonacciFileMyRules = new FizzBuzz({ 
  n: 5, 
  sequence: 'fibonacci', 
  output: 'file', 
  rules: myRules
});
// fibonacciFileMyRules.generate();
