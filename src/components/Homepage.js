import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import ScrollerTabs from './ScrollerTabs';
import Section from './Section';
import SectionItem from './SectionItem';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import {ReactComponent as DEShaw} from '../assets/icons/deshaw.svg';
import {ReactComponent as Samsung} from '../assets/icons/samsung.svg';

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabShown: 1
        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <ScrollerTabs value={this.state.tabShown} onTabChange={(event, value) => this.setState({tabShown: value})}></ScrollerTabs>
                <Grid container spacing={2}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Paper style={{padding: '5%'}}>
                            <Section title="Work Experience" icon={<WorkOutlineIcon />}>
                                <SectionItem
                                    title="D. E. Shaw India Pvt. Ltd."
                                    logo={<DEShaw height={40} width={100}/>}
                                    position="Senior Member Technical"
                                    department="Front Office Tech"
                                    from="01-07-2020"
                                    to="Present"
                                >
                                    Worked on DESFlow
                                </SectionItem>
                                <SectionItem
                                    title="Samsung Research Institute Delhi"
                                    logo={<Samsung height={40}/>}
                                    position="Software Engineer"
                                    department="Server Team"
                                    from="04-07-2018"
                                    to="26-07-2019"
                                >
                                    Worked on DESFlow
                                </SectionItem>
                            </Section>
                            <Section title="Internships" icon={<WorkOutlineIcon />}>
                                <SectionItem
                                    title="D. E. Shaw India Pvt. Ltd."
                                    position="Senior Member Technical"
                                    department="Front Office Tech"
                                    from="01-07-2020"
                                    to="Present"
                                >
                                    Worked on DESFlow
                                </SectionItem>
                                <SectionItem
                                    title="D. E. Shaw India Pvt. Ltd."
                                    position="Senior Member Technical"
                                    department="Front Office Tech"
                                    from="01-07-2020"
                                    to="Present"
                                >
                                    Worked on DESFlow
                                </SectionItem>
                            </Section>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>
        )
    }
}