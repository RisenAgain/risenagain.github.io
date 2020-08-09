import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import 'fontsource-raleway/500-normal.css'
import 'fontsource-lato/700-normal.css'
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import DateRangeIcon from '@material-ui/icons/DateRange';

const StyledSectionItem = styled.div`
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
        line-height: 40px;
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


export default class SectionItem extends React.Component {
    static propTypes = {
        title: PropTypes.string
    }
    render() {
        return (
            <StyledSectionItem>
                <Box className="header" height={40}>
                    <Box className="title" height="100%">{this.props.title}</Box>
                    <Box className="logo" height="100%">
                        {this.props.logo}
                    </Box>
                </Box>
                <div className="subtitle">
                    <span className="icon">
                        <PersonIcon height={16} width={16} color="primary"/>
                    </span>
                    {this.props.position.split(' ').map(word => (
                        <div className="position">{word}</div>
                    ))}
                    <span className="icon">
                        <PeopleIcon height={16} width={16} color="secondary"/>
                    </span>
                    {this.props.department.split(' ').map(word => (
                        <div className="department">{word}</div>
                    ))}
                    <div className="duration">
                        <span className="icon">
                            <DateRangeIcon height={16} width={16} color="secondary"/>
                        </span>
                        <div className="from">{this.props.from}</div>-
                        <div className="to">{this.props.to}</div>
                    </div>
                </div>
                <div className="description">
                    {this.props.children}
                </div>
            </StyledSectionItem>
        )
    }
}