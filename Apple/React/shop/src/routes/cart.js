import {Table} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { changeName,increase } from './../store/userSlice.js'
import { changeNum } from './../store.js'

function Cart(){
  let state = useSelector((state)=>{return state})
  let stateCart = useSelector((state)=>{return state.cartData})
  let dispatch = useDispatch()

  return(
    <div>
      {state.userNameState.name} {state.userNameState.age}의 장바구니
      <button onClick={()=>{dispatch(increase(100))}}>+</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            stateCart.map((a,i)=>{
            return <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.count}</td>
              <td><button onClick={()=>{
                dispatch(changeNum(stateCart[i].id))
              }}>+</button></td>
            </tr>
            })
          }

        </tbody>
      </Table> 
    </div>
  )
}

export default Cart