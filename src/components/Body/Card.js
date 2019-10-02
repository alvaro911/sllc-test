import React from 'react'
import { Col } from 'antd'
import PropTypes from 'prop-types'
import { styles } from './styles/card'

const Card = ({ children, cols }) => {
  return (
    <Col span={cols}>
      <div style={styles.wrapper}>{children}</div>
    </Col>
  )
}

Card.propTypes = {
  children: PropTypes.any,
  cols: PropTypes.number
}

export default Card
