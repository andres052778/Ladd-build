import styled from "styled-components";

export const CollaborationScreenStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100%;
    padding-top: 7vw;
    background: #f5f5f5;
    
    section{
        width: 100%;
        height: 100vh;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        
        .info-container{
            width: 100%;
            height: 100%;
            position: fixed;
            text-align: center;
            
            h1{
                font-family: "Chief Blueprint";
                font-size: 3vw;
                //width: 30vw;
            }
        }
    }
    
`