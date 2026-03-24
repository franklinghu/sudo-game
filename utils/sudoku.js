// 数独算法工具

// 生成完整的数独终盘
function generateSolvedBoard() {
  const board = Array(9).fill(null).map(() => Array(9).fill(0));
  fillBoard(board);
  return board;
}

// 填充数独棋盘（回溯算法）
function fillBoard(board) {
  const empty = findEmpty(board);
  if (!empty) return true;
  
  const [row, col] = empty;
  const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  for (const num of nums) {
    if (isValid(board, row, col, num)) {
      board[row][col] = num;
      if (fillBoard(board)) return true;
      board[row][col] = 0;
    }
  }
  return false;
}

// 找空位
function findEmpty(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) return [i, j];
    }
  }
  return null;
}

// 检查数字是否有效
function isValid(board, row, col, num) {
  // 检查行
  for (let j = 0; j < 9; j++) {
    if (board[row][j] === num) return false;
  }
  // 检查列
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === num) return false;
  }
  // 检查3x3宫格
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === num) return false;
    }
  }
  return true;
}

// 打乱数组
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 挖空生成题目（难度决定挖空数量）
export function generatePuzzle(difficulty = 'medium') {
  const solved = generateSolvedBoard();
  const puzzle = solved.map(row => [...row]);
  
  const holes = {
    easy: 35,
    medium: 45,
    hard: 55,
    expert: 65
  }[difficulty] || 45;
  
  const positions = shuffle([...Array(81).keys()]);
  let count = 0;
  
  for (const pos of positions) {
    if (count >= holes) break;
    const row = Math.floor(pos / 9);
    const col = pos % 9;
    if (puzzle[row][col] !== 0) {
      puzzle[row][col] = 0;
      count++;
    }
  }
  
  return { puzzle, solution: solved };
}

// 检查是否完成
export function checkComplete(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0 || !isValid(board, i, j, board[i][j])) {
        return false;
      }
    }
  }
  return true;
}

// 获取提示
export function getHint(puzzle, solution) {
  const empty = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (puzzle[i][j] === 0) {
        empty.push([i, j, solution[i][j]]);
      }
    }
  }
  if (empty.length === 0) return null;
  return empty[Math.floor(Math.random() * empty.length)];
}