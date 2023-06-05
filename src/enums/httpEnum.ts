/*
 * @Descripttion:枚举
 * @version:
 * @Author: 陶帅星
 * @Date: 2023-03-23 14:42:54
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-05 14:35:32
 */
/**
 * @description: 请求结果集
 */
export enum ResultEnum {
  SUCCESS = 0,
  ERROR = -1,
  TIMEOUT = 10042,
  TYPE = 'success',
}

/**
 * @description: 请求方法
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * @description:  常用的contentTyp类型
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // json
  TEXT = 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  上传
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
