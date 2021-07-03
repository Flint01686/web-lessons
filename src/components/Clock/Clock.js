import React, { useEffect, useState } from 'react'
import {ClockStyle} from "../style/ClockStyle"

function Clock(setCurrentOutput) {
    this.toString = function()
    {
        let time = new Date();
        let prems = Math.round(time.getMilliseconds() / 100);
        let ms = prems > 9 ? prems : "0" + prems;
        let sec = time.getSeconds();
        let min = time.getMinutes();
        let h = time.getHours();
        return `${h} : ${min} : ${sec} : ${ms}`;
    };
    this.show = function()
    {
        // output.innerHTML = this.time;
        setCurrentOutput(this.toString());
    };
    this.start = function()
    {
        if (!this.timerId)
        this.timerId = setInterval(() => {this.show();}, 10);
    };
}

export default function ClockComponent()
{
    const [output,setOutput] = useState();

    let timer = new Clock(setOutput);

    useEffect(() => {
        timer.show(); 
        timer.start();
    }, [])
     

    return(
        <ClockStyle>
            <div className="root">
                <span className="down">{output}</span>
                <span className="up">hh : min : sec : ms</span>
            </div>
        </ClockStyle>
    )
} 