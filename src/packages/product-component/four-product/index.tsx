/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-09 15:37:36
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-15 14:41:38
 */
import { getCardItem } from './card-item';
import FourProduct from './four-produt.vue';
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import {
  createEditorDatePickerProp,
  createEditorTabsProp,
} from '@/visual-editor/visual-editor.props';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
import { createNewBlock } from '@/visual-editor/visual-editor.utils';
const defaultCardItems: any = [
  {
    label: '坑位1',
    value: '29353542',
    block: {
      props: {
        bottomText: '爆品推荐',
        topText: '童书新书',
        bgColor: 'linear-gradient(180deg, #fae0ea,#ffc5da)',
        textColor: '#333',
        productId: '29353542',
      },
    },
  },
  {
    label: '坑位1',
    value: '25214219',
    block: {
      props: {
        bottomText: '爆品推荐',
        topText: '童书新书',
        bgColor: 'linear-gradient(180deg, #fae0ea,#ffc5da)',
        textColor: '#333',
        productId: '25214219',
      },
    },
  },
  {
    label: '坑位1',
    value: '25344877',
    block: {
      props: {
        bottomText: '爆品推荐',
        topText: '童书新书',
        bgColor: 'linear-gradient(180deg, #fae0ea,#ffc5da)',
        textColor: '#333',
        productId: '25344877',
      },
    },
  },
  {
    label: '坑位1',
    value: '29353542',
    block: {
      props: {
        bottomText: '爆品推荐',
        topText: '童书新书',
        bgColor: 'linear-gradient(180deg, #fae0ea,#ffc5da)',
        textColor: '#333',
        productId: '29353542',
      },
    },
  },
];
export default {
  key: 'fourProduct',
  moduleName: 'productComponents',
  label: '推荐商品',
  preview: () => <FourProduct tabs={defaultCardItems}></FourProduct>,
  render: ({ props, block, styles }) => {
    const { registerRef } = useGlobalProperties();
    return () => (
      <div style={styles}>
        <FourProduct ref={(el) => registerRef(el, block._vid)} {...props}></FourProduct>
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

    tabs: createEditorTabsProp({
      label: '商品配置',
      defaultValue: defaultCardItems.map((item) => {
        const block = createNewBlock(getCardItem());
        block.props.productId = item.value;
        return { label: item.label, value: item.value, component: getCardItem(), block };
      }),
    }),
  },
} as VisualEditorComponent;
