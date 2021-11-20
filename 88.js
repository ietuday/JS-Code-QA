function sum(num1, num2 = num1) {
    console.log(num1 + num2);
  }
  
 const result = sum(10); // 20
 console.log(result)
/**

You can set a default parameter's value equal to another parameter of the function, as long as they've been defined before the default parameter. We pass the value 10 to the sum function. If the sum function only receives 1 argument, it means that the value for num2 is not passed, and the value of num1 is equal to the passed value 10 in this case. The default value of num2 is the value of num1, which is 10. num1 + num2 returns 20.

If you're trying to set a default parameter's value equal to a parameter which is defined after (to the right), the parameter's value hasn't been initialized yet, which will throw an error.


 */