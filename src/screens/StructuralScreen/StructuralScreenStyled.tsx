import styled from "styled-components";

export const StructuralScreenStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100vh;

    * {
        box-sizing: border-box;
    }


    section {
        justify-content: center;
        width: 100%;
        height: 100vh;
        position: relative;

        .video-container {
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
            position: fixed;
            width: 100%;
            height: 50%;
            text-align: center;

            h1 {
                font-size: 5vw;
                font-family: "Chief Blueprint";
                margin: 5vw auto auto auto;
                color: black;
                -webkit-text-stroke: 0.2vh white;
            }

            .render-description {
                font-family: "Chief Blueprint";
                font-size: 2vw;
                white-space: pre-line;
                width: 50vw;
                text-align: justify;
                margin: auto auto auto 2vw;
                background-color: rgba(0, 0, 0, 0.5);
                padding: 1vw;
                border-radius: 1vw;
                border: 0.1vh solid white;
                color: white;
            }
            img{
                width: 40vw;
                height: 15vw;
                position: relative;
                bottom: 11vw;
                left: 25vw;
                border-radius: 3vw;
                transition: ease 0.5s;
            }
            img:hover{
                transform: scale(1.1);
                transition: ease 0.5s;
            }
        }
        .img-container{
            width: 100vw;
            display: flex;
            justify-content: space-between;
            padding: 0.5vw 1vw;
            position: relative;
            top: 60vh;
            
            img{
                width: 22vw;
                height: 25vh;
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