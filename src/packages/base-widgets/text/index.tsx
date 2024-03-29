/*
 * @Author: 陶帅星
 * @Date: 2022-10-01 09:45:21
 * @LastEditTime: 2021-07-13 17:15:31
 * @LastEditors: 陶帅星
 * @Description: 文本
 * @FilePath: \vue3-store-tools\src\packages\base-widgets\text\index.tsx
 */
import { fontArr } from './fontArr';
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
import {
  createEditorColorProp,
  createEditorInputProp,
  createEditorSelectProp,
  createEditorInputNumberProp,
} from '@/visual-editor/visual-editor.props';

export default {
  key: 'text',
  moduleName: 'baseWidgets',
  label: '文本',
  preview: () => <span>预览文本</span>,
  render: ({ props, block, styles }) => {
    const { registerRef } = useGlobalProperties();

    return () => (
      <div
        ref={(el) => registerRef(el, block._vid)}
        style={{
          color: props.color,
          fontSize: `${parseFloat(props.size)}px`,
          fontFamily: props.font,
          ...styles,
        }}
      >
        {props.text || '默认文本'}
      </div>
    );
  },
  props: {
    text: createEditorInputProp({ label: '显示文本' }),
    font: createEditorSelectProp({ label: '字体设置', options: [...fontArr] }),
    color: createEditorColorProp({ label: '字体颜色' }),
    size: createEditorInputNumberProp({
      label: '字体大小',
      defaultValue: 16,
    }),
  },
} as VisualEditorComponent;
