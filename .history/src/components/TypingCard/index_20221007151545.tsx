import { useRef, useEffect } from "react";
import Typing from "@/utils/index";
export function TypingCard(props: any) {
  const { title, source } = props;

  const sourceEl = useRef();
  const outputEl = useRef();

  useEffect(() => {
    const typing = new Typing({
      source: sourceEl.current,
      output: outputEl.current,
      delay: 30,
    });
    typing.start();
  }, []);
  return (
    <div>
      <div
        style={{ display: "none" }}
        ref={sourceEl}
        dangerouslySetInnerHTML={{ __html: source }}
      />
      <div ref={outputEl} />
    </div>
  );
}
