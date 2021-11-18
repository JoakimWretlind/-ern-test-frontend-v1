import styled from 'styled-components';

export const Section = styled.section`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &#home{
        background-color: #fff;
    }
    &#tweets{
        background-color: lightblue;
    }
    &#jokes{
        background: lightgoldenrodyellow;
    }
    &#troops {
        flex-direction: column;
        padding: 10rem 3rem;
        background: lightyellow;
    }
`;