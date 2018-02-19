//SELECTION NOTES---------------------------------------------
// The select method will only grab the first element it finds 

//d3.select('p');

//selectAll will grab all matches

//d3.selectAll('p');

//Shows a selection. A selection is a javascript object that represents an HTML element on the browser.


//d3.selection library https://github.com/d3/d3-selection -- allows you to select and change html elements

//A node is the technical term for everything and anything in your document

//MANIPULATING SELECTIONS--------------------------------------
//transformation methods are just functions that change how an element appears or works

//cannot add more than one class using attr('class','foo') use classed('foo', true)

var el = d3.select('body')
.append('p')
.classed('foo', true)
.classed('bar', true)
.text('Hello World')
.style('color', 'blue');

console.log(el);