 'user strict';
    const li_ =  document.getElementsByTagName('li'); 
      
    const btn_clap =  document.getElementsByClassName('key-clap'); 
    const btn_hihat =  document.getElementsByClassName('key-hihat'); 
    const btn_kick =  document.getElementsByClassName('key-kick'); 
    const btn_openhat =  document.getElementsByClassName('key-openhat'); 
    const btn_boom =  document.getElementsByClassName('key-boom'); 
    const btn_ride =  document.getElementsByClassName('key-ride'); 
      
    function audioPlay() {
        audio = this.getElementsByTagName('audio'); 
        audio.play();
    }      

    for (const l of li_) { 
        btn_clap.onclick = audioPlay; 
        btn_hihat.onclick = audioPlay;  
        btn_kick.onclick = audioPlay;   
        btn_openhat.onclick = audioPlay;  
        btn_boom.onclick = audioPlay;  
        btn_ride.onclick = audioPlay;  
    }       