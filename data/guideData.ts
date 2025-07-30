
import { GuideData, ZodiacSignData } from '../types';
import SparklesIcon from '../components/icons/SparklesIcon';
import GalaxyIcon from '../components/icons/GalaxyIcon';
import SeedlingIcon from '../components/icons/SeedlingIcon';
import CalendarDaysIcon from '../components/icons/CalendarDaysIcon';
import MoonIcon from '../components/icons/MoonIcon';

export const zodiacSigns: ZodiacSignData[] = [
    { name: 'Aries', emoji: '♈', description: 'Este año te propone un cambio profundo en tu manera de liderar. Con un eclipse en tu signo en marzo y Plutón activando tu casa 11, las amistades, los grupos y tu lugar en la sociedad serán claves. Aprendé a delegar y confiar en el equipo. El nodo norte te invita a protagonizar sin atropellar.', opportunity: 'Iniciar un nuevo proyecto con impacto colectivo.', challenge: 'Manejar la impaciencia y no tomar decisiones impulsivas.', affirmation: 'Mi fuego guía, no quema.' },
    { name: 'Tauro', emoji: '♉', description: 'Urano sigue sacudiendo tus raíces, y eso no es malo. Hay algo que necesitás reinventar en tu forma de relacionarte con la estabilidad y el confort. Mercurio retrógrado en tu signo a mitad de año te dará el empujón para redefinir prioridades.', opportunity: 'Liberarte de apegos materiales o rutinas estancadas.', challenge: 'Soltar el control y confiar en los procesos.', affirmation: 'Me permito cambiar para florecer.' },
    { name: 'Géminis', emoji: '♊', description: 'Júpiter te bendice con expansión, ideas y comunicación. Vas a estar más social que nunca. Es un año perfecto para estudiar, enseñar o lanzar un proyecto digital. Cuidá tu energía mental: no todo lo que brilla es oro.', opportunity: 'Comunicar con propósito y conectar con nuevas redes.', challenge: 'Enfocarte y sostener procesos.', affirmation: 'Mi palabra es semilla de creación.' },
    { name: 'Cáncer', emoji: '♋', description: 'El cielo te pide que pongas límites amorosos. Es un año donde vas a reevaluar relaciones, especialmente familiares. Júpiter en tu casa 12 te lleva a una conexión espiritual profunda. Hacia octubre, cuando entra en tu signo, será tu momento de expansión.', opportunity: 'Sanar heridas del pasado y perdonar.', challenge: 'Soltar el rol de salvador/a.', affirmation: 'Merezco vínculos que me nutran.' },
    { name: 'Leo', emoji: '♌', description: 'Con Plutón afectando tu zona de pareja y sociedades, puede haber transformaciones intensas en el amor o en lo laboral. Nada será superficial. Se abren oportunidades para redefinir tus compromisos desde un lugar más auténtico.', opportunity: 'Consolidar una alianza poderosa.', challenge: 'Dejar de controlar cómo debe ser el otro.', affirmation: 'Brillo desde mi verdad.' },
    { name: 'Virgo', emoji: '♍', description: 'Eclipses y lunaciones fuertes pasan por tu signo este año. Es un ciclo de mucha limpieza energética y emocional. Vas a sentir la necesidad de cuidar tu cuerpo, tu mente y tus espacios. Puede haber revelaciones sobre salud, hábitos o trabajo.', opportunity: 'Crear nuevas rutinas que te eleven.', challenge: 'No caer en la autoexigencia excesiva.', affirmation: 'Elijo lo que me ordena y me sana.' },
    { name: 'Libra', emoji: '♎', description: 'El eje de las relaciones sigue siendo un tema central para vos. Aries trae desafíos de identidad y autenticidad. Vas a querer estar en armonía pero también más libre. Es buen momento para repensar vínculos, contratos o asociaciones.', opportunity: 'Definir nuevos acuerdos más conscientes.', challenge: 'Dejar de postergarte por agradar.', affirmation: 'Merezco relaciones donde yo también me elija.' },
    { name: 'Escorpio', emoji: '♏', description: 'Saturno en tu zona creativa te invita a profesionalizar tus dones. Es momento de materializar eso que hace tiempo late dentro tuyo. Plutón en Acuario también remueve estructuras en lo familiar: hay herencias emocionales que ya no te definen.', opportunity: 'Dedicarte a lo que te apasiona.', challenge: 'Confiar en tu valor y mostrarte.', affirmation: 'Soy la alquimia que transforma mi mundo.' },
    { name: 'Sagitario', emoji: '♐', description: 'Júpiter en Géminis activa tu zona de pareja: mucha expansión a través del otro. Pueden aparecer vínculos espejos que te ayuden a crecer. Cuidá el exceso de optimismo o dispersión. Elegí calidad por sobre cantidad.', opportunity: 'Abrirte a una nueva forma de amar.', challenge: 'Comprometerte con profundidad.', affirmation: 'El amor me encuentra en mi verdad.' },
    { name: 'Capricornio', emoji: '♑', description: 'Saturno, tu regente, sigue pidiéndote madurez emocional. Las palabras serán clave este año: cómo las decís, con quién y para qué. En los primeros meses, Mercurio retrógrado te invita a replantearte decisiones importantes.', opportunity: 'Dar estructura a un nuevo proyecto comunicacional o educativo.', challenge: 'Salir del piloto automático.', affirmation: 'Soy la raíz de mi transformación.' },
    { name: 'Acuario', emoji: '♒', description: 'Plutón inicia un largo tránsito por tu signo, y eso marca un antes y un después. Tus valores, tu imagen, tu propósito: todo puede transformarse. Este es un año de empoderamiento. También de soltar viejas identidades que ya no te representan.', opportunity: 'Renacer desde tu autenticidad.', challenge: 'Aceptar que no podés controlar todo.', affirmation: 'Honro el poder que nace desde dentro.' },
    { name: 'Piscis', emoji: '♓', description: 'Saturno y Neptuno siguen en tu signo por ahora, profundizando un proceso espiritual intenso. Es tiempo de elegir qué sueños querés hacer realidad y cuáles soltar. Mucha energía de maduración, sensibilidad y visión.', opportunity: 'Asumir tu rol como guía o creador/a.', challenge: 'Poner límites energéticos sin perder tu esencia.', affirmation: 'Soy canal de inspiración y sanación.' },
];


