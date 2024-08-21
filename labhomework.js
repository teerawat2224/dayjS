// class User {
//   constructor(name) {
//     this.name = name; // Initialize the name property
//   }
//   sayHi() { // Define the method inside the class
//     console.log(this.name);
//   }
// }
// let user = new User('Plang');
// user.sayHi(); // This will print "Plang"


// class User {
//   constructor(_name) {
//     this._name = _name; // Store the name as _name
//   }

//   sayHi() {
//     console.log(`Hello ${this._name}`); // Use _name to access the stored name
//   }
// }

// let user = new User('TAM');
// user.sayHi(); // This will print "Hello TAM"

// let user2 = new User('plagn');
// user2.sayHi(); // This will print "Hello plagn"


// class User{
//   login(){
//     console.log('User login');
//   }
// }


// let user = new User()
//


// class Admin extends User {
//   updatePrice() {
//     console.log('Admin update price'); // Properly close the string
//   }
// }
// // Example usage
// let admin = new Admin('AdminUser');
// admin.sayHi(); // This will print "Hello AdminUser"
// admin.updatePrice(); // This will print "Admin update price"

// class User {
//   login() {
//     console.log('user login');
//   }
// }

// class Admin extends User {
//   login() {
//     console.log('admin login........');
//   }
// }

// const admin = new Admin();
// admin.login(); // Logs "admin login" 

// class User {
//   login() {
//     console.log('user login');
//   }
// }

// class Admin extends User {
//   constructor() {
//     super(); // Calls the constructor of the parent class (User)
//   }
// }

// const admin = new Admin();
// admin.login(); // This will print "user login"

// class Calculator {
//   constructor(_init = 0) {
//     this.value = _init;
//   }

//   add(num) {
//     this.value += num;
//     return this; // Return 'this' to allow method chaining
//   }

//   show() {
//     console.log(`Value = ${this.value}`); // Log the current value
//     return this; // Return 'this' to allow chaining if needed
//   }
// }

// let reule = new Calculator(10);
// reule.show(); // Logs "Value = 10"

// // Chain the methods:
// reule.add(5).show(); // Adds 5 and logs "Value = 15"

// // Corrected line:
// console.log(reule.add(50)); // Adds 50, logs the updated 'Calculator' object


// Define the Sale class
// class Sale {
//   constructor(name, amount, price) {
//     this.name = name;   // Name of the item
//     this.amount = amount; // Quantity of the item
//     this.price = price;  // Price per unit
//   }

//   // Method to calculate the total price
//   calcPrice() {
//     return this.amount * this.price;
//   }
// }

// // Define the Beverage class that inherits from Sale
// class Beverage extends Sale {
//   // Inherits properties and methods from Sale
// }

// // Create an instance of Beverage
// let beverage = new Beverage("Pepsi", 5, 20);

// // Calculate the total price and log the result
// console.log(beverage.calcPrice()); // This will output 57

// class Sale {
//   constructor(_name, _amount, _price) {
//     this.name = _name;
//     this.amount = _amount;
//     this.price = _price;
//   }

//   calcPrice() {
//     return this.amount * this.price;
//   }
// }

// class Beverage extends Sale {
//   // No additional properties or methods needed for now
// }

// let result = new Beverage('Pepsi', 5, 20);

// console.log(result.calcPrice()); // This will output 100

// let arr = [1, 2, 3, 4]
// let obj = {
//   name: 'plang'
// }

// console.log(Array.isArray(arr))
// console.log(Array.isArray(obj))

// function isArray(input) {
//   return input instanceof Array;
// }
// let arr1 = [1,2,3,4,5,6] 
// let arr2 = {
//   name: 'plang'
// }
// console.log(Array.isArray(arr1));
// console.log(Array.isArray(arr2));

// let user = {
//   name: 'john',
//   age: 27
// };
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let salaryArray = Object.values(salaries);

// console.log(salaryArray); // [100, 160, 130]


// let salaries

// let func = (...rest)=>{
// console.log([0])
// console.log([1])
// console.log([2])
// console.log([3])
// }

// func('tam',3,4,5,6,7)




// function sum(...args){
//   let result = 0
//   for (let arg of args){
//     console.log(arg)
//   }
// }

// sum(1,2,3,4,5,6)



// let showName = (fname, lname,...titles) =>
// console.log(fname+''+lname)
// console.log(titles[0])
// console.log

//  let arr = [4,5,11]

//  console.log(Math.max(3,4,5,6,7,8,9,0))

// lab4
// let num1 = [1, 2, 3, 4];
// let num2 = [8, 3, 8, 1];

// let num3 = [5, ...num1, -6, -1, ...num2];
// console.log(num3); 

