// function getName(name) {
    // const hasName = //
  
// }

/**
 way to set hasName equal to true, provided you cannot pass true as an argument?

 !!name

 With !!name, we determine whether the value of name is truthy or falsy. If name is truthy, which we want to test for, !name returns false. !false (which is what !!name practically is) returns true.

By setting hasName equal to name, you set hasName equal to whatever value you passed to the getName function, not the boolean value true.

new Boolean(true) returns an object wrapper, not the boolean value itself.

name.length returns the length of the passed argument, not whether it's true.

 */