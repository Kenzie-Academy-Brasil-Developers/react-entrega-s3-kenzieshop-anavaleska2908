import { Button } from "../Button";
import { useDispatch } from "react-redux";
import { filterPopsThunk, filterAllThunks } from '../../store/modules/products/thunk'
import { Nav } from "./styles";

const filters = [
  'Naruto',
  'Boruto',
  'Demon Slayer',
  'Fire Force',
  'Bleach',
  'My Hero Academia',
  'One Punch Man',
  'Avatar',
  'Pokémon',
  'InuYasha',
  'Marvel',
  'Disney',
  'Yu-Gi-Oh',
  'Power Ranger',
  'Hunter X Hunter',
  'Harry Potter', 
  'Attack on Titan',
  'One Piece',
  'Dragon Ball Z',
  'Fullmetal Alchemist',
 
]

export const Menu = () => {
  const dispatch = useDispatch()

  const handleClick = (filter) => {
    dispatch( filterAllThunks() )
    dispatch(filterPopsThunk(filter))
  }

  return (
    <Nav>    
      <Button onClick={() => dispatch(filterAllThunks())}>Todos</Button>
      {filters.map((filter, index) => <Button key={index} onClick={ () => handleClick(filter) }>{filter}</Button>)}
    </Nav>
  )
}