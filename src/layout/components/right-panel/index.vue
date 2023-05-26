<template>
  <div>
    <el-tabs
      v-model="activeName"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="属性"
        name="first"
      >属性</el-tab-pane>
      <el-tab-pane
        label="样式"
        name="second"
      >样式</el-tab-pane>
      <el-tab-pane
        label="数据源"
        name="third"
      >数据源</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

defineOptions({
  name: 'RightPanel',
});
const activeName = ref('first')
const list: any = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
console.log(list);

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang='scss' scoped>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>

