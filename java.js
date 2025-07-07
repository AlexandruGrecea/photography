function seteazaTemaDupaOra() {
    const oraCurenta = new Date().getHours();
    const corpPagina = document.body;

    if (oraCurenta >= 6 && oraCurenta < 20) {
        corpPagina.classList.add('light');
        corpPagina.classList.remove('dark')
    } else {
        corpPagina.classList.add('dark');
        corpPagina.classList.remove('light')        
    }
}

window.addEventListener('DOMContentLoaded', seteazaTemaDupaOra);
setInterval(seteazaTemaDupaOra, 60 * 60 * 1000);