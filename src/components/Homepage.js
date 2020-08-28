import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import ScrollerTabs from './ScrollerTabs';
import Section from './Section';
import WorkExp from './WorkExp';
import Project from './Project';
import Tag from './Tag';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import {ReactComponent as DEShaw} from '../assets/icons/deshaw.svg';
import {ReactComponent as Samsung} from '../assets/icons/samsung.svg';
import Publication from './Publication';

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
                            <div id="work-experience">
                            <Section title="Work Experience" icon={<WorkOutlineIcon />}>
                                <WorkExp
                                    title="D. E. Shaw India Pvt. Ltd."
                                    logo={<DEShaw height={40} width={170}/>}
                                    positions={[{title:"Senior Member Technical", department: "Front Office Tech", from:"Jul 2020", to:"Present"},
                                    {title:"Member Technical", department: "Front Office Tech", from:"Jul 2019", to:"June 2020"}]}
                                >
                                    <ul>
                                        <li>Developing the front-end of a progress reporting system from scratch in React. The system enables users to generate reports of their work and tracks time spent across various activities. Took a lead in making key design decisions for the front end architecture and was also involved in designing database schema.
                                            <Tag>react</Tag>
                                            <Tag>react-redux</Tag>
                                            <Tag>react-thunk</Tag>
                                            <Tag>normalizr</Tag>
                                            <Tag>express</Tag>
                                            <Tag>nodejs</Tag>
                                            <Tag>reselect</Tag>
                                            <Tag>immer</Tag>
                                        </li>
                                        <li>Worked on a feature-rich proprietary issue-tracking cum workflow management product based on Java and Javascript. Developed diff functionality for HTML content. Fixed security vulnerabilities in the system like cross site scripting, SQL injection, etc. Hands-on experience with SQL Server. Debugged miscellaneous bugs in the system reported by users.
                                            <Tag>Java</Tag>
                                            <Tag>SQL Server</Tag>
                                            <Tag>T-SQL</Tag>
                                            <Tag>JavaScript</Tag>
                                            <Tag>Closure Templates</Tag>
                                        </li>
                                    </ul>
                                </WorkExp>
                                <WorkExp
                                    title="Samsung Research Institute Delhi"
                                    logo={<Samsung height={40}/>}
                                    positions={[{title:"Software Engineer", department: "Server Team", from:"Jul 2018", to:"Jul 2019"}]}
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
                                </WorkExp>
                            </Section>
                            </div>
                            <div id='internships' >
                                <Section title="Internships" icon={<WorkOutlineIcon />}>
                                    <WorkExp
                                        title="Industrial Technology Research Institute"
                                        location="Taiwan"
                                        positions={[{title:"Summer Research Intern", department: "ICL Lab", from:"May 2017", to:"Jul 2017"}]}
                                    >
                                        <ul>
                                            <li>Under Dr. Tzi-Cker Chiueh’s guidance, I did extensive literature survey on the topic of Secure Multi Party Computation (SMPC) 
                                                <Tag>Cryptography</Tag>
                                            </li>
                                            <li>Developed programs on a practical SMPC framework ObliVM. SMPC is still an open problem for research and ObliVM is an open source framework to solve it under practical constraints.</li>
                                            <li>Analyzed complexities of different Oblivious RAM models. Oblivious RAM is a wrapper over actual RAM to hide data access patterns to make computation oblivious for any adversary.</li>
                                            <li>Demonstrated feasible use of ObliVM for business application by computing market trends while remaining oblivious to different datasets.</li>
                                        </ul>
                                    </WorkExp>
                                    <WorkExp
                                        title="Stochastic Solutions Pvt. Ltd."
                                        location="Gurgaon"
                                        positions={[{title:"Summer Intern", department: "Web Development", from:"May 2016", to:"Jul 2016"}]}
                                    >
                                        <ul>
                                            <li>Developed a crowdsourcing educational website ScholarGraph.com from scratch featuring college comparison and question-answer platform.
                                                <Tag>PHP</Tag>
                                                <Tag>MySQL</Tag>
                                                <Tag>Google Polymer</Tag>
                                                <Tag>HTML5</Tag>
                                                <Tag>CSS</Tag>
                                                <Tag>jQuery</Tag>
                                                <Tag>CodeIgniter</Tag>
                                                <Tag>Google Cloud Platform</Tag>
                                            </li>
                                            <li>Exceeded expectations and was awarded a spot bonus.</li>
                                        </ul>
                                    </WorkExp>
                                </Section>
                            </div>
                            <div id="publication">
                                <Section title="Publication" icon={<WorkOutlineIcon />}>
                                    <Publication
                                        title="Automatic Evolution of Bi-clusters from Microarray Data using Self-Organized Multi-objective Evolutionary Algorithm"
                                        where="Applied Intelligence Journal 2019"
                                        authors={["Naveen Saini", "Sriparna Saha", "Chirag Soni", "Pushpak Bhattacharyya"]}
                                        link={"http://link.springer.com/article/10.1007/s10489-019-01554-w"}
                                    >
                                        DOI: 10.1007/s10489-019-01554-w
                                    </Publication>
                                </Section>
                            </div>
                            <div id="projects">
                                <Section title="Projects" icon={<WorkOutlineIcon />}>
                                    <Project
                                        title="Automatic Evolution of Bi-clusters from Microarray Data using Self-Organized Multi-objective Evolutionary Algorithm"
                                        org="IIT Patna"
                                        duration={{from:"Jan 2018", to:"May 2018"}}
                                    >
                                        To find which genes are co-regulated by what set of conditions in microarray data,
                                         I implemented a deep learning model to find the coherent biclusters using self-organized 
                                         maps and optimized multiple objective functions simultaneously. Used two different 
                                         microarray datasets and optimized quality of biclusters on 3 different metrics. 
                                         Published a research journal on the same.
                                    </Project>
                                    <Project
                                        title="SMS Classification for Smart Assistance"
                                        org="LG Electronics Inc., IIT Patna"
                                        duration={{from:"Jan 2018", to:"May 2018"}}
                                    >
                                        I was involved in a NLP project developing a machine learning based SMS classifier for 
                                        smart assistance. The classifier was an ensemble of SVM, logistic regression and random 
                                        forest and was trained on an in-house dataset annotated by LG. Achieved better accuracy 
                                        than state of the art model on the same dataset.
                                    </Project>
                                    <Project
                                        title="Bone Age Detection from X-Ray"
                                        org="IIT Patna"
                                        duration={{from:"Jan 2018", to:"May 2018"}}
                                    >
                                        Radiologists manually find the skeleton age and compare it with the baby's actual age 
                                        ensuring normal growth. Deep learning model developed here predicted the skeleton age 
                                        of the child by analyzing X-Ray images of the hand. Developed a CNN model on top of 
                                        InceptionV3 and tested if taking gender as a parameter improves accuracy. Achieved an 
                                        accuracy close to the top models in the RSNA challenge.

                                    </Project>
                                    <Project
                                        title="Machine Translation"
                                        org="IIT Patna"
                                        duration={{from:"Jan 2018", to:"May 2018"}}
                                    >
                                        Independent study under Dr. Asif Ekbal
                                        Investigated a hybrid model for machine translation following rule-based and statistical 
                                        approach to translation. Implemented a corpus translator with the help of Google and 
                                        Bing translator. Also worked on a dependency parser for Hindi.
                                    </Project>
                                    <Project
                                        title="Hostel Affairs : A voting based issue tracking platform"
                                        org="IIT Patna"
                                        duration={{from:"Jan 2018", to:"May 2018"}}
                                    >
                                        Developed a web app to track issues with voting enabled for student voices to be heard 
                                        on pressing issues. Implemented smart search - filter - tagging algorithms for issue 
                                        listings, lost & found, room allocation. Implemented login accounts, commenting features. 
                                        Used Google polymer, PHP, MySQL.
                                    </Project>                                        
                                </Section>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={0} sm={1} lg={2}></Grid>
                </Grid>
            </div>
        )
    }
}