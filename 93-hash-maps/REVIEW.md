# Data Structures
Definition: defines the way information is stored on the machine

* Array
  * continious block of index-accessed memory
* Linked Lists
  * a chain of memory addresses linked together with
    references
* Trees
* HashMap/hash table
  * an array
  * hash function
  * stores key/value pairs
  * has a way to deal with collisions

# Interface
Definition: defines the way you interact with data
* String
  * the string can have methods like .charAt, .contains, .splice
    .split, .substring, .length
  * but the characters themselves can be stored in an array or linked list
* List
  * can either be built out of an array, or a linked list
  * a list has an order to it
  * you can add, update, access and remove things at an index
  * a "List" interface is independant of the underlying data structure
* Stacks & Queues
  * they define ways to interact with the interface
  * push/pop or enqueue/dequeue
  * implemented with an underlying data structure
* Object/Map/Dictionary/Hashes
  * a Map stores key/value pairs
  * it can be built with an array of key/value pairs, a linked list of
    key/value pairs or a hash table of key/value pairs
  * Object Oriented methods
    * map = Map.new  // map = new Map()
    * map.put(key, value)
    * map.get(key)
    * map.delete(key)
  * Buil-in syntactic sugar
    * oo = {}
    * oo[key] = value
    * val = oo[key]
    * delete oo[key]
   

# Hash Tables
The magical O(1) of all data structure

```
  Read: O(1)
 Write: O(1)
Update: O(1)
Delete: O(1)
```

