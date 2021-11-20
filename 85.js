fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res));

/**
The result of the callback in the previous .then().
The value of res in the second .then is equal to the returned value of the previous .then. You can keep chaining .thens like this, where the value is passed to the next handler.


 */