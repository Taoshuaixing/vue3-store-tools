/*
 * @Author: 陶帅星
 * @Date: 2022-10-14 12:24:12
 * @LastEditTime: 2023-06-15 17:23:36
 * @LastEditors: 陶帅星
 * @Description:
 * @FilePath: \vue3-store-tools\src\packages\base-widgets\notice-bar\index.tsx
 */
import { NoticeBar } from 'vant';
import { createFieldProps } from './createFieldProps';
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';

export default {
  key: 'NoticeBar',
  moduleName: 'baseWidgets',
  label: '通知栏',
  preview: () => (
    <NoticeBar
      style={{ width: '180px' }}
      leftIcon={'volume-o'}
      text={'礼券说明:礼券领取渠道-限当当购物APP和小程序。'}
    />
  ),
  render: ({ block, props, styles }) => {
    const { registerRef } = useGlobalProperties();

    return () => (
      <div style={styles}>
        <NoticeBar ref={(el) => registerRef(el, block._vid)} style={{ width: '100%' }} {...props} />
      </div>
    );
  },
  events: [
    { label: '点击通知栏时触发', value: 'click' },
    { label: '关闭通知栏时触发', value: 'close' },
    { label: '每当滚动栏重新开始滚动时触发', value: 'replay' },
  ],
  props: createFieldProps(),
  resize: {
    width: true,
  },
  model: {
    default: '绑定字段',
  },
} as VisualEditorComponent;
