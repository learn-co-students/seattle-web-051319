class ArrayList {
  constructor(size=2) {
    this.data = new Array(size)
    this.size = 0

    // explicitly set all array indices to null.
    for (let i = 0; i < size; i++) {
      this.data[i] = null
    }
  }

  // O(1) constant append
  push(val) {
    this._checkCapacity()

    this.data[this.size] = val
    this.size++
  }

  // O(1) constant remove from end
  pop() {
    this.size--
    let val = this.data[this.size]
    this.data[this.size] = null
    return val
  }

  // O(N) linear time to shift things around to make room
  insertAtIndex(index, value) {
    this._checkCapacity()

    // scoot everything over to make room
    for (let i = this.size; i > index; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[index] = value
    this.size++
  }

  // O(N^2) quadratic time
  containsDupes() {
    for (let i = 0; i < this.size; i++) {
      for (let j = i + 1; j < this.size; j++) {
        if (this.data[i] === this.data[j]) {
          return true
        }
      }
    }
    return false
  }

  get(index) {
    return this.data[index]
  }

  set(index, value) {
    this.data[index] = value
  }
  
  _checkCapacity() {
    if (this.size == this.data.length) {
      this._grow()
    }
  }

  _grow() {
    let newArray = new Array(this.size * 2)
    newArray.fill(null)
    for (let i = 0; i < this.size; i++) {
      newArray[i] = this.data[i]
    }
    this.data = newArray
  }

  toString() {
    let result = '['
    for (let i = 0; i < this.size; i++) {
      result += this.data[i] + ', '
    }
    return result + ']'
  }

  realToString() {
    let result = '['
    for (let i = 0; i < this.data.length; i++) {
      result += this.data[i] + ', '
    }
    return result + ']'
  }
}

let aa = new ArrayList()
console.log(aa.toString())
console.log(aa.realToString())
console.log()

aa.push(42)
aa.push(45)
aa.push(80)

console.log(aa.toString())
console.log(aa.realToString())
console.log()

aa.push(11)
aa.push(22)
aa.push(33)
aa.push(44)
aa.push(55)
aa.push(66)
aa.push(77)

console.log(aa.toString())
console.log(aa.realToString())
console.log()

aa.insertAtIndex(1, 59000)

console.log(aa.toString())
console.log(aa.realToString())
console.log()
