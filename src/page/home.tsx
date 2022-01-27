import Child from '@/components/child'
import { useState } from 'react';
export function Home() {
    const [name, setName] = useState('WUPENG');
    const [age, setAge] = useState(12);
    const emit = (val: any) => {
        console.log(val);
    }
    return (
        <div>Home
            <Child slot={<div>我是solt</div>} {...{ name, age }} emit={emit} />
        </div>
    )
}