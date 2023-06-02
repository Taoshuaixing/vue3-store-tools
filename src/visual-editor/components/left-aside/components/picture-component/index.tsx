/*
 * @Author: 陶帅星
 * @Date: 2022-10-01 13:22:14
 * @LastEditTime: 2023-06-02 16:58:21
 * @LastEditors: 陶帅星
 * @Description:
 * @FilePath: \vite-vue3-lowcode\src\visual-editor\components\left-aside\components\container-component\index.tsx
 */
import { defineComponent } from 'vue';
import { cloneDeep } from 'lodash-es';
import Draggable from 'vuedraggable';
import { Box } from '@element-plus/icons-vue';
import styles from '../base-widgets/index.module.scss';
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import { visualConfig } from '@/visual.config';
import { createNewBlock } from '@/visual-editor/visual-editor.utils';

export default defineComponent({
  name: 'ContainerComponent',
  label: '图片组件',
  icon: Box,
  order: 7,
  setup() {
    const log = (evt) => {
      window.console.log(evt);
    };
    // 克隆组件
    const cloneDog = (comp) => {
      console.log('当前拖拽的组件：', comp);
      const newComp = cloneDeep(comp);
      return createNewBlock(newComp);
    };

    return () => (
      <>
        <Draggable
          class={styles.listGroup}
          sort={false}
          forceFallback={false}
          list={visualConfig.componentModules.pictureComponents}
          group={{ name: 'components', pull: 'clone', put: false }}
          clone={cloneDog}
          item-key="_vid"
          onChange={log}
        >
          {{
            item: ({ element }: { element: VisualEditorComponent }) => (
              <div class={styles.listGroupItem} data-label={element.label}>
                {element.preview()}
              </div>
            ),
          }}
        </Draggable>
      </>
    );
  },
});
