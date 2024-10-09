import styled from "styled-components";

export const LandScapingScreenStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100%;
    position: fixed;

    section {
        display: flex;
        justify-content: center;
        align-items: start;
        width: 100%;
        height: 100vh;
        position: fixed;

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
        .info-container{
            position: relative;
            padding-top: 7vw;
            
            h1{
                font-size: 3vw;
                font-family: "Chief Blueprint";
                -webkit-text-stroke: 0.2vh white;
            }
        }

        .img-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            position: fixed;
            gap: 5vw ;
            padding: 12vw 2vw 2vw;

            img {
                width: 25vw;
                height: 30vh;
                border-radius: 50%;
                transition: ease 0.5s;
                border: 0.5vh solid white;
            }
            img:hover{
                transform: scale(1.1);
                transition: ease 0.5s;
            }
        }
    }

`