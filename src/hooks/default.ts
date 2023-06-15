/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-06-13 16:47:43
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-15 11:52:54
 */

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
