import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    height:70px;
    background: #0B267D;
    border-bottom: 5px solid #EF700E;
    display: flex;
`

export const LeftSide = styled.div `
    width: 50%;
    height: 70px;
    display: flex;
    align-items:center;
    padding-left: 30px;
    img{
        width: 90px;
        height: 35px;
    }

`

export const RightSide = styled.div `
    width: 50%;
    height: 70px;
    display: flex;
    align-items:center;
    justify-content: flex-end;
    flex-wrap: wrap;


    a{
        color: #FFF;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color:#EF700E;
        }
    }

    #notification{
        border:none;
        background: none;
        img{
            width: 20px;
            height: 25px;
        }

        span{
            background:#FFF;
            color: #EF700E;
            padding: 1px 4px;
            border-radius:50%;
            position:relative;
            font-weight: bold;
            font-size: 12px;
            top:-15px;
            right: 10px;
        }
        &:hover{
            opacity: 0.5;
            cursor: pointer;
        } 
    }
    .divide::after{
        content:"|";
        margin: 0 5px;
        color: #FFF;
    }

`