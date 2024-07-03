import {Component} from 'react'

class Homepage extends Component {
  state = {
    text: '',
    isShowButtonOn: false,
  }

  onClickSave = () => {
    this.setState(prevState => ({isShowButtonOn: !prevState.isShowButtonOn}))
  }

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  renderSave = text => (
    <div>
      <h1>Editable Text Input</h1>
      <input type="text" onChange={this.onChangeInput} value={text} />
      <button onClick={this.onClickSave}>Save</button>
    </div>
  )

  renderEdit = text => (
    <div>
      <h1>Editable Text Input</h1>
      <p>{text}</p>
      <button onClick={this.onClickSave}>Edit</button>
    </div>
  )

  render() {
    const {isShowButtonOn, text} = this.state

    return (
      <div>
        {isShowButtonOn ? this.renderEdit(text) : this.renderSave(text)}
      </div>
    )
  }
}
export default Homepage
