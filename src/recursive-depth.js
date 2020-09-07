module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthLevel = 0;
    while (arr.length) {
      depthLevel++;
      arr = arr.reduce((depth, el) => {
        if (Array.isArray(el)) depth.push(...el);
        return depth;
      }, []);
    }
    return depthLevel;
  }
};