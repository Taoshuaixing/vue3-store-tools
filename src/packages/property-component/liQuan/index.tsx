/*
 * @Author: 陶帅星
 * @Date: 2022-10-01 09:45:21
 * @LastEditTime: 2023-06-06 17:49:39
 * @LastEditors: 陶帅星
 * @Description: 图片组件
 * @FilePath: \vite-vue3-lowcode\src\packages\base-widgets\image\index.tsx
 */
// import { Image } from 'vant';
// import styles from '../index.module.scss';
import ZiChanComponent from '../components/index.vue';

// import { Picture } from '@element-plus/icons-vue';
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import { createEditorInputProp, createEditorSwitchProp } from '@/visual-editor/visual-editor.props';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';

export default {
  key: 'image',
  moduleName: 'baseWidgets',
  label: '礼券',
  resize: {
    width: true,
    height: true,
  },
  preview: () => <ZiChanComponent></ZiChanComponent>,
  render: ({ props, block }) => {
    const { registerRef } = useGlobalProperties();
    return () => <ZiChanComponent ref={(el) => registerRef(el, block._vid)} {...props} />;
  },
  props: {
    price: createEditorInputProp({
      label: '金额',
      defaultValue: '100',
    }),
    menKan: createEditorInputProp({ label: '使用门槛', defaultValue: '每满300-100' }),
    startTime: createEditorInputProp({ label: '抢券时间', defaultValue: 'XXXXXX' }),
    btnText: createEditorInputProp({ label: '按钮文字', defaultValue: '立即购买' }),

    iconPrefix: createEditorInputProp({
      label: '图标类名前缀',
      tips: '图标类名前缀，同 Icon 组件的 class-prefix 属性',
    }),
    iconSize: createEditorInputProp({ label: '加载图标和失败图标的大小' }),
    lazyLoad: createEditorSwitchProp({
      label: '是否开启图片懒加载',
      tips: '须配合 Lazyload 组件使用',
    }),
    loadingIcon: createEditorInputProp({ label: '加载时提示的图标名称或图片链接' }),
    radius: createEditorInputProp({ label: '圆角大小', tips: '默认单位为 px' }),
    round: createEditorSwitchProp({ label: '是否显示为圆形' }),
    'show-error': createEditorSwitchProp({ label: '是否展示图片加载失败提示' }),
    'show-loading': createEditorSwitchProp({ label: '是否展示图片加载中提示' }),
    alt: createEditorInputProp({ label: '替代文本' }),
  },
  events: [
    { label: '点击图片时触发', value: 'click' },
    { label: '图片加载完毕时触发', value: 'load' },
    { label: '图片加载失败时触发', value: 'error' },
  ],
} as VisualEditorComponent;