// // Calculate the sum of all elements
// let sum = num3.reduce((prev, curr) => prev + curr, 0);
// console.log(sum); 

// let arr = ['john','Doe'];
// let [firstName, surname] = arr;
// console.log(firstName);
// console.log(surname);
// console.log(arr);

// let arr = ['teerawat','boonpoom', 27 , 'male','Thai']
// let [firstName,,age,country] =arr
// console.log(firstName);
// console.log(age);
// console.log(arr);
// let arr = ['teerawat','boonpoom', 27 , 'male','Thai']
// let [firstName,,age,country,...rest] =arr
// console.log(firstName);
// console.log(age);
// console.log(arr);

// let [name = 'Guest', surname = 'Anonymous'] = ['John'];

// console.log(name); 
// console.log(surname);

// let user = {
//   username: 'teerawat',
//   email: 'teerawat2224',
//   password: '123456'
// };
// let {username, email ,password} = user;
// console.log(username);
// console.log(email);
// console.log(password);

// let user = {
//   username: 'John',
//   email: 'john@gmail.com',
//   password: '123456'
// };

// // Destructuring assignment
// let { username, ...rest } = user;

// console.log(username); // John
// console.log(rest);     // { email: 'john@gmail.com', password: '123456' 

// let options = {
//   size:{
//     width:100,
//     height:200
//   },
//   items:['Cake','Donut'],
//   extra: true
// };

// function showName(user) {
//   console.log(`${user.firstName} ${user.lastName}`);
// }

// showName({ firstName: 'John', lastName: 'Doe' }); // John Doe


// function showName({ firstName, lastName }) {
//   console.log(`${firstName} ${lastName}`);
// }

// showName({ firstName: 'John', lastName: 'Doe' }); // John Doe



// Function definition
// let showName = (obj) => {
//   console.log(obj.firstName);
// };

// // Object definition
// let obj = {
//   firstName: 'Teerawat',
//   lastName: 'Doe' // You can add a value for lastName if needed
// };

// // Function call
// showName(obj); // Phongphat

// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];

// console.log(first);  // Maya
// console.log(second); // Marisa
// console.log(third);  // Chi

// function mergeObj(...objs) {
//   let merged = {};

//   // ใช้ forEach เพื่อรวมอ็อบเจ็กต์ทุกตัว
//   objs.forEach(obj => {
//     Object.assign(merged, obj);
//   });

//   return merged;
// }
// let obj1 = {
//   fname: 'phongpaht',
//   lname: 'japhichom'
// };

// let obj2 = {
//   nickName: 'tam'
// };

// // เรียกใช้ฟังก์ชัน mergeObj และรวม obj1 และ obj2
// let result = mergeObj(obj1, obj2);
// console.log('Lab 3');
// console.log(result);


// lab1
// let calMulti = (...nums) => {
//   let product = 1; 

//   for (let num of nums) {
//     console.log(num);  
//     product *= num;   
//   }

//   return product;  
// };


// let result = calMulti(1, 2, 3, 4, 5);

// console.log('--------- Lab 1');
// console.log(result);  


// Lab 2

// let filterOdds = (...nums) => {
//   let even = nums.filter((item) => {
//     console.log(item);  
//     return item % 2 === 0;  
//   });

//   return even;  
// };

// let result = filterOdds(1, 2, 3, 4, 5, 6, 7, 8);

// console.log('- Lab 2 --');
// console.log(result); 

// lab3

// let mergeObj = (...objs) => {
//   let merged = {};  

//   for (let i = 0; i < objs.length; i++) {
//     Object.assign(merged, objs[i]);  
//   }
//   return merged;  
// };
// let obj1 = {
//   fname: 'teerawat',
//   lname: 'boonpoom'
// };
// let obj2 = {
//   nickName: 'plang'
// };
// let result = mergeObj(obj1, obj2);
// console.log('------- Lab 3');
// console.log(result);  

// lab4
// const nums1 = [1, 2, 3, 4];
// const nums2 = [8, 3, 8, 1];


// let combinedArray = [5, ...nums1, 6, -1, ...nums2];


// let sum = combinedArray.reduce((total, num) => total + num, 0);

// console.log('Combined Array:', combinedArray);
// console.log('Sum of all elements:', sum);



// Lab 5
// let editArr = (arr) => {
//   let newArr = [...arr];
//   if (newArr.length > 3) {
//     newArr[3] = newArr[3] ** 2;
//   }
//   return newArr;
// };
// let arr = [2, 3, 4, 5, 6];
// let result = editArr(arr);
// console.log('Original array:', arr);
// console.log('Modified array:', result);

