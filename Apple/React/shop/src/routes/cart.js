import {Table} from 'react-bootstrap'
import {useSelector} from 'react-redux'

function Cart(){
  let stateCart = useSelector((state)=>{return state.cartData})
  
  return(
    <div>
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
              <td>안녕</td>
            </tr>
            })
          } 
        </tbody>
      </Table> 
    </div>
  )
}

export default Cart