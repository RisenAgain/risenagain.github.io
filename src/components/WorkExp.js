import React from 'react';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import 'fontsource-raleway/500-normal.css'
import 'fontsource-lato/700-normal.css'
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const StyledWorkExp = styled.div`
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
            line-height: 40px;
        }
        
        .duration {
            inline-block;
            text-align: right;
        }

        .duration div {
            display: inline-block;
            font-family: 'Roboto';
        }

        .subtitle .position,
        .subtitle .department {
            display: inline-block;
            font-family: 'Raleway';
            text-transform: uppercase;
            margin-right: 5px;
        }

        .subtitle .position::first-letter,
        .subtitle .department::first-letter {
            font-size: 1.5em;
        }

        .location {
            font-size: 16px;
            text-transform: none;
            display: inline-block;
            margin-left: 10px;
        }

        .location svg {
            vertical-align: sub;
        }

        @media screen and (max-width: ${theme.breakpoints.values['sm']}px) {
            .subtitle .position::first-letter
            .subtitle .department::first-letter {
                font-size: 14px;
            }

            .subtitle .position,
            .subtitle .department {
                font-size: 10px;
            }

            .header > .title {
                font-size: 1rem;
                line-height: inherit;
            }

            .location {
                display: block;
                margin-left: 0;
                margin-top: 5px;
            }

            .subtitle .duration {
                font-size: 14px;
                text-align: left;
            }
        }

        .subtitle .icon {
            vertical-align: sub;
        }

        .description li {
            margin-bottom: 10px;
        }
    `}
`;


export default function WorkExp(props) {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <StyledWorkExp>
            <Grid container direction={smallScreen ? 'column-reverse' : 'row'} justify="space-between" className="header" height={40}>
                <Grid item className="title" height="100%">{props.title}
                    <div className="location">
                        <span><LocationOnOutlinedIcon fontSize="small" /></span>
                        <span>{props.location}</span>
                    </div>
                </Grid>
                <Grid item className="logo" height="100%">
                    {props.logo}
                </Grid>
            </Grid>
            {props.positions.map((position) => (
                <Grid container className="subtitle" justify="space-between" direction={smallScreen ? 'column' : 'row'}>
                    <Grid container item xs justify="flex-start">
                        <Grid item>
                            <span className="icon">
                                <PersonIcon fontSize={smallScreen ? 'small' : 'default'} color="primary"/>
                            </span>
                            {position.title.split(' ').map(word => (
                                <div className="position">{word}</div>
                            ))}
                        </Grid>
                        <Grid item>
                            <span className="icon">
                                <PeopleIcon fontSize={smallScreen ? 'small' : 'default'} color="secondary"/>
                            </span>
                            {position.department.split(' ').map(word => (
                                <div className="department">{word}</div>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={smallScreen ? 12 : 2}>
                        <div className="duration">
                            <span className="icon">
                                <DateRangeIcon fontSize={smallScreen ? 'small' : 'default'} color="secondary"/>
                            </span>
                            <div className="from">{position.from}</div>-
                            <div className="to">{position.to}</div>
                        </div>
                    </Grid>
                </Grid>
            ))}
            <div className="description">
                {props.children}
            </div>
        </StyledWorkExp>
    )
}
