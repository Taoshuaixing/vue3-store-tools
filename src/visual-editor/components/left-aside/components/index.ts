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
