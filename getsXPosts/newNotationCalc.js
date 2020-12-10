//range()
//taken from https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    };
    return ans;
}

//Get Primes
var getPrimes = function(num) {
    primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541]
    var i;
    for (i in primes) {
        if (num % i == 0) {
            num /= i;
            num = parseInt(num);
        };
    };
    if (num <= 541) {
        return primes
    }
    currNumber = 549;
    isPrime = true;
    var i;
    while (currNumber <= num) {
        if ((currNumber % 2 == 0) || (currNumber % 3 == 0) || (currNumber % 5 == 0) || (currNumber % 7 == 0) || (currNumber % 11 == 0) || (currNumber % 13 == 0) || (currNumber % 17 == 0) || (currNumber % 19 == 0)) {
            currNumber += 1;
            continue;
        }; 
        isPrime = true;
        for (i in range(2, Math.ceil(Math.sqrt(currNumber)) + 1)) {
            if ((i % 2 == 0 && i > 2) || (i % 3 == 0 && i > 3) || (i % 5 == 0 && i > 5) || (i % 7 == 0 && i > 7) || (i % 11 == 0 && i > 11) || (i % 13 == 0 && i > 13) || (i % 17 == 0 && i > 17) || (i % 19 == 0 && i > 19)) {
                continue;
            };
            if (i <= 1) {continue;}
            if (currNumber % i == 0) {
                //console.log("tried " + i.toString() + " on " + currNumber.toString() + ", false")
                isPrime = false;
                break;
            } else {
                //console.log("tried " + i.toString() + " on " + currNumber.toString() + ", true")
                //pass;
            };
        };
        if (isPrime) {
            primes.push(currNumber);
            //console.log("pushed" + currNumber.toString())
        };
        currNumber += 1
    };
    return primes
};

//Main Function

var mainFunc = function(input) {
    var firstPrimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541];
    var hardcodedOut = ["0", "(0)", "((0))", "((0)0)", "(((0)))", "((0)00)", "((0)(0))", "((0)000)", "(((0)0))", "(((0))0)", "((0)0(0))", "((0)0000)", "((0)((0)))", "((0)00000)", "((0)00(0))", "((0)(0)0)", "((((0))))"];
    var input = parseInt(input);
    if (input <= 0 || isNaN(input)) {
        return null;
    };
    var neededPrimes = getPrimes(input);

    //Get prime factors
    var number2 = input;
    var curPrime = 0;
    var primeFact = [];
    var testNum;
    for (x in range(0, neededPrimes.length)) {
        primeFact.push(0);
    };
    while (number2 >= 2) {
        testNum = number2 / neededPrimes[curPrime]
        //console.log(input.toString() + " divided by " + neededPrimes[curPrime].toString() +" is " + testNum.toString())
        if (parseInt(testNum) == parseFloat(testNum)) {
            primeFact[curPrime] += 1;
            number2 = parseInt(testNum);
        } else {
            curPrime += 1;
        };
    };
    //Get highest prime factor
    var highestFact = neededPrimes.length;
    while (true) {
        if (primeFact[highestFact] == 0) {
            highestFact -= 1;
        } else {
            break;
        };
    };
    primeFact = primeFact.slice(0, highestFact+1)
    //Convert to notation
    var primeCount = highestFact;
    var output = "";
    while (primeCount >= 0) {
        output += hardcodedOut[primeFact[primeCount]];
        primeCount -= 1;
    };
    return output;
};