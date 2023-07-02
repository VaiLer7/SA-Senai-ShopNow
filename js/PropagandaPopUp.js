function PropagandaFechar() {
    const propaganda = document.getElementById('id07');
  
    propaganda.style.display = 'none';
    setTimeout(AbrirPropaganda, 1000);
  
    function AbrirPropaganda() {
        propaganda.style.display = 'flex';
    }
}