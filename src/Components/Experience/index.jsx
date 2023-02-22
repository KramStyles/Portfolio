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

    const checkMore = () => {
        setMore((prevState => (
            !prevState
        )));
    }
    return (
        <div className="container shadow section position-relative">
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
                            <div dangerouslySetInnerHTML={{__html: item.desc}}
                                 className={`exp-item-content transit-fast ${more ? "exp-height" : ""}`}/>
                            {item.desc.length >= 150 ? (
                                <Buttons btnIcon={<CgStark/>} btnText={"Show More"}
                                         moreClass={"btn-outline-dark mt-3"} onclick={checkMore}/>
                            ) : null}
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
