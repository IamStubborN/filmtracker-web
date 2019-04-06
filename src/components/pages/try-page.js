import React, {Component} from 'react';

class TryPage extends Component {

    render() {
        const { type, name } = this.props.match.params;
        console.log(type, name);
        return (
            <a dangerouslySetInnerHTML={{
                __html: `<div id="yohoho" data-player="trailer" data-title="Моана"></div>
<script src="//yohoho.czx.to/yo.js"></script>`
            }} />
            );
    }
}

export default TryPage;