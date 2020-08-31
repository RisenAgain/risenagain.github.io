import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import 'fontsource-raleway/500-normal.css'
import 'fontsource-lato/700-normal.css'
import DateRangeIcon from '@material-ui/icons/DateRange';

const StyledEducation = styled.div`
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

        .degree {
            // font-size: 16px;
            font-weight: 500;
        }
        @media screen and (max-width: ${theme.breakpoints.values['sm']}px) {
            .subtitle .department::first-letter {
                font-size: 18px;
            }

            .subtitle .department {
                font-size: 14px;
            }

            .subtitle .duration {
                font-size: 14px;
            }

            .header > .title {
                font-size: 1rem;
                line-height: inherit;
            }
        }

        .subtitle .icon {
            vertical-align: sub;
        }

        .description {
            margin-top: 5px;
        }
    `}
`;


export default function Education(props) {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <StyledEducation>
            <Box className="header">
                <Box className="title" height="100%">{props.title}</Box>
            </Box>
            <div className="subtitle">
                {props.department.split(' ').map(word => (
                    <div className="department">{word}</div>
                ))}
                <div className="duration">
                    <span className="icon">
                        <DateRangeIcon fontSize={smallScreen ? 'small' : 'default'} color="secondary"/>
                    </span>
                    <div className="from">{props.duration.from}</div>-
                    <div className="to">{props.duration.to}</div>
                </div>
            </div>
            <div className="degree">{props.degree} | {props.grades}{props.scale && `/${props.scale}`}</div>
            <div className="description">
                {props.children}
            </div>
        </StyledEducation>
    )
}