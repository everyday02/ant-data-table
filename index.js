import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {DatePicker} from 'antd';

import './index.css';
import AntEditableTable from './src/AntEditableTable';

class App extends Component {


  componentDidMount() {

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
      <div style={{margin: 100}}>
        <h1>AntDesign Demo1</h1>
        <hr /><br />
        <DatePicker />
        <AntEditableTable
          ref={(instance) => {
            this.tableInstance = instance;
          }}
          clickRowToEdit
          data={dataSource}
          pagination={false}
          columns={columns}
          />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
