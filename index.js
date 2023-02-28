const { querystring } = require("utiller");

console.log(querystring.decode("first_name=Youssef&age=14"));
console.log(querystring.decode("first_name=Youssef&age=14", { camelCase: false }));
console.log(querystring.decode("first_name:Youssef,age:14", { camelCase: false, equalOperator: ":", separator: "," }));
console.log(querystring.decode("first_name=Youssef,age=14", { camelCase: false, equalOperator: ":", separator: "," }));