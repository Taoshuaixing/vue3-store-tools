<!--
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-03-23 14:42:54
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-09 17:35:45
-->
<template>
  <el-dialog
    v-model="dialogVisible"
    custom-class="h5-preview"
    :show-close="false"
    width="390px"
  >
    <iframe
      v-if="dialogVisible"
      :style="{ width: '100%', height: '100%' }"
      :src="previewUrl"
      frameborder="0"
      scrolling="auto"
    ></iframe>
  </el-dialog>
</template>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core';
import { BASE_URL } from '@/visual-editor/utils';

defineOptions({
  name: 'Preview',
});

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(['update:visible']);

const dialogVisible = useVModel(props, 'visible', emits);
const previewUrl = `${BASE_URL}preview/${location.hash}`;
</script>

<style lang="scss">
.h5-preview {
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 0 0 10px 5px #000;
  height: 844px;
  margin: calc((100vh - 844px) / 2) auto 0;

  .el-dialog__body {
    width: 390px;
    height: 844px;
    padding: 0;
  }

  .el-dialog__header {
    display: none;
  }

  .simulator {
    padding-right: 0;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
}
</style>
