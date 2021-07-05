import styled from 'styled-components'

export const SidebarStyle = styled.div`
.root
{
    display: flex;
    flex-direction: row;
}
a:-webkit-any-link {
    color: white;
    text-decoration: none;
    cursor: pointer;
}
.sidebar
{
    padding-left: 0;
    background-color: dimgray;
    ul
    {
        padding: 0 1rem;
        li
        {
            color: white;
            text-decoration: none;
            list-style-type: none; 
            margin-bottom: 5px;
            a
            {
                color: white;
                text-decoration: none;
            }
            a:hover
            {
                color: turquoise;
            }
        }
    }
}
.content
{
    width: 100%;
}
`