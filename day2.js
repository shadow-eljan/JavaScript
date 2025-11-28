// let numbers = [1,2,3,4,'eljan', 'rai', true, false, null]

// numbers.push(11)             //ADD
// numbers.push(true)
// numbers.pop()                //REMOVE FROM BACK
// numbers.shift()              //REMOVE FROM FRONT
// numbers.unshift(10)          //ADD FROM FRONT


// console.log(numbers.slice(1,4))              //SLICE DOESN'T MODIFY ORIGINAL ARRAY
// numbers.splice(2, 1, 0)                      //SPLICE(INDEX TO EDIT, HOW MANY ELEMENT TO REMOVE, REPLACE WITH)
// console.log(numbers.indexOf(true))
// console.log(numbers.lastIndexOf(true))
// console.log(numbers)
// console.log(numbers.includes(null))
// console.log(numbers.join(" , "));

// let a = "1,2,3,4,5"
// console.log(a.split(","))

// email ="eljan@gmail.com"
// part = email.split("@")
// let username = part[0]
// let domain = part[1].split(".")
// let rem = domain[1]
// console.log("Name: ", username)
// console.log("Domain: ", domain[0])
// console.log("Rem: ", rem)

// let number = [1,2,3,4,5]
// let doublenumbers = number.map((num) => num * 2);        //creates new array
// console.log(doublenumbers)

// let evenNumbers = number.filter((n) => n % 2 == 0);
// console.log(evenNumbers);

// let sum = number.reduce((acc, n) => acc + n, 5);    //ACCUMULATOR (acc) initial is 0, 
//                                                   //value after comma(,) is initial value
// console.log(sum);   

// number.forEach((num) => console.log(num))           //forEach == loop

// let newNumbers =[...number, 6,7,8];                    //SPREAD OPERATOR
// console.log(newNumbers);

// let colors = [12, 15, 20]
// let red = colors[0]
// let blue = colors[1]
// let green = colors[2]

// let [red, blue, green] = colors;
// console.log(red)
// console.log(blue)
// console.log(green)

//OBJECT 
let user ={
    username: "John doe",
    email: "doe@gmail.com",
    password: "12345",
};
// console.log(user.username);
// console.log(user);

// let key = "email";
// console.log(user[key]);
// let newUser = {...user, age: 12, isVerified: true}
// console.log(newUser);

// let {email, password} = user;
// console.log(email, password);