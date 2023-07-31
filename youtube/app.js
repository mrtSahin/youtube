
const olustur=document.querySelector('.olustur')
const olusturUl=document.querySelector('#olustur-ul')

const menu=document.querySelector('.menu')
const ul=document.querySelector('.close-ul')
const pausePlayButton=document.querySelector('#pause-play')
const svgPlay=document.querySelector('.on')
const svgPause=document.querySelector('.off')
const ucNoktaBtn=document.querySelector('.uc-nokta-btn')
const bildirbtn=document.querySelector('.bildir-btn')

const imgVideo=document.querySelector('.img-video')
const videoController=document.querySelector('.video-controller')

const begenme=document.querySelector('#begenme')
const begenmeme=document.querySelector('#begenmeme')
const begendimOff=document.querySelector('#begendim-off')
const begendimOn=document.querySelector('#begendim-on')
const begenmeSayisi=document.querySelector('#begendim-sayisi')
const begenmedimOff=document.querySelector('#begenmedim-off')
const begenmedimOn=document.querySelector('#begenmedim-on')

const subscribeBtn=document.querySelector('.subscribe-btn')
const ringBtn=document.querySelector('.ring-btn')
const popupmenuRing=document.querySelector('.popupmenu-ring')
const allRingList=document.querySelector('#all-ring-list')
const personalRingList=document.querySelector('#personal-ring-list')
const noRingList=document.querySelector('#no-ring-list')
const allRing=document.querySelector('#all-ring')
const personalRing=document.querySelector('#personal-ring')
const noRing=document.querySelector('#no-ring')

const suggestionVideo=document.querySelectorAll('.suggestion-video')
const queue=document.querySelectorAll('#queue')
const laterWatch=document.querySelectorAll('#later-watch')
const othersSuggestion=document.querySelectorAll('#others-suggestion')
const inQueue=document.querySelectorAll('#in-queue')
const inLaterWatch=document.querySelectorAll('#in-later-watch')


olustur.addEventListener('click',()=>{
    if(olusturUl.style.display=='none'){
        olusturUl.style.display="inline-block"
    }else{
        olusturUl.style.display="none"
    }
})

menu.addEventListener('click',()=>{
    if(ul.className==''){
        ul.className='close-ul'
    }else{
        ul.className =''
    }
    
})

pausePlayButton.addEventListener('click',()=>{
    svgPauseFuncion(svgPause.className.baseVal=='on')
})



ucNoktaBtn.addEventListener('click',()=>{
    if(bildirbtn.style.display==''){
        bildirbtn.style.display='flex'
    }
    else if(bildirbtn.style.display=='none'){
        bildirbtn.style.display='flex'
    }
    else if(bildirbtn.style.display=='flex'){
        bildirbtn.style.display='none'
    }
})

document.addEventListener('click', (event) => {
    if(event.target.className !== 'uc-nokta-btn' && bildirbtn.style.display=='flex') {
        bildirbtn.style.display='none'
    }
    
})


imgVideo.addEventListener('mouseenter',()=>{
    videoController.style.visibility='visible'
    videoController.addEventListener('mouseenter',()=>{
        videoController.style.visibility='visible'
    })
})
    
imgVideo.addEventListener('mouseleave',()=>{
    if(svgPause.className.baseVal=='on'){
        // eğer duraklatma tuşu on(oynatma tuşu off) sa ani video akıyorsa videoController 'ı görünmez yapabilir
        // ama duraklatma tuşu off(oynatma tuşu on) sa yani video durdurulmuşsa görünmez yapmamalı
        videoController.addEventListener('mouseleave',()=>{
            if(svgPause.className.baseVal=='on'){
                videoController.style.visibility='hidden'
            }
        })
        videoController.style.visibility='hidden'
    }
})
imgVideo.addEventListener('click',()=>{
    //console.log(videoController.style.visibility)
    svgPauseFuncion(svgPause.className.baseVal=='on')
})

