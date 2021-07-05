import styled from 'styled-components'

export const ClockStyle = styled.div`
span{
    font-size: 100px;
    color: white;
    margin: auto;
}
.main
{
    background-color: black;
    display: grid;
    height: 95vh;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    margin: 0;
    padding: 0;
}
.down
{
    margin-bottom: 0;
}
.up
{
    margin-top: 0;
    font-size: 50px;
}
`