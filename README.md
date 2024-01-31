# FizzBuzz-flexible

This repository contains the source code for the `FizzBuzz-flexible`, an application built using TypeScript. 

## Features

- Get answer for numbers with default values
- Ability to write answer to a file
- Ability to use Fibonacci sequence instead of sequence of numbers from 1 to n
- Ability to add your own rules

## Getting Started

To get a local copy of repo and run the code follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/o-drozzdyk/FizzBuzz-flexible.git
   ```

2. Install NPM packages
   ```sh
   npm install
   ```

### Running the Application

To start the application, run the following command in your terminal:
   ```sh
   npm start
   ```

This will start the application, and you can view it's result in your terminal

## Notes

Default parameters for this application are console output, standard sequence of numbers from 1 to n and rules:

- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
- answer[i] == "Fizz" if i is divisible by 3.
- answer[i] == "Buzz" if i is divisible by 5.
- answer[i] == i if none of the above conditions are true.

### Parameters changing

If you want to change any params, you can pass it to generate method:  
  
  ```
  [objectName].generate({  
    n: [needed number],  
    sequence: []type of sequense],  // default is 'standard'. You can change it to 'fibonacci'  
    output: [output type],  // default is 'console'. You can change it to 'file'  
    rules: [needed rules]  // default rules are specified above. You can change it to any rules you want  
  });
  ```

- rule is a function that takes a number and returns string or null

## Contributing

Contributions to this project are welcome. Please open an issue or submit a pull request for any features, bug fixes, or enhancements.
