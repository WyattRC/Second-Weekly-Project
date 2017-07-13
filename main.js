// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
var total = 0

function question1() {
  for (let i = 0; i < data.length; i++) {
    total += data[i].price
  }
  let avg = total / data.length;
  console.log('The average price is ' + avg)
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD

function question2() {
  for (var i = 0; i < data.length; i++) {
    if (data[i].price < 18.01 && data[i].price > 14.01) {
      console.log(data[i].title)
    }
  }
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  for (var i = 0; i < data.length; i++) {
    if (data[i].currency_code === 'GBP') {
      console.log(data[i].title, data[i].price)
    }
  }
}


// 4: Display a list of all items that are made of wood.
// data[i].materials[i].wood


function question4() {


  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].materials.length; j++) {
      if (data[i].materials[j] == 'wood') {
        console.log(data[i].title)
      }
    }
  }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5() {
  for (var i = 0; i < data.length; i++) {
    if (data[i].materials.length > 8) {
      console.log(data[i].title, data[i].materials)

    }
  }
}



// 6: How many items were made by their sellers?
// Answer:
var homemade = 0;

function question6() {
  for (var i = 0; i < data.length; i++) {
    if (data[i].who_made === 'i_did') {
      homemade++;
    }
  }
  console.log(homemade + ' items were made by their sellers.')
}
