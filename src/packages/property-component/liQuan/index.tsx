/*
 * @Author: 陶帅星
 * @Date: 2022-10-01 09:45:21
 * @LastEditTime: 2023-06-20 16:36:16
 * @LastEditors: 陶帅星
 * @Description: 图片组件
 * @FilePath: \vue3-store-tools\src\packages\base-widgets\image\index.tsx
 */
import ZiChanComponent from '../components/index.vue';

import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import {
  createEditorInputProp,
  createEditorDatePickerProp,
  createEditorSwitchProp,
} from '@/visual-editor/visual-editor.props';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';

export default {
  key: 'lq',
  moduleName: 'propertyComponents',
  label: '礼券',
  resize: {
    width: true,
    height: true,
  },
  preview: () => <ZiChanComponent></ZiChanComponent>,
  render: ({ props, block, styles }) => {
    const { registerRef } = useGlobalProperties();
    return () => (
      <div style={styles}>
        <ZiChanComponent isComponent={true} ref={(el) => registerRef(el, block._vid)} {...props} />
      </div>
    );
  },
  props: {
    price: createEditorInputProp({
      label: '金额',
      defaultValue: '100',
    }),
    priceBold: createEditorSwitchProp({
      label: '金额是否加粗显示',
    }),
    menKan: createEditorInputProp({ label: '使用门槛', defaultValue: '每满300-100' }),
    startTime: createEditorDatePickerProp({
      label: '抢券时间',
      defaultValue: '2023-06-09 11:00:00 am',
      types: 'datetime',
    }),
    btnText: createEditorInputProp({ label: '按钮文字', defaultValue: '立即购买' }),
    bgColor: createEditorInputProp({
      label: '背景颜色',
      defaultValue: '#ffebea',
      tips: '使用十六进制颜色时开头必须加 ‘#’ 号，支持linear-gradient()渐变色。',
    }),
    wordColor: createEditorInputProp({
      label: '文字颜色',
      defaultValue: '#f3414c',
      tips: '使用十六进制颜色时开头必须加 ‘#’ 号，支持linear-gradient()渐变色。',
    }),
    btnBgColor: createEditorInputProp({
      label: '按钮背景颜色',
      defaultValue: '#f3414c',
      tips: '使用十六进制颜色时开头必须加 ‘#’ 号，支持linear-gradient()渐变色。',
    }),
    lineBorderColor: createEditorInputProp({
      label: '分割线背景颜色',
      defaultValue: '#f3414c',
      tips: '使用十六进制颜色时开头必须加 ‘#’ 号，支持linear-gradient()渐变色。',
    }),
  },
} as VisualEditorComponent;
