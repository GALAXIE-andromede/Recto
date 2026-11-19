// Fichier geographie_data.js - Cours complet de GÃ©ographie 6e annÃ©e (RDC)
function L(n, t, c){ return { id:'g' + n.replace(/[^0-9A-Za-z]/g, '_'), n:n, t:t, c:c }; }

window.COURSE_GEO = [
  { t:'Notions clÃ©s du dÃ©veloppement', ch:[
    { t:'Objectif terminal du programme', free:true, ls:[
      L('N1','Indices et facteurs de dÃ©veloppement',[
        ['Que doit savoir faire lâ€™Ã©lÃ¨ve Ã  la fin de la 6e annÃ©e, selon le programme ?','DÃ©terminer les indices et les facteurs de dÃ©veloppement, ainsi que les solutions appropriÃ©es au sous-dÃ©veloppement de la RDC et de lâ€™Afrique.'],
        ['Citez des indices de dÃ©veloppement.','Revenu par habitant (PIB/hab.), indice de dÃ©veloppement humain (IDH), espÃ©rance de vie, taux dâ€™alphabÃ©tisation, mortalitÃ© infantile, accÃ¨s Ã  lâ€™eau potable et Ã  lâ€™Ã©lectricitÃ©, taux dâ€™urbanisation.'],
        ['Quâ€™est-ce que lâ€™IDH ?','Lâ€™indice de dÃ©veloppement humain, calculÃ© par le PNUD. Il combine la santÃ© (espÃ©rance de vie), lâ€™instruction (taux dâ€™alphabÃ©tisation des adultes) et le revenu (PIB par habitant).'],
        ['Citez des facteurs de dÃ©veloppement.','Naturels (ressources, climat, position), humains (population, formation), Ã©conomiques (capitaux, infrastructures, industries) et politiques (paix, bonne gouvernance).'],
        ['Quelle diffÃ©rence entre croissance Ã©conomique et dÃ©veloppement ?','La croissance est lâ€™augmentation de la production (PIB). Le dÃ©veloppement est plus large : il amÃ©liore durablement la santÃ©, lâ€™Ã©ducation et les conditions de vie de la population.'],
        ['Quelles sont les causes du sous-dÃ©veloppement en Afrique ?','HÃ©ritage colonial (Ã©conomies tournÃ©es vers lâ€™exportation de matiÃ¨res premiÃ¨res), dÃ©pendance aux produits bruts, dette, conflits, mauvaise gouvernance, manque dâ€™infrastructures et de formation, croissance rapide de la population.'],
        ['Pourquoi le pouvoir de nÃ©gociation de lâ€™Afrique est-il faible dans les forums internationaux ?','Ses Ã©conomies sont faibles et dÃ©pendantes des matiÃ¨res premiÃ¨res et de lâ€™aide, ses Ã‰tats sont divisÃ©s et peu intÃ©grÃ©s, et les prix de ses produits sont fixÃ©s sur les marchÃ©s mondiaux.'],
        ['Que signifie la dÃ©gradation des termes de lâ€™Ã©change ?','Les prix des matiÃ¨res premiÃ¨res exportÃ©es baissent ou stagnent, alors que ceux des produits manufacturÃ©s importÃ©s augmentent : il faut exporter toujours plus pour acheter la mÃªme chose.'],
        ['Quelles solutions face au sous-dÃ©veloppement ?','Diversifier et transformer sur place, investir dans lâ€™Ã©ducation et la santÃ©, construire des infrastructures, assurer la paix et la bonne gouvernance, intÃ©grer les Ã©conomies africaines, moderniser lâ€™agriculture.']
      ]),
      L('N2','Lire et rÃ©aliser une carte thÃ©matique',[
        ['Quâ€™est-ce quâ€™une carte thÃ©matique ?','Une carte qui reprÃ©sente un seul thÃ¨me (climats, mines, population, transportsâ€¦) Ã  partir de donnÃ©es gÃ©ographiques recueillies, sur un fond de carte.'],
        ['Quels Ã©lÃ©ments doit contenir une carte ?','Un titre, une lÃ©gende, une Ã©chelle, lâ€™orientation (le nord) et la source des donnÃ©es.'],
        ['Ã€ quoi sert la lÃ©gende ?','Ã€ expliquer les signes, les couleurs et les symboles utilisÃ©s sur la carte.'],
        ['Que signifie une Ã©chelle de 1/1 000 000 ?','1 cm sur la carte reprÃ©sente 1 000 000 cm sur le terrain, soit 10 km.'],
        ['Comment rÃ©aliser une carte thÃ©matique ?','Choisir le thÃ¨me, rassembler les donnÃ©es, prÃ©parer le fond de carte, choisir signes et couleurs, tracer, puis ajouter titre, lÃ©gende, Ã©chelle et source.'],
        ['Quels outils servent Ã  comparer des donnÃ©es statistiques ?','Les tableaux et les graphiques : courbes, histogrammes et diagrammes circulaires, utilisÃ©s avec les cartes.']
      ])
    ]}
  ]},

  { t:'PremiÃ¨re partie : la RÃ©publique dÃ©mocratique du Congo', ch:[

    { t:'Chapitre I. La nature et les hommes', free:true, ls:[
      L('1','PrÃ©sentation de la RDC',[
        ['OÃ¹ se situe la RDC en Afrique ?','Au cÅ“ur de lâ€™Afrique centrale, Ã  cheval sur lâ€™Ã©quateur : lâ€™essentiel du pays se trouve dans lâ€™hÃ©misphÃ¨re sud.'],
        ['Quelle est la superficie de la RDC ?','Environ 2 345 409 kmÂ² (ou environ 2 345 000 kmÂ²) : le plus vaste pays dâ€™Afrique centrale, deuxiÃ¨me dâ€™Afrique aprÃ¨s lâ€™AlgÃ©rie et onziÃ¨me du monde (environ 80 fois la Belgique).'],
        ['Quels sont les neuf pays voisins de la RDC ?','Congo-Brazzaville, Centrafrique, Soudan du Sud, Ouganda, Rwanda, Burundi, Tanzanie, Zambie et Angola.'],
        ['Pourquoi dit-on que la RDC est semi-enclavÃ©e ?','Elle nâ€™a quâ€™un Ã©troit accÃ¨s Ã  lâ€™ocÃ©an Atlantique, dâ€™environ 40 km (Muandaâ€“Banana), Ã  lâ€™embouchure du fleuve Congo.'],
        ['Quels sont les trois types dâ€™atouts de la RDC ?','Des potentialitÃ©s physiques (fleuve, forÃªt, sols, climat), humaines (population nombreuse et jeune) et Ã©conomiques (mines, Ã©nergie, agriculture, tourisme).'],
        ['Quelles contraintes le programme cite-t-il ?','Le semi-enclavement, des frontiÃ¨res difficiles Ã  surveiller et des moyens de communication inadaptÃ©s.'],
        ['Pourquoi les frontiÃ¨res sont-elles difficiles Ã  surveiller ?','Elles sont trÃ¨s longues (plus de 10 000 km), traversent forÃªts, fleuves et lacs, et manquent de postes de contrÃ´le Ã©quipÃ©s.'],
        ['Quelle est la capitale de la RDC ?','Kinshasa, sur la rive sud du fleuve Congo, face Ã  Brazzaville, capitale du Congo voisin.']
      ]),
      L('2','Structure et relief',[
        ['DÃ©crivez la structure gÃ©nÃ©rale du relief de la RDC.','Une vaste cuvette centrale (environ 340 Ã  700 m dâ€™altitude) entourÃ©e de plateaux Ã©tagÃ©s, puis de hautes terres et de montagnes Ã  lâ€™Est et au Sud-Est.'],
        ['Quâ€™est-ce que la cuvette centrale ?','Une grande dÃ©pression dâ€™environ 800 000 kmÂ² au centre-ouest du pays, drainÃ©e par le fleuve Congo et couverte surtout de forÃªt Ã©quatoriale et de marÃ©cages.'],
        ['Citez des plateaux importants.','Les plateaux des BatÃ©kÃ© (Ouest), du Kwango (Bandundu) et ceux du Katanga (Biano, Manika, Kundelungu).'],
        ['Citez les principales montagnes.','Les monts Mitumba et le Rwenzori (Est), les monts Virunga (volcans), les Monts Bleus et le massif du Mayombe (Bas-Congo).'],
        ['Quel est le plus haut sommet liÃ© Ã  la RDC ?','Le pic Marguerite (environ 5 100 m ; 5 109 ou 5 119 m selon les sources), dans le massif du Rwenzori, Ã  la frontiÃ¨re avec lâ€™Ouganda.'],
        ['Quâ€™est-ce que le Rift (fossÃ© dâ€™effondrement) ?','Une longue cassure de lâ€™Ã©corce terrestre Ã  lâ€™Est. Il abrite les lacs Albert, Ã‰douard, Kivu et Tanganyika, et explique les volcans et les sÃ©ismes.'],
        ['Quels volcans sont actifs en RDC ?','Le Nyiragongo et le Nyamuragira, dans les monts Virunga (Nord-Kivu).'],
        ['Quel avantage Ã©conomique pour chaque milieu ?','Cuvette : agriculture, forÃªt, pÃªche. Plateaux : Ã©levage et mines (Katanga). Montagnes : climat frais, cultures, tourisme. Chutes et rapides : hydroÃ©lectricitÃ©.']
      ]),
      L('3-4','Climat, sols et vÃ©gÃ©tation',[
        ['Quels sont les trois grands types de climat de la RDC ?','Ã‰quatorial (cuvette centrale), tropical humide, tropical sec (extrÃªme Sud) et climat de montagne (hautes terres de lâ€™Est).'],
        ['CaractÃ©ristiques du climat Ã©quatorial ?','Chaud et humide : tempÃ©ratures constantes (plus de 20 Â°C, amplitude dâ€™environ 2 Â°C), pluies dâ€™au moins 1 500 mm par an et aucune saison sÃ¨che.'],
        ['CaractÃ©ristiques du climat tropical humide ?','Entre 4Â° et 10Â° de latitude : 1 200 Ã  1 500 mm de pluie par an, une longue saison des pluies (8 Ã  10 mois) et une courte saison sÃ¨che (2 Ã  4 mois).'],
        ['Quelles sont les principales formations vÃ©gÃ©tales ?','ForÃªt dense Ã©quatoriale (cuvette), forÃªts claires et savanes (Nord, Sud, Ouest), vÃ©gÃ©tation de montagne Ã©tagÃ©e (Est) et mangroves (cÃ´te).'],
        ['Quelle place occupe la forÃªt congolaise dans le monde ?','Câ€™est la deuxiÃ¨me plus grande forÃªt tropicale du monde aprÃ¨s lâ€™Amazonie ; elle joue un rÃ´le majeur pour le climat et la biodiversitÃ©.'],
        ['Quels types de sols trouve-t-on ?','Ferralitiques (rouges, acides, pauvres, dominants), alluviaux (fertiles, vallÃ©es), volcaniques (trÃ¨s fertiles, Nord-Kivu) et sableux (pauvres, plateaux BatÃ©kÃ©).'],
        ['Pourquoi les sols ferralitiques sont-ils pauvres ?','Les fortes pluies lessivent les Ã©lÃ©ments nutritifs. Seule la mince couche dâ€™humus de la forÃªt entretient leur fertilitÃ©, dâ€™oÃ¹ la nÃ©cessitÃ© de jachÃ¨res.'],
        ['Quels sont les atouts du climat, des sols et de la vÃ©gÃ©tation ?','Grande variÃ©tÃ© de cultures, bois prÃ©cieux (limba, wengÃ©, sapelli), pÃ¢turages, biodiversitÃ©.'],
        ['Quelles sont les contraintes ?','ForÃªt difficile Ã  pÃ©nÃ©trer, sols lessivÃ©s et Ã©rosion, maladies tropicales (paludisme, maladie du sommeil), mouche tsÃ©-tsÃ© qui gÃªne lâ€™Ã©levage.']
      ]),
      L('5','Protection de la nature et tourisme',[
        ['Quel est le plus ancien parc national dâ€™Afrique ?','Le parc national des Virunga (Nord-Kivu), crÃ©Ã© en 1925.'],
        ['Citez des parcs nationaux et rÃ©serves de la RDC.','Virunga, Garamba, Salonga, MaÃ¯ko, Upemba, Kundelungu, Kahuzi-Biega, parc marin des Mangroves et rÃ©serve de faune Ã  okapis (Epulu).'],
        ['Quel est le plus grand parc de forÃªt tropicale dâ€™Afrique ?','La Salonga, qui sâ€™Ã©tend sur lâ€™Ã‰quateur, le Bandundu et le KasaÃ¯ Occidental dans lâ€™ancien dÃ©coupage.'],
        ['Quels animaux emblÃ©matiques trouve-t-on ?','Gorille de montagne (Virunga), gorille de plaine (Kahuzi-Biega), bonobo (propre Ã  la RDC), okapi (Epulu), Ã©lÃ©phants (Garamba).'],
        ['Combien de sites naturels de la RDC sont au patrimoine mondial de lâ€™UNESCO ?','Cinq : Virunga, Garamba, Kahuzi-Biega, Salonga et la rÃ©serve de faune Ã  okapis.'],
        ['Pourquoi protÃ©ger la nature ?','Pour prÃ©server la biodiversitÃ©, rÃ©guler le climat, garder des ressources pour lâ€™avenir et profiter du tourisme.'],
        ['Quelle est lâ€™importance du tourisme dans lâ€™Ã©conomie ?','Il rapporte des devises, crÃ©e des emplois, finance la conservation et fait connaÃ®tre le pays.'],
        ['Quels Ã©quipements manquent au tourisme congolais ?','HÃ´tels, routes, aÃ©roports, guides formÃ©s, centres dâ€™accueil et promotion. Lâ€™insÃ©curitÃ© et le braconnage freinent aussi le secteur.'],
        ['Ã€ quoi sert la carte touristique ?','Ã€ localiser les parcs, rÃ©serves, chutes, lacs et sites historiques, pour planifier leur amÃ©nagement.']
      ]),
      L('6','Hydrographie',[
        ['Quelle est la longueur du fleuve Congo et son rang ?','Environ 4 700 km. DeuxiÃ¨me fleuve dâ€™Afrique aprÃ¨s le Nil (6 671 km) et deuxiÃ¨me du monde par le dÃ©bit aprÃ¨s lâ€™Amazone (dÃ©bit moyen dâ€™environ 50 000 mÂ³/s).'],
        ['OÃ¹ le fleuve Congo prend-il naissance et oÃ¹ se jette-t-il ?','Il naÃ®t au Katanga (mont Musofi) sous le nom de Lualaba et se jette dans lâ€™ocÃ©an Atlantique, Ã  Muandaâ€“Banana par un vaste estuaire.'],
        ['Pourquoi le dÃ©bit du Congo est-il rÃ©gulier ?','Il traverse lâ€™Ã©quateur deux fois et reÃ§oit des affluents des deux hÃ©misphÃ¨res, dont les saisons des pluies se compensent.'],
        ['Citez les principaux affluents du Congo.','Rive droite : Ubangi, Itimbiri, Aruwimi, Lindi. Rive gauche : KasaÃ¯ (avec Kwango, Kwilu, Sankuru, Lulua), Lomami, Lulonga.'],
        ['Quels obstacles Ã  la navigation sur le fleuve ?','Les chutes Boyoma (Kisangani) et les rapides entre Kinshasa et Matadi (chutes Livingstone). Le bief Kinshasaâ€“Kisangani, navigable, fait environ 1 700 km.'],
        ['Quel est lâ€™Ã©largissement du fleuve entre Kinshasa et Brazzaville ?','Le Pool Malebo (ancien Stanley Pool).'],
        ['Citez les principaux lacs de la RDC.','Tanganyika, Kivu, Albert, Ã‰douard, Moero (Mweru), Upemba, Mai-Ndombe et Tumba.'],
        ['Que dit-on du lac Tanganyika ?','Câ€™est le deuxiÃ¨me lac le plus profond du monde (environ 1 435 m) aprÃ¨s le BaÃ¯kal, et le plus vaste lac de la RDC, partagÃ© avec la Tanzanie, le Burundi et la Zambie.'],
        ['Quels sont les avantages Ã©conomiques de lâ€™hydrographie ?','Transport, pÃªche, hydroÃ©lectricitÃ©, eau potable, irrigation et tourisme.']
      ]),
      L('7','Population',[
        ['Combien dâ€™habitants compte la RDC ?','Plus de 100 millions dâ€™habitants selon les estimations rÃ©centes (les chiffres varient, le dernier recensement gÃ©nÃ©ral date de 1984 avec environ 30 millions).'],
        ['Quelle est la composition de la population ?','Cinq grands groupes : PygmÃ©es (Mbuti), Bantous (majoritÃ©), Soudanais, Nilotiques et Hamitiques, avec plus de 200 ethnies.'],
        ['Quelle est la structure par Ã¢ge ?','Une population trÃ¨s jeune, avec une natalitÃ© Ã©levÃ©e : la pyramide des Ã¢ges a une base large et un sommet Ã©troit.'],
        ['Comment Ã©volue la population ?','Elle croÃ®t rapidement (environ 3 % par an) et double en une vingtaine dâ€™annÃ©es.'],
        ['Quelle est la densitÃ© moyenne ?','Environ 40 habitants au kmÂ², mais trÃ¨s inÃ©galement rÃ©partis.'],
        ['Quelles rÃ©gions sont denses ou peu peuplÃ©es ?','Denses (plus de 50 hab./kmÂ²) : hautes terres de lâ€™Est, Kinshasa, Kongo-Central, KasaÃ¯, Katanga minier. Peu peuplÃ©es : cuvette centrale forestiÃ¨re et zones enclavÃ©es.'],
        ['Quels facteurs expliquent la rÃ©partition ?','Attirent : climat favorable, sols fertiles, mines, villes, voies de communication, sÃ©curitÃ©. Repoussent : forÃªt dense, marÃ©cages, enclavement, insÃ©curitÃ©.'],
        ['Quelles sont les langues du pays ?','Langue officielle : le franÃ§ais (deuxiÃ¨me pays francophone du monde). Quatre langues nationales : kikongo, lingala, swahili et tshiluba.'],
        ['Quelles sont les religions principales ?','MajoritÃ© chrÃ©tienne (catholiques, protestants, kimbanguistesâ€¦), minoritÃ© musulmane et croyances traditionnelles.']
      ]),
      L('8','DÃ©veloppement urbain',[
        ['Quâ€™est-ce que le taux dâ€™urbanisation ?','La part de la population totale qui vit dans les villes (de lâ€™ordre de 40 Ã  50 % en RDC).'],
        ['Quelles sont les causes de lâ€™urbanisation rapide ?','Exode rural, croissance naturelle, recherche dâ€™emploi et de services, insÃ©curitÃ© dans les campagnes.'],
        ['Quels types de villes selon la fonction ?','Administratives (Kinshasa), portuaires (Matadi, Boma), miniÃ¨res (Lubumbashi, Kolwezi, Mbuji-Mayi), commerciales, universitaires (Kinshasa, Lubumbashi, Kisangani), touristiques (Goma, Bukavu).'],
        ['Citez les principales villes.','Kinshasa (la plus grande), Lubumbashi, Mbuji-Mayi, Kananga, Kisangani, Bukavu, Goma, Tshikapa, Kolwezi, Likasi.'],
        ['Quels problÃ¨mes rencontrent les villes congolaises ?','Logement et habitat spontanÃ©, eau potable, Ã©lectricitÃ©, assainissement et ordures, chÃ´mage et secteur informel, embouteillages, Ã©rosion, insÃ©curitÃ©.'],
        ['Quelles solutions ?','Planification urbaine, cadastre, infrastructures, crÃ©ation dâ€™emplois et dÃ©veloppement des campagnes pour freiner lâ€™exode rural.'],
        ['Quâ€™est-ce quâ€™une ville ?','Une agglomÃ©ration importante qui concentre les habitants, les activitÃ©s non agricoles (commerce, industrie, services) et les fonctions administratives.']
      ])
    ]},

    { t:'Chapitre II. Aspects Ã©conomiques', free:false, ls:[
      L('9-10','CaractÃ¨res gÃ©nÃ©raux de lâ€™Ã©conomie',[
        ['Quâ€™est-ce que le dualisme de lâ€™Ã©conomie congolaise ?','La coexistence dâ€™un secteur moderne tournÃ© vers lâ€™exportation (mines, industries) et dâ€™un secteur traditionnel de subsistance (agriculture), faiblement reliÃ©s.'],
        ['Que veut dire Ã©conomie peu dynamique (dÃ©sarticulÃ©e) ?','Les secteurs ne sâ€™alimentent pas entre eux : peu de transformation locale, infrastructures insuffisantes, faible circulation des richesses.'],
        ['Que veut dire Ã©conomie extravertie ?','TournÃ©e vers lâ€™extÃ©rieur : elle exporte des matiÃ¨res premiÃ¨res brutes (cuivre, cobalt, diamants, bois) et importe des produits manufacturÃ©s et alimentaires.'],
        ['Que veut dire Ã©conomie de type agricole ?','La majoritÃ© de la population active vit de lâ€™agriculture, souvent de subsistance et Ã  faible productivitÃ©.'],
        ['Pourquoi lâ€™Ã©conomie est-elle fragile ?','Elle dÃ©pend de quelques produits dâ€™exportation dont les prix varient sur le marchÃ© mondial, et son dualisme limite la croissance.'],
        ['Quâ€™est-ce que le secteur informel ?','Les activitÃ©s non dÃ©clarÃ©es (petit commerce, transport, artisanat) qui emploient la majoritÃ© des citadins.'],
        ['Quels remÃ¨des aux faiblesses de lâ€™Ã©conomie ?','Diversifier lâ€™Ã©conomie, transformer sur place, relier les secteurs, dÃ©velopper les infrastructures et former la main-dâ€™Å“uvre.']
      ]),
      L('11-12','Agriculture, pÃªche, Ã©levage et forÃªt',[
        ['Quels sont les systÃ¨mes de production agricole ?','Agriculture itinÃ©rante sur brÃ»lis (traditionnelle, vivriÃ¨re), plantations agro-industrielles et agriculture paysanne autour des villes.'],
        ['Quelles sont les principales cultures vivriÃ¨res ?','Manioc (aliment de base), maÃ¯s, riz, banane plantain, haricot, arachide, patate douce, igname.'],
        ['Quelles sont les cultures dâ€™exportation ?','CafÃ©, cacao, huile de palme, caoutchouc (hÃ©vÃ©a), thÃ© et quinquina (Kivu), coton, canne Ã  sucre.'],
        ['OÃ¹ cultive-t-on quoi ?','CafÃ© arabica et thÃ© (hautes terres de lâ€™Est), robusta (UÃ©lÃ©, Ubangi, Maniema, KasaÃ¯), cacao et hÃ©vÃ©a (cuvette), palmier Ã  huile (Ã‰quateur, Kwilu, Kongo-Central), canne Ã  sucre (Kongo-Central, Sud-Kivu, Tshopo).'],
        ['Citez de grandes sociÃ©tÃ©s agro-industrielles.','Plantations et Huileries du Congo (PHC, ex-PLC) pour le palmier, et sucreries de Kwilu-Ngongo (Kongo-Central), Kiliba (Sud-Kivu) et Lotokila (Tshopo).'],
        ['Comment se pratiquent la pÃªche et lâ€™Ã©levage ?','PÃªche artisanale sur le fleuve et les lacs (Tanganyika, Albert, etc.), pÃªche semi-industrielle (Kalemie, Vitshumbi) et pÃªche maritime (PEMARCO Ã  Moanda). Ã‰levage limitÃ© par la mouche tsÃ©-tsÃ©, plus dÃ©veloppÃ© Ã  lâ€™Est et au Katanga.'],
        ['Que produit lâ€™exploitation forestiÃ¨re ?','Bois dâ€™Å“uvre (limba, wengÃ©, sapelli, acajou), bois de chauffe et makala. ProblÃ¨mes : exploitation illÃ©gale et dÃ©forestation.'],
        ['Quâ€™est-ce que la crise agricole ?','La production ne suffit plus Ã  nourrir le pays, qui importe maÃ¯s, riz, blÃ©, poisson et volaille.'],
        ['Quelles sont les causes de la crise agricole ?','Routes de desserte dÃ©gradÃ©es, outils rudimentaires, semences peu performantes, manque de crÃ©dit, insÃ©curitÃ©, exode rural, conservation et commercialisation difficiles.']
      ]),
      L('13','Le secteur minier',[
        ['Quelle est lâ€™importance du secteur minier ?','Les mines fournissent lâ€™essentiel des exportations et des devises de la RDC (de lâ€™ordre de 70 % ou plus).'],
        ['Que signifie Â« scandale gÃ©ologique Â» ?','Le contraste entre un sous-sol extrÃªmement riche, encore peu prospectÃ© et sous-exploitÃ©, et un pays qui reste pauvre.'],
        ['Quels minerais trouve-t-on au Katanga ?','Cuivre, cobalt, zinc, Ã©tain, manganÃ¨se, uranium, charbon (Luena) et lithium (Manono).'],
        ['OÃ¹ trouve-t-on les diamants ?','KasaÃ¯ Oriental (Mbuji-Mayi, MIBA), KasaÃ¯ Occidental (Tshikapa) et Province Orientale (Kisangani).'],
        ['OÃ¹ trouve-t-on lâ€™or ?','En Ituri (Kilo-Moto, OKIMO), dans le Kivu (Kamituga, Namoyaâ€¦) et au Maniema.'],
        ['OÃ¹ trouve-t-on lâ€™Ã©tain et le coltan ?','CassitÃ©rite (Ã©tain) et coltan dans le Kivu (Masisi, Walikale) et le Maniema, et aussi au Katanga.'],
        ['OÃ¹ exploite-t-on le pÃ©trole ?','Au littoral, Ã  Muanda (Kongo-Central), en mer (off-shore) et Ã  terre (on-shore), raffinÃ© Ã  Moanda par la SOCIR.'],
        ['Quelle place pour le cobalt ?','La RDC dÃ©tient lâ€™essentiel des rÃ©serves mondiales de cobalt et est le premier producteur mondial, associÃ© au cuivre Ã  Kolwezi.'],
        ['Citez les principales sociÃ©tÃ©s productrices.','GÃ©camines (cuivre, cobalt), MIBA (diamant), OKIMO (or), KCC et TFM (Kolwezi, Fungurume).'],
        ['Quelles sont les provinces miniÃ¨res ?','Katanga, KasaÃ¯, Province Orientale, Kivu, Maniema (et Kongo-Central pour le pÃ©trole).'],
        ['Quels problÃ¨mes pose le secteur minier ?','Exploitation artisanale dangereuse, fraude et contrebande, minerais liÃ©s aux conflits, peu de transformation sur place, manque dâ€™Ã©nergie, pollution.']
      ]),
      L('14-15','Les sources dâ€™Ã©nergie',[
        ['Quelles sont les principales sources dâ€™Ã©nergie ?','Bois de chauffage et makala, houille, pÃ©trole, gaz naturel, hydroÃ©lectricitÃ© et uranium (le solaire reste Ã  dÃ©velopper).'],
        ['Quelle est la premiÃ¨re source dâ€™Ã©nergie des mÃ©nages ?','Le bois de chauffe et le charbon de bois (makala), ce qui accÃ©lÃ¨re la dÃ©forestation.'],
        ['OÃ¹ trouve-t-on la houille ?','Au Katanga, notamment Ã  Luena et Ã  Lukuga (Kalemie). La RDC en importe dâ€™Afrique du Sud.'],
        ['OÃ¹ exploite-t-on pÃ©trole et gaz ?','PÃ©trole : littoral de Muanda. Gaz mÃ©thane : lac Kivu (potentiel important).'],
        ['Citez des barrages hydroÃ©lectriques.','Inga I et II et Zongo (Kongo-Central), Nzilo, Mwadingusha et Koni (Katanga), Ruzizi (Sud-Kivu), Tshopo (Kisangani), Lubilanji (KasaÃ¯ Oriental), Mobayi-Mbongo (Ã‰quateur).'],
        ['Quel est le plus grand site hydroÃ©lectrique ?','Inga, sur le bas Congo prÃ¨s de Matadi. Le potentiel du site est estimÃ© Ã  environ 40 000 MW (projet Grand Inga).'],
        ['Quel est le potentiel hydroÃ©lectrique de la RDC ?','EstimÃ© autour de 100 000 MW (environ 18 % du potentiel mondial), lâ€™un des plus Ã©levÃ©s dâ€™Afrique, mais exploitÃ© en trÃ¨s petite partie.'],
        ['Quels sont les avantages de lâ€™hydroÃ©lectricitÃ© ?','Ã‰nergie renouvelable, peu polluante, peu chÃ¨re Ã  long terme, utile Ã  lâ€™industrie et aux mines.'],
        ['Quels sont les inconvÃ©nients des sources dâ€™Ã©nergie ?','Bois : dÃ©forestation. Houille et pÃ©trole : pollution de lâ€™air, de lâ€™eau et du sol. Barrages : coÃ»t Ã©levÃ©, populations dÃ©placÃ©es, impact sur lâ€™environnement.'],
        ['Quels problÃ¨mes pour lâ€™Ã©lectricitÃ© ?','Faible accÃ¨s (environ un habitant sur cinq), rÃ©seau vÃ©tuste, dÃ©lestages. La SNEL est lâ€™entreprise nationale dâ€™Ã©lectricitÃ©.']
      ]),
      L('16-17','Les industries',[
        ['Quâ€™est-ce quâ€™un pays faiblement industrialisÃ© ?','Lâ€™industrie pÃ¨se peu dans lâ€™Ã©conomie (environ 13 % de la main-dâ€™Å“uvre) ; elle se limite surtout Ã  lâ€™extraction et Ã  la premiÃ¨re transformation.'],
        ['Quels types dâ€™industries existent ?','Extractives (mines), alimentaires (brasseries, minoteries, huileries, sucreries), textiles, chimiques, matÃ©riaux de construction (ciment), mÃ©tallurgiques, bois.'],
        ['Donnez des exemples dâ€™industries.','Brasseries (Bralima, Bracongo, Brasimba), textile (Utexco, Sotexki, Utexafrica), sidÃ©rurgie (Sosider, Maluku), ciment (CILU Ã  Lukala, CINAT Ã  Kimpese), raffinerie SOCIR (Moanda).'],
        ['Quâ€™est-ce quâ€™une industrialisation incomplÃ¨te et peu intÃ©grÃ©e ?','Peu dâ€™industries lourdes ; les usines dÃ©pendent dâ€™intrants importÃ©s et ne sont pas reliÃ©es entre elles, dâ€™oÃ¹ une faible valeur ajoutÃ©e.'],
        ['Quelles en sont les consÃ©quences ?','DÃ©pendance aux importations, chÃ´mage, peu de richesses crÃ©Ã©es et exportation de matiÃ¨res premiÃ¨res brutes.'],
        ['Comment les industries sont-elles rÃ©parties ?','Mal : concentrÃ©es Ã  Kinshasa, au Kongo-Central (Matadi, Boma, Lukala) et au Katanga (Lubumbashi, Likasi, Kolwezi), trÃ¨s peu ailleurs.'],
        ['Pourquoi si peu dâ€™industrialisation ?','Manque dâ€™Ã©nergie, de capitaux et de routes, marchÃ© intÃ©rieur Ã  faible pouvoir dâ€™achat, instabilitÃ©, concurrence des importations.'],
        ['Quelles solutions pour industrialiser ?','Ã‰nergie fiable, zones Ã©conomiques spÃ©ciales, transformation des minerais sur place, crÃ©dit, formation, climat favorable aux investissements.']
      ]),
      L('18','Les transports',[
        ['Quelle est lâ€™importance des transports ?','Ils dÃ©senclavent les rÃ©gions, permettent les Ã©changes, relient les provinces, favorisent lâ€™unitÃ© nationale et lâ€™accÃ¨s aux services.'],
        ['Quels sont les principaux rÃ©seaux de communication ?','Routier, ferroviaire, maritime, fluvial et lacustre, aÃ©rien.'],
        ['Citez des lignes de chemin de fer.','Matadiâ€“Kinshasa (366 km), Lubumbashiâ€“Ilebo (Voie nationale), rÃ©seaux de lâ€™Est (Kinduâ€“Kalemie), Kisanganiâ€“Ubundu et Nord (Vicicongo). Le rÃ©seau compte environ 5 110 km.'],
        ['Quâ€™est-ce que la Voie nationale ?','Un itinÃ©raire multimodal reliant le Katanga Ã  Kinshasa : rail Lubumbashiâ€“Ilebo, puis fleuve KasaÃ¯ et Congo.'],
        ['Quels sont les ports maritimes ?','Matadi (principal), Boma, et le projet de port en eau profonde Ã  Banana.'],
        ['Que sait-on du transport fluvial et lacustre ?','Le Congo et ses affluents offrent plus de 13 000 km de voies navigables entrecoupÃ©es de rapides. Ports : Kinshasa, Mbandaka, Kisangani, Ilebo. Lacs : Tanganyika, Kivu.'],
        ['Pourquoi le fleuve est-il important ?','Câ€™est la voie naturelle de pÃ©nÃ©tration vers lâ€™intÃ©rieur : navigable sur environ 1 700 km entre Kinshasa et Kisangani (bief moyen).'],
        ['OÃ¹ sont les grands aÃ©roports ?','Cinq aÃ©roports internationaux : Nâ€™djili (Kinshasa), Luano (Lubumbashi), Goma, Bangboka (Kisangani) et Gbadolite (plus dâ€™une quarantaine dâ€™aÃ©roports au total).'],
        ['Quâ€™est-ce que le dÃ©senclavement ?','Rendre accessibles les rÃ©gions isolÃ©es et le pays lui-mÃªme : rÃ©habiliter routes, rail et ports et ouvrir des corridors vers Dar es Salaam, Durban, Beira, Lobito.'],
        ['Quels sont les problÃ¨mes des transports ?','Routes en terre mal entretenues (sur 170 000 km, trÃ¨s peu sont asphaltÃ©s), rail et bateaux vÃ©tustes, aÃ©roports peu Ã©quipÃ©s, coÃ»ts Ã©levÃ©s, insÃ©curitÃ©.']
      ])
    ]},

    { t:'Chapitre III. Les services', free:false, ls:[
      L('19','Le commerce',[
        ['Comment fonctionne le commerce intÃ©rieur ?','Ã‰changes intÃ©rieurs : intra-provinciaux (villes et campagnes) et interprovinciaux (approvisionnement de Kinshasa et des grands centres depuis les provinces).'],
        ['Que la RDC exporte-t-elle ?','Cuivre, cobalt, diamants, or, pÃ©trole, bois, cafÃ© (essentiellement des matiÃ¨res premiÃ¨res brutes).'],
        ['Que la RDC importe-t-elle ?','Produits alimentaires (maÃ¯s, poisson, etc.), biens de consommation, machines, vÃ©hicules, carburants, mÃ©dicaments.'],
        ['Quâ€™est-ce que la balance commerciale ?','La diffÃ©rence entre la valeur des exportations et celle des importations : excÃ©dentaire si les exportations dominent, dÃ©ficitaire sinon.'],
        ['Quels sont les principaux partenaires Ã©conomiques ?','Belgique, Union europÃ©enne, Chine, Japon, Canada et Afrique du Sud (lâ€™ordre varie selon les annÃ©es).'],
        ['Quelles sont les caractÃ©ristiques du commerce national ?','DominÃ© par lâ€™informel, exportations de produits bruts, importations de produits finis, forte dÃ©pendance aux cours mondiaux.']
      ]),
      L('20','Lâ€™enseignement',[
        ['Quels sont les secteurs de lâ€™enseignement ?','Quatre niveaux : maternel, primaire (certificat de fin dâ€™Ã©tudes primaires), secondaire (gÃ©nÃ©ral, normal, technique) et supÃ©rieur et universitaire.'],
        ['Quelle est la finalitÃ© de lâ€™enseignement ?','Former le citoyen congolais responsable, utile Ã  lui-mÃªme et Ã  la sociÃ©tÃ©, capable de promouvoir le dÃ©veloppement du pays et la culture nationale.'],
        ['Quels Ã©tablissements forment lâ€™enseignement supÃ©rieur et universitaire ?','UniversitÃ©s, instituts supÃ©rieurs pÃ©dagogiques (ISP), techniques mÃ©dicaux (ISTM), de commerce (ISC) et autres instituts.'],
        ['Quelles furent les premiÃ¨res universitÃ©s du pays ?','Lovanium (Kinshasa, 1954), UniversitÃ© officielle du Congo (Lubumbashi, 1955) et UniversitÃ© libre du Congo (Kisangani, 1963). Lâ€™examen dâ€™Ã‰tat est instaurÃ© en 1967.'],
        ['OÃ¹ se localisent les Ã©tablissements supÃ©rieurs ?','Dans les grandes villes, surtout Kinshasa, Lubumbashi et Kisangani, puis dans les chefs-lieux de province.'],
        ['Quels sont les problÃ¨mes majeurs de lâ€™enseignement ?','Manque dâ€™Ã©coles et de manuels, classes surchargÃ©es, salaires faibles des enseignants, frais de scolaritÃ©, enfants hors de lâ€™Ã©cole, chÃ´mage des diplÃ´mÃ©s.'],
        ['Que sâ€™est-il passÃ© en 2019 pour le primaire ?','Depuis la rentrÃ©e 2019, lâ€™enseignement primaire public est dÃ©clarÃ© gratuit.'],
        ['Ã€ quoi sert la carte scolaire ?','Ã€ montrer la rÃ©partition des Ã©coles et des universitÃ©s et Ã  planifier les besoins.']
      ]),
      L('21','La santÃ©',[
        ['Comment est organisÃ©e la santÃ© ?','En pyramide Ã  trois niveaux : central (ministÃ¨re), intermÃ©diaire (province) et pÃ©riphÃ©rique (zone de santÃ©).'],
        ['Quâ€™est-ce quâ€™une zone de santÃ© ?','Lâ€™unitÃ© de base du systÃ¨me : elle regroupe plusieurs aires de santÃ©, avec un hÃ´pital gÃ©nÃ©ral de rÃ©fÃ©rence et des centres de santÃ© (plus de 500 au total).'],
        ['Que sont les soins de santÃ© primaires ?','PrÃ©vention, vaccination, soins de base, hygiÃ¨ne et nutrition, au plus prÃ¨s de la population.'],
        ['Quelles sont les maladies majeures ?','Paludisme, tuberculose, VIH/sida, rougeole, cholÃ©ra, fiÃ¨vre typhoÃ¯de, mpox et Ebola.'],
        ['Que sait-on dâ€™Ebola ?','DÃ©couvert en 1976 prÃ¨s de la riviÃ¨re Ebola (Yambuku, Ã‰quateur). La RDC a connu plusieurs Ã©pidÃ©mies.'],
        ['Quels problÃ¨mes de santÃ© rencontre le pays ?','InÃ©gale rÃ©partition des mÃ©decins, manque dâ€™Ã©quipements et de mÃ©dicaments, coÃ»t des soins, mortalitÃ© maternelle et infantile Ã©levÃ©e, malnutrition.'],
        ['Quâ€™est-ce quâ€™une carte nosologique ?','Une carte de la rÃ©partition des maladies sur le territoire.'],
        ['Quelles solutions pour la santÃ© ?','Former le personnel, approvisionner en mÃ©dicaments, vacciner, assainir, fournir lâ€™eau potable et financer une couverture santÃ© pour tous.']
      ])
    ]},

    { t:'Chapitre IV. Ã‰tude rÃ©gionale', free:false, ls:[
      L('22','Notion de rÃ©gion gÃ©ographique',[
        ['Quâ€™est-ce quâ€™une rÃ©gion gÃ©ographique ?','Un espace prÃ©sentant une unitÃ© de caractÃ¨res physiques, humains ou Ã©conomiques, qui le distingue des espaces voisins.'],
        ['Quels sont les critÃ¨res de rÃ©gionalisation ?','Physiques (relief, climat, vÃ©gÃ©tation), humains (peuplement, langues, cultures), Ã©conomiques (activitÃ©s, communications) et administratifs.'],
        ['De quoi se compose la rÃ©gion Sud-Ouest ?','Kinshasa, Kongo Central, Kwango, Kwilu et Mai-Ndombe (anciennement Kinshasa, Bas-Congo et Bandundu).'],
        ['De quoi se compose la rÃ©gion centrale ?','KasaÃ¯, KasaÃ¯-Central, KasaÃ¯-Oriental, Lomami et Sankuru (issues des anciens KasaÃ¯ Occidental et Oriental).'],
        ['De quoi se compose la rÃ©gion de lâ€™Est ?','Nord-Kivu, Sud-Kivu et Maniema.'],
        ['De quoi se compose la rÃ©gion du Nord ?','Ã‰quateur, Mongala, Nord-Ubangi, Sud-Ubangi, Tshuapa, Bas-UÃ©lÃ©, Haut-UÃ©lÃ©, Ituri et Tshopo (anciens Ã‰quateur et Province Orientale).'],
        ['Quelle est la rÃ©gion du Sud-Est ?','Le Katanga, divisÃ© en Haut-Katanga, Haut-Lomami, Lualaba et Tanganyika.'],
        ['Quels sont les chefs-lieux des 11 anciennes provinces ?','Kinshasa, Bandundu, Matadi, Kananga, Mbuji-Mayi, Goma, Bukavu, Kindu, Mbandaka, Kisangani, Lubumbashi.'],
        ['Combien de provinces compte la RDC aujourdâ€™hui ?','26 provinces (Kinshasa et 25 provinces) depuis le dÃ©coupage de 2015. Le programme de rÃ©fÃ©rence utilise les anciennes entitÃ©s.'],
        ['En quelles provinces le Katanga, le Bandundu et le Bas-Congo ont-ils Ã©tÃ© divisÃ©s ?','Katanga : Haut-Katanga, Lualaba, Haut-Lomami, Tanganyika. Bandundu : Kwango, Kwilu, Mai-Ndombe. Bas-Congo : Kongo Central.'],
        ['En quelles provinces lâ€™Ã‰quateur et la Province Orientale ont-ils Ã©tÃ© divisÃ©s ?','Ã‰quateur : Ã‰quateur, Mongala, Nord-Ubangi, Sud-Ubangi, Tshuapa. Province Orientale : Tshopo, Bas-UÃ©lÃ©, Haut-UÃ©lÃ©, Ituri.'],
        ['En quelles provinces les deux KasaÃ¯ ont-ils Ã©tÃ© divisÃ©s ? Et le Kivu ?','KasaÃ¯ Occidental : KasaÃ¯, KasaÃ¯-Central. KasaÃ¯ Oriental : KasaÃ¯-Oriental, Lomami, Sankuru. Nord-Kivu, Sud-Kivu et Maniema restent inchangÃ©s.']
      ]),
      L('23','Le Bandundu',[
        ['OÃ¹ se situe le Bandundu et quel est son chef-lieu ?','Ã€ lâ€™est de Kinshasa. Le chef-lieu Ã©tait la ville de Bandundu (aujourdâ€™hui chef-lieu du Kwilu) ; lâ€™ancienne province est divisÃ©e en Kwango, Kwilu et Mai-Ndombe.'],
        ['Quelle est la spÃ©cificitÃ© du Bandundu ?','Province essentiellement agricole : manioc, maÃ¯s, arachide, palmier Ã  huile, haricot.'],
        ['Quelles autres activitÃ©s Ã©conomiques ?','PÃªche (KasaÃ¯, Kwango, Kwilu, lac Mai-Ndombe), Ã©levage, exploitation artisanale, travaux dâ€™ivoire, exploitation forestiÃ¨re.'],
        ['Que dire de lâ€™industrie ?','La production industrielle est faible.'],
        ['Quels sont les sites touristiques ?','Les chutes Ntemo et le parc de la Salonga.'],
        ['Quelle est la place de la province dans le pays ?','Grenier de Kinshasa : vivres (manioc, maÃ¯sâ€¦), bois et charbon de bois y arrivent par route et par riviÃ¨re.'],
        ['Quels sont ses problÃ¨mes ?','Routes et ponts dÃ©gradÃ©s, faible industrialisation, Ã©lectricitÃ© insuffisante, dÃ©boisement.']
      ]),
      L('24','Le Bas-Congo',[
        ['Quel est le chef-lieu du Bas-Congo et son atout gÃ©ographique ?','Matadi, port sur lâ€™estuaire du fleuve ; le Kongo Central est la seule province ayant un accÃ¨s direct Ã  lâ€™ocÃ©an Atlantique.'],
        ['Quelle est la spÃ©cificitÃ© de la province ?','Port maritime (Matadi, Boma, Banana) et nombreuses chutes dâ€™eau.'],
        ['Quelles sont les productions agricoles ?','Banane, manioc, cafÃ©, canne Ã  sucre, huile de palme, cultures maraÃ®chÃ¨res.'],
        ['Quelles productions industrielles et Ã©nergÃ©tiques ?','Barrages dâ€™Inga et de Zongo, cimenterie de Lukala (CILU) et de Kimpese (CINAT), raffinerie SOCIR et pÃ©trole de Muanda, sucrerie de Kwilu-Ngongo.'],
        ['Quels gisements ne sont pas exploitÃ©s ?','Or, bauxite, mercure.'],
        ['Quels sont les sites touristiques ?','Jardin botanique de Kisantu, grottes de Mbanza-Ngungu, parc marin des Mangroves, plages de Moanda.'],
        ['Quelle est sa place dans le pays ?','Porte dâ€™entrÃ©e et de sortie des marchandises, rÃ©gion stratÃ©gique reliÃ©e Ã  Kinshasa par la route et le chemin de fer.'],
        ['Quelles perspectives dâ€™avenir ?','Port en eau profonde Ã  Banana, extension de lâ€™hydroÃ©lectricitÃ© (Inga) et exploitation des gisements.']
      ]),
      L('25','La ville de Kinshasa',[
        ['Quel est le statut de Kinshasa ?','Capitale et ville-province, au bord du Pool Malebo, face Ã  Brazzaville. DivisÃ©e en quatre districts et 24 communes.'],
        ['Quelle est sa spÃ©cificitÃ© ?','Premier pÃ´le Ã©conomique du pays (concentration des industries manufacturiÃ¨res) et grand centre universitaire.'],
        ['Quelles sont ses activitÃ©s Ã©conomiques ?','Production industrielle (brasserie, textile, alimentaire), premier centre commercial, agriculture pÃ©riurbaine et cultures maraÃ®chÃ¨res.'],
        ['Quels sont les sites touristiques ?','CitÃ© de la Nâ€™sele, jardin botanique et zoologique, rapides de Kinsuka, chutes de la Lukunga, Joli Site, sports nautiques.'],
        ['Comment se caractÃ©rise la croissance de la ville ?','Une croissance dÃ©mographique et spatiale trÃ¨s rapide (plus de 10 millions dâ€™habitants), due Ã  la natalitÃ© et Ã  lâ€™exode rural.'],
        ['Quelles en sont les consÃ©quences ?','Habitat spontanÃ©, Ã©rosion et ravinement, manque dâ€™eau et dâ€™Ã©lectricitÃ©, embouteillages, chÃ´mage, insalubritÃ©, insÃ©curitÃ©.'],
        ['Quelles perspectives ?','Planification urbaine, assainissement, transports collectifs, dÃ©centralisation Ã©conomique pour dÃ©sengorger la capitale.'],
        ['Quel fait remarquable lie Kinshasa Ã  Brazzaville ?','Ce sont deux capitales voisines sÃ©parÃ©es seulement par le fleuve, parmi les plus proches du monde.']
      ]),
      L('27','Le KasaÃ¯ Occidental',[
        ['Quel est le chef-lieu du KasaÃ¯ Occidental ?','Kananga (aujourdâ€™hui chef-lieu du KasaÃ¯-Central ; Tshikapa est le chef-lieu du KasaÃ¯).'],
        ['Quelle est sa spÃ©cificitÃ© ?','Lâ€™exploitation artisanale du diamant (Tshikapa).'],
        ['Quel est son artisanat ?','Le tissu Â« velours Â» (kuba) et la sculpture luba et tshokwe.'],
        ['Quelles autres activitÃ©s Ã©conomiques ?','Produits agricoles (manioc, maÃ¯s, palmier Ã  huile, arachide) et quelques productions industrielles.'],
        ['Quels sont les sites touristiques ?','Lac Mukamba, chutes Katende, parc de la Salonga.'],
        ['Quels sont sa place et ses problÃ¨mes ?','Province diamantifÃ¨re mais enclavÃ©e : routes dÃ©gradÃ©es, fraude diamantaire, faible industrialisation.']
      ]),
      L('28','Le KasaÃ¯ Oriental',[
        ['Quel est le chef-lieu du KasaÃ¯ Oriental ?','Mbuji-Mayi, lâ€™une des plus grandes villes du pays.'],
        ['Quelle est sa spÃ©cificitÃ© ?','Câ€™est une province diamantifÃ¨re.'],
        ['Quâ€™est-ce que la MIBA ?','La SociÃ©tÃ© miniÃ¨re de Bakwanga, principale sociÃ©tÃ© diamantifÃ¨re du pays, installÃ©e Ã  Mbuji-Mayi.'],
        ['Quelles autres activitÃ©s Ã©conomiques ?','Produits agricoles, productions industrielles et hydroÃ©lectricitÃ© (Lubilanji).'],
        ['Quels sont les sites touristiques ?','Le lac Mukamba et la MIBA.'],
        ['Quels sont ses problÃ¨mes ?','Enclavement, Ã©rosion (ravins), croissance de la ville, problÃ¨me foncier.']
      ]),
      L('29','Le Nord-Kivu',[
        ['Quel est le chef-lieu du Nord-Kivu ?','Goma, sur le lac Kivu, au pied du volcan Nyiragongo.'],
        ['Quelle est sa spÃ©cificitÃ© ?','RÃ©gion touristique par excellence : parcs des Virunga et de la MaÃ¯ko, lacs, volcans, eaux chaudes.'],
        ['Quelles autres activitÃ©s Ã©conomiques ?','Agriculture (pommes de terre, haricots, cafÃ©, thÃ©), Ã©levage, productions industrielles, mines (coltan, cassitÃ©rite, or).'],
        ['Quelle est sa place dans le pays ?','Fournisseur de viande, de pommes de terre et de haricots.'],
        ['Quels sont ses problÃ¨mes ?','Transport difficile, problÃ¨mes ethniques et de frontiÃ¨res, absence de districts autonomes, insÃ©curitÃ©.'],
        ['Quel risque volcanique menace Goma ?','Le Nyiragongo a dÃ©truit une partie de Goma en 2002 et a fait de nouveau Ã©ruption en 2021.'],
        ['Quelles villes sont commerciales ?','Goma, Butembo et Beni (les trois villes de la province).']
      ]),
      L('30','Le Sud-Kivu',[
        ['Quel est le chef-lieu du Sud-Kivu ?','Bukavu, sur le lac Kivu.'],
        ['Quelle est sa spÃ©cificitÃ© ?','Le tourisme : lac Kivu, Ã®le dâ€™Idjwi, parc de Kahuzi-Biega (mont Kahuzi et mont Biega).'],
        ['Quelles sont ses autres activitÃ©s Ã©conomiques ?','Agriculture (cafÃ©, thÃ©, quinquina, banane), Ã©levage, mines (or, cassitÃ©rite), industrie, hydroÃ©lectricitÃ© (Ruzizi I et II).'],
        ['Quelle est sa place dans le pays ?','Comme le Nord-Kivu, fournisseur de viande, de pommes de terre et de haricots.'],
        ['Quels sont ses problÃ¨mes ?','ProblÃ¨mes ethniques et de frontiÃ¨re, absence de districts autonomes, enclavement routier, insÃ©curitÃ©.'],
        ['Quel est le port du Sud-Kivu sur le lac Tanganyika ?','Uvira.']
      ]),
      L('31','Le Maniema',[
        ['Quel est le chef-lieu du Maniema ?','Kindu, sur le fleuve Lualaba.'],
        ['Quelle est sa spÃ©cificitÃ© ?','Câ€™est une province essentiellement agricole et enclavÃ©e (Maniema signifie Â« forÃªt galerie Â»).'],
        ['Quelles sont ses cultures principales ?','Riz, maÃ¯s, manioc, palmier Ã  huile, cafÃ©.'],
        ['Quelles autres activitÃ©s Ã©conomiques ?','Mines (or, cassitÃ©rite, coltan), industrie, hydroÃ©lectricitÃ©, et liaison ferroviaire Kinduâ€“Kabaloâ€“Lubumbashi.'],
        ['Quel site touristique le programme cite-t-il ?','Le parc de la MaÃ¯ko.'],
        ['Quels sont ses problÃ¨mes ?','Enclavement, absence de districts autonomes, faibles infrastructures.']
      ]),
      L('32','Lâ€™Ã‰quateur',[
        ['Quel est le chef-lieu de lâ€™Ã‰quateur ?','Mbandaka, sur le fleuve Congo, ville traversÃ©e par la ligne de lâ€™Ã©quateur.'],
        ['Quelle est sa spÃ©cificitÃ© ?','Province essentiellement agricole (cafÃ©, cacao, hÃ©vÃ©a, palmier, banane plantain, manioc, riz), avec de nombreuses voies navigables et de la pÃªche.'],
        ['Quelles richesses du sous-sol ne sont pas exploitÃ©es ?','Or, diamant et hydrocarbures.'],
        ['Quels sont les sites touristiques ?','Parcs et rÃ©serves (Salonga), chutes de Zongo, lacs (Tumba) et jardin botanique dâ€™Eala.'],
        ['Quelle est sa place dans le pays ?','Elle approvisionne Kinshasa (poisson, huile, banane plantain, bois) et abrite une rÃ©serve forestiÃ¨re classÃ©e patrimoine mondial.'],
        ['Quels sont ses problÃ¨mes ?','Enclavement intÃ©rieur, routes absentes, dÃ©pendance du transport fluvial.']
      ]),
      L('33','La Province Orientale',[
        ['Quel est le chef-lieu de la Province Orientale ?','Kisangani, sur le fleuve Congo (3e pÃ´le Ã©conomique selon le programme) ; chef-lieu de la Tshopo depuis le dÃ©coupage.'],
        ['Quelle est sa particularitÃ© ?','Dans lâ€™ancien dÃ©coupage, câ€™Ã©tait la plus vaste province du pays. Aujourdâ€™hui, la Tshopo est la plus vaste des 26 provinces (environ 199 600 kmÂ²).'],
        ['Quelles autres activitÃ©s Ã©conomiques ?','Mines (or de Kilo-Moto, diamants), industrie, hydroÃ©lectricitÃ© (Tshopo).'],
        ['Quels sont les sites touristiques ?','Parcs de la Garamba et de la MaÃ¯ko, rÃ©serve dâ€™Epulu (okapis), station de dressage dâ€™Ã©lÃ©phants de Gangala na Bodio, rapides des Wagenia, lacs.'],
        ['Qui sont les Wagenia ?','Des pÃªcheurs de Kisangani qui capturent le poisson avec des nasses installÃ©es sur les rapides du fleuve.'],
        ['Quels sont sa place et ses problÃ¨mes ?','Approvisionnement de Kinshasa, Â« province martyre Â» (guerres), exploitation forestiÃ¨re, problÃ¨mes de frontiÃ¨res.']
      ]),
      L('34','Le Katanga',[
        ['Quel est le chef-lieu du Katanga ?','Lubumbashi, deuxiÃ¨me ville du pays et deuxiÃ¨me pÃ´le Ã©conomique ; chef-lieu du Haut-Katanga.'],
        ['Quelle est la spÃ©cificitÃ© du Katanga ?','Province miniÃ¨re et industrielle : cuivre, cobalt, zinc, Ã©tain, uranium, manganÃ¨se, charbon.'],
        ['Quelles villes miniÃ¨res ?','Lubumbashi, Likasi, Kolwezi (centre de la rÃ©gion cuprifÃ¨re avec 80 % des rÃ©serves), Kipushi.'],
        ['Quelle hydroÃ©lectricitÃ© ?','Barrages de Mwadingusha et Koni (sur la Lufira), Nzilo, Nseke et Mukula (sur le Lualaba).'],
        ['Quels produits agricoles ?','MaÃ¯s, manioc, haricots ; Ã©levage sur les hauts plateaux.'],
        ['Quels sont les sites touristiques ?','Parcs de lâ€™Upemba et du Kundelungu, lacs Moero et Tanganyika, chutes de la Lofoi.'],
        ['Quelle est sa place dans le pays ?','Poumon Ã©conomique du pays, mais dÃ©pendant des mines, avec pollution, Ã©loignement de Kinshasa et transport coÃ»teux.'],
        ['Par oÃ¹ sortent souvent les minerais ?','Par les lignes de la KDL et les ports de Durban, Dar es Salaam, Beira et Lobito.'],
        ['En combien de provinces le Katanga a-t-il Ã©tÃ© divisÃ© ?','En quatre : Haut-Katanga, Lualaba, Haut-Lomami et Tanganyika.']
      ])
    ]},

    { t:'Chapitre V. Les perspectives dâ€™avenir', free:false, ls:[
      L('35','Agriculture : perspectives',[
        ['Quelle est la situation actuelle de lâ€™agriculture ?','Potentiel Ã©norme (environ 80 millions dâ€™hectares de terres arables, dont une faible part est cultivÃ©e), mais production insuffisante et dÃ©pendance aux importations alimentaires.'],
        ['Quels efforts de dÃ©veloppement ?','Relance des plantations, parcs agro-industriels (Bukanga Lonzo), semences amÃ©liorÃ©es, appui aux paysans et dÃ©senclavement des zones de production.'],
        ['Comment critiquer lâ€™organisation actuelle ?','Agriculture de subsistance, outils rudimentaires, faible encadrement, accÃ¨s difficile aux marchÃ©s et au crÃ©dit, insÃ©curitÃ© fonciÃ¨re.'],
        ['Quelles solutions proposer ?','Routes de desserte, mÃ©canisation, intrants, crÃ©dit agricole, formation, conservation et transformation sur place, sÃ©curitÃ©.']
      ]),
      L('36','Industrie : perspectives',[
        ['Quelle est la situation actuelle de lâ€™industrie ?','Faible, concentrÃ©e, peu intÃ©grÃ©e (environ 13 % de la main-dâ€™Å“uvre) ; forte importation de produits finis.'],
        ['Quels efforts de dÃ©veloppement ?','RÃ©habilitation dâ€™entreprises, zones Ã©conomiques spÃ©ciales (Maluku, Nâ€™sele), code des investissements, projets Ã©nergÃ©tiques (Inga).'],
        ['Pourquoi transformer les ressources sur place ?','Cela crÃ©e de la valeur ajoutÃ©e et des emplois, et rÃ©duit la dÃ©pendance aux importations.'],
        ['Que doit-on montrer sur lâ€™exploitation des ressources ?','Par quoi (quels moyens), pour qui et comment elles sont exploitÃ©es : souvent par des sociÃ©tÃ©s Ã©trangÃ¨res et pour lâ€™exportation. La population doit en tirer un bÃ©nÃ©fice.']
      ]),
      L('37','Infrastructures de base',[
        ['Quelle est la situation des transports et quels efforts ?','RÃ©seau vÃ©tuste et insuffisant. Programmes de rÃ©habilitation des routes, du rail et des ports, et ouverture de corridors.'],
        ['Quelle est la situation de la santÃ© et quels efforts ?','Manque de structures et de personnel. Extension des zones de santÃ©, vaccination, lutte contre les Ã©pidÃ©mies.'],
        ['Quelle est la situation de lâ€™enseignement et quels efforts ?','Ã‰coles insuffisantes et mal Ã©quipÃ©es. GratuitÃ© du primaire en 2019, construction dâ€™Ã©coles, formation des enseignants.'],
        ['Pourquoi les infrastructures conditionnent-elles le dÃ©veloppement ?','Sans routes, Ã©nergie, Ã©coles et hÃ´pitaux, ni lâ€™agriculture, ni lâ€™industrie, ni le capital humain ne peuvent progresser.']
      ]),
      L('38','Tourisme : perspectives',[
        ['Quelle est la situation actuelle du tourisme ?','Potentiel immense (parcs, volcans, fleuve, lacs, culture) mais trÃ¨s peu exploitÃ© : peu de visiteurs, insÃ©curitÃ© et Ã©quipements insuffisants.'],
        ['Quels efforts de dÃ©veloppement ?','RÃ©habilitation des parcs et des infrastructures, protection par lâ€™ICCN, partenariats (par exemple Ã  Virunga), promotion du pays.'],
        ['Que faut-il pour dÃ©velopper le tourisme ?','SÃ©curitÃ©, routes et aÃ©roports, hÃ´tels, formation de guides, promotion Ã  lâ€™Ã©tranger, protection de la faune.']
      ]),
      L('39','La RDC et ses partenaires Ã©conomiques',[
        ['Quels sont les principaux partenaires Ã©conomiques de la RDC ?','Belgique, Union europÃ©enne, Chine, Japon, Canada et Afrique du Sud (lâ€™ordre varie selon les annÃ©es).'],
        ['De quelles organisations africaines la RDC est-elle membre ?','Union africaine, SADC, COMESA, CEEAC, CEPGL et, depuis 2022, la CommunautÃ© dâ€™Afrique de lâ€™Est (EAC).'],
        ['Quels efforts dâ€™intÃ©gration ?','AdhÃ©sion aux groupements rÃ©gionaux, corridors de transport, projets Ã©nergÃ©tiques communs (Ruzizi, Inga) et accords commerciaux.'],
        ['Pourquoi diversifier les partenaires ?','Pour rÃ©duire la dÃ©pendance Ã  un seul client, obtenir de meilleurs prix et attirer des investissements variÃ©s.']
      ])
    ]}
  ]},

  { t:'DeuxiÃ¨me partie : lâ€™Afrique contemporaine', ch:[

    { t:'Chapitre I. GÃ©nÃ©ralitÃ©s', free:true, ls:[
      L('40','PrÃ©sentation de lâ€™Afrique',[
        ['OÃ¹ se situe lâ€™Afrique ?','Entre la MÃ©diterranÃ©e au nord, lâ€™Atlantique Ã  lâ€™ouest, lâ€™ocÃ©an Indien et la mer Rouge Ã  lâ€™est. Elle est traversÃ©e par lâ€™Ã©quateur, le tropique du Cancer et le tropique du Capricorne.'],
        ['Quelle est la superficie de lâ€™Afrique ?','Environ 30,3 millions de kmÂ² : troisiÃ¨me continent aprÃ¨s lâ€™Asie et lâ€™AmÃ©rique (deuxiÃ¨me aprÃ¨s lâ€™Asie si lâ€™on sÃ©pare les deux AmÃ©riques). Longueur dâ€™environ 8 000 km (cap Bon au cap des Aiguilles).'],
        ['Combien dâ€™Ã‰tats compte lâ€™Afrique ?','54 Ã‰tats reconnus par lâ€™ONU. Lâ€™Union africaine compte 55 membres.'],
        ['Quels sont les grands records du continent ?','Plus haut sommet : Kilimandjaro (5 895 m, Tanzanie). Plus long fleuve : le Nil. Plus grand lac : Victoria. Plus grand dÃ©sert chaud : le Sahara.'],
        ['Quels sont les grands ensembles rÃ©gionaux ?','Afrique du Nord, de lâ€™Ouest, centrale, de lâ€™Est et australe.'],
        ['Quels sont les atouts de lâ€™Afrique ?','Vastes terres arables, Ã©normes ressources miniÃ¨res et Ã©nergÃ©tiques, population jeune, potentiel solaire et hydroÃ©lectrique, biodiversitÃ© et tourisme.'],
        ['Quelles sont les contraintes ?','CalamitÃ©s naturelles (sÃ©cheresse, dÃ©sertification, inondations), maladies, conflits armÃ©s, moyens de communication insuffisants, hÃ©ritage de la traite et de la colonisation.'],
        ['Quelle diffÃ©rence entre Ã©pidÃ©mie, endÃ©mie et pandÃ©mie ?','Ã‰pidÃ©mie : poussÃ©e locale et temporaire (cholÃ©ra). EndÃ©mie : maladie prÃ©sente en permanence dans une rÃ©gion (paludisme). PandÃ©mie : Ã©pidÃ©mie Ã©tendue Ã  plusieurs continents (VIH/sida, COVID-19).'],
        ['Ã€ quoi sert lâ€™utilisation de la carte ?','Ã€ lire et dessiner les grands ensembles, Ã‰tats, fleuves et reliefs, pour localiser les faits gÃ©ographiques.']
      ]),
      L('41','Lâ€™Afrique dans le monde',[
        ['Quel est le poids dÃ©mographique de lâ€™Afrique ?','Plus de 1,3 Ã  1,4 milliard dâ€™habitants (environ 18 % de lâ€™humanitÃ©), le continent le plus jeune avec une densitÃ© moyenne dâ€™environ 43 hab./kmÂ².'],
        ['Quel est son poids Ã©conomique ?','Environ 3 % de la richesse mondiale (PIB), un poids faible comparÃ© Ã  sa population.'],
        ['Quel est le revenu par habitant ?','Le plus bas des continents en moyenne, avec de fortes inÃ©galitÃ©s entre pays riches (Seychelles) et trÃ¨s pauvres (Burundi).'],
        ['Quelle est la place de la technologie ?','Faible part de la recherche, des brevets et de lâ€™industrie de haute technologie : lâ€™Afrique est surtout importatrice de technologies.'],
        ['Quelles sont ses principales ressources ?','Cacao (CÃ´te dâ€™Ivoire 1re, environ 39 %, puis Ghana), cafÃ©, or, diamants, cobalt (RDC), platine (Afrique du Sud), pÃ©trole (Nigeria, Angola, AlgÃ©rie), phosphates (Maroc).'],
        ['Quelle est la nature de son commerce international ?','Elle exporte surtout des matiÃ¨res premiÃ¨res et importe des produits manufacturÃ©s ; sa part dans le commerce mondial nâ€™est que de quelques pour cent.'],
        ['Comment se compare-t-elle aux autres continents ?','Moins industrialisÃ©e que lâ€™Asie, lâ€™Europe et lâ€™AmÃ©rique du Nord, avec un faible niveau dâ€™intÃ©gration et dâ€™infrastructures.']
      ])
    ]},

    { t:'Chapitre II. Quelques Ã‰tats Ã©mergents', free:false, ls:[
      L('42','La RÃ©publique sud-africaine',[
        ['Pourquoi la RSA est-elle un Ã‰tat Ã©mergent ?','Ã‰conomie la plus industrialisÃ©e du continent, membre du G20 et des BRICS.'],
        ['Quelles sont les capitales de la RSA ?','Trois capitales : Pretoria (exÃ©cutif), Le Cap (lÃ©gislatif / Parlement) et Bloemfontein (judiciaire). La plus grande ville et capitale Ã©conomique est Johannesburg.'],
        ['Quel est son poids : peuplement et productions ?','Environ 60 millions dâ€™habitants ; or, platine, chrome, manganÃ¨se, diamants, charbon (environ 90 % des rÃ©serves africaines) ; maÃ¯s, fruits, vin ; industrie automobile, chimique et sidÃ©rurgique.'],
        ['Quels facteurs de puissance liÃ©s Ã  lâ€™industrie et au revenu ?','Industrie diversifiÃ©e, mines, services financiers et revenu par habitant parmi les plus Ã©levÃ©s dâ€™Afrique.'],
        ['Quel rÃ´le joue sa position gÃ©ographique ?','Pointe sud de lâ€™Afrique, sur la route du Cap entre Atlantique et ocÃ©an Indien (courants de Mozambique et Benguela favorables Ã  la pÃªche), avec de grands ports (Durban, Le Cap, Richards Bay).'],
        ['Quels facteurs de puissance liÃ©s aux infrastructures ?','RÃ©seaux routier (188 000 km) et ferroviaire (21 600 km) les plus denses dâ€™Afrique, rÃ©seau Ã©lectrique, universitÃ©s rÃ©putÃ©es et systÃ¨me de santÃ© dÃ©veloppÃ©.'],
        ['Quelles possibilitÃ©s de coopÃ©ration avec la RDC ?','Au sein de la SADC et de lâ€™UA : commerce, investissements miniers, projet Inga (achat dâ€™Ã©lectricitÃ©), Ã©changes de formation.'],
        ['Quelles contraintes du milieu physique ?','Relief (Drakensberg, plateaux) et ariditÃ© (Karoo, Kalahari, Namib) : lâ€™eau est rare.'],
        ['Comment lâ€™homme tire-t-il profit de ces contraintes ?','Barrages et transferts dâ€™eau (Orange, Lesotho), irrigation, Ã©levage de moutons dans le Karoo, mines profondes, tourisme, Ã©nergie solaire et Ã©olienne.'],
        ['Quâ€™est-ce que lâ€™apartheid ?','Un rÃ©gime de sÃ©grÃ©gation raciale (instaurÃ© en 1948, aboli officiellement en 1991). Nelson Mandela devient prÃ©sident en 1994 aprÃ¨s les premiÃ¨res Ã©lections multiraciales (Prix Nobel de la paix 1993).']
      ]),
      L('43','Le Nigeria',[
        ['OÃ¹ se situe le Nigeria et quelle est sa capitale ?','En Afrique de lâ€™Ouest, au fond du golfe de GuinÃ©e (superficie dâ€™environ 924 000 kmÂ², monnaie : le naira). Capitale : Abuja ; capitale Ã©conomique et grand port : Lagos.'],
        ['Quel est le poids dÃ©mographique et Ã©conomique du Nigeria ?','Pays le plus peuplÃ© dâ€™Afrique (plus de 200 millions dâ€™habitants, 36 Ã‰tats) et lâ€™une des premiÃ¨res Ã©conomies du continent.'],
        ['Quelles sont ses productions ?','PÃ©trole et gaz (delta du Niger, membre de lâ€™OPEP), cacao, arachide, huile de palme, coton, manioc, Ã©tain (plateau de Jos), charbon (Enugu), barrage de Kainji.'],
        ['Quels facteurs de puissance possÃ¨de-t-il ?','Ressources Ã©nergÃ©tiques, forÃªts, fleuves Niger et BÃ©nouÃ©, grands ports (Lagos, Port Harcourt), climats variÃ©s, position sur le golfe de GuinÃ©e et grand marchÃ© intÃ©rieur.'],
        ['Quelles sont ses contraintes ?','Conflits religieux et ethniques (Nord musulman, Sud chrÃ©tien), terrorisme au Nord-Est, corruption, dÃ©pendance au pÃ©trole, inÃ©galitÃ©s.'],
        ['Quels sont les peuples principaux ?','Haoussa-Peuls (Nord), Yoruba (Sud-Ouest), Igbo (Sud-Est).'],
        ['Quelles possibilitÃ©s de coopÃ©ration avec la RDC ?','Commerce, expÃ©rience dans la gestion du pÃ©trole et du gaz, investissements et coopÃ©ration diplomatique au sein de lâ€™Union africaine et de la CEDEAO.']
      ]),
      L('44','Lâ€™Ã‰gypte',[
        ['OÃ¹ se situe lâ€™Ã‰gypte et quelle est sa capitale ?','Au nord-est de lâ€™Afrique, entre MÃ©diterranÃ©e et mer Rouge (environ 1 002 000 kmÂ², plus de 100 millions dâ€™habitants). Capitale : Le Caire.'],
        ['Pourquoi dit-on que lâ€™Ã‰gypte est un Â« don du Nil Â» ?','La vie et lâ€™agriculture se concentrent dans la vallÃ©e et le delta du Nil, au milieu dâ€™un immense dÃ©sert.'],
        ['Quel est le poids de lâ€™Ã‰gypte ?','Coton, riz, blÃ©, canne Ã  sucre ; pÃ©trole et gaz ; tourisme ; industrie textile et sidÃ©rurgie.'],
        ['Quel rÃ´le joue lâ€™hydrographie ?','Le Nil fournit lâ€™eau, lâ€™irrigation, la navigation et lâ€™Ã©lectricitÃ© (haut barrage dâ€™Assouan, lac Nasser). La RDC et lâ€™Ã‰gypte partagent le bassin du Nil (via la Semliki).'],
        ['Quel est lâ€™intÃ©rÃªt de sa position stratÃ©gique ?','Le canal de Suez (ouvert en 1869 Ã  travers lâ€™isthme de Suez) relie la MÃ©diterranÃ©e et la mer Rouge : source majeure de revenus et lien entre lâ€™Europe et lâ€™Asie.'],
        ['Quel rÃ´le jouent lâ€™histoire et le tourisme ?','Pyramides de Gizeh, Louxor, Karnak, vallÃ©e des Rois : hÃ©ritage de la civilisation pharaonique, qui attire des millions de visiteurs.'],
        ['Quelles sont les contraintes de lâ€™Ã‰gypte ?','Le dÃ©sert (la grande majoritÃ© du territoire) et lâ€™ariditÃ©.'],
        ['Comment lâ€™Ã‰gypte a-t-elle surmontÃ© ses contraintes ?','Irrigation par canaux et barrages, mise en valeur de terres dÃ©sertiques, dessalement, revenus du canal de Suez et du tourisme.'],
        ['Quelles possibilitÃ©s de coopÃ©ration avec la RDC ?','Au sein de lâ€™UA et du COMESA : commerce, expertise en barrages et irrigation, investissements.']
      ])
    ]},

    { t:'Chapitre III. Les perspectives de dÃ©veloppement', free:false, ls:[
      L('45','Ressources agricoles',[
        ['Quel est le niveau de mise en valeur agricole de lâ€™Afrique ?','Faible : agriculture peu mÃ©canisÃ©e, trÃ¨s peu de terres irriguÃ©es, rendements bas. Lâ€™Afrique importe du blÃ© et du riz alors quâ€™elle possÃ¨de une grande part des terres arables non cultivÃ©es du monde.'],
        ['Quels efforts de dÃ©veloppement ?','PDDAA du NEPAD (2003), engagement de Maputo de consacrer 10 % des budgets Ã  lâ€™agriculture, irrigation, semences amÃ©liorÃ©es, coopÃ©ratives, agro-industries.'],
        ['Quâ€™est-ce que le NEPAD ?','Le Nouveau partenariat pour le dÃ©veloppement de lâ€™Afrique, lancÃ© en 2001 par lâ€™Union africaine.'],
        ['Comment critiquer lâ€™organisation actuelle ?','Agriculture de subsistance, dÃ©pendance de la pluie, faible financement, exportation de produits bruts, accÃ¨s difficile Ã  la terre et aux marchÃ©s.'],
        ['Quels remÃ¨des proposer ?','Irrigation, mÃ©canisation, crÃ©dit, formation, routes rurales, stockage et transformation, intÃ©gration des marchÃ©s africains.']
      ]),
      L('46','Ressources miniÃ¨res et Ã©nergÃ©tiques',[
        ['Quel est le niveau de mise en valeur miniÃ¨re ?','RÃ©serves considÃ©rables (cobalt, platine, manganÃ¨se, chrome, diamants, bauxite, phosphates) mais exportÃ©es surtout Ã  lâ€™Ã©tat brut, avec peu de transformation.'],
        ['Quelle est la situation Ã©nergÃ©tique ?','PÃ©trole et gaz (Nigeria, Angola, AlgÃ©rie, Libye), hydroÃ©lectricitÃ© (Inga, Assouan), solaire, gÃ©othermie (Kenya). Environ 600 millions dâ€™Africains nâ€™ont pas lâ€™Ã©lectricitÃ©.'],
        ['Quels efforts de dÃ©veloppement ?','Vision miniÃ¨re africaine (2009), transformation locale, pools Ã©nergÃ©tiques rÃ©gionaux (SAPP, WAPP), projets solaires et hydroÃ©lectriques.'],
        ['Quelle critique faire de lâ€™organisation actuelle ?','Exploitation dominÃ©e par des firmes Ã©trangÃ¨res, faibles retombÃ©es locales, pollution, conflits liÃ©s aux ressources.'],
        ['Quels remÃ¨des proposer ?','Industrialiser sur place, renÃ©gocier les contrats, investir dans lâ€™Ã©nergie renouvelable et interconnecter les rÃ©seaux.']
      ]),
      L('47','Ã‰quipements : transport, enseignement, santÃ©',[
        ['Quel est le niveau des transports ?','RÃ©seaux peu denses, hÃ©ritÃ©s de la colonisation, tournÃ©s vers les ports et peu interconnectÃ©s entre pays.'],
        ['Quels efforts pour les transports ?','Programme PIDA de lâ€™UA, routes transafricaines, nouveaux chemins de fer (Ã‰thiopieâ€“Djibouti, Kenya), ports, cÃ¢bles sous-marins pour internet.'],
        ['Quelle est la situation de lâ€™enseignement ?','Scolarisation en progrÃ¨s, mais manque dâ€™enseignants, de classes et de qualitÃ© ; forte demande de formation technique et supÃ©rieure.'],
        ['Quelle est la situation de la santÃ© ?','Manque de personnel et de structures. Africa CDC (2017) coordonne la lutte contre les Ã©pidÃ©mies.'],
        ['Quâ€™est-ce que lâ€™Agenda 2063 ?','Le cadre de dÃ©veloppement de lâ€™UA (adoptÃ© en 2013) pour une Afrique intÃ©grÃ©e, prospÃ¨re et en paix dâ€™ici 2063.']
      ]),
      L('48-49','Regroupements rÃ©gionaux et continentaux',[
        ['Quand et oÃ¹ lâ€™OUA a-t-elle Ã©tÃ© crÃ©Ã©e ? Par quoi a-t-elle Ã©tÃ© remplacÃ©e ?','Lâ€™OUA est crÃ©Ã©e le 25 mai 1963 Ã  Addis-Abeba (32 Ã‰tats). RemplacÃ©e par lâ€™Union africaine, lancÃ©e le 8 juillet 2002 Ã  Durban (siÃ¨ge Ã  Addis-Abeba ; 55 membres).'],
        ['Quels sont les buts de lâ€™UA ?','UnitÃ© et solidaritÃ©, paix et sÃ©curitÃ©, intÃ©gration Ã©conomique, dÃ©fense de la souverainetÃ©, dÃ©veloppement et droits de lâ€™homme.'],
        ['Quel est le siÃ¨ge de lâ€™UA et combien a-t-elle de membres ?','Addis-Abeba (Ã‰thiopie) ; 55 Ã‰tats membres.'],
        ['Quels sont les organes principaux de lâ€™UA ?','ConfÃ©rence des chefs dâ€™Ã‰tat, Conseil exÃ©cutif, Commission, Parlement panafricain, Conseil de paix et de sÃ©curitÃ©.'],
        ['Quâ€™est-ce que la CEDEAO ?','La CommunautÃ© Ã©conomique des Ã‰tats de lâ€™Afrique de lâ€™Ouest, crÃ©Ã©e par le traitÃ© de Lagos (1975) ; siÃ¨ge Ã  Abuja.'],
        ['Quâ€™est-ce que la SADC ?','La CommunautÃ© de dÃ©veloppement de lâ€™Afrique australe : crÃ©Ã©e en 1980 (SADCC), devenue SADC en 1992, siÃ¨ge Ã  Gaborone. La RDC en est membre depuis 1997.'],
        ['Quâ€™est-ce que la CEEAC ?','La CommunautÃ© Ã©conomique des Ã‰tats de lâ€™Afrique centrale, crÃ©Ã©e en 1983, siÃ¨ge Ã  Libreville. La RDC en est membre.'],
        ['Quâ€™est-ce que le COMESA ?','Le MarchÃ© commun de lâ€™Afrique orientale et australe (traitÃ© de 1993, en vigueur en 1994), siÃ¨ge Ã  Lusaka.'],
        ['Quâ€™est-ce que lâ€™EAC et lâ€™UMA ?','EAC : CommunautÃ© dâ€™Afrique de lâ€™Est (siÃ¨ge Arusha ; RDC membre depuis 2022). UMA : Union du Maghreb arabe (1989).'],
        ['Quâ€™est-ce que la CEPGL ?','La CommunautÃ© Ã©conomique des pays des Grands Lacs (1976) : Burundi, Rwanda et RDC.'],
        ['Quâ€™est-ce que la ZLECAf ?','La Zone de libre-Ã©change continentale africaine, lancÃ©e en 2018, Ã©changes effectifs depuis le 1er janvier 2021. Objectif : un marchÃ© unique africain.'],
        ['Quelles sont les Ã©tapes de lâ€™intÃ©gration Ã©conomique ?','Zone de libre-Ã©change, union douaniÃ¨re, marchÃ© commun, union Ã©conomique et monÃ©taire.'],
        ['Quel est le degrÃ© dâ€™intÃ©gration en Afrique ?','Faible : le commerce entre pays africains ne reprÃ©sente quâ€™environ 15 % de leurs Ã©changes.'],
        ['Quels sont les problÃ¨mes de lâ€™intÃ©gration ?','Appartenances multiples, barriÃ¨res douaniÃ¨res, manque dâ€™infrastructures, conflits, monnaies diffÃ©rentes, dÃ©pendance extÃ©rieure, manque de volontÃ© politique.'],
        ['Quels remÃ¨des proposer ?','ZLECAf, infrastructures communes, libre circulation des personnes, harmonisation des rÃ¨gles, industrialisation, paix et bonne gouvernance.'],
        ['Que signifie lâ€™indÃ©pendance dans la prise de dÃ©cision ?','Compter davantage sur ses propres ressources pour dÃ©cider librement, au lieu de dÃ©pendre de lâ€™aide et des conditions extÃ©rieures.'],
        ['Quâ€™est-ce que la culture de la paix ?','PrÃ©venir et rÃ©gler les conflits par le dialogue et la mÃ©diation : une condition du dÃ©veloppement et de lâ€™intÃ©gration.'],
        ['Quâ€™est-ce que la BAD ?','La Banque africaine de dÃ©veloppement (1964), siÃ¨ge Ã  Abidjan : elle finance des projets de dÃ©veloppement.']
      ]),
      L('50-51','Partenaires de lâ€™Afrique et Ã©changes internationaux',[
        ['Quels sont les pays partenaires commerciaux de lâ€™Afrique ?','Ã‰tats-Unis, Japon et Chine : aide au dÃ©veloppement, investissements, exportations et importations.'],
        ['Quel rÃ´le joue la Chine ?','Premier partenaire commercial de lâ€™Afrique ; forum FOCAC depuis 2000 ; elle investit dans routes, rails, ports et mines, en Ã©change de matiÃ¨res premiÃ¨res.'],
        ['Quel rÃ´le joue le Japon ?','La confÃ©rence TICAD (depuis 1993) : aide au dÃ©veloppement, infrastructures et formation.'],
        ['Quels rÃ´le jouent les Ã‰tats-Unis ?','Aide, investissements et loi AGOA (2000) qui ouvrait leur marchÃ© Ã  certains produits africains.'],
        ['Quelle est lâ€™origine de lâ€™Union europÃ©enne et ses objectifs ?','NÃ©e des CommunautÃ©s europÃ©ennes (CECA en 1951, traitÃ© de Rome en 1957), devenue UE par le traitÃ© de Maastricht (1992). Objectifs : marchÃ© unique, euro, paix, politiques communes.'],
        ['Combien de membres compte lâ€™UE ? Citez-en quelques-uns.','27 Ã‰tats : Allemagne, France, Italie, Belgique, Pays-Bas, Espagneâ€¦'],
        ['Quelle est la relation entre lâ€™UE et lâ€™Afrique ?','Lâ€™UE reste le premier partenaire en bloc et un grand bailleur dâ€™aide ; accords de LomÃ© (1975) puis de Cotonou (2000).'],
        ['Quâ€™est-ce que lâ€™OCDE ?','Lâ€™Organisation de coopÃ©ration et de dÃ©veloppement Ã©conomiques, crÃ©Ã©e en 1961, siÃ¨ge Ã  Paris, 38 membres surtout dÃ©veloppÃ©s. Son CAD coordonne lâ€™aide au dÃ©veloppement.'],
        ['Quels sont les organismes de financement ?','Le FMI (stabilitÃ© monÃ©taire, prÃªts aux Ã‰tats en difficultÃ©) et la Banque mondiale (financement de projets de dÃ©veloppement), nÃ©s Ã  Bretton Woods (1944), siÃ¨ge Ã  Washington.'],
        ['Quels sont les organismes de soutien et leur domaine ?','OMS (santÃ©), FAO (alimentation et agriculture), UNESCO (Ã©ducation, science, culture), PNUD (dÃ©veloppement humain).'],
        ['Quels sont les organismes africains ?','Union africaine, BAD, SADC, CEDEAO, etc.'],
        ['Quâ€™est-ce que lâ€™initiative PPTE ?','Un allÃ¨gement de la dette des pays pauvres trÃ¨s endettÃ©s. La RDC a atteint le point dâ€™achÃ¨vement en 2010.'],
        ['Quelle diffÃ©rence entre Ã©changes Nord-Sud et Sud-Sud ?','Nord-Sud : lâ€™Afrique exporte des matiÃ¨res premiÃ¨res vers le Nord et importe des produits finis. Sud-Sud : trÃ¨s faibles entre pays africains.'],
        ['Pourquoi les Ã©changes Sud-Sud sont-ils faibles ?','Ã‰conomies qui produisent les mÃªmes matiÃ¨res premiÃ¨res, mauvaises infrastructures, barriÃ¨res douaniÃ¨res, manque de financement et de produits transformÃ©s.'],
        ['Quâ€™est-ce que la mondialisation ?','Lâ€™interdÃ©pendance croissante des Ã©conomies, avec la circulation des marchandises, capitaux, informations et personnes Ã  lâ€™Ã©chelle du monde.'],
        ['Quâ€™est-ce que la rÃ©gionalisation ?','Le regroupement dâ€™Ã‰tats voisins en blocs Ã©conomiques pour mieux peser dans le monde.'],
        ['Quels sont les effets de la mondialisation en Afrique ?','OpportunitÃ©s (marchÃ©s, technologies) mais risques : concurrence, dÃ©pendance, marginalisation.'],
        ['Quâ€™est-ce que la recomposition de lâ€™espace ?','La rÃ©organisation des espaces Ã©conomiques sous lâ€™effet des intÃ©grations rÃ©gionales, de la rÃ©gionalisation et de la mondialisation.']
      ])
    ]}
  ]}
];

