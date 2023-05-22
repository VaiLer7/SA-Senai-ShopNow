function PropagandaFechar(){
    const propaganda = document.getElementById('id07').style;

    propaganda.display = 'none';
    m=60000;
    setTimeout(AbrirPropaganda, 10*m);

    function AbrirPropaganda(){
        propaganda.display = 'flex';
    }
}