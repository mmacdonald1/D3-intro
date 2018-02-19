// The select method will only grab the first element it finds 

//d3.select('p');

//selectAll will grab all matches

//d3.selectAll('p');

var el = d3.select('body').append('p').attr('class','foo').text('Hello World');

//Shows a selection. A selection is a javascript object that represents an HTML element on the browser.
console.log(el);

//d3.selection library https://github.com/d3/d3-selection -- allows you to select and change html elements

//A node is the technical term for everything and anything in your document