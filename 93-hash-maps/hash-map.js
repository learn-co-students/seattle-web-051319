function strSum(str) {
    str = '' + str
    let sum = 0
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i)
    }
    return sum
}

class HashMap {
  constructor() {
    this.data = new Array(17)
  }

  // assume the key is an integer and modulus is by the length of the
  // array to find an index where it should go. The same key always
  // return the same index. ALWAYS.
  hash(key) {
    let sum = strSum('' + key)
    return sum % this.data.length
  }

  // time: O(N)
  // space: O(1)
  get(key) {
    let index = this.hash(key)
    let kv = this.data[index]
    if (kv && kv.key === key) {
      return kv.value
    }
    return null
  }

  // O(N) - because we use the .get to make sure it's not there
  // O(1) - if we skip the check and make that the users problem then it could be very fast
  // space: O(1)
  put(key, value) {
    // double check to make sure this key hasn't
    // been stored before
    let isCollision = !!this.get(key)

    kv = {key, value}

    let index = this.hash(key)
    let isEmpty = this.data[index] === null
    let attempts = 0
    while (!isEmpty) {
      // account for having tried every index in the "buckets"
      // or for being stuck in a loop that's stuck in a cycle
      attempts++
      if (attempts === this.data.length) {
        return null
      }

      index += 7
      index %= this.data.length
      isEmpty = this.data[index] === null
    }
    
    console.log('putting', key, 'at', index)
    this.data[index] = kv
    console.log('   data', this.data)
  }

  // update the key with the value if the key exists
  // O(N) - because .get
  // space: O(1)
  update(key, value) {
    let kv = this.get(key)
    if (kv) {
      kv.value = value
    }
  }

  // O(N) - we must filter through all things
  // space: O(N)
  delete(key) {
    const filtered = this.data.filter(kv => {
      return kv.key !== key
    })
    this.data = filtered
  }
}

const closet = new HashMap()
closet.put(98101, "Downtown")
closet.put(98102, "Capitol Hill")
closet.put(98103, "Wallingford")
closet.put(98118, "Beaconed Hill")
closet.put(90210, "Beverly Crusher Hills")

console.log(closet.get(90210))
