import styled from 'styled-components'

export const CalculatorStyle = styled.div`
    body
    {
        margin: 0;
        padding: 0;
    }
    .calc
    {
        width: 50vw;
        height: 100%;
        display: grid;
        grid-template-areas:"screenValues screenValues screenValues screenValues"
                            "com com com com"
                            "dig dig dig eql"
                            "dig dig dig eql"
                            "dig dig dig eql"
                            "zer zer zer eql";
    }
    .calc__screenValues
    {
        grid-area: screenValues;
        font-size: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        text-align:right;
        overflow-x: auto;
        border: 1px black solid;
        min-height: 50px;
    }
    .calc__computing
    {
        grid-area: com;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    .calc__digits_noZero
    {
        grid-area: dig;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
    .calc__panel_zero
    {
        grid-area: zer;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .calc__eq
    {
        grid-area: eql;
    }
    button{
        font-size: 40px;
    }
`