function sayHi() {
    return (() => 0)();
  }
  
  console.log(typeof sayHi()); // number

/**

The sayHi function returns the returned value of the immediately invoked function expression (IIFE). This function returned 0, which is type "number".

FYI: there are only 7 built-in types: null, undefined, boolean, number, string, object, and symbol. "function" is not a type, since functions are objects, it's of type "object".

  */