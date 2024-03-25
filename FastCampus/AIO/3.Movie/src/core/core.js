// Component
export class Component{
  constructor(payload = {}){
    const {tagName = 'div'} = payload
    const {state={}} = payload
    const {props={}} = payload

    this.ele = document.createElement(tagName)
    this.state = state
    this.props = props
    this.render()
  }
  render(){
    // 
  }
}

// Router
function routeRender(routes){
  if(!location.hash){
    history.replaceState(null,'','/#/') // 주소업데이트
  }
  const routerView = document.querySelector('router-view')
  const [hash,queryString = ''] = location.hash.split('?')  // a=123&b=456
  const query = queryString.split('&').reduce(function(acc,cur){  // ['a=123','b=456']
    const [key,value] = cur.split('=') // ['a','123']
    acc[key] = value // {a:'123,b:456}
    return acc
  },{})
  history.replaceState(query,'','')

  const currentRoute = routes.find(route => { return new RegExp(`${route.path}/?$`).test(hash)})
  routerView.innerHTML = ''
  routerView.append(new currentRoute.component().ele)

  window.scrollTo(0,0)
}

export function createRouter(routes){
  return function(){
    window.addEventListener('popstate',()=>{ // 주소가 바뀌면 이벤트 실행
      routeRender(routes)
    })
    routeRender(routes)
  }
}

// store
export class Store{
  constructor(state){
    this.state = {}
    this.observers = {}
    for(const key in state){
      Object.defineProperty(this.state,key,{
        get:()=>{
          return state[key] // state['message']
        },
        set:(value)=>{console.log(value);
          state[key] = value
          this.observers[key]()
        }
      })
    }
  }
  subscribe(key, fn){
    this.observers[key] = fn
  }
}