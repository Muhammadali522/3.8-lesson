let numbers = [2, 4, 9, 10, 45, 67, 8, 90] ;
let box = []

for (let index = 0; index < numbers.length; index++) {
    // console.log(numbers[index]);
    if(numbers[index] % 2 == 0){
       box.push(numbers[index])
    }
}
console.log(numbers);
console.log(box);