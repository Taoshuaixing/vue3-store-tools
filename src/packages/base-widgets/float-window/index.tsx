/*
 * @Author: 陶帅星
 * @Date: 2022-10-01 09:45:21
 * @LastEditTime: 2023-06-17 14:23:10
 * @LastEditors: 陶帅星
 * @Description: 分割线
 * @FilePath: \vue3-store-tools\src\packages\base-widgets\divider\index.tsx
 */

import { Image } from 'vant';

import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import {
  createEditorDatePickerProp,
  createEditorInputNumberProp,
  createEditorInputProp,
} from '@/visual-editor/visual-editor.props';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';

export default {
  key: 'floatWindow',
  moduleName: 'baseWidgets',
  label: '浮窗',
  preview: () => (
    <Image
      lazyLoad
      round
      width="5rem"
      height="5rem"
      src="//img61.ddimg.cn/upload_img/00858/cms_shop/dd-product-default-1598151693.png"
    />
  ),
  render: ({ props, styles, block }) => {
    const { registerRef } = useGlobalProperties();

    const style: any = computed(() => ({
      display: 'block',
      position: 'fixed',
      zIndex: 1000,
      top: `${props['top-bottom']}%`,
      right: `${props['left-right']}%`,
      width: `${props['width-height']}rem`,
      height: `${props['width-height']}rem`,
      borderRadius: '100%',
    }));

    return () => (
      <div style={styles}>
        <a class="float-window" style={style.value} href={props.link}>
          <img
            style={{ width: '100%', height: '100%' }}
            ref={(el) => registerRef(el, block._vid)}
            {...props}
          />
        </a>
      </div>
    );
  },
  props: {
    dateTime: createEditorDatePickerProp({
      label: '楼层上下线时间',
      defaultValue: new Date(),
      types: 'datetime',
    }),
    src: createEditorInputProp({
      label: '浮窗图片',
      defaultValue: 'https://img60.ddimg.cn/2023/6/12/2023061212583792859.gif',
    }),
    link: createEditorInputProp({
      label: '浮窗跳转',
      defaultValue: '//img61.ddimg.cn/upload_img/00858/cms_shop/dd-product-default-1598151693.png',
    }),
    'top-bottom': createEditorInputNumberProp({ label: '上下距离', defaultValue: 50, min: 0 }),

    'left-right': createEditorInputNumberProp({
      label: '两边距离',
      defaultValue: 5,
      min: 0,
      max: 80,
    }),
    'width-height': createEditorInputNumberProp({
      label: '图片大小',
      defaultValue: 5,
      min: 2,
      max: 10,
    }),
  },
  draggable: false,
  resize: {
    width: true,
  },
} as VisualEditorComponent;
