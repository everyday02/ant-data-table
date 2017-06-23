import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {notification, Button} from 'antd';

import './index.css';
import AntEditableTable from './src/AntEditableTable';

class App extends Component {

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

    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '年龄',
      dataIndex: 'age',
      editable: {
        type: 'number'
      },
      key: 'age'
    }, {
      title: '出生日期',
      dataIndex: 'date',
      editable: {
        type: 'date'
      },
      key: 'date'
    }, {
      title: '城市',
      width: 200,
      dataIndex: 'city',
      editable: {
        type: 'select',
        style: {width: 120},
        options: [
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
        type: 'textarea'
      },
      key: 'address'
    }, {
      title: '操作',
      operation: true,
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

ReactDOM.render(<App />, document.getElementById('root'));
