
import { useState, forwardRef } from "react";
function childRef(propsS: any) {
  const [sex, setSex] = useState('男');
  const MyDiv = forwardRef((props, ref: any) => <div {...props} ref={ref}>我是自尊见</div>)
  const fn = () => {
    console.log("sdf");

  }
  const testFun = () => {
    console.log("给我执行方法");
  }
  return (
    <div>
      <MyDiv ref={propsS.forwardRef}></MyDiv>
      <input type="text" ref={propsS.innerRef} />
      <button onClick={fn}>惦记我</button>
    </div>
  )
}

export default childRef;