//Ecoute de la page afin d'associer la pression du clavier a un click pour la navigation au clavier.        
document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
      event.preventDefault(); // Empêche le défilement par défaut
      event.target.click();
    }
  });