var dis=document.querySelector(".timer")
let time=null;
let st=0;
let et=0;
let running=false;

function start(){
    console.log("Start");
    if(!running){
        st=Date.now()-et;
        time=setInterval(update,10);
        running=true;
    }
}

function stop(){
    console.log("Stop");
    if(running){
        clearInterval(time)
        et=Date.now()-st;
        running=false;
    }
}

function restart(){
    console.log("restart");
    clearInterval(time)
    let st=0;
    let et=0;
    let running=false;
    dis.textContent="00 hr: 00 min: 00 sec: 00 msec";
}

function update(){
    const current=Date.now();
    et=current-st;

    let hr=Math.floor(et / (1000 * 60 * 60));
    let min=Math.floor(et / (1000 * 60)%60);
    let sec=Math.floor(et / 1000 % 60);
    let msec=Math.floor(et % 1000 / 10);

    hr=String(hr).padStart(2,"0");
    min=String(min).padStart(2,"0");
    sec=String(sec).padStart(2,"0");
    msec=String(msec).padStart(2,"0");
    dis.textContent=`${hr} hr: ${min} min: ${sec} sec: ${msec} msec`;
}