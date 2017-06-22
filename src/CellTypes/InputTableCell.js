import React, {Component} from 'react';
import {Input} from 'antd';

class InputTableCell extends Component {
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

  handleChange(e) {
    const value = e.target.value;
    this.setState({value});
  }
  render() {
    const {value} = this.state;
    const {config} = this.props;
    return (
      <div onClick={(e) => {e.stopPropagation();}}>
        {
          <div>
            <Input
              {...config}
              value={value}
              onChange={e => this.handleChange(e)}
            />
          </div>
        }
      </div>
    );
  }
}

export default InputTableCell;
