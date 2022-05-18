Afin de lancer le projet convenablement:


Aller dans le fichier "next.config.js"


- Dans la partie "images" -> "domains", ajouter l'url du serveur où sont stockés les fichiers (nécessaire si elles sont sur un serveur différent). Par exemple : https://sandbox.fleurdepapier.fr/

- Dans la partie env -> "HOSTNAME" indiqué le dossier parent où se retrouvent le fichier JSON [Par exemple : https://sandbox.fleurdepapier.fr/bnf-bancsonores/ sachant que le json est ici : https://sandbox.fleurdepapier.fr/bnf-bancsonores/list.json]
- Dans la partie env -> "HOST_FILES" indiqué le dossier parent où sont stockés les fichiers img et mp3 [Par exemple : https://sandbox.fleurdepapier.fr/bnf-bancsonores/ sachant que les images sont ici : https://sandbox.fleurdepapier.fr/bnf-bancsonores/images/]


Puis exécuter :

- [Version node.js] - Development: npm run dev | Production: npm run start
- [Version static] - npm run build
    - Les fichiers static se retrouvent dans le dossier "out" et sont prêt à être déployer sur un serveur static.