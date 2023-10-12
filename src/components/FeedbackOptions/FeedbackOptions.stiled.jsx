import styled from "styled-components";
export const BtnList = styled.ul`
    display: flex;
    gap: 12px;
    margin: 20px 0;
`
export const BtnListItem = styled.button`
    background-color: ${({name}) => {
    switch (name) {
        case "good":
            return "#2E8B57"
        case "bad":
            return "#A52A2A"
        case "neutral":
            return "#EEE8AA"
    
        default:
            break;
    }
    }};
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 10px;
    font-weight: 600;
    font-size: 20px;
    
`