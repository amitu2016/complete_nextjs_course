"use client";

import { useEffect, useState, useRef} from "react";

export default function Hooks(){
    // useState is a hook that lets you add state to functional components.
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  const [value, setValue] = useState({
        name: "",
        email: ""
  });

    // useEffect is a hook that lets you perform side effects in function components.
   useEffect(() => {
        console.log("Component mounted or updated");
   }, [counter]); // This effect runs when the component mounts and whenever the counter changes.
       
   useEffect(() => {
        const interval = setInterval(() => {
            setTimer(previous => previous + 1);
        }, 1000); // This effect runs when the component mounts and sets up a timer that increments every second.
       
        return () => clearInterval(interval); // This effect runs when the component unmounts and clears the timer.

    }, []); // Empty dependency array means this effect runs only once when the component mounts.

    const handleChange = (e) => {
        const { value } = e.target;
        const elem = e.target.getAttribute("data-name");
        setValue(p => {
            return {
                ...p,
                [elem]: value
            }
        });
        
    }

    const inputRef = useRef(null);

    const focusOnEmail = () => {
        console.log("Focusing on email input field");
        inputRef.current.focus(); // Focus on the email input field when the button is clicked.
    }

    return <div className="flex flex-col items-center justify-center h-screen">
    
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
            setCounter(previous => previous + 1);
            console.log("Button clicked!");
        }}>Increment</button>
    {counter}
    <h2>Timer: {timer}</h2>

    <input 
        type="text" 
        className="bg-black text-white font-bold py-2 px-4 rounded" 
        value={value.name}
        data-name="name"
        onChange={handleChange}
    />

    <input 
        type="email" 
        ref={inputRef}
        className="bg-black text-white font-bold py-2 px-4 rounded" 
        value={value.email}
        data-name="email"
        onChange={handleChange}
    />

    <button onClick={focusOnEmail} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Focus on Email</button>
    </div>
}