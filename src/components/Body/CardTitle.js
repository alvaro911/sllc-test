import React from 'react'
import { Button } from 'antd'
import PropTypes from 'prop-types'

const CardTitle = ({ title, subTitle, icon, btnText }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h2>
        {title} <span style={{ color: '#D2D2D4' }}>- {subTitle}</span>
      </h2>
      <Button icon={icon}>{btnText}</Button>
    </div>
  )
}

CardTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  icon: PropTypes.string,
  btnText: PropTypes.string
}

export default CardTitle
