import React, {Component} from 'react';
import {Table, Popconfirm, Button, Icon} from 'antd';
import InputTableCell from './CellTypes/InputTableCell';
import DateTableCell from './CellTypes/DateTableCell';
import SelectTableCell from './CellTypes/SelectTableCell';
import NumberTableCell from './CellTypes/NumberTableCell';
import RateTableCell from './CellTypes/RateTableCell';
import SliderTableCell from './CellTypes/SliderTableCell';

class AntEditableTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      editIndex: -1,
      editable: false,
      status: null,
      columns: props.columns
    };
  }

  componentWillReceiveProps(nextProps) {
    const {data} = nextProps;
    this.state = {data};
  }

  handleChange(key, index, value) {
    const {data} = this.state;
    const {onRowSave} = this.props;
    data[index][key] = value;
    if (onRowSave) onRowSave(data);
    this.setState({data, editable: false});
  }

  handleSaveAll() {
    const {data} = this.state;
    const {onAllSave} = this.props;
    onAllSave(data);
  }

  edit(index) {
    this.setState({editIndex: index, editable: true});
  }

  editDone(index, action) {
    this.setState({
      editIndex: index,
      status: action
    });
  }

  getDataSource() {
    const {data} = this.state;
    return data;
  }

  render() {
    const props = {...this.props};
    const {columns} = this.props;
    const {data} = this.state;

    props.onRowClick = this.wrapperRowClick();

    return (
      <Table
        {...props}
        dataSource={data}
        columns={this.wrapperColumnsRender(columns)} />
    );
  }

  wrapperRowClick() {
    const {clickRowToEdit} = this.props;
    if (clickRowToEdit) {
      return (record, index) => {
        this.edit(index);
        if (this.props.onRowClick) this.props.onRowClick(record, index);
      };
    }
    return null;
  }

  wrapperColumnsRender(columns) {
    columns.map((item) => {
      if (item.operation) {
        item.render = (text, record, index) => this.operationRender(this.state.data, text, record, index);
        return item;
      }
      if (!item.render && item.editable) {
        item.render = (text, record, index) => this.renderColumns(this.state.data, index, item.dataIndex, text, item.editable || {});
      }
      return item;
    });
    return columns;
  }

  renderColumns(data, index, key, text, config) {
    const {status, editIndex} = this.state;
    if (editIndex !== index) return <div>{text}</div>;
    if (!this.state.editable) return <div>{text}</div>;
    switch (config.type) {
      case 'date':
        return (
          <DateTableCell
            value={text}
            config={config}
            onChange={value => this.handleChange(key, index, value)}
            status={status}
            />);
      case 'dateMonth':
        return (<DateTableCell
          value={text}
          config={config}
          onChange={value => this.handleChange(key, index, value)}
          status={status}
          />);
      case 'select':
        return (<SelectTableCell
          value={text}
          config={config}
          onChange={value => this.handleChange(key, index, value)}
          status={status}
          />);
      case 'number':
        return (<NumberTableCell
          value={text}
          config={config}
          onChange={value => this.handleChange(key, index, value)}
          status={status}
          />);
      case 'rate':
        return (<RateTableCell
          value={text}
          config={config}
          onChange={value => this.handleChange(key, index, value)}
          status={status}
          />);
      case 'slider':
        return (<SliderTableCell
          value={text}
          config={config}
          onChange={value => this.handleChange(key, index, value)}
          status={status}
          />);
      default:
        return (
          <InputTableCell
            value={text}
            config={config}
            onChange={value => this.handleChange(key, index, value)}
            status={status}
            />);
    }
  }

  operationRender(data, text, record, index) {
    const {editable, editIndex} = this.state;
    return (
      <div className="editable-row-operations" onClick={(e) => {e.stopPropagation();}}>
        {
          (editable && (editIndex === index)) ?
            <span>
              <Button
                onClick={() => this.editDone(index, 'save')}
                size="small"
                style={{marginRight: 8}}
                type="primary">保存</Button>
              <Popconfirm title="确认取消吗?" onConfirm={() => this.editDone(index, 'cancel')}>
                <Button size="small" type="info">取消</Button>
              </Popconfirm>
            </span>
            :
            <a>
              <Icon
                style={{fontSize: 18, color: '#007087'}}
                type="edit" onClick={() => this.edit(index)} />
            </a>
        }
      </div>
    );
  }

}

export default AntEditableTable;
