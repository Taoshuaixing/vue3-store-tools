/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-02 19:28:01
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-02 19:28:11
 */
import { VisualEditorComponent } from '@/visual-editor/visual-editor.utils';

const modules = import.meta.globEager('./*/index.tsx');

const components: Record<string, VisualEditorComponent> = {};

Object.keys(modules).forEach((key: string) => {
  const name = key.replace(/\.\/(.*)\/index\.(tsx|vue)/, '$1');
  components[name] = modules[key]?.default || modules[key];
});

console.log(components, 'product-component');
export default components;
