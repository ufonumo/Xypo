// this is a function to calculate the fibonacci equation
function fibonacci(num){
    if (num <= 1) return 1;
    num = 50;
    return fibonacci(num - 1) + fibonacci(num - 2)
}
fibonacci();

// second solution
function fibonacci(num, memo){
    memo =  memo || {};
 
    if (memo[num]) return mem0[num];
    if (num <= 1) return 1;

    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo)


}

fibonacci();
