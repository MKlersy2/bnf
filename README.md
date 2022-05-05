Afin de lancer le projet convenablement en local:

- [Version test] - npm run dev
- [Version production] - npm run build -> npm run start


Modification des liens 

Aller dans le fichier "next.config.js"

- Dans la partie "images" -> "domains", ajouter l'url du serveur où sont stockés les fichiers. Par exemple : https://sandbox.fleurdepapier.fr/
- Dans la partie "env" -> "HOSTNAME", modifier aussi l'url par l'url où sont stockés les fichiers. Par exemple : https://sandbox.fleurdepapier.fr/bnf-bancsonores/ sachant que le json est ici : https://sandbox.fleurdepapier.fr/bnf-bancsonores/list.json