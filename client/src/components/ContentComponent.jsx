import React, {Fragment} from 'react';
import distanceInWords from 'date-fns/distance_in_words/index'
import format from 'date-fns/format/index'

class ContentComponent extends React.Component {


    recursiveSection = (props) => {
        let startDate;
        return <section>
            <h2>{Object.keys(props)[0]}</h2>
            {
                Object.entries(props).map((value, index, array) => {

                    switch (index) {
                        case 0 :
                            return <span className={`section-parent-${index}`}>{value[1]}, </span>
                                ;
                            break;
                        case 1 :
                            return <span className={`section-parent-${index}`}>{value[1]}, </span>
                                ;
                            break;
                        default:
                        case 2 :
                            return value[1].includes("http") ?
                                <a href={value[1]} className={`section-parent-${index}`}>{value[1]}</a>
                                : <span className={`section-parent-${index}`}>{value[1]}</span>
                                ;
                            break;
                        case 3 : {
                            startDate = value[1];
                            return <Fragment>
                                <br/>
                                <span className={`section-parent-${index}`}>{format(value[1],"Do MMMM YYYY")} - </span>
                            </Fragment>
                        }
                            ;
                            break;
                        case 4 :
                            return <span
                                className={`section-parent-${index}`}>{format(value[1],"Do MMMM YYYY")}, {distanceInWords(startDate, value[1])}</span>
                                ;
                            break;
                        case 5 :
                            return <Fragment>
                                <br/>
                                <span className={`section-parent-${index}`}>{value[1]}</span>
                            </Fragment>
                                ;
                            break;
                        case 6 :
                            return <span className={`section-parent-${index}`}>{value[1]}</span>
                                ;
                            break;
                    }
                    return Array.isArray(value[1]) === false ?
                        <span className={`section-parent-${index}`}>{index > 0 && index < 3 && ", "}{value[1]}</span> :
                        value[1].map((value1, index1) => {
                            return <p className={`section-children-${index}-${index1}`}>{value1}</p>
                        });
                })
            }
            {/*{props.endDate && <h5>{props.endDate}</h5>}*/}
            {/*{props.startDate && <h5>{props.startDate}</h5>}*/}

        </section>
    };


    render() {
        const {data} = this.props;
        console.log(data);
        return <article>
            {data && data.map(item => this.recursiveSection(item))}
        </article>
    }
}

export default ContentComponent;
