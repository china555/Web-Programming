function doIt() {
    // Variables for HTML element DOM references.
    var num1Ref, num2Ref, num3Ref, answerRef;

    // Variables declarations.
    var num1, num2, num3, answer;

    // Get references to DOM elements.
    num1Ref = document.getElementById("num1");
    num2Ref = document.getElementById("num2");
    num3Ref = document.getElementById("num3");
    answerRef = document.getElementById("answer");
    //console.log(num3Ref.value)
    // Convert strings to numbers, e.g., "21" to 21.
    num1 = Number(num1Ref.value);
    num2 = Number(num2Ref.value);
    num3 = Number(num3Ref.value);
    console.log(num1.value, num2.value, num3.value);


    // Perform addition operation then assignment operation
    answer = num1 + num2 + num3;

    // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
    answerRef.innerText = answer;

    if (answer >= 0) {
        // Value of answer is positive.
        // Set the class of the answer label to "positive".
        answerRef.className = "positive";
        answerRef.innerHTML += `<span>${evenodd(answer)}</span>`

    } else {
        // Value of answer is not positive, i.e., negative.
        // Set the class of the answer label to "negative".
        answerRef.className = "negative";
        answerRef.innerHTML += `<span>${evenodd(answer)}</span>`
    }
}

function subIt() {
    // Variables for HTML element DOM references.
    var num1sRef, num2sRef, num3sRef, answerRef;

    // Variables declarations.
    var num1s, num2s, num3s, answers;

    // Get references to DOM elements.
    num1sRef = document.getElementById("num1s");
    num2sRef = document.getElementById("num2s");
    num3sRef = document.getElementById("num3s");
    answerRef = document.getElementById("answers");
    //console.log(num3Ref.value)
    // Convert strings to numbers, e.g., "21" to 21.
    num1s = Number(num1sRef.value);
    num2s = Number(num2sRef.value);
    num3s = Number(num3sRef.value);
    console.log(num1s.value, num2s.value, num3s.value);


    // Perform addition operation then assignment operation
    answers = num1s - num2s - num3s;

    // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
    answerRef.innerText = answers;

    if (answers >= 0) {
        // Value of answer is positive.
        // Set the class of the answer label to "positive".
        answerRef.className = "positive";
        answerRef.innerHTML += `<span>${evenodd(answers)}</span>`

    } else {
        // Value of answer is not positive, i.e., negative.
        // Set the class of the answer label to "negative".
        answerRef.className = "negative";
        answerRef.innerHTML += `<span>${evenodd(answers)}</span>`
    }
}

function evenodd(answerRef) {
    if (answerRef % 2 === 0) 
    {
        return "(even)"
    } else 
    {
        return "(odd)"
    }
}