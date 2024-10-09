import styled from "styled-components";

export const PlanScreenStyled = styled.div`

    width: 100%;
    height: 100vh;
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

        video {
            position: relative;
            top: 50%;
            left: 50%;
            object-fit: cover;
            width: 100%;
            height: 100vh;
            transform: translate(-50%, -50%);
        }

        .img-container {
            display: flex;
            justify-content: space-between;
            align-content: space-between;
            justify-items: center;
            align-items: center;
            height: 100%;
            width: 100%;
            position: absolute;
            top: 1vw;
            z-index: 1;
            padding-right: 3.5vw;
            padding-left: 3vw;

            .proposed {
                width: 25vw;
                height: 30vw;
                background: rgba(255, 255, 255, 0.7);
            }

            .proposed:hover {
                transform: scale(1.20);
            }

            .floor {
                width: 25vw;
                height: 30vw;
                background: rgba(255, 255, 255, 0.7);
            }
            .floor:hover{
                transform: scale(1.25);
            }
        }

        .info-container {
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 8vw;

            pre {
                white-space: pre-line;
                width: 35vw;
                position: relative;
                text-align: justify;
                font-family: "Chief Blueprint";
                font-size: 2vw;
                margin: auto auto 2vw auto;
                color: #ffff;
                background: rgba(0, 0, 0, 0.5);
                padding: 1vw;
            }
        }
    }

`