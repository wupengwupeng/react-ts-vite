import { useState, useEffect, useCallback } from "react"
import { Button } from "@mui/material"
export function Test(props: any) {

  console.log(props, "props");

  console.log(props.children, "children");
  const [value, setValue] = useState(0);
  const change = (val: number) => {
    setValue(value + 1);
  }
  useEffect(() => {
    // 创建状态
    console.log(value, "sdfs")
    return () => {
      // 销毁状态
      console.log("组件销毁");
    }
  }, [])
  useEffect(() => {
    console.log(value, "监听");
  }, [value])
  return (
    <div>
      <Button onClick={() => change(1)}>点击我哦</Button>
      {props.children}
    </div>
  )
}