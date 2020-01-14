# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @quintonel/lotide`

**Require it:**

`const _ = require('@quintonel/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(first, second)`: returns the boolean result from calling the eqArrays function on two arrays
* `assertEqual(actual, expected)`: checks if two inputs are exactly equal and returns a boolean result
* `assertObjectsEqual(actual, expected)`: checks if the content of two objects is equal and returns a boolean result
* `countLetters(string)`: counts the number of matching letters in a string and places the count in an object corresponding to the letter as a key
* `countOnly(allItems, itemsToCount)`: takes in an array of strings and which strings to look for in the form of an object and returns the count of how many matches were found corresponding to each match name
* `eqArrays(first, second)`: compares if two arrays are identical in size and content and returns a boolean
* `eqObjects(object1, object2)`:returns true if both objects have identical keys with identical values
* `findKey(object, callback)`: searches through an object and returns the key corresponding to the callback value
* `findKeyByValue(object, value)`: searches through an object and returns the key corresponding to the value
* `flatten(arrays)`: takes an infinite amount of nested arrays and returns a new single array with all values
* `head(array)`: returns the first entry in an array, if the array is empty returns undefined
* `letterPositions(sentence)`: accepts a string and a letter to look for and returns the positions of all matching letters in the form of an object
* `map(array, callback)`: takes in an array and uses a callback function to map an action on the array
* `middle(array)`: finds the middle item(s) of an array
* `tail(array)`: removes the first element from an array and returns the rest, returns an empty array if size is 1 or less
* `takeUntil(array, callback)`: loops through an array until a callback condition is met, then returns everything before callback as an array
* `without(source, itemsToRemove)`: takes in two arrays and removes the specified items from one of the arrays and returns the new array