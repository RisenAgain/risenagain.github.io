import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-scroll';
import GetAppIcon from '@material-ui/icons/GetApp';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {ReactComponent as Down} from '../assets/icons/down.svg';
import {ReactComponent as Gmail} from '../assets/icons/gmail.svg';
import {ReactComponent as HackerRank} from '../assets/icons/hackerrank.svg';
import {ReactComponent as Instagram} from '../assets/icons/instagram.svg';
import { Container, Button } from '@material-ui/core';
import ProfilePic from '../assets/images/profile_pic.jpg';

const StyledBanner = styled.div`
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(45deg, #bc1888 0%, #cc2366 25%,#dc2743 50%, #e6683c 75%, #f09433 100%); 
    
    .nav-bar a {
        text-decoration: none;
    }
    .nav-bar Button {
        color: white;
        font-weight: 300;
    }
    
    .name {
        font-size: 15vw;
        color: white;
    }

    @media screen and (min-width: 1200px) {
        .name {
           font-size: 100px;
        }
    }

    .first-name {
        font-weight: lighter;
    }

    .last-name {
        font-weight: 300;
    }

    .circle-container {
        position: relative;
        width: 24em;
        height: 24em;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }

    .circle-item {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -2em;
        border-radius: 50%;
        width: 52px;
        height: 52px;
        justify-content: center;
        display: flex;
        align-items: center;
    }

    .circle-item:hover {
        background-color: white;
        box-shadow: 0 0 5px 1px #efefef
    }

    .profile-pic {
        border-radius: 50%;
    }

    @keyframes jumping {
        0% {bottom: 0px;}
        50% {bottom: 30px;}
        100% {bottom: 0px;}
    }

    .down-arrow {
        position: absolute;
        cursor: pointer;
        animation-name: jumping;
        animation-duration: 3s;
        animation-iteration-count: infinite;
    }
`;

export default function Banner() {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const connects = [
        <span className="icon">
            <a target="_blank" rel="noopener noreferrer" href="https://risenagain.github.io/">
                <LanguageIcon style={{color: '#2196f3'}} fontSize={smallScreen ? 'default' : 'large'}/>
            </a>
        </span>,
        <span className="icon">
            <a target="_blank" rel="noopener noreferrer" href="https://www.hackerrank.com/Risen_Again">
                <HackerRank height={smallScreen ? 30 : 42} width={smallScreen ? 30 : 42} fill="green" />
            </a>
        </span>,
        <span className="icon">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/RisenAgain">
                <GitHubIcon style={{color: '#5C6BC0'}} fontSize={smallScreen ? 'default' : 'large'}/>
            </a>
        </span>,
        <span className="icon">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chiragsoni9352">
                <LinkedInIcon style={{color: '#0077B7'}} fontSize={smallScreen ? 'default' : 'large'}/>
            </a>
        </span>,
        <span className="icon">
            <a href="mailto:chirag.soni9352@gmail.com">
                <Gmail width={smallScreen ? 24 : 32}/>
            </a>
        </span>,
        <span className="icon">
            <a href="tel:+918209053990">
                <PhoneIcon style={{color: '#64ad64'}} fontSize={smallScreen ? 'default' : 'large'} />
            </a>
        </span>,
        <span className="icon">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/chirag.soni9352">
                <FacebookIcon style={{color: '#0077B7'}} fontSize={smallScreen ? 'default' : 'large'}/>
            </a>
        </span>,
        <span className="icon">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/chirag.soni9352">
                <Instagram width={smallScreen ? 18 : 28} />
            </a>
        </span>,
        <span className="icon">
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Risen_Again">
                <TwitterIcon style={{color: '#00aced'}} fontSize={smallScreen ? 'default' : 'large'}/>
            </a>
        </span>
    ]
    return (
        <StyledBanner>
            <Grid style={{height: '100%'}} container direction="column" justify="space-between" alignItems="center">
                <Grid container item justify="flex-end" spacing={smallScreen ? 2 : 4} className="nav-bar">
                    <Grid item>
                        <a href="Chirag_Soni_Resume_2020.pdf" target="_blank">
                            <Button size="large" endIcon={<GetAppIcon />}>Download Resume</Button>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="Chirag_Soni_CV_2020.pdf" target="_blank">
                            <Button size="large" endIcon={<GetAppIcon />}>Download CV</Button>
                        </a>
                    </Grid>
                    <Grid item ></Grid>
                </Grid>
                <Grid container item justify="space-around" alignItems="center" direction={smallScreen ? 'column-reverse' : 'row'}>
                    <Grid item className="name">
                        <Container className="first-name">Chirag</Container>
                        <Container className="last-name">Soni</Container>
                    </Grid>
                    <Grid item>
                        <Container>
                            <div className="circle-container">
                                {connects.map((connect, index, arr) => {
                                    const angle = (360/arr.length)*index;
                                    return <div class="circle-item" 
                                                style={{
                                                        transform: `rotate(${angle}deg) translate(${smallScreen ? '8em' : '15em'}) rotate(-${angle}deg)`
                                                    }}
                                            >
                                                {connect}
                                            </div>
                                })}
                                <img className="profile-pic" src={ProfilePic} alt="profile pic" width={smallScreen ? '150px' : '350px'}/>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
                <Grid container item justify="center" xs={1}>
                    <Grid item className="down-arrow">
                        <Link to="CV" smooth={true}>
                            <Down height={75} width={75} fill="white"/>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </StyledBanner>
    )
}