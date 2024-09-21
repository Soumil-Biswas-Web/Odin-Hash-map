function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i))%300;
  }

  return hashCode;
}

const limiter = (index, buckets) => {
  if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bound");
  }
}

class HashMap {
  constructor() {
    this.key = null;
    this.value = null;
    this.index = null;
    this.buckets = [];
    this.bucket = null;
    this.loadFactor = 0.75;
  }

  set = (key, value) => {
    this.index = hash(key);
    this.bucket = [key, value];
    this.buckets[this.index] = this.bucket;
  };  
  
  functionName = () => {
    
  };
}

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.buckets);