
import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import 'fontsource-raleway/500-normal.css'
import 'fontsource-lato/700-normal.css'
import DateRangeIcon from '@material-ui/icons/DateRange';

const StyledProject = styled.div`
    padding: 2% 0 2% 0;

    .header {
        margin-bottom: 10px;
    }

    .header > div {
        display: inline-block;
    }

    .header > .title {
        font-family: 'Lato';
        font-size: 1.3rem;
    }

    .header > .logo {
        float: right;
    }

    .duration {
        float: right;
    }
    
    .duration div {
        display: inline-block;
        font-family: 'Roboto';
    }

    .subtitle > div {
        display: inline-block;
        font-family: 'Raleway';
        text-transform: uppercase;
        margin-right: 5px;
    }

    .subtitle > div::first-letter {
        font-size: 1.5em;
    }

    .subtitle .icon {
        vertical-align: sub;
    }

    .description li {
        margin-bottom: 10px;
    }

`;


export default class Project extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        org: PropTypes.string,
        duration: PropTypes.object
    }
    render() {
        return (
            <StyledProject>
                <Box className="header" height={40}>
                    <Box className="title" height="100%">{this.props.title}</Box>
                </Box>
                <div className="subtitle">
                    {this.props.org.split(' ').map(word => (
                        <div className="position">{word}</div>
                    ))}
                    <div className="duration">
                        <span className="icon">
                            <DateRangeIcon height={16} width={16} color="secondary"/>
                        </span>
                        <div className="from">{this.props.duration.from}</div>-
                        <div className="to">{this.props.duration.to}</div>
                    </div>
                </div>
                <div className="description">
                    {this.props.children}
                </div>
            </StyledProject>
        )
    }
}