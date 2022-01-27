
import { useState, useRef, useImperativeHandle } from "react";
function child(props: any) {
  console.log(props, "sdfsdf");
  const [sex, setSex] = useState('男');
  const domRef: any = useRef();
  // 通过useImperativeHandle向外暴露一些ref能访问的属性和方法
  useImperativeHandle(props.onRef, () => {
    return {
      fu: fn,
      name: '张安',
      test: testFun,
      ref: domRef,
    }
  })
  const fn = () => {
    props.emit('wupeng');
  }
  const testFun = () => {
    console.log("给我执行方法");
  }
  return (
    <div>
      紫钻见
      {/* 类似vue中的v-slot 渲染slot中的dom节点 */}
      {props.slot}
      <input type="text" ref={domRef} />
      <button onClick={fn}>惦记我</button>
    </div>
  )
}

export default child;