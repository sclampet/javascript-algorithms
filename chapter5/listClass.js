let Node = require('../chapter5/listNode').Node

class SList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return !this.head;
  }

  addFront(data) {
    let n = data instanceof Node ? data : new Node(data);
    if (this.isEmpty()) {
      this.head = n;
      return this;
    } else {
      n.next = this.head;
      this.head = n;
    };
    return this;
  };

  contains(val) {
    if (!this.head) {
      return false;
    }

    let curr = this.head;
    while (curr) {
      if (curr.val === val) {
        return true;
      };
      curr = curr.next;
    };
    return false;
  };

  removeFront() {
    if (this.head) {
      let temp = this.head.next;
      this.head.next = null;
      this.head = temp;
    }
    return this

  };

  front() {
    if (this.head) {
      return this.head.val;
    }
    return "empty list";
  };

  length() {
    let numberOfNodes = 0;
    if (this.head) {
      let curr = this.head;

      while (curr) {
        numberOfNodes++;
        curr = curr.next;
      };
    };
    return numberOfNodes
  };

  display() {
    let listValues = "";
    if (this.head) {
      let curr = this.head;
      while (curr) {
        listValues += `${curr.val} `
        curr = curr.next;
      };
    };
    return listValues;
  };

  max() {
    let max;
    if (this.head) {
      let curr = this.head;
      max = this.head.val;
      while (curr) {
        if (curr.val > max) {
          max = curr.val;
        };
        curr = curr.next;
      };
    };
    return max;
  };

  min() {
    let min;
    if (this.head) {
      let curr = this.head;
      min = this.head.val
      while (curr) {
        if (curr.val < min) {
          min = curr.val;
        };
        curr = curr.next;
      };
    };
    return min;
  };

  average() {
    let avg;
    let sum;
    if (this.head) {
      avg = 0;
      sum = 0;
      let curr = this.head;
      while (curr) {
        sum += curr.val;
        curr = curr.next;
      };
    };

    return sum / this.length();
  };

  back() {
    if (this.head) {
      let curr = this.head;
      while (curr) {
        if (curr.next === null) {
          return curr;
        };
        curr = curr.next;
      };
    };
    return null;
  };

  removeBack() {
    if (this.head && this.head.next) {
      let curr = this.head;
      while (curr.next.next) {
        curr = curr.next
      };
      curr.next = null;
    } else {
      this.head = null;
    };
    return this;
  };

  addBack(data) {
    //allow addBack to take a node or a value
    let n = data instanceof Node ? data : new Node(data);

    if (this.head) {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      };
      curr.next = n;
    } else {
      this.head = n;
    };
    return this;
  };

  remove(data) {
    if (this.head) {
      if (this.head.val === data) {
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
      } else {
        let curr = this.head;
        while (curr) {
          if (curr.next && curr.next.val === data) {
            let temp = curr.next.next;
            curr.next.next = null;
            curr.next = temp;
          } else {
            curr = curr.next;
          }
        };
      }
    };

    return this;
  };

  splitOnValue(value) {
    let newList = new SList();

    if (this.head) {
      let isInSplitList = false;
      let curr = this.head;

      while (curr) {
        if (curr.val === value) {
          let temp = curr.next;
          curr.next = null;
          curr = temp;
          isInSplitList = true;
        };
        if (isInSplitList) {
          newList.addBack(curr);
        };

        curr = curr.next;
      };
    };

    return newList;
  };

  removeNegativeNodes() {
    if (this.head) {
      let curr = this.head;
      while (curr && curr.next) {
        if (curr.next.val < 0) {
          let temp = curr.next.next;
          curr.next.next = null;
          curr.next = temp;
        };
        curr = curr.next;
      };

      if (this.head.val < 0) {
        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;
      };
    };

    return this.head;
  };

  concat(newList) {
    if (newList.head) {
      if (this.head) {
        let curr = this.head;
        while (curr && curr.next) {
          curr = curr.next;
        };
        curr.next = newList.head;
      }
      else {
        this.head = newList.head;
      }
    };

    return this;
  };

  partition(value) {
    if(this.head) {
      let curr = this.head;

      //find and move partitionNode to head
      while(curr && curr.next) {
        if(curr.next.val == value) {
          let temp = curr.next.next;
          let partitionNode = curr.next;
          curr.next.next = null;
          curr.next = temp;
          this.addFront(partitionNode);
          break;
        }
        curr = curr.next;
      }

      //reset curr and move all lower values to front
      curr = this.head;
      while(curr && curr.next) {
        console.log(`${curr.val}, | ${this.display()}`)
        if(curr.next.val < value) {
          let temp = curr.next.next;
          let smallerNode = curr.next;
          curr.next.next = null;
          curr.next = temp;
          this.addFront(smallerNode);
          continue;
        }

        curr = curr.next;
      }
    };

    return this;
  };

  secondLargestValue() {
    let min;
    let secondMin;

    if(this.head && this.head.next) {
      min = this.head.val;
      secondMin = this.head.next.val;

      let curr = this.head;
      while(curr) {
        if(curr.val < min) {
          secondMin = min;
          min = curr.val;
        } else if(curr.val < secondMin) {
          secondMin = curr.val;
        };
        curr = curr.next;
      };
    };

    return secondMin;
  };

  zipWithList(listToZip) {
    if(this.head) {
      let curr = this.head;
      let toZip = listToZip.head;
      let nextZip;

      while(curr) {
        if(curr.next) {
          let temp = curr.next;
          let nextZip = toZip.next;
          curr.next = toZip;
          toZip.next = temp;
          curr = curr.next.next;
          toZip = nextZip;
        } else {
          curr.next = toZip
          break;
        }
      };
    } 
    else {
      return listToZip;
    };

    return this;
  };

  dedupe() {
    if(this.head) {
      let curr = this.head;
      let buffer = {};
      buffer[curr.val] = curr.val;

      while(curr && curr.next) {
        if(buffer[curr.next.val]) {
          let temp = curr.next.next;
          curr.next.next = null;
          curr.next = temp;
          continue;
        } else {
          buffer[curr.next.val] = curr.next.val;
        }
        curr = curr.next;
      }
    };

    return this;
  };
};


const sList = new SList();
const newList = new SList();

// sList.addBack(0).addBack(2);
sList.addBack(1).addBack(1).addBack(3).addBack(1).addBack(2).addBack(3).addBack(3);

console.log(sList.dedupe().display())


module.exports = {
  SList
}