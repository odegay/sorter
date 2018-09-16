class Sorter {
  constructor() {
    this.ar = [];
    this.compFunction = (a, b) => (a - b);
  }

  add(element) {
    this.ar.push(element);
  }

  at(index) {
    return this.ar[index];
  }

  get length() {
    return this.ar.length;
  }

  toArray() {
    return this.ar;
  }

  sort(indices) {
    //subset of main collection
    var newAr = [];
    indices.sort();

    //fill the subset with elements from the main collection
    for (var i in indices) {
      newAr.push(this.ar[indices[i]]);
    }
    
    //Sort the subset
    newAr.sort(this.compFunction);
    
    //update the main collection
    for (var i in indices) {
      this.ar[indices[i]] = newAr[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compFunction = compareFunction;
  }
}

module.exports = Sorter;