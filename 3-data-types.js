function compareObjects(obj1, obj2) {
  const result = {
    common: {},
    onlyInFirst: {},
    onlyInSecond: {},
    different: {}
  };

  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (obj2.hasOwnProperty(key)) {
        if (obj1[key] === obj2[key]) {
          result.common[key] = obj1[key];
        } else {
          result.different[key] = {
            valueInFirst: obj1[key],
            valueInSecond: obj2[key]
          };
        }
      } else {
        result.onlyInFirst[key] = obj1[key];
      }
    }
  }


  for (let key in obj2) {
    if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
      result.onlyInSecond[key] = obj2[key];
    }
  }
  return result;
}



const object1 = {
  name: 'John',
  age: 30,
  profession: 'developer',
  city: 'New York'
};

const object2 = {
  name: 'John',
  age: 25,
  country: 'USA',
  city: 'Los Angeles'
};



const comparisonResult = compareObjects(object1, object2);
console.log(comparisonResult);
