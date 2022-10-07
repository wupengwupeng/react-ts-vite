import { useRef, useEffect } from "react";
import Typing from "@/utils/index";
export function TypingCard(props: any) {
  const { title, source } = props;

  const sourceEl: any = useRef();
  const outputEl: any = useRef();

  useEffect(() => {
    const typing = new Typing({
      source: sourceEl.current,
      output: outputEl.current,
      delay: 60,
    });
    typing.start();
  }, []);
  return (
    <div style={{ float: "left" }}>
      <div
        style={{ display: "none" }}
        ref={sourceEl}
        dangerouslySetInnerHTML={{ __html: source }}
      />
      <div ref={outputEl} />
    </div>
  );
}
