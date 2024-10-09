import styled from "styled-components";

export const BuildingScreenStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100%;
    padding-top: 4vw;
    background: #f5f5f5;
    position: fixed;

    section {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100vh;
        position: relative;
        flex-direction: column;
        align-items: center;

        .wallpaper-container {
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

        .info-container {
            width: 100%;
            height: 50vh;
            position: relative;
            text-align: center;

            h1 {
                font-size: 4vw;
                font-family: "Chief Blueprint";
                margin-top: 2vw;
                -webkit-text-stroke: 0.2vh white;
            }

            pre {
                font-family: "Chief Blueprint";
                font-size: 2vw;
                width: 40vw;
                white-space: pre-line;
                text-align: justify;
                margin-left: 2vw;
                margin-top: 1vw;
                color: white;
                background: rgba(0, 0, 0, 0.6);
                padding: 1vw;
                border-radius: 1vw;
                border: solid white 0.3vh;
            }
        }
        .img-container{
            position: relative;
            width: 100%;
            height: 50%;
            align-content: center;
            display: flex;
            margin-top: 1vw;
            
            img{
                border-radius: 1vw;
                transition: ease 0.5s;
                width: 35vw;
                height: 30vh;
                margin: 2vw;
            }
            img:hover{
                transform: scale(1.1);
                transition: ease 0.5s;
            }
        }
        .aproved{
            position: fixed;
            width: 50vw;
            height: 40vh;
            right: 2vw;
            top: 12vw;
            
            img{
                height: 40vh;
                width: 50vw;
                border-radius: 1vw;
                transition: ease 0.5s;
            }
            img:hover{
                transform: scale(1.1);
                transition: ease 0.5s;
            }
        }
    }

`