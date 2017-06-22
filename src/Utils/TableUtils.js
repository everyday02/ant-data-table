import _ from 'lodash';


/*
  深度查找对象属性值
  参数： model对象, 查找的key;
  输出： 找到的属性值;
**/

function transformTablePropertyByType(property) {
  console.info(property);
  if (_.isArray(property)) {
    return {value: property[0], config: property[1]};
  }

  return {value: property};
}

exports.transformTablePropertyByType = transformTablePropertyByType;
