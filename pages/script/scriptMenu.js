import React from "react";
import sons from '../../styles/sons.module.css';

export default class Layout extends React.Component {
    componentDidMount() {
        const progress = document.querySelector(`.${sons.progress}`);
        const playerProgress = document.querySelector(`.${sons.subGlobal}`);
        playerProgress.addEventListener('scroll', function(e) {
            const scrollPourcent = (e.target.scrollLeft)/(e.target.scrollWidth - 1200)*100;
            progress.style.left = `${scrollPourcent}%`;
        });
        this.playerProgress = playerProgress;
    }
    componentWillUnmount() {
        //Desactiver les éléments en cours
        this.playerProgress.removeEventListener('scroll', {});
    }
    render() {
        return(
            <div>{this.props.children}</div>
        )
    }
}