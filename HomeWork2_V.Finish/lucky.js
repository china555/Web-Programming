var category_select
var cat
// use map to insert all category into it
const allmap = new Map()
allmap.set('Work', ['45', '46', '78', '87', '39', '93', '56'])
allmap.set('Love', ['32', '24', '62', '36', '63', '69', '96'])
allmap.set('Wealth', ['28', '82', '45', '54', '65', '56', '78'])
allmap.set('Merchandising', ['44', '22', '41', '16', '61', '26', '42'])
allmap.set('Technology', ['98', '89', '99', '59', '95', '91', '19'])
allmap.set('Education', ['15', '51', '14', '41', '55', '39', '23'])
//Global Variable
var numberarr = []
var three_digit
//For init 3 digit
function init_phone() {
    three_digit = document.getElementById("threedigit").value;
}
//Select category
function select_cat() {
    category_select = document.getElementById("Category").value;
    const isHasKey = allmap.has(category_select);
    if (isHasKey) {
        cat = allmap.get(category_select);
    }
    //To discuss the category that are include unwanted number
    const result = cat.filter((number) => !(numberarr.includes(number[0]) || numberarr.includes(number[1])));
    cat = result;
}
// Use to do all of this project to generate or get data form html file.
function generate() {
    numberarr = [];
    //get form html
    let notchoose = document.getElementsByName("num");
    let output = document.getElementById('output')
    let head = document.getElementById('header')
    phone = three_digit;
    for (let i = 0; i < notchoose.length; i++) {
        if (notchoose[i].checked === true) {
            numberarr.push(notchoose[i].value);
        }
    }
    let count = 0;
    while (count < 5) {
        //randoom number into length 0-9
        let random = Math.floor(Math.random() * 10);
        if (check(random, numberarr)) {
            phone = phone + random
            count++;
        }
    }
    //call to select catagory
    select_cat()
    if (cat.length > 0) {
        let word = []
        //insert in array
        for (let i in phone) {
            word.push(phone.charAt(i))
        }
        let ran_num_cat = cat[Math.floor(Math.random() * cat.length)];
        let random_number = Math.floor(Math.random() * word.length);
        while (random_number < 3) {
            random_number += 1;
        }
        //use to split array and then put it or delete it
        word.splice(random_number, 0, ran_num_cat);
        phone = "";
        for (let i in word) {
            phone += word[i]
        }
        // Use innerHTML and string literal to represent to the HTML page
        output.innerHTML = `<h1>${phone}</h1>`;
        document.getElementById('category').innerText = `(${category_select.toUpperCase()})`;
        return phone;
    } else {
        //if you select unwanted too much.
        output.innerHTML = `<h1>ERROR 404 NOT FOUND</h1>`;
    }
}
// to check array have that number or not
function check(num, arr) {
    for (let i in arr) {
        if (arr[i] === String(num)) {
            return false;
        }
    }
    return true;
}
// for EXTRA 
function generateExtra() {
    let arr = [];
    let allsum = []

    for (var i = 0; i < 1000; i++) {
        let sum = 0;
        let phone = 0;
        phone = generate();

        for (let i = 0; i < phone.length; i++) {
            sum = sum + parseInt(phone[i]);
        }
        // map function
        const isHasKey = allmap.has(category_select);
        if (isHasKey) {
            cat = allmap.get(category_select);
        }
        console.log(cat)
        for (let i = 0; i < cat.length; i++) {
            if (sum == cat[i]) {
                arr.push(String(phone))
                allsum.push(sum);
            }
        }
    }
    let output = document.getElementById("extra");
    if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            // console.log(arr[i] + "wdawd")
            // console.log(allsum[i])
            // console.log(arr)
            // console.log(allsum)
            if (i == 0) {
                output.innerHTML = "<h3>" + arr[i] + " (" + allsum[i] + ")";
            }
            output.innerHTML += "<h3>" + arr[i] + " (" + allsum[i] + ")";
        }
    } else {
        output.innerHTML = "<h1>ERROR 404 </h1> ";
    }
}