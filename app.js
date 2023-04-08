const displayTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    const session = document.getElementById('session');

    if( hours >= 12){
session.innerHTML = " PM";
    }else{
        session.innerHTML='AM';
    }

    if ( hours > 12){
        hours = hours -12;
    }

    document.getElementById('hours').innerHTML=hours;
    document.getElementById('minutes').innerHTML=minutes;
    document.getElementById('seconds').innerHTML=seconds;
    document.getElementById('milliseconds').innerHTML=milliseconds;
}

setInterval(displayTime,10);