# Exercice rogue like
- Vous pouvez améliorer ce sujet, je propose juste un roguelike très très simple pour cet exercice
- Le but du jeu est de faire avancer un joueur à travers plusieurs salles qui sont générées aléatoirement entre salle avec un ennemi, salle de boss, salle de soin, salle d'amélioration de l'attaque
- A vous de définir les différentes statistiques, essayez de réaliser un jeu équilibré mais ceci n'a aucune importance pour le but réel de l'exercice

## Le joueur
- Le joueur possède des statistiques
    - PV
    - Attaque

## Les salles
- 4 types de salles possibles générées de manière aléatoire
    - Ennemi, qui possède des statistiques de PV et d'attaque
    - Boss, le boss est un ennemi puissant qui va avoir plus de PV et d'attaque qu'un ennemi normal
    - Récupération de PV (Rend 15% des PV max du joueur)
    - Augmentation de la stat d'attaque

## Les combats
- Le joueur attaque toujours en premier
- Le joueur meurt s'il a zéro PV et la partie se termine
- Si le joueur gagne contre l'ennemi, il passe à la salle suivante
- A la fin de la partie, vous devez afficher le nombre d'ennemi tué et le nombre de boss vaincus