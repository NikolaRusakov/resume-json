import React, {Fragment} from 'react';
import me from "../../public/images/me.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class HeaderComponent extends React.Component {
    render() {
        const {data} = this.props;
        // (async () => {
        //     const moduleSpecifier = './utils.mjs';
        //     const module = await import(moduleSpecifier)
        //     module.default();
        //     // → logs 'Hi from the default export!'
        //     module.doStuff();
        //     // → logs 'Doing stuff…'
        // })();
        console.log(data && data);
        return <header>
            <Fragment>

                {data && <div className="header-content">
                    <h1>{data.name}</h1>
                    <img src={me}/>
                    {
                        data.profiles.map((item, index) => <a key={item.network} href={item.url}
                                                              className={`links-${index}`}>{item.network}</a>)
                    }
                    <a href={data.website} target="_blank">
                        {/*<FontAwesomeIcon icon={"fab"}/>*/}
                    </a>
                </div>
                }

            </Fragment>
        </header>
    }
}

export default HeaderComponent;
