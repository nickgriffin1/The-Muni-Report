import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addLinePositions, removeLinePositions, selectLine, removeSelectedLine } from '../actions'

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
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: center;
  border-bottom: 1px solid darkgrey;
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
      this.props.removeSelectedLine(line)
    } else {
      // handle check
      this.setState(prevState => ({
        checked: [ ...prevState.checked, line ]
      }))
      // add line to redux store
      this.props.addLinePositions(line)
      this.props.selectLine(line)
    }
  }
  render() {
    return (
      <InfoPanelContainer>
        <Title>Show Vehicle Positions</Title>
        {this.props.allLines.map(line => (
          <LineContainer key={line.tag}>
            <input
              type='checkbox'
              onChange={() => this.toggleBox(line.tag)}
            />
            <LineTitle>{line.title}</LineTitle>
          </LineContainer>
        ))}
      </InfoPanelContainer>
    )
  }
}

function mapStateToProps({ allLines, selectedLines }) {
  return { allLines, selectedLines }
}

function mapDispatchToProps(dispatch) {
  return {
    addLinePositions: data => dispatch(addLinePositions(data)),
    removeLinePositions: data => dispatch(removeLinePositions(data)),
    selectLine: data => dispatch(selectLine(data)),
    removeSelectedLine: data => dispatch(removeSelectedLine(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoPanel)
