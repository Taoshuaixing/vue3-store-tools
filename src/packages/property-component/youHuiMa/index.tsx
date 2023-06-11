/*
 * @Author: 陶帅星
 * @Date: 2022-10-01 09:45:21
 * @LastEditTime: 2023-06-11 21:20:33
 * @LastEditors: 陶帅星
 * @Description: 图片组件
 * @FilePath: \vue3-store-tools\src\packages\base-widgets\image\index.tsx
 */
import ZiChanComponent from '../components/index.vue';

import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import {
  createEditorInputProp,
  createEditorSwitchProp,
  createEditorInputNumberProp,
} from '@/visual-editor/visual-editor.props';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';

export default {
  key: 'yhm',
  moduleName: 'propertyComponents',
  label: '优惠码',
  resize: {
    width: true,
    height: true,
  },
  preview: () => <ZiChanComponent isComponent={false} btnText={'点击复制'}></ZiChanComponent>,
  render: ({ props, block, styles }) => {
    const { registerRef } = useGlobalProperties();
    return () => (
      <div style={styles}>
        <ZiChanComponent isComponent={false} ref={(el) => registerRef(el, block._vid)} {...props} />
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
    yhmText: createEditorInputProp({
      label: '填写优惠码',
      defaultValue: 'BDGSJXJFDF',
    }),
    btnText: createEditorInputProp({ label: '按钮文字', defaultValue: '点击复制' }),
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
    yhmFontSize: createEditorInputNumberProp({
      label: '优惠码字体大小',
      defaultValue: 18,
      min: 12,
      max: 22,
      tips: '优惠码字体可选范围12-22px',
    }),
  },
} as VisualEditorComponent;
