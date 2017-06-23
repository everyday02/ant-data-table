## ant-data-table

一个可编辑表格插件。

> 这里记录了一些关于创建此组件的想法

[Live Demo | 演示地址。](http://106.14.208.184:8000/)

[参数说明文档。](./doc/README.md)


### Basic Example

``` javascript
class App extends Component {

  // 获取表格数据源
  handleTableData() {
    console.info(this.tableInstance.getDataSource());
    notification.open({
      message: 'Table Data',
      description: JSON.stringify(this.tableInstance.getDataSource()),
      style: {
        width: 600,
        marginLeft: 335 - 600
      }
    });
  }

  render() {
    // 定义数据源
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      date: null,
      city: null,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      date: null,
      city: null,
      address: '西湖区湖底公园1号'
    }];

    // 配置信息
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '年龄',
      dataIndex: 'age',
      editable: {               //可编辑配置
        type: 'number'          // 数字类型
      },
      key: 'age'
    }, {
      title: '出生日期',
      dataIndex: 'date',
      editable: {
        type: 'date'            // 日期类型
      },
      key: 'date'
    }, {
      title: '城市',
      width: 200,
      dataIndex: 'city',
      editable: {
        type: 'select',         // 下拉选框
        style: {width: 120},
        options: [              // 下拉选项
          '北京',     
          '武汉',
          '天津',
          '重庆'
        ]
      },
      key: 'city'
    }, {
      title: '住址',
      width: 200,
      dataIndex: 'address',
      editable: {
        type: 'textarea'        //文本textarea
      },
      key: 'address'
    }, {
      title: '操作',
      operation: true,          //操作列
      width: 200
    }];

    return (
      <div style={{padding: 100}}>
        <Button
          onClick={this.handleTableData.bind(this)}
          type="primary">获取表格所有数据</Button>

        <h1>Editable Table Demo </h1>
        <AntEditableTable
          ref={(instance) => {
            this.tableInstance = instance;
          }}
          clickRowToEdit
          pagination={false}
          data={dataSource}
          columns={columns} />
      </div>
    );
  }
}
```





### 依赖 | Dependencies

[ant-design](https://github.com/ant-design/ant-design)
