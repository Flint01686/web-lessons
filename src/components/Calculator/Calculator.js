import React, { useState } from 'react'
import Button from '../UI/Button';
import { CalculatorStyle } from '../style/CalculatorStyle';

export default function Calculator()
{
    let buttons = []
    const [screenValues, setScreenValues] = useState("");
    buttons.push(
        ['+', '-', '×', '÷'],
        [7, 8, 9, 4, 5, 6, 1, 2, 3],
        [0, '.', 'C'],
        );
    function isPointDeclared(breakers, context)
    {
        for (let letter of context)
            if (letter === ".") return true;
            else if (breakers.includes(letter)) return false;
        return false
    }
    let specialCommands = ["+","-","×","÷","."];
    let lastOperation = () => screenValues.toString().slice(screenValues.length-1, screenValues.length)

    function addToScreenValues(operation)
    {
        let currentScreenValues = screenValues;
        if (operation === "C") {setScreenValues(""); return;};    
        if (operation === ".")
            if (isPointDeclared(specialCommands, currentScreenValues.split("").reverse())) return;
        if (["×","÷","."].includes(operation))
            if ((["-","+"].includes(lastOperation()) && currentScreenValues.length === 1) ||
                lastOperation() === "") return;
        if (specialCommands.includes(lastOperation()) && specialCommands.includes(operation)) 
        {      
            if (operation === ".") return;
            currentScreenValues= currentScreenValues.slice(0, currentScreenValues.length - 1);   
        } 
        setScreenValues(currentScreenValues.toString() + operation);
    }
    function submit()
    {
        if (specialCommands.includes(lastOperation())) return;
        const value = screenValues.toString().replaceAll("÷","/").replaceAll("×","*")
        if (value === "") return;
        try {
            let solvingResult = eval(value)
            setScreenValues(solvingResult);
        } catch (error) {
            console.log(
                'err', value
            );
        }
    }
    return (
        <CalculatorStyle>
            <div className="calc">
                <div id="output" className="calc__screenValues">{screenValues}</div>
                <nav className="calc__computing">
                    {buttons[0].map(val => <Button key={val} action={(e) => 
                        addToScreenValues(val)}>{val}</Button>)}
                </nav>
                <div className="calc__digits_noZero">
                    {buttons[1].map(val => <Button key={val} action={(e) => 
                        addToScreenValues(val)}>{val}</Button>)}
                </div>
                <nav className="calc__panel_zero">
                    {buttons[2].map(val => <Button key={val} action={(e) => 
                        addToScreenValues(val)}>{val}</Button>)}
                </nav>
                <Button key={"="} className='calc__eq' action={submit}>=</Button>
            </div>
        </CalculatorStyle>
    )
}