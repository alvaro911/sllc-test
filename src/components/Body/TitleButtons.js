import React from 'react'
import { Button } from 'antd'
import PropTypes from 'prop-types'
import { styles } from './styles/titleButtons'

const TitleButtons = ({ closeEdit }) => {
  const close = () => closeEdit()

  return (
    <div style={styles.wrapper}>
      <Button ghost style={{ ...styles.button }} onClick={close}>
        Exit
      </Button>
      <Button ghost style={{ ...styles.button }} onClick={close}>
        Preview
      </Button>
      <Button style={{ ...styles.button }} onClick={close}>
        Save Changes
      </Button>
    </div>
  )
}

TitleButtons.propTypes = {
  closeEdit: PropTypes.func
}

export default TitleButtons
