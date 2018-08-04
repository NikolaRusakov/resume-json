import React, {Fragment, Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import ContentComponent from "../components/ContentComponent";
import HeaderComponent from "../components/HeaderComponent";
import SideBarComponent from "../components/SideBarComponent";
import FooterComponent from "../components/FooterComponent";
import ContentPage from "./ContentPage";


class Layout extends Component {

    // parseAndAssignPage=(object)=>{
    //     Object.entries(object).find((value, index, obj) => {
    //         return<ContentComponent/>
    //     })
    // }
    // renderRoute=(object)=>{
    //     const{name}=object;
    //     return <Route path={`/${object.path}`} name={name} component={}/>
    // }
    render() {
        const {data} = this.props;
        // if (!data) {
        //     return;
        // }
        return (
            <Fragment>
                <div className="container">
                    <HeaderComponent data={data.basics}/>
                    <SideBarComponent/>
                    <ContentComponent data={data.work}/>
                    {/*<Switch>*/}
                    {/*/!*<Route path="/home" name="main" component={MainPage}/>*!/*/}
                    {/*<Route path={`/${data.name}`} name={data.name} component={ContentPage}/>*/}
                    {/*</Switch>*/}
                    <FooterComponent/>
                </div>
            </Fragment>
        );
    }
}


export default Layout;
