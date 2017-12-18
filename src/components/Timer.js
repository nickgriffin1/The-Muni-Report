import React, { Component } from 'react'
import styled from 'styled-components'
import CircularProgressbar from 'react-circular-progressbar'

const TimerContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  height: 50px;
  width: 50px;
  z-index: 10000;
`
class Timer extends Component {
  state = {
    percentage: 0
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => ({
        percentage: prevState.percentage === 99 ? 0 : prevState.percentage + 1
      }))
    }, 150)
  }
  render() {
    return (
      <TimerContainer>
        <CircularProgressbar
          strokeWidth={20}
          textForPercentage={null}
          percentage={this.state.percentage}
        />
      </TimerContainer>
    )
  }
}
export default Timer
