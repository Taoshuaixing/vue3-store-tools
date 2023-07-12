/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-13 16:47:43
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-07-12 16:37:43
 */
import axios from 'axios';
import { ElMessage } from 'element-plus';
// import { ref } from 'vue';
// 通过商品id获取图片
export function getProductImg(_pid: any) {
  let varImgURL: any = 'http://img3m{0}.ddimg.cn/{1}/{2}/{3}-{4}_{5}_{6}.jpg';
  return (varImgURL = varImgURL
    .replace('{0}', _pid % 10)
    .replace('{1}', _pid % 99)
    .replace('{2}', _pid % 37)
    .replace('{3}', _pid)
    .replace('{4}', '1')
    .replace('{5}', 'h')
    .replace('{6}', _pid % 10));
}

// // 通过商品id获取标题
export function getProductTitle(_pid: any) {
  // https://api.szfx.top/title/?url=http://product.m.dangdang.com/29129370.html
  const res = ref('');
  axios
    .get(`https://apis.jxcxin.cn/api/title?url=http://product.m.dangdang.com/${_pid}.html`)
    .then((response) => {
      // 处理响应数据
      if (response.data.code === 200) {
        res.value = response.data.data.title.replace('"', '').replace('"', '');
      }
    })
    .catch((error: any) => {
      // 处理请求错误
      ElMessage({
        showClose: true,
        type: 'error',
        duration: 2000,
        message: error,
      });
    });
  return res;
}
