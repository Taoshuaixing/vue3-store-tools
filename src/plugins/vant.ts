/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-03-23 14:42:54
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-15 14:20:39
 */
import { Lazyload } from 'vant';
import type { App } from 'vue';
import '@vant/touch-emulator';
import 'vant/lib/index.css';

export const setupVant = (app: App) => {
  app.use(Lazyload);
};
