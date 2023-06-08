/*
 * @Author: 陶帅星
 * @Date: 2022-10-01 13:22:14
 * @LastEditTime: 2021-07-11 11:05:06
 * @LastEditors: 陶帅星
 * @Description: 基础组件
 * @FilePath: \vue3-store-tools\src\visual-editor\components\left-aside\components\base-widgets\index.tsx
 */
import { defineComponent, ref } from 'vue';
import { cloneDeep } from 'lodash-es';
import { Edit } from '@element-plus/icons-vue';
import styles from './index.module.scss';
import { visualConfig } from '@/visual.config';
import { createNewBlock } from '@/visual-editor/visual-editor.utils';
import DraggableTransitionGroup from '@/visual-editor/components/simulator-editor/draggable-transition-group.vue';

export default defineComponent({
  name: 'BaseWidgets',
  label: '基本组件',
  order: 3,
  icon: Edit,
  setup() {
    const baseWidgets = ref(visualConfig.componentModules.baseWidgets);

    const log = (evt) => {
      window.console.log('onChange:', evt);
    };
    // 克隆组件
    const cloneDog = (comp) => {
      console.log('当前拖拽的组件：', comp);
      const newComp = cloneDeep(comp);
      return createNewBlock(newComp);
    };

    return () => (
      <>
        <DraggableTransitionGroup
          class={styles.listGroup}
          v-model={baseWidgets.value}
          group={{ name: 'components', pull: 'clone', put: false }}
          clone={cloneDog}
          onChange={log}
          itemKey={'key'}
        >
          {{
            item: ({ element }) => (
              <div class={styles.listGroupItem} data-label={element.label}>
                {element.preview()}
              </div>
            ),
          }}
        </DraggableTransitionGroup>
      </>
    );
  },
});
