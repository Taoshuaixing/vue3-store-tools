<template>
	<div class="common-layout">
		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="200px">
					<!-- <draggable
						v-model="arr1"
						:options="{ group: { name: 'store', pull: 'clone' }, sort: true }"
					>
						<transition-group>
							<div v-for="item of arr1" :key="item.id">{{ item.name }}</div>
						</transition-group>
					</draggable> -->
				</el-aside>
				<el-main>
					<div>{{ drag ? '拖拽中' : '拖拽停止' }}</div>
					<draggable
						v-model="arr1"
						chosenClass="chosen"
						froceFallback="true"
						group="people"
						@start="onStart"
						@end="onEnd"
						animation="1000"
					>
						<transition-group>
							<div class="item" v-for="item of arr1" :key="item.id">
								{{ item.name }}
							</div>
						</transition-group>
					</draggable>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts">
	import { ref, reactive, defineComponent } from 'vue';
	import draggable from 'vuedraggable';
	import { VueDraggableNext } from 'vue-draggable-next';
	export default defineComponent({
		components: { draggable: VueDraggableNext },
		setup() {
			let drag = ref(false);
			const arr1: any = [
				{ id: 1, name: 'www.itxst.com（不允许停靠）' },
				{ id: 2, name: 'www.jd.com' },
				{ id: 3, name: 'www.baidu.com' },
				{ id: 5, name: 'www.google.com' },
				{ id: 4, name: 'www.taobao.com（不允许拖拽）' },
			];
			const arr2 = [{ id: 11, name: '常用菜单' }];
			function onStart() {
				console.log('开始拖动！');
				drag.value = true;
			}
			function onEnd() {
				console.log('结束拖动！');
				drag.value = false;
			}
			return { drag, arr1, onStart, onEnd };
		},
	});
</script>

<style scoped>
	.item {
		padding: 6px;
		background-color: #fdfdfd;
		border: solid 1px #eee;
		margin-bottom: 10px;
		cursor: move;
	}

	.item:hover {
		background-color: #f1f1f1;
		cursor: move;
	}

	.chosen {
		border: solid 2px #3089dc !important;
	}
</style>
