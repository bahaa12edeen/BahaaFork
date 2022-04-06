

let str = 'the car drove fast';


let arr = str.split(" ");

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

let str2 = arr.join(" ");
console.log(str2);
document.write(str2);//hi hadi