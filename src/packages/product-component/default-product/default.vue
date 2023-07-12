<!--
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-09 15:51:21
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-20 15:44:46
-->
<template>
  <div class="layout">
    <div
      v-if="isTitle == 'true' ? true : false"
      class="product-title"
      :style="{
        background: `${props.bgColor} url(${props.titleImg}) no-repeat`,
        'background-size': ' 100% 100%',
      }"
      ><span>{{ text }}</span
      ><a :href="titleLink">更多></a></div
    >
    <Row justify="start">
      <Col v-for="(item, key) of defaultData" :key="key" :span="Number(blockStyle)">
        <a class="product" :href="'http://product.m.dangdang.com/' + item.imgId + '.html'">
          <div class="product-header">
            <Image
              lazy-load
              :src="
                item.imgId.length == 8
                  ? getProductImg(item.imgId)
                  : '//img61.ddimg.cn/upload_img/00858/cms_shop/dd-product-default-1598151693.png'
              "
              :alt="item.title"
              fit="cover"
              :radius="productIsFillet"
              :style="{ transition: 'all 0.5s ease-in-out' }"
            />
            <h2>{{ item.title }}</h2>
          </div>
          <div class="product-content">
            <span
              v-for="t of item.tag"
              :style="t === '券' ? { border: 'none', background: '#fc5757', color: ' #fff' } : {}"
              >{{ t }}</span
            >
          </div>
          <div class="product-footer">
            <span>{{ item.price }}</span
            ><span>{{ item.oldPrice }}</span>
          </div>
        </a>
      </Col>
    </Row>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { Col, Row, Image } from 'vant';
  import { getProductImg } from '@/hooks/default';

  defineOptions({
    name: 'DefaultComponents',
  });

  const props = defineProps({
    text: {
      type: String,
      default: '楼层标题',
    },
    isTitle: {
      type: String,
      default: 'true',
    },
    bgColor: {
      type: String,
      default: '#fff',
    },
    textColor: {
      type: String,
      default: '#fc5757',
    },
    isFillet: {
      type: String,
      default: '1rem',
    },
    blockStyle: {
      type: String,
      default: '8',
    },
    titleImg: {
      type: String,
      default: '',
    },
    titleLink: {
      type: String,
      default: '',
    },
    productId: {
      type: String,
      default: '29353542,25214219,25344877',
    },
    iscenter: {
      type: String,
      default: 'center',
    },
    isSlider: {
      type: String,
      default: 'wrap',
    },
    productIsFillet: {
      type: String,
      default: '1rem',
    },
  });
  const defaultData = computed(() => {
    const toArr = props.productId.split(',');
    const res: any = [];
    toArr.map((item) => {
      if (item && item.toString().length == 8) {
        res.push({
          imgId: item,
          title: '小鸡球球触感玩具书:全5册（升级点读版，纸板书、触摸发声书、翻翻书、洞洞书）',
          price: `${Math.floor(Math.random() * 100 + 100)}.00`,
          oldPrice: `${Math.floor(Math.random() * 400 + 100)}.00`,
          tag: ['自营', '券', '预售'],
        });
      }
    });
    // console.log(res);
    return res;
  });
  const flexWidth = computed(() => {
    return props.isSlider == 'wrap' && props.blockStyle == '8' ? '33.33333333%' : '30.33333333%';
  });
  const flexWidthNext = computed(() => {
    return props.isSlider == 'wrap' && props.blockStyle == '12' ? '50%' : '40%';
  });
  const flexWidthLast = computed(() => {
    return props.isSlider == 'wrap' && props.blockStyle == '24' ? '100%' : '80%';
  });
</script>

<style lang="scss" scoped>
  $textColor: v-bind(textColor);
  $isFillet: v-bind(isFillet);
  $titleUrl: v-bind(titleImg);
  $iscenter: v-bind(iscenter);
  $isSlider: v-bind(isSlider);
  $flexWidth: v-bind(flexWidth);
  $flexWidthNext: v-bind(flexWidthNext);
  $flexWidthLast: v-bind(flexWidthLast);
  $productIsFillet: v-bind(productIsFillet);

  .van-image {
    width: 100%;
    height: 100%;
  }

  .van-row {
    display: flex;
    overflow: hidden;
    flex-wrap: $isSlider;
    overflow-x: auto;
  }

  .van-col--8,
  .van-col--12,
  .van-col--24 {
    transition: all 0.5s ease-in-out;
  }

  .van-col--8 {
    flex: 0 0 $flexWidth;
  }

  .van-col--12 {
    flex: 0 0 $flexWidthNext;
  }

  .van-col--24 {
    flex: 0 0 $flexWidthLast;
  }

  .layout {
    overflow: hidden;
    width: 100%;
  }

  .product-title {
    position: relative;
    padding: 0.4rem 2rem;
    border-radius: $isFillet;
    margin: 0 0.25rem 0.5rem;
    text-align: $iscenter;
    color: $textColor;
    transition: all 0.5s ease-in-out;

    span {
      font-size: 1.2rem;
      font-weight: 700;
    }

    a {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0.5rem;
      cursor: pointer;
      color: inherit;
    }
  }

  .product {
    display: block;
    border-radius: $productIsFillet;
    overflow: hidden;
    background: #fff;
    padding: 0.3rem;
    margin: 0 0.3rem 0.5rem;
    transition: all 0.5s ease-in-out;

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
        padding: 0.1rem;
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