begenme.addEventListener('click',()=>{
    if(begendimOn.style.display=='none'){
        begendimOn.style.display='block'
        begendimOff.style.display='none'
    }else{
        begendimOn.style.display='none'
        begendimOff.style.display='block'
    }
    begenmedimOn.style.display='none'
    begenmedimOff.style.display='block'
})
begenmeme.addEventListener('click',()=>{
    if(begenmedimOn.style.display=='none'){
        begenmedimOn.style.display='block'
        begenmedimOff.style.display='none'
    }else{
        begenmedimOn.style.display='none'
        begenmedimOff.style.display='block'
    }
    
    begendimOn.style.display='none'
    begendimOff.style.display='block'
})

subscribeBtn.addEventListener('click',()=>{
    console.log(ringBtn.style.display)
    if(ringBtn.style.display==''){
        ringBtn.style.display='block'
        subscribeBtn.style='background-color:rgb(48,48,48)'
        subscribeBtn.innerHTML='ABONE OLUNDU'
        subscribeBtn.style.color='rgb(170,170,170)'
    }
    else{
        ringBtn.style.display='' // abıne olunca default olarak personalRing in aktif olması için bunun altndaki 7 satırı buraya da ekliyoruz
        allRing.classList.remove('on-ring-btn')
        allRing.classList.add('off-ring-btn')
        personalRing.classList.remove('off-ring-btn')
        personalRing.classList.add('on-ring-btn')
        personalRing.style.display='flex'
        noRing.classList.remove('on-ring-btn')
        noRing.classList.add('off-ring-btn')

        subscribeBtn.style='background-color:rgb(204,0,0)'
        subscribeBtn.innerHTML='ABONE OL'
        popupmenuRing.style.display=''
    }
})

ringBtn.addEventListener('click',()=>{
    if(popupmenuRing.style.display==''){
        popupmenuRing.style.display='inline-block'
    }else{
        popupmenuRing.style.display=''
    }
})


allRingList.addEventListener('click',()=>{
    allRing.classList.remove('off-ring-btn')
    allRing.classList.add('on-ring-btn')
    personalRing.classList.remove('on-ring-btn')
    personalRing.classList.add('off-ring-btn')
    personalRing.style.display='none'
    noRing.classList.remove('on-ring-btn')
    noRing.classList.add('off-ring-btn')
})
personalRingList.addEventListener('click',()=>{
    allRing.classList.remove('on-ring-btn')
    allRing.classList.add('off-ring-btn')
    personalRing.classList.remove('off-ring-btn')
    personalRing.classList.add('on-ring-btn')
    personalRing.style.display='flex'
    noRing.classList.remove('on-ring-btn')
    noRing.classList.add('off-ring-btn')
})
noRingList.addEventListener('click',()=>{
    allRing.classList.remove('on-ring-btn')
    allRing.classList.add('off-ring-btn')
    personalRing.classList.remove('on-ring-btn')
    personalRing.classList.add('off-ring-btn')
    personalRing.style.display='none'
    noRing.classList.remove('off-ring-btn')
    noRing.classList.add('on-ring-btn')
})

