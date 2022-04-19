
import React from "react";
import waiting from '../../styles/waiting.module.css'


export default class Layout extends React.Component {
    componentDidMount() {
        const global = document.querySelector(`.${waiting.global}`);
        global.addEventListener('click', function() {
            console.log('click')
        });

        let timeInit = 20;
        var timeleft = timeInit;
        const timerCount = setInterval(function() {
            if(timeleft <= 0) {
                window.location.href = '/';
                clearInterval(timerCount);
            }
            console.log(timeInit - timeleft);
            timeleft-=1;
        }, 1000);
        this.timerCount = timerCount;
        this.global = global;

    }
    componentWillUnmount() {
        //Desactiver les éléments en cours
        clearInterval(this.timerCount);
        this.global.removeEventListener('click', {});
    }
    render() {
        return(
            <div>{this.props.children}</div>
        )
    }
}