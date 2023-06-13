/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-09 15:37:36
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-13 17:56:14
 */
import AutoPlay from './AutoPlay.vue';
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import {
  createEditorInputProp,
  createEditorDatePickerProp,
} from '@/visual-editor/visual-editor.props';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
export default {
  key: 'autoPlayProduct',
  moduleName: 'productComponents',
  label: '轮播商品',
  preview: () => <AutoPlay></AutoPlay>,
  render: ({ props, block, styles }) => {
    const { registerRef } = useGlobalProperties();

    return () => (
      <div style={styles}>
        <AutoPlay ref={(el) => registerRef(el, block._vid)} {...props}></AutoPlay>
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
    floorEnd: createEditorDatePickerProp({
      label: '楼层上下线时间 ',
      defaultValue: '',
      tips: '未配置组件上下线时间时，发布后该组件立即生效',
      types: 'datetimerange',
    }),
    productId: createEditorInputProp({
      label: '商品ID',
      defaultValue: '29353542,25214219,25344877,29353542,29353542,25214219,25344877,29353542',
      types: 'textarea',
      tips: '商品id之间英文逗号隔开，每个楼层30个品展示效果最佳',
    }),
  },
} as VisualEditorComponent;
