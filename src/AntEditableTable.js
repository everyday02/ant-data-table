import React, {Component} from 'react';
import {Table, Popconfirm, Button, Icon} from 'antd';
import InputTableCell from './CellTypes/InputTableCell';
import DateTableCell from './CellTypes/DateTableCell';
import SelectTableCell from './CellTypes/SelectTableCell';
import NumberTableCell from './CellTypes/NumberTableCell';
import RateTableCell from './CellTypes/RateTableCell';
import SliderTableCell from './CellTypes/SliderTableCell';

class AntEditableTable extends Component {
  editableRow: {};

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      columns: props.columns,
      editIndex: -1,
      editable: false,
      status: null
    };
  }

  componentWillReceiveProps(nextProps) {
    const {data} = nextProps;
    this.state = {data};
  }

  onRowFieldChange(key, index, value) {
    this.editableRow[key] = value;
  }

  handleChange(key, index, value) {
    const {data} = this.state;
    data[index][key] = value;
    this.setState({data, editable: false});
  }

  getDataSource() {
    const {data} = this.state;
    return data;
  }

  edit(index) {
    const {data} = this.state;
    this.editableRow = Object.assign({}, data[index]);
    this.setState({editIndex: index, editable: true});
  }

  delete(index) {
    const {data} = this.state;
    const {onDelete} = this.props;

    if (onDelete) onDelete(index, data[index]);
  }

  editDone(index, action) {
    const {data} = this.state;
    const {onRowSave} = this.props;

    if (onRowSave
      && action === 'save'
      && onRowSave(index, data[index], this.editableRow) === false) return;

    this.setState({
      editIndex: index,
      status: action
    });
  }

  render() {
    const props = {...this.props};
    const {columns, enableRowEdit} = this.props;
    const {data} = this.state;

    if (enableRowEdit) props.onRowClick = this.wrapperRowClick();

    return (
      <Table
        {...props}
        dataSource={data}
        columns={this.wrapperColumnsRender(columns)} />
    );
  }

  wrapperRowClick() {
    return (record, index) => {
      this.edit(index);
      if (this.props.onRowClick) this.props.onRowClick(record, index);
    };
  }

  wrapperColumnsRender(columns) {
    columns.map((item, idx) => {
      if (item.operation) {
        item.render = (text, record, index) => this.renderOperation(this.state.data, text, record, index);
        return item;
      }
      if (!item.render && item.editable) {
        item.render = (text, record, index) => this.renderColumns(this.state.data, index, item.dataIndex, text, item.editable || {});
      }
      item.key = idx;
      return item;
    });
    return columns;
  }

  renderColumns(data, index, key, text, config) {
    const {status, editIndex} = this.state;
    if (editIndex !== index || !this.state.editable) return <div>{text}</div>;
    switch (config.type) {
      case 'date':
        return (
          <DateTableCell
            value={text}
            config={config}
            onRowFieldChange={value => this.onRowFieldChange(key, index, value)}
            onChange={value => this.handleChange(key, index, value)}
            status={status}
            />);
      case 'datetime':
        return (<DateTableCell
          value={text}
          config={config}
          onRowFieldChange={value => this.onRowFieldChange(key, index, value)}
          onChange={value => this.handleChange(key, index, value)}
          status={status}
          />);
      case 'datemonth':
        return (<DateTableCell
          value={text}
          config={config}
          onRowFieldChange={value => this.onRowFieldChange(key, index, value)}
          onChange={value => this.handleChange(key, index, value)}
          status={status}
          />);
      case 'select':
        return (<SelectTableCell
          value={text}
          config={config}
          onRowFieldChange={value => this.onRowFieldChange(key, index, value)}
          onChange={value => this.handleChange(key, index, value)}
          status={status}
          />);
      case 'number':
        return (<NumberTableCell
          value={text}
          config={config}
          onRowFieldChange={value => this.onRowFieldChange(key, index, value)}
          onChange={value => this.handleChange(key, index, value)}
          status={status}
          />);
      case 'rate':
        return (<RateTableCell
          value={text}
          config={config}
          onRowFieldChange={value => this.onRowFieldChange(key, index, value)}
          onChange={value => this.handleChange(key, index, value)}
          status={status}
          />);
      case 'slider':
        return (<SliderTableCell
          value={text}
          config={config}
          onRowFieldChange={value => this.onRowFieldChange(key, index, value)}
          onChange={value => this.handleChange(key, index, value)}
          status={status}
          />);
      default:
        return (
          <InputTableCell
            value={text}
            config={config}
            onRowFieldChange={value => this.onRowFieldChange(key, index, value)}
            onChange={value => this.handleChange(key, index, value)}
            status={status}
            />);
    }
  }

  renderOperation(data, text, record, index) {
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
              <Popconfirm title="确认删除吗?" onConfirm={() => this.delete(index)}>
                <Icon
                  style={{fontSize: 18, marginLeft: 15, color: '#007087'}}
                  type="delete" />
              </Popconfirm>
            </a>
        }
      </div>
    );
  }

}

export default AntEditableTable;
