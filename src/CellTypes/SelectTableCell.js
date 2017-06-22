import React, {Component} from 'react';
import {Select} from 'antd';

const Option = Select.Option;

class SelectTableCell extends Component {
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
    const {value, config} = this.props;
    return (
      <div onClick={(e) => {e.stopPropagation();}}>
        <Select
          {...config}
          style={config.style}
          onChange={this.handleChange.bind(this)}
          defaultValue={value} >
          {
          config.options.map(item =>
            <Option
              key={item}
              value={item}>
              {item}
            </Option>
          )
          }
        </Select>
      </div>
    );
  }
}

export default SelectTableCell;
