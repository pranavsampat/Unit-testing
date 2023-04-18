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
