import { TiShoppingCart } from 'react-icons/ti'
import {Badge} from 'react-bootstrap'

const CartWidgetRI =()=>{
    return(
        <div>
            <TiShoppingCart fontSize={'2rem'}/>
             <Badge pill bg="danger">
        10
      </Badge>
        </div>
    )
}
export default CartWidgetRI