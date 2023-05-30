<!--
 * @Author: 卜启缘
 * @Date: 2021-06-24 00:35:17
 * @LastEditTime: 2022-07-02 18:26:09
 * @LastEditors: 卜启缘
 * @Description: 左侧边栏
 * @FilePath: /vite-vue3-lowcode/src/visual-editor/components/left-aside/index.vue
-->
<template>
  <el-collapse
    v-model="activeName"
    @change="handleChange"
    class="left-aside"
  >
    <template
      v-for="tabItem in tabs"
      :key="tabItem.name"
    >
      <el-collapse-item
        :title="tabItem.label"
        :name="tabItem.order"
      >
        <template #label>
          <div class="tab-item">
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
const handleChange = (val: string[]) => {
  console.log(val)
}
const activeName = ref(tabs[0].name);
</script>

<style lang="scss" scoped>
.left-aside {
  height: 100%;
  contain: layout;

  > :deep(.el-tabs__header) {
    margin-right: 0;

    .el-tabs__item {
      height: 80px;
      padding: 20px 16px;

      .tab-item {
        @apply flex flex-col items-center justify-center;

        [class^='el-icon-'] {
          font-size: 20px;
        }
      }
    }
  }

  > :deep(.el-tabs__content) {
    height: 100%;
    overflow-y: auto;
  }
}
</style>
