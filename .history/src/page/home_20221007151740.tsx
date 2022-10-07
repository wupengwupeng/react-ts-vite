import Child from "@/components/child";
import ChildRef from "@/components/childRef";
import { useState, useRef } from "react";
import { TypingCard } from "@/components/TypingCard/index";
export function Home() {
  const [name, setName] = useState("WUPENG");
  const [age, setAge] = useState(12);
  const childRef: any = useRef();
  const cdRef: any = useRef();
  const innerRef: any = useRef();
  const emit = (val: any) => {
    console.log(val);
  };
  const openChildFun = () => {
    console.log(childRef, "childRef");
    childRef.current.test();
    console.log((childRef.current.ref.current.style.width = "10px"));

    console.log(childRef.current.name);
    console.log(cdRef.current, "cdRef");
    cdRef.current.style.color = "red";
  };
  const handerTest = () => {
    console.log(innerRef, "innerRef");
  };
  return (
    <div>
      Home
      <Child
        onRef={childRef}
        slot={<div>我是solt</div>}
        {...{ name, age }}
        emit={emit}
      />
      <ChildRef forwardRef={cdRef} innerRef={innerRef}></ChildRef>
      <button onClick={openChildFun}>父组件调用子组件的方法</button>
      <button onClick={handerTest}>测试2</button>
      <TypingCard source={source}></TypingCard>
    </div>
  );
}
