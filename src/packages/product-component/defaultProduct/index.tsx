/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-09 15:37:36
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-09 18:52:44
 */
import DefaultComponents from './default.vue';
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import {
  createEditorInputProp,
  createEditorDatePickerProp,
  createEditorRadioProp,
} from '@/visual-editor/visual-editor.props';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
export default {
  key: 'button',
  moduleName: 'baseWidgets',
  label: '按钮',
  preview: () => <DefaultComponents></DefaultComponents>,
  render: ({ props, block, styles }) => {
    const { registerRef } = useGlobalProperties();

    return () => (
      <div style={styles}>
        <DefaultComponents ref={(el) => registerRef(el, block._vid)} {...props}></DefaultComponents>
      </div>
    );
  },
  resize: {
    height: true,
    width: true,
  },
  events: [
    { label: '点击按钮，且按钮状态不为加载或禁用时触发', value: 'click' },
    { label: '开始触摸按钮时触发', value: 'touchstart' },
  ],
  props: {
    text: createEditorInputProp({ label: '按钮文字', defaultValue: '按钮' }),
    floorEnd: createEditorDatePickerProp({
      label: '楼层上下线时间 ',
      defaultValue: '',
      tips: '未配置组件上下线时间时，发布后该组件立即生效',
      types: 'datetimerange',
    }),
    blockStyle: createEditorRadioProp({
      label: '坑位样式',
      defaultValue: '一行三列',
      options: [
        {
          label: '一行三列',
          value: '一行三列',
        },
        {
          label: '一行两列',
          value: '一行两列',
        },
        {
          value: '一行一列',
          label: '一行一列',
        },
      ],
    }),
  },
} as VisualEditorComponent;
