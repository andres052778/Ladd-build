import styled from "styled-components";

export const VertexScreenStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100vh;
    background: black;

    * {
        box-sizing: border-box;
    }


    section {
        justify-content: start;
        align-items: start;
        width: 100%;
        height: 100vh;

        .info-container {
            width: 100%;
            height: 40vh;

            h1 {
                width: 30vw;
                color: #ffffff;
                font-family: "Chief Blueprint";
                font-size: 2vw;
                backdrop-filter: blur(5px);
                padding: 1vw;
                margin: 5vw auto 2vw auto;
                text-align: center;
            }

            pre {
                color: #ffffff;
                width: 90vw;
                white-space: pre-line;
                backdrop-filter: blur(5px);
                font-family: "Chief Blueprint";
                font-size: 1.5vw;
                text-align: justify;
                margin-left: 6vw;
                margin-right: 3vw;
                float: left;
                position: relative;
            }
        }

        .media-container {
            width: 100vw;
            display: flex;
            justify-content: space-between;
            padding: .5vw 1vw;

            video {
                width: 40vw;
            }
        }
    }




`