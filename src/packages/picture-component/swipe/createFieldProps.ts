/*
 * @Author: 陶帅星
 * @Date: 2022-10-14 12:24:12
 * @LastEditTime: 2023-06-20 14:51:56
 * @LastEditors: 陶帅星
 * @Description:
 * @FilePath: \vue3-store-tools\src\packages\base-widgets\swipe\createFieldProps.ts
 */
import {
  createEditorInputProp,
  createEditorSwitchProp,
  createEditorCrossSortableProp,
} from '@/visual-editor/visual-editor.props';

const initData: any = [
  {
    label: '//img61.ddimg.cn/upload_img/00858/cms_shop/dd-product-default-1598151693.png',
    value: '',
  },
  {
    label: '//img61.ddimg.cn/upload_img/00858/cms_shop/dd-product-default-1598151693.png',
    value: '',
  },
];
export const createFieldProps = () => ({
  images: createEditorCrossSortableProp({
    label: '图片列表',
    labelPosition: 'top',
    defaultValue: initData.map((item) => {
      return { label: item.label, value: item.value };
    }),
  }),
  // width: createEditorInputProp({ label: '滑块宽度，单位为 px', defaultValue: 'auto' }),
  height: createEditorInputProp({ label: '滑块高度，单位为 px', defaultValue: '200' }),
  autoplay: createEditorInputProp({ label: '自动轮播间隔，单位为 ms', defaultValue: '3000' }),
  duration: createEditorInputProp({ label: '动画时长，单位为 ms', defaultValue: '500' }),
  indicatorColor: createEditorInputProp({ label: '指示器颜色', defaultValue: '#1989fa' }),
  initialSwipe: createEditorInputProp({ label: '初始位置索引值', defaultValue: '0' }),
  lazyRender: createEditorSwitchProp({ label: '是否延迟渲染未展示的轮播', defaultValue: false }),
  loop: createEditorSwitchProp({ label: '是否开启循环播放', defaultValue: true }),
  showIndicators: createEditorSwitchProp({ label: '是否显示指示器', defaultValue: true }),
  stopPropagation: createEditorSwitchProp({ label: '是否阻止滑动事件冒泡', defaultValue: true }),
  touchable: createEditorSwitchProp({ label: '是否可以通过手势滑动', defaultValue: true }),
  vertical: createEditorSwitchProp({ label: '是否为纵向滚动', defaultValue: false }),
});
