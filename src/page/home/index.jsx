import React from 'react';

import PageTitle from "component/page-title/index.jsx";
import './index.css';

class Home extends React.Component{
    render() {
        return (
            <div id="page-wrapper">
                <div className="row">
                    <PageTitle title="首页"/>
                    <div className="col-md-12">
                        smart
                    </div>
                </div>
            </div>
        );
    }
}



export default Home;





