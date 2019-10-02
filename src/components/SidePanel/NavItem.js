import React from 'react'
import { Icon } from 'antd'
import PropTypes from 'prop-types'
import { styles } from './styles/navItem'

const NavItem = ({ icon, link, active }) => {
  return (
    <div
      style={{
        ...styles.wrapper,
        borderLeft: active ? '2px solid white' : 0
      }}
    >
      <Icon
        style={styles.icon}
        type={icon}
        theme={icon === 'cloud' ? 'filled' : 'outlined'}
      />
      <p style={{ margin: 0 }}>{link}</p>
    </div>
  )
}

NavItem.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool
}

export default NavItem
