import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Test } from '@/components/Test'
import Parent from '@/components/TestTwo';
import { Counter } from '@/components/count'
import { createRef } from "react";
export function About() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Test value={'woshi你大爷'}>
        <div>
          你好完
        </div>
      </Test>
      <Parent />

      <Counter></Counter>

    </div>
  );
}
