const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    const transpose = function(matrix) {
        let newArr = [];
        for (let i = 0; i < matrix[0].length; i++) {
          let arr = [];
          for (let j = 0; j < matrix.length; j++) {
            arr.push(matrix[j][i]);
          };
          newArr.push(arr);
        }
        return newArr;
      };
    newArr = transpose(letters);
    const verticalJoin = newArr.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch;