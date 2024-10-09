import styled from "styled-components";

export const ElevationScreenStyled = styled.div`

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
            //display: flex;
            //justify-content: space-between;
            //align-content: space-between;
            //justify-items: center;
            //align-items: center;
            height: 100%;
            width: 100%;
            position: fixed;
            top: 1vw;
            z-index: 1;
            //padding-right: 3.5vw;
            //padding-left: 3vw;

            .elevation {
                width: 35vw;
                height: 15vw;
                //background: rgba(255, 255, 255, 0.4);
                position:relative;
                top: 30vw;
                left: 3vw;
            }
            .elevation:hover{
                transform: scale(1.20);
            }
            .elevation-left{
                width: 35vw;
                height: 15vw;
                //background: rgba(255, 255, 255, 0.4);
                position:relative;
                top: 30vw;
                left: 28vw;
            }
            .elevation-left:hover{
                transform: scale(1.20);
            }
        }
        .info-container{
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 8vw;
            
            h1 {
                font-family: "Chief Blueprint";
                font-size: 1.5vw;
                position: relative;
                color: #ffff;
                text-align: center;
                width: 25vw;
                margin: auto auto 1vw auto;
                background: rgba(0, 0, 0, 0.5);
                padding: 0.5vw;
                border-radius: 1vw;
            }
            pre {
                white-space: pre-line;
                width: 55vw;
                position: relative;
                text-align: justify;
                font-family: "Chief Blueprint";
                font-size: 2vw;
                margin: auto auto auto 2vw;
                color: #ffff;
                background: rgba(0, 0, 0, 0.5);
                padding: 1vw;
                border-radius: 1vw;
            }
        }
    }

`