// Lab 6
// let handlePerson = (firstName, lastName, ...hobbies) => {
//   return {
//     firstName,
//     lastName,
//     hobbies,
//     numberOfHobbies: hobbies.length
//   };
// };
// let result = handlePerson('palng', 'Teo', 'Sleeep', 'Playgame', 'Cooking');

// console.log(result);

// lab7let
// แล็ป 7
// จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array
// และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น
// Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง
// doubleAndReturnArgs([1, 2, 3], 4, 4);
// // ผลลัพธ์ที่คาดหวัง: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4);
// // ผลลัพธ์ที่คาดหวัง: [2, 20, 8]

// let doubleArr = (arr, ...nums) => {
//   console.log(arr);  
//   console.log(nums); 
//   let doubledNums = nums.map(item => item * 2);
//   console.log(doubledNums); 
//   return arr.concat(doubledNums);
// };
// let result = doubleArr([1, 2, 3], 4, 4, 5, 6, 7);
// console.log(result); 


// lab7
// let cloneArray = (arr) => {
//   return [...arr];  
// };


// let originalArray = [1, 2, 3, 4, 5];
// let clonedArray = cloneArray(originalArray);
// console.log('Original Array:', originalArray); 
// console.log('Cloned Array:', clonedArray);     

// lab8

// let cloneArray = (arr) => {
//   return [...arr];  
// };

// // Example usage
// let originalArray = [1, 2, 3, 4, 5];
// let clonedArray = cloneArray(originalArray);

// console.log('Original Array:', originalArray); // [1, 2, 3, 4, 5]
// console.log('Cloned Array:', clonedArray);     // [1, 2, 3, 4, 5]

// lab9

// let cloneObject = (obj) => {
//   return { ...obj }; 
// };

// // Example usage
// let originalObject = { name: 'John', age: 30, job: 'Developer' };
// let clonedObject = cloneObject(originalObject);

// console.log('Original Object:', originalObject); 
// console.log('Cloned Object:', clonedObject);     

// lab10
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];

// console.log(first);  
// console.log(second); 
// console.log(third);  


// lab11
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'Whiskers on kittens',
//   'Bright copper kettles',
//   'Warm woolen mittens'
// ];

// console.log(raindrops);  
// console.log(whiskers);   
// console.log(aFewOfMyFavoriteThings);  



// lab12
// let numbers = [10, 20, 30];

// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];

// console.log(numbers); 


// lab13
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };

// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); 
// console.log(yearNeptuneDiscovered); 


// lab14
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659 
// };

// let { numPlanets, discoveryYears } = planetFacts; 

// console.log(discoveryYears); 

// lab15
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // *
// console.log(getUserData({ firstName: 'Melissa' })); // **
// console.log(getUserData({})); // ***

// lab16
// let guest = 'Jane';
// let admin = 'Pete';
// [guest, admin] = [admin, guest];
// console.log(guest); // Pete
// console.log(admin); // Jane


// lab17
// function checkAge({ firstName, lastName, age }) {
//   if (age > 18) {
//     console.log(`Greeting ${firstName} ${lastName}`);
//   } else {
//     console.log(`${firstName} ${lastName} does not have access rights`);
//   }
// }
// const user1 = { firstName: 'John', lastName: 'Doe', age: 20 };
// const user2 = { firstName: 'Jane', lastName: 'Smith', age: 17 };
// checkAge(user1); 
// checkAge(user2); 

// lab18
// let user = { name: 'John', years: 27 };


// let { name, years: age, isAdmin = false } = user;

// console.log(name);   
// console.log(age);    
// console.log(isAdmin); 

// lab19
// let arr = [1, [2, [[[3, 4], 5], 6]]];


// let [a, [b, [[[c, d], e], f]]] = arr;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3
// console.log(d); // 4
// console.log(e); // 5
// console.log(f); // 6

// lab20
// const obj = { prop: 5, prop2: 10 };

// const { prop: a, prop2: b } = obj;

// console.log(a); 
// console.log(b); 


// lab21
// let a, b;


// ({ a, b } = { a: 1, b: 2 });

// console.log(a); // 1
// console.log(b); // 2

// lab22
// const [, a, b] = [1, 2, 3];

// console.log(a); // 2
// console.log(b); // 3
// lab23
// const q = { prop: 5, prop2: [10, 100] };
// const { prop: x, prop2: [, y] } = q;
// console.log(x); // 5
// console.log(y); // 100

// lab23
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };
// const { prop: x, prop2: { prop2: { nested: [, y] } } } = q;
// console.log(x); 
// console.log(y); 

// lab24
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];
// for (const { firstName, lastName } of names) {
//   console.log(`${firstName} ${lastName}`);
// }

// lab25
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (const { user, age = 'unknown' } of users) {
//   console.log(`${user} ${age}`);
// }

// lab26