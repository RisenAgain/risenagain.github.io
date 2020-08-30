import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSection = styled.div`
    margin-bottom: 4%;
    
    .header {
        margin-bottom: 10px;
    }

    .header > div {
        display: inline-block;
    }

    .header .title {
        font-size: 2rem;
        text-transform: uppercase;
    }

    .header .icon {
        float: right;
    }
`;


export default class Section extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        icon: PropTypes.object
    }
    render() {
        return (
            <StyledSection>
                <div className="header">
                    <div className="title">{this.props.title}</div>
                    <div className="icon">{this.props.icon}</div>
                </div>
                <div className="item">
                    {this.props.children}
                </div>
            </StyledSection>
        )
    }
}