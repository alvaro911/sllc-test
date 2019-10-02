import React from 'react'
import { Row, Button } from 'antd'
import Card from './Card'
import CardTitle from './CardTitle'
import Options from './Options'

const SegmentTwo = () => {
  const arr1 = ['Category']

  const arr2 = ['is one of']

  const arr3 = ['Shoes', 'Belt']

  const arr4 = ['Product purchased']

  const arr5 = ['on', 'off']

  return (
    <div style={{ marginTop: 16 }}>
      <Row>
        <Card>
          <CardTitle
            title="Products purchased"
            subTitle="What products have they interacted with?"
            icon="delete"
            btnText="Delete"
          />
          <Options
            sizeOne={181}
            sizeTwo={120}
            sizeThree={364}
            dropdownOne={arr1}
            dropdownTwo={arr2}
            dropdownThree={arr3}
          />
          <Button style={{ marginTop: 16 }} icon="plus">
            More
          </Button>
          <hr
            style={{
              margin: '40px 0',
              backgroundColor: '#e1e1e1',
              border: 0,
              height: 1
            }}
          />
          <CardTitle
            title="Time of purchase"
            subTitle="When did this purchase take place?"
            icon="clock-circle"
            btnText="Remove Time Period"
          />
          <Options
            sizeOne={181}
            sizeTwo={120}
            sizeThree={172}
            dropdownOne={arr4}
            dropdownTwo={arr5}
            hasDate
          />
        </Card>
      </Row>
    </div>
  )
}

export default SegmentTwo
