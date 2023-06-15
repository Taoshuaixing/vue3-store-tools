/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-09 15:37:36
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-15 11:48:09
 */
import DefaultComponents from './default.vue';
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import {
  createEditorInputProp,
  createEditorDatePickerProp,
  createEditorRadioProp,
  createEditorColorProp,
} from '@/visual-editor/visual-editor.props';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
export default {
  key: 'defaultProduct',
  moduleName: 'productComponents',
  label: '普通商品',
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
    floorEnd: createEditorDatePickerProp({
      label: '楼层上下线时间 ',
      defaultValue: '',
      tips: '未配置组件上下线时间时，发布后该组件立即生效',
      types: 'datetimerange',
    }),
    blockStyle: createEditorRadioProp({
      label: '坑位样式',
      defaultValue: '8',
      options: [
        {
          label: '一行三列',
          value: '8',
        },
        {
          label: '一行两列',
          value: '12',
        },
        {
          label: '一行一列',
          value: '24',
        },
      ],
    }),
    isTitle: createEditorRadioProp({
      label: '是否显示标题',
      defaultValue: 'true',
      options: [
        {
          label: '显示',
          value: 'true',
        },
        {
          label: '不显示',
          value: 'false',
        },
      ],
    }),
    iscenter: createEditorRadioProp({
      label: '标题居中或靠左显示',
      defaultValue: 'center',
      options: [
        {
          label: '居中',
          value: 'center',
        },
        {
          label: '靠左',
          value: 'left',
        },
      ],
    }),
    isFillet: createEditorRadioProp({
      label: '标题是否圆角',
      defaultValue: '1rem',
      options: [
        {
          label: '圆角',
          value: '1rem',
        },
        {
          label: '不圆角',
          value: '0',
        },
      ],
    }),

    bgColor: createEditorColorProp({
      label: '标题背景颜色',
      defaultValue: '#fff',
    }),
    textColor: createEditorColorProp({
      label: '标题文字颜色',
      defaultValue: '#fc5757',
    }),
    text: createEditorInputProp({ label: '标题内容', defaultValue: '楼层标题' }),

    titleImg: createEditorInputProp({
      label: '标题背景图',
      defaultValue: '',
    }),
    titleLink: createEditorInputProp({
      label: '标题跳转链接',
      defaultValue: '',
    }),
    productId: createEditorInputProp({
      label: '商品ID',
      defaultValue: '29353542,25214219,25344877',
      types: 'textarea',
      tips: '商品id之间英文逗号隔开，每个楼层30个品展示效果最佳',
    }),
    isSlider: createEditorRadioProp({
      label: '商品是否为滑动显示',
      defaultValue: 'wrap',
      options: [
        {
          label: '不滑动',
          value: 'wrap',
        },
        {
          label: '滑动',
          value: 'nowrap',
        },
      ],
    }),
    productIsFillet: createEditorRadioProp({
      label: '商品是否圆角',
      defaultValue: '1rem',
      options: [
        {
          label: '圆角',
          value: '1rem',
        },
        {
          label: '不圆角',
          value: '0',
        },
      ],
    }),
  },
} as VisualEditorComponent;
