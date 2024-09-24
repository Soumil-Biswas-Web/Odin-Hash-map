function hash(key, capacity) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = (primeNumber * hashCode + key.charCodeAt(i))%capacity;
  }

  return hashCode;
}

const limiterGet = (index, buckets) => {
  if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bound");
    // buckets = makeNewBuckets(buckets);
  }
  // return buckets;
}

const makeNewBuckets = (buckets) => {
  // console.log(buckets);
  let newBuckets = [];
  newBuckets.length = buckets.length;
  // console.log(newBuckets.length);
  newBuckets = buckets.concat(newBuckets);
  // newBuckets = newBuckets.concat(buckets);
  console.log(newBuckets);
  return newBuckets;
}

class HashMap {
  constructor() {
    this.key = null;
    this.value = null;
    this.index = null;
    this.buckets = [];
    this.buckets.length = 16;
    this.capacity = this.buckets.length;
    this.bucket = null;
    this.loadFactor = 0.75;
    this.entry = 0;
  }

  set = (key, value) => {
    this.index = hash(key, this.capacity);
    // console.log(this.index + " for " + key + " generating hash from " + this.capacity);
    this.bucket = [key, value];
    limiterGet(this.index, this.buckets);
    this.buckets[this.index] = this.bucket;
    this.entry++;
    // console.log("entry: " + this.entry);
    if (this.entry >= this.loadFactor * this.capacity) {
      this.buckets = makeNewBuckets(this.buckets);
      this.capacity = this.buckets.length;
      // console.log("New Bucket length: " + this.buckets.length);
    }
  };  
  
  get = (key) => {
    this.index = hash(key, this.capacity);
    //console.log(this.index + " for " + key + " generating hash from " + this.capacity);
    return this.buckets[this.index][1];
  };
  
  has = (key) => {
    this.index = hash(key, this.capacity);
    if (this.buckets[this.index]) return true;
    else return false;
  };

  remove = (key) => {
    this.index = hash(key, this.capacity);
    // console.log(this.index + " for " + key + " generating hash from " + this.capacity);
    if (this.buckets[this.index]) {
      delete this.buckets[this.index];
      this.entry--;
      // console.log(this.buckets);
      return true;
    }
    else return false;    
  };
  
  length = () => {
    let count = 0;
    for (let i in this.buckets){
      if (this.buckets[i]) count++;
    }
    return count;
  };
  
  clear = () => {
    this.buckets = [];
    this.entry = 0;
    this.capacity = 16;
  };
  
  keys = () => {
    let keys = [];
    for (let i in this.buckets){
      if (this.buckets[i]) keys.push(this.buckets[i][0]);
    }
    return keys;
  };
  
  values = () => {
    let values = [];
    for (let i in this.buckets){
      if (this.buckets[i]) values.push(this.buckets[i][1]);
    }
    return values;    
  }; 
  
  entries = () => {
    let pair = [];
    for (let i in this.buckets){
      if (this.buckets[i]) pair.push(this.buckets[i]);
    }
    return pair;       
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

console.log(test.get('kite'));

console.log(test.has('jacket'));

console.log(test.remove('kite'));
console.log(test.remove('kite'));

console.log(test.length());

// test.clear();

// console.log(test.buckets);

console.log(test.keys());

console.log(test.values());

console.log(test.entries());

