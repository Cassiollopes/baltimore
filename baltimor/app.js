
    setTimeout(()=>{
    document.querySelectorAll('.lamar_info')[0]
        .classList.add('animacao-lamarinfo');
        document.querySelectorAll('.oi')[0]
        .classList.add('animacao-h1');
        document.querySelectorAll('.lamar_img')[0]
        .classList.add('animacao-lamar');
    },500);

    document.querySelectorAll('.lamar_info span')[0]
    .addEventListener('click', ()=>{
        var infoD = document.querySelector('.info_d');
        var span = document.querySelector('.lamar_info span');

        infoD.classList.add('animacao-info_d');
        span.style.opacity = 0;
    })

    document.querySelectorAll('.lamar_info span')[1]
    .addEventListener('click', ()=>{
        var infoD = document.querySelector('.info_d');
        var span = document.querySelectorAll('.lamar_info span')[0];

        infoD.classList.remove('animacao-info_d');
        span.style.opacity = 1;
    })

    document.querySelector('.icone_bar')
    .addEventListener('mouseover', ()=>{
        var menu_flutu = document.querySelector('.menu_flutu');
        var bar = document.querySelector('.icone_bar');

        if(menu_flutu.classList.contains('show-menu_flutu')){
            menu_flutu.classList.remove('show-menu_flutu');
            bar.style.color = 'White';
        }else{
            menu_flutu.classList.add('show-menu_flutu');
            bar.style.color = 'gray';
        }        
    })  