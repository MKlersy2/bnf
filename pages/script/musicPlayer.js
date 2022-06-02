import sons from '../../styles/sons.module.css';
var actualSon = '';
var actualIndex = '';
var mu = true;
var mu2 = true;
var mu3 = true;
const sonListened = [];

let actualProgress;

export function chargeMusic(url, index) {
    const son = new Audio(url);
    son.onloadedmetadata = function() {
        const totalTime = document.querySelector(`#player` + index + ` > div > div > .${sons.totalTime}`);
        if(totalTime !== null) {
            const valueTotalTimeSecond = Math.floor(son.duration % 60) < 10 ? '0' + Math.floor(son.duration % 60) : Math.floor(son.duration % 60);
            const valueTotalTimeMinute = Math.floor(son.duration / 60) < 10 ? '0' + Math.floor(son.duration / 60) : Math.floor(son.duration / 60);
            totalTime.innerHTML = valueTotalTimeMinute + ' : ' + valueTotalTimeSecond;
        }
      };
}

export function launchMusic(url, index, retour) {
    if(actualSon!='') stopMusic('no');
    const element = document.querySelector(`#bigPlayGlobal` + index + `.${sons.playerLaunch}`);
    const buttonPause = document.querySelector(`#pause` + index);
    const buttonStart = document.querySelector(`#play` + index);

    element.classList.add('toggleOpacity');
    buttonStart.classList.add('toggle');
    buttonPause.classList.remove('toggle');
    const son = new Audio(url);

    son.onloadeddata = function(){
        son.play();
        if(sonListened.includes(index)) {
            if(document.querySelector(`#player` + index + ` > div > div > div > .${sons.playerProgressBar}`).style.width == '') {
                var width = '0%';
            } else {
                var width = document.querySelector(`#player` + index + ` > div > div > div > .${sons.playerProgressBar}`).style.width
            }
            son.currentTime = (width.replace(/%/g, '')) * son.duration / 100;
        }
        const totalTime = document.querySelector(`#player` + index + ` > div > div > .${sons.totalTime}`);
        const valueTotalTimeSecond = Math.floor(son.duration % 60) < 10 ? '0' + Math.floor(son.duration % 60) : Math.floor(son.duration % 60);
        const valueTotalTimeMinute = Math.floor(son.duration / 60) < 10 ? '0' + Math.floor(son.duration / 60) : Math.floor(son.duration / 60);
        totalTime.innerHTML = valueTotalTimeMinute + ' : ' + valueTotalTimeSecond;
        actualSon = son;
        actualIndex = index;
        actual();
        clearInterval(window.timerCount);
        sonListened.push(index);
        if(retour == 'retour') {
            actualSon.currentTime = 0;
            const progress = document.querySelector(`#player` + actualIndex + ` > div > div > div > .${sons.playerProgressBar}`);
            const progressButton = document.querySelector(`#player` + actualIndex + ` > div > div > div > .${sons.playerProgressButton}`);
            progress.style.width = '0%';
            progressButton.style.left = '0%';
        }
    }

    const progress = document.querySelector(`#player` + index + ` > div > div > div > .${sons.playerProgressBar}`);
    const progressButton = document.querySelector(`#player` + index + ` > div > div > div > .${sons.playerProgressButton}`);
    const progressPlayer = document.querySelector(`#player` + index + ` > div > div > .${sons.progressPlayer}`);

    progressPlayer.addEventListener('mouseup', mouseUpProgress, false);
    progressPlayer.addEventListener('mousedown', mouseDownProgress, false);
    progressPlayer.addEventListener('mousemove', mouseMoveProgress, false);
    progressPlayer.addEventListener('touchstart', mouseDownProgressMobile, false);
    progressPlayer.addEventListener('touchend', mouseUpProgress, false);
    progressPlayer.addEventListener('touchmove', mouseMoveProgressMobile, false);
    progressPlayer.progressButton = progressButton;
    progressPlayer.progress = progress;
    progressPlayer.progressPlayer = progressPlayer;
    progressPlayer.index = index;


    const puissance = document.querySelectorAll(`.${sons.playerPuissanceBar}`);
    const puissanceButton = document.querySelectorAll(`.${sons.playerPuissanceButton}`);
    const puissancePlayer = document.querySelectorAll(`.${sons.puissancePlayerBg}`);
    puissancePlayer.forEach((e, index) => {
        e.addEventListener('mousedown', mouseDownPuissance, false);
        e.addEventListener('mouseup', mouseUpPuissance, false);
        e.addEventListener('mousemove', mouseMovePuissance, false);
        e.addEventListener('touchstart', mouseDownPuissanceMobile, false);
        e.addEventListener('touchend', mouseUpPuissance, false);
        e.addEventListener('touchmove', mouseMovePuissanceMobile, false);
        e.puissanceButton = puissanceButton[index];
        e.puissance = puissance[index];
        e.puissancePlayer = puissancePlayer[index];
        e.index = index;
    });

   
    const allExcludePuissance = document.querySelector(`:not(.${sons.puissancePlayer})`);
    allExcludePuissance.addEventListener('click', (e) => {
        const listExclude = document.querySelectorAll(`.${sons.puissancePlayer}`);
        listExclude.forEach((el) => {
            if(el.contains(e.target)) {
                return;
            } else {
                el.lastChild.style.display = 'none';
            }
        })
    })
    
    son.addEventListener("ended", function(){
        actualSon.currentTime = 0;
        const progress = document.querySelector(`#player` + actualIndex + ` > div > div > div > .${sons.playerProgressBar}`);
        const progressButton = document.querySelector(`#player` + actualIndex + ` > div > div > div > .${sons.playerProgressButton}`);
        progress.style.width = '0%';
        progressButton.style.left = '0%';
        stopMusic()
    });
    
}