for(let i=0;i<suggestionVideo.length;i++){
    suggestionVideo[i].addEventListener('mouseenter',()=>{

        othersSuggestion[i].classList.remove('queue-and-last-watch-others-suggestion-off')
        othersSuggestion[i].classList.add('others-suggestion')
        
        
        if(inLaterWatch[i].getAttribute('durum')=='in-later-watch'){
            laterWatch[i].classList.remove('later-watch')
            laterWatch[i].classList.add('queue-and-last-watch-others-suggestion-off')
            inLaterWatch[i].classList.remove('queue-and-last-watch-others-suggestion-off')
            inLaterWatch[i].classList.add('later-watch')
        }
        else{
            laterWatch[i].classList.add('later-watch')
            laterWatch[i].classList.remove('queue-and-last-watch-others-suggestion-off')
            inLaterWatch[i].classList.add('queue-and-last-watch-others-suggestion-off')
            inLaterWatch[i].classList.remove('later-watch')
        }
        laterWatch[i].addEventListener('click',()=>{
            laterWatch[i].classList.remove('later-watch')
            laterWatch[i].classList.add('queue-and-last-watch-others-suggestion-off')
            inLaterWatch[i].classList.remove('queue-and-last-watch-others-suggestion-off')
            inLaterWatch[i].classList.add('later-watch')
            inLaterWatch[i].setAttribute('durum','in-later-watch')
        })
        inLaterWatch[i].addEventListener('click',()=>{
            laterWatch[i].classList.add('later-watch')
            laterWatch[i].classList.remove('queue-and-last-watch-others-suggestion-off')
            inLaterWatch[i].classList.add('queue-and-last-watch-others-suggestion-off')
            inLaterWatch[i].classList.remove('later-watch')
            inLaterWatch[i].setAttribute('durum','out-later-watch')
        })



        if(inQueue[i].getAttribute('durum')=='inQueue'){
            queue[i].classList.remove('queue')
            queue[i].classList.add('queue-and-last-watch-others-suggestion-off')
            inQueue[i].classList.remove('queue-and-last-watch-others-suggestion-off')
            inQueue[i].classList.add('queue')
        }
        else{
            queue[i].classList.add('queue')
            queue[i].classList.remove('queue-and-last-watch-others-suggestion-off')
            inQueue[i].classList.add('queue-and-last-watch-others-suggestion-off')
            inQueue[i].classList.remove('queue')
        }
        queue[i].addEventListener('click',()=>{
            queue[i].classList.remove('queue')
            queue[i].classList.add('queue-and-last-watch-others-suggestion-off')
            inQueue[i].classList.remove('queue-and-last-watch-others-suggestion-off')
            inQueue[i].classList.add('queue')
            inQueue[i].setAttribute('durum','inQueue')
        })
        inQueue[i].addEventListener('click',()=>{
            queue[i].classList.add('queue')
            queue[i].classList.remove('queue-and-last-watch-others-suggestion-off')
            inQueue[i].classList.add('queue-and-last-watch-others-suggestion-off')
            inQueue[i].classList.remove('queue')
            inQueue[i].setAttribute('durum','outQueue')
        })
    })
    suggestionVideo[i].addEventListener('mouseleave',()=>{
        laterWatch[i].classList.add('queue-and-last-watch-others-suggestion-off')
        queue[i].classList.add('queue-and-last-watch-others-suggestion-off')
        othersSuggestion[i].classList.add('queue-and-last-watch-others-suggestion-off')
        laterWatch[i].classList.remove('later-watch')
        queue[i].classList.remove('queue')
        othersSuggestion[i].classList.remove('others-suggestion')
        inQueue[i].classList.add('queue-and-last-watch-others-suggestion-off')
        inQueue[i].classList.remove('queue')
        inLaterWatch[i].classList.add('queue-and-last-watch-others-suggestion-off')
        inLaterWatch[i].classList.remove('queue')
    })
}






function svgPauseFuncion(state){ // svgPause.className.baseVal=='on' ile gelen değeri (false-true) sayıya dönüştürüyor ve ona göre atamalar yapıyor
    // svgPause.className off iken kontrol şartımız svgPause.className.baseVal=='on' şeklinde olduğundan dolayı false geliyor
    // yani svgPause.className 'i off , biz bunu on yapmak istiyoruz
    // +false ın karşılığı da 0 olduğundan ve listemizdeki 0. eleman on olduğundan  
    // svgPause.className i on yapmak için svgPause.classList.add(onOff[+state]) yapıyoruz
    const onOff=['on','off','on','Duraklat','Oynat']
    svgPause.classList.add(onOff[+state])
    svgPause.classList.remove(onOff[+state+1])
    svgPlay.classList.add(onOff[+state+1])
    svgPlay.classList.remove(onOff[+state])
    pausePlayButton.title=onOff[+state+3]
    
}
