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
    this.setState({value});
  }
  render() {
    const {value} = this.state;
    const {config} = this.props;
    return (
      <div onClick={(e) => {e.stopPropagation();}}>
        {
        config.type === 'date' ?
          <DatePicker
            onChange={this.handleChange.bind(this)}
            defaultValue={value ? moment(value, 'YYYY-MM-DD') : null} />
          :
            <MonthPicker
              onChange={this.handleChange.bind(this)}
              defaultValue={value ? moment(value, 'YYYY-MM') : null} />
        }
      </div>
    );
  }
}

export default DateTableCell;
