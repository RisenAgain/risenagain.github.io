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
                                    from="Jul 2020"
                                    to="Present"
                                >
                                    Worked on DESFlow
                                </SectionItem>
                                <SectionItem
                                    title="Samsung Research Institute Delhi"
                                    logo={<Samsung height={40}/>}
                                    position="Software Engineer"
                                    department="Server Team"
                                    from="Jul 2018"
                                    to="Jul 2019"
                                >
                                    <ul>
                                        <li>Worked on a highly scalable log analysis pipeline (ETL) processing billions of logs (~6TB) per day from multiple CDN vendors for OLAP purposes. #ApacheBeam #BigQuery #CloudDataFlow #Java #ETL #OLAP</li>
                                        <li>Developed front-end for admin portal of CDN service including stats representation to the internal services. #Angular </li>
                                        <li>Worked on a unified portal for automatic deployment of microservices of Samsung’s Smart TV services. #MicroServiceArchitecture #Docker #Containers #AWS(ECS) #ShellScript #Java #SpringBoot #Jenkins</li>
                                        <li>Built a system from scratch to serve contextual ads in videos, i.e. ads based on what’s going on in the content video. Won best idea implementation award among 20 working demos. #ComputerVision #MediaTailor #CloudVideoIntelligence #VAST #HLS #Angular #Python #Flask</li>
                                    </ul>
                                </SectionItem>
                            </Section>
                            <Section title="Internships" icon={<WorkOutlineIcon />}>
                                <SectionItem
                                    title="Industrial Technology Research Institute"
                                    location="Taiwan"
                                    position="Summer Research Intern"
                                    department="ICL Lab"
                                    from="May 2017"
                                    to="Jul 2017"
                                >
                                    <ul>
                                        <li>Researched on Secure Multi Party Computation. #Cryptography</li>
                                        <li>Developed programs on a practical SMPC framework ObliVM.</li>
                                        <li>Analyzed complexities of different Oblivious RAM models.</li>
                                        <li>Working demo to showcase feasible use of ObliVM for business application.</li>
                                    </ul>
                                </SectionItem>
                                <SectionItem
                                    title="Stochastic Solutions Pvt. Ltd."
                                    location="Gurgaon"
                                    position="Summer Intern"
                                    department="Web Development"
                                    from="May 2016"
                                    to="Jul 2016"
                                >
                                    <ul>
                                        <li>Developed a crowdsourcing educational website ScholarGraph.com from scratch featuring comparison and question-answer platform. It’s live!</li>
                                        <li>Used PHP, MySQL, Google Polymer, HTML5, CSS, jQuery, CodeIgniter and Google Cloud Platform.</li>
                                        <li>Exceeded expectations and was awarded a spot bonus. View certificate</li>
                                    </ul>
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