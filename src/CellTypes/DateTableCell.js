import React, {Component} from 'react';
import {DatePicker} from 'antd';
import moment from 'moment';

const MonthPicker = DatePicker.MonthPicker;

class DateTableCell extends Component {
  state = {
    value: this.props.value,
    cacheValue: this.props.value
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 'save') {
      this.props.onChange(this.state.value);
    } else if (nextProps.status === 'cancel') {
      this.props.onChange(this.state.cacheValue);
    }
  }

  handleChange(dateMoment, value) {
    const {onRowFieldChange} = this.props;
    if (onRowFieldChange) onRowFieldChange(value);
    this.setState({value});
  }

  renderDateType() {
    const {value} = this.state;
    const {config} = this.props;

    switch (config.type) {
      case 'datetime':
        return (<DatePicker
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          onChange={this.handleChange.bind(this)}
          defaultValue={value ? moment(value, 'YYYY-MM-DD HH:mm:ss') : null} />);
      case 'datemonth':
        return (<MonthPicker
          onChange={this.handleChange.bind(this)}
          defaultValue={value ? moment(value, 'YYYY-MM') : null} />);
      default:
        return (<DatePicker
          onChange={this.handleChange.bind(this)}
          defaultValue={value ? moment(value, 'YYYY-MM-DD') : null} />);
    }
  }

  render() {
    return (
      <div onClick={(e) => {e.stopPropagation();}}>
        {this.renderDateType()}
      </div>
    );
  }
}

export default DateTableCell;
