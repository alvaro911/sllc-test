import React, { useState } from 'react'
import { styles } from './styles/title'
import TitleText from './TitleText'
import TitleButtons from './TitleButtons'

const Title = () => {
  const [edit, setEdit] = useState(false)

  const [text, setText] = useState(
    'Mobile users who bought shoes on Black Friday'
  )

  const editing = () => setEdit(true)

  const changeText = text => setText(text)

  const closeEdit = () => setEdit(false)
  return (
    <div
      style={{
        ...styles.wrapper,
        color: edit ? 'white' : 'black',
        height: edit ? 109 : 95,
        justifyConent: edit ? 'flex-start' : 'space-between',
        backgroundColor: edit ? '#65AE8F' : null
      }}
    >
      <TitleText
        isEditing={edit}
        editing={editing}
        text={text}
        setText={changeText}
      />
      {edit && <TitleButtons closeEdit={closeEdit} />}
    </div>
  )
}

export default Title
