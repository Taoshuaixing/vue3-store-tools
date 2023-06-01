/**
 * @Descripttion:
 * @version: 2.30
 * @Author: 陶帅星
 * @Date: 2023-06-01 13:52:15
 * @LastEditors: 陶帅星
 * @LastEditTime: Do not Edit
 */
import { DefineComponent } from 'vue';

const modules = import.meta.globEager('./*/index.(tsx|vue)');

const components: Record<string, DefineComponent> = {};

console.log(modules, '起航');

for (const path in modules) {
  const comp = modules[path].default;
  //剔除页面
  if (comp.label != '数据源' && comp.label != '页面') {
    components[comp.name || path.split('/')[1]] = comp;
  }
}
console.log('left-aside components:', components);

export default components;
