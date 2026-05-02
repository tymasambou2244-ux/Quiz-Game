var toutesLesQuestions = [
    // ===================== HISTOIRE (20 questions) =====================
    { question: "En quelle année la Révolution française a-t-elle débuté ?", choix: { A: "1776", B: "1789", C: "1792", D: "1804" }, bonneReponse: "B", theme: "Histoire" },
    { question: "Qui était le premier empereur de Chine ?", choix: { A: "Confucius", B: "Sun Tzu", C: "Qin Shi Huang", D: "Lao Tseu" }, bonneReponse: "C", theme: "Histoire" },
    { question: "Quel événement a déclenché la Première Guerre mondiale ?", choix: { A: "Naufrage du Titanic", B: "Assassinat de François-Ferdinand", C: "Bataille de Verdun", D: "Révolution russe" }, bonneReponse: "B", theme: "Histoire" },
    { question: "Qui a découvert l'Amérique en 1492 ?", choix: { A: "Vasco de Gama", B: "Magellan", C: "Christophe Colomb", D: "Amerigo Vespucci" }, bonneReponse: "C", theme: "Histoire" },
    { question: "Quel traité met fin à la Première Guerre mondiale ?", choix: { A: "Versailles", B: "Rome", C: "Maastricht", D: "Tordesillas" }, bonneReponse: "A", theme: "Histoire" },
    { question: "En quelle année le mur de Berlin est-il tombé ?", choix: { A: "1985", B: "1987", C: "1989", D: "1991" }, bonneReponse: "C", theme: "Histoire" },
    { question: "Quel pharaon a fait construire la grande pyramide de Gizeh ?", choix: { A: "Ramsès II", B: "Toutânkhamon", C: "Khéops", D: "Akhenaton" }, bonneReponse: "C", theme: "Histoire" },
    { question: "Quel empereur romain a fait bâtir un mur en Bretagne ?", choix: { A: "Néron", B: "Hadrien", C: "Auguste", D: "Caligula" }, bonneReponse: "B", theme: "Histoire" },
    { question: "Quelle ville fut ensevelie par le Vésuve en 79 ?", choix: { A: "Athènes", B: "Rome", C: "Pompéi", D: "Carthage" }, bonneReponse: "C", theme: "Histoire" },
    { question: "Qui fut la première femme à l'Académie française ?", choix: { A: "Simone de Beauvoir", B: "Marguerite Yourcenar", C: "George Sand", D: "Colette" }, bonneReponse: "B", theme: "Histoire" },
    { question: "Quel pays offrit la statue de la Liberté aux USA ?", choix: { A: "Royaume-Uni", B: "France", C: "Canada", D: "Italie" }, bonneReponse: "B", theme: "Histoire" },
    { question: "Le discours 'I have a dream' de Martin Luther King date de :", choix: { A: "1961", B: "1963", C: "1965", D: "1968" }, bonneReponse: "B", theme: "Histoire" },
    { question: "Quel empire a construit le Machu Picchu ?", choix: { A: "Aztèque", B: "Maya", C: "Inca", D: "Olmèque" }, bonneReponse: "C", theme: "Histoire" },
    { question: "Qui a peint la chapelle Sixtine ?", choix: { A: "Léonard de Vinci", B: "Raphaël", C: "Michel-Ange", D: "Donatello" }, bonneReponse: "C", theme: "Arts" },
    { question: "Quel roi de France était surnommé le Roi-Soleil ?", choix: { A: "Louis XIII", B: "Louis XIV", C: "Louis XV", D: "Louis XVI" }, bonneReponse: "B", theme: "Histoire" },
    { question: "Quelle bataille Napoléon perdit-il en 1815 ?", choix: { A: "Austerlitz", B: "Waterloo", C: "Iéna", D: "Wagram" }, bonneReponse: "B", theme: "Histoire" },
    { question: "Quelle civilisation ancienne vivait en Mésopotamie ?", choix: { A: "Égyptienne", B: "Sumérienne", C: "Grecque", D: "Romaine" }, bonneReponse: "B", theme: "Histoire" },
    { question: "Quel explorateur a réalisé le premier tour du monde ?", choix: { A: "Christophe Colomb", B: "Magellan", C: "James Cook", D: "Vasco de Gama" }, bonneReponse: "B", theme: "Histoire" },
    { question: "Quel événement déclencha la Seconde Guerre mondiale ?", choix: { A: "Invasion de la Pologne", B: "Attaque de Pearl Harbor", C: "Débarquement en Normandie", D: "Prise de Berlin" }, bonneReponse: "A", theme: "Histoire" },
    { question: "Qui était le dieu suprême de la mythologie grecque ?", choix: { A: "Arès", B: "Zeus", C: "Poséidon", D: "Hadès" }, bonneReponse: "B", theme: "Mythologie" },

    // ===================== GÉOGRAPHIE (25 questions) =====================
    { question: "Quel est le plus grand océan du monde ?", choix: { A: "Atlantique", B: "Indien", C: "Pacifique", D: "Arctique" }, bonneReponse: "C", theme: "Géographie" },
    { question: "Capitale du Canada ?", choix: { A: "Toronto", B: "Montréal", C: "Ottawa", D: "Vancouver" }, bonneReponse: "C", theme: "Géographie" },
    { question: "Plus grand exportateur de café ?", choix: { A: "Colombie", B: "Brésil", C: "Vietnam", D: "Éthiopie" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Fleuve le plus long du monde ?", choix: { A: "Nil", B: "Amazone", C: "Mississippi", D: "Yangtsé" }, bonneReponse: "A", theme: "Géographie" },
    { question: "Pays possédant le plus de fuseaux horaires ?", choix: { A: "Russie", B: "États-Unis", C: "France", D: "Chine" }, bonneReponse: "C", theme: "Géographie" },
    { question: "Où se trouve Marrakech ?", choix: { A: "Égypte", B: "Tunisie", C: "Algérie", D: "Maroc" }, bonneReponse: "D", theme: "Géographie" },
    { question: "Pays le plus peuplé du monde ?", choix: { A: "Inde", B: "Chine", C: "USA", D: "Indonésie" }, bonneReponse: "A", theme: "Géographie" },
    { question: "La plus grande île du monde ?", choix: { A: "Madagascar", B: "Groenland", C: "Bornéo", D: "Australie" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Capitale de l'Australie ?", choix: { A: "Sydney", B: "Melbourne", C: "Canberra", D: "Perth" }, bonneReponse: "C", theme: "Géographie" },
    { question: "Plus grand désert du monde ?", choix: { A: "Sahara", B: "Gobi", C: "Antarctique", D: "Kalahari" }, bonneReponse: "C", theme: "Géographie" },
    { question: "Point culminant de l'Afrique ?", choix: { A: "Mont Kenya", B: "Kilimandjaro", C: "Mont Stanley", D: "Ras Dashan" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Lac le plus profond du monde ?", choix: { A: "Supérieur", B: "Baïkal", C: "Victoria", D: "Tanganyika" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Quel pays traverse l'équateur et le tropique du Capricorne ?", choix: { A: "Brésil", B: "Australie", C: "Congo", D: "Inde" }, bonneReponse: "A", theme: "Géographie" },
    { question: "Capitale du Japon ?", choix: { A: "Pékin", B: "Séoul", C: "Tokyo", D: "Bangkok" }, bonneReponse: "C", theme: "Géographie" },
    { question: "Quel détroit sépare l'Europe de l'Afrique ?", choix: { A: "Gibraltar", B: "Bosphore", C: "Dardanelles", D: "Ormuz" }, bonneReponse: "A", theme: "Géographie" },
    { question: "Pays du Père Noël (Laponie) ?", choix: { A: "Suède", B: "Norvège", C: "Finlande", D: "Danemark" }, bonneReponse: "C", theme: "Géographie" },
    { question: "Combien d'États composent les États-Unis ?", choix: { A: "48", B: "50", C: "52", D: "54" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Capitale de l'Espagne ?", choix: { A: "Barcelone", B: "Madrid", C: "Valence", D: "Séville" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Mer la plus salée du monde ?", choix: { A: "Mer Morte", B: "Mer Rouge", C: "Mer Méditerranée", D: "Mer Caspienne" }, bonneReponse: "A", theme: "Géographie" },
    { question: "Pays bordant à la fois l'Atlantique et le Pacifique en Amérique du Sud ?", choix: { A: "Brésil", B: "Colombie", C: "Chili", D: "Argentine" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Ville la plus peuplée d'Afrique ?", choix: { A: "Le Caire", B: "Lagos", C: "Kinshasa", D: "Johannesburg" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Quel pays a la plus grande superficie ?", choix: { A: "Russie", B: "Canada", C: "Chine", D: "USA" }, bonneReponse: "A", theme: "Géographie" },
    { question: "Capitale de la Turquie ?", choix: { A: "Istanbul", B: "Ankara", C: "Izmir", D: "Bursa" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Plus haute montagne du monde ?", choix: { A: "K2", B: "Everest", C: "Kangchenjunga", D: "Lhotse" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Pays des fjords ?", choix: { A: "Suède", B: "Norvège", C: "Finlande", D: "Islande" }, bonneReponse: "B", theme: "Géographie" },

    // ===================== SCIENCES (30 questions) =====================
    { question: "Élément le plus abondant dans l'univers ?", choix: { A: "Oxygène", B: "Carbone", C: "Hydrogène", D: "Hélium" }, bonneReponse: "C", theme: "Sciences" },
    { question: "Vitesse de la lumière dans le vide ?", choix: { A: "300 000 km/s", B: "150 000 km/s", C: "1 000 000 km/s", D: "30 000 km/s" }, bonneReponse: "A", theme: "Sciences" },
    { question: "Qui a formulé la relativité générale ?", choix: { A: "Newton", B: "Einstein", C: "Bohr", D: "Hawking" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Combien de planètes dans le système solaire ?", choix: { A: "7", B: "8", C: "9", D: "10" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Gaz à effet de serre majeur ?", choix: { A: "Oxygène", B: "Azote", C: "CO2", D: "Argon" }, bonneReponse: "C", theme: "Sciences" },
    { question: "Organe qui filtre le sang ?", choix: { A: "Cœur", B: "Reins", C: "Foie", D: "Poumons" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Plus petite unité de matière ?", choix: { A: "Molécule", B: "Atome", C: "Quark", D: "Électron" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Parent génétique le plus proche de l'homme ?", choix: { A: "Gorille", B: "Orang-outan", C: "Chimpanzé", D: "Bonobo" }, bonneReponse: "C", theme: "Sciences" },
    { question: "Métal liquide à température ambiante ?", choix: { A: "Fer", B: "Mercure", C: "Plomb", D: "Argent" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Nombre d'os du corps humain adulte ?", choix: { A: "156", B: "206", C: "256", D: "306" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Type du granite ?", choix: { A: "Sédimentaire", B: "Métamorphique", C: "Magmatique", D: "Volcanique" }, bonneReponse: "C", theme: "Sciences" },
    { question: "Combien de cœurs a une pieuvre ?", choix: { A: "1", B: "2", C: "3", D: "4" }, bonneReponse: "C", theme: "Nature" },
    { question: "Plus grand mammifère terrestre ?", choix: { A: "Rhinocéros", B: "Éléphant d'Afrique", C: "Hippopotame", D: "Girafe" }, bonneReponse: "B", theme: "Nature" },
    { question: "Quel animal est le plus rapide ?", choix: { A: "Lion", B: "Guépard", C: "Autruche", D: "Antilope" }, bonneReponse: "B", theme: "Nature" },
    { question: "Combien de dents a un humain adulte (sagesse comprises) ?", choix: { A: "28", B: "30", C: "32", D: "34" }, bonneReponse: "C", theme: "Sciences" },
    { question: "Quelle planète est surnommée la planète rouge ?", choix: { A: "Vénus", B: "Mars", C: "Jupiter", D: "Saturne" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Combien de temps met la Terre pour tourner autour du Soleil ?", choix: { A: "24 h", B: "30 jours", C: "365 jours", D: "12 ans" }, bonneReponse: "C", theme: "Sciences" },
    { question: "Gaz majoritaire dans l'atmosphère terrestre ?", choix: { A: "Oxygène", B: "Azote", C: "CO2", D: "Argon" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Quel savant a découvert la pénicilline ?", choix: { A: "Pasteur", B: "Fleming", C: "Curie", D: "Koch" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Quelle est la formule de l'eau ?", choix: { A: "H2O", B: "CO2", C: "NaCl", D: "CH4" }, bonneReponse: "A", theme: "Sciences" },
    { question: "Quelle planète est la plus proche du Soleil ?", choix: { A: "Vénus", B: "Mercure", C: "Terre", D: "Mars" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Combien de vertèbres cervicales chez l'homme ?", choix: { A: "5", B: "7", C: "12", D: "24" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Quel animal marin est un mammifère ?", choix: { A: "Requin", B: "Dauphin", C: "Thon", D: "Pieuvre" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Unité de mesure de la résistance électrique ?", choix: { A: "Volt", B: "Ampère", C: "Ohm", D: "Watt" }, bonneReponse: "C", theme: "Sciences" },
    { question: "Quel gaz les plantes absorbent-elles ?", choix: { A: "Oxygène", B: "Azote", C: "CO2", D: "Hélium" }, bonneReponse: "C", theme: "Sciences" },
    { question: "Quelle vitamine le soleil aide-t-il à synthétiser ?", choix: { A: "A", B: "B", C: "C", D: "D" }, bonneReponse: "D", theme: "Sciences" },
    { question: "Plus grand océan en superficie ?", choix: { A: "Atlantique", B: "Pacifique", C: "Indien", D: "Arctique" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Quel est le symbole chimique du potassium ?", choix: { A: "P", B: "Pt", C: "K", D: "Po" }, bonneReponse: "C", theme: "Sciences" },
    { question: "Quel cancer affecte les mélanocytes ?", choix: { A: "Carcinome", B: "Mélanome", C: "Lymphome", D: "Sarcome" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Quel est le plus gros organe du corps humain ?", choix: { A: "Cœur", B: "Foie", C: "Peau", D: "Cerveau" }, bonneReponse: "C", theme: "Sciences" },

    // ===================== ARTS & LITTÉRATURE (25 questions) =====================
    { question: "Auteur des 'Misérables' ?", choix: { A: "Zola", B: "Victor Hugo", C: "Flaubert", D: "Camus" }, bonneReponse: "B", theme: "Littérature" },
    { question: "Qui a peint 'La Joconde' ?", choix: { A: "Monet", B: "Van Gogh", C: "Léonard de Vinci", D: "Picasso" }, bonneReponse: "C", theme: "Arts" },
    { question: "Auteur de '1984' ?", choix: { A: "Huxley", B: "Orwell", C: "Bradbury", D: "Verne" }, bonneReponse: "B", theme: "Littérature" },
    { question: "Peintre des nymphéas ?", choix: { A: "Van Gogh", B: "Monet", C: "Cézanne", D: "Degas" }, bonneReponse: "B", theme: "Arts" },
    { question: "Auteur du 'Petit Prince' ?", choix: { A: "La Fontaine", B: "Saint-Exupéry", C: "Proust", D: "Verne" }, bonneReponse: "B", theme: "Littérature" },
    { question: "Mouvement surréaliste associé à Dalí ?", choix: { A: "Impressionnisme", B: "Cubisme", C: "Surréalisme", D: "Pop art" }, bonneReponse: "C", theme: "Arts" },
    { question: "Pièce où apparaît Hamlet ?", choix: { A: "Macbeth", B: "Roméo et Juliette", C: "Hamlet", D: "Othello" }, bonneReponse: "C", theme: "Littérature" },
    { question: "Compositeur des 'Quatre Saisons' ?", choix: { A: "Bach", B: "Vivaldi", C: "Mozart", D: "Beethoven" }, bonneReponse: "B", theme: "Musique" },
    { question: "Qui a écrit 'L'Étranger' ?", choix: { A: "Sartre", B: "Camus", C: "Beauvoir", D: "Kafka" }, bonneReponse: "B", theme: "Littérature" },
    { question: "Quel artiste a peint le plafond de l'Opéra Garnier ?", choix: { A: "Chagall", B: "Picasso", C: "Matisse", D: "Braque" }, bonneReponse: "A", theme: "Arts" },
    { question: "Auteur du 'Rouge et le Noir' ?", choix: { A: "Balzac", B: "Stendhal", C: "Flaubert", D: "Maupassant" }, bonneReponse: "B", theme: "Littérature" },
    { question: "Quelle œuvre a rendu Van Gogh célèbre ?", choix: { A: "La Nuit étoilée", B: "Les Tournesols", C: "La Chambre à coucher", D: "Iris" }, bonneReponse: "A", theme: "Arts" },
    { question: "Qui a écrit 'Madame Bovary' ?", choix: { A: "Zola", B: "Flaubert", C: "Balzac", D: "Stendhal" }, bonneReponse: "B", theme: "Littérature" },
    { question: "Quel célèbre tableau représente des montres molles ?", choix: { A: "Guernica", B: "La Persistance de la mémoire", C: "Les Demoiselles d'Avignon", D: "Le Cri" }, bonneReponse: "B", theme: "Arts" },
    { question: "Qui a composé 'La Symphonie inachevée' ?", choix: { A: "Mozart", B: "Schubert", C: "Beethoven", D: "Haydn" }, bonneReponse: "B", theme: "Musique" },
    { question: "Auteur de 'Voyage au centre de la Terre' ?", choix: { A: "H.G. Wells", B: "Jules Verne", C: "Edgar Poe", D: "Huxley" }, bonneReponse: "B", theme: "Littérature" },
    { question: "Qui a peint 'Les Ménines' ?", choix: { A: "Goya", B: "Vélasquez", C: "El Greco", D: "Murillo" }, bonneReponse: "B", theme: "Arts" },
    { question: "Roman dystopique de Margaret Atwood ?", choix: { A: "1984", B: "Le Meilleur des mondes", C: "La Servante écarlate", D: "Fahrenheit 451" }, bonneReponse: "C", theme: "Littérature" },
    { question: "Quel groupe a chanté 'Bohemian Rhapsody' ?", choix: { A: "Beatles", B: "Queen", C: "Led Zeppelin", D: "Pink Floyd" }, bonneReponse: "B", theme: "Musique" },
    { question: "Compositeur sourd célèbre ?", choix: { A: "Bach", B: "Mozart", C: "Beethoven", D: "Chopin" }, bonneReponse: "C", theme: "Musique" },
    { question: "Auteur de 'Crime et Châtiment' ?", choix: { A: "Tolstoï", B: "Dostoïevski", C: "Tchekhov", D: "Gogol" }, bonneReponse: "B", theme: "Littérature" },
    { question: "Quel musée abrite la Joconde ?", choix: { A: "British Museum", B: "Louvre", C: "Metropolitan", D: "Prado" }, bonneReponse: "B", theme: "Arts" },
    { question: "Qui a écrit 'Le Vieil Homme et la Mer' ?", choix: { A: "Fitzgerald", B: "Hemingway", C: "Steinbeck", D: "Faulkner" }, bonneReponse: "B", theme: "Littérature" },
    { question: "Instrument associé à Louis Armstrong ?", choix: { A: "Saxophone", B: "Trompette", C: "Piano", D: "Batterie" }, bonneReponse: "B", theme: "Musique" },
    { question: "Peintre de 'Guernica' ?", choix: { A: "Dalí", B: "Picasso", C: "Miró", D: "Braque" }, bonneReponse: "B", theme: "Arts" },

    // ===================== SPORTS (20 questions) =====================
    { question: "Joueurs sur un terrain de football ?", choix: { A: "9", B: "10", C: "11", D: "12" }, bonneReponse: "C", theme: "Sports" },
    { question: "Sport avec ballon ovale ?", choix: { A: "Basket", B: "Rugby", C: "Handball", D: "Volley" }, bonneReponse: "B", theme: "Sports" },
    { question: "Vainqueur Coupe du Monde 2022 ?", choix: { A: "France", B: "Brésil", C: "Allemagne", D: "Argentine" }, bonneReponse: "D", theme: "Sports" },
    { question: "Points d'un essai au rugby à XV ?", choix: { A: "2", B: "3", C: "5", D: "7" }, bonneReponse: "C", theme: "Sports" },
    { question: "Discipline de Michael Jordan ?", choix: { A: "Baseball", B: "Basket-ball", C: "Foot US", D: "Tennis" }, bonneReponse: "B", theme: "Sports" },
    { question: "Recordman du 100 m masculin ?", choix: { A: "Carl Lewis", B: "Usain Bolt", C: "Jesse Owens", D: "Tyson Gay" }, bonneReponse: "B", theme: "Sports" },
    { question: "Combien de sets pour gagner un match de tennis en Grand Chelem messieurs ?", choix: { A: "2", B: "3", C: "4", D: "5" }, bonneReponse: "B", theme: "Sports" },
    { question: "Pays hôte des JO 2024 ?", choix: { A: "Japon", B: "France", C: "USA", D: "Royaume-Uni" }, bonneReponse: "B", theme: "Sports" },
    { question: "Sport de Federer et Nadal ?", choix: { A: "Golf", B: "Tennis", C: "Squash", D: "Badminton" }, bonneReponse: "B", theme: "Sports" },
    { question: "Quel pays a gagné le plus de Coupes du Monde de foot ?", choix: { A: "Allemagne", B: "Brésil", C: "Argentine", D: "Italie" }, bonneReponse: "B", theme: "Sports" },
    { question: "Longueur d'un marathon ?", choix: { A: "42,195 km", B: "40 km", C: "50 km", D: "100 km" }, bonneReponse: "A", theme: "Sports" },
    { question: "Nombre de joueurs au basket sur le terrain ?", choix: { A: "4", B: "5", C: "6", D: "7" }, bonneReponse: "B", theme: "Sports" },
    { question: "Dans quel sport utilise-t-on un 'birdie' ?", choix: { A: "Tennis", B: "Golf", C: "Baseball", D: "Cricket" }, bonneReponse: "B", theme: "Sports" },
    { question: "Qui a gagné le Tour de France 2023 ?", choix: { A: "Pogacar", B: "Vingegaard", C: "Evenepoel", D: "Roglic" }, bonneReponse: "B", theme: "Sports" },
    { question: "Sport où l'on combat avec des gants rembourrés ?", choix: { A: "Boxe", B: "Karaté", C: "Judo", D: "Lutte" }, bonneReponse: "A", theme: "Sports" },
    { question: "Combien de points vaut un panier à 3 points ?", choix: { A: "2", B: "3", C: "4", D: "1" }, bonneReponse: "B", theme: "Sports" },
    { question: "Couleur du maillot jaune au Tour de France ?", choix: { A: "Jaune", B: "Vert", C: "Blanc", D: "À pois" }, bonneReponse: "A", theme: "Sports" },
    { question: "Quel pays a inventé le judo ?", choix: { A: "Chine", B: "Japon", C: "Corée", D: "Thaïlande" }, bonneReponse: "B", theme: "Sports" },
    { question: "Qui est la joueuse de tennis la mieux classée en 2023 ?", choix: { A: "Swiatek", B: "Sabalenka", C: "Gauff", D: "Ryabakina" }, bonneReponse: "A", theme: "Sports" },
    { question: "Combien de périodes au hockey sur glace ?", choix: { A: "2", B: "3", C: "4", D: "5" }, bonneReponse: "B", theme: "Sports" },

    // ===================== CINÉMA (20 questions) =====================
    { question: "Oscar du meilleur film 2024 ?", choix: { A: "Barbie", B: "Oppenheimer", C: "Killers of the Flower Moon", D: "Poor Things" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Réalisateur de 'Jurassic Park' ?", choix: { A: "Cameron", B: "Spielberg", C: "Scott", D: "Lucas" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Acteur d'Iron Man dans le MCU ?", choix: { A: "Chris Evans", B: "Robert Downey Jr.", C: "Hemsworth", D: "Ruffalo" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Film SF Los Angeles futuriste de 1982 ?", choix: { A: "Alien", B: "Blade Runner", C: "Star Wars", D: "Terminator" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Actrice dans 'Breakfast at Tiffany's' ?", choix: { A: "Monroe", B: "Hepburn", C: "Kelly", D: "Taylor" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Qui a réalisé 'Inception' ?", choix: { A: "Tarantino", B: "Nolan", C: "Fincher", D: "Scorsese" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Film de 1994 avec un prisonnier condamné à mort ?", choix: { A: "Le Parrain", B: "La Ligne verte", C: "Les Évadés", D: "Pulp Fiction" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Quelle actrice joue Hermione dans Harry Potter ?", choix: { A: "Emma Stone", B: "Emma Watson", C: "Bonnie Wright", D: "Evanna Lynch" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Qui a composé la musique de 'Star Wars' ?", choix: { A: "Hans Zimmer", B: "John Williams", C: "Danny Elfman", D: "Howard Shore" }, bonneReponse: "B", theme: "Musique" },
    { question: "Film d'animation avec un rat cuisinier ?", choix: { A: "Les Indestructibles", B: "Ratatouille", C: "Cars", D: "Toy Story" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Quel film met en scène un requin mangeur d'hommes ?", choix: { A: "Alien", B: "Les Dents de la mer", C: "Jurassic Park", D: "King Kong" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Acteur principal de 'Forrest Gump' ?", choix: { A: "Brad Pitt", B: "Tom Hanks", C: "Leonardo DiCaprio", D: "Denzel Washington" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Quelle saga comporte 'La Communauté de l'anneau' ?", choix: { A: "Harry Potter", B: "Le Seigneur des anneaux", C: "Star Wars", D: "Matrix" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Film de super-héros sorti en 2008 avec Iron Man ?", choix: { A: "The Dark Knight", B: "Iron Man", C: "Hulk", D: "Captain America" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Réalisateur de 'Pulp Fiction' ?", choix: { A: "Scorsese", B: "Tarantino", C: "Spielberg", D: "Coppola" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Dans quel film entend-on 'Je suis ton père' ?", choix: { A: "Le Parrain", B: "L'Empire contre-attaque", C: "2001 l'Odyssée", D: "Blade Runner" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Quel film a remporté l'Oscar du meilleur film en 2020 ?", choix: { A: "1917", B: "Parasite", C: "Joker", D: "Once Upon a Time" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Qui incarne le Joker en 2008 ?", choix: { A: "Jared Leto", B: "Heath Ledger", C: "Joaquin Phoenix", D: "Jack Nicholson" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Film avec un parc d'attractions de dinosaures ?", choix: { A: "King Kong", B: "Jurassic Park", C: "Le Monde perdu", D: "Godzilla" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Actrice principale de 'Hunger Games' ?", choix: { A: "Kristen Stewart", B: "Jennifer Lawrence", C: "Shailene Woodley", D: "Emma Roberts" }, bonneReponse: "B", theme: "Cinéma" },

    // ===================== MUSIQUE (15 questions) =====================
    { question: "Instrument à 88 touches ?", choix: { A: "Orgue", B: "Piano", C: "Clavecin", D: "Synthé" }, bonneReponse: "B", theme: "Musique" },
    { question: "Chanteur de Queen ?", choix: { A: "Elton John", B: "Freddie Mercury", C: "David Bowie", D: "Mick Jagger" }, bonneReponse: "B", theme: "Musique" },
    { question: "Compositeur devenu sourd ?", choix: { A: "Bach", B: "Mozart", C: "Beethoven", D: "Chopin" }, bonneReponse: "C", theme: "Musique" },
    { question: "Groupe de 'Stairway to Heaven' ?", choix: { A: "Queen", B: "Led Zeppelin", C: "The Who", D: "Deep Purple" }, bonneReponse: "B", theme: "Musique" },
    { question: "Qui a chanté 'Like a Virgin' ?", choix: { A: "Cyndi Lauper", B: "Madonna", C: "Whitney Houston", D: "Janet Jackson" }, bonneReponse: "B", theme: "Musique" },
    { question: "Instrument à cordes frottées ?", choix: { A: "Guitare", B: "Violon", C: "Harpe", D: "Luth" }, bonneReponse: "B", theme: "Musique" },
    { question: "Qui a interprété 'Billie Jean' ?", choix: { A: "Prince", B: "Michael Jackson", C: "Stevie Wonder", D: "Marvin Gaye" }, bonneReponse: "B", theme: "Musique" },
    { question: "Compositeur de 'La Flûte enchantée' ?", choix: { A: "Beethoven", B: "Mozart", C: "Bach", D: "Haydn" }, bonneReponse: "B", theme: "Musique" },
    { question: "Groupe derrière 'Smells Like Teen Spirit' ?", choix: { A: "Pearl Jam", B: "Nirvana", C: "Soundgarden", D: "Alice in Chains" }, bonneReponse: "B", theme: "Musique" },
    { question: "Qui a chanté 'Imagine' ?", choix: { A: "Paul McCartney", B: "John Lennon", C: "George Harrison", D: "Ringo Starr" }, bonneReponse: "B", theme: "Musique" },
    { question: "Quel style de musique vient de la Nouvelle-Orléans ?", choix: { A: "Rock", B: "Jazz", C: "Blues", D: "Country" }, bonneReponse: "B", theme: "Musique" },
    { question: "Chanteur de 'Space Oddity' ?", choix: { A: "Elton John", B: "David Bowie", C: "Lou Reed", D: "Iggy Pop" }, bonneReponse: "B", theme: "Musique" },
    { question: "Qui a composé 'Le Lac des cygnes' ?", choix: { A: "Prokofiev", B: "Tchaïkovski", C: "Stravinsky", D: "Rimsky-Korsakov" }, bonneReponse: "B", theme: "Musique" },
    { question: "Groupe de 'Hotel California' ?", choix: { A: "Fleetwood Mac", B: "Eagles", C: "The Doors", D: "Lynyrd Skynyrd" }, bonneReponse: "B", theme: "Musique" },
    { question: "Qui est le 'Roi de la Pop' ?", choix: { A: "Prince", B: "Michael Jackson", C: "Elvis Presley", D: "Madonna" }, bonneReponse: "B", theme: "Musique" },

    // ===================== TECHNOLOGIE & DIVERS (30 questions) =====================
    { question: "Co-fondateur d'Apple avec Steve Jobs ?", choix: { A: "Bill Gates", B: "Steve Wozniak", C: "Tim Cook", D: "Elon Musk" }, bonneReponse: "B", theme: "Technologie" },
    { question: "Année d'invention du World Wide Web ?", choix: { A: "1985", B: "1989", C: "1991", D: "1995" }, bonneReponse: "B", theme: "Technologie" },
    { question: "Langage de programmation pour le web ?", choix: { A: "Python", B: "JavaScript", C: "C++", D: "Ruby" }, bonneReponse: "B", theme: "Technologie" },
    { question: "Système d'exploitation mobile de Google ?", choix: { A: "iOS", B: "Windows Phone", C: "Android", D: "Symbian" }, bonneReponse: "C", theme: "Technologie" },
    { question: "Quel réseau social a pour logo un oiseau bleu ?", choix: { A: "Facebook", B: "Twitter", C: "Instagram", D: "LinkedIn" }, bonneReponse: "B", theme: "Technologie" },
    { question: "Que signifie 'www' ?", choix: { A: "Web Wide World", B: "World Wide Web", C: "Wide Web World", D: "World Web Wide" }, bonneReponse: "B", theme: "Technologie" },
    { question: "Quelle entreprise a créé Windows ?", choix: { A: "Apple", B: "Microsoft", C: "IBM", D: "Google" }, bonneReponse: "B", theme: "Technologie" },
    { question: "Combien de bits dans un octet ?", choix: { A: "4", B: "8", C: "16", D: "32" }, bonneReponse: "B", theme: "Technologie" },
    { question: "Célèbre moteur de recherche ?", choix: { A: "Yahoo", B: "Google", C: "Bing", D: "DuckDuckGo" }, bonneReponse: "B", theme: "Technologie" },
    { question: "Qui a inventé le téléphone ?", choix: { A: "Tesla", B: "Bell", C: "Edison", D: "Marconi" }, bonneReponse: "B", theme: "Technologie" },
    { question: "Quel pays a créé le GPS ?", choix: { A: "Russie", B: "États-Unis", C: "Chine", D: "Europe" }, bonneReponse: "B", theme: "Technologie" },
    { question: "Que mesure un baromètre ?", choix: { A: "Température", B: "Pression atmosphérique", C: "Humidité", D: "Vitesse du vent" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Combien de couleurs dans un arc-en-ciel ?", choix: { A: "5", B: "7", C: "9", D: "11" }, bonneReponse: "B", theme: "Nature" },
    { question: "Quel pays est célèbre pour la pizza ?", choix: { A: "France", B: "Italie", C: "Espagne", D: "Grèce" }, bonneReponse: "B", theme: "Culture" },
    { question: "Quel est l'animal national de l'Australie ?", choix: { A: "Koala", B: "Kangourou", C: "Wombat", D: "Émeu" }, bonneReponse: "B", theme: "Nature" },
    { question: "Quel jour célèbre-t-on la Saint-Valentin ?", choix: { A: "1er janvier", B: "14 février", C: "25 décembre", D: "31 octobre" }, bonneReponse: "B", theme: "Culture" },
    { question: "Qui a écrit 'Le Petit Chaperon rouge' ?", choix: { A: "Andersen", B: "Charles Perrault", C: "Grimm", D: "La Fontaine" }, bonneReponse: "B", theme: "Littérature" },
    { question: "Capitale de la Belgique ?", choix: { A: "Amsterdam", B: "Bruxelles", C: "Luxembourg", D: "Strasbourg" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Quel fruit est associé à la gravité selon Newton ?", choix: { A: "Orange", B: "Pomme", C: "Poire", D: "Cerise" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Combien de fois la Terre tourne sur elle-même en une semaine ?", choix: { A: "5", B: "7", C: "10", D: "14" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Quel est le symbole chimique du fer ?", choix: { A: "F", B: "Fe", C: "Fi", D: "Fr" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Planète la plus grosse du système solaire ?", choix: { A: "Saturne", B: "Jupiter", C: "Neptune", D: "Uranus" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Quelle fleur est associée au tournesol ?", choix: { A: "Rose", B: "Tournesol", C: "Tulipe", D: "Orchidée" }, bonneReponse: "B", theme: "Nature" },
    { question: "Qui a peint 'Le Cri' ?", choix: { A: "Dalí", B: "Munch", C: "Van Gogh", D: "Picasso" }, bonneReponse: "B", theme: "Arts" },
    { question: "Quel pays est le plus grand producteur de vin ?", choix: { A: "France", B: "Italie", C: "Espagne", D: "USA" }, bonneReponse: "B", theme: "Culture" },
    { question: "Quelle est la monnaie du Japon ?", choix: { A: "Yuan", B: "Yen", C: "Won", D: "Ringgit" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Quel nutriment principal dans les pâtes ?", choix: { A: "Protéines", B: "Glucides", C: "Lipides", D: "Vitamines" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Langue officielle du Brésil ?", choix: { A: "Espagnol", B: "Portugais", C: "Anglais", D: "Français" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Quel animal est le symbole de la WWF ?", choix: { A: "Lion", B: "Panda", C: "Éléphant", D: "Tigre" }, bonneReponse: "B", theme: "Nature" },
    { question: "Que fête-t-on le 14 juillet en France ?", choix: { A: "Noël", B: "Fête nationale", C: "Pâques", D: "Armistice" }, bonneReponse: "B", theme: "Culture" },

        // ===================== COMPLÉMENT POUR 200 QUESTIONS (15 ajouts) =====================
    { question: "Quel pays est aussi un continent ?", choix: { A: "Russie", B: "Australie", C: "Inde", D: "Brésil" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Combien de fois le cœur humain bat-il en moyenne par minute au repos ?", choix: { A: "50-60", B: "60-80", C: "80-100", D: "100-120" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Qui a écrit 'Les Fleurs du mal' ?", choix: { A: "Victor Hugo", B: "Arthur Rimbaud", C: "Charles Baudelaire", D: "Paul Verlaine" }, bonneReponse: "C", theme: "Littérature" },
    { question: "Dans quel sport utilise-t-on un 'smash' ?", choix: { A: "Football", B: "Tennis", C: "Basket", D: "Rugby" }, bonneReponse: "B", theme: "Sports" },
    { question: "Quel groupe a interprété 'Yesterday' ?", choix: { A: "The Rolling Stones", B: "The Beatles", C: "The Who", D: "The Kinks" }, bonneReponse: "B", theme: "Musique" },
    { question: "Qui a réalisé 'Avatar' ?", choix: { A: "Ridley Scott", B: "James Cameron", C: "Steven Spielberg", D: "Peter Jackson" }, bonneReponse: "B", theme: "Cinéma" },
    { question: "Quelle est la monnaie officielle du Royaume-Uni ?", choix: { A: "Euro", B: "Livre sterling", C: "Dollar", D: "Franc" }, bonneReponse: "B", theme: "Géographie" },
    { question: "Combien de secondes dans une heure ?", choix: { A: "360", B: "3600", C: "600", D: "60" }, bonneReponse: "B", theme: "Sciences" },
    { question: "Quel peintre a coupé son oreille ?", choix: { A: "Monet", B: "Van Gogh", C: "Gauguin", D: "Cézanne" }, bonneReponse: "B", theme: "Arts" },
    { question: "Qui a fondé Rome selon la légende ?", choix: { A: "César", B: "Romulus", C: "Auguste", D: "Rémus" }, bonneReponse: "B", theme: "Mythologie" },
    { question: "Quel pays a remporté l'Euro 2016 de football ?", choix: { A: "France", B: "Portugal", C: "Allemagne", D: "Espagne" }, bonneReponse: "B", theme: "Sports" },
    { question: "Que signifie ADN ?", choix: { A: "Acide désoxyribonucléique", B: "Acide ribonucléique", C: "Adénosine triphosphate", D: "Acide nucléique" }, bonneReponse: "A", theme: "Sciences" },
    { question: "Quelle ville est surnommée la 'Ville Lumière' ?", choix: { A: "Londres", B: "Paris", C: "New York", D: "Rome" }, bonneReponse: "B", theme: "Culture" },
    { question: "Quel compositeur a écrit 'La Marche turque' ?", choix: { A: "Beethoven", B: "Mozart", C: "Bach", D: "Haydn" }, bonneReponse: "B", theme: "Musique" },
    { question: "Quel serpent est le plus long du monde ?", choix: { A: "Cobra", B: "Python réticulé", C: "Anaconda", D: "Boa" }, bonneReponse: "B", theme: "Nature" }
];

// =====================================================
// VARIABLES GLOBALES DU JEU
// =====================================================
var questionsMelangees = [];
var indexQuestion = 0;
var score = 0;
var chronoRestant = 20;
var intervalleChrono = null;
var reponsesDonnees = [];
var jeuBloque = false;
var enPause = false;
var tempsAvantPause = 20;

// =====================================================
// FONCTIONS D'AFFICHAGE
// =====================================================
function cacherTousLesEcrans() {
    document.getElementById('ecranAccueil').style.display = 'none';
    document.getElementById('ecranQuestion').style.display = 'none';
    document.getElementById('ecranResultat').style.display = 'none';
}

function montrerAccueil() {
    arreterChrono();
    cacherTousLesEcrans();
    document.getElementById('ecranAccueil').style.display = 'block';
    document.getElementById('feedbackQuestion').innerHTML = '';
    var musique = document.getElementById('musiqueFond');
    if (musique) musique.pause();
}

function montrerQuestion() {
    cacherTousLesEcrans();
    document.getElementById('ecranQuestion').style.display = 'block';
    document.getElementById('feedbackQuestion').innerHTML = '';
    jeuBloque = false;
    reactiverBoutons();
    remettreStyleBoutons();
}

function montrerResultat() {
    arreterChrono();
    cacherTousLesEcrans();
    document.getElementById('ecranResultat').style.display = 'block';
    var musique = document.getElementById('musiqueFond');
    if (musique) musique.pause();
}

// =====================================================
// MÉLANGE DES QUESTIONS
// =====================================================
function melangerTableau(tableau) {
    var tab = tableau.slice();
    for (var i = tab.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = tab[i];
        tab[i] = tab[j];
        tab[j] = temp;
    }
    return tab;
}

// =====================================================
// DÉMARRER LE QUIZ
// =====================================================
function demarrerQuiz() {
    questionsMelangees = melangerTableau(toutesLesQuestions);
    indexQuestion = 0;
    score = 0;
    reponsesDonnees = [];
    enPause = false;
    document.getElementById('scoreActuel').innerHTML = '0';
    document.getElementById('scoreFinal').innerHTML = '0';
    montrerQuestion();
    chargerQuestion(0);
    var musique = document.getElementById('musiqueFond');
    if (musique) musique.play().catch(function(){});
}

// =====================================================
// CHARGER UNE QUESTION
// =====================================================
function chargerQuestion(index) {
    if (index >= questionsMelangees.length) {
        afficherResultats();
        return;
    }
    var q = questionsMelangees[index];
    document.getElementById('numQuestion').innerHTML = (index + 1);
    document.getElementById('texteQuestion').innerHTML = q.question;
    document.getElementById('texteA').innerHTML = q.choix['A'];
    document.getElementById('texteB').innerHTML = q.choix['B'];
    document.getElementById('texteC').innerHTML = q.choix['C'];
    document.getElementById('texteD').innerHTML = q.choix['D'];
    document.getElementById('scoreActuel').innerHTML = score;
    document.getElementById('feedbackQuestion').innerHTML = '⏳ Choisissez une réponse...';
    jeuBloque = false;
    reactiverBoutons();
    remettreStyleBoutons();
    // Réinitialise l'affichage de la pause
    document.getElementById('contenuQuestionActif').style.display = 'block';
    document.getElementById('contenuPause').style.display = 'none';
    document.getElementById('boutonPause').textContent = '⏸️ Pause';
    lancerChrono();
}

// =====================================================
// GESTION DU CHRONO
// =====================================================
function lancerChrono() {
    lancerChronoDepuis(20);
}

function arreterChrono() {
    if (intervalleChrono) {
        clearInterval(intervalleChrono);
        intervalleChrono = null;
    }
}

function lancerChronoDepuis(depart) {
    arreterChrono();
    chronoRestant = depart;
    document.getElementById('chrono').innerHTML = chronoRestant;
    intervalleChrono = setInterval(function () {
        chronoRestant--;
        var chronoEl = document.getElementById('chrono');
        if (chronoEl) {
            chronoEl.innerHTML = chronoRestant;
            if (chronoRestant <= 5) chronoEl.style.color = '#ff0000';
            else chronoEl.style.color = '#ff6b6b';
        }
        if (chronoRestant <= 0) {
            arreterChrono();
            tempsEcoule();
        }
    }, 1000);
}

function tempsEcoule() {
    if (jeuBloque) return;
    jeuBloque = true;
    desactiverBoutons();
    var q = questionsMelangees[indexQuestion];
    reponsesDonnees.push({
        question: q.question,
        reponseDonnee: '⏰ Temps écoulé',
        bonneReponse: q.choix[q.bonneReponse],
        correct: false
    });
    document.getElementById('feedbackQuestion').innerHTML =
        '<span style="color:#ff6b6b;">⏰ Temps écoulé !</span> La bonne réponse était : <strong>' + q.choix[q.bonneReponse] + '</strong>';
    surlignerBonneReponse(q.bonneReponse);
    setTimeout(function () {
        indexQuestion++;
        if (indexQuestion < questionsMelangees.length) {
            chargerQuestion(indexQuestion);
        } else {
            afficherResultats();
        }
    }, 2000);
}

// =====================================================
// RÉPONSE DU JOUEUR
// =====================================================
function repondre(lettre) {
    if (jeuBloque) return;
    jeuBloque = true;
    arreterChrono();
    desactiverBoutons();
    var q = questionsMelangees[indexQuestion];
    var estCorrect = (lettre === q.bonneReponse);
    reponsesDonnees.push({
        question: q.question,
        reponseDonnee: q.choix[lettre],
        bonneReponse: q.choix[q.bonneReponse],
        correct: estCorrect
    });
    if (estCorrect) {
        score++;
        document.getElementById('scoreActuel').innerHTML = score;
        jouerSonJuste();
        document.getElementById('feedbackQuestion').innerHTML =
            '<span style="color:#00ff88;">✅ BRAVO !</span> C\'est la bonne réponse !';
        colorerBouton(lettre, '#00aa55');
    } else {
        jouerSonFaux();
        document.getElementById('feedbackQuestion').innerHTML =
            '<span style="color:#ff6b6b;">❌ FAUX !</span> La bonne réponse était : <strong>' + q.choix[q.bonneReponse] + '</strong>';
        colorerBouton(lettre, '#cc3333');
        surlignerBonneReponse(q.bonneReponse);
    }
    setTimeout(function () {
        indexQuestion++;
        if (indexQuestion < questionsMelangees.length) {
            chargerQuestion(indexQuestion);
        } else {
            afficherResultats();
        }
    }, 2000);
}

// =====================================================
// STYLES DYNAMIQUES DES BOUTONS
// =====================================================
function colorerBouton(lettre, couleur) {
    var btn = document.getElementById('btn' + lettre);
    if (btn) {
        btn.style.background = couleur;
        btn.style.borderColor = '#ffffff';
        btn.style.color = '#ffffff';
        btn.style.boxShadow = '0 0 15px ' + couleur;
    }
}

function surlignerBonneReponse(lettre) {
    var btn = document.getElementById('btn' + lettre);
    if (btn) {
        btn.style.background = '#00aa55';
        btn.style.borderColor = '#ffffff';
        btn.style.color = '#ffffff';
        btn.style.boxShadow = '0 0 15px #00ff88';
    }
}

function remettreStyleBoutons() {
    var boutons = ['A', 'B', 'C', 'D'];
    for (var i = 0; i < boutons.length; i++) {
        var btn = document.getElementById('btn' + boutons[i]);
        if (btn) {
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.style.color = '';
            btn.style.boxShadow = '';
        }
    }
}

function desactiverBoutons() {
    var boutons = ['A', 'B', 'C', 'D'];
    for (var i = 0; i < boutons.length; i++) {
        var btn = document.getElementById('btn' + boutons[i]);
        if (btn) {
            btn.disabled = true;
            btn.style.cursor = 'not-allowed';
            btn.style.opacity = '0.6';
        }
    }
    // Ne JAMAIS désactiver le bouton pause
}

function reactiverBoutons() {
    var boutons = ['A', 'B', 'C', 'D'];
    for (var i = 0; i < boutons.length; i++) {
        var btn = document.getElementById('btn' + boutons[i]);
        if (btn) {
            btn.disabled = false;
            btn.style.cursor = 'pointer';
            btn.style.opacity = '1';
        }
    }
}

// =====================================================
// PAUSE
// =====================================================
function basculerPause() {
    if (jeuBloque) return;
    if (enPause) {
        // Reprendre
        enPause = false;
        document.getElementById('contenuQuestionActif').style.display = 'block';
        document.getElementById('contenuPause').style.display = 'none';
        document.getElementById('boutonPause').textContent = '⏸️ Pause';
        reactiverBoutons();
        lancerChronoDepuis(tempsAvantPause);
    } else {
        // Pause
        enPause = true;
        tempsAvantPause = chronoRestant;
        document.getElementById('contenuQuestionActif').style.display = 'none';
        document.getElementById('contenuPause').style.display = 'block';
        document.getElementById('boutonPause').textContent = '▶ Reprendre';
        desactiverBoutons();
        arreterChrono();
    }
}

// Attachement de l'événement au bouton pause (ID boutonPause)
document.addEventListener('DOMContentLoaded', function () {
    var btnPause = document.getElementById('boutonPause');
    if (btnPause) {
        btnPause.addEventListener('click', basculerPause);
    }
});

// =====================================================
// SONS (Web Audio API)
// =====================================================
function jouerSonJuste() {
    try {
        var ctx = new (window.AudioContext || window.webkitAudioContext)();
        var o = ctx.createOscillator();
        var g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.type = 'sine';
        o.frequency.setValueAtTime(523, ctx.currentTime);
        o.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
        o.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
        g.gain.setValueAtTime(0.3, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
        o.start(ctx.currentTime);
        o.stop(ctx.currentTime + 0.5);
    } catch (e) {}
}

function jouerSonFaux() {
    try {
        var ctx = new (window.AudioContext || window.webkitAudioContext)();
        var o = ctx.createOscillator();
        var g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.type = 'square';
        o.frequency.setValueAtTime(200, ctx.currentTime);
        o.frequency.setValueAtTime(150, ctx.currentTime + 0.15);
        g.gain.setValueAtTime(0.3, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        o.start(ctx.currentTime);
        o.stop(ctx.currentTime + 0.4);
    } catch (e) {}
}

// =====================================================
// AFFICHAGE DES RÉSULTATS
// =====================================================
function afficherResultats() {
    montrerResultat();
    document.getElementById('scoreFinal').innerHTML = score;
    var mention = '';
    var commentaire = '';
    if (score === 15) {
        mention = '🌟 EXCELLENT ! 🌟';
        commentaire = 'Vous êtes un véritable expert en culture générale ! Score parfait !';
    } else if (score >= 12) {
        mention = '👏 Très bien !';
        commentaire = 'Excellent niveau de culture générale. Impressionnant !';
    } else if (score >= 9) {
        mention = '👍 Bien joué !';
        commentaire = 'Bon niveau de culture générale. Continuez comme ça !';
    } else if (score >= 6) {
        mention = '📚 Pas mal !';
        commentaire = 'Niveau correct. Un peu de lecture et vous progresserez !';
    } else if (score >= 3) {
        mention = '🧐 Peut mieux faire...';
        commentaire = 'Quelques lacunes. N\'hésitez pas à vous cultiver davantage !';
    } else {
        mention = '💤 À réviser...';
        commentaire = 'Il est temps d\'ouvrir quelques livres ou documentaires !';
    }
    document.getElementById('mentionFinale').innerHTML = mention;
    document.getElementById('commentaireFinal').innerHTML = commentaire;

    var corps = document.getElementById('corpsRecap');
    corps.innerHTML = '';
    for (var i = 0; i < reponsesDonnees.length; i++) {
        var r = reponsesDonnees[i];
        var couleurFond = r.correct ? '#1a3a2a' : '#3a1a1a';
        var symbole = r.correct ? '✅' : '❌';
        var ligne = '<tr style="background-color:' + couleurFond + ';">';
        ligne += '<td style="text-align:left;font-size:0.9rem;">';
        ligne += '<strong>Q' + (i + 1) + '.</strong> ' + r.question + '<br>';
        ligne += '<span style="font-size:0.8rem;opacity:0.8;">Votre réponse : <b>' + r.reponseDonnee + '</b> | Bonne réponse : <b>' + r.bonneReponse + '</b></span>';
        ligne += '</td>';
        ligne += '<td style="text-align:center;font-size:1.5rem;">' + symbole + '</td>';
        ligne += '</tr>';
        corps.innerHTML += ligne;
    }
    var ligneResume = '<tr style="background-color:#0f3460;">';
    ligneResume += '<td colspan="2" style="text-align:center;font-weight:bold;font-size:1.1rem;color:#ffcc00;">Score total : ' + score + ' / 15 — ' + mention + '</td>';
    ligneResume += '</tr>';
    corps.innerHTML += ligneResume;
}

// =====================================================
// RECOMMENCER LE QUIZ
// =====================================================
function recommencerQuiz() {
    arreterChrono();
    demarrerQuiz();
}