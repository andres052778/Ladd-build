import styled from "styled-components";

export const CertificateScreenStyled = styled.div`
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

        .videobackground {
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
            bottom: 1vw;

            .certificated {
                width: 20vw;
                height: 20vw;
            }

            .cheers-certificated {
                width: 30vw;
                height: 23vw;
            }
        }

        .info-container {
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 3vw;

            h1 {
                font-family: "Chief Blueprint";
                font-size: 2vw;
                position: relative;
                color: #ffff;
                text-align: center;
                width: 33vw;
                margin: 4vw auto auto 29vw;
                background: rgba(0, 0, 0, 0.5);
                padding: 1vw;
            }

            pre {
                white-space: pre-line;
                width: 45vw;
                position: relative;
                text-align: justify;
                font-family: "Chief Blueprint";
                font-size: 2vw;
                margin: 2vw 32vw auto auto;
                color: #ffff;
                background: rgba(0, 0, 0, 0.5);
                padding: 1vw;
            }
        }
    }
`