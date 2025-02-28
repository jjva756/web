import type { Weapon } from "@shared/schema";

export const weapons: Weapon[] = [
  {
    id: 1,
    name: "Gladius Romana",
    period: "República e Imperio Romano",
    yearStart: -200,
    yearEnd: 200,
    description: "Espada corta romana que se convirtió en el arma estándar de las legiones. Medía entre 60-70 cm de longitud, con una hoja ancha de doble filo perfectamente equilibrada para corte y estocada.",
    imageUrl: "https://i.postimg.cc/L4PtG85X/gladius-romana.jpg",
    culturalContext: "Símbolo del poder militar romano y de la estandarización de su ejército. La Gladius representaba la profesionalización de las legiones y su adopción marcó una revolución en las tácticas militares romanas."
  },
  {
    id: 2,
    name: "Khopesh Egipcio",
    period: "Antiguo Egipto",
    yearStart: -2000,
    yearEnd: -1000,
    description: "Espada-hoz característica del antiguo Egipto, con una distintiva hoja curva de bronce. Su diseño único combinaba las capacidades de corte de un hacha con el alcance de una espada.",
    imageUrl: "https://i.postimg.cc/wTqLbcmq/khopesh-egipcio.jpg",
    culturalContext: "Arma ceremonial y de guerra que simbolizaba el poder del faraón. Aparece frecuentemente en relieves y pinturas egipcias."
  },
  {
    id: 3,
    name: "Dory Griega",
    period: "Antigua Grecia",
    yearStart: -800,
    yearEnd: -146,
    description: "Lanza principal de los hoplitas griegos, con una longitud de 2-3 metros. Fabricada con un asta de fresno y punta de hierro con contrapeso.",
    imageUrl: "https://i.postimg.cc/m21jSSfP/dory-griega.jpg",
    culturalContext: "Fundamental en la táctica de la falange griega, simbolizaba la disciplina y el trabajo en equipo."
  },
  {
    id: 4,
    name: "Hoplon",
    period: "Antigua Grecia",
    yearStart: -700,
    yearEnd: -400,
    description: "Escudo circular cóncavo de bronce y madera de 1 metro de diámetro. Su forma ergonómica distribuía el peso de manera eficiente y su borde permitía usarlo como arma secundaria en combate cercano. La capa de bronce proporcionaba protección contra golpes y flechas, mientras que la madera absorbía el impacto.",
    imageUrl: "https://i.postimg.cc/4dwF6s0v/hoplon.jpg", 
    culturalContext: "El hoplon era tan fundamental para la guerra griega que dio nombre a los hoplitas. En la falange, cada escudo protegía también al soldado a la izquierda, fomentando la cohesión de la unidad y el espíritu de equipo. Los escudos eran personalizados con símbolos de la ciudad-estado y emblemas personales, reflejando tanto la identidad individual como la lealtad a la polis."
  },
  {
    id: 5,
    name: "Hacha Vikinga",
    period: "Era Vikinga",
    yearStart: 793,
    yearEnd: 1066,
    description: "Hacha de batalla versátil, más ligera que las espadas y capaz de atravesar armaduras y escudos. Su diseño permitía tanto cortes devastadores como enganches y desarmes. El hacha vikinga era también una herramienta práctica, utilizada tanto en la vida cotidiana como en el combate.",
    imageUrl: "https://i.postimg.cc/Dyf4pFMJ/hacha-vikinga.jpg",
    culturalContext: "El hacha vikinga representaba la naturaleza práctica y versátil de la cultura nórdica. Era tanto una herramienta de trabajo como un arma de guerra, reflejando la mentalidad pragmática de los vikingos. Su uso efectivo requería gran habilidad y fuerza, y muchas hachas se convertían en herencias familiares, transmitidas de generación en generación."
  },
  {
    id: 6,
    name: "Arco Compuesto Mongol",
    period: "Imperio Mongol",
    yearStart: 1206,
    yearEnd: 1368,
    description: "Arco recurvo de materiales compuestos que proporcionaba gran potencia en un tamaño compacto, ideal para la caballería. Fabricado con capas de madera, cuerno y tendón, podía disparar flechas a más de 300 metros con precisión mortal. Su diseño asimétrico permitía disparar desde el caballo en movimiento.",
    imageUrl: "https://i.postimg.cc/X7Xd74kM/arco-compuesto-mongol.jpg",
    culturalContext: "El arco compuesto mongol fue crucial en la creación del mayor imperio terrestre de la historia. Los arqueros mongoles entrenaban desde la infancia, y la combinación de movilidad a caballo y poder de fuego a distancia revolucionó la guerra medieval. La fabricación del arco era un arte que requería años de experiencia y materiales específicos."
  },
  {
    id: 7,
    name: "Maza de Guerra",
    period: "Medieval",
    yearStart: 1000,
    yearEnd: 1500,
    description: "Arma contundente diseñada para combatir armaduras de placas, con cabeza pesada y diversos diseños de protuberancias. Las mazas podían variar desde simples garrotes con cabeza de metal hasta elaboradas armas con flanges y picos diseñados específicamente para penetrar armaduras. Su efectividad residía en la transferencia de energía cinética a través de la armadura.",
    imageUrl: "https://i.postimg.cc/hPdDD564/maza-de-guerra.jpg",
    culturalContext: "La maza de guerra surgió como respuesta directa a la evolución de las armaduras de placas. Cuando las espadas y las hachas comenzaron a perder efectividad contra las armaduras más avanzadas, la maza se convirtió en el arma preferida de muchos caballeros. Su uso requería menos entrenamiento que una espada, pero su efectividad en combate era innegable."
  },
  {
    id: 8,
    name: "Daga de Cruzado",
    period: "Cruzadas",
    yearStart: 1095,
    yearEnd: 1291,
    description: "Daga robusta utilizada como arma secundaria, especialmente efectiva en combate cercano y contra oponentes armados. Su hoja triangular estaba diseñada para penetrar las juntas de las armaduras, y su empuñadura cruciforme servía tanto para el combate como para la oración. Muchas dagas de cruzado incluían reliquias o inscripciones religiosas.",
    imageUrl: "https://i.postimg.cc/Fs7MNkfj/daga-de-rondel.jpg",
    culturalContext: "Las dagas de cruzado eran tanto armas como símbolos religiosos, representando la fusión de la guerra y la fe durante las Cruzadas. Su diseño incorporaba elementos cristianos y era común que los caballeros juraran votos sobre estas armas. El intercambio cultural durante las Cruzadas influyó en su evolución, incorporando elementos de diseño tanto europeos como medio orientales."
  },
  {
    id: 9,
    name: "Shamshir Persa",
    period: "Persia Medieval",
    yearStart: 1300,
    yearEnd: 1800,
    description: "Sable curvo persa conocido por su excepcional filo y elegante diseño, optimizado para el corte desde el caballo. La curvatura pronunciada de la hoja permitía realizar cortes devastadores durante las cargas de caballería. El acero de Damasco utilizado en su fabricación le daba una resistencia y filo legendarios.",
    imageUrl: "https://i.postimg.cc/5yQzgm04/shamshir-persa.png",
    culturalContext: "El Shamshir representa la cumbre de la artesanía persa en la fabricación de armas. Su diseño influyó en la evolución de los sables en todo el mundo islámico y más allá. Los herreros que podían fabricar estas armas eran altamente respetados, y las mejores hojas se consideraban obras de arte además de armas letales."
  },
  {
    id: 10,
    name: "Lanza Qiang",
    period: "China Imperial",
    yearStart: -200,
    yearEnd: 1900,
    description: "Lanza china flexible con hoja en forma de hoja, conocida por su versatilidad y alcance. El asta de la Qiang estaba fabricada con madera de wax tree, conocida por su flexibilidad y resistencia. La hoja podía variar en forma y tamaño, pero siempre mantenía un equilibrio perfecto para permitir técnicas avanzadas.",
    imageUrl: "https://i.postimg.cc/9Mv70NPd/lanza-qiang.jpg",
    culturalContext: "La Qiang es una de las cuatro armas principales de las artes marciales chinas, junto con la espada, el sable y el bastón. Su uso requería años de entrenamiento y se consideraba el 'Rey de las Armas Largas'. En la literatura y el arte chino, la Qiang simbolizaba la virtud militar y la maestría marcial."
  },
  {
    id: 11,
    name: "Yumi Samurái",
    period: "Japón Feudal",
    yearStart: 1185,
    yearEnd: 1868,
    description: "Arco asimétrico japonés de bambú y madera, excepcionalmente alto y potente. Su construcción única combinaba bambú, madera y cuero, creando un arma que podía disparar flechas con gran precisión y poder de penetración. La asimetría del diseño permitía disparar tanto a pie como a caballo.",
    imageUrl: "https://i.postimg.cc/Z59VDX7m/yumi-samuria.jpg",
    culturalContext: "El Yumi era mucho más que un arma para los samurái; era un instrumento de desarrollo espiritual. La práctica del Kyudo (tiro con arco) se consideraba una forma de meditación y autodisciplina. La fabricación del Yumi era un arte sagrado, y los arqueros más hábiles eran venerados como maestros espirituales además de guerreros."
  },
  {
    id: 12,
    name: "Estoque Italiano",
    period: "Renacimiento",
    yearStart: 1400,
    yearEnd: 1700,
    description: "Espada de estocada con hoja fina y larga, diseñada para el combate civil y la esgrima. Su diseño enfatizaba la precisión y la velocidad sobre la fuerza bruta. La compleja empuñadura protegía la mano mientras permitía una manipulación sofisticada del arma. Era el arma preferida de los duelistas y nobles.",
    imageUrl: "https://i.postimg.cc/g0F9GJd0/estoque-italiano.jpg",
    culturalContext: "El estoque simboliza la transición del combate medieval a un arte más refinado y técnico. Su uso requería años de estudio y práctica, y las escuelas de esgrima se convirtieron en centros de desarrollo tanto marcial como intelectual. Los manuales de esgrima de la época demuestran la complejidad y sofisticación de su uso."
  },
  {
    id: 13,
    name: "Zweihänder Landsknecht",
    period: "Renacimiento",
    yearStart: 1500,
    yearEnd: 1600,
    description: "Espada a dos manos de gran tamaño, usada por la infantería mercenaria alemana para romper formaciones. Con una longitud total que podía superar los 1,8 metros, requería una fuerza y habilidad excepcionales para su manejo efectivo. Las protuberancias cerca de la empuñadura (parrying hooks) permitían bloquear armas enemigas.",
    imageUrl: "https://i.postimg.cc/1t9WMB81/sweihander.jpg",
    culturalContext: "El Zweihänder era tanto un arma como un símbolo de estatus entre los Landsknechts. Los portadores de estas espadas recibían doble paga y se consideraban la élite de las unidades mercenarias. Su uso en batalla demostraba tanto la fuerza como la habilidad del portador, y las espadas a menudo se decoraban con grabados e inscripciones personalizadas."
  },
  {
    id: 14,
    name: "Main Gauche",
    period: "Renacimiento",
    yearStart: 1500,
    yearEnd: 1700,
    description: "Daga de mano izquierda diseñada específicamente para complementar al estoque en combate civil. Su guarda elaborada servía tanto para atrapar la hoja enemiga como para proteger la mano. La hoja a menudo incluía muescas y diseños complejos diseñados para enganchar y romper la espada del oponente.",
    imageUrl: "https://i.postimg.cc/WzVJ0Yz0/main-gauche.jpg",
    culturalContext: "La Main Gauche representa la sofisticación del duelo renacentista. Su uso junto con el estoque creó un estilo de combate complejo que combinaba defensa y ataque. Las escuelas de esgrima desarrollaron técnicas elaboradas para el uso conjunto de ambas armas, y la capacidad de manejar la combinación era marca de un esgrimista consumado."
  }
];