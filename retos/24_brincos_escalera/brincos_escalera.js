
console.log(getStaircasePaths(2, 1)) // [[1, 1]]
console.log(getStaircasePaths(3, 3)) // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)) // [[1, 1, 1, 1, 1]]

function getStaircasePaths(steps, maxJump) {
    const r = [];
    
    const getPaths = (steps,maxJump,path)=> {
      if (steps === 0) {
            r.push(path);
            return;
      }
  
      for (let i = 1; i <= maxJump && i <= steps; i++) {
        getPaths(steps - i, maxJump, [...path, i]);
      }
    };
  
    getPaths(steps, maxJump, []);
  
    return r;
}

module.exports = getStaircasePaths