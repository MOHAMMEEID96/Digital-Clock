const djclock = document.querySelector('.clock');
const bodypage = document.querySelector('body') 


const tick = ()=>{
    const now = new Date()

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = 
    `
    <span>${h} : </span>
    <span>${s} : </span>
    <span>${m} </span>
    `;
    
    djclock.innerHTML= html;

}
setInterval(tick,1000)

