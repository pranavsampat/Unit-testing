const prompt=require("prompt-sync")();
class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  add(fraction) {
    const lcm = this.getLCM(this.denominator, fraction.denominator);
    const numerator = this.numerator * (lcm / this.denominator) + fraction.numerator * (lcm / fraction.denominator);
    return new Fraction(numerator, lcm);
  }
  
  subtract(fraction) {
    const lcm = this.getLCM(this.denominator, fraction.denominator);
    const numerator = this.numerator * (lcm / this.denominator) - fraction.numerator * (lcm / fraction.denominator);
    return new Fraction(numerator, lcm);
  }
  
  compare(fraction) {
    const lhs = this.numerator / this.denominator;
    const rhs = fraction.numerator / fraction.denominator;
    if (lhs < rhs) {
      return -1;
    } else if (lhs > rhs) {
      return 1;
    } else {
      return 0;
    }
    
  }
  
  divide(fraction) {
    const numerator = this.numerator * fraction.denominator;
    const denominator = this.denominator * fraction.numerator;
    return new Fraction(numerator, denominator);
  }
  getLCM(a, b) {
    return (a * b) / this.getGCD(a, b);
  }

  getGCD(a, b) {
    return b === 0 ? a : this.getGCD(b, a % b);
  }
}

const fraction1Numerator = parseInt(prompt("Enter numerator for fraction1:"));
const fraction1Denominator = parseInt(prompt("Enter denominator for fraction1:"));
const fraction1 = new Fraction(fraction1Numerator, fraction1Denominator);

const fraction2Numerator = parseInt(prompt("Enter numerator for fraction2:"));
const fraction2Denominator = parseInt(prompt("Enter denominator for fraction2:"));
const fraction2 = new Fraction(fraction2Numerator, fraction2Denominator);

console.log("Addition:", fraction1.add(fraction2));
console.log("Subtraction:", fraction1.subtract(fraction2));
console.log("Multiplication:", fraction1.multiply(fraction2));
console.log("Comparison:", fraction1.compare(fraction2));
console.log("Division:", fraction1.divide(fraction2));
