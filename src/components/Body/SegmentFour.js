import React from 'react'
import { Select, Button } from 'antd'
import Card from './Card'

const SegmentFour = () => {
  return (
    <div style={{ marginTop: 16 }}>
      <Card>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              width: '40%',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <h2>New Condition</h2>
            <Select defaultValue="purchase" style={{ width: 281 }}>
              <Select.Option value="purchase">Purchase history</Select.Option>
            </Select>
          </div>
          <Button
            style={{ backgroundColor: '#65AF90', color: 'white' }}
            icon="plus"
          >
            Add
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default SegmentFour