// Enregistrement officiel du cours de gÃ©ographie dans Recto (sans doublon)
(function(){
  window.RECTO_COURSES = window.RECTO_COURSES || [];
  function normaliserParts(parts){
    return (parts || []).map(function(p){
      return {
        t: p.t,
        ch: (p.ch || []).map(function(ch){
          return {
            t: ch.t,
            free: !!ch.free,
            ls: (ch.ls || []).map(function(l){
              return {
                id: l.id,
                n: String(l.n),
                t: l.t,
                c: (l.c || []).map(function(item){
                  if (Array.isArray(item)) return { q: item[0], a: item[1] };
                  return item;
                })
              };
            })
          };
        })
      };
    });
  }
  var coursGeo = {
    id: "geo",
    name: "GÃ©ographie",
    sub: "RDC et Afrique contemporaine",
    heroTitle: "GÃ©ographie â€“ ExÃ©tat 2027",
    heroSub: "Programme officiel de 6e annÃ©e : RDC et Afrique contemporaine.",
    parts: normaliserParts(window.COURSE_GEO)
  };
  if (typeof window.RECTO_REGISTER_COURSE === "function") {
    window.RECTO_REGISTER_COURSE(coursGeo);
  } else {
    window.RECTO_COURSES = window.RECTO_COURSES.filter(function(c){ return c && c.id !== "geo"; });
    window.RECTO_COURSES.push(coursGeo);
  }
})();
