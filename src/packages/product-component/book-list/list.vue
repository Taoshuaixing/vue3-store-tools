<!--
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-15 14:57:13
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-20 15:31:33
-->
<template>
  <div class="list">
    <template v-if="topImg">
      <Image
        lazy-load
        fit="cover"
        :src="topImg"
        alt="标题图"
      />
    </template>
    <div
      class="list-content"
      :style="{ background: `url(${contentBgImg}) no-repeat 0 0/100% 100%` }"
    >
      <Row
        gutter="50"
        justify="space-around"
      >
        <Col
          span="12"
          v-for="item of tabs"
          ::key="item.label"
        >
        <a :href="item.value">{{ item.label }}</a>
        </Col>
      </Row>
    </div>
    <a
      v-if="bottomImg"
      class="list-footer"
      :href="bottomLink"
    >
      <Image
        lazy-load
        fit="cover"
        :src="bottomImg"
        alt="底部跳转图"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Image, Row, Col } from 'vant';
defineOptions({
  name: 'List',
});
const props = defineProps({
  tabs: {
    type: Array as any,
    default: () => [],
  },
  topImg: {
    type: String,
    default: '',
  },
  contentBgImg: {
    type: String,
    default: '',
  },
  bottomImg: {
    type: String,
    default: '',
  },
  listBgColor: {
    type: String,
    default: '#fff',
  },
  textColor: {
    type: String,
    default: '#333',
  },
  listRadio: {
    type: Boolean,
    default: false,
  },
  bottomLink: {
    type: String,
    default: '',
  },
});
console.log(props.tabs);
const isListRadio = computed(() => {
  return props.listRadio ? '1rem' : '0';
});
</script>

<style lang="scss" scoped>
$listBgColor: v-bind(listBgColor);
$textColor: v-bind(textColor);
$isListRadio: v-bind(isListRadio);

.van-image {
  display: block;
}

.list {
  background: $listBgColor;
  width: 100%;
  border-radius: $isListRadio;
  margin: 0 0.3rem 0.5rem;
  transition: all 0.5s ease-in-out;

  img {
    display: block;
    width: 100%;
  }

  .list-content {
    overflow: hidden;
    padding: 0.5rem 2rem;

    a {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0.5rem;
      color: var(--46ba16d4-textColor);
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #fc5757;
      }
    }
  }
}
</style>
