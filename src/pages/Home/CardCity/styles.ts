import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 30.8rem;
    height: 49.1rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 20px #00000012;
    border-radius: 1rem;
`;

export const Top = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    & > img:last-child {
        width: 100%;
        max-width: 28.8rem;
        height: 29.7rem;
    }
`;
export const Bottom = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-top: 1.7rem;
    & > h3 {
        width: 100%;
        max-width: 20rem;
        font-size: 1.8rem;
        font-weight: bold;
    }
    & > span {
        width: 100%;
        max-width: 10.4rem;
        font-size: 1.2rem;
        margin: 1.2rem 0rem;
    }
    & > h4 {
        width: 100%;
        max-width: 10.8rem;
        font-size: 1.4rem;
        font-weight: bold;
    }
`;
export const IconDiscount = styled.div`
    width: 7.2rem;
    line-height: 3.2rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.gray};
    position: absolute;
    top: 0rem;
    left: 0.4rem;
    & > span {
        font-size: 1.2rem;
        padding: 0rem 1.5rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary};
    }
`;
export const IconPlane = styled.img`
    position: absolute;
    top: 0rem;
    right: 0.4rem;
`;
