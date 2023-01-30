const wilays = [
    {
        "id": 1,
        "name": "ADRAR",    
        "communes": [ "Adrar", "Akabli", "Aougrout", "Aoulef", "Bordj badji mokhtar", "Bouda", "Charouine", "Deldoul", "Fenoughil", "In zghmir", "Ksar kaddour", "Metarfa", "Ouled ahmed timmi", "Ouled aissa", "Ouled said", "Reggane", "Sali", "Sebaa", "Talmin", "Tamantit", "Tamest", "Timekten", "Timiaouine", "Timimoun", "Tinerkouk", "Tit", "Tsabit", "Zaouiet kounta"]
    }, {
        "id": 2,
        "name": "CHLEF",
        "communes": [ "Abou el hassan", "Ain merane", "Benairia", "Beni bouateb", "Beni haoua", "Beni rached", "Boukadir", "Bouzeghaia", "Breira", "Chettia", "Chlef", "Dahra", "El hadjadj", "El karimia", "El marsa", "Harchoun", "Herenfa", "Labiod medjadja", "Moussadek", "Oued fodda", "Oued goussine", "Oued sly", "Ouled abbes", "Ouled benabdelkader", "Ouled fares", "Oum drou", "Sendjas", "Sidi abderrahmane", "Sidi akkacha", "Sobha", "Tadjena", "Talassa", "Taougrite", "Tenes", "Zebboudja"]
    }, {
        "id": 3,
        "name": "LAGHOUAT",
        "communes": [ "Aflou", "Ain madhi", "Ait sidi ali", "Beidha", "Brida", "El assafia", "El ghicha", "El houaita", "Gueltat sidi saad", "Hadj mechri", "Hassi delaa", "Hassi rmel", "Kheneg", "Ksar el hirane", "Laghouat", "Mekhareg", "Oued morra", "Oued mzi", "Sebgag", "Sidi bouzid", "Sidi makhlouf", "Tadjemout", "Tadjrouna", "Taouila"]
    }, {
        "id": 4,
        "name": "OUM EL BOUAGHI",
        "communes": [ "Ain babouche", "Ain beida", "Ain diss", "Ain fakroun", "Ain kercha", "Ain mlila", "Ain zitoun", "Behir chergui", "Berriche", "Bir chouhada", "Dhala", "El amiria", "El belala", "El djazia", "El fedjouz boughrara saoudi", "El harmilia", "Fkirina", "Hanchir toumghani", "Ksar sbahi", "Meskiana", "Oued nini", "Ouled gacem", "Ouled hamla", "Ouled zoual", "Oum el bouaghi", "Rahia", "Sigus", "Souk naamane", "Zorg"]
    }, {
        "id": 5,
        "name": "BATNA",
        "communes": [ "Ain djasser", "Ain touta", "Ain yagout", "Amdoukal", "Arris", "Barika", "Batna", "Ben foudhala el hakania", "Bitam", "Boulhilat", "Boumague", "Boumia", "Bouzina", "Chemora", "Djerma", "Djezzar", "Draa etine", "El hassi", "El madher", "Fesdis", "Foum toub", "Ghassira", "Gosbat", "Guigba", "Hayat", "Hidoussa", "Ichmoul", "Inoughissen", "Kimmel", "Ksar bellezma", "Larbaa", "Lazrou", "Lemsane", "Maafa", "Menaa", "Merouana", "Metkaouak", "Ngaous", "Nouader", "Oued chaaba", "Oued el ma", "Oued taga", "Ouled ammar", "Ouled aouf", "Ouled fadel", "Ouled sellam", "Ouled si slimane", "Ouyoun el assafir", "Rahbat", "Ras el aioun", "Sefiane", "Seggana", "Seriana", "Talkhamt", "Taxlent", "Tazoult", "Teniet el abed", "Tighanimine", "Tigherghar", "Tilatou", "Timgad", "Tkoutt", "Zanat el beida"]
    }, {
        "id": 6,
        "name": "BEJAIA",
        "communes": [ "Adekar", "Ait rzine", "Ait smail", "Akbou", "Akfadou", "Amalou", "Amizour", "Aokas", "Barbacha", "Bejaia", "Beni djellil", "Beni ksila", "Beni maouche", "Beni mellikeche", "Boudjellil", "Bouhamza", "Boukhelifa", "Chelata", "Cheminidaira", "Darguina", "Draa el kaid", "El flaye", "El kseur", "Feraoun", "Ifenain ilmathen", "Ighil ali", "Ighram", "Kendira", "Kherrata", "Melbou", "Oued ghir", "Ouzellaguen", "Seddouk", "Semaoune", "Sidi aich", "Sidi ayad", "Sidi said", "Souk el thenine", "Souk oufella", "Tala hamzadaira", "Tamokra", "Tamridjet", "Taourit ighil", "Taskriout", "Tazmaltdaira", "Tibane", "Tichy", "Tifra", "Timezrit", "Timezrit", "Tinabdher", "Toudja"]
    }, {
        "id": 7,
        "name": "BISKRA",
        "communes": [ "Ain naga", "Ain zaatout", "Biskra", "Bordj ben azzouz", "Bouchagroun", "Branis", "Chetma", "Djemorah", "Doucen", "El feidh", "El ghrous", "El hadjeb", "El haouch", "El kantara", "El outaya", "Foughala", "Khenguet sidi nadjil", "Lichana", "Lioua", "Mchouneche", "Mekhadma", "Meziraa", "Mlili", "Ouled djellal", "Ouled harkat", "Ouled rahma", "Ouled sassi", "Oumache", "Ourlala", "Sidi khaled", "Sidi okba", "Tolga", "Zeribet el oued"]
    }, {
        "id": 8,
        "name": "BECHAR",
        "communes": [ "Abadla", "Bechar", "Beni abbes", "Beni ikhlef", "Beni ounif", "Boukais", "El ouata", "Erg ferradj", "Ighil", "Kenadsa", "Kerzaz", "Ksabi", "Lahmar", "Mechraa houari boumedienne", "Meridja", "Mogheul", "Ouled khoudir", "Tabalbala", "Taghit", "Tamtert", "Timoudi"]
    }, {
        "id": 9,
        "name": "BLIDA",
        "communes": ["Ain romana", "Ben khellil", "Beni mered", "Beni tamou", "Blida", "Bouarfa", "Boufarik", "Bougara", "Bouinan", "Chebli", "Chiffa", "Chrea", "Djebara", "El affroun", "Guerrouaou", "Hammam melouane", "Larbaa", "Meftah", "Mouzaia", "Oued djer", "Ouled el alleug", "Ouled selama", "Ouled yaich", "Sidi moussa", "Souhane", "Soumaa"]
    }, {
        "id": 10,
        "name": "BOUIRA",
        "communes": [ "Aghbalou", "Ahl el ksar", "Ahnif", "Ain bessem", "Ain el hadjar", "Ain el turc", "Ain laloui", "Ait laziz", "Aomar", "Ath mansour taourirt", "Bechloul", "Bir ghbalou", "Bordj okhriss", "Bouderbala", "Bouiche", "Bouira", "Boukram", "Chorfa", "Dechmia", "Dirrah", "Djebahia", "El adjiba", "El asnam", "El hachimia", "El hakimia", "El khabouzia", "El mokrani", "Guerrouma", "Hadjera zerga", "Haizer", "Kadiria", "Lakhdaria", "Maala", "Maamora", "Mchedallah", "Mezdour", "Oued el berdi", "Ouled rached", "Raouraoua", "Ridane", "Saharidj", "Souk el khemis", "Sour el ghouzlane", "Taghzout", "Taguedit", "Zbarbar"]
    }, {
        "id": 11,
        "name": "TAMANRASSET",
        "communes": [ "Foggaret ezzaouia", "Idles", "In ghar", "In salah", "In amguel", "In guezzam", "Tamanrasset", "Tin zaouatine", "Tazrouk", "Abalessa"]
    }, {
        "id": 12,
        "name": "TEBESSA",
        "communes": [ "Bir el mokadem", "Ain zerga", "Boulhaf dir", "Boukhadra", "Bir el ater", "El aouinet", "El ma el biodh", "Cheria", "El kouif", "El meridj", "El mezerra", "El ogla el malha", "El ogla", "Guorriguer", "Hammamet", "Lahouidjbet", "Ferkane", "Negrine", "Morsott", "Ouenza", "Oum ali", "Stah guentis", "Safsaf el ouesra", "Tebessa", "Tlidjene"]
    }, {
        "id": 13,
        "name": "TLEMCEN",
        "communes": [ "Ain fezza", "Ain ghoraba", "Ain kebira", "Ain fetah", "Ain nehala", "Ain tallout", "Amieur", "Ain youcef", "Bab el assa", "Azails", "Beni bahdel", "Beni boussaid", "Beni mester", "Beni ouarsous", "Beni semiel", "Bensekrane", "Bouhlou", "Beni snous", "Dar yaghmouracene", "Chetouane", "Djebala", "El aricha", "El bouihi", "El fehoul", "El gor", "Fellaoucene", "Hammam boughrara", "Ghazaouet", "Honaine", "Hennaya", "Marsa ben mhidi", "Maghnia", "Mansourah", "Msirda fouaga", "Ouled mimoun", "Oued chouli", "Ouled riyah", "Sebaa chioukh", "Remchi", "Sabra", "Sebdou", "Sidi djillali", "Sidi abdelli", "Sidi medjahed", "Souk el khemis", "Souahlia", "Souk tlata", "Tirni beni hediel", "Tianet", "Souani", "Tlemcen", "Zenata", "Nedroma"]
    }, {
        "id": 14,
        "name": "TIARET",
        "communes": ["Ain el hadid", "Ain deheb", "Ain zarit", "Ain kermes", "Bougara", "Chehaima", "Ain bouchekif", "Djebilet rosfa", "Dahmouni", "Djillali ben omar", "Faidja", "Hamadia", "Ksar chellala", "Madna", "Guertoufa", "Medrissa", "Mechraa safa", "Medroussa", "Meghila", "Mellakou nadorah", "Naima", "Oued lilli", "Ouled djerad", "Rahouia", "Rechaiga sebaine", "Sebt", "Frenda",  "Si abdelghani", "Sidi ali mellal", "Sidi bakhti", "Sidi hosni", "Mahdia", "Sougueur", "Takhemaret", "Serghine", "Tidda", "Tiaret", "Tagdemt", "Tousnina", "Zmalet el emir abdelkader"]
    }, {
        "id": 15,
        "name": "TIZI-OUZOU",
        "communes": ["Aghrib", "Abi youcef",  "Ain el hammam", "Ain zaouia", "Ait aggouacha", "Ait bouada", "Ait bouadou", "Ait boumehdi", "Ait chaffaa", "Ait khellili", "Ait mahmoud", "Ait oumalou", "Ait toudert", "Ait yahia", "Ait yahia moussa", "Ait youcef", "Assi youcef", "Akbil", "Agouni gueghrane", "Ath aissa mimoun", "Azazga", "Azeffoun", "Beni douala", "Beni yenni", "Beni ziki", "Beni zmenzer", "Boghni", "Boudjima", "Bounouh", "Beni aissi", "Bouzeguene", "Draa ben khedda", "Draa el mizan", "Freha", "Frikat", "Iboudraden", "Idjeur", "Iferhounene", "Ifigha", "Iflissen", "Illilten", "Imsouhal", "Irdjen", "Larbaa nath irathen", "Illoula oumalou", "Maatka", "Makouda", "Mechtrass", "Mizrana", "Mkira", "Moknea", "Ouacif", "Ouadhia", "Ouaguenoun", "Mekla", "Sidi naamane", "Souamaa", "Souk el thenine", "Tadmait", "Tassaft ouguemoun", "Tigzirt", "Tirmitine", "Timizart", "Tizi ghenif", "Tizi nthlata", "Tizi ouzou", "Yakouren", "Tizi rached", "Yattafene", "Zekri"]
    }, {
        "id": 16,
        "name": "ALGER",
        "communes": ["Ain benian", "Ain naadja", "Ain taya", "Alger centre", "Bab el oued", "Bab ezzouar", "Baba hassen", "Bachdjerrah", "Baraki", "Belouizdad", "Ben aknoun", "Beni messous", "Bir mourad rais", "Birkhadem", "Birtouta", "Bologhine", "Bordj el bahri", "Bordj el kiffan", "Bourouba", "Bouzareah", "Casbah", "Cheraga", "Chevalley", "Dar el beida", "Dely brahim", "Douera", "Draria", "El achour", "El biar", "El harrach", "El madania", "El magharia", "El marsa", "El mouradia", "Gue de constantine", "Hammamet", "Hraoua", "Hussein dey", "Hydra", "Khraissia", "Kouba", "Les eucalyptus", "Mahelma", "Mohammadia", "Oued koriche", "Oued smar", "Ouled chebel", "Ouled fayet", "Rahmania", "Rais hamidou", "Reghaia", "Rouiba", "Said hamdine", "Saoula", "Sidi mhamed", "Sidi moussa", "Souidania", "Staoueli", "Tessala el merdja", "Zeralda"]
    }, {
        "id": 17,
        "name": "DJELFA",
        "communes": ["Ain chouhada",  "Ain maabed", "Ain el ibel", "Ain feka", "Ain oussara", "Bouira lahdab", "Amourah", "Charef", "Beni yagoub", "Dar chioukh", "Benhar", "Deldoul", "El guedid", "Douis", "El idrissa", "Djelfa", "Faidh el botma", "El khemis", "Birine", "Guernini", "Hassi bahbah", "Hassi fedoul", "Hassi el euch", "Guettara", "Had sahary", "Mliliha", "Mouadjebar", "Oum laadham", "Messad", "Sed rahal", "Sidi ladjel", "Selmana", "Sidi baizid", "Tadmit", "Zaafrane", "Zaccar"]
    }, {
        "id": 18,
        "name": "JIJEL",
        "communes": [ "Bordj taher", "Boucif ouled askeur", "Boudria beni yadjis", "Bouraoui belhadef", "Chahana", "Chekfa", "Djemaa beni habibi", "Djmila", "El ancer", "El kennar nouchfi", "El milia", "Erraguene", "El aouana", "Emir abdelkader", "Kaous", "Kemir oued adjoul", "Ghebala", "Ouled rabah", "Ouled yahia khadrouch", "Ouadjana", "Selma benziada", "Sidi abdelaziz", "Settara", "Sidi maarouf", "Jijel", "Taher", "Texenna", "Ziama mansouriah"]
    }, {
        "id": 19,
        "name": "SETIF",
        "communes": [ "Ain abessa", "Ain arnat", "Ain el kebira", "Ain azel", "Ain azel", "Ain oulmene", "Ain roua", "Ain legraj", "Ait naoual mezada", "Ait tizi", "Ain lahdjar", "Ain sebt", "Bazer sakhra", "Belaa", "Amoucha", "Babor", "Beni aziz", "Beni fouda", "Beni hocine", "Beni ouartilene", "Beni chebana", "Bir haddada", "Beidha bordj", "Bougaa", "Bir el arch", "Bouandas", "Bousselam", "Dehamcha", "Draa kebila", "El eulma", "El ouricia", "Boutaleb", "El ouldja", "Guelta zerka", "Djemila", "Hamma", "Guelal", "Guenzet", "Hammam guergour", "Ksar el abtal", "Maaouia", "Maoklane", "Mezloug", "Oued el barad", "Ouled addouane", "Harbil", "Ouled si ahmed", "Guidjel", "Ouled tebben", "Oum ladjoul", "Ouled sabor", "Serdj el ghoul", "Setif", "Salah bey", "Talaifacene", "Taya", "Tella", "Tizi nbechar", "Tachouda", "Rasfa"]
    }, {
        "id": 20,
        "name": "SAIDA",
        "communes": [ "Ain el hadjar", "Ain soltane", "Doui thabet", "Ain sekhouna", "Moulay larbi", "El hassasna", "Ouled brahim", "Maamora", "Ouled khaled", "Sidi ahmed", "Saida", "Hounet", "Sidi boubekeur", "Sidi amar", "Tircine", "Youb"]
    }, {
        "id": 21,
        "name": "SKIKDA",
        "communes": [ "Ain charchar", "Ain kechra", "Ain bouziane", "Bekkouche lakhdar", "Ain zouit", "Benazouz beni bechir", "Azzaba", "Beni oulbane", "Beni zid", "Bouchtata", "Ben el ouiden", "El baraj", "Boudoukha", "El ghedir el hadaik", "Cheraia", "El harrouch", "El marsa", "Djendel saadi mohamed", "El mechta", "Essebt", "Emdjez edchich", "Collo", "Gribiza", "Filfla", "Hamadi krouma", "Kanoua", "Kerkera", "Oued zehour", "Kheneg mayoum", "Ouled attia", "Oum toub", "Ouldja boulballout", "Oued lekbir", "Ramdane djamel", "Salah bouchaour", "Ragma", "Ouled hbaba", "Sidi nacer", "Sidi mezghiche", "Tamalous", "Skikda", "Zerdazas", "Radjettas", "Zeher", "Zitouna"]
    }, {
        "id": 22,
        "name": "SIDI BEL ABBES",
        "communes": [ "Ain adden", "Ain el berd", "Ain kada", "Ain tindamine", "Badredine el mokrani", "Amarnas", "Ain thrid", "Benachiba chelia", "Ben badis", "Bir el hammam", "Boudjebaa el bordj", "Chettouane belaila", "Boukhanafis", "Dhaya", "El hacaiba", "Hassi dahou", "Hassi zehana", "Makedra", "Lamtar", "Belarbi", "Merine", "Marhoum", "Mostefa ben brahim", "Moulay slissen", "Mcid", "Mezaourou", "Oued taourira", "Oued sefioun", "Sehala thaoura", "Redjem demouche", "Sidi ali benyoub", "Sfissef", "Oued sebaa", "Sidi bel abbes", "Sidi ali boussidi", "Sidi chaib", "Sidi dahou de zairs", "Sidi hamadouche", "Sidi brahim", "Sidi lahcene", "Ras el ma", "Tafissour", "Sidi yacoub", "Tabla", "Sidi khaled", "Taoudmout", "Teghalimet", "Tenira", "Tenezara", "Telagh", "Tilmouni", "Tessala", "Zerouala"]
    }, {
        "id": 23,
        "name": "ANNABA",
        "communes": [ "Annaba", "Barrahel", "Ain berda", "Chetaibi", "El hadjar", "Oued el aneb", "El bouni", "Cheurfa", "Eulma", "Seraidi", "Sidi amar", "Treat"]
    }, {
        "id": 24,
        "name": "GUELMA",
        "communes": ["Ain hessania",  "Ain reggada", "Ain ben beida", "Ain makhlouf", "Belkheir", "Ain sandel", "Bordj sabat", "Beni mezline", "Bou hachana", "Bouati mahmoud", "Ben djarah", "Bou hamdane", "Djeballah khemissi", "Boumahra ahmed", "Boughouf", "El fedjoudj", "Guellat bou dbaa", "Hammam maskhoutine", "Dahouara", "Hammam nbail", "Heliopolis", "Medjez amar", "Guelma", "Kheraza", "Nechmaya", "Medjez sfa", "Oued cheham", "Oued zenati", "Oued fragha", "Nadorah", "Ras el agba", "Salaoua announa", "Roknia", "Tamlouka", "Taya"]
    }, {
        "id": 25,
        "name": "CONSTANTINE",
        "communes": [ "Ain abid", "Ain smara", "Beni hamiden", "Ain kerma", "Constantine", "Didouche mourad", "El houria", "El khroub", "Ouled rahmoune", "Hamma bouziane", "Ibn ziad", "Zighoud youcef"]
    }, {
        "id": 26,
        "name": "MEDEA",
        "communes": [ "Ain boucif", "Aissaouia", "Aziz", "Ain ou ksir", "Beni slimane", "Berrouaghia", "Bir ben laabed", "Benchicao", "Baata", "Boghar", "Bouchrahil", "Boughezoui", "Bouaichoune", "Bouskene", "Bou aiche", "Chahbounia chelalet el adhaoura", "Damiat", "Cheniguel", "Deux bassins", "Derrag", "Draa essamar", "El azizia", "El hamdania", "El guelbelkebir", "El ouinet", "Hannacha", "El omaria", "Kef lakhdar", "Khams djouamaa", "Medjebar", "Ksar boukhari", "Djouab", "Meftaha", "Mezerana", "Meghraoua", "Ouamri", "Oued harbil", "Ouled", "Mihoub", "Ouled brahim", "Medea", "Ouled deide", "Ouled maaref", "Ouled antar", "Ouled hellal", "Rebaia bouachra", "Ouzera", "Oum el djalil", "Saneg", "Sedraia", "Sidi damed", "Si mahdjoub", "Sidi errabia", "Seghouane", "Sidi zahar", "Sidi ziane", "Sidi naamane", "Souagui", "Tafraout", "Tlatet eddouair", "Tamesguida", "Tablat", "Zoubiria"]
    }, {
        "id": 27,
        "name": "MOSTAGANEM",
        "communes": [ "Ain boudinar", "Achaacha", "Ain nouissi", "Ain sidi cherif", "Ain tadles", "El hassiane", "Bouguirat", "Khadra", "Fornaka", "Kheireddine", "Abdelmalek ramdane", "Mansourah", "Hassi maameche", "Mezghrane", "Mostaganem", "Nekmaria ouled boughalem", "Ouled el kheir", "Safsaf", "Sayada", "Hadjadj", "Sidi ali", "Sidi bellater", "Sidi lakhdaara", "Sirat", "Souaflia", "Tazgait", "Stidia", "Sour", "Mesra", "Touahria", "Ouled maallah"]
    }, {
        "id": 28,
        "name": "MSILA",
        "communes": ["Ain el melh", "Ain el hadjel",  "Ain fares", "Belaiba", "Ain errich", "Beni ilmane", "Bir foda", "Ain khadra", "Bouti sayah", "Dehahna", "Djebel messaad", "El hamel", "El houamed", "Chellal", "Bou saada", "Hammam dhalaa", "Khoubana", "Ben srour", "Maadid", "Benzouh", "Berhoum", "Magra", "Maarif", "Ouanougha", "Msila", "Ouled addi guebala", "Mtarfa", "Ouled dherradj", "Oued chair", "Ouled atia", "Ouled mansour", "Ouled sidi brahim", "Oultene", "Medjedel", "Sidi ameur", "Ouled slimane", "Sidi hadjeres", "Mcif", "Sidi mhamed", "Ouled madhi", "Souamaa", "Zarzour", "Tarmount", "Sidi aissa", "Slim", "Zerarka", "Tamsa"]
    }, {
        "id": 29,
        "name": "MASCARA",
        "communes": [ "Ain fares", "Ain fekan", "Alaimia", "Ain fras", "Beniane", "Ain ferah", "Bou hanifia", "Bou henni", "El bordj", "Chorfa", "El gaada", "Aouf", "El ghomri", "Ferraguig", "El menaouer", "Froha", "El keurt", "Guerdjoum", "Guittena", "Ghriss", "Gharrous", "Hachem", "Khalouia", "Hacine", "Mamounia", "Makdha", "Mascara", "Matemore", "Mohammadia", "Maoussa", "Oggaz", "Mocta douz", "Oued el abtal", "Ras ain amirouche", "Nesmoth", "Sedjerara", "Sidi abdeldjebar", "Oued taria", "Sidi abdelmoumen", "Sehailia", "Sidi boussaid", "Sidi kada", "Zelameta", "Sig", "Tighennif", "Zahana", "Tizi"]
    }, {
        "id": 30,
        "name": "OUARGLA",
        "communes": [ "Ain beida", "Balidat ameur", "Benaceur", "El hadjira", "Hassi messaoud", "Hassi ben abdellah", "El borma", "Megarine", "Ngoussa", "El allia", "Ouargla", "Rouissat", "Sidi khouiled", "Mnaguer", "Tamacine", "Sidi slimane", "Taibet", "Nezla", "Tebesbest", "Touggourt", "Zaouia el abidia"]
    }, {
        "id": 31,
        "name": "ORAN",
        "communes": [ "Ain el turck", "Arzew", "Ben freha", "Bethioua", "Bir el djir", "Ain el kerma", "Boufatis", "El ansser", "Ain el bia", "Boutlelis", "El braya", "Es senia", "Hassi ben okba", "Bousfer", "Hassi mefsoukh", "Hassi bounif", "Hassian toual", "Marsat el hadjadj", "Misseghine", "Oued tlelat", "Sidi benyebka", "Sidi maarouf", "Sidi chami", "Gdyel", "Oran", "Tafraoui"]
    }, {
        "id": 32,
        "name": "EL BAYADH",
        "communes": [ "Arbaouat", "Ain el orak", "Bougtoub", "Boualem", "Chellala", "Boussemghoun", "El abiod sidi cheikh", "El bayadh", "Cheguig", "El kheiter", "Brezina", "Ghassoul", "El mehara", "Kef el ahmar", "El bnoud", "Sidi tifour", "Sidi slimane", "Rogassa", "Sidi ameur", "Kraakda", "Tousmouline", "Stitten", ]
    }, {
        "id": 33,
        "name": "ILLIZI",
        "communes": [ "Debbeb", "Djanet", "Bordj omar driss", "Illizi", "Bordj el haouas", "In amenas"]
    }, {
        "id": 34,
        "name": "BORDJ BOU ARRERIDJ",
        "communes": ["Achabou", "Ain taghrout", "Ain tesra", "Belimour", "Bordj bou arreridj",  "Ben daoud", "Bordj ghedir", "Djaafra", "Colla", "Bir kasdali", "Bordj zemoura", "El hamadia", "El achir", "El anseur", "El ach", "El main", "Ghilassa", "El mhir", "Hasnaoua", "Ksour", "Khelil", "Mansoura", "Ouled brahem", "Ouled dahmane", "Ouled sidi brahim", "Medjana", "Ras el oued", "Rabta", "Haraza", "Taglait", "Sidi embarek", "Teniet en nasr", "Tafreg", "Tesmart", "Tixter"]
    }, {
        "id": 35,
        "name": "BOUMERDES",
        "communes": ["Afir", "Baghlia",  "Ben choud", "Bordj menaiel", "Boudouaou", "Boudouaou el bahri", "Boumerdes", "Beni amrane", "Chabet el ameur", "Bouzegza keddara", "Ammal", "Djinet", "El kharrouba", "Hammedi", "Corso", "Issers", "Khemis el khechna", "Larbatache", "Keddara", "Leghata", "Ouled aissa", "Ouled hedadj", "Dellys", "Ouled moussa", "Si mustapha", "Sidi daoud", "Souk el had", "Taourga", "Tidjelabine", "Thenia", "Naciria", "Timezrit", "Zemmouri"]
    }, {
        "id": 36,
        "name": "EL TAREF",
        "communes": [ "Ain el assel", "Ain kerma", "Asfour", "Ben mehdi", "Beni amar", "Berrihane", "Besbes", "Bougous", "Bouhadjar", "Bouteldja", "Chebaita mokhtar", "Chefia", "Chihani", "Drean", "El aioun", "El kala", "El taref", "Hammam beni salah", "Lac des oiseaux", "Oued zitoun", "Raml souk souarekh", "Zerizer", "Zitouna"]
    }, {
        "id": 37,
        "name": "TINDOUF",
        "communes": [ "Oum el assel", "Tindouf"]
    }, {
        "id": 38,
        "name": "TISSEMSILT",
        "communes": ["Ammari",  "Beni chaib", "Bordj el emir abdelkader", "Khemisti", "Didi lantri", "Bordj bou naama", "Larabaa", "Lazharia", "Lardjem", "Melaab", "Ouled bessem", "Oued el gherga", "Sidi abed", "Sidi boutouchent", "Layoune", "Tamalaht", "Sidi slimane", "Maassem", "Tissemsilt", "Theniet el had"]
    }, {
        "id": 39,
        "name": "EL OUED",
        "communes": [ "Debila", "Douar el ma", "Djamaa", "El igla", "El mghair", "Beni guecha", "El oued", "Bayadha", "Hassani abdelkrim", "Hassi khelifa", "Kouinine", "Guemar", "Mih ouansa", "Magrane", "Ouled el alenda", "Nakhla", "Oum touyour", "Mrara", "Hamraia", "Reguiba", "Sidi amrane", "Ourmas", "Sidi aoun", "Robbah", "Sidi khellil", "Taghzout", "Tendla", "Still", "Tayeb larbi", "Trifaoui"]
    }, {
        "id": 40,
        "name": "KHENCHeLA",
        "communes": [ "Ain touila", "Babar", "Baghai", "Bouhmama", "Chelia", "Cherchar", "Djellal", "El hamma", "El mahmal", "El oueldja", "Ensigha", "Fais", "Kais", "Khenchela", "Khirane", "Msara", "Mtoussa", "Ouled rechache", "Remila", "Tamza", "Yabous"]
    }, {
        "id": 41,
        "name": "SOUK AHRAS",
        "communes": ["Ain sanour",  "Ain soltane", "Ain zana", "Bir bouhouche", "Drea", "Hanancha", "Khedara", "Khemissa", "Mechroha", "Oued keberit", "Mdaourach", "Merahna", "Haddada", "Ouled driss", "Oum el adhaim", "Ragouba", "Ouled moumem", "Ouillen", "Safel el ouiden", "Sedrata", "Taoura", "Souk ahras", "Sid fredj", "Terraguelt", "Tiffech", "Zaarouria"]
    }, {
        "id": 42,
        "name": "TIPAZA",
        "communes": [ "Ahmar el ain", "Aghbal", "Ain tagourait", "Attatba", "Bou haroun", "Beni milleuk", "Bou ismail", "Bourkika", "Damous", "Cherchell", "Fouka", "Gouraya", "Douaouda", "Hadjeret ennous", "Hadjout", "Khemisti", "Kolea", "Menaceur", "Messelmoun", "Meurad", "Larhat", "Sidi ghiles", "Chaiba", "Sidi amar", "Nador", "Sidi rached", "Tipaza", "Sidi semiane"]
    }, {
        "id": 43,
        "name": "MILA",
        "communes": [ "Ain mellouk", "Ahmed rachedi", "Ain tine", "Ain beida harriche", "Amira arras", "Benyahia abderrahmane", "Bouhatem", "Chelghoum laid", "Chigara", "Derradji bousselah", "El mechira", "Elayadi barbes", "Ferdjioua", "Grarem gouga", "Hamala", "Mila", "Minar zarza", "Oued athmania", "Oued endja", "Oued seguen", "Ouled khalouf", "Rouached", "Sidi khelifa", "Sidi merouane", "Tadjenanet", "Tassadane haddada", "Telerghma", "Terrai bainem", "Tiberguent", "Yahia beniguecha", "Tessala ldematai", "Zeghaia"]
    }, {
        "id": 44,
        "name": "AIN DEFLA",
        "communes": [ "Ain benian", "Ain bouyahia", "Ain defla", "Ain soltane", "Ain torki", "Ain lechiekh", "Bathia", "Bellas", "Ben allal", "Bir ould khelifa", "Bordj emir khaled chikh", "Bouchared", "Boumedfaa", "Barbouche", "Djemaa ouled", "Djelida", "El abadia", "El amra", "El attaf", "El hassania", "Djendel", "Arib", "El maine", "Khemis miliana", "Mekhatria", "Hammam righa", "Hoceinia", "Oued djemaa", "Miliana", "Oued chorfa", "Sidi lakhdar", "Tacheta zougagha", "Tarik ibn ziad", "Rouina", "Zeddine", "Tiberkanine"]
    }, {
        "id": 45,
        "name": "NAAMA",
        "communes": [ "Ain sefra", "Ain ben khelil", "Djeniane bourzeg", "El biod", "Makman ben amer", "Assela", "Mecheria", "Moghrara", "Kasdir", "Sfissifa", "Tiout", "Naama"]
    }, {
        "id": 46,
        "name": "AIN TEMOUCHENT",
        "communes": [ "Ain temouchent", "Ain kihal", "Ain tolba", "Aoubellil", "Beni saf", "Bou zedjar", "Chaabet el ham", "El amria", "Ain el arbaa", "El emir abdelkader", "Chentouf", "El messaid", "Hammam bouhadjar", "Hassasna", "Oued berkeche", "Hassi el ghella", "El malah", "Ouled boudjemaa", "Aghlal", "Oulhaca el gheraba", "Oued sabah", "Sidi ben adda", "Tadmaya", "Sidi safi", "Sidi boumedienne", "Ouled kihal", "Tamzoura", "Terga"]
    }, {
        "id": 47,
        "name": "GHARDAIA",
        "communes": [ "Dhayet bendhahoua", "Berriane", "El atteuf", "El guerrara", "El menia", "Ghardaia", "Hassi fehal", "Mansoura", "Hassi gara", "Metlilli", "Bounoura", "Zelfana", "Sebseb"]
    }, {
        "id": 48,
        "name": "RELIZANE",
        "communes": ["Ain rahma",  "Ain tarek", "Ammi moussa", "Belassel bouzegza", "Beni zentis", "Beni dergoun", "Dar ben abdellah", "Dahra", "Djidioua", "El guettar", "Bendaoud", "El hamadna", "El matmar", "Had echkalla", "Hamri", "El hassi", "El ouldja", "Kalaa", "Mediouna", "Merdja sidi abed", "Lahlef", "Oued essalem", "Mazouna", "Ouarizane", "Ouled aiche", "Ouled el djemaa", "Ouled sidi mihoub", "Ramla", "Oued rhiou", "Sidi khettab", "Sidi lazreg", "Sidi mhamed benaouda", "Mendes", "Sidi saada", "Sidi mhamed ben ali", "Relizane", "Souk el had", "Yellel", "Zemmoura"]
    }
]

export default wilays