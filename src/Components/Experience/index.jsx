import {useState} from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {CgStark, CgWorkAlt} from "react-icons/cg";

import "./index.css";
import {experiences} from "../Data";
import Title from "../Elements/title";
import Buttons from "../Elements/buttons";

const ExpList = ({desc, stack}) => {
    const [more, setMore] = useState(false);
    const checkMore = () => {
        setMore(!more);
    }
    return (
        <>
            <div dangerouslySetInnerHTML={{__html: desc}}
                 className={`exp-item-content transit-fast ${more ? "exp-height" : ""}`}/>
            <div className="my-2">
                {stack ? stack.map((item, index) => (
                    <span className={`badge rounded-pill m-0 ${index%2 ? 'badge--dark' : 'badge--light'}`}
                          key={index}>{item}</span>
                )): null}
            </div>
            {
                desc.length >= 150 ? (
                    <Buttons btnIcon={<CgStark/>} btnText={`Show ${more ? 'Less' : 'More'}`}
                             moreClass={"btn-outline-dark mt-3"} onclick={checkMore}/>
                ) : null
            }
        </>
    )
}

const Experience = () => {

    return (
        <div className="container shadow section position-relative" id={"experience"}>
            <Title backgroundTitle="work" title="Experience"/>

            <VerticalTimeline>
                {experiences.map((item, index) => {
                    const styleChoices = [
                        {background: 'silver', color: '#666'},
                        {background: 'grey', color: 'snow'},
                    ]
                    const iconStyle = styleChoices[index % 2];

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
                            <ExpList desc={item.desc} stack={item.stacks}/>
                        </VerticalTimelineElement>
                    )
                })}
                <VerticalTimelineElement
                    iconStyle={{background: 'white', color: 'black', border: '2px double black'}}
                    icon={<CgStark/>}
                />
            </VerticalTimeline>
        </div>
    )
}

export default Experience;
