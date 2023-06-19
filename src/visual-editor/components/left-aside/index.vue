<!--
 * @Author: 陶帅星
 * @Date: 2022-10-24 00:35:17
 * @LastEditTime: 2023-06-08 17:39:44
 * @LastEditors: 陶帅星
 * @Description: 左侧边栏
 * @FilePath: /vue3-store-tools/src/visual-editor/components/left-aside/index.vue
-->
<template>
  <el-collapse
    v-model="activeName"
    class="left-aside"
  >
    <el-scrollbar height="90vh">
      <template
        v-for="tabItem in tabs"
        :key="tabItem.name"
      >
        <el-collapse-item
          :name="tabItem.name"
          @click="handleChange(tabItem.name)"
        >
          <template #title>
            <div class="collapse-item">
              <el-icon :size="26">
                <component :is="tabItem.icon" />
              </el-icon>
              {{ tabItem.label }}
            </div>
          </template>
          <component
            :is="tabItem.comp"
            v-bind="$attrs"
          />
        </el-collapse-item>
      </template>
    </el-scrollbar>
  </el-collapse>
</template>

<script lang="ts" setup>
/**
 * @description 左侧边栏
 */
import { ref } from 'vue';
import components from './components';

defineOptions({
  name: 'LeftAside',
});

const tabs = Object.entries(components)
  .map(([name, component]) => {
    const { label, icon, order } = component;
    return { label, icon, name, order, comp: component };
  })
  .sort((a, b) => a.order - b.order);
console.log(tabs);
const handleChange = (val: string) => { };
const activeName = ref(tabs[3].name);
</script>

<style lang="scss" scoped>
.left-aside {
  height: 100%;
  contain: layout;
  padding-left: 5%;

  .collapse-item {
    font-size: 15px;
    @apply flex flex-row items-center justify-center;

    [class^='el-icon'] {
      font-size: 20px;
      margin-right: 10px;
    }

    :hover {
      color: #fc5757;
    }

    transition: all 0.3s;
  }

  :hover {
    color: #fc5757;
  }
}

.is-active .collapse-item {
  color: #fc5757;
}

// :color="'#fc5757'"</style>
