const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  res: [],

  getLength() {
    return this.res.length;
  },

  addLink(val) {
    this.res.push(val);
		return this;
  },

  removeLink(pos) {
    if(this.res[pos - 1] === undefined) {
      this.res = [];
      throw new Error("You can't remove incorrect link!");
    }
    let res1 = [];
		for(let i = 0; i < this.res.length; i++) {
			if(this.res[i] != this.res[pos - 1]) res1.push(this.res[i]);
		}
		this.res = res1;
		return this;
  },

  reverseChain() {
    this.res.reverse();
		return this;
  },

  finishChain() {
    let chain = this.res.map((e, ind) => {
			if(ind === this.res.length - 1) return `( ${e} )`;
			return `( ${e} )~~`;
		}).join("");

    this.res = [];

    return chain;
  }
};

module.exports = {
  chainMaker
};