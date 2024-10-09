import styled from "styled-components";

export const WoodScreenStyled = styled.div `

    position: fixed;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    * {
        box-sizing: border-box;
    }


    section {
        //display: flex;
        width: 100%;
        height: 100vh;

        .wallpapper-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;

            video {
                position: relative;
                top: 50%;
                left: 50%;
                object-fit: cover;
                width: 100%;
                height: 100vh;
                transform: translate(-50%, -50%);
            }
        }

        .wood-container {
            justify-content: center;
            align-items: center;
            text-align: center;
            align-content: center;
            position: relative;
            width: 100%;
            height: 40vh;

            h1 {
                background: rgba(0, 0, 0, 0.5);
                width: 15vw;
                border-radius: 5vw;
                color: #fdfdfd;
                font-family: "Chief Blueprint";
                padding: 1vw;
                margin: 6.5vw auto 1.5vw auto;
                text-align: center;
            }

            pre {
                background: rgba(0, 0, 0, 0.6);
                color: rgba(44, 44, 44, 0.6);
                -webkit-text-stroke: 0.2vh white;
                width: 100vw;
                white-space: pre-line;
                font-family: "Chief Blueprint";
                font-size: 2.5vw;
                border-radius: 2vw;
                padding: 1vw;
                text-align: justify;
                float: left;
                position: relative;
            }
        }
        .img-container {
            width: 100vw;
            height: 47vh;
            margin-top: 3vw;
            display: flex;
            justify-content: space-between;
            position: relative;
            gap: 2vw;
            padding: 1vw;
            
            .wood{
                width: 30vw;
                height: 30vh;
                transition: ease 0.5s;
                border-radius: 1vw;
            }
            .wood:hover{
                transition: ease 0.5s;
                transform: scale(1.1);
            }
        }
    }
`