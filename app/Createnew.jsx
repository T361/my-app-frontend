'use client'
import { useState } from "react";
import './Createnew.css'
import { useRouter } from 'next/navigation';
export default function Create()
{
    const router = useRouter();
    let [count,setCount] = useState(0)
    let incCount = () =>{
        setCount(count +1);
         router.replace("/Createpage")
    }
    return(
        <div>
            <button onClick={incCount}>
                    <div className="child4">Create a new account</div>
            </button>
            {/* <p>number of accounts made = {count}</p> */}
        </div>
    );
}