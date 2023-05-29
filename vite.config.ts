import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import DefineOptions from 'unplugin-vue-define-options/vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), DefineOptions()],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: resolve(__dirname, './src'),
			},
		],
	},
	optimizeDeps: {
		include: ['vuedraggable'],
	},
	// 全局css
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "./src/style/global.scss";', // 添加公共样式
			},
		},
	},
});
