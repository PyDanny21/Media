const Menu=document.getElementById('menu');
const text=document.getElementById('Text');
const notificationBtn=document.getElementById('notification');
const notification=document.querySelector('.notification');
const settings=document.querySelector('.settings');


notificationBtn.addEventListener('click',()=>{
    const mess=notification.classList.toggle('more-height');
});

Menu.addEventListener('click',()=>{
    if (window.innerWidth>700) {        
        const toggled=settings.classList.toggle('settings-large-width');
        // const show=toggled? settings.style.display='block':settings.style.display='none';
        const menuText=toggled? text.innerHTML='&times;':text.innerHTML='&equiv;';
    } else {
        const toggled=settings.classList.toggle('settings-width');        
        // const show=toggled? settings.style.display='block':settings.style.display='none';
        const menuText=toggled? text.innerHTML='&times;':text.innerHTML='&equiv;';
    };


});




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
