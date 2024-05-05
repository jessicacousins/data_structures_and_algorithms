// ! Sets

// * Notes: Set data structures are similar to arrays, except there are no duplicate items and the values are not in any particular order.

// * What is a typical use for a set? to check for duplicates of items.

function mySet() {
  // the var collection will hold the set in an array, which arrays cannot have duplicate items.
  var collection = [];
  // this method will check for the presence of an element and return true or false
  this.has = function (element) {
    // has checks for the presence of an element
    return collection.indexOf(element) !== -1; //and it returns true or false. So if the element is not in the collection, it's going to return negative one.  It checks if an element exists in the collection by using indexOf, which returns -1 if the element is not found. And if it doesn't return -1 then it is true.
  };
  this.values = function () {
    // this method will return all the values in the set
    return collection; // then it returns the collection.
  };
  this.add = function (element) {
    // this method will add an element to the set.
    if (!this.has(element)) {
      // check if the element is already in the collection with the has method.
      collection.push(element); // if it does not have the element then we push it to that collection array.
      return true;
    }
    return false; // if we dont push an element to the collection it returns false.
  };
  this.remove = function (element) {
    // this method will remove an element from a set.
    if (this.has(element)) {
      // check if the element is already in the collection with the has method
      index = collection.indexOf(element);
      collection.splice(index, 1); // splice means we are removing an element in the array starting at the index of the element and going for one element
      return true;
    }
    return false; // or return false if that element is not in the collection.
  };
  this.size = function () {
    // this method will return the size of the collection
    return collection.length; // this will return the number of elements in the collection.
  };
  // this method will return the union of two sets
  this.union = function (otherSet) {
    // call the union method on the original set and pass in the other set we want to combine.
    var unionSet = new mySet(); // create new set named mySet
    var firstSet = this.values(); // calling the values from above for the collection.
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      // for each union set add the value.
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      // doing the same for the secondSet. No duplicates
      unionSet.add(e);
    });
    return unionSet;
  };
  // this method will return the intersection of two sets as a new set.
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet(); // make new set here
    var firstSet = this.values(); // get all the values
    firstSet.forEach(function (e) {
      // for each value in each set we are checking that each set has the value. so the intersection is just all the items that are both sets.
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // this method will return the difference of two sets as a new set.
  this.difference = function (otherSet) {
    // create new set
    var differenceSet = new mySet(); // grab the values
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        // using the not operator to see if the value is not in the set. then add it to a diffeernt set.
        differenceSet.add(e);
      }
    });
    return differenceSet; // return the different set
  };
  // this method will test if the set is a subset of a different set. This is checking that the first set is completely contained  within the second set.
  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      // every method is testing whether all the elements in the array pass the test implemented by the provided function.
      return otherSet.has(value); // So we are seeing if all the values from the first set are in the subset second set.
    });
  };
}
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB)); // Output: true, since all elements of setA are contained in setB
console.log(setA.intersection(setB).values()); // Output: ["a"], the common element
console.log(setB.difference(setA).values()); // Output: ["b", "c", "d"], elements in setB not in setA

var setC = new Set();
var setD = new Set();
var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log([...setD.values()]); // Outputs all values in setD: ["b", "c", "a", "d"]
setD.delete("a");
console.log(setD.has("a")); // Outputs false, since "a" was deleted from setD
console.log([...setD.values()]); // Outputs remaining values in setD: ["b", "c", "d"]
setD.add("d"); // "d" is already in the set, so this has no effect
console.log([...setD.values()]); // Outputs: ["b", "c", "d"]
