import { Button } from '../Button';
import { subFromCartThunk } from '../../store/modules/cart/thunk'
import { useDispatch } from 'react-redux';
import {IoBagRemove} from 'react-icons/io5'
import { Context, DivButton, ImgButton, Li } from './styles';

export const CardCart = ( { item } ) => {
  const dispatch = useDispatch();
  
  return (
    <Li>
      <ImgButton>
        <img src={ item.image } alt={ item.name } />

      </ImgButton>
      <Context>
        <p>{ item.name }</p>
        <p>{ item.price }</p>
      </Context>

      <DivButton>
        <Button onClick={ () => dispatch( subFromCartThunk( item ) ) }><IoBagRemove size={ 12 } /></Button>
      </DivButton>

    </Li>
  )
}