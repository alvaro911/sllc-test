import React from 'react'
import { Select, DatePicker } from 'antd'
import PropTypes from 'prop-types'

const Options = props => {
  const {
    dropdownOne,
    dropdownTwo,
    dropdownThree,
    sizeOne,
    sizeTwo,
    sizeThree,
    hasDate
  } = props
  const { Option } = Select

  const renderOptions = arr =>
    arr.map(el => (
      <Option key={el} value={el}>
        {el}
      </Option>
    ))
  console.log(dropdownThree)
  return (
    <div>
      <Select
        style={{ width: sizeOne, marginRight: 16 }}
        defaultValue={dropdownOne[0]}
      >
        {renderOptions(dropdownOne)}
      </Select>
      <Select
        style={{ width: sizeTwo, marginRight: 16 }}
        defaultValue={dropdownTwo[0]}
      >
        {renderOptions(dropdownTwo)}
      </Select>
      {hasDate ? (
        <DatePicker />
      ) : (
        <Select
          style={{ width: sizeThree }}
          mode="multiple"
          defaultValue={[dropdownThree[0]]}
        >
          {renderOptions(dropdownThree)}
        </Select>
      )}
    </div>
  )
}

Options.propTypes = {
  dropdownOne: PropTypes.arrayOf(PropTypes.string),
  dropdownTwo: PropTypes.arrayOf(PropTypes.string),
  dropdownThree: PropTypes.arrayOf(PropTypes.string),
  sizeOne: PropTypes.number,
  sizeTwo: PropTypes.number,
  sizeThree: PropTypes.number,
  hasDate: PropTypes.bool
}

export default Options
