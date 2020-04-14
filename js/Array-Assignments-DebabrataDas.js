let numbers = [65,43,98,43,23,76,32,54,23,43];

//--------------------------------------------------------------------------//
/*
problem statements
-------------------
1. Sort given array 
    a->  A-Z
    b-> Z-A
*/
numbers.sort();  // ascending 
console.log('Sorted Numbers(ascending) :'+numbers);
numbers.reverse(); // descending
console.log('Sorted Numbers(descending) :'+numbers);

//--------------------------------------------------------------------------//
//find and display duplicate numbers
let findDups = [];
let findUnique = [];

numbers.forEach(function(val) {
    if (numbers.indexOf(val) != numbers.lastIndexOf(val))
    {
        findDups.push(val);
        if(findUnique.indexOf(val) < 0 )
            findUnique.push(val);
    }
    else
        findUnique.push(val);
});

//Print Duplicate
console.log('Duplicate Vaues :'+findDups);
//--------------------------------------------------------------------------//
//replace 76 value with 175 (update)

numbers[numbers.indexOf(76)] = 175;
console.log('replaced 76 with 175 :'+numbers);
//--------------------------------------------------------------------------//
//add new number into above given array (make sure new number should be unique)
let maxArrVal = Math.max(...numbers);
numbers.push(maxArrVal+1);
console.log('After Adding uniqueue value :'+numbers);
//--------------------------------------------------------------------------//
//remove all duplecates
//remove all duplecates and copy non duplicate array into new array
console.log('Unique values  :'+findUnique);
//--------------------------------------------------------------------------//
//update all the elements of given array by multiplying 10
findUnique.forEach(function(val)
{
    findUnique[findUnique.indexOf(val)] = val*10;
}
);
console.log('After multiplying with 10  :'+findUnique);
//--------------------------------------------------------------------------//
//8. Reverse given array as mutable
let mutableReverse = findUnique.reverse();
console.log('Mutable Reverse Array  :'+mutableReverse);
//--------------------------------------------------------------------------//
// Reverse givem array as immutable
const immutableReverse = [...findUnique.reverse()];
console.log('Immutable Reverse Array  :'+immutableReverse);

//Testing by ading new Value //
immutableReverse.push('test');
console.log('Immutable Reverse Array  :'+immutableReverse);
console.log('Original Array  :'+findUnique);
//--------------------------------------------------------------------------//
/*
find duplicates in given array in dislay them like followig
    43 is repeated 3 times
    23 is repeated 2 times 
*/

let newNumbers = [65,43,98,43,23,76,32,54,23,43];
let newDups = []; 

newNumbers.forEach(function(val)
        {
            if (numbers.indexOf(val) != numbers.lastIndexOf(val))
            if (newDups.indexOf(val)<0)
            newDups.push(val);
        }
)
console.log('newDups :'+newDups);
newNumbers.sort();

newDups.forEach( function(val)
            {
                console.log( val + ' is repetaed ' + (numbers.lastIndexOf(val)+1-numbers.indexOf(val)) + ' times.');
            }
)



//--------------------------------------------------------------------------//




