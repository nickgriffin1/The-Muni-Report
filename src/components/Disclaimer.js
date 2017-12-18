import React from 'react'
import styled from 'styled-components'

const DisclaimerContainer = styled.div`
  position: absolute;
  bottom: 0;
  font-size: 12px;
  margin-left: 7%;
  background-color: rgba(255, 255, 255, 0.7);
`
const Disclaimer = () => {
  return (
    <DisclaimerContainer>
      Disclaimer: This project is in no way related to or endorsed by the SFMTA, Google or NextBus
    </DisclaimerContainer>
  )
}
export default Disclaimer
