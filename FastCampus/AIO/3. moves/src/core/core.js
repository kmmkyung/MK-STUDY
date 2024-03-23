
// Component
export class Component{
  constructor(payload = {}){
    const {tagName = 'div'} = payload
    this.ele = document.createElement(tagName)
    this.render()
  }
  render(){
    // 
  }
}
