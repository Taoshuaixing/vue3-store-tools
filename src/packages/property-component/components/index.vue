<!--
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-06 15:43:06
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-20 16:43:06
-->
<template>
  <div class="li-quan">
    <div class="left">
      <span>{{ price }}</span>
      <span>{{ menKan }}</span>
    </div>
    <div class="line"></div>
    <div class="right">
      <p
        ><span>{{ isComponent ? '领券时间：' : '优惠码：' }}</span
        ><span>{{ isComponent ? startTime : yhmText }} </span></p
      >
      <div @click="copyYHM(btnText)">{{ btnText }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useClipboard } from '@vueuse/core';
  import { Toast } from 'vant';

  defineOptions({
    name: 'ZiChanComponents',
  });

  const props = defineProps({
    price: {
      type: String,
      default: '金额',
    },
    menKan: {
      type: String,
      default: '使用门槛',
    },
    startTime: {
      type: String,
      default: 'xx号 xx/ xx/ xx点',
    },
    btnText: {
      type: String,
      default: '立即领取',
    },
    bgColor: {
      type: String,
      default: '#ffebea',
    },
    wordColor: {
      type: String,
      default: '#f3414c',
    },
    btnBgColor: {
      type: String,
      default: '#f3414c',
    },
    lineBorderColor: {
      type: String,
      default: '#f3414c',
    },
    priceBold: {
      type: Boolean,
      default: false,
    },
    isComponent: {
      type: Boolean,
      default: true,
    },
    yhmText: {
      type: String,
      default: 'XXXXXXXXXX',
    },
    yhmFontSize: {
      type: Number,
      default: 12,
    },
  });
  const isBold = computed(() => {
    return props.priceBold ? 'bold' : 'normal';
  });
  const isFontSize = computed(() => {
    return `${props.yhmFontSize}px`;
  });
  function copyYHM(params: string) {
    console.log(params);
    if (params === '点击复制') {
      const { copy } = useClipboard({ source: props.yhmText });

      copy()
        .then(() =>
          Toast({
            message: '复制成功',
            icon: 'smile-o',
            position: 'top',
          }),
        )
        .catch((err) =>
          Toast({
            message: err,
            icon: 'warning',
            position: 'top',
          }),
        );
    }
  }
</script>

<style lang="scss" scoped>
  $bgColor: v-bind(bgColor);
  $wordColor: v-bind(wordColor);
  $btnBgColor: v-bind(btnBgColor);
  $lineBorderColor: v-bind(lineBorderColor);
  $isBold: v-bind(isBold);
  $isFontSize: v-bind(isFontSize);

  .li-quan {
    width: calc(100% - 20%);
    height: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: $bgColor;
    color: $wordColor;
    padding: 0 10px;
    border-radius: 10px;
    font-size: 12px;
    margin: 0 auto;

    .left {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;

      span:first-child {
        font-size: 30px;
        font-weight: $isBold;
      }
    }

    .line {
      width: 1px;
      height: 100%;
      border-right: 1px dashed $lineBorderColor;
      opacity: 0.5;
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
      word-break: break-all;
      overflow: hidden;

      p {
        font-size: $isFontSize;
        overflow: hidden;
        margin: 4px 0;
      }

      div {
        background: $btnBgColor;
        border-radius: 20px;
        padding: 2px 20px;
        // margin-top: 5px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
</style>
