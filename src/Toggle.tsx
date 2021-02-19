import {useState, ReactElement} from 'react';

function Toggle (): ReactElement {
  const [isToggleOn, setToggleOn] = useState<boolean>(true)
  const handleClick = () => setToggleOn(prevState => !prevState)

  return (
    <button onClick={handleClick}>{isToggleOn ? 'ON' : 'OFF'}</button>
  )
}

export default Toggle;
