const prompt=require("prompt-sync")();
class fraction{
  constructor(num,den){
    this.num=num;
    this.den=den;
  };
}
function find_HCF(a,b){
  let HCF=1;
  for(let i=1;i<=a.den && i<=b.den ; i++){
    if( a.den%i==0 && b.den%i==0){
      HCF=i;
    } 
  }
  return HCF;
}
function input_fraction(){
   let num=parseFloat(prompt("enter numerator "));
   let den=parseFloat(prompt("enter denominator "));
    return new fraction(num,den);
  }
function  add_fraction(fract1,fract2,HCF){
    let result=new fraction;
    result.num=(fract1.num*fract2.den + fract2.num*fract1.den)/HCF;
    result.den=(fract1.den*fract2.den)/HCF;
    return result;
  }
function output(fract1,fract2,result){
  console.log(`the resultant fraction of ${fract1.num}/${fract1.den} + ${fract2.num}/${fract2.den} is ${result.num}/${result.den}`);
}
function main(){
  let fract1=input_fraction();
  let fract2=input_fraction();
  let hcf=find_HCF(fract1,fract2);
  fract3=add_fraction(fract1,fract2,hcf);
  output(fract1,fract2,fract3);
}
main();


//multiplication of 2 fractions

const prompt = require("prompt-sync")();

class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  multiply(otherFraction) {
    let numerator = this.numerator * otherFraction.numerator;
    let denominator = this.denominator * otherFraction.denominator;
    return new Fraction(numerator, denominator);
  }

  display() {
    console.log(`The result is ${this.numerator}/${this.denominator}`);
  }
}

let fraction1 = new Fraction(parseFloat(prompt("Enter the first numerator:")), parseFloat(prompt("Enter the first denominator:")));
let fraction2 = new Fraction(parseFloat(prompt("Enter the second numerator:")), parseFloat(prompt("Enter the second denominator:")));
let result = fraction1.multiply(fraction2);
result.display();

// division of 2 fractions

function divideFractions(numerator1, denominator1, numerator2, denominator2) {
    // Check for invalid inputs
    if (denominator1 === 0 || denominator2 === 0) {
      return "Invalid input. Denominator cannot be zero.";
    }
  
    // Divide the fractions
    const numerator = numerator1 * denominator2;
    const denominator = denominator1 * numerator2;
  
    // Simplify the result if possible
    const gcd = findGCD(numerator, denominator);
    const simplifiedNumerator = numerator / gcd;
    const simplifiedDenominator = denominator / gcd;
  
    return `${simplifiedNumerator}/${simplifiedDenominator}`;
  }
  
  // Helper function to find the greatest common divisor
  function findGCD(a, b) {
    if (b === 0) {
      return a;
    } else {
      return findGCD(b, a % b);
    }
  }
  
  // Example usage
  console.log(divideFractions(3, 4, 1, 2)); // Output: 3/2
  console.log(divideFractions(2, 5, 3, 4)); // Output: 8/15

  // substraction of 2 fractions 

const prompt = require("prompt-sync")();

class fraction{
  constructor(num,den){
    this.num;
    this.den;
  };
}

function subtractFractions(num1, den1, num2, den2) {
    let commonDenominator = den1 * den2;
    let newNum1 = num1 * den2;
    let newNum2 = num2 * den1;
    let numerator = newNum1 - newNum2;
    let denominator = commonDenominator;
    return simplifyFraction(numerator, denominator);
  }
  
  function simplifyFraction(num, den) {
    let gcd = findGCD(num, den);
    return [num / gcd, den / gcd];
  }
  
  function findGCD(a, b) {
    if (b === 0) {
      return a;
    }
    return findGCD(b, a % b);
  }
  
  let num1 = parseFloat(prompt("Enter the first numerator:"));
  let den1 = parseFloat(prompt("Enter the first denominator:"));
  let num2 = parseFloat(prompt("Enter the second numerator:"));
  let den2 = parseFloat(prompt("Enter the second denominator:"));
  
  let result = subtractFractions(num1, den1, num2, den2);
  alert(`The result is ${result[0]}/${result[1]}`);
