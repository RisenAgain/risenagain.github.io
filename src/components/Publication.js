import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import 'fontsource-raleway/500-normal.css'
import 'fontsource-lato/700-normal.css'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import PeopleIcon from '@material-ui/icons/People';

const StyledPublication = styled.div`
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


export default class Publication extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        where: PropTypes.string,
        authors: PropTypes.array,
    }
    render() {
        return (
            <StyledPublication>
                <Box className="header" height={40}>
                    <Box className="title" height="100%">
                        "{this.props.title}"
                        <span className="link">
                            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
                                <OpenInNewIcon></OpenInNewIcon>
                            </a>
                        </span>
                    </Box>
                </Box>
                <div className="where">
                    {this.props.where}
                </div>
                <div className="subtitle">
                    <span className="icon">
                        <PeopleIcon height={16} width={16} color="secondary"/>
                    </span>
                    {this.props.authors.map((author) => (
                        <div className="author">{author}</div>
                    ))}
                </div>
                <div className="description">
                    {this.props.children}
                </div>
            </StyledPublication>
        )
    }
}