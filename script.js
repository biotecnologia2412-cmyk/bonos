function finalizarJuego(resultado) {
    // resultado puede ser "Gano" o "Perdio"
    const formBaseURL = "https://docs.google.com";
    const entryID = "entry.https://form.jotform.com/260385621780055";
    
    // Redirigir al cliente al formulario con el resultado ya marcado
    window.location.href = `${formBaseURL}?usp=pp_url&${entryID}=${resultado}`;
}
