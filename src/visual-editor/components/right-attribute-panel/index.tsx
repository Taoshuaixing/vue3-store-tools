/*
 * @Author: 陶帅星
 * @Date: 2022-10-01 13:22:14
 * @LastEditTime: 2023-06-09 14:32:02
 * @LastEditors: 陶帅星
 * @Description: 属性编辑器
 * @FilePath: \vue3-store-tools\src\visual-editor\components\right-attribute-panel\index.tsx
 * RightAttributePanel
 */

import { defineComponent, reactive, watch } from 'vue';
import { ElTabPane, ElTabs } from 'element-plus';
import { DArrowLeft, DArrowRight } from '@element-plus/icons-vue';
import styles from './index.module.scss';
// import { AttrEditor, Animate, PageSetting, EventAction, FormRule } from './components';
import { AttrEditor, Animate, PageSetting } from './components';
import { useVisualData } from '@/visual-editor/hooks/useVisualData';

export default defineComponent({
  name: 'RightAttributePanel',
  setup() {
    const { currentBlock } = useVisualData();

    const state = reactive({
      activeName: 'attr',
      isOpen: true,
    });

    watch(
      () => currentBlock.value.label,
      (newLabel) => {
        if (!newLabel?.startsWith('表单') && state.activeName == 'form-rule') {
          state.activeName = 'attr';
        }
      },
    );

    return () => (
      <>
        <div class={[styles.drawer, { [styles.isOpen]: state.isOpen }]}>
          <div class={styles.floatingActionBtn} onClick={() => (state.isOpen = !state.isOpen)}>
            {state.isOpen ? <DArrowRight /> : <DArrowLeft />}
          </div>
          <div class={styles.attrs}>
            <ElTabs
              v-model={state.activeName}
              type="border-card"
              stretch={true}
              class={styles.tabs}
            >
              <ElTabPane label="属性" name="attr">
                <AttrEditor />
              </ElTabPane>
              <ElTabPane label="动画" name="animate" lazy>
                <Animate />
              </ElTabPane>
              {/* <ElTabPane label="事件" name="events">
                <EventAction />
              </ElTabPane> */}
              {/* {currentBlock.value.label?.startsWith('表单') ? (
                <ElTabPane label="规则" name="form-rule" lazy>
                  <FormRule />
                </ElTabPane>
              ) : null} */}
              <ElTabPane label="页面设置" name="page-setting">
                <PageSetting />
              </ElTabPane>
            </ElTabs>
          </div>
        </div>
      </>
    );
  },
});
