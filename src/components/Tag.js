import React from 'react';
import styled from 'styled-components';
const StyledTag = styled.span`
    ${({ theme }) => `
        background-color: ${theme.palette.secondary.light};
        border: 1px solid ${theme.palette.secondary.light};
        padding: 2px 4px;
        border-radius: 4px;
        font-size: 0.7rem;
        color: white;
        font-weight: bold;
        margin-left: 10px;
        display: inline-block;
  `}
`;

export default class Section extends React.Component {
    render() {
        return (
            <StyledTag>
                {this.props.children}
            </StyledTag>
        )
    }
}