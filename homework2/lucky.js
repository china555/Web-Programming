var category_select
var cat
// const work = [45, 46, 78, 87, 39, 93, 56];
// const love = [32, 24, 62, 36, 63, 69, 96];
// const wealth = [28, 82, 45, 54, 65, 56, 78];
// const merchandising = [44, 22, 41, 16, 61, 26, 42];
// const technology = [98, 89, 99, 59, 95, 91, 19];
// const education = [15, 51, 14, 41, 55, 39, 23];
// const numberarr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
var numberarr = []
var three_digit

function init_phone() {
    three_digit = document.getElementById("threedigit").value;
    // console.log(phone);
}

function select_cat() {
    category_select = document.getElementById("Category").value;
    console.log(category_select)
    if (category_select === 'Work') {
        cat = ['45', '46', '78', '87', '39', '93', '56']
    } else if (category_select === 'Love') {
        cat = ['32', '24', '62', '36', '63', '69', '96']
    } else if (category_select === 'Wealth') {
        cat = ['28', '82', '45', '54', '65', '56', '78']
    } else if (category_select === 'Merchandising') {
        cat = ['44', '22', '41', '16', '61', '26', '42']
    } else if (category_select === 'Technology') {
        cat = ['98', '89', '99', '59', '95', '91', '19']
    } else if (category_select === 'Education') {
        cat = ['15', '51', '14', '41', '55', '39', '23']
    }
    for (let i = 0; i < numberarr.length; i++) {
        for (let j = 0; j < cat.length; j++) {
            if (numberarr[i] === cat[j][0] || numberarr[i] === cat[j][1]) {
                delete cat[j];
            }
        }
        console.log(cat);
        cat = cat.filter(Boolean);
    }
    console.log(cat);

}



function generate() {
    numberarr = [];
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
        let random = Math.floor(Math.random() * 10);
        if (check(random, numberarr)) {
            phone = phone + random
            count++;
        }
    }
    select_cat()
    if(cat.length > 0){
        let word = []
        for (let i in phone) {
            word.push(phone.charAt(i))
        }
        let ran_num_cat = cat[Math.floor(Math.random() * cat.length)];
        // console.log(ran_num_cat)
        // console.log(phone.length);
        let random_number = Math.floor(Math.random() * word.length);
        while (random_number < 3) {
            random_number += 1;
        }
        word.splice(random_number, 0, ran_num_cat);
        phone = "";
        for(let i in word){
            phone += word[i]
        }
        output.innerHTML = `<h1>${phone}</h1>`;
        document.getElementById('category').innerText = `(${category_select.toUpperCase()})`;
    }
    else{
        output.innerHTML = `<h1>ERROR 404 NOT FOUND</h1>`;
    }
}

function check(num, arr) {
    for (let i in arr) {
        console.log("GEWEEW" + arr)
        if (arr[i] === String(num)) {
            return false;
        }
    }
    return true;
}