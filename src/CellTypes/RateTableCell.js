import React, {Component} from 'react';
import {Rate} from 'antd';

class RateTableCell extends Component {
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
    const {onRowFieldChange} = this.props;
    if (onRowFieldChange) onRowFieldChange(value);
    this.setState({value});
  }
  render() {
    const {value} = this.state;
    const {config} = this.props;
    return (
      <div onClick={(e) => {e.stopPropagation();}}>
        {
          <Rate
            {...config}
            onChange={this.handleChange.bind(this)}
            value={value} />
        }
      </div>
    );
  }
}

export default RateTableCell;
