<!-- 游戏首页 -->
<template>
  <view class="container">
    <view class="logo">
      <text class="title">数独</text>
      <text class="subtitle">Sudoku</text>
    </view>
    
    <view class="menu">
      <view class="menu-item" @tap="startGame('easy')">
        <text class="level-name">简单</text>
        <text class="level-desc">适合入门</text>
      </view>
      <view class="menu-item" @tap="startGame('medium')">
        <text class="level-name">中等</text>
        <text class="level-desc">适合练习</text>
      </view>
      <view class="menu-item" @tap="startGame('hard')">
        <text class="level-name">困难</text>
        <text class="level-desc">挑战自我</text>
      </view>
      <view class="menu-item" @tap="startGame('expert')">
        <text class="level-name">专家</text>
        <text class="level-desc">极限挑战</text>
      </view>
    </view>
    
    <view class="bottom-btns">
      <button class="btn" @tap="goDaily">每日挑战</button>
      <button class="btn" @tap="goRecord">我的记录</button>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    startGame(difficulty) {
      const puzzle = [
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
      ];
      const solution = [
        [5,3,4,6,7,8,9,1,2],
        [6,7,2,1,9,5,3,4,8],
        [1,9,8,3,4,2,5,6,7],
        [8,5,9,7,6,1,4,2,3],
        [4,2,6,8,5,3,7,9,1],
        [7,1,3,9,2,4,8,5,6],
        [9,6,1,5,3,7,2,8,4],
        [2,8,7,4,1,9,6,3,5],
        [3,4,5,2,8,6,1,7,9]
      ];
      uni.setStorageSync('currentGame', { puzzle, solution, difficulty, startTime: Date.now() });
      uni.navigateTo({ url: '/pages/game/index' });
    },
    goDaily() {
      uni.navigateTo({ url: '/pages/game/index?daily=true' });
    },
    goRecord() {
      uni.navigateTo({ url: '/pages/record/index' });
    }
  }
}
</script>

<style>
page {
  background: #1a1a2e;
  color: #fff;
}
.container {
  min-height: 100vh;
  background: #1a1a2e;
  padding: 30px 20px;
}
.logo {
  text-align: center;
  margin-bottom: 40px;
}
.title {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  display: block;
}
.subtitle {
  font-size: 14px;
  color: #666;
}
.menu {
  width: 100%;
}
.menu-item {
  background: #16213e;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
}
.level-name {
  font-size: 16px;
  color: #fff;
}
.level-desc {
  font-size: 12px;
  color: #888;
}
.bottom-btns {
  margin-top: 30px;
  display: flex;
  gap: 12px;
}
.btn {
  background: #e94560;
  padding: 10px 24px;
  border-radius: 20px;
  color: #fff;
  font-size: 14px;
}
</style>