import React from 'react';
import styled from 'styled-components';
const StyledTag = styled.span`
    ${({ theme }) => `
        background-color: ${theme.palette.grey[100]};
        border: 1px solid ${theme.palette.grey[100]};
        padding: 2px 6px;
        border-radius: 4px;
        font-size: inherit;
        color: ${theme.palette.grey[700]};
        // font-weight: bold;
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