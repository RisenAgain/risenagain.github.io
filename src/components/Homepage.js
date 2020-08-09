import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import ScrollerTabs from './ScrollerTabs';
import Section from './Section';
import SectionItem from './SectionItem';
import Tag from './Tag';
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
                    <Grid item xs={0} sm={1} lg={2}></Grid>
                    <Grid item xs={12} sm={10} lg={8}>
                        <Paper style={{padding: '5%'}}>
                            <Section title="Work Experience" icon={<WorkOutlineIcon />}>
                                <SectionItem
                                    title="D. E. Shaw India Pvt. Ltd."
                                    logo={<DEShaw height={40} width={170}/>}
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
                                        <li>Worked on a highly scalable log analysis pipeline (ETL) processing billions of logs (~6TB) per day from multiple CDN vendors for OLAP purposes.
                                            <Tag>Apache Beam</Tag>
                                            <Tag>Big Query</Tag>
                                            <Tag>Cloud DataFlow</Tag>
                                            <Tag>Java</Tag>
                                            <Tag>ETL</Tag>
                                            <Tag>OLAP</Tag>
                                        </li>
                                        <li>Developed front-end for admin portal of CDN service including stats representation to the internal services. <Tag>Angular</Tag> </li>
                                        <li>Worked on a unified portal for automatic deployment of microservices of Samsung’s Smart TV services.
                                            <Tag>Microservice Architecture</Tag>
                                            <Tag>Docker</Tag>
                                            <Tag>Containers</Tag>
                                            <Tag>AWS (ECS)</Tag>
                                            <Tag>Shell Script</Tag>
                                            <Tag>Java</Tag>
                                            <Tag>Spring Boot</Tag>
                                            <Tag>Jenkins</Tag>
                                        </li>
                                        <li>Built a system from scratch to serve contextual ads in videos, i.e. ads based on what’s going on in the content video. Won best idea implementation award among 20 working demos.
                                            <Tag>Computer Vision</Tag>
                                            <Tag>Media Tailor</Tag>
                                            <Tag>Cloud Video Intelligence</Tag>
                                            <Tag>VAST</Tag>
                                            <Tag>HLS</Tag>
                                            <Tag>Angular</Tag>
                                            <Tag>Python</Tag>
                                            <Tag>Flask</Tag>
                                        </li>
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
                                        <li>Researched on Secure Multi Party Computation.
                                            <Tag>Cryptography</Tag>
                                        </li>
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
                    <Grid item xs={0} sm={1} lg={2}></Grid>
                </Grid>
            </div>
        )
    }
}