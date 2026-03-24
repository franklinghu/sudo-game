<!-- 游戏首页 -->
<template>
  <view class="container">
    <view class="logo">
      <text class="title">数独</text>
      <text class="subtitle">Sudoku</text>
    </view>
    
    <view class="menu">
      <view class="menu-item" @click="startGame('easy')">
        <text class="level-name">简单</text>
        <text class="level-desc">适合入门</text>
      </view>
      <view class="menu-item" @click="startGame('medium')">
        <text class="level-name">中等</text>
        <text class="level-desc">适合练习</text>
      </view>
      <view class="menu-item" @click="startGame('hard')">
        <text class="level-name">困难</text>
        <text class="level-desc">挑战自我</text>
      </view>
      <view class="menu-item" @click="startGame('expert')">
        <text class="level-name">专家</text>
        <text class="level-desc">极限挑战</text>
      </view>
    </view>
    
    <view class="bottom-btns">
      <view class="btn" @click="goDaily">
        <text>每日挑战</text>
      </view>
      <view class="btn" @click="goRecord">
        <text>我的记录</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { generatePuzzle } from '../../utils/sudoku';

function startGame(difficulty) {
  const { puzzle, solution } = generatePuzzle(difficulty);
  uni.setStorageSync('currentGame', { puzzle, solution, difficulty, startTime: Date.now() });
  uni.navigateTo({ url: '/pages/game/index?difficulty=' + difficulty });
}

function goDaily() {
  uni.navigateTo({ url: '/pages/game/index?daily=true' });
}

function goRecord() {
  uni.navigateTo({ url: '/pages/record/index' });
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  background: #1a1a2e;
  padding: 60rpx 40rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  text-align: center;
  margin-bottom: 80rpx;
}

.title {
  font-size: 80rpx;
  font-weight: bold;
  color: #fff;
  display: block;
}

.subtitle {
  font-size: 28rpx;
  color: #666;
  letter-spacing: 4rpx;
}

.menu {
  width: 100%;
}

.menu-item {
  background: #16213e;
  border-radius: 16rpx;
  padding: 30rpx;
  margin-bottom: 24rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #0f3460;
}

.level-name {
  font-size: 32rpx;
  color: #fff;
  font-weight: 500;
}

.level-desc {
  font-size: 24rpx;
  color: #888;
}

.bottom-btns {
  margin-top: 60rpx;
  display: flex;
  gap: 24rpx;
}

.btn {
  background: #e94560;
  padding: 20rpx 48rpx;
  border-radius: 40rpx;
}

.btn text {
  color: #fff;
  font-size: 28rpx;
}
</style>