export const guideData: GuideData = {
    mainSections: [
        {
            id: 'introduccion',
            title: 'Introducción',
            icon: SparklesIcon,
            content: [
                { type: 'heading', text: '1.1 Bienvenida a 2025 y Propósito de la Guía' },
                { type: 'paragraph', text: '¡Bienvenida/o a esta Guía Astrológica Anual 2025! No estás aquí por casualidad. Si esta guía llegó a tus manos es porque algo dentro tuyo está buscando claridad, dirección y acompañamiento en este nuevo ciclo que comienza. El 2025 es un año con movimientos celestes profundos, que traerán consigo oportunidades de transformación, cierres de ciclo y nuevos comienzos. En ese contexto, esta guía fue creada para que te acompañe paso a paso, mes a mes, ayudándote a comprender las energías disponibles y cómo aprovecharlas en tu vida cotidiana.' },
                { type: 'paragraph', text: 'Este no es un simple calendario ni una agenda tradicional. Es un espacio vivo de exploración personal, espiritualidad y acción consciente. Está pensada para que te reconectes con tus ciclos internos, te alinees con los ritmos del cielo y puedas vivir el 2025 desde un lugar de mayor presencia, intención y autenticidad. Cada mes estará guiado por los tránsitos astrológicos más importantes, acompañado por ejercicios de journaling, rituales, meditaciones, mandalas para colorear y espacio para la planificación personal.' },
                { type: 'heading', text: '1.2 Sugerencias de Uso' },
                { type: 'paragraph', text: 'Esta guía está diseñada para ser recorrida de manera flexible. Podés usarla diariamente, semanalmente o mensualmente, según tu tiempo y tus necesidades. Cada sección mensual tiene un formato similar para ayudarte a establecer una rutina de introspección, acción y cuidado personal:' },
                { type: 'list', items: [
                    'Leé primero el "Clima Astrológico del Mes" para conocer la energía general que lo atraviesa.',
                    'Consultá el calendario astrológico para marcar fechas clave (lunas, eclipses, tránsitos importantes).',
                    'Realizá el ejercicio de intenciones durante la Luna Nueva y el ritual propuesto para la Luna Llena.',
                    'Usá los espacios de journaling al inicio y al final del mes para reflexionar sobre lo que esperás, lo que viviste y lo que aprendiste.',
                    'Coloreá la mandala como acto meditativo y creativo.',
                    'Planificá tus semanas teniendo en cuenta las energías disponibles, y usá las frases inspiradoras como recordatorios diarios.'
                ]},
                { type: 'paragraph', text: 'La guía incluye meditaciones guiadas a las que podés acceder escaneando los códigos QR correspondientes. También podés unirte a la comunidad online donde mes a mes compartiremos reflexiones y acompañamiento.' },
                { type: 'heading', text: '1.3 Estado Emocional Inicial' },
                { type: 'paragraph', text: 'Antes de comenzar con el mes de enero, te invito a hacer una pausa y escribir unas palabras sobre tu presente. Este es un espacio sagrado para vos. Respondé, sin filtros:' },
                 { type: 'list', items: [
                    '¿Cómo llegás a este nuevo año?',
                    '¿Qué sueños y anhelos querés manifestar en 2025?',
                    '¿Qué miedos, heridas o patrones querés soltar?',
                    '¿Qué intención principal querés sembrar para este ciclo?'
                ]},
                { type: 'paragraph', text: 'Volvé a estas palabras cada vez que te sientas perdido/a o necesites reconectar con tu propósito. Este es tu viaje. Esta es tu guía. Y este es tu año. ¡Empecemos!' },
            ]
        },
        {
            id: 'panorama-anual',
            title: 'Panorama Anual',
            icon: GalaxyIcon,
            content: [
                { type: 'heading', text: '2.1 Visión general del año' },
                { type: 'paragraph', text: 'El 2025 se presenta como un año clave para transitar grandes transformaciones personales y colectivas. Será un ciclo que pondrá en juego la autenticidad, la sanación emocional y la concreción de proyectos que estuvieron gestándose en años anteriores. Con varios planetas haciendo movimientos importantes, los temas de libertad, estructura, intuición y renovación estarán muy presentes.' },
                { type: 'subheading', text: 'Ejes temáticos del año:' },
                { type: 'list', items: [
                    '<b>Cierre de ciclos y renacimiento:</b> con Saturno y Neptuno despidiéndose de Piscis para prepararse a entrar en Aries, sentiremos el llamado a dejar atrás viejas formas de sacrificio, confusión o evasión.',
                    '<b>Innovación y conexión:</b> Urano sigue avanzando en Tauro y nos empuja a revisar nuestro vínculo con la seguridad, el cuerpo, el dinero y la tierra.',
                    '<b>El poder del corazón:</b> Júpiter transitará Géminis, expandiendo nuestra comunicación, relaciones, ideas y vínculos fraternos.',
                    '<b>Transformación profunda:</b> Plutón consolidará su entrada en Acuario, instalando cambios duraderos en lo social, tecnológico y colectivo.'
                ]},
                { type: 'heading', text: '2.2 Calendario Astrológico del Año' },
                { type: 'paragraph', text: 'A continuación, te compartimos los principales eventos astrológicos de 2025. Esta guía mensual los desarrollará en mayor profundidad, pero aquí tenés una vista global:' },
                { type: 'subheading', text: 'Mercurio retrógrado:' },
                { type: 'list', items: ['14 de enero al 4 de febrero (en Capricornio)', '13 de mayo al 3 de junio (en Tauro)', '5 al 28 de septiembre (en Virgo)', '1 al 25 de diciembre (en Sagitario)'] },
                { type: 'subheading', text: 'Eclipses:' },
                { type: 'list', items: ['14 de marzo – Eclipse parcial de Luna en Virgo', '29 de marzo – Eclipse total de Sol en Aries', '7 de septiembre – Eclipse parcial de Luna en Piscis', '21 de septiembre - Eclipse anular de Sol en Virgo'] },
                { type: 'subheading', text: 'Otros tránsitos clave:' },
                { type: 'list', items: ['Júpiter entra en Cáncer – 10 de octubre', 'Marte retrógrado – del 7 de diciembre al 23 de febrero 2026', 'Venus retrógrado – NO hay en 2025 (¡respiro emocional!)', 'Saturno se prepara para cambiar de signo (de Piscis a Aries en 2026)'] },
                { type: 'heading', text: '2.3 Energía disponible: cómo aprovechar el 2025' },
                { type: 'paragraph', text: 'Este año será ideal para:' },
                { type: 'list', items: ['Cerrar procesos que comenzaron en 2023 o antes.', 'Tomar decisiones desde la intuición y la mente clara.', 'Reformular ideas limitantes sobre el amor, el éxito y la espiritualidad.', 'Sanar heridas relacionadas con la autoexpresión y los vínculos.', 'Crear estructuras nuevas que sostengan lo que verdaderamente somos.'] },
                { type: 'subheading', text: 'Recomendaciones generales:' },
                { type: 'list', items: ['Permitite revisar lo que ya no funciona sin miedo al cambio.', 'Usá los eclipses para hacer limpieza emocional y los tránsitos de Júpiter para expandir tus dones.', 'Mantené la conexión con tu cuerpo y tu entorno como ancla de estabilidad.'] },
                { type: 'heading', text: '3. Guía Rápida por Signo Zodiacal' },
                { type: 'paragraph', text: 'Cada signo del zodiaco recibirá en este año astrológico 2025 una serie de desafíos y oportunidades únicos. Esta guía rápida te ofrece una mirada general para tu signo solar (y si querés, también para tu ascendente) sobre cómo transitar este ciclo con mayor conciencia. Te invito a leer también el signo siguiente al tuyo y tu signo opuesto para ampliar tu mirada.' },
                { type: 'zodiac-grid' }
            ]
        },
        {
            id: 'preparacion',
            title: 'Preparación',
            icon: SeedlingIcon,
            content: [
                 { type: 'heading', text: '4.1 Visión Personal para 2025' },
                 { type: 'paragraph', text: 'Tomate un momento para conectar con tu visión de este nuevo ciclo. Este espacio es tuyo, para imaginar, intencionar y trazar el camino hacia lo que deseás vivir.'},
                 { type: 'subheading', text: 'Ejercicio:'},
                 { type: 'list', items: ['Cerrá los ojos. Imaginá que es 31 de diciembre de 2025. ¿Cómo querés sentirte al mirar hacia atrás?', '¿Qué logros te gustaría celebrar?', '¿Qué energía querés sostener a lo largo del año?', '¿Qué palabra o frase querés que sea tu lema del año?']},
                 { type: 'heading', text: '4.2 Objetivos por Áreas de Vida' },
                 { type: 'paragraph', text: 'Te propongo que dividas tu energía y tus objetivos en distintas áreas para tener una mirada más integral. A continuación, completá cada sección con tus metas para el año:'},
                 { type: 'list', items: ['Salud y cuerpo:', 'Emociones y vínculos:', 'Trabajo y proyectos:', 'Espiritualidad y conexión:', 'Creatividad y disfrute:', 'Finanzas y recursos:']},
                 { type: 'heading', text: '4.3 Calendario Anual Personal' },
                 { type: 'paragraph', text: 'Acá podés anotar los momentos clave del año: cumpleaños, viajes, mudanzas, fechas importantes para vos o tus seres queridos. También podés agregar eventos astrológicos que quieras seguir de cerca, como eclipses, retrógrados o lunaciones especiales.'},
                 { type: 'heading', text: '4.4 Ritual de Inicio de Año' },
                 { type: 'ritual', title: 'Ritual "Sembrando mi Año"', text: '<b>Elementos:</b>\n- Una vela blanca\n- Papel y lápiz\n- Un recipiente con tierra o una planta\n\n<b>Pasos:</b>\n1. Elegí un lugar tranquilo donde no seas interrumpido/a.\n2. Encendé la vela y hacé unas respiraciones profundas.\n3. Escribí en un papel 3 intenciones claras para el año.\n4. Leé en voz alta cada intención, con convicción.\n5. Enterrá ese papel en la tierra o cerca de la planta.\n6. Agradecé al universo por este nuevo ciclo y apagá la vela con gratitud.'}
            ]
        },
        {
            id: 'ciclo-mensual',
            title: 'Ciclo Mensual',
            icon: CalendarDaysIcon,
            subSections: [
                {id: 'enero', title: 'Enero: Raíces y comienzos', content: [
                    { type: 'heading', text: 'Clima Astrológico del Mes' },
                    { type: 'paragraph', text: 'El año comienza con una fuerte energía de tierra gracias al Sol en Capricornio, lo cual nos invita a iniciar el ciclo con estructura, metas claras y visión a largo plazo. Hacia la segunda quincena, con la entrada del Sol en Acuario, la energía cambia hacia lo colectivo, lo innovador, y lo visionario.'},
                    { type: 'subheading', text: 'Calendario Astrológico de Enero' },
                    { type: 'event-list', items: [ {date: '1 al 4', event: 'Mercurio retrógrado en Capricornio'}, {date: '11 de enero', event: 'Luna nueva en Capricornio'}, {date: '21 de enero', event: 'Sol entra en Acuario'}, {date: '25 de enero', event: 'Luna llena en Leo'} ]},
                    { type: 'ritual', title: 'Ritual de Luna Llena (25/01): "Encendé tu fuego interior"', text: 'En esta luna llena en Leo, conectá con tu luz. Vestite con colores cálidos, escribí un poema o carta de amor a vos mismo/a, encendé una vela dorada y agradecé por tu autenticidad.'},
                    { type: 'mandala', title: 'Mandala de Enero', text: 'Mandala con motivos capricornianos – montaña, cabra, estrella de cinco puntas.'},
                    { type: 'quote', text: 'Las raíces fuertes hacen posible que las alas se abran.'},
                ]},
                {id: 'febrero', title: 'Febrero: Conexión y libertad', content: [
                    { type: 'heading', text: 'Clima Astrológico del Mes' },
                    { type: 'paragraph', text: 'Febrero nos sumerge en una atmósfera más introspectiva, sensible y espiritual. A partir del 19, el Sol entra en Piscis, suavizando el tono y llevándonos hacia un viaje de escucha profunda.'},
                    { type: 'subheading', text: 'Calendario Astrológico de Febrero' },
                    { type: 'event-list', items: [ {date: '9 de febrero', event: 'Luna nueva en Acuario'}, {date: '19 de febrero', event: 'El Sol entra en Piscis'}, {date: '23 de febrero', event: 'Luna llena en Virgo'} ]},
                    { type: 'ritual', title: 'Ritual de Luna Llena (23/02): "Orden sagrado"', text: 'Limpiá un espacio de tu casa que represente tu mente (escritorio, cocina, ropero). Mientras lo hacés, repetí en voz alta: “Cada cosa en su lugar, cada emoción en su tiempo". Terminá encendiendo una vela blanca y anotando todo lo que decidís soltar.'},
                    { type: 'mandala', title: 'Mandala de Febrero', text: 'Mandala con elementos de aire y agua – ondas, estrellas, gotas, peces.'},
                    { type: 'quote', text: 'Ser libre también es elegir lo que nutre mi alma.'},
                ]},
                {id: 'marzo', title: 'Marzo: Eclipses y renacimiento', content: [
                    { type: 'heading', text: 'Clima Astrológico del Mes' },
                    { type: 'paragraph', text: 'Marzo es uno de los meses más potentes del año. Con dos eclipses (uno lunar en Virgo y uno solar total en Aries), nos enfrentamos a momentos clave de cierre, revelación y reinicio.'},
                    { type: 'subheading', text: 'Calendario Astrológico de Marzo' },
                    { type: 'event-list', items: [ {date: '14 de marzo', event: 'Eclipse parcial de Luna en Virgo (Luna Llena)'}, {date: '20 de marzo', event: 'Equinoccio de marzo – el Sol entra en Aries'}, {date: '29 de marzo', event: 'Eclipse total de Sol en Aries (Luna Nueva potente)'} ]},
                    { type: 'ritual', title: 'Ritual del Eclipse Solar (29/03): "Renacer con intención"', text: 'Creá un altar pequeño con una vela roja, una piedra que represente tu fuerza (jaspe rojo, granate) y una imagen tuya de hace años. Encendé la vela y mirá la imagen. Agradecé a esa versión que te trajo hasta acá. Escribí: "Renazco desde..." y completalo. Quemá ese papel como símbolo de tu renacimiento.'},
                    { type: 'mandala', title: 'Mandala de Marzo', text: 'Mandala con elementos de agua y fuego – olas, chispas, hojas secas y brotes nuevos.'},
                    { type: 'quote', text: 'Dejo caer lo que ya no vibra conmigo, y me permito volver a empezar.'},
                ]},
                {
                    id: 'abril',
                    title: 'Abril: Estabilidad y nuevos valores',
                    content: [
                        { type: 'heading', text: '8.1 Clima Astrológico del Mes' },
                        { type: 'paragraph', text: 'Después de un marzo intenso y transformador, abril nos invita a bajar a tierra. Con el Sol transitando Aries hasta el 19, seguimos con energía activa, ideal para sostener lo que iniciamos durante los eclipses. Luego, con la entrada del Sol en Tauro, llega una vibración más pausada, sensorial y concreta. Es un mes que nos propone consolidar lo sembrado, ordenar nuestras prioridades y reconectar con el cuerpo y los placeres simples.' },
                        { type: 'subheading', text: '8.2 Calendario Astrológico de Abril' },
                        { type: 'event-list', items: [
                            { date: '5 de abril', event: 'Luna nueva en Aries (segunda oportunidad de inicio)' },
                            { date: '19 de abril', event: 'El Sol entra en Tauro' },
                            { date: '21 de abril', event: 'Luna llena en Escorpio' }
                        ]},
                        { type: 'ritual', title: 'Ritual de Luna Llena (21/04): "Soltar lo que duele para sostener lo que nutre"', text: 'Escribí una carta con todo aquello que estás listo/a para liberar: miedos, obsesiones, viejas heridas.\nPrendé una vela violeta. Leé la carta en voz alta y luego quemásela (con cuidado).\nCerrá el ritual con una ducha consciente, visualizando que se limpia todo lo viejo.' },
                        { type: 'mandala', title: 'Mandala de Abril', text: 'Mandala con elementos de fuego y tierra – espirales, flores abriéndose, raíces, llamas suaves.' },
                        { type: 'quote', text: 'Lo simple y lo verdadero siempre florecen a su tiempo.' }
                    ]
                },
                {
                    id: 'mayo',
                    title: 'Mayo: Movimiento e ideas',
                    content: [
                        { type: 'heading', text: '9.1 Clima Astrológico del Mes' },
                        { type: 'paragraph', text: 'Mayo nos trae una bocanada de aire fresco. El Sol transita por Tauro hasta el 20, ayudándonos a seguir afianzando lo material y lo concreto. A partir del 20, entra en Géminis, encendiendo la mente, la curiosidad, los vínculos y el deseo de compartir. Este mes está marcado por Mercurio retrógrado en Tauro hasta el 3 de junio. Esto nos lleva a revisar creencias sobre el dinero, el valor propio y la manera en que nos comunicamos de forma práctica.' },
                        { type: 'subheading', text: '9.2 Calendario Astrológico de Mayo' },
                        { type: 'event-list', items: [
                            { date: '7 de mayo', event: 'Luna nueva en Tauro' },
                            { date: '20 de mayo', event: 'El Sol entra en Géminis' },
                            { date: '23 de mayo', event: 'Luna llena en Sagitario' },
                            { date: '13 may - 3 jun', event: 'Mercurio retrógrado en Tauro' }
                        ]},
                        { type: 'ritual', title: 'Ritual de Luna Llena (23/05): "Soltar creencias que ya no me representan"', text: 'En una hoja, escribí 3 ideas o mandatos que ya no sentís propios (sobre vos, el amor, el éxito...). \nLeé cada uno y decí: “Te honro por lo que me diste, pero ya no te necesito”. Quemá el papel con gratitud.\nCerrá con una afirmación nueva que te inspire.' },
                        { type: 'mandala', title: 'Mandala de Mayo', text: 'Mandala con símbolos de tierra y aire – espigas, alas, palabras, hojas, caminos.' },
                        { type: 'quote', text: 'Cuando me enraízo en lo que soy, mis ideas vuelan más alto.' }
                    ]
                },
                {
                    id: 'junio',
                    title: 'Junio: Intuición y reconexión',
                    content: [
                        { type: 'heading', text: '10.1 Clima Astrológico del Mes' },
                        { type: 'paragraph', text: 'Junio es un mes para hacer una pausa y mirar hacia adentro. Comienza con el Sol en Géminis hasta el 20, favoreciendo la comunicación. A partir del 20 de junio, con el ingreso del Sol en Cáncer, celebramos el solsticio de invierno (en el hemisferio sur), el momento más introspectivo del año. Es tiempo de recogimiento, memoria, hogar y raíces.' },
                        { type: 'subheading', text: '10.2 Calendario Astrológico de Junio' },
                        { type: 'event-list', items: [
                            { date: '3 de junio', event: 'Mercurio finaliza su retrogradación' },
                            { date: '6 de junio', event: 'Luna nueva en Géminis' },
                            { date: '20 de junio', event: 'Solsticio – el Sol entra en Cáncer' },
                            { date: '22 de junio', event: 'Luna llena en Capricornio' }
                        ]},
                        { type: 'ritual', title: 'Ritual de Luna Llena (22/06): "Equilibrar el corazón y la responsabilidad"', text: 'Dibujá dos columnas: una para tu mundo emocional (Cáncer) y otra para tu mundo laboral o de metas (Capricornio).\nEscribí qué necesita cada uno para estar en equilibrio.\nEncendé dos velas (una blanca y una gris o marrón claro) y meditá con ambas encendidas durante unos minutos.' },
                        { type: 'mandala', title: 'Mandala de Junio', text: 'Mandala con símbolos de aire y agua – palabras, gotas, plumas, lunas crecientes.' },
                        { type: 'quote', text: 'Escucharme también es una forma de hablar claro.' }
                    ]
                },
                {
                    id: 'julio',
                    title: 'Julio: Nutrición emocional',
                    content: [
                        { type: 'heading', text: '11.1 Clima Astrológico del Mes' },
                        { type: 'paragraph', text: 'Julio es un mes de profunda sensibilidad, pero también de creatividad, juego y amor propio. Comienza con el Sol en Cáncer hasta el 22. A partir del 22, el Sol entra en Leo, y con él llega una energía vibrante, de autoexpresión, empoderamiento personal y conexión con el gozo.' },
                        { type: 'subheading', text: '11.2 Calendario Astrológico de Julio' },
                        { type: 'event-list', items: [
                            { date: '5 de julio', event: 'Luna nueva en Cáncer' },
                            { date: '22 de julio', event: 'El Sol entra en Leo' },
                            { date: '24 de julio', event: 'Luna llena en Acuario' }
                        ]},
                        { type: 'ritual', title: 'Ritual de Luna Llena (24/07): "Mi verdad al servicio del mundo"', text: 'En una hoja, escribí algo que amás hacer y que también puede inspirar a otros.\nCompartilo con alguien, hacelo visible (una red social, una charla, una canción...).\nEncendé una vela violeta o blanca y agradecé por tu autenticidad.' },
                        { type: 'mandala', title: 'Mandala de Julio', text: 'Mandala con elementos de agua y fuego – corazones, conchas marinas, soles, manos abiertas.' },
                        { type: 'quote', text: 'Mi corazón es un hogar seguro donde puedo florecer.' }
                    ]
                },
                {
                    id: 'agosto',
                    title: 'Agosto: Orden y expresión',
                    content: [
                        { type: 'heading', text: '12.1 Clima Astrológico del Mes' },
                        { type: 'paragraph', text: 'Agosto comienza con el Sol en Leo, impulsándonos a seguir expresando nuestra verdad. A partir del 23, el Sol entra en Virgo, y con él llega una energía de organización, análisis y retorno al orden. La luna nueva en Leo y la luna llena en Piscis nos invitan a integrar el eje corazón-intuición.' },
                        { type: 'subheading', text: '12.2 Calendario Astrológico de Agosto' },
                        { type: 'event-list', items: [
                            { date: '4 de agosto', event: 'Luna nueva en Leo' },
                            { date: '23 de agosto', event: 'El Sol entra en Virgo' },
                            { date: '28 de agosto', event: 'Luna llena en Piscis' }
                        ]},
                        { type: 'ritual', title: 'Ritual de Luna Llena (28/08): "Confío en mi intuición para ordenar mi camino"', text: 'Realizá una limpieza suave en tu espacio (incienso, sahumo, flores).\nEscribí en una hoja lo que estás listo/a para soltar de tu caos interior.\nLeé en voz alta: “Confío en la guía de mi alma”.\nCerrá con una meditación corta en silencio o música suave.' },
                        { type: 'mandala', title: 'Mandala de Agosto', text: 'Mandala con elementos de fuego y tierra – soles geométricos, espigas, mandalas florales.' },
                        { type: 'quote', text: 'Soy orden sagrado y fuego creativo al mismo tiempo.' }
                    ]
                },
                {
                    id: 'septiembre',
                    title: 'Septiembre: Integración y depuración',
                    content: [
                        { type: 'heading', text: '13.1 Clima Astrológico del Mes' },
                        { type: 'paragraph', text: 'Septiembre es un mes bisagra. Inicia con el Sol en Virgo, que nos lleva a ordenar y purificar. Pero también es un mes muy sensible, ya que viviremos un eclipse parcial de Luna en Piscis el 7 de septiembre, seguido por un eclipse anular de Sol en Virgo el 21. Los eclipses son momentos de destino, cortes y revelaciones.' },
                        { type: 'subheading', text: '13.2 Calendario Astrológico de Septiembre' },
                        { type: 'event-list', items: [
                            { date: '7 de sept', event: 'Eclipse parcial de Luna en Piscis (Luna Llena)' },
                            { date: '21 de sept', event: 'Eclipse anular de Sol en Virgo (Luna Nueva)' },
                            { date: '22 de sept', event: 'El Sol entra en Libra (Equinoccio)' }
                        ]},
                        { type: 'ritual', title: 'Ritual de Eclipse Solar (21/09): "Mi nueva forma de habitarme"', text: 'Escribí en una hoja: “Dejo atrás..." seguido de todo lo que ya no querés cargar (hábitos, creencias, rutinas).\nEn otra hoja, escribí: “Elijo ahora..." con tus nuevos compromisos.\nDoblalos y guardalos en un frasco. Cada vez que lo necesites, volvé a leer la segunda hoja.' },
                        { type: 'mandala', title: 'Mandala de Septiembre', text: 'Mandala con símbolos de tierra y agua – espirales, gotas, relojes, hojas secas.' },
                        { type: 'quote', text: 'Me ordeno, me escucho y me reinvento desde el amor.' }
                    ]
                },
                {
                    id: 'octubre',
                    title: 'Octubre: Vínculos y decisiones',
                    content: [
                        { type: 'heading', text: '14.1 Clima Astrológico del Mes' },
                        { type: 'paragraph', text: 'Octubre llega con una energía enfocada en los vínculos y el equilibrio. El Sol transita Libra hasta el 23. La luna nueva en Libra del 6 nos invita a revisar nuestras relaciones. La luna llena en Tauro (el 20), una de las más intensas del año, puede traer revelaciones emocionales y financieras.' },
                        { type: 'subheading', text: '14.2 Calendario Astrológico de Octubre' },
                        { type: 'event-list', items: [
                            { date: '6 de octubre', event: 'Luna nueva en Libra' },
                            { date: '20 de octubre', event: 'Luna llena en Tauro' },
                            { date: '23 de octubre', event: 'El Sol entra en Escorpio' }
                        ]},
                        { type: 'ritual', title: 'Ritual de Luna Llena (20/10): "Me permito cambiar para ser más fiel a mí"', text: 'Armá un pequeño altar con algo que represente estabilidad (una piedra, una planta) y algo que represente cambio (una pluma, una vela).\nEscribí qué estás sosteniendo por costumbre pero ya no vibra con vos.\nQuemá ese papel y agradecé a lo viejo por lo que te enseñó.' },
                        { type: 'mandala', title: 'Mandala de Octubre', text: 'Mandala con símbolos de aire y tierra – balanzas, hojas secas, corazones, puertas entreabiertas.' },
                        { type: 'quote', text: 'Elegir desde el alma es el acto más puro de amor propio.' }
                    ]
                },
                {
                    id: 'noviembre',
                    title: 'Noviembre: Transformación y renacimiento',
                    content: [
                        { type: 'heading', text: '15.1 Clima Astrológico del Mes' },
                        { type: 'paragraph', text: 'Noviembre nos invita a sumergirnos en las profundidades de lo emocional y espiritual. El Sol permanece en Escorpio hasta el 21, activando procesos de transformación y limpieza. A partir del 21, con la entrada del Sol en Sagitario, la energía se aligera y se vuelve más expansiva.' },
                        { type: 'subheading', text: '15.2 Calendario Astrológico de Noviembre' },
                        { type: 'event-list', items: [
                            { date: '5 de nov', event: 'Luna nueva en Escorpio' },
                            { date: '21 de nov', event: 'El Sol entra en Sagitario' },
                            { date: '23 de nov', event: 'Luna llena en Géminis' }
                        ]},
                        { type: 'ritual', title: 'Ritual de Luna Nueva (05/11): "Renacer desde las cenizas"', text: 'Escribí en un papel todo aquello que sabés que necesitás soltar: conductas, miedos, relaciones, hábitos.\nEn otro papel, escribí: “Hoy renazco como..." y completalo desde el alma.\nQuemá el primero con respeto. Guardá el segundo donde puedas leerlo cada vez que lo necesites.' },
                        { type: 'mandala', title: 'Mandala de Noviembre', text: 'Mandala con símbolos de agua y fuego - serpientes, flechas, flores que renacen, ojos cerrados y abiertos.' },
                        { type: 'quote', text: 'Dejo atrás lo que ya no vibra conmigo, y confío en mi renacimiento.' }
                    ]
                },
                {
                    id: 'diciembre',
                    title: 'Diciembre: Cierre y gratitud',
                    content: [
                        { type: 'heading', text: '16.1 Clima Astrológico del Mes' },
                        { type: 'paragraph', text: 'Diciembre llega como un mes para cerrar, integrar, agradecer y proyectar. El Sol en Sagitario hasta el 21 nos regala optimismo y expansión. A partir del 21, con la entrada del Sol en Capricornio, el foco se desplaza hacia el compromiso y la planificación. Comienza oficialmente el verano (en el hemisferio sur).' },
                        { type: 'subheading', text: '16.2 Calendario Astrológico de Diciembre' },
                        { type: 'event-list', items: [
                            { date: '1 al 25 de dic', event: 'Mercurio retrógrado en Sagitario' },
                            { date: '11 de dic', event: 'Luna nueva en Sagitario' },
                            { date: '21 de dic', event: 'El Sol entra en Capricornio (Solsticio de verano)' },
                            { date: '26 de dic', event: 'Luna llena en Cáncer' }
                        ]},
                        { type: 'ritual', title: 'Ritual de Fin de Año (26 al 31/12): "Gracias por lo vivido, sí a lo que viene"', text: 'Día 1: escribí todo lo que agradecés de 2025.\nDía 2: anotá lo que soltarás con amor.\nDía 3: visualizá tu 2026 ideal y escribí tu palabra guía del año.\nDía 4: realizá un baño simbólico (agua con sal, hierbas, esencias) y encendé una vela blanca para cerrar el ciclo.' },
                        { type: 'mandala', title: 'Mandala de Diciembre', text: 'Mandala con símbolos de fuego y agua – estrellas fugaces, brújulas, copas, árboles.' },
                        { type: 'quote', text: 'Cada final es el suelo fértil donde florece una nueva visión.' }
                    ]
                }
            ],
            content: []
        },
        {
            id: 'cierre-de-ano',
            title: 'Cierre de Año',
            icon: MoonIcon,
            content: [
                 { type: 'heading', text: '14. Ritual de cierre + reflexión final del ciclo' },
                 { type: 'paragraph', text: 'Este es el momento de honrar el camino recorrido, celebrar los logros y aprender de los desafíos.'},
                 { type: 'heading', text: '15. Resumen de logros y aprendizajes 2025' },
                 { type: 'paragraph', text: 'Hacé una lista de tus mayores logros, tanto internos como externos. ¿Qué aprendiste sobre vos y sobre la vida este año?'},
                 { type: 'heading', text: '16. Visión sembrada para 2026' },
                 { type: 'paragraph', text: 'Con la sabiduría de este ciclo, ¿qué semillas de intención querés plantar para el próximo año? ¿Qué sueños empiezan a tomar forma?'},
                 { type: 'ritual', title: 'Ritual de Fin de Año (26 al 31/12): "Gracias por lo vivido, sí a lo que viene"', text: '<b>Día 1:</b> escribí todo lo que agradecés de 2025.<br><b>Día 2:</b> anotá lo que soltarás con amor.<br><b>Día 3:</b> visualizá tu 2026 ideal y escribí tu palabra guía del año.<br><b>Día 4:</b> realizá un baño simbólico (agua con sal, hierbas, esencias) y encendé una vela blanca para cerrar el ciclo.'},
            ]
        }
    ]
};
