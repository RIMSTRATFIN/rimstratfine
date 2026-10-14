const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
if(toggle){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
const form=document.querySelector('#contact-form');if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);location.href='mailto:bozongo1280@gmail.com?subject='+encodeURIComponent('Contact depuis le site - '+d.get('name'))+'&body='+encodeURIComponent('Nom : '+d.get('name')+'\nE-mail : '+d.get('email')+'\n\nMessage :\n'+d.get('message'));document.querySelector('#form-status').textContent='Votre messagerie va s’ouvrir.';});}
