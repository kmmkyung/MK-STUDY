////// Component
export class Component {
  constructor(payload = {}){ // 기본적으로 객체데이터
    const { tagName = 'div', state = {}, props={} } = payload
    this.el = document.createElement(tagName)
    this.state = state
    this.props = props
    this.render()
  }
  render(){}
}