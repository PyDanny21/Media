const Menu=document.getElementById('menu');
const text=document.getElementById('Text');
const settings=document.querySelector('.settings');
const notificationBtn=document.getElementById('notification');
const notification=document.querySelector('.notification');

function toggleNote() {
    const mess=notification.classList.toggle('more-height');
};

function toggleMenu() {
    if (window.innerWidth>700) {        
        const toggled=settings.classList.toggle('settings-large-width');
        // const show=toggled? settings.style.display='block':settings.style.display='none';
        const menuText=toggled? text.innerHTML='&times;':text.innerHTML='&equiv;';
    } else {
        const toggled=settings.classList.toggle('settings-width');        
        // const show=toggled? settings.style.display='block':settings.style.display='none';
        const menuText=toggled? text.innerHTML='&times;':text.innerHTML='&equiv;';
    };
};

const Input=document.getElementById('input');
const Btn=document.getElementById('btn');
Input.addEventListener('keyup',()=>{
    const typing=Input.value;
    const changeBtn=typing==''?Btn.innerHTML='<i class="fas fa-microphone">':Btn.innerHTML='<i class="fas fa-paper-plane">';
});


// Chat-messages
let messages=document.querySelectorAll('.chat-message');

messages.forEach((message)=>{
    message.addEventListener('click',()=>{
        if (window.innerWidth<=700) {        
            const chatDisplay=document.querySelector('.chat-display');
            const messageCont=document.querySelector('.chat-message-container');
            chatDisplay.style.display='block';
            messageCont.style.display='none';
        };
     
    });
});

// show messages
const Show=document.getElementById('showmessages');
Show.addEventListener('click',()=>{
    if (window.innerWidth<=700) {        
        const chatDisplay=document.querySelector('.chat-display');
        const messageCont=document.querySelector('.chat-message-container');
        chatDisplay.style.display='none';
        messageCont.style.display='block';
    };
});

document.addEventListener('DOMContentLoaded',()=>{
    if (window.innerWidth<700) {        
        $(document).ready(function () {
            var lastScrollTop=0;
        
            // Detect scroll event
            $(window).scroll(function (event) {
                var st=$(this).scrollTop();
        
                // compare scroll position
                if (st>lastScrollTop) {
                    $('#bottomNav').slideUp();
                } else {
                    $('#bottomNav').slideDown();
                }
        
                lastScrollTop=st;
                
            });
            
        });
    };



});


