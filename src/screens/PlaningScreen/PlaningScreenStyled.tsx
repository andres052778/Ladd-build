import styled from "styled-components";

export const PlaningScreenStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100vh;
    background-image: url("/img/aproved.jpg");
    background-size: cover;
    background-position: bottom;

    * {
        box-sizing: border-box;
    }

    section {
        justify-content: center;
        width: 100%;
        height: 100vh;
        position: fixed;

        .info-container {
            position: fixed;
            width: 100vw;
            height: 50vh;
            text-align: center;

            h1 {
                font-family: "Chief Blueprint";
                font-size: 3vw;
                margin: 6vw auto auto auto;
                color: black;
                -webkit-text-stroke: 0.2vh white;
            }

            pre {
                color: #ffffff;
                font-family: "Chief Blueprint";
                font-size: 2vw;
                width: 40vw;
                white-space: pre-line;
                text-align: justify;
                margin-left: 2vw;
                -webkit-text-stroke: 0.1vh white;
                background: rgba(0, 0, 0, 0.5);
                padding: 1vw;
                border-radius: 1vw;
                border: 0.1vh solid white;
                margin-bottom: 1vw;
            }

            img {
                height: 55vh;
                width: 45vw;
                position: fixed;
                bottom: 2vw;
            }
        }

        .video-container {
            position: fixed;
            width: 100vw;
            height: 50vh;
            text-align: start;
            top: 55vh;

            video {
                margin-top: 1vw;
                width: 40vw;
                height: 20vw;
                position: fixed;
            }
        }
    }

`