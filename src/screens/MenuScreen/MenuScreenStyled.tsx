import styled from "styled-components";

export const MenuScreenStyled = styled.div`

    position: absolute;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;


    section {
        display: flex;
        justify-content: start;
        align-items: start;
        width: 100%;
        height: 100vh;
        position: relative;

        .leftbar {
            width: 23vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.65);
            z-index: 1;
            position: fixed;
            border-right: solid #ffff;
            top: 6vw;
            text-align: center;
            justify-content: center;

            h1 {
                font-family: 'Courier New', serif;
                font-size: 2vw;
                color: #ffff;
                width: 22vw;
                margin-top: 1vw;
                text-align: center;
                position: relative;
            }
            pre{
                font-family: "Courgette", cursive;
                color: white;
                margin-bottom: 1vw;
                font-size: 1vw;
            }
            
            h2 {
                font-family: "Great Vibes", serif;
                font-size: 4vw;
                color: #ffff;
            }
            .description {
                color: #ffff;
                width: 21vw;
                white-space: pre-line;
                font-family: "Courgette", cursive;
                font-size: 1.5vw;
                position: relative;
                text-align: justify;
                margin: 2vw auto;
            }
            .description-two {
                color: #ffff;
                width: 21vw;
                margin-left: auto;
                margin-right: auto;
                white-space: pre-line;
                font-family: "Courgette", cursive;
                font-size: 1.5vw;
                text-align: justify;
                position: relative;
                margin-top: 3vw;
            }
        }
        .content-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            

            .videobackground {
                position: relative;
                top: 50%;
                left: 50%;
                object-fit: cover;
                width: 100%;
                height: 100vh;
                transform: translate(-50%, -50%);
            }
        }
    }
    .icon-container {
        width: 5vw;
        height: 5vw;
        z-index: 5;
        position: relative;
        bottom: 7vw;
        left: 90vw;
        

        .icon-category {
            position: relative;
            font-size: 4vw;
            color: #ffff;
            cursor: pointer;
            transition: .3s ease;
        }
        .icon-category:hover{
            transform: scale(1.5);
            transition: .3s ease;
        }

        .up-menu {
            position: relative;
            right: 4vw;
            bottom: 12vw;
            display: flex;
            flex-direction: column;
            align-items: end;
            justify-content: end;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            width: 8vw;
            border-radius: 0.4vw;
            box-sizing: border-box;
            padding: 0.4vw;
            gap: 0.4vw;
            font-size: 1.5vw;
            font-family: "Courgette",cursive;
            cursor: pointer;
            transform: translateY(20px);
            transition: .2s ease;
            visibility: hidden;
            
            .text-content:hover{
                text-decoration: underline;
            }
        }
        .active{
            visibility: visible;
            transform: translateY(0);
            transition: 0.4s ease;
        }
    } 
    
    @media (max-width: 1024px){

        section {
            display: flex;
            justify-content: start;
            align-items: start;
            width: 100%;
            height: 100vh;
            position: relative;

            .leftbar {
                width: 23vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.65);
                z-index: 1;
                position: fixed;
                border-right: solid #ffff;
                top: 6vw;
                text-align: center;
                justify-content: center;

                h1 {
                    font-family: 'Courier New', serif;
                    font-size: 2.5vw;
                    color: #ffff;
                    width: 22vw;
                    margin: 2vw auto;
                    text-align: center;
                    position: relative;
                }

                h2 {
                    font-family: "Great Vibes", serif;
                    font-size: 5vw;
                    color: #ffff;
                }

                .description {
                    color: #ffff;
                    width: 21vw;
                    white-space: pre-line;
                    font-family: "Courgette", cursive;
                    font-size: 2vw;
                    position: relative;
                    text-align: justify;
                    margin: 2vw auto;
                }

                .description-two {
                    color: #ffff;
                    width: 21vw;
                    margin-left: auto;
                    margin-right: auto;
                    white-space: pre-line;
                    font-family: "Courgette", cursive;
                    font-size: 2vw;
                    text-align: justify;
                    position: relative;
                    margin-top: 3vw;
                }
            }
        }
    }   
    
    
    
`