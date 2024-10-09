import styled from "styled-components";

export const ChiefArchitectScreenStyled = styled.div `

    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

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
        background: #000000;

        .video-container {
            position: relative;
            top: 8vw;
            left: 63vw;
            width: 30vw;
            height: 20vw;

            video {
                position: relative;
                width: 100%;
                height: 100%;
            }
        }
        .architect-container{
            position: relative;
            width: 40vw;
            height: 20vw;
            
            video{
                position: relative;
                width: 100%;
                height: 100%;
                top: 7vw;
                bottom: 2vw;
            }
        }

        .chief-container {
            position: relative;
            width: 100%;
            height: 100vh;
            bottom: 40vw;
            
            h1 {
                width: 30vw;
                color: #ffff;
                font-family: 'Courier New', serif;
                margin: 7vw auto 2vw auto;
                text-align: center;
                font-weight: bold;
                font-size: 2vw;
                position: relative;
            }
            
            .chief-information{
                color: #ffff;
                position: relative;
                width: 55vw;
                white-space: pre-line;
                text-align: justify;
                font-family: "Poppins", sans-serif;
                font-size: 2vw;
                left: 2vw;
            }
            .chief-client{
                color: #ffff;
                position: relative;
                width: 50vw;
                white-space: pre-line;
                text-align: justify;
                font-family: "Poppins", sans-serif;
                top: 1vw;
                left: 45vw;
                bottom: 2vw;
                font-size: 2vw;
                margin: 1vw;
            }
        }
    }
`