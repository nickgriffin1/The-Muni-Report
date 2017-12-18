import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addLinePositions, removeLinePositions, selectLine, removeSelectedLine } from '../actions'
import exitIcon from '../assets/x.svg'

const InfoPanelContainer = styled.div`
  position: fixed;
  top: 50px;
  left:20px;
  max-height: 50%;
  width: 300px;
  background-color: white;
  z-index: 1000;
  border-radius: 5px;
  overflow: hidden;
  overflow-y: auto;
`
const Header = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.94);
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`
const Title = styled.div`
  font-size: 22px;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 5px;
`
const Toggle = styled.div`
  align-self: center;
`
const ExitIcon = styled.img`
  height: 20px;
  margin-right: 10px;
`
const OpenIcon = ExitIcon.extend`
  transform: rotate(45deg);
`
const LineContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const CheckBox = styled.input`
  margin: 0;
  zoom: 2;
`
const LineTitle = styled.div`
  font-size: 16px;
  margin-left: 20px;
`
class InfoPanel extends Component {
  state = {
    checked: [],
    showLines: true
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
  getVisibility = () => {
    if (this.state.showLines === true) {
      return 'flex'
    } else {
      return 'none'
    }
  }
  toggleLines = () => {
    this.setState(prevState => ({
      showLines: !prevState.showLines
    }))
  }
  render() {
    return (
      <InfoPanelContainer>
        <Header>
          <Title>
            Select Muni Lines
          </Title>
          <Toggle onClick={this.toggleLines}>{
            this.state.showLines ?
              <ExitIcon src={exitIcon} /> :
              <OpenIcon src={exitIcon} />
          }</Toggle>
        </Header>
        <div style={{ marginTop: '50px'}}>
          {this.props.allLines.map(line => (
            <LineContainer style={{ display: this.getVisibility() }} key={line.tag}>
              <CheckBox
                type='checkbox'
                onChange={() => this.toggleBox(line.tag)}
              />
              <LineTitle>{line.title}</LineTitle>
            </LineContainer>
          ))}
        </div>
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
