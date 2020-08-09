import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {ReactComponent as Gmail} from '../assets/icons/gmail.svg';
import {ReactComponent as HackerRank} from '../assets/icons/hackerrank.svg';
import {ReactComponent as Instagram} from '../assets/icons/instagram.svg';

const StyledHeader = styled.div`
    text-align: center;

    .name {
        font-size: 15vw;
        margin-bottom: 20px;
    }

    @media screen and (min-width: 1200px) {
        .name {
           font-size: 100px;
        }
    }

    .first-name {
        font-weight: lighter;
        margin-right: 10px;
    }

    .last-name {
        font-weight: 300;
        margin-left: 10px;
    }

    .info {
        width: 60%;
        margin: 0 auto;
    }

    .info-item {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .info-item .icon {
        margin-right: 5px;
        width: 24px;
        height: 24px;
    }

    .info-item .target {
        cursor: pointer;
    }

    .info-item a {
        text-decoration: none;
        color: inherit;
    }

`;

export default class Homepage extends React.Component {
    render() {
        return (
            <StyledHeader>
                <div className="name">
                    <span className="first-name">Chirag</span>
                    <span className="last-name">Soni</span>
                </div>
                <div className="info">
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="info-item email">
                                <span className="icon">
                                    <Gmail />
                                </span>
                                <span className="target">
                                    chirag.soni9352@gmail.com
                                </span>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="info-item mobile">
                                <span className="icon">
                                    <PhoneIcon style={{color: '#64ad64'}} />
                                </span>
                                <span className="target">
                                    (+91) 820-905-3990
                                </span>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="info-item website">
                                <span className="icon">
                                    <LanguageIcon style={{color: '#2196f3'}}/>
                                </span>
                                <span className="target">
                                    <a href="https://risenagain.github.io/">
                                        risenagain.github.io
                                    </a>
                                </span>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="info-item hackerrank">
                                <span className="icon">
                                    <HackerRank height={24} width={24} fill="green" />
                                </span>
                                <span className="target">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.hackerrank.com/Risen_Again">
                                        hackerrank.com/Risen_Again
                                    </a>
                                </span>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="info-item github">
                                <span className="icon">
                                    <GitHubIcon style={{color: '#5C6BC0'}}/>
                                </span>
                                <span className="target">
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/RisenAgain">
                                        github.com/RisenAgain
                                    </a>
                                </span>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="info-item linkedin">
                                <span className="icon">
                                    <LinkedInIcon style={{color: '#0077B7'}}/>
                                </span>
                                <span className="target">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chiragsoni9352">
                                        linkedin.com/in/chiragsoni9352
                                    </a>
                                </span>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="info-item facebook">
                                <span className="icon">
                                    <FacebookIcon style={{color: '#0077B7'}}/>
                                </span>
                                <span className="target">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/chirag.soni9352">
                                        fb.com/chirag.soni9352
                                    </a>
                                </span>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="info-item instagram">
                                <span className="icon">
                                    <Instagram height={20} width={20}/>
                                </span>
                                <span className="target">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/chirag.soni9352/">
                                        instagram.com/chirag.soni9352/
                                    </a>
                                </span>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <div className="info-item twitter">
                                <span className="icon">
                                    <TwitterIcon style={{color: '#00aced'}}/>
                                </span>
                                <span className="target">
                                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Risen_Again">
                                        twitter.com/Risen_Again
                                    </a>
                                </span>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </StyledHeader>
        )
    }
}