// //1
//     let arr=[1, 2, 3, 4, 5];
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// //2
//     let arr=[-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>-10 && arr[i]<-3){
//             console.log(arr[i]);
//         }
//     }
// //3
//     let arr = [];
//     for (let i = 23; i <= 57; i++) {
//         arr.push(i);
//     }
//     let result=0;
//     for(let i=0; i<arr.length; i++){
//         result+=arr[i];
//     }
//     let arr2=[];
//     let a=23;
//     while(a<=57){
//         arr2.push(a);
//         a++;
//     }
//     console.log("Массив, созданный с использованием цикла for: " + arr);
//     console.log("Массив, созданный с использованием цикла while: " +arr2);
//     console.log("Сумма: " + result);
// //4
//     let arr=["10", "20", "30", "50", "235", "3000"];
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//         let a = arr[i];
//         const b = a[0];
//         if (b === "1" || b === "2" || b === "5") {
//             arr2.push(a);
//         }
//     }
//     console.log("Результат: "+ arr2);
// //5
//     let arr=["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
//     for (let i = 0; i < arr.length; i++) {
//         let a = arr[i];
//         if(a === "Сб" || a === "Вс"){
//             document.write("<b>"+arr[i]+"  ");
//         }else{
//             document.write(arr[i]+"  ");
//         }
//     }
// //6
//     let arr=[11, 44, 88, 66];
//     arr.push(48);
//     let numb=arr[arr.length-1];
//     console.log(numb);
// //7
//     let arr = [];
//     let n = prompt("Введите число (пробел для завершения):");
//     let numb = parseFloat(n);
//     while (n !== " ") {
//         if (!isNaN(numb)) {
//             arr.push(numb);
//             n = prompt("Введите число (пробел для завершения):");
//             numb = parseFloat(n);
//         } else {
//             alert("Ошибка ввода. Введите число.");
//             n = prompt("Введите число:");
//             numb = parseFloat(n);
//         }
//     }
//     let arr2=arr.slice();
//     arr2.sort();
//     document.write("Исходный массив: "+ arr);
//     document.write("<br/>Отсортированный массив: "+ arr2);
// //8 reverse
//     let arr=[12, false, "Текст", 4, 2, -5, 0] ;
//     arr.reverse();
//     console.log(arr);
// //8 while
//     let arr=[12, false, "Текст", 4, 2, -5, 0];
//     const arr2 = [];
//     let i = arr.length - 1;
//     while (i >= 0) {
//         arr2.push(arr[i]);
//         i--;
//     }
//     console.log(arr);
//     console.log(arr2);
// //9
//     let arr=[5, 9, 21, , , 9, 78, , , , 6];
//     let flag=0;
//     for (let i = 0; i < arr.length; i++) {
//             let a = arr[i];
//             if(a === undefined){
//                 flag++;
//             }
//         }
//     console.log("Исходный массив: " + arr);
//     console.log("Количество нулевых строк: "+ flag);
// //10
//     let arr = [1,8,0,13,76,8,7,0,22,0,2,3,2];
//     let firstNull = arr.indexOf(0);
//     let secondNull = arr.lastIndexOf(0);
//     let sum = 0;
//     for (let i = firstNull; i <= secondNull; i++) {
//         sum += arr[i];
//     }
//     if (firstNull == -1 && secondNull == -1) sum = 0;
//     console.log(sum);