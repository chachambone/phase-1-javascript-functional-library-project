function myEach(collection, callback){
    if (Array.isArray(collection)) {
        collection.forEach((element) => callback(element));
      } else if (typeof collection === 'object' && collection !== null) {
        Object.values(collection).forEach((value) => callback(value));
      }
      
      return collection;
}

function myMap(collection, callback) {
    const result = [];
  
    if (Array.isArray(collection)) {
      collection.forEach((element) => {
        result.push(callback(element));
      });
    } else if (typeof collection === 'object' && collection !== null) {
      Object.values(collection).forEach((value) => {
        result.push(callback(value));
      });
    }
  
    return result;
  }
  
function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
  
    let startIndex = 0;
    if (acc === undefined) {
      acc = values[0];
      startIndex = 1; 
    }
  
    values.slice(startIndex).forEach((value) => {
      acc = callback(acc, value, collection);
    });
  
    return acc;
  }

function myFind(collection, predicate) {
    let result;
  
    if (Array.isArray(collection)) {
      collection.forEach((element) => {
        if (result === undefined && predicate(element)) {
          result = element;
        }
      });
    } else if (typeof collection === 'object' && collection !== null) {
      Object.values(collection).forEach((value) => {
        if (result === undefined && predicate(value)) {
          result = value;
        }
      });
    }
  
    return result;
  }

function myFilter(collection, predicate) {
    const result = [];
  
    if (Array.isArray(collection)) {
      collection.forEach((element) => {
        if (predicate(element)) {
          result.push(element);
        }
      });
    } else if (typeof collection === 'object' && collection !== null) {
      Object.values(collection).forEach((value) => {
        if (predicate(value)) {
          result.push(value);
        }
      });
    }
  
    return result;
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    }
    return 0;
  }

  function myFirst(array, n) {
    if (n === undefined) {
      // If n is not provided, return the first element
      return array[0];
    } else {
      // If n is provided, return the first n elements
      return array.slice(0, n);
    }
  }

  function myLast(array, n) {
    if (n === undefined) {
      // If n is not provided, return the last element
      return array[array.length - 1];
    } else {
      // If n is provided, return the last n elements
      return array.slice(-n);
    }
  }

  function myKeys(obj) {
    return Object.keys(obj);
  }

  function myValues(obj) {
    return Object.values(obj);
  }