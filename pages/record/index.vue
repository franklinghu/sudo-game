<!-- 游戏记录 -->
<template>
  <view class="container">
    <view class="header">
      <view class="back" @click="goBack">←</view>
      <text class="title">我的记录</text>
    </view>
    
    <view v-if="records.length === 0" class="empty">
      <text>暂无记录</text>
    </view>
    
    <view v-else class="record-list">
      <view v-for="(record, index) in records" :key="index" class="record-item">
        <view class="info">
          <text class="difficulty">{{ record.difficulty }}</text>
          <text class="time">{{ record.time }}</text>
        </view>
        <text class="date">{{ record.date }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const records = ref([]);

onMounted(() => {
  const data = uni.getStorageSync('gameRecords');
  if (data) {
    records.value = JSON.parse(data);
  }
});

function goBack() {
  uni.navigateBack();
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  background: #1a1a2e;
  padding: 30rpx;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 40rpx;
}

.back {
  color: #fff;
  font-size: 40rpx;
  margin-right: 20rpx;
}

.title {
  color: #fff;
  font-size: 36rpx;
}

.empty {
  text-align: center;
  padding: 100rpx;
  color: #666;
}

.record-list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.record-item {
  background: #16213e;
  border-radius: 12rpx;
  padding: 24rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 8rpx;
}

.difficulty {
  color: #e94560;
  font-size: 28rpx;
}

.time {
  color: #fff;
  font-size: 32rpx;
  font-weight: bold;
}

.date {
  color: #888;
  font-size: 24rpx;
}
</style>