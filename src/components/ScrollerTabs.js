import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from '@material-ui/core';

const StyledScrollerTabs = styled.div`

`;

const useTabsStyles = makeStyles({
    root: {
    },
    flexContainer: {
    },
    scroller: {
    },
    scrollable: {
    },
    scrollButtons: {
    },
    scrollButtonsDesktop: {
    },
    indicator: {
    }
});

const useTabStyles = makeStyles({
    root: {
        fontSize: '36px',
        fontWeight: 300,
        minWidth: '36%'
    }
})

ScrollerTabs.propTypes = {
    value: PropTypes.number,
    tabChange: PropTypes.func
}

export default function ScrollerTabs(props) {
    const classes = useTabsStyles();
    const tabClasses = useTabStyles();
    return (
        <StyledScrollerTabs>
            <Tabs classes={classes} value={props.value} onChange={props.onTabChange} variant="scrollable" scrollButtons="auto">
                <Tab classes={tabClasses} disableRipple label="Music" />
                <Tab classes={tabClasses} disableRipple label="Curriculum Vitae" />
                <Tab classes={tabClasses} disableRipple label="Movies" />
                <Tab classes={tabClasses} disableRipple label="TV Shows" />
                <Tab classes={tabClasses} disableRipple label="Art" />
                <Tab classes={tabClasses} disableRipple label="Gallary" />
            </Tabs>
        </StyledScrollerTabs> 
    )       
}