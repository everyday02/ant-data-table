import React, {Component} from 'react';
import {Slider} from 'antd';

class SliderTableCell extends Component {
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
    const {config} = this.props;
    return (
      <div onClick={(e) => {e.stopPropagation();}}>
        {
          <Slider
            defaultValue={value}
            onChange={this.handleChange.bind(this)}
            {...config} />
        }
      </div>
    );
  }
}

export default SliderTableCell;
