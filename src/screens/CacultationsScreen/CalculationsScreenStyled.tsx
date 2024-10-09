import styled from "styled-components";

export const CalculationsScreenStyled = styled.div`
    width: 100%;
    height: 100vh;
    background: #000000;
    justify-content: center;
    align-items: center;
    position: relative;

    * {
        box-sizing: border-box;
    }

    section {
        justify-content: start;
        align-items: start;
        width: 100%;
        height: 100vh;
        position: relative;
        overflow: hidden;
        
        .video-container {
            height: 22vw;
            width: 42vw;
            position: relative;
            left: 1vw;
            top: 23vw;
            
            video {
                position: relative;
                width: 100%;
                height: 100%;
            }
        }  

        .img-container {
            height: 30vw;
            width: 50vw;
            position: relative;
            left: 48vw;
            bottom: 11vw;
            
            img {
                height: 100%;
                width: 100%;
                position: relative;
            }
        }
        .text-container {
            width: 100%;
            height: 100vh;
            position: relative;
            bottom: 53vw;

            h1 {
                font-family: "Chief Blueprint";
                font-size: 2vw;
                position: relative;
                color: #ffff;
                text-align: center;
                margin: 7vw auto 2vw auto;
            }

            pre {
                white-space: pre-line;
                width: 45vw;
                position: relative;
                text-align: justify;
                font-family: "Chief Blueprint";
                font-size: 2vw;
                left: 2vw;
                color: #ffff;
            }
        }

    }
`