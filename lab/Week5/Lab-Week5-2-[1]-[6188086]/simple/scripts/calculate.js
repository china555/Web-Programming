function doIt(word) {
    // Variables for HTML element DOM references.
    var num1Ref, num2Ref, num3Ref, answerRef, answer_e_oRef;

    // Variables declarations.
    var num1, num2, num3, answer, answer_e_o;

    // Get references to DOM elements.
    num1Ref = document.getElementById("num2");
    num2Ref = document.getElementById("num2");
    num3Ref = document.getElementById("num3");
    answerRef = document.getElementById("answer");
    answer_e_oRef = document.getElementById("answer_e_o");

    // Convert strings to numbers, e.g., "21" to 21.
    num1 = Number(num1Ref.value);
    num2 = Number(num2Ref.value);
    num3 = Number(num3Ref.value);
    // Perform addition operation then assignment operation
    console.log(word === 'pos')
    if(word === 'pos'){
    answer = num1 + num2 + num3;
    }
    else{
    answer = num1 - num2 - num3;
    }

    // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
    answerRef.innerText = answer;

    if (answer >= 0) {
        // Value of answer is positive.
        // Set the class of the answer label to "positive".
        answerRef.className = "positive";
    } else {
        // Value of answer is not positive, i.e., negative.
        // Set the class of the answer label to "negative".
        answerRef.className = "negative";
    }

    if (answer % 2 === 1) {
        answer_e_oRef.className = "odd";
        answer_e_oRef.innerText = "(odd)"
    } else {
        answer_e_oRef.className = "even";
        answer_e_oRef.innerText = "(even)"
    }
}


// function doIt2() {
//     // Variables for HTML element DOM references.
//     var num1Ref2, num2Ref2, num3Ref2, answerRef2, answer_e_oRef2;

//     // Variables declarations.
//     var num12, num22, num32, answer2, answer_e_o2;

//     // Get references to DOM elements.
//     num1Ref2 = document.getElementById("num12");
//     num2Ref2 = document.getElementById("num22");
//     num3Ref2 = document.getElementById("num32");
//     answerRef2 = document.getElementById("answer2");
//     answer_e_oRef2 = document.getElementById("answer_e_o2");

//     // Convert strings to numbers, e.g., "21" to 21.
//     num12 = Number(num1Ref2.value);
//     num22 = Number(num2Ref2.value);
//     num32 = Number(num3Ref2.value);
//     // Perform addition operation then assignment operation
//     answer2 = num12 - num22 - num32;

//     // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
//     answerRef2.innerText = answer2;

//     if (answer2 >= 0) {
//         // Value of answer is positive.
//         // Set the class of the answer label to "positive".
//         answerRef2.className = "positive";
//     } else {
//         // Value of answer is not positive, i.e., negative.
//         // Set the class of the answer label to "negative".
//         answerRef2.className = "negative";
//     }

//     if (answer2 % 2 === 1) {
//         answer_e_oRef2.className = "odd";
//         answer_e_oRef2.innerText = "(odd)"
//     }else{
//         answer_e_oRef2.className = "even";
//         answer_e_oRef2.innerText = "(even)"
//     }
// }