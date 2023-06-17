/*
 * @Author: 陶帅星
 * @Date: 2022-10-01 09:45:21
 * @LastEditTime: 2023-06-16 14:20:18
 * @LastEditors: 陶帅星
 * @Description: 分割线
 * @FilePath: \vue3-store-tools\src\packages\base-widgets\divider\index.tsx
 */

import { CountDown, Sticky } from 'vant';

import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import {
  createEditorDatePickerProp,
  createEditorColorProp,
} from '@/visual-editor/visual-editor.props';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';

export default {
  key: 'countDown',
  moduleName: 'baseWidgets',
  label: '倒计时',
  preview: () => <CountDown format="DD 天 HH 时 mm 分 ss 秒" />,
  render: ({ props, block }) => {
    const { registerRef } = useGlobalProperties();

    const style = computed(() => ({
      width: '100%',
      textAlign: 'center',
      fontSize: '15px',
      padding: '0.5rem 0',
      color: props['text-color'],
      background: props['bg-color'],
    }));

    return () => (
      <Sticky>
        <CountDown
          ref={(el) => registerRef(el, block._vid)}
          {...props}
          format="DD 天 HH 时 mm 分 ss 秒"
          time={Date.parse(props.dateTime) - new Date().valueOf()}
          style={style.value}
        />
      </Sticky>
    );
  },
  props: {
    dateTime: createEditorDatePickerProp({
      label: '抢券时间',
      defaultValue: new Date(),
      types: 'datetime',
    }),
    'text-color': createEditorColorProp({ label: '文本颜色' }),
    'bg-color': createEditorColorProp({ label: '背景颜色' }),
  },
} as VisualEditorComponent;
