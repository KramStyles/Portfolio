import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {CgStark, CgWorkAlt} from "react-icons/cg";

import "./index.css";
import {experiences} from "../Data";
import Title from "../Elements/title";

const Experience = () => {
    return (
        <div className="container shadow section position-relative">
            <Title backgroundTitle="work" title="Experience"/>

            <VerticalTimeline>
                
            </VerticalTimeline>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: 'var(--bg-gradient-light)', color: 'var()'}}
                    contentArrowStyle={{borderRight: '7px solid white'}}
                    date="2011 - present"
                    dateClassName="vertical-date"
                    iconStyle={{background: 'grey', color: 'snow'}}
                    icon={<CgWorkAlt/>}
                >
                    <h3 className="vertical-timeline-element-title text-start">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{background: 'silver', color: '#666'}}
                    icon={<CgWorkAlt/>}
                    dateClassName="vertical-date"
                >
                    <h3 className="vertical-timeline-element-title text-start">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{background: 'white', color: 'black', border: '2px double black'}}
                    icon={<CgStark/>}
                />
            </VerticalTimeline>
        </div>
    )
}

export default Experience;