export function mouseDownEvolution(e) {
    const evolution = e.currentTarget.evolution;
    const evolutionPlayer = e.currentTarget.evolutionPlayer;
    mu3 = false;
    pos3(e, evolution, evolutionPlayer);
}
export function mouseMoveEvolution(e) {
    const evolution = e.currentTarget.evolution;
    const evolutionPlayer = e.currentTarget.evolutionPlayer;
    mu3||pos3(e, evolution, evolutionPlayer);
}
export function mouseDownEvolutionMobile(e) {
    const evolution = e.currentTarget.evolution;
    const evolutionPlayer = e.currentTarget.evolutionPlayer;
    mu3 = false;
    pos3Mobile(e, evolution, evolutionPlayer);
}
export function mouseMoveEvolutionMobile(e) {
    const evolution = e.currentTarget.evolution;
    const evolutionPlayer = e.currentTarget.evolutionPlayer;
    mu3||pos3Mobile(e, evolution, evolutionPlayer);
}
export function mouseUpEvolution(e) {
    mu3=true;
}

export function pos3(e, evolution, evolutionPlayer) {
    var x=(e.pageX - evolutionPlayer.getBoundingClientRect().left)
    const valeur = (x * .8) / evolutionPlayer.offsetWidth;
    const largeurTotal = document.querySelector(`.${sons.subGlobal}`).scrollWidth;
    document.querySelector(`.${sons.subGlobal}`).scroll(valeur * largeurTotal, 0)
}
export function pos3Mobile(e, evolution, evolutionPlayer) {
    var x=(e.touches[0].clientX - evolutionPlayer.getBoundingClientRect().left)
    const valeur = (x * .8) / evolutionPlayer.offsetWidth;
    const largeurTotal = document.querySelector(`.${sons.subGlobal}`).scrollWidth;
    document.querySelector(`.${sons.subGlobal}`).scroll(valeur * largeurTotal, 0)
}

export function mouseDownProgress(e) {
    document.querySelector(`.${sons.subGlobal}`).style.overflow = 'hidden';
    const progressButton = e.currentTarget.progressButton;
    const progress = e.currentTarget.progress;
    const progressPlayer = e.currentTarget.progressPlayer;
    clearInterval(actualProgress);
    mu = false;
    pos(e, progressButton, progress, progressPlayer);
}
export function mouseMoveProgress(e) {
    const progressButton = e.currentTarget.progressButton;
    const progress = e.currentTarget.progress;
    const progressPlayer = e.currentTarget.progressPlayer;
    mu||pos(e, progressButton, progress, progressPlayer);
}
export function mouseUpProgress(e) {
    document.querySelector(`.${sons.subGlobal}`).style.overflow = 'auto';
    const index = e.currentTarget.index;
    clearInterval(actualProgress);
    mu=true;
    actualSon.currentTime = document.querySelector(`#player` + index + ` > div > div > div > .${sons.playerProgressBar}`).style.width.replace(/%/g, '') * actualSon.duration / 100;    
    actual();
}
export function mouseDownProgressMobile(e) {
    document.querySelector(`.${sons.subGlobal}`).style.overflow = 'hidden';
    const progressButton = e.currentTarget.progressButton;
    const progress = e.currentTarget.progress;
    const progressPlayer = e.currentTarget.progressPlayer;
    clearInterval(actualProgress);
    mu = false;
    posMobile(e, progressButton, progress, progressPlayer);
}

