import React from 'react'
import { Input, Icon } from 'antd'
import PropTypes from 'prop-types'
import { styles } from './styles/titleText'

const TitleText = ({ isEditing, editing, text, setText }) => {
  const setEdit = () => editing()

  const handleChange = e => setText(e.target.value)

  return (
    <div style={{ width: '64.15%' }}>
      <div style={{ display: 'flex' }}>
        {isEditing ? (
          <Input
            style={{
              ...styles.fontStyle,
              ...styles.inputStyle
            }}
            defaultValue={text}
            onChange={handleChange}
          />
        ) : (
          <h1 style={{ ...styles.fontStyle, margin: '0 15px 0 0' }}>{text}</h1>
        )}{' '}
        <Icon
          style={styles.fontStyle}
          type="edit"
          theme="filled"
          onClick={setEdit}
        />
      </div>
      <h4 style={{ color: isEditing ? 'white' : 'black' }}>
        Created by Mark Smith
      </h4>
    </div>
  )
}

TitleText.propTypes = {
  isEditing: PropTypes.bool,
  editing: PropTypes.func,
  text: PropTypes.string,
  setText: PropTypes.func
}

export default TitleText
