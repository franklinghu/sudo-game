<!-- 游戏主界面 -->
<template>
  <view class="game-container">
    <!-- 顶部栏 -->
    <view class="header">
      <view class="back" @click="goBack">←</view>
      <view class="info">
        <text class="difficulty">{{ difficulty }}</text>
        <text class="timer">{{ formatTime(time) }}</text>
      </view>
      <view class="actions">
        <view class="action-btn" @click="useHint">提示</view>
        <view class="action-btn" @click="toggleNoteMode">
          <text :class="{ active: noteMode }">笔记</text>
        </view>
      </view>
    </view>
    
    <!-- 数独棋盘 -->
    <view class="board">
      <view v-for="(row, ri) in board" :key="ri" class="row">
        <view 
          v-for="(cell, ci) in row" 
          :key="ci" 
          class="cell"
          :class="cellClasses[ri][ci]"
          @click="selectCell(ri, ci)"
        >
          <text v-if="cell !== 0">{{ cell }}</text>
          <view v-else-if="notes[ri]?.[ci]?.size" class="notes">
            <text v-for="n in 9" :key="n" :class="{ active: notes[ri][ci]?.has(n) }">
              {{ notes[ri][ci]?.has(n) ? n : '' }}
            </text>
          </view>
        </view>
      </view>
    </view>
    
    <!-- 数字键盘 -->
    <view class="numpad">
      <view 
        v-for="n in 9" 
        :key="n" 
        class="num-btn" 
        :class="{ disabled: !canInput(n) }"
        @click="inputNumber(n)"
      >
        {{ n }}
      </view>
      <view class="num-btn clear" @click="clearCell">⌫</view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { getHint, checkComplete } from '../../utils/sudoku';

const difficulty = ref('中等');
const board = ref([]);
const solution = ref([]);
const notes = ref([]);
const selected = ref(null);
const noteMode = ref(false);
const time = ref(0);
let timer = null;

onMounted(() => {
  const game = uni.getStorageSync('currentGame');
  if (game) {
    board.value = game.puzzle.map(r => [...r]);
    solution.value = game.solution;
    difficulty.value = { easy: '简单', medium: '中等', hard: '困难', expert: '专家' }[game.difficulty];
    time.value = Math.floor((Date.now() - game.startTime) / 1000);
    timer = setInterval(() => time.value++, 1000);
  }
  initNotes();
});

onUnmounted(() => {
  clearInterval(timer);
});

function initNotes() {
  notes.value = Array(9).fill(null).map(() => Array(9).fill(null).map(() => new Set()));
}

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

function selectCell(row, col) {
  if (board.value[row][col] !== 0 && board.value[row][col] === solution.value[row][col]) return;
  selected.value = { row, col };
}

function canInput(n) {
  if (!selected.value) return true;
  const { row, col } = selected.value;
  return !board.value[row][col] || board.value[row][col] !== solution.value[row][col];
}

function inputNumber(n) {
  if (!selected.value) return;
  const { row, col } = selected.value;
  
  if (noteMode.value) {
    if (notes.value[row][col].has(n)) {
      notes.value[row][col].delete(n);
    } else {
      notes.value[row][col].add(n);
    }
  } else {
    board.value[row][col] = n;
    notes.value[row][col].clear();
    
    if (checkComplete(board.value)) {
      clearInterval(timer);
      uni.showModal({
        title: '🎉 恭喜',
        content: `用时 ${formatTime(time.value)}`,
        showCancel: false,
        success: () => uni.navigateBack()
      });
    }
  }
}

function clearCell() {
  if (!selected.value) return;
  const { row, col } = selected.value;
  if (board.value[row][col] !== 0 && board.value[row][col] === solution.value[row][col]) return;
  board.value[row][col] = 0;
  notes.value[row][col].clear();
}

function toggleNoteMode() {
  noteMode.value = !noteMode.value;
}

// 计算属性：获取每个单元格的样式类名
const cellClasses = computed(() => {
  return board.value.map((row, ri) => 
    row.map((cell, ci) => {
      const isSelected = selected.value?.row === ri && selected.value?.col === ci;
      const isSame = solution.value[ri]?.[ci] === cell && cell !== 0;
      const isFixed = board.value[ri][ci] !== 0;
      const isError = cell !== 0 && cell !== solution.value[ri]?.[ci];
      return {
        selected: isSelected,
        same: isSame,
        fixed: isFixed,
        error: isError
      };
    })
  );
});

function useHint() {
  if (!selected.value) return;
  const { row, col } = selected.value;
  const hint = getHint(board.value, solution.value);
  if (hint) {
    board.value[hint[0]][hint[1]] = hint[2];
    notes.value[hint[0]][hint[1]].clear();
  }
}

function goBack() {
  uni.navigateBack();
}
</script>

<style scoped>
.game-container {
  min-height: 100vh;
  background: #1a1a2e;
  padding: 30rpx;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30rpx;
}

.back {
  color: #fff;
  font-size: 40rpx;
}

.info {
  text-align: center;
}

.difficulty {
  color: #e94560;
  font-size: 28rpx;
  display: block;
}

.timer {
  color: #fff;
  font-size: 36rpx;
  font-weight: bold;
}

.actions {
  display: flex;
  gap: 20rpx;
}

.action-btn {
  background: #16213e;
  padding: 10rpx 24rpx;
  border-radius: 8rpx;
  color: #888;
  font-size: 24rpx;
}

.action-btn .active {
  color: #e94560;
}

.board {
  background: #16213e;
  border-radius: 12rpx;
  padding: 8rpx;
  display: inline-block;
}

.row {
  display: flex;
}

.cell {
  width: 70rpx;
  height: 70rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36rpx;
  color: #fff;
  border: 1px solid #0f3460;
}

.cell:nth-child(3n) { border-right: 2px solid #e94560; }
.cell:nth-child(9) { border-right: none; }
.row:nth-child(3n) .cell { border-bottom: 2px solid #e94560; }
.row:nth-child(9) .cell { border-bottom: none; }

.cell.fixed { color: #4a90d9; }
.cell.same { background: #1e3a5f; }
.cell.selected { background: #e94560; }
.cell.error { color: #e94560; }

.notes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  font-size: 18rpx;
  color: #666;
}

.notes .active { color: #fff; }

.numpad {
  display: flex;
  justify-content: center;
  gap: 12rpx;
  margin-top: 40rpx;
  flex-wrap: wrap;
}

.num-btn {
  width: 64rpx;
  height: 80rpx;
  background: #16213e;
  border-radius: 8rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 36rpx;
}

.num-btn.disabled { opacity: 0.3; }
.num-btn.clear { background: #e94560; width: 80rpx; }
</style>