export function mouseMoveProgressMobile(e) {
    const progressButton = e.currentTarget.progressButton;
    const progress = e.currentTarget.progress;
    const progressPlayer = e.currentTarget.progressPlayer;
    mu||posMobile(e, progressButton, progress, progressPlayer);
}


export function pos(e, progressButton, progress, progressPlayer) {
    var x=(e.pageX-progress.getBoundingClientRect().left) / progressPlayer.offsetWidth * 100;
    progressButton.style.left = x + '%';
    progress.style.width = x + '%';
}
export function posMobile(e, progressButton, progress, progressPlayer) {
    var x=(e.touches[0].clientX-progress.getBoundingClientRect().left) / progressPlayer.offsetWidth * 100;
    progressButton.style.left = x + '%';
    progress.style.width = x + '%';
}

export function mouseDownPuissance(e) {
    const puissanceButton = e.currentTarget.puissanceButton;
    const puissance = e.currentTarget.puissance;
    const puissancePlayer = e.currentTarget.puissancePlayer;
    mu2 = false;
    pos2(e, puissanceButton, puissance, puissancePlayer);
}
export function mouseMovePuissance(e) {
    const puissanceButton = e.currentTarget.puissanceButton;
    const puissance = e.currentTarget.puissance;
    const puissancePlayer = e.currentTarget.puissancePlayer;
    mu2||pos2(e, puissanceButton, puissance, puissancePlayer);
}
export function mouseDownPuissanceMobile(e) {
    const puissanceButton = e.currentTarget.puissanceButton;
    const puissance = e.currentTarget.puissance;
    const puissancePlayer = e.currentTarget.puissancePlayer;
    mu2 = false;
    pos2Mobile(e, puissanceButton, puissance, puissancePlayer);
}
export function mouseMovePuissanceMobile(e) {
    const puissanceButton = e.currentTarget.puissanceButton;
    const puissance = e.currentTarget.puissance;
    const puissancePlayer = e.currentTarget.puissancePlayer;
    mu2||pos2Mobile(e, puissanceButton, puissance, puissancePlayer);
}
export function mouseUpPuissance(e) {
    mu2=true;
    const index = e.currentTarget.index;
    if(actualSon != '') {
        const volume = document.querySelector(`#player` + index + ` .${sons.playerPuissanceBar}`).style.height.replace(/%/g, '') / 100;
        if(volume <= 0) {
            actualSon.volume = 0;
        } else if(volume >= 1) {
            actualSon.volume = 1;
        } else {
            actualSon.volume = volume;    
        }
    }
}

export function pos2Mobile(e, puissanceButton, puissance, puissancePlayer) {
    var x=(puissance.getBoundingClientRect().bottom-e.touches[0].clientY) / puissancePlayer.offsetHeight * 100;
    if(x <= 100 && x >= 0) {
        puissanceButton.style.bottom = x + '%';
        puissance.style.height = x + '%';
    }
    if(actualSon != '') {
        const volume = x / 100;
        if(volume <= 0) {
            actualSon.volume = 0;
        } else if(volume >= 1) {
            actualSon.volume = 1;
        } else {
            actualSon.volume = volume;    
        }
    }
}


