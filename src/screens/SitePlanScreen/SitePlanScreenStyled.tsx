import styled from "styled-components";

export const SitePlanScreenStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100%;
    background: #000000;
    position: fixed;

    section {
        width: 100vw;
        height: 100vh;

        .img-container {
            width: 100vw;
            height: 20vh;
            display: flex;
            justify-content: space-between;

            .wallpapper {
                width: 50vw;
                height: 40vh;
                background-size: cover;
                background-position: right;
                background-image: url("/img/siteplan.jpeg");
            }

            .wallpapper-2 {
                width: 50vw;
                height: 40vh;
                background-size: cover;
                background-position: right;
                background-image: url("/img/siteplan2.jpg");
            }
        }

        .text-container {
            width: 30vw;
            height: 10vh;
            justify-content: center;
            text-align: center;


            h1 {
                font-family: "Chief Blueprint";
                font-size: 3vw;
                text-decoration: underline;
                color: black;
                -webkit-text-stroke: 0.2vh white;
            }
        }

        .description-container {

            width: 45vw;
            height: 20vh;
            text-align: justify;

            .description {
                position: relative;
                left: 2vw;
                font-size: 2.5vw;
                white-space: pre-line;
                font-family: "Chief Blueprint";
                color: #ffffff;
                -webkit-text-stroke: 0.2vh white;
                z-index: 1;
                background: rgba(0, 0, 0, 0.6);
                padding: 1vw;
                border-radius: 1vw;
                border: white solid 0.3vh;
            }
        }

        .galery {
            width: 100vw;
            display: flex;
            justify-content: space-between;
            padding: 1vw;
            position: relative;
            bottom: 1.5vw;

            .site-plan {
                width: 28vw;
                height: 48vh;
                border-radius: 1vw;
                transition: ease 0.5s;
            }

            .site-plan:hover {
                transform: scale(1.1);
                transition: ease 0.5s;
            }
        }
    }

`