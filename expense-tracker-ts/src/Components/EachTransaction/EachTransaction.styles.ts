import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Button = styled.button`
    position: absolute;
    left: -1.5%;
    padding: 0px 6px;
    opacity: 0;
    cursor: pointer;
    background-color: white;
    border: 0;
    color: red;
    font-size: 20px;
    outline: none;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 1;
    }
`;



interface Props {
    mode: string
}

export const List = styled.li<Props>`
    list-style-type: none;
    background: ${({ mode }) => (mode === 'income' ? 'rgba(215, 255, 215, .6);' : 'rgba(255, 215, 215, .6);')};
    color: ${({ mode }) => (mode === 'income' ? '#019142' : '#940416')};
    padding: 8px 3px;
    margin: 4px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover ${Button}{
        opacity: 1;
    }
`;

export const Text = styled.span`
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 18px;
`;
export const Amount = styled.span`
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 18px;
`;