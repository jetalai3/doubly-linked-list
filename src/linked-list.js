const Node = require('./node');

class LinkedList {
    constructor() {
        this.nodeArray = [];
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        const newNode = new Node();
        newNode.data = data;
        if (this.isEmpty()) {
            this._head = newNode;
            this._tail = newNode;
            this._tail.prev = newNode;
            this.head.next = newNode;
        }
        newNode.prev = this._tail;
        this._tail = newNode;

        this.nodeArray.push(newNode);
        this.length = this.nodeArray.length;
        return this;
    }

    head() {
        return this._head && this._head.data;
    }

    tail() {
        return this._tail && this._tail.data;
    }

    at(index) {
        return this.nodeArray[index].data;
    }

    insertAt(index, data) {
        const newNode = new Node();
        newNode.data = data;
        this.nodeArray.splice(index, 0, newNode);
        this.length += 1;
        return this;
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }

    clear() {
        this.nodeArray = [];
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        this.nodeArray.splice(index - 1, 1);
        return this;
    }

    reverse() {
        let nd = this._head;
        this._head = this._tail;
        this._tail = nd;
        this.nodeArray.reverse();
        return this;
    }

    indexOf(data) {
        return this.nodeArray.indexOf(this.nodeArray.filter(el => el.data === data)[0]);
    }
}

module.exports = LinkedList;
