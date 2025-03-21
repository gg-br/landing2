document.getElementById('mobile_btn').addEventListener('click', function(){
    // Alterna a classe 'active' no menu
    document.getElementById('mobile_menu').classList.toggle('active');
    
    // Alterna a classe 'active' no botão
    this.classList.toggle('active');
});