import styled from "styled-components";

export const EnergyScreenStyled = styled.div `

    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100vh;

    * {
        box-sizing: border-box;
    }


    section {
        display: flex;
        justify-content: start;
        align-items: start;
        width: 100%;
        height: 100vh;

        .videobackground {
            min-width: 100%;
            min-height: 100%;
            position: fixed;
        }

        .energypro {
            padding-top: 1vw;
            justify-content: center;
            align-items: center;
            text-align: center;
            align-content: center;
            position: relative;

            h1 {
                background: rgba(255, 255, 255, 0.60);
                width: 12vw;
                border-radius: .8vw;
                color: #000000;
                font-family: 'Courier New', serif;
                padding: .8vw;
                margin: 6vw auto 1vw auto;
                text-align: center;
                font-weight: bold;
                font-size: 1.6vw;
            }

            .energy-description {
                background: rgba(255, 255, 255, 0.60);
                border-radius: .8vw;
                color: #000000;
                float: left;
                font-family: "Poppins", sans-serif;
                font-size: 1vw;
                margin-left: 2vw;
                margin-right: 1vw;
                padding: 1.4vw;
                position: relative;
                text-align: justify;
                width: 70vw;
                white-space: pre-line;
            }

            .energy-img {
                width: 23vw;
                margin-right: 1vw;
                margin-left: 1vw;
                float: right;
                position: relative;
                border-radius: 1vw;
            }

            .energy-logo {
                width: 30vw;
                margin: 1vw 1vw 1vw 2vw;
                float: left;
                position: relative;
                border-radius: 1vw;
            }

            .energy-ladd {
                background: rgba(255, 255, 255, 0.60);
                color: #000000;
                width: 61vw;
                white-space: pre-line;
                font-family: "Poppins", sans-serif;
                font-size: 1.5vw;
                margin-right: 2vw;
                margin-left: 2vw;
                margin-top: 1vw;
                border-radius: .8vw;
                padding: 1vw;
                text-align: start;
                position: relative;
                float: right;
            }

            .energy-public {
                background: rgba(255, 255, 255, 0.60);
                color: #000000;
                width: 61vw;
                white-space: pre-line;
                font-family: "Poppins", sans-serif;
                font-size: 1.3vw;
                margin: 2.5vw 2vw 1vw 2vw;
                border-radius: 1vw;
                padding: 1vw;
                text-align: start;
                position: relative;
                float: right;
            }
        }
    }
`