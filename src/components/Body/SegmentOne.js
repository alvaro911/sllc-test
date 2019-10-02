import React from 'react'
import { Row, Progress } from 'antd'
import Card from './Card'

const SegmentOne = () => {
  return (
    <Row gutter={16}>
      <Card cols={8}>
        <h2>Define A new Segment</h2>
        <p>
          Add a condition to define a segment. The more conditions you add the
          more specific your segment will be
        </p>
      </Card>
      <Card cols={16}>
        <h2>Estimated size</h2>
        <p>
          <span style={{ color: '#65AF90' }}>10-20%</span> of your total traffic
          expected to join based on a sample of historical data
        </p>
        <Progress
          percent={10}
          strokeWidth={20}
          strokeColor="#65AF90"
          showInfo={false}
        />
      </Card>
    </Row>
  )
}

export default SegmentOne
