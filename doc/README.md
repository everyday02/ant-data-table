### Params

  基本参数说明‘’

#### 如何使用
数据源 <code>dataSource</code>， 数组形式。
```javascript
const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}]

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  type: 'input',
  key: 'name'
}, {
  title: '年龄',
  dataIndex: 'age',
  type: 'number',
  key: 'age'
}, {
  title: '住址',
  dataIndex: 'address',
  type: 'textarea',
  key: 'address'
}];
```
