import React, {Component} from 'react';
import {InputNumber} from 'antd';

class NumberTableCell extends Component {
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

  handleChange(value) {
    this.setState({value});
  }
  render() {
    const {value} = this.state;
    return (
      <div onClick={(e) => {e.stopPropagation();}}>
        {
          <div>
            <InputNumber
              defaultValue={value}
              onChange={this.handleChange.bind(this)}
              {...this.props.config} />
          </div>
        }
      </div>
    );
  }
}

export default NumberTableCell;
