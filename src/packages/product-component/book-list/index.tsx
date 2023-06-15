/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-09 15:37:36
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-15 16:50:06
 */
import List from './list.vue';
import type { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';
import {
  createEditorCrossSortableProp,
  createEditorInputProp,
  createEditorColorProp,
  createEditorSwitchProp,
} from '@/visual-editor/visual-editor.props';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';

const defaultValues: any = [
  {
    label: '人民日报推荐的40本好书',
    value:
      'http://m.dangdang.com/pages/ddReading/bookListSquare/bookListSquareDetail?article_id=545424&style=1',
  },
  {
    label: '罗翔老师2022年度书单',
    value:
      'http://m.dangdang.com/pages/ddReading/bookListSquare/bookListSquareDetail?article_id=548676&style=2',
  },
  {
    label: '豆瓣2022年度读书榜单',
    value:
      'http://m.dangdang.com/pages/ddReading/bookListSquare/bookListSquareDetail?article_id=548725&style=2',
  },
  {
    label: '这些桥梁书，每一本都值得珍藏',
    value:
      'http://m.dangdang.com/pages/ddReading/bookListSquare/bookListSquareDetail?article_id=552931&style=1',
  },
  {
    label: '茅盾文学奖评分最高的九本书',
    value:
      'http://m.dangdang.com/pages/ddReading/bookListSquare/bookListSquareDetail?article_id=552395&style=1',
  },
  {
    label: '985高校图书馆借阅排行榜丨文史类',
    value:
      'http://m.dangdang.com/pages/ddReading/bookListSquare/bookListSquareDetail?article_id=543527&style=1',
  },
  {
    label: '有趣易读适合小白的历史书',
    value:
      'http://m.dangdang.com/pages/ddReading/bookListSquare/bookListSquareDetail?article_id=552404&style=1',
  },
  {
    label: '哈佛大学图书馆借阅最多的书单',
    value:
      'http://m.dangdang.com/pages/ddReading/bookListSquare/bookListSquareDetail?article_id=542933&style=2',
  },
];
export default {
  key: 'bookList',
  moduleName: 'productComponents',
  label: '书单列表',
  preview: () => <List tabs={defaultValues}></List>,
  render: ({ props, block, styles }) => {
    const { registerRef } = useGlobalProperties();
    console.log(props.tabs);

    return () => (
      <div style={styles}>
        <List ref={(el) => registerRef(el, block._vid)} {...props}></List>
      </div>
    );
  },

  props: {
    tabs: createEditorCrossSortableProp({
      label: '默认选项',
      labelPosition: 'top',
      defaultValue: defaultValues.map((item) => {
        return { label: item.label, value: item.value };
      }),
    }),
    topImg: createEditorInputProp({
      label: '标题图片',
      defaultValue: 'http://img61.ddimg.cn/upload_img/00880/new/app_tsx67_08-1686128095.jpg',
    }),
    contentBgImg: createEditorInputProp({
      label: '列表背景图',
      defaultValue: 'http://img61.ddimg.cn/upload_img/00880/new/app_tsx67_09-1686128095.jpg',
    }),
    bottomImg: createEditorInputProp({
      label: '底部图片',
      defaultValue: 'http://img61.ddimg.cn/upload_img/00880/new/app_tsx67_10-1686128095.jpg',
    }),
    bottomLink: createEditorInputProp({
      label: '底部图片跳转链接',
      defaultValue: 'http://m.dangdang.com/pages/ddReading/bookListSquare/bookListSquareList',
    }),
    listBgColor: createEditorColorProp({
      label: '列表背景颜色',
      defaultValue: '#fff',
    }),
    textColor: createEditorColorProp({
      label: '列表文字颜色',
      defaultValue: '#333',
    }),
    listRadio: createEditorSwitchProp({ label: '列表是否圆角', defaultValue: false }),
  },
} as VisualEditorComponent;
