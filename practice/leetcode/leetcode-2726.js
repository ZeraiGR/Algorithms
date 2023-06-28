// Calculator with Method Chaining
// https://leetcode.com/problems/calculator-with-method-chaining/

// Tags: Frontend (javaScript)

class Calculator {
  /** 
   * @param {number} value
   */
  constructor(value) {
    this.value = value;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value){
    this.value += value;
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value){
    this.value -= value;
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */  
  multiply(value) {
    this.value *= value;
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }

    this.value /= value;
    return this;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.value = Math.pow(this.value, value);
    return this;
  }
    
  /** 
   * @return {number}
   */
  getResult() {
    return this.value;
  }
}

const res = new Calculator(10).add(5).subtract(7).getResult();
console.log(res);
console.log(new Calculator(2).multiply(5).power(2).getResult());