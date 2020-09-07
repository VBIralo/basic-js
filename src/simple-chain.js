const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (!this.chain[position]) throw new Error();
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '';

    this.chain.map(link => {
      str += '( ' + link + ' )';
    })

    return str.replace(/\)\(/g, ')~~(', );
  }
};

module.exports = chainMaker;