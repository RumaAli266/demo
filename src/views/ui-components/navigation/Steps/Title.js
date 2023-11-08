import React from 'react'
import { Steps } from 'components/ui'

const Title = () => {
    return (
        <div>
            <Steps current={1}>
                <Steps.Item title="Login" />
                <Steps.Item title="Order Placed" />
                <Steps.Item title="In Review" />
                <Steps.Item title="Approved" />
            </Steps>
        </div>
    )
}

export default Title
