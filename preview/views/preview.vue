<!--
 * @Author: 陶帅星
 * @Date: 2022-10-01 09:45:21
 * @LastEditTime: 2023-06-20 17:42:16
 * @LastEditors: 陶帅星
 * @Description: 效果预览页面
 * @FilePath: \vue3-store-tools\preview\views\preview.vue
-->
<template>
  <div class="preview">
    <!-- <div class="preview-header"><img
        src="@/assets/topNavBlack.png"
        alt="topNavBlack"
      ></div> -->
    <template
      v-for="outItem in blocks"
      :key="outItem._vid"
    >
      <slot-item
        :element="outItem"
        :models="models"
        :actions="actions"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import { Toast } from 'vant';
import router from '../router';
import SlotItem from './slot-item.vue';
import type { VisualEditorModelValue } from '@/visual-editor/visual-editor.utils';
import { CacheEnum } from '@/enums';
import initJson from '@/init.json';

export default defineComponent({
  name: 'Preview',
  components: {
    SlotItem,
  },
  setup () {
    const jsonData: VisualEditorModelValue = JSON.parse(
      localStorage.getItem(CacheEnum.PAGE_DATA_KEY) as string,
    ) || initJson;//预览页面初始化数据
    console.log(jsonData);
    console.log(initJson);

    if (!jsonData || !Object.keys(jsonData.pages)) {
      Toast.fail('当前没有可以预览的页面！');
    }

    const route = router.currentRoute;

    const currentPage = jsonData.pages[route.value.path];
    console.log('currentPage:', currentPage);

    const state = reactive({
      blocks: currentPage?.blocks,
    });

    // 如果当前页面路由匹配不到，则重定向到首页
    if (!state.blocks) {
      router.replace('/');
    }

    onMounted(() => {
      if (currentPage?.config) {
        const { bgImage, bgColor } = currentPage.config;
        const bodyStyleStr = `
            body {
                  background-color: ${bgColor};
                  background-image: url(${bgImage});
                }
             `;
        document.styleSheets[0].insertRule(bodyStyleStr);
      }
    });

    return {
      ...toRefs(state),
      actions: jsonData.actions,
      models: jsonData.models,
    };
  },
});
</script>
<style lang="scss" scoped>
.preview {
  .preview-header {
    padding: 20px 0 0;

    img {
      width: 100%;
    }
  }
}
</style>
