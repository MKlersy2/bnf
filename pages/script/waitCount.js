import React from "react";

export default class Layout extends React.Component {
    componentDidMount() {
        let timeInit = 3*60;
        var timeleft = timeInit;
        const timerCount = setInterval(function() {
            if(timeleft <= 0) {
                window.location.href = '/waitPage.html';
                clearInterval(timerCount);
            }
            timeleft-=1;
        }, 1000);
        window.timerCount = timerCount;
    }
    componentWillUnmount() {
        //Desactiver les éléments en cours
        clearInterval(window.timerCount);
    }
    render() {
        return(
            <div>{this.props.children}</div>
        )
    }
}