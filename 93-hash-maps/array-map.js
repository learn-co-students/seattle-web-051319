class ArrayMap {
  constructor() {
    this.data = []
  }

  // time: O(N)
  // space: O(1)
  get(key) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].key === key) {
        return this.data[i].value
      }
    }
    return null
  }

  // O(N) - because we use the .get to make sure it's not there
  // O(1) - if we skip the check and make that the users problem then it could be very fast
  // space: O(1)
  put(key, value) {
    // double check to make sure this key hasn't
    // been stored before
    let kv = this.get(key)
    if (kv !== null) return

    kv = {key, value}
    this.data.push(kv)
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

const closet = new ArrayMap()
closet.put(98101, "Downtown")
closet.put(98102, "Capitol Hill")
closet.put(98103, "Wallingford")
closet.put(98118, "Beaconed Hill")
closet.put(90210, "Beverly Crusher Hills")

console.log(closet.get(90210))
