import React from 'react'
import { Row, Button } from 'antd'
import Card from './Card'
import CardTitle from './CardTitle'
import Options from './Options'

const SegmentThree = () => {
  const arr1 = ['Device', 'Laptop', 'Tablet']

  const arr2 = ['is one of']

  const arr3 = ['Mobile', 'Tablet', 'Laptop']
  return (
    <div style={{ marginTop: 16 }}>
      <Row>
        <Card>
          <CardTitle
            title="Technology"
            subTitle="Which device, browser or operating system are they using?"
            icon="delete"
            btnText="Delete"
          />
          <Options
            sizeOne={181}
            sizeTwo={120}
            sizeThree={172}
            dropdownOne={arr1}
            dropdownTwo={arr2}
            dropdownThree={arr3}
          />
          <Button style={{ marginTop: 16 }} icon="plus">
            More
          </Button>
        </Card>
      </Row>
    </div>
  )
}

export default SegmentThree
