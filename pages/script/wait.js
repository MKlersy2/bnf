import React from "react";
export default class Layout extends React.Component {
    componentDidMount() {
        let timeInit = 20;
        var timeleft = timeInit;
        const timerCount = setInterval(function() {
            if(timeleft <= 0) {
                window.location.href = '/';
                clearInterval(timerCount);
            }
            timeleft-=1;
        }, 1000);
        this.timerCount = timerCount;

    }
    componentWillUnmount() {
        //Desactiver les éléments en cours
        clearInterval(this.timerCount);
    }
    render() {
        return(
            <div>{this.props.children}</div>
        )
    }
}