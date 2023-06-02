import { createVisualEditorConfig } from './visual-editor/visual-editor.utils';
import baseWidgets from '@/packages/base-widgets';
import containerComponent from '@/packages/container-component';
import propertyComponent from '@/packages/property-component';
import productComponent from '@/packages/product-component';

export const visualConfig = createVisualEditorConfig();
// 注册基础控件
Object.entries(baseWidgets).forEach(([name, widget]) =>
  visualConfig.registry('baseWidgets', name, widget),
);
// 注册容器组件
Object.entries(containerComponent).forEach(([name, widget]) =>
  visualConfig.registry('containerComponents', name, widget),
);
// 注册资产组件
Object.entries(propertyComponent).forEach(([name, widget]) =>
  visualConfig.registry('propertyComponents', name, widget),
);
// 注册图片组件
Object.entries(productComponent).forEach(([name, widget]) =>
  visualConfig.registry('productComponents', name, widget),
);

console.log(
  `%c成功加载组件数量:${Object.keys(visualConfig.componentMap).length}`,
  'color:#409EFF;background-color:#ecf5ff;padding:0 10px;line-height:2;margin-bottom:4px;',
);

console.log('visualConfig:', visualConfig);
