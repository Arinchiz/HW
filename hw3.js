   // //1
    //     for (let i = 1; i <= 50; i++) {
    //         console.log(i);
    //     }
    //     for (let j = 35; j >= 8; j--) {
    //         console.log(j);
    //     }
    // //2
    //     let number = 89;
    //     while ( number>=11) {
    //          document.write(number);
    //          document.write("<br />");
    //          number--;
    //     }
    // //3
    //     let sum=0;
    //     for(let i=0; i<=100; i++){
    //          sum+=i;
    //     }     
    //     document.write(sum);
    // //4
    //     for(let i=1; i<=5; i++){
    //         let sum=0;
    //         for(let j=1; j<=i; j++){
    //             sum+=j;
    //         }
    //         console.log("В числе " + i + " сумма составляет " + sum);
    //     }     
    // //5 for
    //      for(let i=8; i<=56; i++){
    //          if(i % 2 === 0) {
    //             console.log(i);
    //          }   
    //       }
    // //5 while
    //      let i=8;
    //      while(i<=56){
    //          if(i % 2 === 0) {
    //          console.log(i);
    //          }   
    //      i++;    
    //      }
    // //6
    //     for (let i = 2; i <= 10; i++) {
    //         for (let j = 1; j <= 10; j++) {
    //             let result = i * j;
    //             console.log(i + "*" + j + " = " + result);
    //         }
    //     }
    // //7
    //     let n=1000;
    //     let flag=0;
    //     do{
    //         n=n/2
    //         flag++;
    //     }while(n>50);
    //     console.log(n);
    //     console.log("Количество итераций: " + flag);
    // //8
    // let sum = 0;
    // let flag = 0;
    // let n;
    // while ((n = prompt("Введите число (0 или пробел для завершения)")) != 0 && n != "") {
    //     let numb = parseFloat(n);
    //     if (!isNaN(numb)) {
    //         sum += numb;
    //         flag++; 
    //     } else {
    //         alert("Ошибка ввода. Введите число.");
    //     }
    // }
    // if (flag > 0) {
    //     let average = sum / flag;
    //     document.write("Общая сумма: " + sum+"<br>");
    //     document.write("Среднее арифметическое: " + average);
    // } else {
    //     alert("Вы не ввели ни одного числа.");
    // }
    // //9
    //     const str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
    //     const array = str.split(" "); 

    //     let smallest = Number(array[0]); 
    //     let largest = Number(array[0]);

    //     for (let i = 0; i < array.length; i++) {
    //     const number = Number(array[i]);

    //         if (!isNaN(number)) {
    //             if (number < smallest) {
    //             smallest = number; 
    //             }
    //             if (number > largest) {
    //             largest = number; 
    //             }
    //         }
    //     }
    //     console.log(str);
    //     console.log("Самое маленькое число: " + smallest);
    //     console.log("Самое большое число: " + largest);
    // //10
    //     n = prompt("Введите число:");
    //     let numb = parseFloat(n);
    //         if (isNaN(numb)) {
    //             alert("Ошибка ввода. Введите число.");
    //             n = prompt("Введите число:");
    //         } else {
   //               //а
    //             const arr = Array.from(n.toString()).map(Number);
    //             document.write("Цифры числа n:", arr);
    //             //b
    //             const amount = arr.length;
    //             document.write("<br/>Количество цифр в числе n:", amount);
    //             //c
    //             const sum = arr.reduce(function(sum, digit){return sum+digit}, 0);
    //             document.write("<br/>Сумма цифр числа n:", sum);
    //             // d
    //             const reverse = arr.reverse().join('');
    //             document.write("<br/>Число n с обратным порядком цифр:"+ reverse);
    //         }