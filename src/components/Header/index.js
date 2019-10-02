import React from 'react'
import { Icon, Input } from 'antd'
import logo from '../../images/logo.png'
import ProfileIcon from './ProfileIcon'
import { styles } from './styles/header'

const Header = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.logo}>
        <img src={logo} alt="company logo" />
      </div>
      <div style={styles.headerTools}>
        <Icon style={styles.icon} type="bell" theme="filled" />
        <div>
          <ProfileIcon initials="MS" name="Mark Smith" />
        </div>
        <Input style={{ width: 123 }} placeholder="Union Fashion" />
      </div>
    </div>
  )
}

export default Header
