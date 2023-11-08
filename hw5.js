// //1
//     function fun(a,b,c){
//     let res=(a-b)/c;
//         return res;
//     }
//     let a = 44;
//     let b = 20;
//     let c = 2;
//     let res=fun(a,b,c);
//     console.log(res);
// //2
//     function fun(a){
//         let square= a*a;
//         let cube =a*a*a;
//         return [square, cube];
//     }
//     let num= 3;
//     let res=fun(num);
//     console.log(res);
// //3
//     function min(a, b) {
//         return a < b ? a : b;
//     }
//     function max(a, b) {
//         return a > b ? a : b;
//     }
//     let a = 1;
//     let b = 2;
//     let minim = min(a, b);
//     let maxim= max(a, b);
//     console.log("Минимум: " + minim);
//     console.log("Максимум: " + maxim);
// //4
//     function arr() {
//         const start = parseInt(prompt("Введите начало диапазона:"));
//         const end = parseInt(prompt("Введите конец диапазона:"));
//         const res = [];
//         for (let i = start; i <= end; i++) {
//             res.push(i);
//         }
//         return res;
//     }
//     function printArr(arr) {
//         console.log("Созданный массив: " + arr.join(" "));
//         }
//     const Arr = arr();
//     printArr(Arr);
// //5
//     function isEven(a){
//         if(a% 2 === 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
//     console.log(isEven(3));
//     console.log(isEven(4));
// //6
//     function isEven(a){
//             if(a% 2 === 0){
//                 return true;
//             }else{
//                 return false;
//             }
//         }
//     function fun(arr){
//         let arr2 = [];
//         for (let i = 0; i < arr.length; i++) {
//             if(isEven(arr[i])){
//                 arr2.push(arr[i]);
//             }
//         }
//         return arr2;
//     }
//     let array=[1,2,3,4,5]
//     let res=fun(array);
//     console.log("Изначальный массив: "+ array);
//     console.log("Новый массив: "+ res);
// //7
//     function drawPyramid(rows, symbol = '*') {
//         for (let i = 1; i <= rows; i++) {
//             let row = '';
//             for (let j = 1; j <= i; j++) {
//                 row += symbol;
//             }
//             console.log(row);
//         }
//     }
//     console.log("Пирамида:");
//     drawPyramid(10);
// //9
//     function array(a) {
//         const arr = [0, 1];
//         let nextValue = 1;
//         while (nextValue <= a) {
//             nextValue = arr[arr.length - 1] + arr[arr.length - 2];
//             if (nextValue <= a) {
//                 arr.push(nextValue);
//             }
//         }
//         return arr;
//     }
//     const result = array(1000);
//     console.log("Ряд Фибоначи: "+result);
// //10
//     function sum(numb) {
//         let numberStr = numb.toString();
//         if (numberStr.length === 1) {
//             return numb;
//         }
//         let summa = 0;
//         for (let i = 0; i < numberStr.length; i++) {
//             summa += parseInt(numberStr[i]);
//         }
//         return sum(summa);
//     }
//     const numb = 134;
//     const result = sum(numb);
//     console.log(result); 
// //11
//     function Arr(arr, index) {
//         if (index < arr.length) {
//             console.log(arr[index]);
//             Arr(arr, index + 1);
//         }
//     }
//     let arr = [40, 25, 13, 46, 48];
//     Arr(arr, 0);
// //13
//     function isValidEmail(email) {
//         const parts = email.split('@');
//         if (parts.length !== 2) {
//             return false;
//         }
//         const name = parts[0];
//         if (name.length < 3) {
//             return false;
//         }
//         if (name[0] === '.') {
//             return false;
//         }
//         if (name[name.length - 1] === '.') {
//             return false;
//         }
//         if (name.includes('..')) {
//             return false;
//         }
//         if (/[^a-zA-Z0-9._-]/.test(name)) { // Проверка, что имя не содержит специальные символы кроме точки, знака подчеркивания и дефиса
//             return false;
//         }
//         const domain = parts[1];
//         if (domain.length < 4 || domain.length > 13) {
//             return false;
//         }
//         if (domain[0] === '.') {
//             return false;
//         }
//         if (domain[domain.length - 1] === '.') {
//             return false;
//         }
//         if (domain.includes('..')) {
//             return false;
//         }
//         if (/[^a-zA-Z0-9._-]/.test(domain)) {
//             return false;
//         }

//         return true;
//     }
//     let email = "examp*$le.email@gmail.com";
//     let isEmailValid = isValidEmail(email);
//     console.log(isEmailValid);