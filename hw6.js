// //1
    // let str = 'aaa@bbb@ccc';
    // let str2 = str.replace(/@/g, '!');
    // console.log(str2);
// //2
//     let date = '2025-12-31';
//     const data_new= date.replace(/(2025)(-)(12)(-)(31)/, '$5/$3/$1');
//     console.log(data_new);
// // 3.1
//     let str="Я учу javascript!";
//     console.log(str.substr(2, 3));
//     console.log(str.substr(6, 10));
// //3.2
//     let str="Я учу javascript!";
//     console.log(str.substring(2, 5));
//     console.log(str.substring(6, 16));
//3.3
//     let str="Я учу javascript!";
//     console.log(str.slice(2, 5));
//     console.log(str.slice(6, 16));
// //4
//     let arr=[4, 2, 5, 19, 13, 0, 10]
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         arr[i]=Math.pow(arr[i],3);
//         sum+=arr[i];
//     }
//     let res=Math.sqrt(sum);
//     console.log(res);
// //5
//     function fun(a,b){
//         let c=a-b;
//         if(c<0){
//             c=Math.abs(c);
//         }
//         console.log(c);
//     }
//     fun(3,5);
//     fun(6,1);
// //7
//     let str = 'aa aba abba abbba abca abea';
//     console.log (str.match(/ab+a/g));
// //8
//     function fun(phone) {
//         const regex = /^\+\d{1,3} \d{1,4} \d{6,}$/;
//         return regex.test(phone);
//     }
//     const phone1 = '+1 123 4567890';
//     console.log(fun(phone1)); // true
//     const phone2 = '+123 45 6';
//     console.log(fun(phone2)); // false
// //9
//     function fun(email) {
//         const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,11}$/;
//         return regex.test(email);
//     }
//     console.log(fun("vlad.koll@gmail.com")); // true
//     console.log(fun("bfji-kn@@example.com")); // false
// //10
//     function parseURL(url) {
//         const domain_regex = /(https?:\/\/[^/?#]+)/; 
//         const path_regex = /\/[^?#]*/; 
//         const param_regex = /\?[^#]*/;
//         const hash_regex = /#(.*)/;
        
//         const domain = url.match(domain_regex);
//         const path = url.match(path_regex);
//         const param = url.match(param_regex);
//         const hash = url.match(hash_regex);
//         return [domain ? domain[0] : '', path ? path[0] : '', param ? param[0] : '', hash ? hash[1] : ''];
//     }
//     const txt = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';
//     const prim = parseURL(txt);
//     console.log(prim);