import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './styles/profileIcon'

const ProfileIcon = ({ initials, name }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.nameIcon}>
        <p style={{ margin: 0 }}>{initials}</p>
      </div>
      <p style={{ margin: 0 }}>{name}</p>
    </div>
  )
}

ProfileIcon.propTypes = {
  initials: PropTypes.string,
  name: PropTypes.string
}

export default ProfileIcon
