/* 메뉴 */
const menu_btn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');
menu_btn.addEventListener('click', ()=>{
    document.querySelector('.nexon_menu').classList.add('on');
    document.body.style.overflowY = 'hidden';
});
const close_bnt = document.querySelector('.close_btn');
close_bnt.addEventListener('click', ()=>{
    document.querySelector('.nexon_menu').classList.remove('on');
    document.body.style.overflowY = 'auto';
})

let tab_list = document.querySelector('.tab_list');
let bar = document.querySelector('.bar');
tab_list.addEventListener('mouseenter', ()=>{
    bar.classList.add('on');
});
tab_list.addEventListener('mouseleave', ()=>{
    bar.classList.remove('on');
});

/* 메뉴 안 탭버튼 */
let menuTab = document.querySelectorAll('.tab_btn li');
let menuTab_cont = document.querySelectorAll('.move_tab > li');

menuTab.forEach(tab_btn => {
    tab_btn.addEventListener('click', e => {
        e.preventDefault();
        
        for(let i=0; i<menuTab.length; i++){
            menuTab[i].classList.remove('active');
        };
        e.target.parentElement.classList.add('active');

        let tg = e.target.getAttribute('href');

        menuTab_cont.forEach(cont => {
            cont.style.display = 'none';
        });
        document.querySelector(`.${tg}`).style.display = 'flex';
    });
    menuTab_cont[0].style.display = 'flex';
})

/* 메뉴 스크롤 바 */
let pc = document.querySelector('.move_tab');
tab_list.addEventListener('wheel', (e)=>{
    /* console.log(e.deltaY, e.deltaX); */
    for(let i=1; i<=2; i++){
        if(e.deltaY >= 0){
            bar.style.top = `${i*125}px`;
            pc.style.top = `-${i*50}px`;
        }else if(e.deltaY <= 100){
            bar.style.top = `-${i*7}px`;
            pc.style.top = `${i*12.5}px`;
        } 
    }
})

let startP = 0;
let endP = 0;
bar.addEventListener('mousedown', (e) => {
    /* console.log(e.clientY); */
    startP = e.clientY;
})
bar.addEventListener('mouseup', (e) => {
    /* console.log(e.clientY); */
    endP = e.clientY;

    for(let i=1; i<=2; i++){        
        bar.style.top = `-${i*7}px`;
        pc.style.top = `${i*12.5}px`;
    }
})

/* gnb_호버 */
let card = document.querySelector('.card');
let pc_room = document.querySelector('.pc_room');

function hover(list){
    list.addEventListener('mouseenter', ()=>{
        list.querySelector('.hover').classList.add('on');
    })
    list.addEventListener('mouseleave', ()=>{
        list.querySelector('.hover').classList.remove('on');
    })
}
hover(card);
hover(pc_room);


/* fadein 이벤트 */
window.addEventListener('load', ()=>{
    let fadeEvent = document.querySelectorAll('.section1 .fade-in');
    fadeEvent.forEach(el => {
        el.classList.add('show')
    })
})

window.addEventListener('scroll', () => {
    let scrolltop = window.pageYOffset || document.documentElement.scrollTop || window.screenY;
    console.log(scrolltop)

    if(scrolltop >= 3100){
        let fadeEvent = document.querySelectorAll('.section4 .fade-in');
        fadeEvent.forEach(el => {
            el.classList.add('show')
        })
    }else if(scrolltop >= 1900){
        let fadeEvent = document.querySelectorAll('.section3 .fade-in');
        fadeEvent.forEach(el => {
            el.classList.add('show')
        })
    }else if(scrolltop >= 800){
        let fadeEvent = document.querySelectorAll('.section2 .fade-in');
        fadeEvent.forEach(el => {
            el.classList.add('show')
        })

        document.querySelector('.top_btn').style.display = 'block';
    }else if(scrolltop <= 800){
        document.querySelector('.top_btn').style.display = 'none';
    }
})

/* top_bnt */
document.querySelector('.top_btn').addEventListener('click', ()=>{
    document.querySelector('header').scrollIntoView({
        behavior: "smooth"
    }); 
})

/* 탭버튼 */
const tab_btn = document.querySelectorAll('.event_btn');
const tab_cont = document.querySelectorAll('.tab_cont');


tab_btn.forEach(btn => btn.addEventListener('mouseenter', () => {
    let el = btn.children[0];
    el.classList.add('hover')
}))
tab_btn.forEach(btn => btn.addEventListener('mouseleave', () => {
    let el = btn.children[0];
    el.classList.remove('hover')
}))

/* 탭버튼 클릭 시 화면 이동 */
document.querySelectorAll('.event_btn').forEach(el=>{
    el.addEventListener("click", e => {
        e.preventDefault();
        let link = el.children[0].getAttribute('href');
        document.querySelector(`.${link}`).scrollIntoView({
            behavior: "smooth"
        }); 
    });
});
