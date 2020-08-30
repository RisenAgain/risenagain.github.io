import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import 'fontsource-raleway/500-normal.css'
import 'fontsource-lato/700-normal.css'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import PeopleIcon from '@material-ui/icons/People';

const StyledPublication = styled.div`
    ${({ theme }) => `
        padding: 2% 0 0 0;

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

        .where {
            font-size: 1.2rem;
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

        @media screen and (max-width: ${theme.breakpoints.values['sm']}px) {
            .subtitle .author::first-letter {
                font-size: 14px;
            }

            .subtitle .author {
                font-size: 10px;
            }

            .header > .title {
                font-size: 1rem;
                line-height: inherit;
            }
            
            .description {
                font-size: 10px;
            }
        }

        .subtitle .icon {
            vertical-align: sub;
        }
    `}
`;


export default function Publication(props) {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <StyledPublication>
            <Box className="header">
                <Box className="title" height="100%">
                    {props.title}
                    <span className="link">
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <OpenInNewIcon fontSize={smallScreen ? 'small' : 'default'} style={{verticalAlign: 'sub'}}></OpenInNewIcon>
                        </a>
                    </span>
                </Box>
            </Box>
            <div className="subtitle">
                <span className="icon">
                    <PeopleIcon fontSize={smallScreen ? 'small' : 'default'} color="secondary"/>
                </span>
                {props.authors.map((author) => (
                    <div className="author">{author}</div>
                ))}
            </div>
            <div className="where">
                {props.where}
            </div>
            <div className="description">
                {props.children}
            </div>
        </StyledPublication>
    )
}