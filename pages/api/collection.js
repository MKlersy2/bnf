export default function handler(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(
        [{
            "name": "Voix d’écrivains et de poètes",
            "img": "1.png",
            "reference": 0,
            "sons": [
                {
                    "name": "Colette vous parle",
                    "desc": "Sidonie-Gabrielle Colette",
                    "subDesc": "Enregistrement sonore sur disque 33t, 30cm",
                    "cote": "Cote C-10802",
                    "provenance": "BnF Dépôt Légal",
                    "url": "audios/coletteVousParle.mp3",
                    "img": "disque/coletteVousParle.jpeg"
                },{
                    "name": "Discours",
                    "desc": "Raymond Poincaré, Président de la République Française ",
                    "subDesc": "Date d’édition : 14 juillet 1915",
                    "cote": "Cote SD 78 30-7241",
                    "provenance": "BnF",
                    "url": "audios/raymondPoincare.mp3",
                    "img": "disque/raymondPoincare.jpeg"
                },{
                    "name": "For Paris Peace Conference",
                    "desc": "Mrs. Eleanor Roosevelt",
                    "subDesc": "Date d’édition : 18 avril 1949\nEnregistrement sonore sur disque monoface 78t, 30 cm",
                    "cote": "Cote SD 78 30-14867",
                    "provenance": "BnF",
                    "url": "audios/eleanorRoosevelt.mp3",
                    "img": "disque/eleanorRoosevelt.jpeg"
                },{
                    "name": "Albert Camus vous parle, texte inédit dit par l’auteur",
                    "desc": "Albert Camus",
                    "subDesc": "Enregistrement sonore sur disque 33t, 25 cm",
                    "cote": "Cote C-10803",
                    "provenance": "BnF Dépôt Légal",
                    "url": "audios/albertCamus.mp3",
                    "img": "disque/albertCamus.jpeg"
                },{
                    "name": "Appel aux Français pour continuer la lutte depuis la Grande-Bretagne",
                    "desc": "Charles de Gaulle",
                    "subDesc": "Date d’édition : 22 juin 1940\nEnregistrement sonore sur disque 78t,  25 cm",
                    "cote": "Cote C-19808",
                    "provenance": "BnF (Don 1946)",
                    "url": "audios/charlesDeGaulle.mp3",
                    "img": "disque/charlesDeGaulle.jpeg"
                }
            ]
        }, {
            "name": "Voix d’hommes et de femmes politiques",
            "img": "2.png",
            "reference": 1,
            "sons": [
                 {
                    "name": "Colette vous parle",
                    "desc": "Sidonie-Gabrielle Colette",
                    "subDesc": "Enregistrement sonore sur disque 33t, 30cm",
                    "cote": "Cote C-10802",
                    "provenance": "BnF Dépôt Légal",
                    "url": "audios/coletteVousParle.mp3",
                    "img": "disque/coletteVousParle.jpeg"
                },{
                    "name": "Discours",
                    "desc": "Raymond Poincaré, Président de la République Française ",
                    "subDesc": "Date d’édition : 14 juillet 1915",
                    "cote": "Cote SD 78 30-7241",
                    "provenance": "BnF",
                    "url": "audios/raymondPoincare.mp3",
                    "img": "disque/raymondPoincare.jpeg"
                },{
                    "name": "For Paris Peace Conference",
                    "desc": "Mrs. Eleanor Roosevelt",
                    "subDesc": "Date d’édition : 18 avril 1949\nEnregistrement sonore sur disque monoface 78t, 30 cm",
                    "cote": "Cote SD 78 30-14867",
                    "provenance": "BnF",
                    "url": "audios/eleanorRoosevelt.mp3",
                    "img": "disque/eleanorRoosevelt.jpeg"
                },{
                    "name": "Albert Camus vous parle, texte inédit dit par l’auteur",
                    "desc": "Albert Camus",
                    "subDesc": "Enregistrement sonore sur disque 33t, 25 cm",
                    "cote": "Cote C-10803",
                    "provenance": "BnF Dépôt Légal",
                    "url": "audios/albertCamus.mp3",
                    "img": "disque/albertCamus.jpeg"
                },{
                    "name": "Appel aux Français pour continuer la lutte depuis la Grande-Bretagne",
                    "desc": "Charles de Gaulle",
                    "subDesc": "Date d’édition : 22 juin 1940\nEnregistrement sonore sur disque 78t,  25 cm",
                    "cote": "Cote C-19808",
                    "provenance": "BnF (Don 1946)",
                    "url": "audios/charlesDeGaulle.mp3",
                    "img": "disque/charlesDeGaulle.jpeg"
                }
            ]
        }, {
            "name": "Voix de comédiens et comédiennes",
            "img": "3.png",
            "reference": 2,
            "sons": [
                 {
                    "name": "Colette vous parle",
                    "desc": "Sidonie-Gabrielle Colette",
                    "subDesc": "Enregistrement sonore sur disque 33t, 30cm",
                    "cote": "Cote C-10802",
                    "provenance": "BnF Dépôt Légal",
                    "url": "audios/coletteVousParle.mp3",
                    "img": "disque/coletteVousParle.jpeg"
                },{
                    "name": "Discours",
                    "desc": "Raymond Poincaré, Président de la République Française ",
                    "subDesc": "Date d’édition : 14 juillet 1915",
                    "cote": "Cote SD 78 30-7241",
                    "provenance": "BnF",
                    "url": "audios/raymondPoincare.mp3",
                    "img": "disque/raymondPoincare.jpeg"
                },{
                    "name": "For Paris Peace Conference",
                    "desc": "Mrs. Eleanor Roosevelt",
                    "subDesc": "Date d’édition : 18 avril 1949\nEnregistrement sonore sur disque monoface 78t, 30 cm",
                    "cote": "Cote SD 78 30-14867",
                    "provenance": "BnF",
                    "url": "audios/eleanorRoosevelt.mp3",
                    "img": "disque/eleanorRoosevelt.jpeg"
                },{
                    "name": "Albert Camus vous parle, texte inédit dit par l’auteur",
                    "desc": "Albert Camus",
                    "subDesc": "Enregistrement sonore sur disque 33t, 25 cm",
                    "cote": "Cote C-10803",
                    "provenance": "BnF Dépôt Légal",
                    "url": "audios/albertCamus.mp3",
                    "img": "disque/albertCamus.jpeg"
                },{
                    "name": "Appel aux Français pour continuer la lutte depuis la Grande-Bretagne",
                    "desc": "Charles de Gaulle",
                    "subDesc": "Date d’édition : 22 juin 1940\nEnregistrement sonore sur disque 78t,  25 cm",
                    "cote": "Cote C-19808",
                    "provenance": "BnF (Don 1946)",
                    "url": "audios/charlesDeGaulle.mp3",
                    "img": "disque/charlesDeGaulle.jpeg"
                }
            ]
        }, {
            "name": "Voix de sportifs",
            "img": "4.png",
            "reference": 3,
            "sons": [
                {
                    "name": "Colette vous parle",
                    "desc": "Sidonie-Gabrielle Colette",
                    "subDesc": "Enregistrement sonore sur disque 33t, 30cm",
                    "cote": "Cote C-10802",
                    "provenance": "BnF Dépôt Légal",
                    "url": "audios/coletteVousParle.mp3",
                    "img": "disque/coletteVousParle.jpeg"
                },{
                    "name": "Discours",
                    "desc": "Raymond Poincaré, Président de la République Française ",
                    "subDesc": "Date d’édition : 14 juillet 1915",
                    "cote": "Cote SD 78 30-7241",
                    "provenance": "BnF",
                    "url": "audios/raymondPoincare.mp3",
                    "img": "disque/raymondPoincare.jpeg"
                },{
                    "name": "For Paris Peace Conference",
                    "desc": "Mrs. Eleanor Roosevelt",
                    "subDesc": "Date d’édition : 18 avril 1949\nEnregistrement sonore sur disque monoface 78t, 30 cm",
                    "cote": "Cote SD 78 30-14867",
                    "provenance": "BnF",
                    "url": "audios/eleanorRoosevelt.mp3",
                    "img": "disque/eleanorRoosevelt.jpeg"
                },{
                    "name": "Albert Camus vous parle, texte inédit dit par l’auteur",
                    "desc": "Albert Camus",
                    "subDesc": "Enregistrement sonore sur disque 33t, 25 cm",
                    "cote": "Cote C-10803",
                    "provenance": "BnF Dépôt Légal",
                    "url": "audios/albertCamus.mp3",
                    "img": "disque/albertCamus.jpeg"
                },{
                    "name": "Appel aux Français pour continuer la lutte depuis la Grande-Bretagne",
                    "desc": "Charles de Gaulle",
                    "subDesc": "Date d’édition : 22 juin 1940\nEnregistrement sonore sur disque 78t,  25 cm",
                    "cote": "Cote C-19808",
                    "provenance": "BnF (Don 1946)",
                    "url": "audios/charlesDeGaulle.mp3",
                    "img": "disque/charlesDeGaulle.jpeg"
                }
            ]
        }, {
            "name": "Voix d’hommes de sciences",
            "img": "5.png",
            "reference": 4,
            "sons": [
                 {
                    "name": "Colette vous parle",
                    "desc": "Sidonie-Gabrielle Colette",
                    "subDesc": "Enregistrement sonore sur disque 33t, 30cm",
                    "cote": "Cote C-10802",
                    "provenance": "BnF Dépôt Légal",
                    "url": "audios/coletteVousParle.mp3",
                    "img": "disque/coletteVousParle.jpeg"
                },{
                    "name": "Discours",
                    "desc": "Raymond Poincaré, Président de la République Française ",
                    "subDesc": "Date d’édition : 14 juillet 1915",
                    "cote": "Cote SD 78 30-7241",
                    "provenance": "BnF",
                    "url": "audios/raymondPoincare.mp3",
                    "img": "disque/raymondPoincare.jpeg"
                },{
                    "name": "For Paris Peace Conference",
                    "desc": "Mrs. Eleanor Roosevelt",
                    "subDesc": "Date d’édition : 18 avril 1949\nEnregistrement sonore sur disque monoface 78t, 30 cm",
                    "cote": "Cote SD 78 30-14867",
                    "provenance": "BnF",
                    "url": "audios/eleanorRoosevelt.mp3",
                    "img": "disque/eleanorRoosevelt.jpeg"
                },{
                    "name": "Albert Camus vous parle, texte inédit dit par l’auteur",
                    "desc": "Albert Camus",
                    "subDesc": "Enregistrement sonore sur disque 33t, 25 cm",
                    "cote": "Cote C-10803",
                    "provenance": "BnF Dépôt Légal",
                    "url": "audios/albertCamus.mp3",
                    "img": "disque/albertCamus.jpeg"
                },{
                    "name": "Appel aux Français pour continuer la lutte depuis la Grande-Bretagne",
                    "desc": "Charles de Gaulle",
                    "subDesc": "Date d’édition : 22 juin 1940\nEnregistrement sonore sur disque 78t,  25 cm",
                    "cote": "Cote C-19808",
                    "provenance": "BnF (Don 1946)",
                    "url": "audios/charlesDeGaulle.mp3",
                    "img": "disque/charlesDeGaulle.jpeg"
                }
            ]
        }, {
            "name": "Voix du monde",
            "img": "6.png",
            "reference": 5,
            "sons": [
                 {
                    "name": "Colette vous parle",
                    "desc": "Sidonie-Gabrielle Colette",
                    "subDesc": "Enregistrement sonore sur disque 33t, 30cm",
                    "cote": "Cote C-10802",
                    "provenance": "BnF Dépôt Légal",
                    "url": "audios/coletteVousParle.mp3",
                    "img": "disque/coletteVousParle.jpeg"
                },{
                    "name": "Discours",
                    "desc": "Raymond Poincaré, Président de la République Française ",
                    "subDesc": "Date d’édition : 14 juillet 1915",
                    "cote": "Cote SD 78 30-7241",
                    "provenance": "BnF",
                    "url": "audios/raymondPoincare.mp3",
                    "img": "disque/raymondPoincare.jpeg"
                },{
                    "name": "For Paris Peace Conference",
                    "desc": "Mrs. Eleanor Roosevelt",
                    "subDesc": "Date d’édition : 18 avril 1949\nEnregistrement sonore sur disque monoface 78t, 30 cm",
                    "cote": "Cote SD 78 30-14867",
                    "provenance": "BnF",
                    "url": "audios/eleanorRoosevelt.mp3",
                    "img": "disque/eleanorRoosevelt.jpeg"
                },{
                    "name": "Albert Camus vous parle, texte inédit dit par l’auteur",
                    "desc": "Albert Camus",
                    "subDesc": "Enregistrement sonore sur disque 33t, 25 cm",
                    "cote": "Cote C-10803",
                    "provenance": "BnF Dépôt Légal",
                    "url": "audios/albertCamus.mp3",
                    "img": "disque/albertCamus.jpeg"
                },{
                    "name": "Appel aux Français pour continuer la lutte depuis la Grande-Bretagne",
                    "desc": "Charles de Gaulle",
                    "subDesc": "Date d’édition : 22 juin 1940\nEnregistrement sonore sur disque 78t,  25 cm",
                    "cote": "Cote C-19808",
                    "provenance": "BnF (Don 1946)",
                    "url": "audios/charlesDeGaulle.mp3",
                    "img": "disque/charlesDeGaulle.jpeg"
                }
            ]
        }]
);}