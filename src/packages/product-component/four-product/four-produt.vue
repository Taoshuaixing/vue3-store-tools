<!--
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-13 16:24:13
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-15 13:53:25
-->
<template>
  <div class="auto-play">
    <template
      v-for="(item, key) of tabs"
      :key="key"
    >
      <a
        class="product"
        :href="'http://product.m.dangdang.com/' + item.block.props.productId + '.html'"
        :style="{ background: item.block.props.bgColor }"
      >
        <div class="product-img">
          <Image
            lazy-load
            fit="cover"
            :src="item.block.props.productId.length == 8 ? getProductImg(item.block.props.productId) : '//img61.ddimg.cn/upload_img/00858/cms_shop/dd-product-default-1598151693.png'"
            :alt="item.block.props.bottomText"
          />
          <span>{{ item.block.props.topText }}</span>
        </div>
        <div
          class="product-footer"
          :style="{ color: item.block.props.textColor }"
        >
          {{ item.block.props.bottomText || 'csdc' }}
        </div>
      </a>
    </template>
  </div>
</template>

<script setup lang='ts'>
import { getProductImg } from '@/hooks/default'
import { Image } from 'vant';

defineOptions({
  name: "FourProduct"
})
const props = defineProps({
  tabs: {
    type: Array as any,
    default: () => [],
  }
})

</script>

<style lang='scss' scoped>
.auto-play {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 0.5rem;

  .product {
    border-radius: 1rem;
    background: #d0d0d0;
    overflow: hidden;

    &:nth-child(even) {
      transform: scale(0.86);
    }

    .product-img {
      padding: 0.3rem;
      margin: 0.3rem;
      background: #fff;
      border-radius: 1rem;
      text-align: center;
      position: relative;

      span {
        background: rgb(160 160 160 / 50%);
        border-radius: 1rem;
        padding: 0.1rem 0.8rem;
        position: absolute;
        bottom: 4%;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.7rem;
      }
    }

    .product-footer {
      text-align: center;
      padding: 0 0 0.3rem 0;
      font-size: 1.1rem;
      color: #333;
      font-weight: 500;
    }
  }

}
</style>
