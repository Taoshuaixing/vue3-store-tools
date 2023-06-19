/**
 * @name: tools
 * @author: 陶帅星
 * @date: 2022/5/7 10:46
 * @description：tools
 * @update: 2022/5/7 10:46
 */
import { reactive } from 'vue';
import { ElMessage, ElRadio, ElRadioGroup, ElMessageBox } from 'element-plus';
// import { useQRCode } from '@vueuse/integrations/useQRCode';
import { useClipboard } from '@vueuse/core';

import {
  // DocumentCopy,
  // Cellphone,
  // RefreshLeft,
  // RefreshRight,
  Position,
  Delete,
  ChatLineSquare,
  Download,
  Upload,
} from '@element-plus/icons-vue';
import { useModal } from '@/visual-editor/hooks/useModal';
import MonacoEditor from '@/visual-editor/components/common/monaco-editor/MonacoEditor';
import 'element-plus/es/components/message/style/css';
import { useVisualData, localKey } from '@/visual-editor/hooks/useVisualData';

export const useTools = () => {
  const state = reactive({
    coverRadio: 'current',
    importJsonValue: '',
  });
  const importJsonChange = (value) => {
    state.importJsonValue = value;
    // console.log(state.importJsonValue);
  };

  const { updatePage, currentPage, overrideProject, jsonData } = useVisualData();

  return [
    {
      title: '导入JSON',
      icon: Upload,
      onClick: () => {
        useModal({
          title: '导入JSON',
          props: {
            width: 642,
          },
          content: () => (
            <>
              <ElRadioGroup v-model={state.coverRadio}>
                <ElRadio label="current">覆盖当前页面</ElRadio>
                <ElRadio label="all">覆盖整个项目</ElRadio>
              </ElRadioGroup>
              <MonacoEditor
                onChange={importJsonChange}
                code={JSON.stringify(jsonData)}
                layout={{ width: 600, height: 600 }}
              />
            </>
          ),
          onConfirm: () => {
            const isCoverCurrent = state.coverRadio == 'current';
            // 覆盖当前页面
            if (isCoverCurrent) {
              updatePage({
                oldPath: currentPage.value.path,
                page: JSON.parse(state.importJsonValue),
              });
              console.log(currentPage, state, JSON.parse(JSON.stringify(jsonData)));
              console.log(JSON.parse(state.importJsonValue));
            } else {
              // 覆盖整个项目
              overrideProject(JSON.parse(state.importJsonValue));
              console.log(JSON.parse(state.importJsonValue));
            }
            ElMessage({
              showClose: true,
              type: 'success',
              duration: 2000,
              message: isCoverCurrent ? '成功覆盖当前页面' : '成功覆盖整个项目',
            });
          },
        });
      },
    },
    {
      title: '导出JSON',
      icon: Download,
      onClick: () => {
        const { copy } = useClipboard({ source: JSON.stringify(jsonData) });

        copy()
          .then(() => ElMessage.success('复制成功'))
          .catch((err) => ElMessage.error(`复制失败：${err}`));
      },
    },
    // {
    //   title: '真机预览',
    //   icon: Cellphone,
    //   onClick: () => {
    //     const qrcode = useQRCode(`${location.origin}/preview`);
    //     useModal({
    //       title: '预览二维码（暂不可用）',
    //       props: {
    //         width: 300,
    //       },
    //       footer: null,
    //       content: () => (
    //         <div class={'flex justify-center'}>
    //           <img width={220} height={220} src={qrcode.value} />
    //         </div>
    //       ),
    //     });
    //   },
    // },
    // {
    //   title: '复制页面',
    //   icon: DocumentCopy,
    //   onClick: () => {
    //     ElMessage({
    //       showClose: true,
    //       type: 'info',
    //       duration: 2000,
    //       message: '敬请期待！',
    //     });
    //   },
    // },
    // {
    //   title: '撤销',
    //   icon: RefreshLeft,
    //   onClick: () => {
    //     ElMessage({
    //       showClose: true,
    //       type: 'info',
    //       duration: 2000,
    //       message: '敬请期待！',
    //     });
    //   },
    // },
    // {
    //   title: '重做',
    //   icon: RefreshRight,
    //   onClick: () => {
    //     ElMessage({
    //       showClose: true,
    //       type: 'info',
    //       duration: 2000,
    //       message: '敬请期待！',
    //     });
    //   },
    // },
    {
      title: '清空页面',
      icon: Delete,
      onClick: () => {
        ElMessageBox.confirm('确认清空页面？', 'Warning', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning',
          center: true,
        })
          .then(() => {
            if (currentPage.value.blocks.length !== 0) {
              currentPage.value.blocks = [];
              ElMessage({
                type: 'success',
                message: '页面已清空！',
              });
            } else {
              ElMessage({
                type: 'warning',
                message: '已是空页面！',
              });
            }
            // console.log(currentPage);
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: '已取消',
            });
          });
      },
    },

    {
      title: '预览',
      icon: Position,
      onClick: () => {
        localStorage.setItem(localKey, JSON.stringify(jsonData));
        window.open(location.href.replace('/#/', '/preview/#/'));
      },
    },
    {
      title: '反馈',
      icon: ChatLineSquare,
      onClick: () => {
        window.open('https://github.com/Taoshuaixing/vue3-store-tools/issues/new');
      },
    },
  ];
};
