/*
 * @Author: 陶帅星
 * @Date: 2021-05-04 05:36:58
 * @LastEditTime: 2023-06-14 19:22:06
 * @LastEditors: 陶帅星
 * @Description: 推荐商品项
 * @FilePath: \vue3-store-tools\src\packages\base-widgets\tabbar\tabbar-item.tsx
 */
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import { createEditorInputProp } from '@/visual-editor/visual-editor.props';

export const getCardItem = (): VisualEditorComponent => ({
  key: 'card-item',
  moduleName: 'productComponents',
  label: '推荐商品',
  preview: () => <></>,
  render: () => () => <></>,
  props: {
    productId: createEditorInputProp({ label: '坑位展示品', defaultValue: '' }),
    bottomText: createEditorInputProp({
      label: '底部文案',
      tips: '四个字为最佳体验',
      defaultValue: '爆品推荐',
    }),
    topText: createEditorInputProp({ label: '品说明文案', defaultValue: '童书新书' }),
    // isRadio: createEditorSwitchProp({ label: '是否圆角显示', defaultValue: true }),
    bgColor: createEditorInputProp({
      label: '坑位背景颜色',
      tips: '支持渐变颜色',
      defaultValue: '#ffc5da',
    }),
    textColor: createEditorInputProp({
      label: '文案颜色',
      tips: '支持渐变颜色',
      defaultValue: '#333',
    }),
  },
});
