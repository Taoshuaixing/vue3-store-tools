<!--
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-06 15:43:06
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-06 16:41:02
-->
<template>
  <div class='li-quan'>
    <div class='left'>
      <span>{{ price }}</span>
      <span>{{ menKan }}</span>
    </div>
    <div class='line'></div>
    <div class='right'>
      <span>{{ startTime }} </span>
      <div>{{ btnText }}</div>
    </div>
  </div>
</template>

<script setup lang='ts'>

defineOptions({
  name: "ziChanComponents"
})

const props = defineProps({
  price: {
    type: String,
    default: '金额'
  },
  menKan: {
    type: String,
    default: '使用门槛'
  },
  startTime: {
    type: String,
    default: '抢券时间:xx号 xx/ xx/ xx点'
  },
  btnText: {
    type: String,
    default: '立即领取'
  }
})

</script>

<style lang='scss' scoped>
.li-quan {
  width: calc(100% - 70px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  background: #ffebea;
  color: #f3414c;
  padding: 13px;
  border-radius: 10px;
  font-size: 12px;
  margin: 0 auto;

  .left {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 15px;

    span:first-child {
      font-size: 20px;
    }
  }

  .line {
    width: 1px;
    height: 100%;
    border-right: 1px dashed #f3414c;
    opacity: 0.3;
    margin-left: 2px;
  }

  .right {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 20px;
    box-sizing: border-box;

    div {
      background-color: #f3414c;
      border-radius: 20px;
      padding: 0px 20px;
      color: #fff;
      margin-top: 8px;
    }
  }
}
</style>
