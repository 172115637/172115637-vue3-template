/*
 * @Descripttion: 强化扩展数据类型
 * @version: 1.0.0
 * @Author: lizhixiang
 * @Email: admin@zjjhyzd.com
 * @Date: 2021-04-01 11:36:30
 * @LastEditors: lizhixiang
 * @LastEditTime: 2021-04-01 11:44:31
 */
/**
 * 替换所有符合规则的字符串
 * @param {String} s1 需要替换的值
 * @param {String} s2 替换后的值
 * @returns
 */
String.prototype.replaceAll = function (s1, s2) {
  return this.replace(new RegExp(s1, "gm"), s2);
};

/**
 *
 * [{name:1,id:1}] 根据数组内的属性删除对应数组的对象
 * @param {String} key 键
 * @param {Object} value 值
 */
Array.prototype.removeByKey = function (key, value) {
  let index = -1;
  for (var i = 0; i < this.length; i++) {
    console.log(this[i][key], value);
    if (this[i][key] === value) {
      index = i;
      break;
    }
  }
  if (index >= 0) {
    this.splice(index, 1);
  }
};

/**
 * 根据索引删除
 * @param {Number} value
 */
Array.prototype.remove = function (value) {
  let index = -1;
  for (var i = 0; i < this.length; i++) {
    if (this[i] === value) {
      index = i;
      break;
    }
  }
  if (index >= 0) {
    this.splice(index, 1);
  }
};
