import React, {Fragment} from 'react';
import HeaderComponent from "../components/HeaderComponent";
import ContentComponent from "../components/ContentComponent";
import FooterComponent from "../components/FooterComponent";

class ContentPage extends React.Component {

    render() {
        return <Fragment>
            <HeaderComponent/>
            <SideBarComponent/>
            <ContentComponent/>
            <FooterComponent/>
        </Fragment>
    }
}

export default ContentPage;
