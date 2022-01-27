import React, { useState, useMemo, useEffect } from "react";
const Child = (props: any) => {
  console.log('重新渲染子组件', props);
  return (
    <div>{props.userInfo.age}子组件</div>
  )
}
const ChildMemo = React.memo(Child);

const Parent = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0)
  // const userInfo = {
  //   age: count,
  //   name: 'hello',
  // }
  const userInfo = useMemo(() => {
    return {
      age: count,
      name: 'hello',
    }
  }, [count])



  const btnHandler = () => {
    setNumber(number + 1);
    setCount(count + 1);
  }
  return (
    <div>
      {number}-{count}
      <br></br>
      <button onClick={btnHandler}>按钮</button>
      <ChildMemo userInfo={userInfo} />
    </div>
  )
}
export default Parent;
