import styled from "styled-components";

export const HeaderComponentStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.65);
    justify-content: space-between;
    padding: 0 2vw;
    width: 100%;
    height: 6vw;
    z-index: 2;
    border-bottom: 0.3vh solid white;

    .logo-header {
        width: 5.4vw;
        cursor: pointer;
        margin-left: 6.5vw;
    }

    .header-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5vw;
        font-family: 'lora', serif;
        margin-right: auto;
        margin-left: auto;


        .container-header-text {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 11vw;

            .county-menu {
                position: absolute;
                top: 3.5vw;
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: start;
                background: rgba(0, 0, 0, 0.5);
                color: white;
                width: 100%;
                border-radius: .4vw;
                box-sizing: border-box;
                padding: 1vw;
                gap: .2vw;
                backdrop-filter: blur(10px);
                font-size: .8vw;
                visibility: hidden;
                transform: translateY(-20px);
                transition: 0.2s ease;

                span {
                    font-family: "Poppins", sans-serif;
                }
            }

            .header-text {
                color: #ffffff;
                font-size: 1.2vw;
                margin-right: 20px;
                margin-left: 20px;
                justify-content: center;
                cursor: pointer;
                transition: .3s ease;
            }

            .header-text:hover {
                transform: scale(1.5);
                transition: .3s ease;
                color: #969595;
            }

            .icon-text {
                font-size: 1.2vw;
                color: #ffff;
                position: relative;
                top: .3vw;
                transform: rotate(35deg);
                transition: 0.2s ease;
            }

            .icon-active {
                visibility: visible;
                transform: rotate(135deg);
                transition: 0.4s ease;
            }

            .down-menu {
                position: absolute;
                top: 3.5vw;
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: center;
                background: rgba(0, 0, 0, 0.5);
                color: white;
                width: 80%;
                border-radius: .4vw;
                box-sizing: border-box;
                padding: .5vw;
                gap: .4vw;
                backdrop-filter: blur(10px);
                visibility: hidden;
                transform: translateY(-20px);
                transition: .2s ease;

                span {
                    font-size: .8vw;
                    cursor: pointer;
                    font-family: "Poppins", sans-serif;
                }

                span:hover {
                    text-decoration: underline;
                    transition: .5s ease;
                }
            }

            .active {
                transition: .2s ease;
                position: absolute;
                visibility: visible;
                transform: translateY(0);
            }
        }
    }
`