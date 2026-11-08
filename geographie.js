// Fichier geographie.js - Cours complet de Géographie 6e année (RDC)
function L(n, t, c){ return { id:'g' + n.replace(/[^0-9A-Za-z]/g, '_'), n:n, t:t, c:c }; }

window.COURSE_GEO = [
  { t:'Notions clés du développement', ch:[
    { t:'Objectif terminal du programme', free:true, ls:[
      L('N1','Indices et facteurs de développement',[
        ['Que doit savoir faire l’élève à la fin de la 6e année, selon le programme ?','Déterminer les indices et les facteurs de développement, ainsi que les solutions appropriées au sous-développement de la RDC et de l’Afrique.'],
        ['Citez des indices de développement.','Revenu par habitant (PIB/hab.), indice de développement humain (IDH), espérance de vie, taux d’alphabétisation, mortalité infantile, accès à l’eau potable et à l’électricité, taux d’urbanisation.'],
        ['Qu’est-ce que l’IDH ?','L’indice de développement humain, calculé par le PNUD. Il combine la santé (espérance de vie), l’instruction (taux d’alphabétisation des adultes) et le revenu (PIB par habitant).'],
        ['Citez des facteurs de développement.','Naturels (ressources, climat, position), humains (population, formation), économiques (capitaux, infrastructures, industries) et politiques (paix, bonne gouvernance).'],
        ['Quelle différence entre croissance économique et développement ?','La croissance est l’augmentation de la production (PIB). Le développement est plus large : il améliore durablement la santé, l’éducation et les conditions de vie de la population.'],
        ['Quelles sont les causes du sous-développement en Afrique ?','Héritage colonial (économies tournées vers l’exportation de matières premières), dépendance aux produits bruts, dette, conflits, mauvaise gouvernance, manque d’infrastructures et de formation, croissance rapide de la population.'],
        ['Pourquoi le pouvoir de négociation de l’Afrique est-il faible dans les forums internationaux ?','Ses économies sont faibles et dépendantes des matières premières et de l’aide, ses États sont divisés et peu intégrés, et les prix de ses produits sont fixés sur les marchés mondiaux.'],
        ['Que signifie la dégradation des termes de l’échange ?','Les prix des matières premières exportées baissent ou stagnent, alors que ceux des produits manufacturés importés augmentent : il faut exporter toujours plus pour acheter la même chose.'],
        ['Quelles solutions face au sous-développement ?','Diversifier et transformer sur place, investir dans l’éducation et la santé, construire des infrastructures, assurer la paix et la bonne gouvernance, intégrer les économies africaines, moderniser l’agriculture.']
      ]),
      L('N2','Lire et réaliser une carte thématique',[
        ['Qu’est-ce qu’une carte thématique ?','Une carte qui représente un seul thème (climats, mines, population, transports…) à partir de données géographiques recueillies, sur un fond de carte.'],
        ['Quels éléments doit contenir une carte ?','Un titre, une légende, une échelle, l’orientation (le nord) et la source des données.'],
        ['À quoi sert la légende ?','À expliquer les signes, les couleurs et les symboles utilisés sur la carte.'],
        ['Que signifie une échelle de 1/1 000 000 ?','1 cm sur la carte représente 1 000 000 cm sur le terrain, soit 10 km.'],
        ['Comment réaliser une carte thématique ?','Choisir le thème, rassembler les données, préparer le fond de carte, choisir signes et couleurs, tracer, puis ajouter titre, légende, échelle et source.'],
        ['Quels outils servent à comparer des données statistiques ?','Les tableaux et les graphiques : courbes, histogrammes et diagrammes circulaires, utilisés avec les cartes.']
      ])
    ]}
  ]},

  { t:'Première partie : la République démocratique du Congo', ch:[

    { t:'Chapitre I. La nature et les hommes', free:true, ls:[
      L('1','Présentation de la RDC',[
        ['Où se situe la RDC en Afrique ?','Au cœur de l’Afrique centrale, à cheval sur l’équateur : l’essentiel du pays se trouve dans l’hémisphère sud.'],
        ['Quelle est la superficie de la RDC ?','Environ 2 345 409 km² (ou environ 2 345 000 km²) : le plus vaste pays d’Afrique centrale, deuxième d’Afrique après l’Algérie et onzième du monde (environ 80 fois la Belgique).'],
        ['Quels sont les neuf pays voisins de la RDC ?','Congo-Brazzaville, Centrafrique, Soudan du Sud, Ouganda, Rwanda, Burundi, Tanzanie, Zambie et Angola.'],
        ['Pourquoi dit-on que la RDC est semi-enclavée ?','Elle n’a qu’un étroit accès à l’océan Atlantique, d’environ 40 km (Muanda–Banana), à l’embouchure du fleuve Congo.'],
        ['Quels sont les trois types d’atouts de la RDC ?','Des potentialités physiques (fleuve, forêt, sols, climat), humaines (population nombreuse et jeune) et économiques (mines, énergie, agriculture, tourisme).'],
        ['Quelles contraintes le programme cite-t-il ?','Le semi-enclavement, des frontières difficiles à surveiller et des moyens de communication inadaptés.'],
        ['Pourquoi les frontières sont-elles difficiles à surveiller ?','Elles sont très longues (plus de 10 000 km), traversent forêts, fleuves et lacs, et manquent de postes de contrôle équipés.'],
        ['Quelle est la capitale de la RDC ?','Kinshasa, sur la rive sud du fleuve Congo, face à Brazzaville, capitale du Congo voisin.']
      ]),
      L('2','Structure et relief',[
        ['Décrivez la structure générale du relief de la RDC.','Une vaste cuvette centrale (environ 340 à 700 m d’altitude) entourée de plateaux étagés, puis de hautes terres et de montagnes à l’Est et au Sud-Est.'],
        ['Qu’est-ce que la cuvette centrale ?','Une grande dépression d’environ 800 000 km² au centre-ouest du pays, drainée par le fleuve Congo et couverte surtout de forêt équatoriale et de marécages.'],
        ['Citez des plateaux importants.','Les plateaux des Batéké (Ouest), du Kwango (Bandundu) et ceux du Katanga (Biano, Manika, Kundelungu).'],
        ['Citez les principales montagnes.','Les monts Mitumba et le Rwenzori (Est), les monts Virunga (volcans), les Monts Bleus et le massif du Mayombe (Bas-Congo).'],
        ['Quel est le plus haut sommet lié à la RDC ?','Le pic Marguerite (environ 5 100 m ; 5 109 ou 5 119 m selon les sources), dans le massif du Rwenzori, à la frontière avec l’Ouganda.'],
        ['Qu’est-ce que le Rift (fossé d’effondrement) ?','Une longue cassure de l’écorce terrestre à l’Est. Il abrite les lacs Albert, Édouard, Kivu et Tanganyika, et explique les volcans et les séismes.'],
        ['Quels volcans sont actifs en RDC ?','Le Nyiragongo et le Nyamuragira, dans les monts Virunga (Nord-Kivu).'],
        ['Quel avantage économique pour chaque milieu ?','Cuvette : agriculture, forêt, pêche. Plateaux : élevage et mines (Katanga). Montagnes : climat frais, cultures, tourisme. Chutes et rapides : hydroélectricité.']
      ]),
      L('3-4','Climat, sols et végétation',[
        ['Quels sont les trois grands types de climat de la RDC ?','Équatorial (cuvette centrale), tropical humide, tropical sec (extrême Sud) et climat de montagne (hautes terres de l’Est).'],
        ['Caractéristiques du climat équatorial ?','Chaud et humide : températures constantes (plus de 20 °C, amplitude d’environ 2 °C), pluies d’au moins 1 500 mm par an et aucune saison sèche.'],
        ['Caractéristiques du climat tropical humide ?','Entre 4° et 10° de latitude : 1 200 à 1 500 mm de pluie par an, une longue saison des pluies (8 à 10 mois) et une courte saison sèche (2 à 4 mois).'],
        ['Quelles sont les principales formations végétales ?','Forêt dense équatoriale (cuvette), forêts claires et savanes (Nord, Sud, Ouest), végétation de montagne étagée (Est) et mangroves (côte).'],
        ['Quelle place occupe la forêt congolaise dans le monde ?','C’est la deuxième plus grande forêt tropicale du monde après l’Amazonie ; elle joue un rôle majeur pour le climat et la biodiversité.'],
        ['Quels types de sols trouve-t-on ?','Ferralitiques (rouges, acides, pauvres, dominants), alluviaux (fertiles, vallées), volcaniques (très fertiles, Nord-Kivu) et sableux (pauvres, plateaux Batéké).'],
        ['Pourquoi les sols ferralitiques sont-ils pauvres ?','Les fortes pluies lessivent les éléments nutritifs. Seule la mince couche d’humus de la forêt entretient leur fertilité, d’où la nécessité de jachères.'],
        ['Quels sont les atouts du climat, des sols et de la végétation ?','Grande variété de cultures, bois précieux (limba, wengé, sapelli), pâturages, biodiversité.'],
        ['Quelles sont les contraintes ?','Forêt difficile à pénétrer, sols lessivés et érosion, maladies tropicales (paludisme, maladie du sommeil), mouche tsé-tsé qui gêne l’élevage.']
      ]),
      L('5','Protection de la nature et tourisme',[
        ['Quel est le plus ancien parc national d’Afrique ?','Le parc national des Virunga (Nord-Kivu), créé en 1925.'],
        ['Citez des parcs nationaux et réserves de la RDC.','Virunga, Garamba, Salonga, Maïko, Upemba, Kundelungu, Kahuzi-Biega, parc marin des Mangroves et réserve de faune à okapis (Epulu).'],
        ['Quel est le plus grand parc de forêt tropicale d’Afrique ?','La Salonga, qui s’étend sur l’Équateur, le Bandundu et le Kasaï Occidental dans l’ancien découpage.'],
        ['Quels animaux emblématiques trouve-t-on ?','Gorille de montagne (Virunga), gorille de plaine (Kahuzi-Biega), bonobo (propre à la RDC), okapi (Epulu), éléphants (Garamba).'],
        ['Combien de sites naturels de la RDC sont au patrimoine mondial de l’UNESCO ?','Cinq : Virunga, Garamba, Kahuzi-Biega, Salonga et la réserve de faune à okapis.'],
        ['Pourquoi protéger la nature ?','Pour préserver la biodiversité, réguler le climat, garder des ressources pour l’avenir et profiter du tourisme.'],
        ['Quelle est l’importance du tourisme dans l’économie ?','Il rapporte des devises, crée des emplois, finance la conservation et fait connaître le pays.'],
        ['Quels équipements manquent au tourisme congolais ?','Hôtels, routes, aéroports, guides formés, centres d’accueil et promotion. L’insécurité et le braconnage freinent aussi le secteur.'],
        ['À quoi sert la carte touristique ?','À localiser les parcs, réserves, chutes, lacs et sites historiques, pour planifier leur aménagement.']
      ]),
      L('6','Hydrographie',[
        ['Quelle est la longueur du fleuve Congo et son rang ?','Environ 4 700 km. Deuxième fleuve d’Afrique après le Nil (6 671 km) et deuxième du monde par le débit après l’Amazone (débit moyen d’environ 50 000 m³/s).'],
        ['Où le fleuve Congo prend-il naissance et où se jette-t-il ?','Il naît au Katanga (mont Musofi) sous le nom de Lualaba et se jette dans l’océan Atlantique, à Muanda–Banana par un vaste estuaire.'],
        ['Pourquoi le débit du Congo est-il régulier ?','Il traverse l’équateur deux fois et reçoit des affluents des deux hémisphères, dont les saisons des pluies se compensent.'],
        ['Citez les principaux affluents du Congo.','Rive droite : Ubangi, Itimbiri, Aruwimi, Lindi. Rive gauche : Kasaï (avec Kwango, Kwilu, Sankuru, Lulua), Lomami, Lulonga.'],
        ['Quels obstacles à la navigation sur le fleuve ?','Les chutes Boyoma (Kisangani) et les rapides entre Kinshasa et Matadi (chutes Livingstone). Le bief Kinshasa–Kisangani, navigable, fait environ 1 700 km.'],
        ['Quel est l’élargissement du fleuve entre Kinshasa et Brazzaville ?','Le Pool Malebo (ancien Stanley Pool).'],
        ['Citez les principaux lacs de la RDC.','Tanganyika, Kivu, Albert, Édouard, Moero (Mweru), Upemba, Mai-Ndombe et Tumba.'],
        ['Que dit-on du lac Tanganyika ?','C’est le deuxième lac le plus profond du monde (environ 1 435 m) après le Baïkal, et le plus vaste lac de la RDC, partagé avec la Tanzanie, le Burundi et la Zambie.'],
        ['Quels sont les avantages économiques de l’hydrographie ?','Transport, pêche, hydroélectricité, eau potable, irrigation et tourisme.']
      ]),
      L('7','Population',[
        ['Combien d’habitants compte la RDC ?','Plus de 100 millions d’habitants selon les estimations récentes (les chiffres varient, le dernier recensement général date de 1984 avec environ 30 millions).'],
        ['Quelle est la composition de la population ?','Cinq grands groupes : Pygmées (Mbuti), Bantous (majorité), Soudanais, Nilotiques et Hamitiques, avec plus de 200 ethnies.'],
        ['Quelle est la structure par âge ?','Une population très jeune, avec une natalité élevée : la pyramide des âges a une base large et un sommet étroit.'],
        ['Comment évolue la population ?','Elle croît rapidement (environ 3 % par an) et double en une vingtaine d’années.'],
        ['Quelle est la densité moyenne ?','Environ 40 habitants au km², mais très inégalement répartis.'],
        ['Quelles régions sont denses ou peu peuplées ?','Denses (plus de 50 hab./km²) : hautes terres de l’Est, Kinshasa, Kongo-Central, Kasaï, Katanga minier. Peu peuplées : cuvette centrale forestière et zones enclavées.'],
        ['Quels facteurs expliquent la répartition ?','Attirent : climat favorable, sols fertiles, mines, villes, voies de communication, sécurité. Repoussent : forêt dense, marécages, enclavement, insécurité.'],
        ['Quelles sont les langues du pays ?','Langue officielle : le français (deuxième pays francophone du monde). Quatre langues nationales : kikongo, lingala, swahili et tshiluba.'],
        ['Quelles sont les religions principales ?','Majorité chrétienne (catholiques, protestants, kimbanguistes…), minorité musulmane et croyances traditionnelles.']
      ]),
      L('8','Développement urbain',[
        ['Qu’est-ce que le taux d’urbanisation ?','La part de la population totale qui vit dans les villes (de l’ordre de 40 à 50 % en RDC).'],
        ['Quelles sont les causes de l’urbanisation rapide ?','Exode rural, croissance naturelle, recherche d’emploi et de services, insécurité dans les campagnes.'],
        ['Quels types de villes selon la fonction ?','Administratives (Kinshasa), portuaires (Matadi, Boma), minières (Lubumbashi, Kolwezi, Mbuji-Mayi), commerciales, universitaires (Kinshasa, Lubumbashi, Kisangani), touristiques (Goma, Bukavu).'],
        ['Citez les principales villes.','Kinshasa (la plus grande), Lubumbashi, Mbuji-Mayi, Kananga, Kisangani, Bukavu, Goma, Tshikapa, Kolwezi, Likasi.'],
        ['Quels problèmes rencontrent les villes congolaises ?','Logement et habitat spontané, eau potable, électricité, assainissement et ordures, chômage et secteur informel, embouteillages, érosion, insécurité.'],
        ['Quelles solutions ?','Planification urbaine, cadastre, infrastructures, création d’emplois et développement des campagnes pour freiner l’exode rural.'],
        ['Qu’est-ce qu’une ville ?','Une agglomération importante qui concentre les habitants, les activités non agricoles (commerce, industrie, services) et les fonctions administratives.']
      ])
    ]},

    { t:'Chapitre II. Aspects économiques', free:false, ls:[
      L('9-10','Caractères généraux de l’économie',[
        ['Qu’est-ce que le dualisme de l’économie congolaise ?','La coexistence d’un secteur moderne tourné vers l’exportation (mines, industries) et d’un secteur traditionnel de subsistance (agriculture), faiblement reliés.'],
        ['Que veut dire économie peu dynamique (désarticulée) ?','Les secteurs ne s’alimentent pas entre eux : peu de transformation locale, infrastructures insuffisantes, faible circulation des richesses.'],
        ['Que veut dire économie extravertie ?','Tournée vers l’extérieur : elle exporte des matières premières brutes (cuivre, cobalt, diamants, bois) et importe des produits manufacturés et alimentaires.'],
        ['Que veut dire économie de type agricole ?','La majorité de la population active vit de l’agriculture, souvent de subsistance et à faible productivité.'],
        ['Pourquoi l’économie est-elle fragile ?','Elle dépend de quelques produits d’exportation dont les prix varient sur le marché mondial, et son dualisme limite la croissance.'],
        ['Qu’est-ce que le secteur informel ?','Les activités non déclarées (petit commerce, transport, artisanat) qui emploient la majorité des citadins.'],
        ['Quels remèdes aux faiblesses de l’économie ?','Diversifier l’économie, transformer sur place, relier les secteurs, développer les infrastructures et former la main-d’œuvre.']
      ]),
      L('11-12','Agriculture, pêche, élevage et forêt',[
        ['Quels sont les systèmes de production agricole ?','Agriculture itinérante sur brûlis (traditionnelle, vivrière), plantations agro-industrielles et agriculture paysanne autour des villes.'],
        ['Quelles sont les principales cultures vivrières ?','Manioc (aliment de base), maïs, riz, banane plantain, haricot, arachide, patate douce, igname.'],
        ['Quelles sont les cultures d’exportation ?','Café, cacao, huile de palme, caoutchouc (hévéa), thé et quinquina (Kivu), coton, canne à sucre.'],
        ['Où cultive-t-on quoi ?','Café arabica et thé (hautes terres de l’Est), robusta (Uélé, Ubangi, Maniema, Kasaï), cacao et hévéa (cuvette), palmier à huile (Équateur, Kwilu, Kongo-Central), canne à sucre (Kongo-Central, Sud-Kivu, Tshopo).'],
        ['Citez de grandes sociétés agro-industrielles.','Plantations et Huileries du Congo (PHC, ex-PLC) pour le palmier, et sucreries de Kwilu-Ngongo (Kongo-Central), Kiliba (Sud-Kivu) et Lotokila (Tshopo).'],
        ['Comment se pratiquent la pêche et l’élevage ?','Pêche artisanale sur le fleuve et les lacs (Tanganyika, Albert, etc.), pêche semi-industrielle (Kalemie, Vitshumbi) et pêche maritime (PEMARCO à Moanda). Élevage limité par la mouche tsé-tsé, plus développé à l’Est et au Katanga.'],
        ['Que produit l’exploitation forestière ?','Bois d’œuvre (limba, wengé, sapelli, acajou), bois de chauffe et makala. Problèmes : exploitation illégale et déforestation.'],
        ['Qu’est-ce que la crise agricole ?','La production ne suffit plus à nourrir le pays, qui importe maïs, riz, blé, poisson et volaille.'],
        ['Quelles sont les causes de la crise agricole ?','Routes de desserte dégradées, outils rudimentaires, semences peu performantes, manque de crédit, insécurité, exode rural, conservation et commercialisation difficiles.']
      ]),
      L('13','Le secteur minier',[
        ['Quelle est l’importance du secteur minier ?','Les mines fournissent l’essentiel des exportations et des devises de la RDC (de l’ordre de 70 % ou plus).'],
        ['Que signifie « scandale géologique » ?','Le contraste entre un sous-sol extrêmement riche, encore peu prospecté et sous-exploité, et un pays qui reste pauvre.'],
        ['Quels minerais trouve-t-on au Katanga ?','Cuivre, cobalt, zinc, étain, manganèse, uranium, charbon (Luena) et lithium (Manono).'],
        ['Où trouve-t-on les diamants ?','Kasaï Oriental (Mbuji-Mayi, MIBA), Kasaï Occidental (Tshikapa) et Province Orientale (Kisangani).'],
        ['Où trouve-t-on l’or ?','En Ituri (Kilo-Moto, OKIMO), dans le Kivu (Kamituga, Namoya…) et au Maniema.'],
        ['Où trouve-t-on l’étain et le coltan ?','Cassitérite (étain) et coltan dans le Kivu (Masisi, Walikale) et le Maniema, et aussi au Katanga.'],
        ['Où exploite-t-on le pétrole ?','Au littoral, à Muanda (Kongo-Central), en mer (off-shore) et à terre (on-shore), raffiné à Moanda par la SOCIR.'],
        ['Quelle place pour le cobalt ?','La RDC détient l’essentiel des réserves mondiales de cobalt et est le premier producteur mondial, associé au cuivre à Kolwezi.'],
        ['Citez les principales sociétés productrices.','Gécamines (cuivre, cobalt), MIBA (diamant), OKIMO (or), KCC et TFM (Kolwezi, Fungurume).'],
        ['Quelles sont les provinces minières ?','Katanga, Kasaï, Province Orientale, Kivu, Maniema (et Kongo-Central pour le pétrole).'],
        ['Quels problèmes pose le secteur minier ?','Exploitation artisanale dangereuse, fraude et contrebande, minerais liés aux conflits, peu de transformation sur place, manque d’énergie, pollution.']
      ]),
      L('14-15','Les sources d’énergie',[
        ['Quelles sont les principales sources d’énergie ?','Bois de chauffage et makala, houille, pétrole, gaz naturel, hydroélectricité et uranium (le solaire reste à développer).'],
        ['Quelle est la première source d’énergie des ménages ?','Le bois de chauffe et le charbon de bois (makala), ce qui accélère la déforestation.'],
        ['Où trouve-t-on la houille ?','Au Katanga, notamment à Luena et à Lukuga (Kalemie). La RDC en importe d’Afrique du Sud.'],
        ['Où exploite-t-on pétrole et gaz ?','Pétrole : littoral de Muanda. Gaz méthane : lac Kivu (potentiel important).'],
        ['Citez des barrages hydroélectriques.','Inga I et II et Zongo (Kongo-Central), Nzilo, Mwadingusha et Koni (Katanga), Ruzizi (Sud-Kivu), Tshopo (Kisangani), Lubilanji (Kasaï Oriental), Mobayi-Mbongo (Équateur).'],
        ['Quel est le plus grand site hydroélectrique ?','Inga, sur le bas Congo près de Matadi. Le potentiel du site est estimé à environ 40 000 MW (projet Grand Inga).'],
        ['Quel est le potentiel hydroélectrique de la RDC ?','Estimé autour de 100 000 MW (environ 18 % du potentiel mondial), l’un des plus élevés d’Afrique, mais exploité en très petite partie.'],
        ['Quels sont les avantages de l’hydroélectricité ?','Énergie renouvelable, peu polluante, peu chère à long terme, utile à l’industrie et aux mines.'],
        ['Quels sont les inconvénients des sources d’énergie ?','Bois : déforestation. Houille et pétrole : pollution de l’air, de l’eau et du sol. Barrages : coût élevé, populations déplacées, impact sur l’environnement.'],
        ['Quels problèmes pour l’électricité ?','Faible accès (environ un habitant sur cinq), réseau vétuste, délestages. La SNEL est l’entreprise nationale d’électricité.']
      ]),
      L('16-17','Les industries',[
        ['Qu’est-ce qu’un pays faiblement industrialisé ?','L’industrie pèse peu dans l’économie (environ 13 % de la main-d’œuvre) ; elle se limite surtout à l’extraction et à la première transformation.'],
        ['Quels types d’industries existent ?','Extractives (mines), alimentaires (brasseries, minoteries, huileries, sucreries), textiles, chimiques, matériaux de construction (ciment), métallurgiques, bois.'],
        ['Donnez des exemples d’industries.','Brasseries (Bralima, Bracongo, Brasimba), textile (Utexco, Sotexki, Utexafrica), sidérurgie (Sosider, Maluku), ciment (CILU à Lukala, CINAT à Kimpese), raffinerie SOCIR (Moanda).'],
        ['Qu’est-ce qu’une industrialisation incomplète et peu intégrée ?','Peu d’industries lourdes ; les usines dépendent d’intrants importés et ne sont pas reliées entre elles, d’où une faible valeur ajoutée.'],
        ['Quelles en sont les conséquences ?','Dépendance aux importations, chômage, peu de richesses créées et exportation de matières premières brutes.'],
        ['Comment les industries sont-elles réparties ?','Mal : concentrées à Kinshasa, au Kongo-Central (Matadi, Boma, Lukala) et au Katanga (Lubumbashi, Likasi, Kolwezi), très peu ailleurs.'],
        ['Pourquoi si peu d’industrialisation ?','Manque d’énergie, de capitaux et de routes, marché intérieur à faible pouvoir d’achat, instabilité, concurrence des importations.'],
        ['Quelles solutions pour industrialiser ?','Énergie fiable, zones économiques spéciales, transformation des minerais sur place, crédit, formation, climat favorable aux investissements.']
      ]),
      L('18','Les transports',[
        ['Quelle est l’importance des transports ?','Ils désenclavent les régions, permettent les échanges, relient les provinces, favorisent l’unité nationale et l’accès aux services.'],
        ['Quels sont les principaux réseaux de communication ?','Routier, ferroviaire, maritime, fluvial et lacustre, aérien.'],
        ['Citez des lignes de chemin de fer.','Matadi–Kinshasa (366 km), Lubumbashi–Ilebo (Voie nationale), réseaux de l’Est (Kindu–Kalemie), Kisangani–Ubundu et Nord (Vicicongo). Le réseau compte environ 5 110 km.'],
        ['Qu’est-ce que la Voie nationale ?','Un itinéraire multimodal reliant le Katanga à Kinshasa : rail Lubumbashi–Ilebo, puis fleuve Kasaï et Congo.'],
        ['Quels sont les ports maritimes ?','Matadi (principal), Boma, et le projet de port en eau profonde à Banana.'],
        ['Que sait-on du transport fluvial et lacustre ?','Le Congo et ses affluents offrent plus de 13 000 km de voies navigables entrecoupées de rapides. Ports : Kinshasa, Mbandaka, Kisangani, Ilebo. Lacs : Tanganyika, Kivu.'],
        ['Pourquoi le fleuve est-il important ?','C’est la voie naturelle de pénétration vers l’intérieur : navigable sur environ 1 700 km entre Kinshasa et Kisangani (bief moyen).'],
        ['Où sont les grands aéroports ?','Cinq aéroports internationaux : N’djili (Kinshasa), Luano (Lubumbashi), Goma, Bangboka (Kisangani) et Gbadolite (plus d’une quarantaine d’aéroports au total).'],
        ['Qu’est-ce que le désenclavement ?','Rendre accessibles les régions isolées et le pays lui-même : réhabiliter routes, rail et ports et ouvrir des corridors vers Dar es Salaam, Durban, Beira, Lobito.'],
        ['Quels sont les problèmes des transports ?','Routes en terre mal entretenues (sur 170 000 km, très peu sont asphaltés), rail et bateaux vétustes, aéroports peu équipés, coûts élevés, insécurité.']
      ])
    ]},

    { t:'Chapitre III. Les services', free:false, ls:[
      L('19','Le commerce',[
        ['Comment fonctionne le commerce intérieur ?','Échanges intérieurs : intra-provinciaux (villes et campagnes) et interprovinciaux (approvisionnement de Kinshasa et des grands centres depuis les provinces).'],
        ['Que la RDC exporte-t-elle ?','Cuivre, cobalt, diamants, or, pétrole, bois, café (essentiellement des matières premières brutes).'],
        ['Que la RDC importe-t-elle ?','Produits alimentaires (maïs, poisson, etc.), biens de consommation, machines, véhicules, carburants, médicaments.'],
        ['Qu’est-ce que la balance commerciale ?','La différence entre la valeur des exportations et celle des importations : excédentaire si les exportations dominent, déficitaire sinon.'],
        ['Quels sont les principaux partenaires économiques ?','Belgique, Union européenne, Chine, Japon, Canada et Afrique du Sud (l’ordre varie selon les années).'],
        ['Quelles sont les caractéristiques du commerce national ?','Dominé par l’informel, exportations de produits bruts, importations de produits finis, forte dépendance aux cours mondiaux.']
      ]),
      L('20','L’enseignement',[
        ['Quels sont les secteurs de l’enseignement ?','Quatre niveaux : maternel, primaire (certificat de fin d’études primaires), secondaire (général, normal, technique) et supérieur et universitaire.'],
        ['Quelle est la finalité de l’enseignement ?','Former le citoyen congolais responsable, utile à lui-même et à la société, capable de promouvoir le développement du pays et la culture nationale.'],
        ['Quels établissements forment l’enseignement supérieur et universitaire ?','Universités, instituts supérieurs pédagogiques (ISP), techniques médicaux (ISTM), de commerce (ISC) et autres instituts.'],
        ['Quelles furent les premières universités du pays ?','Lovanium (Kinshasa, 1954), Université officielle du Congo (Lubumbashi, 1955) et Université libre du Congo (Kisangani, 1963). L’examen d’État est instauré en 1967.'],
        ['Où se localisent les établissements supérieurs ?','Dans les grandes villes, surtout Kinshasa, Lubumbashi et Kisangani, puis dans les chefs-lieux de province.'],
        ['Quels sont les problèmes majeurs de l’enseignement ?','Manque d’écoles et de manuels, classes surchargées, salaires faibles des enseignants, frais de scolarité, enfants hors de l’école, chômage des diplômés.'],
        ['Que s’est-il passé en 2019 pour le primaire ?','Depuis la rentrée 2019, l’enseignement primaire public est déclaré gratuit.'],
        ['À quoi sert la carte scolaire ?','À montrer la répartition des écoles et des universités et à planifier les besoins.']
      ]),
      L('21','La santé',[
        ['Comment est organisée la santé ?','En pyramide à trois niveaux : central (ministère), intermédiaire (province) et périphérique (zone de santé).'],
        ['Qu’est-ce qu’une zone de santé ?','L’unité de base du système : elle regroupe plusieurs aires de santé, avec un hôpital général de référence et des centres de santé (plus de 500 au total).'],
        ['Que sont les soins de santé primaires ?','Prévention, vaccination, soins de base, hygiène et nutrition, au plus près de la population.'],
        ['Quelles sont les maladies majeures ?','Paludisme, tuberculose, VIH/sida, rougeole, choléra, fièvre typhoïde, mpox et Ebola.'],
        ['Que sait-on d’Ebola ?','Découvert en 1976 près de la rivière Ebola (Yambuku, Équateur). La RDC a connu plusieurs épidémies.'],
        ['Quels problèmes de santé rencontre le pays ?','Inégale répartition des médecins, manque d’équipements et de médicaments, coût des soins, mortalité maternelle et infantile élevée, malnutrition.'],
        ['Qu’est-ce qu’une carte nosologique ?','Une carte de la répartition des maladies sur le territoire.'],
        ['Quelles solutions pour la santé ?','Former le personnel, approvisionner en médicaments, vacciner, assainir, fournir l’eau potable et financer une couverture santé pour tous.']
      ])
    ]},

    { t:'Chapitre IV. Étude régionale', free:false, ls:[
      L('22','Notion de région géographique',[
        ['Qu’est-ce qu’une région géographique ?','Un espace présentant une unité de caractères physiques, humains ou économiques, qui le distingue des espaces voisins.'],
        ['Quels sont les critères de régionalisation ?','Physiques (relief, climat, végétation), humains (peuplement, langues, cultures), économiques (activités, communications) et administratifs.'],
        ['De quoi se compose la région Sud-Ouest ?','Kinshasa, Kongo Central, Kwango, Kwilu et Mai-Ndombe (anciennement Kinshasa, Bas-Congo et Bandundu).'],
        ['De quoi se compose la région centrale ?','Kasaï, Kasaï-Central, Kasaï-Oriental, Lomami et Sankuru (issues des anciens Kasaï Occidental et Oriental).'],
        ['De quoi se compose la région de l’Est ?','Nord-Kivu, Sud-Kivu et Maniema.'],
        ['De quoi se compose la région du Nord ?','Équateur, Mongala, Nord-Ubangi, Sud-Ubangi, Tshuapa, Bas-Uélé, Haut-Uélé, Ituri et Tshopo (anciens Équateur et Province Orientale).'],
        ['Quelle est la région du Sud-Est ?','Le Katanga, divisé en Haut-Katanga, Haut-Lomami, Lualaba et Tanganyika.'],
        ['Quels sont les chefs-lieux des 11 anciennes provinces ?','Kinshasa, Bandundu, Matadi, Kananga, Mbuji-Mayi, Goma, Bukavu, Kindu, Mbandaka, Kisangani, Lubumbashi.'],
        ['Combien de provinces compte la RDC aujourd’hui ?','26 provinces (Kinshasa et 25 provinces) depuis le découpage de 2015. Le programme de référence utilise les anciennes entités.'],
        ['En quelles provinces le Katanga, le Bandundu et le Bas-Congo ont-ils été divisés ?','Katanga : Haut-Katanga, Lualaba, Haut-Lomami, Tanganyika. Bandundu : Kwango, Kwilu, Mai-Ndombe. Bas-Congo : Kongo Central.'],
        ['En quelles provinces l’Équateur et la Province Orientale ont-ils été divisés ?','Équateur : Équateur, Mongala, Nord-Ubangi, Sud-Ubangi, Tshuapa. Province Orientale : Tshopo, Bas-Uélé, Haut-Uélé, Ituri.'],
        ['En quelles provinces les deux Kasaï ont-ils été divisés ? Et le Kivu ?','Kasaï Occidental : Kasaï, Kasaï-Central. Kasaï Oriental : Kasaï-Oriental, Lomami, Sankuru. Nord-Kivu, Sud-Kivu et Maniema restent inchangés.']
      ]),
      L('23','Le Bandundu',[
        ['Où se situe le Bandundu et quel est son chef-lieu ?','À l’est de Kinshasa. Le chef-lieu était la ville de Bandundu (aujourd’hui chef-lieu du Kwilu) ; l’ancienne province est divisée en Kwango, Kwilu et Mai-Ndombe.'],
        ['Quelle est la spécificité du Bandundu ?','Province essentiellement agricole : manioc, maïs, arachide, palmier à huile, haricot.'],
        ['Quelles autres activités économiques ?','Pêche (Kasaï, Kwango, Kwilu, lac Mai-Ndombe), élevage, exploitation artisanale, travaux d’ivoire, exploitation forestière.'],
        ['Que dire de l’industrie ?','La production industrielle est faible.'],
        ['Quels sont les sites touristiques ?','Les chutes Ntemo et le parc de la Salonga.'],
        ['Quelle est la place de la province dans le pays ?','Grenier de Kinshasa : vivres (manioc, maïs…), bois et charbon de bois y arrivent par route et par rivière.'],
        ['Quels sont ses problèmes ?','Routes et ponts dégradés, faible industrialisation, électricité insuffisante, déboisement.']
      ]),
      L('24','Le Bas-Congo',[
        ['Quel est le chef-lieu du Bas-Congo et son atout géographique ?','Matadi, port sur l’estuaire du fleuve ; le Kongo Central est la seule province ayant un accès direct à l’océan Atlantique.'],
        ['Quelle est la spécificité de la province ?','Port maritime (Matadi, Boma, Banana) et nombreuses chutes d’eau.'],
        ['Quelles sont les productions agricoles ?','Banane, manioc, café, canne à sucre, huile de palme, cultures maraîchères.'],
        ['Quelles productions industrielles et énergétiques ?','Barrages d’Inga et de Zongo, cimenterie de Lukala (CILU) et de Kimpese (CINAT), raffinerie SOCIR et pétrole de Muanda, sucrerie de Kwilu-Ngongo.'],
        ['Quels gisements ne sont pas exploités ?','Or, bauxite, mercure.'],
        ['Quels sont les sites touristiques ?','Jardin botanique de Kisantu, grottes de Mbanza-Ngungu, parc marin des Mangroves, plages de Moanda.'],
        ['Quelle est sa place dans le pays ?','Porte d’entrée et de sortie des marchandises, région stratégique reliée à Kinshasa par la route et le chemin de fer.'],
        ['Quelles perspectives d’avenir ?','Port en eau profonde à Banana, extension de l’hydroélectricité (Inga) et exploitation des gisements.']
      ]),
      L('25','La ville de Kinshasa',[
        ['Quel est le statut de Kinshasa ?','Capitale et ville-province, au bord du Pool Malebo, face à Brazzaville. Divisée en quatre districts et 24 communes.'],
        ['Quelle est sa spécificité ?','Premier pôle économique du pays (concentration des industries manufacturières) et grand centre universitaire.'],
        ['Quelles sont ses activités économiques ?','Production industrielle (brasserie, textile, alimentaire), premier centre commercial, agriculture périurbaine et cultures maraîchères.'],
        ['Quels sont les sites touristiques ?','Cité de la N’sele, jardin botanique et zoologique, rapides de Kinsuka, chutes de la Lukunga, Joli Site, sports nautiques.'],
        ['Comment se caractérise la croissance de la ville ?','Une croissance démographique et spatiale très rapide (plus de 10 millions d’habitants), due à la natalité et à l’exode rural.'],
        ['Quelles en sont les conséquences ?','Habitat spontané, érosion et ravinement, manque d’eau et d’électricité, embouteillages, chômage, insalubrité, insécurité.'],
        ['Quelles perspectives ?','Planification urbaine, assainissement, transports collectifs, décentralisation économique pour désengorger la capitale.'],
        ['Quel fait remarquable lie Kinshasa à Brazzaville ?','Ce sont deux capitales voisines séparées seulement par le fleuve, parmi les plus proches du monde.']
      ]),
      L('27','Le Kasaï Occidental',[
        ['Quel est le chef-lieu du Kasaï Occidental ?','Kananga (aujourd’hui chef-lieu du Kasaï-Central ; Tshikapa est le chef-lieu du Kasaï).'],
        ['Quelle est sa spécificité ?','L’exploitation artisanale du diamant (Tshikapa).'],
        ['Quel est son artisanat ?','Le tissu « velours » (kuba) et la sculpture luba et tshokwe.'],
        ['Quelles autres activités économiques ?','Produits agricoles (manioc, maïs, palmier à huile, arachide) et quelques productions industrielles.'],
        ['Quels sont les sites touristiques ?','Lac Mukamba, chutes Katende, parc de la Salonga.'],
        ['Quels sont sa place et ses problèmes ?','Province diamantifère mais enclavée : routes dégradées, fraude diamantaire, faible industrialisation.']
      ]),
      L('28','Le Kasaï Oriental',[
        ['Quel est le chef-lieu du Kasaï Oriental ?','Mbuji-Mayi, l’une des plus grandes villes du pays.'],
        ['Quelle est sa spécificité ?','C’est une province diamantifère.'],
        ['Qu’est-ce que la MIBA ?','La Société minière de Bakwanga, principale société diamantifère du pays, installée à Mbuji-Mayi.'],
        ['Quelles autres activités économiques ?','Produits agricoles, productions industrielles et hydroélectricité (Lubilanji).'],
        ['Quels sont les sites touristiques ?','Le lac Mukamba et la MIBA.'],
        ['Quels sont ses problèmes ?','Enclavement, érosion (ravins), croissance de la ville, problème foncier.']
      ]),
      L('29','Le Nord-Kivu',[
        ['Quel est le chef-lieu du Nord-Kivu ?','Goma, sur le lac Kivu, au pied du volcan Nyiragongo.'],
        ['Quelle est sa spécificité ?','Région touristique par excellence : parcs des Virunga et de la Maïko, lacs, volcans, eaux chaudes.'],
        ['Quelles autres activités économiques ?','Agriculture (pommes de terre, haricots, café, thé), élevage, productions industrielles, mines (coltan, cassitérite, or).'],
        ['Quelle est sa place dans le pays ?','Fournisseur de viande, de pommes de terre et de haricots.'],
        ['Quels sont ses problèmes ?','Transport difficile, problèmes ethniques et de frontières, absence de districts autonomes, insécurité.'],
        ['Quel risque volcanique menace Goma ?','Le Nyiragongo a détruit une partie de Goma en 2002 et a fait de nouveau éruption en 2021.'],
        ['Quelles villes sont commerciales ?','Goma, Butembo et Beni (les trois villes de la province).']
      ]),
      L('30','Le Sud-Kivu',[
        ['Quel est le chef-lieu du Sud-Kivu ?','Bukavu, sur le lac Kivu.'],
        ['Quelle est sa spécificité ?','Le tourisme : lac Kivu, île d’Idjwi, parc de Kahuzi-Biega (mont Kahuzi et mont Biega).'],
        ['Quelles sont ses autres activités économiques ?','Agriculture (café, thé, quinquina, banane), élevage, mines (or, cassitérite), industrie, hydroélectricité (Ruzizi I et II).'],
        ['Quelle est sa place dans le pays ?','Comme le Nord-Kivu, fournisseur de viande, de pommes de terre et de haricots.'],
        ['Quels sont ses problèmes ?','Problèmes ethniques et de frontière, absence de districts autonomes, enclavement routier, insécurité.'],
        ['Quel est le port du Sud-Kivu sur le lac Tanganyika ?','Uvira.']
      ]),
      L('31','Le Maniema',[
        ['Quel est le chef-lieu du Maniema ?','Kindu, sur le fleuve Lualaba.'],
        ['Quelle est sa spécificité ?','C’est une province essentiellement agricole et enclavée (Maniema signifie « forêt galerie »).'],
        ['Quelles sont ses cultures principales ?','Riz, maïs, manioc, palmier à huile, café.'],
        ['Quelles autres activités économiques ?','Mines (or, cassitérite, coltan), industrie, hydroélectricité, et liaison ferroviaire Kindu–Kabalo–Lubumbashi.'],
        ['Quel site touristique le programme cite-t-il ?','Le parc de la Maïko.'],
        ['Quels sont ses problèmes ?','Enclavement, absence de districts autonomes, faibles infrastructures.']
      ]),
      L('32','L’Équateur',[
        ['Quel est le chef-lieu de l’Équateur ?','Mbandaka, sur le fleuve Congo, ville traversée par la ligne de l’équateur.'],
        ['Quelle est sa spécificité ?','Province essentiellement agricole (café, cacao, hévéa, palmier, banane plantain, manioc, riz), avec de nombreuses voies navigables et de la pêche.'],
        ['Quelles richesses du sous-sol ne sont pas exploitées ?','Or, diamant et hydrocarbures.'],
        ['Quels sont les sites touristiques ?','Parcs et réserves (Salonga), chutes de Zongo, lacs (Tumba) et jardin botanique d’Eala.'],
        ['Quelle est sa place dans le pays ?','Elle approvisionne Kinshasa (poisson, huile, banane plantain, bois) et abrite une réserve forestière classée patrimoine mondial.'],
        ['Quels sont ses problèmes ?','Enclavement intérieur, routes absentes, dépendance du transport fluvial.']
      ]),
      L('33','La Province Orientale',[
        ['Quel est le chef-lieu de la Province Orientale ?','Kisangani, sur le fleuve Congo (3e pôle économique selon le programme) ; chef-lieu de la Tshopo depuis le découpage.'],
        ['Quelle est sa particularité ?','Dans l’ancien découpage, c’était la plus vaste province du pays. Aujourd’hui, la Tshopo est la plus vaste des 26 provinces (environ 199 600 km²).'],
        ['Quelles autres activités économiques ?','Mines (or de Kilo-Moto, diamants), industrie, hydroélectricité (Tshopo).'],
        ['Quels sont les sites touristiques ?','Parcs de la Garamba et de la Maïko, réserve d’Epulu (okapis), station de dressage d’éléphants de Gangala na Bodio, rapides des Wagenia, lacs.'],
        ['Qui sont les Wagenia ?','Des pêcheurs de Kisangani qui capturent le poisson avec des nasses installées sur les rapides du fleuve.'],
        ['Quels sont sa place et ses problèmes ?','Approvisionnement de Kinshasa, « province martyre » (guerres), exploitation forestière, problèmes de frontières.']
      ]),
      L('34','Le Katanga',[
        ['Quel est le chef-lieu du Katanga ?','Lubumbashi, deuxième ville du pays et deuxième pôle économique ; chef-lieu du Haut-Katanga.'],
        ['Quelle est la spécificité du Katanga ?','Province minière et industrielle : cuivre, cobalt, zinc, étain, uranium, manganèse, charbon.'],
        ['Quelles villes minières ?','Lubumbashi, Likasi, Kolwezi (centre de la région cuprifère avec 80 % des réserves), Kipushi.'],
        ['Quelle hydroélectricité ?','Barrages de Mwadingusha et Koni (sur la Lufira), Nzilo, Nseke et Mukula (sur le Lualaba).'],
        ['Quels produits agricoles ?','Maïs, manioc, haricots ; élevage sur les hauts plateaux.'],
        ['Quels sont les sites touristiques ?','Parcs de l’Upemba et du Kundelungu, lacs Moero et Tanganyika, chutes de la Lofoi.'],
        ['Quelle est sa place dans le pays ?','Poumon économique du pays, mais dépendant des mines, avec pollution, éloignement de Kinshasa et transport coûteux.'],
        ['Par où sortent souvent les minerais ?','Par les lignes de la KDL et les ports de Durban, Dar es Salaam, Beira et Lobito.'],
        ['En combien de provinces le Katanga a-t-il été divisé ?','En quatre : Haut-Katanga, Lualaba, Haut-Lomami et Tanganyika.']
      ])
    ]},

    { t:'Chapitre V. Les perspectives d’avenir', free:false, ls:[
      L('35','Agriculture : perspectives',[
        ['Quelle est la situation actuelle de l’agriculture ?','Potentiel énorme (environ 80 millions d’hectares de terres arables, dont une faible part est cultivée), mais production insuffisante et dépendance aux importations alimentaires.'],
        ['Quels efforts de développement ?','Relance des plantations, parcs agro-industriels (Bukanga Lonzo), semences améliorées, appui aux paysans et désenclavement des zones de production.'],
        ['Comment critiquer l’organisation actuelle ?','Agriculture de subsistance, outils rudimentaires, faible encadrement, accès difficile aux marchés et au crédit, insécurité foncière.'],
        ['Quelles solutions proposer ?','Routes de desserte, mécanisation, intrants, crédit agricole, formation, conservation et transformation sur place, sécurité.']
      ]),
      L('36','Industrie : perspectives',[
        ['Quelle est la situation actuelle de l’industrie ?','Faible, concentrée, peu intégrée (environ 13 % de la main-d’œuvre) ; forte importation de produits finis.'],
        ['Quels efforts de développement ?','Réhabilitation d’entreprises, zones économiques spéciales (Maluku, N’sele), code des investissements, projets énergétiques (Inga).'],
        ['Pourquoi transformer les ressources sur place ?','Cela crée de la valeur ajoutée et des emplois, et réduit la dépendance aux importations.'],
        ['Que doit-on montrer sur l’exploitation des ressources ?','Par quoi (quels moyens), pour qui et comment elles sont exploitées : souvent par des sociétés étrangères et pour l’exportation. La population doit en tirer un bénéfice.']
      ]),
      L('37','Infrastructures de base',[
        ['Quelle est la situation des transports et quels efforts ?','Réseau vétuste et insuffisant. Programmes de réhabilitation des routes, du rail et des ports, et ouverture de corridors.'],
        ['Quelle est la situation de la santé et quels efforts ?','Manque de structures et de personnel. Extension des zones de santé, vaccination, lutte contre les épidémies.'],
        ['Quelle est la situation de l’enseignement et quels efforts ?','Écoles insuffisantes et mal équipées. Gratuité du primaire en 2019, construction d’écoles, formation des enseignants.'],
        ['Pourquoi les infrastructures conditionnent-elles le développement ?','Sans routes, énergie, écoles et hôpitaux, ni l’agriculture, ni l’industrie, ni le capital humain ne peuvent progresser.']
      ]),
      L('38','Tourisme : perspectives',[
        ['Quelle est la situation actuelle du tourisme ?','Potentiel immense (parcs, volcans, fleuve, lacs, culture) mais très peu exploité : peu de visiteurs, insécurité et équipements insuffisants.'],
        ['Quels efforts de développement ?','Réhabilitation des parcs et des infrastructures, protection par l’ICCN, partenariats (par exemple à Virunga), promotion du pays.'],
        ['Que faut-il pour développer le tourisme ?','Sécurité, routes et aéroports, hôtels, formation de guides, promotion à l’étranger, protection de la faune.']
      ]),
      L('39','La RDC et ses partenaires économiques',[
        ['Quels sont les principaux partenaires économiques de la RDC ?','Belgique, Union européenne, Chine, Japon, Canada et Afrique du Sud (l’ordre varie selon les années).'],
        ['De quelles organisations africaines la RDC est-elle membre ?','Union africaine, SADC, COMESA, CEEAC, CEPGL et, depuis 2022, la Communauté d’Afrique de l’Est (EAC).'],
        ['Quels efforts d’intégration ?','Adhésion aux groupements régionaux, corridors de transport, projets énergétiques communs (Ruzizi, Inga) et accords commerciaux.'],
        ['Pourquoi diversifier les partenaires ?','Pour réduire la dépendance à un seul client, obtenir de meilleurs prix et attirer des investissements variés.']
      ])
    ]}
  ]},

  { t:'Deuxième partie : l’Afrique contemporaine', ch:[

    { t:'Chapitre I. Généralités', free:true, ls:[
      L('40','Présentation de l’Afrique',[
        ['Où se situe l’Afrique ?','Entre la Méditerranée au nord, l’Atlantique à l’ouest, l’océan Indien et la mer Rouge à l’est. Elle est traversée par l’équateur, le tropique du Cancer et le tropique du Capricorne.'],
        ['Quelle est la superficie de l’Afrique ?','Environ 30,3 millions de km² : troisième continent après l’Asie et l’Amérique (deuxième après l’Asie si l’on sépare les deux Amériques). Longueur d’environ 8 000 km (cap Bon au cap des Aiguilles).'],
        ['Combien d’États compte l’Afrique ?','54 États reconnus par l’ONU. L’Union africaine compte 55 membres.'],
        ['Quels sont les grands records du continent ?','Plus haut sommet : Kilimandjaro (5 895 m, Tanzanie). Plus long fleuve : le Nil. Plus grand lac : Victoria. Plus grand désert chaud : le Sahara.'],
        ['Quels sont les grands ensembles régionaux ?','Afrique du Nord, de l’Ouest, centrale, de l’Est et australe.'],
        ['Quels sont les atouts de l’Afrique ?','Vastes terres arables, énormes ressources minières et énergétiques, population jeune, potentiel solaire et hydroélectrique, biodiversité et tourisme.'],
        ['Quelles sont les contraintes ?','Calamités naturelles (sécheresse, désertification, inondations), maladies, conflits armés, moyens de communication insuffisants, héritage de la traite et de la colonisation.'],
        ['Quelle différence entre épidémie, endémie et pandémie ?','Épidémie : poussée locale et temporaire (choléra). Endémie : maladie présente en permanence dans une région (paludisme). Pandémie : épidémie étendue à plusieurs continents (VIH/sida, COVID-19).'],
        ['À quoi sert l’utilisation de la carte ?','À lire et dessiner les grands ensembles, États, fleuves et reliefs, pour localiser les faits géographiques.']
      ]),
      L('41','L’Afrique dans le monde',[
        ['Quel est le poids démographique de l’Afrique ?','Plus de 1,3 à 1,4 milliard d’habitants (environ 18 % de l’humanité), le continent le plus jeune avec une densité moyenne d’environ 43 hab./km².'],
        ['Quel est son poids économique ?','Environ 3 % de la richesse mondiale (PIB), un poids faible comparé à sa population.'],
        ['Quel est le revenu par habitant ?','Le plus bas des continents en moyenne, avec de fortes inégalités entre pays riches (Seychelles) et très pauvres (Burundi).'],
        ['Quelle est la place de la technologie ?','Faible part de la recherche, des brevets et de l’industrie de haute technologie : l’Afrique est surtout importatrice de technologies.'],
        ['Quelles sont ses principales ressources ?','Cacao (Côte d’Ivoire 1re, environ 39 %, puis Ghana), café, or, diamants, cobalt (RDC), platine (Afrique du Sud), pétrole (Nigeria, Angola, Algérie), phosphates (Maroc).'],
        ['Quelle est la nature de son commerce international ?','Elle exporte surtout des matières premières et importe des produits manufacturés ; sa part dans le commerce mondial n’est que de quelques pour cent.'],
        ['Comment se compare-t-elle aux autres continents ?','Moins industrialisée que l’Asie, l’Europe et l’Amérique du Nord, avec un faible niveau d’intégration et d’infrastructures.']
      ])
    ]},

    { t:'Chapitre II. Quelques États émergents', free:false, ls:[
      L('42','La République sud-africaine',[
        ['Pourquoi la RSA est-elle un État émergent ?','Économie la plus industrialisée du continent, membre du G20 et des BRICS.'],
        ['Quelles sont les capitales de la RSA ?','Trois capitales : Pretoria (exécutif), Le Cap (législatif / Parlement) et Bloemfontein (judiciaire). La plus grande ville et capitale économique est Johannesburg.'],
        ['Quel est son poids : peuplement et productions ?','Environ 60 millions d’habitants ; or, platine, chrome, manganèse, diamants, charbon (environ 90 % des réserves africaines) ; maïs, fruits, vin ; industrie automobile, chimique et sidérurgique.'],
        ['Quels facteurs de puissance liés à l’industrie et au revenu ?','Industrie diversifiée, mines, services financiers et revenu par habitant parmi les plus élevés d’Afrique.'],
        ['Quel rôle joue sa position géographique ?','Pointe sud de l’Afrique, sur la route du Cap entre Atlantique et océan Indien (courants de Mozambique et Benguela favorables à la pêche), avec de grands ports (Durban, Le Cap, Richards Bay).'],
        ['Quels facteurs de puissance liés aux infrastructures ?','Réseaux routier (188 000 km) et ferroviaire (21 600 km) les plus denses d’Afrique, réseau électrique, universités réputées et système de santé développé.'],
        ['Quelles possibilités de coopération avec la RDC ?','Au sein de la SADC et de l’UA : commerce, investissements miniers, projet Inga (achat d’électricité), échanges de formation.'],
        ['Quelles contraintes du milieu physique ?','Relief (Drakensberg, plateaux) et aridité (Karoo, Kalahari, Namib) : l’eau est rare.'],
        ['Comment l’homme tire-t-il profit de ces contraintes ?','Barrages et transferts d’eau (Orange, Lesotho), irrigation, élevage de moutons dans le Karoo, mines profondes, tourisme, énergie solaire et éolienne.'],
        ['Qu’est-ce que l’apartheid ?','Un régime de ségrégation raciale (instauré en 1948, aboli officiellement en 1991). Nelson Mandela devient président en 1994 après les premières élections multiraciales (Prix Nobel de la paix 1993).']
      ]),
      L('43','Le Nigeria',[
        ['Où se situe le Nigeria et quelle est sa capitale ?','En Afrique de l’Ouest, au fond du golfe de Guinée (superficie d’environ 924 000 km², monnaie : le naira). Capitale : Abuja ; capitale économique et grand port : Lagos.'],
        ['Quel est le poids démographique et économique du Nigeria ?','Pays le plus peuplé d’Afrique (plus de 200 millions d’habitants, 36 États) et l’une des premières économies du continent.'],
        ['Quelles sont ses productions ?','Pétrole et gaz (delta du Niger, membre de l’OPEP), cacao, arachide, huile de palme, coton, manioc, étain (plateau de Jos), charbon (Enugu), barrage de Kainji.'],
        ['Quels facteurs de puissance possède-t-il ?','Ressources énergétiques, forêts, fleuves Niger et Bénoué, grands ports (Lagos, Port Harcourt), climats variés, position sur le golfe de Guinée et grand marché intérieur.'],
        ['Quelles sont ses contraintes ?','Conflits religieux et ethniques (Nord musulman, Sud chrétien), terrorisme au Nord-Est, corruption, dépendance au pétrole, inégalités.'],
        ['Quels sont les peuples principaux ?','Haoussa-Peuls (Nord), Yoruba (Sud-Ouest), Igbo (Sud-Est).'],
        ['Quelles possibilités de coopération avec la RDC ?','Commerce, expérience dans la gestion du pétrole et du gaz, investissements et coopération diplomatique au sein de l’Union africaine et de la CEDEAO.']
      ]),
      L('44','L’Égypte',[
        ['Où se situe l’Égypte et quelle est sa capitale ?','Au nord-est de l’Afrique, entre Méditerranée et mer Rouge (environ 1 002 000 km², plus de 100 millions d’habitants). Capitale : Le Caire.'],
        ['Pourquoi dit-on que l’Égypte est un « don du Nil » ?','La vie et l’agriculture se concentrent dans la vallée et le delta du Nil, au milieu d’un immense désert.'],
        ['Quel est le poids de l’Égypte ?','Coton, riz, blé, canne à sucre ; pétrole et gaz ; tourisme ; industrie textile et sidérurgie.'],
        ['Quel rôle joue l’hydrographie ?','Le Nil fournit l’eau, l’irrigation, la navigation et l’électricité (haut barrage d’Assouan, lac Nasser). La RDC et l’Égypte partagent le bassin du Nil (via la Semliki).'],
        ['Quel est l’intérêt de sa position stratégique ?','Le canal de Suez (ouvert en 1869 à travers l’isthme de Suez) relie la Méditerranée et la mer Rouge : source majeure de revenus et lien entre l’Europe et l’Asie.'],
        ['Quel rôle jouent l’histoire et le tourisme ?','Pyramides de Gizeh, Louxor, Karnak, vallée des Rois : héritage de la civilisation pharaonique, qui attire des millions de visiteurs.'],
        ['Quelles sont les contraintes de l’Égypte ?','Le désert (la grande majorité du territoire) et l’aridité.'],
        ['Comment l’Égypte a-t-elle surmonté ses contraintes ?','Irrigation par canaux et barrages, mise en valeur de terres désertiques, dessalement, revenus du canal de Suez et du tourisme.'],
        ['Quelles possibilités de coopération avec la RDC ?','Au sein de l’UA et du COMESA : commerce, expertise en barrages et irrigation, investissements.']
      ])
    ]},

    { t:'Chapitre III. Les perspectives de développement', free:false, ls:[
      L('45','Ressources agricoles',[
        ['Quel est le niveau de mise en valeur agricole de l’Afrique ?','Faible : agriculture peu mécanisée, très peu de terres irriguées, rendements bas. L’Afrique importe du blé et du riz alors qu’elle possède une grande part des terres arables non cultivées du monde.'],
        ['Quels efforts de développement ?','PDDAA du NEPAD (2003), engagement de Maputo de consacrer 10 % des budgets à l’agriculture, irrigation, semences améliorées, coopératives, agro-industries.'],
        ['Qu’est-ce que le NEPAD ?','Le Nouveau partenariat pour le développement de l’Afrique, lancé en 2001 par l’Union africaine.'],
        ['Comment critiquer l’organisation actuelle ?','Agriculture de subsistance, dépendance de la pluie, faible financement, exportation de produits bruts, accès difficile à la terre et aux marchés.'],
        ['Quels remèdes proposer ?','Irrigation, mécanisation, crédit, formation, routes rurales, stockage et transformation, intégration des marchés africains.']
      ]),
      L('46','Ressources minières et énergétiques',[
        ['Quel est le niveau de mise en valeur minière ?','Réserves considérables (cobalt, platine, manganèse, chrome, diamants, bauxite, phosphates) mais exportées surtout à l’état brut, avec peu de transformation.'],
        ['Quelle est la situation énergétique ?','Pétrole et gaz (Nigeria, Angola, Algérie, Libye), hydroélectricité (Inga, Assouan), solaire, géothermie (Kenya). Environ 600 millions d’Africains n’ont pas l’électricité.'],
        ['Quels efforts de développement ?','Vision minière africaine (2009), transformation locale, pools énergétiques régionaux (SAPP, WAPP), projets solaires et hydroélectriques.'],
        ['Quelle critique faire de l’organisation actuelle ?','Exploitation dominée par des firmes étrangères, faibles retombées locales, pollution, conflits liés aux ressources.'],
        ['Quels remèdes proposer ?','Industrialiser sur place, renégocier les contrats, investir dans l’énergie renouvelable et interconnecter les réseaux.']
      ]),
      L('47','Équipements : transport, enseignement, santé',[
        ['Quel est le niveau des transports ?','Réseaux peu denses, hérités de la colonisation, tournés vers les ports et peu interconnectés entre pays.'],
        ['Quels efforts pour les transports ?','Programme PIDA de l’UA, routes transafricaines, nouveaux chemins de fer (Éthiopie–Djibouti, Kenya), ports, câbles sous-marins pour internet.'],
        ['Quelle est la situation de l’enseignement ?','Scolarisation en progrès, mais manque d’enseignants, de classes et de qualité ; forte demande de formation technique et supérieure.'],
        ['Quelle est la situation de la santé ?','Manque de personnel et de structures. Africa CDC (2017) coordonne la lutte contre les épidémies.'],
        ['Qu’est-ce que l’Agenda 2063 ?','Le cadre de développement de l’UA (adopté en 2013) pour une Afrique intégrée, prospère et en paix d’ici 2063.']
      ]),
      L('48-49','Regroupements régionaux et continentaux',[
        ['Quand et où l’OUA a-t-elle été créée ? Par quoi a-t-elle été remplacée ?','L’OUA est créée le 25 mai 1963 à Addis-Abeba (32 États). Remplacée par l’Union africaine, lancée le 8 juillet 2002 à Durban (siège à Addis-Abeba ; 55 membres).'],
        ['Quels sont les buts de l’UA ?','Unité et solidarité, paix et sécurité, intégration économique, défense de la souveraineté, développement et droits de l’homme.'],
        ['Quel est le siège de l’UA et combien a-t-elle de membres ?','Addis-Abeba (Éthiopie) ; 55 États membres.'],
        ['Quels sont les organes principaux de l’UA ?','Conférence des chefs d’État, Conseil exécutif, Commission, Parlement panafricain, Conseil de paix et de sécurité.'],
        ['Qu’est-ce que la CEDEAO ?','La Communauté économique des États de l’Afrique de l’Ouest, créée par le traité de Lagos (1975) ; siège à Abuja.'],
        ['Qu’est-ce que la SADC ?','La Communauté de développement de l’Afrique australe : créée en 1980 (SADCC), devenue SADC en 1992, siège à Gaborone. La RDC en est membre depuis 1997.'],
        ['Qu’est-ce que la CEEAC ?','La Communauté économique des États de l’Afrique centrale, créée en 1983, siège à Libreville. La RDC en est membre.'],
        ['Qu’est-ce que le COMESA ?','Le Marché commun de l’Afrique orientale et australe (traité de 1993, en vigueur en 1994), siège à Lusaka.'],
        ['Qu’est-ce que l’EAC et l’UMA ?','EAC : Communauté d’Afrique de l’Est (siège Arusha ; RDC membre depuis 2022). UMA : Union du Maghreb arabe (1989).'],
        ['Qu’est-ce que la CEPGL ?','La Communauté économique des pays des Grands Lacs (1976) : Burundi, Rwanda et RDC.'],
        ['Qu’est-ce que la ZLECAf ?','La Zone de libre-échange continentale africaine, lancée en 2018, échanges effectifs depuis le 1er janvier 2021. Objectif : un marché unique africain.'],
        ['Quelles sont les étapes de l’intégration économique ?','Zone de libre-échange, union douanière, marché commun, union économique et monétaire.'],
        ['Quel est le degré d’intégration en Afrique ?','Faible : le commerce entre pays africains ne représente qu’environ 15 % de leurs échanges.'],
        ['Quels sont les problèmes de l’intégration ?','Appartenances multiples, barrières douanières, manque d’infrastructures, conflits, monnaies différentes, dépendance extérieure, manque de volonté politique.'],
        ['Quels remèdes proposer ?','ZLECAf, infrastructures communes, libre circulation des personnes, harmonisation des règles, industrialisation, paix et bonne gouvernance.'],
        ['Que signifie l’indépendance dans la prise de décision ?','Compter davantage sur ses propres ressources pour décider librement, au lieu de dépendre de l’aide et des conditions extérieures.'],
        ['Qu’est-ce que la culture de la paix ?','Prévenir et régler les conflits par le dialogue et la médiation : une condition du développement et de l’intégration.'],
        ['Qu’est-ce que la BAD ?','La Banque africaine de développement (1964), siège à Abidjan : elle finance des projets de développement.']
      ]),
      L('50-51','Partenaires de l’Afrique et échanges internationaux',[
        ['Quels sont les pays partenaires commerciaux de l’Afrique ?','États-Unis, Japon et Chine : aide au développement, investissements, exportations et importations.'],
        ['Quel rôle joue la Chine ?','Premier partenaire commercial de l’Afrique ; forum FOCAC depuis 2000 ; elle investit dans routes, rails, ports et mines, en échange de matières premières.'],
        ['Quel rôle joue le Japon ?','La conférence TICAD (depuis 1993) : aide au développement, infrastructures et formation.'],
        ['Quels rôle jouent les États-Unis ?','Aide, investissements et loi AGOA (2000) qui ouvrait leur marché à certains produits africains.'],
        ['Quelle est l’origine de l’Union européenne et ses objectifs ?','Née des Communautés européennes (CECA en 1951, traité de Rome en 1957), devenue UE par le traité de Maastricht (1992). Objectifs : marché unique, euro, paix, politiques communes.'],
        ['Combien de membres compte l’UE ? Citez-en quelques-uns.','27 États : Allemagne, France, Italie, Belgique, Pays-Bas, Espagne…'],
        ['Quelle est la relation entre l’UE et l’Afrique ?','L’UE reste le premier partenaire en bloc et un grand bailleur d’aide ; accords de Lomé (1975) puis de Cotonou (2000).'],
        ['Qu’est-ce que l’OCDE ?','L’Organisation de coopération et de développement économiques, créée en 1961, siège à Paris, 38 membres surtout développés. Son CAD coordonne l’aide au développement.'],
        ['Quels sont les organismes de financement ?','Le FMI (stabilité monétaire, prêts aux États en difficulté) et la Banque mondiale (financement de projets de développement), nés à Bretton Woods (1944), siège à Washington.'],
        ['Quels sont les organismes de soutien et leur domaine ?','OMS (santé), FAO (alimentation et agriculture), UNESCO (éducation, science, culture), PNUD (développement humain).'],
        ['Quels sont les organismes africains ?','Union africaine, BAD, SADC, CEDEAO, etc.'],
        ['Qu’est-ce que l’initiative PPTE ?','Un allègement de la dette des pays pauvres très endettés. La RDC a atteint le point d’achèvement en 2010.'],
        ['Quelle différence entre échanges Nord-Sud et Sud-Sud ?','Nord-Sud : l’Afrique exporte des matières premières vers le Nord et importe des produits finis. Sud-Sud : très faibles entre pays africains.'],
        ['Pourquoi les échanges Sud-Sud sont-ils faibles ?','Économies qui produisent les mêmes matières premières, mauvaises infrastructures, barrières douanières, manque de financement et de produits transformés.'],
        ['Qu’est-ce que la mondialisation ?','L’interdépendance croissante des économies, avec la circulation des marchandises, capitaux, informations et personnes à l’échelle du monde.'],
        ['Qu’est-ce que la régionalisation ?','Le regroupement d’États voisins en blocs économiques pour mieux peser dans le monde.'],
        ['Quels sont les effets de la mondialisation en Afrique ?','Opportunités (marchés, technologies) mais risques : concurrence, dépendance, marginalisation.'],
        ['Qu’est-ce que la recomposition de l’espace ?','La réorganisation des espaces économiques sous l’effet des intégrations régionales, de la régionalisation et de la mondialisation.']
      ])
    ]}
  ]}
];
