/*
 * @Author: 陶帅星
 * @Date: 2022-10-01 09:45:21
 * @LastEditTime: 2023-06-17 22:51:21
 * @LastEditors: 陶帅星
 * @Description: 图片组件
 * @FilePath: \vue3-store-tools\src\packages\base-widgets\image\index.tsx
 */
import { onMounted, computed } from 'vue';

import { Image } from 'vant';
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import {
  createEditorInputProp,
  createEditorSelectProp,
  createEditorSwitchProp,
} from '@/visual-editor/visual-editor.props';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';

export default {
  key: 'image',
  moduleName: 'baseWidgets',
  label: '图片',
  resize: {
    width: true,
    height: true,
  },
  preview: () => (
    <div style="text-align:center;width: 40%;">
      <Image src="//img61.ddimg.cn/upload_img/00858/cms_shop/dd-product-default-1598151693.png" />
    </div>
  ),
  render: ({ props, styles, block }) => {
    const { registerRef } = useGlobalProperties();
    const style = computed(() => ({
      padding: props.isPadding ? '0 3px' : '10px 3px',
    }));
    onMounted(() => {
      const compEl = window.$$refs[block._vid]?.$el;
      compEl.parentNode.parentNode.parentNode.style.padding = '0';
      compEl.parentNode.parentNode.parentNode.style.margin = '0';
    });

    return () => (
      <div style={styles}>
        <div style={style.value}>
          <Image ref={(el) => registerRef(el, block._vid)} {...props} />
        </div>
      </div>
    );
  },
  props: {
    src: createEditorInputProp({
      label: '图片链接',
      defaultValue: '//img61.ddimg.cn/upload_img/00858/cms_shop/dd-product-default-1598151693.png',
    }),
    width: createEditorInputProp({ label: '宽度', defaultValue: 100 }),
    height: createEditorInputProp({ label: '高度', defaultValue: 100 }),
    errorIcon: createEditorInputProp({ label: '失败时提示的图标名称或图片链接' }),
    isPadding: createEditorSwitchProp({
      label: '是否取消上下边距',
      defaultValue: false,
    }),
    fit: createEditorSelectProp({
      label: '图片填充模式',
      options: [
        {
          label: '保持宽高缩放图片，使图片的长边能完全显示出来',
          value: 'contain',
        },
        {
          label: '保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边',
          value: 'cover',
        },
        {
          label: '拉伸图片，使图片填满元素',
          value: 'fill',
        },
        {
          label: '保持图片原有尺寸',
          value: 'none',
        },
        {
          label: '取 none 或 contain 中较小的一个',
          value: 'scale-down',
        },
      ],
      defaultValue: 'fill',
    }),
    iconPrefix: createEditorInputProp({
      label: '图标类名前缀',
      tips: '图标类名前缀，同 Icon 组件的 class-prefix 属性',
    }),
    iconSize: createEditorInputProp({ label: '加载图标和失败图标的大小' }),
    lazyLoad: createEditorSwitchProp({
      label: '是否开启图片懒加载',
      defaultValue: true,
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
