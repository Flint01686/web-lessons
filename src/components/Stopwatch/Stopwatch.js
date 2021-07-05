import React, {useEffect, useState} from 'react'
import Button from '../UI/Button';

function Timer(setCurrentOutput) {
    this.time = 0;
    this.timerId = false;
    this.toString = function()
    {
        let ms = this.time%100;
        let sec = Math.floor(this.time/100)%60;
        let min = Math.floor(this.time/6000)%60;
        let h = Math.floor(this.time/360000);
        return `${h} : ${min} : ${sec} : ${ms}`;
    };
    this.show = function()
    {
        setCurrentOutput(this.toString());
    };
    this.start = function()
    {
        if (!this.timerId)
        this.timerId = setInterval(() => {++this.time; this.show();}, 10);
    };
    this.stop = function()
    {
        clearInterval(this.timerId);
        this.timerId = false;
    };
    this.reset = function()
    {
        this.time = 0;
        this.stop();
        this.timerId = false;
        this.show();
    };
}
export default function Stopwatch()
{
    const [output, setOutput] = useState()
    const [timer, setTimer] = useState()
    let buttons = [
        {
            action: () => timer.start(),
            name: "Start"
        },
        {
            action: () => timer.stop(),
            name: "Stop"
        },
        {
            action: () => timer.reset(),
            name: "Reset"
        },
    ] 
    
    useEffect(() => {
        const timer = new Timer(setOutput)
        setTimer(timer)
        timer.show()
        return () => {
            timer.stop()
        }
    }, [])

    return (
        <div>
            <span>{output}</span>
            <div>
                {buttons.map(button => 
                    <Button key={button.name} action={button.action}>{button.name}</Button>)}
            </div>   
        </div>
    )
}

