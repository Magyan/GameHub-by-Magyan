// online_functions.js

// Dépend de l'initialisation du client Supabase dans 'supabase_config.js'
// (la variable 'supabaseClient' doit être disponible globalement)

/**
 * Sauvegarde un score dans la table 'scores' de Supabase.
 * @param {number} scoreValue - La valeur du score (ex: 120, 45, 1000).
 * @param {string} gameName - Le nom complet du jeu (ex: 'Jeu 1 — Réaction').
 * @param {number | null} [moves=null] - (Optionnel) Le nombre de coups (utile pour les jeux comme le Taquin).
 */
async function saveScore(scoreValue, gameName, moves = null){
    // Récupère le pseudo du joueur depuis le stockage local (défini dans index.html)
    const name = localStorage.getItem("gh_player");
    
    if (!name) {
        console.error("Pseudo non défini. Score non sauvegardé en ligne.");
        return;
    }
    
    if (typeof supabaseClient === 'undefined') {
        console.error("Client Supabase non initialisé. Assurez-vous que supabase_config.js est chargé.");
        return;
    }
    
    console.log(`Tentative de sauvegarde du score ${scoreValue} pour ${name} sur ${gameName}...`);

    const { data, error } = await supabaseClient
      .from('scores') // Nom de la table
      .insert([
        { 
            player_name: name, 
            game_name: gameName, 
            score: scoreValue, 
            moves: moves 
        },
      ]);

    if (error) {
      console.error(`Erreur lors de l'enregistrement du score en ligne pour ${gameName}:`, error);
      alert(`Erreur de sauvegarde en ligne. Vérifiez la console (F12) et le RLS Supabase. L'erreur est: ${error.message}`);
    } else {
      console.log('Score enregistré en ligne avec succès:', data);
    }
}
