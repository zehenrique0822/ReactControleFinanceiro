import styled from "styled-components";

export const Container = styled.div`
    backgroun-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
`;

export const Button = styled.button`
    background-color: #0078D7;
    border-radius: 5px;
    border:none;
    color: white;
    padding: 5px 35px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;  
`;

export const Input = styled.input`
    margin-left: 20px;
    border-radius: 5px;
    border: solid black 1px;
`;

export const Select = styled.select`
    margin-left: 20px;
    border-radius: 5px;
    width: 150px;    
    border: solid black 1px;
`;

export const Label = styled.label`    
    margin-left: 20px;
    font-weight: bold; 

`;

export const ContainerItems = styled.div` 
     display: flex;
     flex-direction:column;   
     .Button {
        margin-top: 17px;
        margin-left: 20px;
     }
`;

