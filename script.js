function finalizarJuego(resultado) {
    // resultado puede ser "Gano" o "Perdio"
    const formBaseURL = "https://docs.google.com";
    const entryID = "entry.TU_ID_DE_PREGUNTA"; // El ID que anotaste antes
    
    // Redirigir al cliente al formulario con el resultado ya marcado
    window.location.href = `${formBaseURL}?usp=pp_url&${entryID}=${resultado}`;
}
