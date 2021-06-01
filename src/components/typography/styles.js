import styled from "styled-components";

export const Typography = styled.p`
    font-size: ${({ theme, size = 'md' }) => theme.fontSize[size]};
    font-weight:${({ theme, weight = 'regular' }) => theme.fontWeight[weight]};
    color: ${({ theme, color = 'one' }) => theme.colors[color]};
    margin-left: ${({ marginLeft }) => marginLeft || 0};
    margin-right: ${({ marginRight }) => marginRight || 0};
    text-align:  ${({ textAlign }) => textAlign || 'left'} ;
    text-transform:  ${({ textTransform }) => textTransform || 'none'};
    white-space: ${({ space }) => space || 'none'};
`;
