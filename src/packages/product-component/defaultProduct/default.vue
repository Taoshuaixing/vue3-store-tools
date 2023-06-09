<!--
 * @Descripttion: 
 * @version: 
 * @Author: 陶帅星
 * @Date: 2023-06-09 15:51:21
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-09 19:35:25
-->
<template>
  <Row
    gutter="10"
    justify="space-around"
    style="padding: 0 0.3rem;"
  >
    <Col span="24">
    <div class="product-title"><span>{{ floorTitle }}</span><a href="">更多></a></div>
    </Col>
    <Col
      span="8"
      v-for="(item, key) of defaultData"
      :key="key"
    >
    <a class="product">
      <div class="product-header">
        <Image
          lazy-load
          :src="getProductImg(item.imgId)"
          :alt="item.title"
          fit="cover"
        />
        <h2>{{ item.title }}</h2>
      </div>
      <div class="product-content">
        <span
          v-for="t of item.tag"
          :style="t === '券' ? { border: 'none', background: '#fc5757', color: ' #fff' } : {}"
        >{{ t }}</span>
      </div>
      <div class="product-footer">
        <span>{{ item.price }}</span><span>{{ item.oldPrice }}</span>
      </div>
    </a>
    </Col>
  </Row>
</template>

<script setup lang='ts'>
import { Col, Row, Image, Lazyload } from 'vant'
import { ref, reactive } from 'vue'

defineOptions({
  name: "defaultComponents"
})
const floorTitle = ref('楼层标题')
const defaultData: Array<any> = [
  {
    imgId: 29353542,
    title: '小鸡球球触感玩具书:全5册（升级点读版，纸板书、触摸发声书、翻翻书、洞洞书）',
    price: '146.30',
    oldPrice: '325.00',
    tag: [
      '自营', '券', '预售'
    ]
  },
  {
    imgId: 25214219,
    title: '原声触摸发声书：听，什么声音（套装全6册）',
    price: '132.00',
    oldPrice: '330.00',
    tag: [
      '自营', '券',
    ]
  },
  {
    imgId: 25344877,
    title: '我的第一套自然认知书（第一辑，全20册）',
    price: '120.00',
    oldPrice: '240.00',
    tag: [
      '券',
    ]
  }
]
const props = defineProps({
  text: {
    type: String,
    default: '金额'
  },
})

// 通过商品id获取图片
function getProductImg (_pid: any) {
  let varImgURL: any =
    'http://img3m{0}.ddimg.cn/{1}/{2}/{3}-{4}_{5}_{6}.jpg';
  return varImgURL = varImgURL.replace('{0}', _pid % 10).replace('{1}', _pid % 99).replace('{2}', _pid % 37).replace('{3}', _pid).replace('{4}', '1').replace('{5}', 'h').replace('{6}', _pid % 10);
}
// console.log(getProductImg(23323691))

</script>

<style lang='less' scoped>
.product-title {
  position: relative;
  padding: 0.5rem 2rem;
  background: #fff;
  border-radius: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;

  span {
    font-size: 1.4rem;
    font-weight: 700;
  }

  a {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.5rem;
  }
}

.product {
  display: block;
  border-radius: 1rem;
  overflow: hidden;
  background: #fff;
  padding: 0.3rem;

  .product-header {
    h2 {
      font-size: 0.8rem;
      color: #141414;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
      margin: 0.2rem 0;
    }
  }

  .product-content {
    span {
      font-size: 0.7rem;
      color: #fc5757;
      border: 1px solid #fc5757;
      padding: 0.1rem 0.3rem;
      border-radius: 0.2rem;
      margin-right: 0.2rem;
    }
  }

  .product-footer {
    margin-top: 0.2rem;

    span {
      color: #fc5757;
      font-size: 1.1rem;
      font-weight: 500;
    }

    span:last-child {
      color: #9c9c9c;
      font-size: 0.8rem;
      text-decoration: line-through;
      margin-left: 0.3rem;
    }
  }
}
</style>