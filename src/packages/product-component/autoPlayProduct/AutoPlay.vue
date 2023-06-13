<!--
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-13 16:24:13
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-13 17:55:06
-->
<template>
  <div class="auto-play">
    <ul class="list">
      <li
        v-for="(item, key) of  autoPlayData "
        :key="key"
      >
        <a
          class="product"
          :href="'http://product.m.dangdang.com/' + item.imgId + '.html'"
        >
          <Image
            lazy-load
            :src="getProductImg(item.imgId)"
            :alt="item.title"
            fit="cover"
            radius="2rem"
          />
          <div class="list-footer">
            {{ item.price }}
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang='ts'>
import { getProductImg } from '@/hooks/default'
import { Image } from 'vant'
defineOptions({
  name: "AutoPlay"
})
const props = defineProps({
  productId: {
    type: String,
    default: '29353542,25214219,25344877,29353542,'
  },
})

const autoPlayData = computed(() => {
  const toArr = props.productId.split(',')
  const res: any = []
  toArr.map((item) => {
    if (item && item.toString().length == 8) {
      res.push(
        {
          imgId: item,
          title: '小鸡球球触感玩具书:全5册（升级点读版，纸板书、触摸发声书、翻翻书、洞洞书）',
          price: Math.floor(Math.random() * 100 + 100) + '.00',
        }
      )
    }
  })
  return res
})
</script>

<style lang='scss' scoped>
.van-image :deep {
  border-radius: 2rem;
  padding: 0.7rem;
  overflow: hidden;
}

.auto-play {
  overflow: hidden;
  padding: 1rem 0.3rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;

  .list {
    list-style: none;


    li {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 0.3rem;
      width: 25%;
      border-radius: 2rem;
      background: #cbcbcb;
      overflow: hidden;
      margin: 0 0.4rem;
      float: left;
    }

    :nth-child(odd) {
      transform: scale(1.16);
    }

    .list-footer {
      color: #fc5757;
      font-size: 1.1rem;
      font-weight: 500;
      text-align: center;

    }
  }
}
</style>
