// https://www.geeksforgeeks.org/print-all-jumping-numbers-smaller-than-or-equal-to-a-given-value/


/*Input: x = 20
Output:  0 1 2 3 4 5 6 7 8 9 10 12

Input: x = 105
Output:  0 1 2 3 4 5 6 7 8 9 10 12
         21 23 32 34 43 45 54 56 65
         67 76 78 87 89 98 101*/


let jumpingNumbers = (input) => {
    let digit = [1,2,3,4,5,6,7,8,9],
        queue = [1],
        ans = [0];

    while(queue.length) {
        let number = queue.shift();
        ans.push(number);
        
        let lastDigit = number % 10,
            newDigit = [];
        if (lastDigit === 0){
            newDigit.push(lastDigit + 1);
        } else if(lastDigit === 9){
            newDigit.push(lastDigit - 1);
        } else {
            newDigit.push(lastDigit + 1)
            newDigit.push(lastDigit - 1);
        }

        newDigit.forEach((val) => {
            let num = number * 10 + val;
            if(num <= input)
                queue.push(num);
        });
    }

    console.log(ans);
}

jumpingNumbers(20);
jumpingNumbers(105);