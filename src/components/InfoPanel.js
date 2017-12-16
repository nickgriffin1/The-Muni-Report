import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addLinePositions, removeLinePositions } from '../actions'

const InfoPanelContainer = styled.div`
  position: fixed;
  top: 50px;
  left:20px;
  height: 50%;
  width: 300px;
  background-color: white;
  z-index: 1000;
  border-radius: 5px;
  overflow: hidden;
  overflow-y: auto;
`
const Title = styled.div`
  font-size: 22px;
  margin-top: 20px;
  text-align: center;
`
const LineContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
`
const LineTitle = styled.div`
  font-size: 16px;
  margin-left: 20px;
`
const Divider = styled.hr`
  border-bottom: 1px solid black;
`
// Would be used to display and toggle lines and information
class InfoPanel extends Component {
  state = {
    checked: []
  }
  toggleBox = (line) => {
    if (this.state.checked.includes(line)) {
      // handle uncheck
      this.setState(prevState => ({
        checked: prevState.checked.filter(item => item !== line)
      }))
      // remove line from redux store
      this.props.removeLinePositions(line)
    } else {
      // handle check
      this.setState(prevState => ({
        checked: [ ...prevState.checked, line ]
      }))
      // add line to redux store
      this.props.addLinePositions(line)
    }
  }
  render() {
    console.log(this.state)
    return (
      <InfoPanelContainer>
        <Title>Show Vehicle Positions</Title>
        {this.props.lines.map(line => (
          <LineContainer key={line.tag}>
            <input type='checkbox' onChange={() => this.toggleBox(line.tag)}/>
            <LineTitle>{line.title}</LineTitle>
            <Divider />
          </LineContainer>
        ))}
      </InfoPanelContainer>
    )
  }
}

function mapStateToProps({ lines }) {
  return { lines }
}

function mapDispatchToProps(dispatch) {
  return {
    addLinePositions: data => dispatch(addLinePositions(data)),
    removeLinePositions: data => dispatch(removeLinePositions(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel)
