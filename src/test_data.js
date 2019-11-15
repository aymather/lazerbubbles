var matrix = [];
for(let i = 0; i < 20; i++){
    matrix.push(Array.from({length: 20}, () => Math.floor(Math.random() * 40)));
}

module.exports = matrix;