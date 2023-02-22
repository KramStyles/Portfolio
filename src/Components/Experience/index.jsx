import {useState} from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {CgStark, CgWorkAlt} from "react-icons/cg";

import "./index.css";
import {experiences} from "../Data";
import Title from "../Elements/title";
import Buttons from "../Elements/buttons";

const Experience = () => {
    const [more, setMore] = useState(false);
    return (
        <div className="container shadow section position-relative">
            <Title backgroundTitle="work" title="Experience"/>

            <VerticalTimeline>
                {experiences.map((item, index) => {
                    const styleChoices = [
                        {background: 'silver', color: '#666'},
                        {background: 'grey', color: 'snow'},
                    ]
                    const iconStyle = styleChoices[index%2];
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date={item.period}
                            key={index}
                            iconStyle={{...iconStyle}}
                            icon={<CgWorkAlt/>}
                            dateClassName="vertical-date"
                        >
                            <h3 className="vertical-timeline-element-title text-start">{item.name}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.role}</h4>
                            <div dangerouslySetInnerHTML={{__html: item.desc}} className={"exp-item-content"}/>
                            <Buttons btnIcon={<CgStark/>} btnText={"Show More"} moreClass={"btn-outline-dark"}/>
                        </VerticalTimelineElement>
                    )
                })}
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
