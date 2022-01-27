
import { useState } from "react";
function child(props: any) {
  console.log(props, "sdfsdf");
  const [sex, setSex] = useState('男');
  const fn = () => {
    props.emit('wupeng')
  }
  return (
    <div>紫钻见
      {props.slot}
      <button onClick={fn}>惦记我</button>
    </div>
  )
}

export default child;