# /bin/bash
###
# @Descripttion:
# @version:
# @Author: 陶帅星
# @Date: 2023-07-11 16:15:24
 # @LastEditors: 陶帅星
 # @LastEditTime: 2023-07-12 16:51:42
###
# 删除dist, 否则第二次会提示fatal: A branch named 'main' already exists.
rm -rf dist
# 确保脚本抛出遇到的错误
set -e

# 重新打包组件库
npm run build

# 进入待发布的 dist/ 目录
cd dist

# 提交打包静态网站到 gh-pages 分支
git init
git add .
git commit -m 'deploy github.io -b gh-pages'

# 部署到 https://<username>.github.io/<repo>
git push -f git@github.com:Taoshuaixing/vue3-store-tools.git main:gh-pages

# 提交所有代码到github
cd ../
git add .
git commit -m 'update deploy'
git push