export function pos2(e, puissanceButton, puissance, puissancePlayer) {
    var x=(puissance.getBoundingClientRect().bottom-e.pageY) / puissancePlayer.offsetHeight * 100;
    if(x <= 100 && x >= 0) {
        puissanceButton.style.bottom = x + '%';
        puissance.style.height = x + '%';
    }
    if(actualSon != '') {
        const volume = x / 100;
        if(volume <= 0) {
            actualSon.volume = 0;
        } else if(volume >= 1) {
            actualSon.volume = 1;
        } else {
            actualSon.volume = volume;    
        }
    }
}
export function stopQuitMusic() {
    if(actualSon != '') {
        actualSon.pause();
    }
}
export function stopMusic(detect) {
    if(actualSon !== '') {
        clearInterval(actualProgress);
        const element = document.querySelector(`#player` + actualIndex + ` > div > div > .${sons.playerLaunch}`);    
        const buttonPause = document.querySelector(`#pause` + actualIndex);
        const buttonStart = document.querySelector(`#play` + actualIndex);
        const progressPlayer = document.querySelector(`#player` + actualIndex + ` > div > div > .${sons.progressPlayer}`);
        progressPlayer.removeEventListener('mousedown', mouseMoveProgress, false);
        progressPlayer.removeEventListener('mouseup', mouseUpProgress, false);
        progressPlayer.removeEventListener('mousemove', mouseDownProgress, false);
        element.classList.remove('toggleOpacity');
        buttonStart.classList.remove('toggle');
        buttonPause.classList.add('toggle');
        actualSon.pause();
        if(detect != 'no') {
            actualIndex = '';
            actualSon = '';
        }
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
}

export function retour(indexInput) {
    if(indexInput == actualIndex && actualSon != '') {
        actualSon.currentTime = 0;
        const progress = document.querySelector(`#player` + actualIndex + ` > div > div > div > .${sons.playerProgressBar}`);
        const progressButton = document.querySelector(`#player` + actualIndex + ` > div > div > div > .${sons.playerProgressButton}`);
        progress.style.width = '0%';
        progressButton.style.left = '0%';
    } else {
        const urlSon = document.querySelector(`#play` + indexInput).getAttribute('urlofson');
        launchMusic(urlSon, indexInput, 'retour');
    }
}

export function actual() {
    actualProgress = setInterval(() => {
        if(actualIndex === '') {
            clearInterval(actualProgress)
        } else {
            const progress = document.querySelector(`#player` + actualIndex + ` > div > div > div > .${sons.playerProgressBar}`);
            const progressButton = document.querySelector(`#player` + actualIndex + ` > div > div > div > .${sons.playerProgressButton}`);
            if(progress !== null) {
                const actualTime = document.querySelector(`#player` + actualIndex + ` > div > div > .${sons.actualTime}`);
                const valueActualTimeSecond = Math.floor(actualSon.currentTime % 60) < 10 ? '0' + Math.floor(actualSon.currentTime % 60) : Math.floor(actualSon.currentTime % 60);
                const valueActualTimeMinute = Math.floor(actualSon.currentTime / 60) < 10 ? '0' + Math.floor(actualSon.currentTime / 60) : Math.floor(actualSon.currentTime / 60);
                actualTime.innerHTML = valueActualTimeMinute + ' : ' + valueActualTimeSecond;
                progress.style.width = actualSon.currentTime/actualSon.duration * 100 + '%';
                progressButton.style.left = actualSon.currentTime/actualSon.duration * 100 + '%';
            } else {
                clearInterval(actualProgress)
            }
        }
    }, 10);
}

export function openSon(index) {
    const puissanceGlobal = document.querySelectorAll(`.${sons.puissancePlayer} > .${sons.puissanceGlobal}`);
    puissanceGlobal[index].style.display = 'flex';
}

import React from "react";
export default class Layout extends React.Component {
    componentDidMount() {
        const evolution = document.querySelector(`.${sons.global} .${sons.progressBar} .${sons.progress}`);
        const evolutionPlayer = document.querySelector(`.${sons.global} .${sons.progressBar}`);
    
        evolutionPlayer.addEventListener('mouseup', mouseUpEvolution, false);
        evolutionPlayer.addEventListener('mousedown', mouseDownEvolution, false);
        evolutionPlayer.addEventListener('mousemove', mouseMoveEvolution, false);
        evolutionPlayer.addEventListener('touchstart', mouseDownEvolutionMobile, false);
        evolutionPlayer.addEventListener('touchend', mouseUpEvolution, false);
        evolutionPlayer.addEventListener('touchmove', mouseMoveEvolutionMobile, false);
        evolutionPlayer.evolutionPlayer = evolutionPlayer;
        evolutionPlayer.evolution = evolution;
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <></>
        )
    }
}
