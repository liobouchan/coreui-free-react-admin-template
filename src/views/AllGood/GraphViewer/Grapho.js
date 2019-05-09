import React, {
  Component
} from 'react';
import { Graph } from 'react-d3-graph';
var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "123"));

// graph payload (with minimalist structure)
const data = {
    "nodes": [{
        "label": "Artículo 1",
        "id": 87,
        "contenido": " Para efectos de las presentes disposiciones, se entenderá por: \nArtículo 1.- Para efectos de las presentes disposiciones, se entenderá por: \n \n    \n \n \n \n \n(188) I. Actividad Crediticia: significa la colocación de los recursos tanto propios como captados de \nterceros, mediante operaciones de préstamo, descuento, asunción de riesgos crediticios, aval \ny otro tipo de garantías o créditos en su más amplio sentido, así como cualquier operación \nbancaria que genere o pueda generar un derecho de crédito a favor de las Instituciones, \nrespecto del cual exista un riesgo de incumplimiento. \n \n(197) II. Activos Ajustados: al importe que las Instituciones registren en la fila 21 de la Tabla I.1 del \nAnexo 1-O Bis de las presentes disposiciones. \n \n(188) III. Activos Líquidos: a aquellos disponibles, en todo momento, para la Institución de manera \ninmediata y sin restricción alguna, que sean de fácil realización, es decir, que se puedan \nconvertir en efectivo sin incurrir en una pérdida significativa de valor, aún en situaciones donde \nhaya poca liquidez en el mercado. \n \n(188) IV. Activos Ponderados Sujetos a Riesgo Totales: al resultado de sumar los activos ponderados \nsujetos a riesgo de crédito previstos en el Capítulo III del Título Primero Bis; las posiciones \nponderadas equivalentes sujetas a riesgo de mercado a que se refiere el Capítulo IV del Título \nPrimero Bis y los activos ponderados equivalentes sujetos a Riesgo Operacional conforme a lo \nestablecido en el Capítulo V del Título Primero Bis. \n \n(188) V. Administración Integral de Riesgos: al proceso aplicado sistemáticamente por las \nInstituciones para identificar, analizar, medir, vigilar, limitar, controlar, revelar y dar \ntratamiento a los distintos riesgos a los que se encuentran expuestas tanto ellas como sus \nSubsidiarias Financieras. \n \n(188) VI. Administrador de Comisionistas: a los comisionistas bancarios que operan al amparo de lo \n \n(188) VII. Alto Grado de Inversión: a la Calificación otorgada por alguna Institución Calificadora que \nse ubique dentro del Grado de Riesgo 1 en escala global tratándose de largo plazo, y Grados \nde Riesgo 1 y 2 en escala global tratándose de corto plazo, conforme a lo establecido en las \ntablas correspondientes para corto y largo plazo del Anexo 1-B. \n \n(188) VIII. Amortización Anticipada en Esquemas de Bursatilización: a todo aquel mecanismo, que \nuna vez implementado, permite a los inversionistas obtener reembolsos previos al \nvencimiento inicialmente fijado de los valores emitidos. Para tales efectos, las amortizaciones \nanticipadas pueden estar controladas o no controladas, así como comprometidas y no \ncomprometidas, según los criterios que se establecen más adelante en el Apartado F de la \nSección Segunda, del Capítulo III, del Título Primero Bis de las presentes disposiciones. \n \n(188) IX. Apoderados: a las personas físicas autorizadas por la Comisión para celebrar a nombre de \nla Institución y con el público, operaciones con valores inscritos en el Registro y listados en \n    \n \n \n \n \nBolsa, así como de asesoría y promoción de dichos valores, de conformidad con lo establecido \npor la Ley y la Ley del Mercado de Valores. \n \n(188) X. Apoyo Implícito: a los mecanismos que se instrumenten por una Institución con el fin de \nrespaldar una operación de bursatilización adicionales a la obligación contractual original. \nDentro de los Apoyos Implícitos quedarán incluidas las compras de posiciones de \nbursatilización que lleve a cabo una Institución originadora o cedente de los activos \nsubyacentes, distintas a las compras que cumplan con lo establecido en la fracción I del Anexo \n1-K de las presentes disposiciones. \n \n(242) XI. Auditor Externo Independiente: al contador público o licenciado en contaduría pública que \ngeneral aplicables a las entidades y emisoras supervisadas por la Comisión Nacional Bancaria \nsus respectivas modificaciones. \n \n(188) XII. Auditoría Interna: a la función que realizarán las Instituciones a través de un área \nindependiente de la Dirección General, para revisar periódica y sistemáticamente, acorde con \nel programa anual de trabajo, el funcionamiento del Sistema de Control Interno, en apego a lo \n \n(188) XIII. Autenticación: al conjunto de técnicas y procedimientos utilizados para verificar la \nidentidad de: \n \n(188) a) Un Usuario y su facultad para realizar operaciones a través del servicio de Banca \nElectrónica. \n \n(188) b) Una Institución y su facultad para recibir instrucciones a través del servicio de Banca \nElectrónica. \n \n(188) XIV. Banca Electrónica: al conjunto de servicios y operaciones bancarias que las Instituciones \nrealizan con sus Usuarios a través de Medios Electrónicos. \n \n(188) XV. Banca Host to Host: al servicio de Banca Electrónica mediante el cual se establece una \nconexión directa entre los equipos de cómputo del Usuario previamente autorizados por la \nInstitución y los equipos de cómputo de la propia Institución, a través de los cuales estos \núltimos procesan la información para la realización de servicios y operaciones bancarias. Este \ntipo de servicios incluirán a los proporcionados a través de las aplicaciones conocidas como \n-  \n \n(188) XVI. Banca Móvil: al servicio de Banca Electrónica en el cual el Dispositivo de Acceso consiste \nen un Teléfono Móvil del Usuario, cuyo número de línea se encuentre asociado al servicio. \n \n    \n \n \n \n \n(188) XVII. Banca por Internet: al servicio de Banca Electrónica efectuado a través de la red \nelectrónica mundial denominada Internet, en el sitio que corresponda a uno o más dominios \nde la Institución, incluyendo el acceso mediante el protocolo WAP o alguno equivalente. \n \n(188) XVIII. Banca Telefónica Audio Respuesta: al servicio de Banca Electrónica mediante el cual la \nInstitución recibe instrucciones del Usuario a través de un sistema telefónico, e interactúa con \nel propio Usuario mediante grabaciones de voz y tonos o mecanismos de reconocimiento de \nvoz, incluyendo los sistemas de respuesta interactiva de voz (IVR). \n \n(188) XIX. Banca Telefónica Voz a Voz: al servicio de Banca Electrónica mediante el cual un Usuario \ninstruye vía telefónica a través de un representante de la Institución debidamente autorizado \npor esta, con funciones específicas, el cual podrá operar en un centro de atención telefónica, \na realizar operaciones a nombre del propio Usuario. \n \n(188) XX. Bienes Adjudicados: Aquellos que las Instituciones reciban en pago de adeudos o \nadjudicación en remate dentro de juicios relacionados con créditos a su favor. \n \n(188) XXI. Bloqueo de Factores de Autenticación: al proceso mediante el cual la Institución inhabilita \nel uso de un Factor de Autenticación de forma temporal. \n \n(188) XXII. Bolsa: a las sociedades que obtengan concesión de la Secretaría para actuar como bolsa \nde valores, de conformidad con lo previsto en la Ley del Mercado de Valores. \n \n(188) XXIII. Cajero Automático: al Dispositivo de Acceso de autoservicio que permite realizar \nconsultas y operaciones diversas, tales como la disposición de dinero en efectivo y al cual el \nUsuario accede mediante una tarjeta o cuenta bancaria para utilizar el servicio de Banca \nElectrónica. \n \n(188) XXIV. Calificación Aplicable a la Calidad Crediticia del Deudor: a la que corresponda a un deudor \ncuyos créditos se consideren como parte de la Cartera Crediticia Comercial y que se obtenga \ndel procedimiento de calificación, así como de la experiencia de pago, conforme a la \nmetodología prevista para esa cartera, en las presentes disposiciones. \n \n(188) XXV. Calificaciones: a las evaluaciones de riesgo de crédito emitidas por las Instituciones \nCalificadoras. \n \n(188) XXVI. Capital Básico No Fundamental: a la parte básica del Capital Neto a que se refiere la \n \n(188) XXVII. Capital Fundamental: a la parte básica del Capital Neto a que se refiere la fracción I del \n \n    \n \n \n \n \n \n(214) XXIX. Cartera Crediticia o Cartera de Crédito: \n \n(214) a) De Consumo: a los créditos directos, incluyendo los de liquidez que no cuenten con \ngarantía de inmuebles, denominados en moneda nacional, extranjera, en UDIs, o en VSM, \nasí como los intereses que generen, otorgados a personas físicas, derivados de \noperaciones de tarjeta de crédito, de créditos personales, de créditos para la adquisición \nde bienes de consumo duradero (conocidos como ABCD), que contempla entre otros al \ncrédito automotriz y a las operaciones de arrendamiento financiero que sean celebradas \ncon personas físicas; incluyendo aquellos créditos otorgados para tales efectos a los ex-\nempleados de las Instituciones. \n \n (214) Quedarán comprendidos en esta definición los créditos denominados Microcréditos, \nlos cuales podrán ser otorgados a personas físicas cuyos recursos estén destinados a \nfinanciar actividades de producción o comercialización de bienes o prestación de servicios, \nen los que la fuente principal de pago la constituyen los ingresos obtenidos por dichas \nactividades y cuyos montos y plazos serán bajo alguna de las modalidades siguientes: \n \n(214) 1. Individual: cuando el crédito sea otorgado a un solo individuo y teniendo como límite \nmáximo el monto equivalente en moneda nacional a 30,000 UDIS y un plazo máximo \nde tres años. \n \n(214) 2. Grupal: cuando el crédito sea otorgado a grupos de individuos que avalen los \nadeudos o se constituyan como deudores solidarios entre sí y teniendo como límite \nmáximo el monto equivalente en moneda nacional de 11,500 UDIS por cada \nintegrante del grupo y un plazo máximo de un año. \n \n(214) b) Hipotecaria de Vivienda: a los créditos directos denominados en moneda nacional, \nextranjera, en UDIs, o en VSM, así como los intereses que generen, otorgados a personas \nfísicas y destinados a la adquisición, construcción, remodelación o mejoramiento de la \nvivienda sin propósito de especulación comercial; incluyendo aquellos créditos de liquidez \ngarantizados por la vivienda del acreditado y los otorgados para tales efectos a los ex-\nempleados de las Instituciones. \n \n(214) c) Comercial: a los créditos directos o contingentes, incluyendo créditos puente \ndenominados en moneda nacional, extranjera, en UDIs, o en VSM, así como los intereses \nque generen, otorgados a personas morales o personas físicas con actividad empresarial \ny destinados a su giro comercial o financiero; incluyendo los otorgados a entidades \nfinancieras distintos de los de préstamos interbancarios menores a 3 días hábiles; las \noperaciones de factoraje, Descuento y Operaciones de Cesión de Derechos de Crédito; \noperaciones de arrendamiento financiero que sean celebradas con dichas personas \nmorales o físicas; los créditos otorgados a fiduciarios que actúen al amparo de \n    \n \n \n \n \nAsimismo, quedarán comprendidos los créditos concedidos a entidades federativas, \nmunicipios y sus organismos descentralizados, cuando sean objeto de calificación de \nconformidad con las disposiciones aplicables. \n \n(214) Las Instituciones, al clasificar un determinado crédito como de Consumo, Hipotecario de \nVivienda o Comercial, aplicarán supletoriamente el criterio D-\ngene  \n \n(214) La Cartera Crediticia estará sujeta a Calificación sin incluir aquellos créditos a cargo del \nGobierno Federal o con garantía expresa de la Federación, registrados ante la Unidad de Crédito \nPúblico de la Secretaría de Hacienda y Crédito Público, del IPAB o del Banco de México. \n \n(188) XXX. Central de Alarmas: a la instalación remota que la Institución deberá tener, a la cual \nconfluyen todas las señales de vigilancia y alarma, así como de transmisión de imágenes que \nse generan en cada una de las Sucursales Tipo B, Tipo C y Tipo D. \n \n(188) XXXI. Cifrado: al mecanismo que deberán utilizar las Instituciones para proteger la \nconfidencialidad de información mediante métodos criptográficos en los que se utilicen \nalgoritmos y llaves de encripción. \n \n(188) XXXII. Coeficiente Beta o Coeficiente : es el resultado de una regresión lineal que tiene como \nvariable dependiente la variación de las tasas de interés pasivas y como variable independiente \na la tasa de interés de mercado (Cetes 28), utilizando datos mensuales para un periodo \nmínimo de 48 meses. Para determinar el valor máximo de , se calcula un intervalo de \nconfianza para  al 95 por ciento. \n \n(188) XXXIII. Coeficiente de Capital Básico: al resultado de dividir el capital básico conforme al \nTotales, expresado en porcentaje redondeado a la centésima de punto porcentual más \ncercana. \n \n(188) XXXIV. Coeficiente de Capital Fundamental: al resultado de dividir el Capital Fundamental \nPonderados Sujetos a Riesgo Totales, expresado en porcentaje redondeado a la centésima de \npunto porcentual más cercana. \n \n(188) XXXV. Comisión: a la Comisión Nacional Bancaria y de Valores. \n \n(188) XXXVI. Comité de Auditoría: al comité constituido por el Consejo, que tendrá las funciones \n    \n \n \n \n \nmencionado órgano de gobierno en la definición y actualización de los objetivos del Sistema \nde Control Interno y los lineamientos para su implementación, así como en su evaluación. \n \n(188) XXXVII. Comité de Remuneración: al comité constituido por el consejo de administración de \nmencionado órgano de gobierno en sus funciones relativas al Sistema de Remuneración, y \ncuyo objeto será la implementación, mantenimiento y evaluación del Sistema de \ndisposiciones. \n \n(188) XXXVIII. Consejo: al consejo de administración en el caso de instituciones de banca múltiple y \nal consejo directivo tratándose de instituciones de banca de desarrollo. \n \n(188) XXXIX. Contingencia Operativa: a cualquier evento fortuito que dificulte o inhabilite a una \nInstitución a prestar sus servicios o realizar sus procesos, cuya actualización derive en daño o \npérdida para sus clientes, para el público en general, para sus contrapartes o para la Institución \nmisma. \n \n(188) XL. Contraloría Interna: a las funciones que de manera cotidiana y permanente deberán realizar \nlas Instituciones a través de la Dirección General, de un área específica o bien, mediante \npersonal distribuido en varias áreas, pudiendo llegar incluso, a ser independientes de la propia \nDirección General, a fin de propiciar, mediante el establecimiento de medidas y controles, el \napego, en la celebración de sus operaciones y prestación de servicios, al Sistema de Control \npresentes disposiciones. \n \n(188) XLI. Contraseña: a la cadena de caracteres que autentica a un Usuario en un medio electrónico \no en un servicio de Banca Electrónica. \n \n(188) XLII. Control: a lo previsto por la fracción II del artículo 22 Bis de la Ley. \n \n(188) XLIII. Convenio Judicial: al acuerdo por escrito, que tiene el carácter de cosa juzgada, que \ncelebran las partes en un proceso judicial para finalizar la controversia. \n \n(188) XLIV. Crédito Grupal: al crédito perteneciente a la Cartera Crediticia de Consumo no \nRevolvente, con periodo de facturación semanal o quincenal, que se otorga a grupos de \npersonas en los que cada miembro es obligado solidario por el pago total del crédito, aunque \nla calificación de dicho crédito se realice de manera individual para cada integrante del grupo. \n \n(188) XLV.  \nel Capítulo Primero del Título Tercero y que se contienen en el Anexo 33 de las presentes \ndisposiciones. \n \n    \n \n \n \n \n(188) XLVI. Cuentas Bancarias: a las cuentas bancarias a la vista a que se refiere el artículo 14 de la \nCircular 3/2012, emitida por el Banco de México. \n  \n(188) \nestablecido por la citada Circular 3/2012. \n \n(188) XLVII. Cuentas Destino: a las cuentas receptoras de recursos dinerarios en Operaciones \nMonetarias. \n \n(188) XLVIII. Cuentas Destino Recurrentes: a las Cuentas Destino que cumplan con los requisitos \n \n(188) XLIX. Desbloqueo de Factores de Autenticación: al proceso mediante el cual la Institución \nhabilita el uso de un Factor de Autenticación que se encontraba bloqueado. \n \n(188) L. Descuento: operación por virtud de la cual la Institución descontante se obliga a anticipar al \ndescontatario el importe de un crédito dinerario, contra tercero y de vencimiento futuro, a \ncambio de la enajenación a favor de la Institución descontante del citado crédito y de la \ndetracción de un interés. \n \n(244) LI. Derogada. \n \n(188) LII. Dirección General: al director general de las instituciones de banca múltiple y de banca de \ndesarrollo, así como las unidades administrativas que lo auxilien en el desempeño de sus \nfunciones, cada uno conforme a sus atribuciones. \n \n(188) LIII. Dispositivo de Acceso: al equipo que permite a un Usuario acceder al servicio de Banca \nElectrónica. \n \n(188) LIV. Doble Incumplimiento: al evento de incumplimiento tanto del obligado original como del \ngarante admisible de una operación sujeta a riesgo de crédito. \n \n(188) LV. Empresas de Servicios: a las Empresas de Servicios Exclusivas o Empresas de Servicios \nGenéricas. \n \n(188) LVI. Empresas de Servicios Exclusivas: a aquellas personas morales en cuyo capital participe y \nejerza el control una Institución y que tengan por objeto prestarle exclusivamente a dicha \nInstitución Servicios Complementarios o Auxiliares. \n \n(188) LVII. Empresas de Servicios Genéricas: a aquellas personas morales en cuyo capital participen \nuna o varias Instituciones y, en su caso, otras personas, que tengan por objeto prestar a \nInstituciones Servicios Complementarios o Auxiliares, sin perjuicio de que podrán prestar \nservicios a otras personas, siempre que cuando menos el cinco por ciento de sus ingresos \n    \n \n \n \n \nbrutos durante el año calendario de que se trate, provengan de la prestación de dichos \nservicios a las Instituciones. \n \n(188) LVIII. Enganche: al importe positivo que resulte de la diferencia entre el valor de la vivienda y el \nimporte del crédito o, en su caso, los créditos a la vivienda en la fecha de otorgamiento del \ncrédito. \n \n(188) LIX. Escenario Supervisor: en singular o plural al conjunto o conjuntos de supuestos \nestablecidos por la Comisión, que las instituciones de banca múltiple deben utilizar para \nrealizar su Evaluación de la Suficiencia de Capital bajo Escenarios Supervisores. \n \n(188) LX. Esquema de Bursatilización: al proceso estructurado mediante el cual activos y derechos \npor flujos de efectivo futuros, se agrupan y se suscriben para crear títulos o valores \nnegociables (posiciones de bursatilización), mismos que pueden colocarse entre el público \ninversionista en un mercado de valores organizado, o bien, ser utilizados como referencia para \nla transferencia de riesgo. \n \n(188) LXI. Esquema de Cobertura de Primeras Pérdidas: al esquema contractual, bajo la figura de \ngarantía o de seguro, a través del cual el beneficiario o acreditante mitiga la pérdida derivada \ndel incumplimiento por la falta de pago de su acreditado al recibir por parte del proveedor de \nla cobertura un porcentaje del saldo del crédito en cuestión, a fin de cubrir con un monto \nlimitado las primeras pérdidas derivadas del crédito, una vez que se actualicen los términos y \ncondiciones pactados para el reclamo de la garantía o del seguro. \n \n(188) LXII. Esquema de Cobertura en Paso y Medida (Pari-Passu): al esquema contractual, bajo la \nfigura de garantía o de seguro, a través del cual el beneficiario o acreditante mitiga la pérdida \nderivada del incumplimiento por la falta de pago de su acreditado al recibir por parte del \nproveedor de la cobertura un porcentaje del saldo del crédito en cuestión, con el fin de cubrir \nen la proporción convenida, las pérdidas derivadas del crédito. \n \n(188) LXIII. Evaluación de la Suficiencia de Capital: al proceso incorporado en la Administración \nIntegral de Riesgos de las instituciones de banca múltiple, mediante el cual estas evalúan si su \nCapital Neto sería suficiente para cubrir las posibles pérdidas que deriven de los riesgos a los \nque dichas instituciones podrían estar expuestas en distintos escenarios, incluyendo aquellos \nen los que imperen condiciones económicas adversas, que cumpla con los requisitos \nestablecidos en el Anexo 13 de las presentes disposiciones. \n \n(188) LXIV. Evaluación de la Suficiencia de Capital bajo Escenarios Supervisores: al proceso \nincorporado en la Administración Integral de Riesgos de las instituciones de banca múltiple, \nmediante el cual estas evalúan si su Capital Neto sería suficiente para cubrir las posibles \npérdidas que, en su caso, deriven de los riesgos a los que dichas instituciones están expuestas \nen cada uno de los Escenarios Supervisores que cumpla con los requisitos establecidos en el \nAnexo 12-D de las presentes disposiciones. \n    \n \n \n \n \n \n(188) LXV. Exposición al Incumplimiento (EI): a la posición esperada, bruta de reservas, de la \noperación de crédito si se produce el incumplimiento del deudor. La Exposición al \nIncumplimiento no podrá ser inferior a la cantidad dispuesta de la operación al momento del \ncálculo del requerimiento de capital. \n \n(188) LXVI. Factor de Autenticación: al mecanismo de Autenticación, tangible o intangible, basado \nen las características físicas del Usuario, en dispositivos o información que solo el Usuario \nposea o conozca. Estos mecanismos podrán incluir: \n \n(188) a) Información que el Usuario conozca y que la Institución valide a través de cuestionarios \npracticados por operadores de centros de atención telefónica. \n \n(188) b) Información que solamente el Usuario conozca, tales como Contraseñas y Números de \nIdentificación Personal (NIP). \n \n(188) c) Información contenida o generada en medios o dispositivos respecto de los cuales el \nUsuario tenga posesión, tales como dispositivos o mecanismos generadores de \nContraseñas dinámicas de un solo uso y Tarjetas Bancarias con Circuito Integrado, que \ntengan propiedades que impidan la duplicación de dichos medios, dispositivos o de la \ninformación que estos contengan o generen. \n \n(188) d) Información del Usuario derivada de sus características físicas, tales como huellas \ndactilares, geometría de la mano o patrones en iris o retina, siempre que dicha información \nno pueda ser duplicada y utilizada posteriormente. \n \n(188) LXVII. Factor de Riesgo: a la variable económica u operativa cuyo movimiento por sí sola o en \ncombinación con otras variables, tiene el potencial de generar cambios sobre el rendimiento, \nvalor o estabilidad de los activos, pasivos o patrimonio de la Institución, así como sobre la \nsolvencia, liquidez, estrategia o incidir en el cumplimiento de sus objetivos de negocio. \n \n(188) LXVIII. Fideicomiso de Contragarantía: a los fideicomisos constituidos por instituciones de \nbanca de desarrollo, cuyas actividades se limitan a garantizar, total o parcialmente a través \ndel Esquema de Primeras Pérdidas, las garantías otorgadas por dichas instituciones o sus \nfideicomisos a otras Instituciones o entidades financieras y que cumplen con las condiciones \nsiguientes: \n \n(188) a) La institución de banca de desarrollo que lo constituye debe fungir como fiduciaria y \ncomo uno de los fideicomitentes o bien, como fideicomitente único; \n \n(188) b) La institución de banca de desarrollo cuente con garantía expresa del Gobierno Federal; \n \n    \n \n \n \n \n(188) c) El fideicomiso se encuentre inscrito ante la Unidad de Política Presupuestal de la \nSecretaría de Hacienda y Crédito Público; \n \n(188) d) El patrimonio del fideicomiso sea constituido con efectivo; \n \n(188) e) Los fondos líquidos del fideicomiso son invertidos en instrumentos de deuda \ngarantizados o avalados por el Gobierno Federal o por Instituciones, o bien en reportos de \npapel gubernamental o bancario; en el caso de inversiones en directo o reporto de papel \nbancario, las contrapartes deberán contar con una calificación crediticia emitida por una \nInstitución Calificadora reconocida, igual o mejor al grado de riesgo 3 del Anexo 1-B de las \npresentes disposiciones, y \n \n(188) f) El importe efectivamente garantizado por el fideicomiso sea menor a su patrimonio. \n \n(188) LXIX. Fideicomiso de Garantía: al contrato mediante el cual el fideicomitente transmite bienes \no derechos que serán ejecutados, conforme al procedimiento extrajudicial previsto en el \npropio contrato, para cubrir las obligaciones garantizadas al fideicomisario. \n \n(188) LXX. Filial: en singular o plural: a la sociedad mexicana autorizada para organizarse y operar, \nconforme a la Ley, como institución de banca múltiple y en cuyo capital participe una \ninstitución financiera del exterior o una sociedad controladora filial. \n \n(188) LXXI. Financiamiento: a todo acto o contrato que implique la realización de una operación \nactiva, directa o contingente, mediante el otorgamiento, reestructuración, renovación o \nmodificación de cualquier préstamo o crédito, quedando también incluidas las inversiones en \nacciones o valores, que no deban restarse del Capital Neto de la Institución de que se trate. \n  \n(188) Los créditos hipotecarios relacionados con viviendas, los de consumo a cargo de personas \nfísicas que se dispongan mediante el uso de tarjeta de crédito, los que se utilicen para la \nadquisición de bienes de consumo duradero y los personales que se destinen al consumo, que \notorguen las instituciones de banca múltiple, cuyo monto no exceda el equivalente en moneda \nnacional a 700,000 UDIs a la fecha de su concertación, así como las operaciones financieras \nderivadas concertadas por las Instituciones en mercados reconocidos por las autoridades \nfinancieras del país, cuyo cumplimiento corresponda a una contraparte central, quedarán \nexcluidos de lo señalado en el párrafo anterior. \n \n(188) LXXII. Firma Electrónica Avanzada o Fiable: a la firma electrónica avanzada o fiable a que se \nrefiere el Código de Comercio. \n \n(188) LXXIII. Grabación: a aquel acto mediante el cual un libro, registro o documento original, es \ntransformado a una imagen en formato digital en medio óptico o magnético, utilizando \nequipos y programas de cómputo diseñados para tal efecto. \n \n    \n \n \n \n \n(188) LXXIV. Grado de Inversión: a la Calificación otorgada por alguna Institución Calificadora que se \nubique dentro de los Grados de Riesgo 2 y 3 en escala global tratándose de largo plazo, y \nGrado de Riesgo 3 en escala global tratándose de corto plazo, conforme a lo establecido en \nlas tablas correspondientes para corto y largo plazo del Anexo 1-B. \n \n(188) LXXV. Grado de Riesgo: a los grados de riesgo indicados en las tablas de correspondencia de \ncalificaciones y grados de riesgo, a largo plazo y a corto plazo, tanto para la escala global como \npara la escala México, comprendidos en el Anexo 1-B. \n \n(188) LXXVI. Identificador de Usuario: a la cadena de caracteres, información de un dispositivo o \ncualquier otra información que conozca tanto la Institución como el Usuario, que permita \nreconocer la identidad del propio Usuario para el uso del servicio de Banca Electrónica. \n \n(188) LXXVII. Independencia: a la condición que presenta una persona, entidad, órgano \nadministrativo o cuerpo colegiado de Instituciones (incluyendo sin limitar una Unidad de \nNegocio) respecto a otra en términos de no tener conflicto de interés alguno que afecte el \nadecuado desempeño de sus funciones. \n \n(188) LXXVIII. Independiente: a la persona, entidad, órgano administrativo o cuerpo colegiado de \nInstituciones que mantenga Independencia frente a otra u otras. \n \n(188) LXXIX. Índice de Capitalización: al resultado de dividir el Capital Neto entre los Activos \nPonderados Sujetos a Riesgo Totales, expresado en porcentaje redondeado a la centésima de \npunto porcentual más cercana. \n \n(188) LXXX. Influencia Significativa: a lo previsto por la fracción III del artículo 45-P de la Ley. \n \n(188) LXXXI. Información Sensible del Usuario: a la información personal del Usuario que contenga \nnombres, domicilios, teléfonos o direcciones de correo electrónico, en conjunto con números \nde tarjetas bancarias, números de cuenta, límites de crédito, saldos, Identificadores de \nUsuarios o información de Autenticación. \n \n(188) LXXXII. Ingresos Netos o Ventas Netas: Al importe de los ingresos que genera el acreditado \npor la venta de inventarios, la prestación de servicios o por cualquier otro concepto que se \nderive de las actividades que representan su principal fuente de ingresos, una vez disminuidos \npor los descuentos y bonificaciones comerciales otorgados a sus clientes, así como las \ndevoluciones efectuadas. \n  \n(188) Este rubro deberá corresponder al del último estado financiero anual del acreditado, cuyas \ncifras no deberán tener una antigüedad mayor a 18 meses al momento del cómputo de \ncapitalización o de la calificación de cartera. \n \n(188) LXXXIII. INPC: al Índice Nacional de Precios al Consumidor. \n    \n \n \n \n \n \n(188) LXXXIV. Institución de Banca Múltiple de Importancia Sistémica Local: a aquella institución de \nbanca múltiple que la Comisión clasifique como tal conforme al Capítulo VI Bis 1 del Título \nPrimero Bis de las presentes disposiciones y sea aprobada por su Junta de Gobierno. \n \n(188) LXXXV. Institución Originadora de Esquemas de Bursatilización: aquella Institución que: \n \n(188) a) Origina directa o indirectamente el conjunto de activos subyacentes incluidos en el \nEsquema de Bursatilización, o \n \n(188) b) Actúa como patrocinador de un vehículo de papel bursatilizado o de un programa similar \npor el que se adquieran posiciones a terceros. En el contexto de tales programas, una \nInstitución se considerará en términos generales un patrocinador y, a su vez, un originador \nsi en la práctica o en lo esencial proporciona asesoría o gestiona un programa de \nbursatilización, coloca los valores respaldados por los activos subyacentes en el mercado \no proporciona líneas de crédito por liquidez o mejoras crediticias. \n \nInstituciones de Crédito. \n \n(188) LXXXVII.  Instituciones Calificadoras: a las Instituciones Calificadoras de Valores incluidas en \nel Anexo 1-B de estas Disposiciones. También se considerará como Instituciones Calificadoras \na aquellas que, atendiendo a los criterios contenidos en las presentes Disposiciones dé a \nconocer la Comisión en la red electrónica mundial denominada Internet en el sitio \nhttp://www.cnbv.gob.mx. \n \n(238) LXXXVIII. Instrumentos de Capital: a las obligaciones subordinadas emitidas en México, así \ncomo a los títulos emitidos en mercados extranjeros, que cumplan con lo establecido en los \nAnexos 1-R o 1-S de las presentes disposiciones, según corresponda. \n \n(188) LXXXIX. Inversionista Calificado: a la persona que mantenga en promedio, durante el último \naño, inversiones en valores po\nque haya obtenido en cada uno de los dos últimos años, ingresos brutos anuales iguales o \nmayores a 500,000 unidades de inversión. \n \n(188) XC. Inversionista Institucional: a la persona que conforme a las leyes federales tenga dicho \ncarácter o sea entidad financiera, incluso cuando actúen como fiduciarias al amparo de \nfideicomisos que conforme a las leyes se consideren como inversionistas institucionales. \n \n(188) XCI. IPAB: Instituto para la Protección al Ahorro Bancario. \n \n(188) XCII. Ley: a la Ley de Instituciones de Crédito, tal como la misma sea modificada de tiempo en \ntiempo. \n    \n \n \n \n \n \n(188) XCIII. Límite Específico de Exposición al Riesgo: a la magnitud permisible de exposición a un \nriesgo discrecional determinado, asignada desde a una línea de negocio, Factor de Riesgo, \ncausa u origen del mismo hasta a un empleado o funcionario en específico al interior de una \nInstitución. \n \n(188) XCIV. Límite Global de Exposición al Riesgo: a la magnitud permisible de exposición a los \ndistintos tipos de riesgo discrecionales por Unidad de Negocio o por Factor de Riesgo, causa u \norigen de los mismos, para una Institución en su totalidad. \n \n(188) XCV. Límites de Exposición al Riesgo: a los Límites Específicos de Exposición al Riesgo y los \nLímites Globales de Exposición al Riesgo, conjuntamente. \n \n(188) XCVI. Línea de Crédito por Liquidez en Esquemas de Bursatilización: al mecanismo que \nmediante la inyección de fondos, busca mejorar o facilitar la gestión de la liquidez del Vehículo \nde Propósito Especial en Esquemas de Bursatilización, en virtud de los desfases que se \npresentan entre las fechas de recaudación de los flujos de los activos subyacentes y las fechas \nde pago a los tenedores de los títulos bursatilizados. \n \n(188) XCVII. Marco para la Administración Integral de Riesgos: al conjunto de objetivos, políticas, \nlineamientos y procedimientos que norman la actividad de la Administración Integral de \nRiesgos en la Institución. \n \n(188) XCVIII. Medidas Básicas de Seguridad: a aquellas que las Instituciones deberán implementar en \nsus Oficinas Bancarias y que comprenden las medidas indispensables, mínimas y concretas en \ntérminos del Capítulo XIII del Título Quinto de las presentes disposiciones. \n \n(188) XCIX. Medidas Correctivas: se refieren conjuntamente a las Medidas Correctivas Especiales \nAdicionales y a las Medidas Correctivas Mínimas. \n \n(188) C. Medidas Correctivas Especiales Adicionales: a las medidas correctivas que la Comisión está \nfacultada a ordenar a las instituciones de banca múltiple, en términos de la fracción III del \n \n(188) CI. Medidas Correctivas Mínimas: a las medidas que deba aplicar la Comisión conforme a lo \n \n(188) CII. Medios Electrónicos: a los equipos, medios ópticos o de cualquier otra tecnología, sistemas \nautomatizados de procesamiento de datos y redes de telecomunicaciones, ya sean públicos o \n \n    \n \n \n \n \n(188) CIII. Mejora Crediticia: al acuerdo contractual mediante el cual una Institución conserva o \nasume una posición de bursatilización, proporcionando cierto grado de protección a otras \npartes involucradas en la operación. \n \n(188) CIV. Mensajes de Texto SMS: al mensaje de texto disponible para su envío en servicios de \ntelefonía móvil. \n \n(188) CV. Mercancías: Se entenderá por mercancías a los activos referidos como tales en la Circular \n4/2012 emitida por el Banco de México, con excepción del oro. \n \n(188) CVI. Método Avanzado para el Cálculo de los Requerimientos de Capital por Riesgo \n \ndisposiciones. \n \n(188) CVIII. Método Estándar: al que se refiere la Sección Segunda del Capítulo III del Título Primero \nBis de estas disposiciones. \n \n(188) CVIX. Método Estándar Alternativo para el Cálculo de los Requerimientos de Capital por Riesgo \n \n(188) CX. Método Estándar para el Cálculo de los Requerimientos de Capital por Riesgo Operacional: \n \n(188) CXI. Metodología Interna: en plural o singular, a las metodologías aprobadas por la Comisión \npara el cómputo de los requerimientos de capital por riesgo de crédito y para la calificación de \ncartera crediticia y la determinación de sus respectivas reservas preventivas. \n \n(188) CXII. México: significan los Estados Unidos Mexicanos. \n \n(188) CXIII. Microfilmación: a aquel acto mediante el cual un libro, registro o documento original, es \nfilmado en una película. \n \n(188) CXIV. Nivel de Tolerancia al Riesgo: a la magnitud permisible de exposición a un riesgo no \ndiscrecional, para una Institución en su totalidad. \n \n(188) CXV. Número de Identificación Personal (NIP): a la Contraseña que autentica a un Usuario en \nel servicio de Banca Electrónica mediante una cadena de caracteres numéricos. \n \n(188) CXVI. Oficinas Bancarias: en singular o plural, a los establecimientos donde las Instituciones \nrealizan de manera habitual sus actividades y que pueden adoptar alguna de las siguientes \nmodalidades: \n    \n \n \n \n \n \n(188) a) Oficina Administrativa sin Atención al Público, aquellas instalaciones sin manejo de \nefectivo y valores, en las cuales la Institución no ofrece atención al público, pero en las que \nse realizan actividades administrativas de apoyo a los procesos bancarios de Oficinas \nBancarias. \n \n(188) b) Oficina Administrativa con Atención al Público, aquellas instalaciones en las cuales la \nInstitución asesora a sus clientes, realiza promoción, recibe aclaraciones o quejas, lleva a \ncabo la apertura y cierre de cuentas, entrega chequeras y tarjetas de débito y crédito, \ncelebra contratos, se realizan operaciones bancarias a través de Medios Electrónicos y \naquellas otras que no impliquen el manejo de efectivo o valores. \n \n(188) c) Módulos Bancarios, aquellas instalaciones que se encuentran dentro de locales con \nseguridad propia, en las que se realizan operaciones en efectivo hasta por un monto diario \nequivalente en moneda nacional a 2,000 UDIs, por cada tipo de operación y cuenta; \nademás de realizar la promoción, apertura y cierre de cuentas, entrega de chequeras, \ntarjetas de débito y crédito, recepción de depósitos y pagos de créditos, pago de remesas \ny disposiciones de efectivo. \n \n(188) d) Sucursales, en singular o plural, aquellas instalaciones destinadas a la atención al Público \nUsuario, para la celebración de operaciones y prestación de servicios a los que se refiere \n \n(188) CXVII. Opción de Recompra en Esquemas de Bursatilización: al mecanismo que permite a la \nInstitución Originadora de Esquemas de Bursatilización comprar las posiciones de \nbursatilización (por ejemplo, títulos de bursatilización de activos) previamente al vencimiento \nde los activos subyacentes o de las posiciones de bursatilización. \n \n(188) CXVIII. Operación Monetaria: a la transacción que implique transferencia o retiro de recursos \ndinerarios. Las operaciones monetarias podrán ser: \n \n(188) a) Micro Pagos: operaciones de hasta el equivalente en moneda nacional a 70 UDIs. \n \n(188) b) De Baja Cuantía: operaciones de hasta el equivalente en moneda nacional a 250 UDIs \ndiarias. \n \n(188) c) De Mediana Cuantía: operaciones de hasta el equivalente en moneda nacional a 1,500 \nUDIs diarias. \n \n(188) d) Por montos superiores al equivalente en moneda nacional a 1,500 UDIs diarias. \n \n(188) CXIX. Operaciones: a las operaciones activas, operaciones pasivas, Operaciones Causantes de \nPasivo Contingente, así como operaciones distintas a las señaladas en la presente fracción que \n    \n \n \n \n \nrealicen las Instituciones, siempre que tales operaciones estén contempladas en las \ndisposiciones en materia de requerimientos de capitalización, a las que hace referencia el \nTítulo Primero Bis de estas disposiciones. \n \n(188) CXX. Operaciones Causantes de Pasivo Contingente: a las obligaciones cuya exigibilidad se \nencuentra sujeta a condición suspensiva o resolutoria, así como aquellas que no se han \nreconocido en el balance, en virtud de que no es viable que las Instituciones tengan que \nsatisfacerla o cuando el importe de la obligación no pueda ser cuantificado con la suficiente \nconfiabilidad. \n \n(188) CXXI. Operaciones de Cesión de Derechos de Crédito: aquellas operaciones de financiamiento \npor virtud de las cuales se transmite a alguna Institución la titularidad de derechos de crédito. \nNo se considerarán Operaciones de Cesión de Derechos de Crédito las adquisiciones de \ncartera de crédito. \n \n(188) CXXII. Operaciones Sujetas a Riesgo de Crédito: a los depósitos, valores, créditos, operaciones \nde reporto, de intercambio de flujos de dinero (swap), contratos adelantados, préstamo de \nvalores, opciones, operaciones estructuradas, paquetes de instrumentos derivados y \noperaciones contingentes, así como a las demás operaciones bancarias expuestas a riesgo de \ncrédito conforme al Anexo 1-A. \n \n(188) CXXIII. Orden: a las instrucciones que reciban las Instituciones de sus clientes, para realizar \noperaciones de compra o venta de valores inscritos en el Registro. \n \n(188) CXXIV. Organismo de Fomento para la Vivienda: al Instituto del Fondo Nacional de la Vivienda \npara los Trabajadores y al Fondo de la Vivienda del Instituto de Seguridad y Servicios Sociales \nde los Trabajadores del Estado. \n \n(188) CXXV. Pago Móvil: al servicio de Banca Electrónica en el cual el Dispositivo de Acceso consiste \nen un Teléfono Móvil del Usuario, cuyo número de línea se encuentre asociado al servicio. \nÚnicamente se podrán realizar consultas de saldo respecto de las cuentas asociadas al \nservicio, Operaciones Monetarias limitadas a pagos o transferencias de recursos dinerarios de \nhasta el equivalente en moneda nacional a las Operaciones Monetarias de Mediana Cuantía, \ncon cargo a las tarjetas o cuentas bancarias que tenga asociadas, así como actos para la \nadministración de este servicio, que no requieran un Segundo Factor de Autenticación. \n \n(188) CXXVI. Participante Central del Mercado: se considerarán para efectos de la determinación del \nrequerimiento de capital por riesgo de crédito, participantes centrales del mercado, a los \nsiguientes: \n \n(188) a) El Gobierno Federal, el Banco de México, el IPAB, y \n \n(188) b) Los organismos de compensación reconocidos. \n    \n \n \n \n \n \n(188) CXXVII. Patio de la Sucursal: a la zona de servicios de la Sucursal sin restricciones de acceso al \nPúblico Usuario para la realización de sus operaciones. \n \n(188) CXXVIII. Pérdida Esperada: en singular o plural, a la media de la distribución de probabilidad del \nimporte de las pérdidas de un activo. Para fines de cálculo de las reservas para riesgos \ncrediticios la Pérdida Esperada se determina multiplicando la Probabilidad de Incumplimiento \npor el producto de la Severidad de la Pérdida en caso de Incumplimiento y la Exposición al \n \n(188) CXXIX. Pérdidas Esperadas Totales: a la suma de los montos de las Pérdidas Esperadas para \ncada una de las posiciones individuales sujetas a riesgo de crédito, conforme a lo establecido \n \n(188) CXXX. Perfil de Riesgo: a la descripción cuantitativa y cualitativa de los diferentes riesgos a los \nque está expuesta la Institución en un momento dado. \n \n(188) CXXXI. Perfil de Riesgo Deseado: al Perfil de Riesgo que la Institución está dispuesta a asumir \nde acuerdo a su modelo de negocio y estrategias, para alcanzar sus objetivos. \n \n(188) CXXXII. Periodo de Facturación: para efectos de la calificación de Cartera Crediticia \nHipotecaria de Vivienda y de Cartera Crediticia de Consumo no Revolvente, al lapso entre cada \nuna de las fechas programadas en el contrato de crédito para que el acreditado realice los \npagos de los montos exigibles. \n \n(188) CXXXIII. Periodo de Pago: al plazo comprendido entre dos fechas de corte, entendida esta \núltima, como la fecha en la cual la Institución factura al cliente. \n \n(188) CXXXIV. Personas Relacionadas Relevantes: aquellas personas físicas o morales con domicilio \nen territorio nacional o en el extranjero, que tengan directa o indirectamente, el veinte por \nciento o más del capital social de una institución de banca múltiple de manera individual o \ncolectiva. En todo caso, se entenderá como tenencia accionaria colectiva, aquella que \nmantengan directa o indirectamente, en su conjunto: \n \n(188) a) Los cónyuges o las personas físicas que tengan parentesco por consanguinidad o \nafinidad hasta el segundo grado o civil, y \n \n(188) b) Los fideicomisos cuando la contraparte o fuente de pago dependa de una de las \npersonas físicas o morales señaladas en el primer párrafo de esta fracción y el inciso \nanterior. \n \n(188) A efecto de considerar que los supuestos señalados en los incisos a) y b) anteriores, no \nson Personas Relacionadas Relevantes, las instituciones de banca múltiple deberán \n    \n \n \n \n \ndocumentar fehacientemente que en dichos supuestos no se actúa de forma concertada ni se \nmantienen acuerdos, de cualquier naturaleza, para tomar decisiones en un mismo sentido. \n  \n(188) Adicionalmente, se considerarán como Personas Relacionadas Relevantes a todas aquellas \npersonas morales que formen parte de un mismo grupo empresarial o consorcio controlado \npor las personas físicas o morales señaladas en el primer párrafo de esta fracción. No quedarán \nincluidas en dicho concepto, las entidades financieras que formen parte del grupo financiero \nal que, en su caso, pertenezca la institución de banca múltiple, o aquellas entidades financieras \nen las que la institución de banca múltiple tenga una participación accionaria, a menos de que \ndichas entidades a su vez otorguen cualquier tipo de financiamiento a las personas señaladas \nen el primer párrafo de la presente fracción. \n  \n(188) Para efectos de lo establecido en esta fracción, se \nde la Ley. \n \n(188) CXXXV. Plan de Acción Preventivo: al conjunto de acciones propuesto por las instituciones \nde banca múltiple, que les permitiría mantenerse en la categoría I conforme al artículo 220 de \ndurante los trimestres que comprenda la Evaluación de Suficiencia de Capital bajo Escenarios \nSupervisores. \n \n(188) CXXXVI. Plan de Contingencia: al conjunto de acciones que deben llevar a cabo las instituciones \nde banca múltiple para restablecer su situación financiera, ante escenarios adversos que \npudieran afectar su solvencia o liquidez, en términos de lo previsto por el artículo 119 de la \nLey y las presentes disposiciones. \n \n(188) CXXXVII. Plan de Continuidad de Negocio: al conjunto de estrategias, procedimientos y \nla verificación de Contingencias Operativas, la continuidad en la prestación de los servicios o \nen la realización de los procesos críticos de las Instituciones, o bien su restablecimiento \noportuno, así como la mitigación de las afectaciones producto de dichas Contingencias. \n \n(188) CXXXVIII. Plan de Financiamiento de Contingencia: al conjunto de estrategias, políticas y \nprocedimientos que se llevarán a cabo en caso de presentarse requerimientos inesperados de \ndisposiciones. \n \n(188) CXXXIX. Plazo Efectivo o de Vencimiento (V): al periodo de tiempo efectivo expresado en años, \nen el que el propietario de un instrumento de deuda sujeto a una determinada estructura de \nflujos de efectivo recuperaría su capital. Las Instituciones que adopten el método basado en \n    \n \n \n \n \ncalificaciones internas básico deberán utilizar los parámetros supervisores de Plazo de \n \n (188) En el caso del método avanzado, las Instituciones deberán emplear una estimación propia \ndel Plazo de Vencimiento para cada posición. Tratándose de Operaciones Sujetas a Riesgo de \n \n(188) CXL. Posiciones Preferentes: en plural o singular, a la cartera de crédito y los valores que a \nefectos de prelación en pago tienen prioridad sobre otros acreedores del deudor. \n \n(188) CXLI. Posiciones Subordinadas: en plural o singular, a la cartera de crédito y los valores que a \nefectos de su prelación en pago, se sitúan detrás de otros acreedores del deudor. \n \n(188) CXLII. Probabilidad de Incumplimiento (PI): a la Probabilidad expresada como porcentaje de \nque ocurra cualquiera o ambas de las siguientes circunstancias en relación a un deudor \nespecífico: \n \n(188) a) El deudor se encuentra en situación de mora durante 90 días naturales o más respecto \na cualquier obligación crediticia importante frente a la Institución. La Comisión podrá \nautorizar excepcionalmente el uso de un plazo diferente al de 90 días naturales o más \npara las Operaciones Sujetas a Riesgo de Crédito con las personas a que se refiere la \ndefinición de incumplimiento se ajuste mejor al método basado en calificaciones internas \nde que se trate. \n \n(188) b) Se considere probable que el deudor no abone la totalidad de sus obligaciones crediticias \nfrente a la Institución. \n \n(188) CXLIII. Programas de Papel Comercial Bursatilizados: a la emisión de papel comercial con un \nvencimiento inicial de un año o inferior, que esté respaldado por activos u otro tipo de \nposiciones mantenidos en una entidad de propósito especial, ajenas a insolvencias. \n \n(188) CXLIV. Público Usuario: a aquellas personas que contratan o llevan a cabo operaciones y \nservicios prestados por las Instituciones. \n \n(197) CXLV. Razón de Apalancamiento: al resultado de dividir el Capital Básico, de conformidad con \n \n(188) CXLVI. Registro: al Registro Nacional de Valores a que se refiere el Capítulo II de la Ley del \nMercado de Valores, o cualquier otro que lo sustituya. \n \n    \n \n \n \n \n(188) CXLVII. Reglas de Capitalización: a las disposiciones contenidas en el Título Primero Bis de las \npresentes disposiciones. \n \n(188) CXLVIII. Remuneración Extraordinaria: al conjunto de sueldos, prestaciones o \ncontraprestaciones variables que las instituciones de banca múltiple otorguen a sus \nempleados o personal que ostente algún cargo, mandato o comisión o cualquier otro título \njurídico que las propias instituciones de banca múltiple hayan otorgado para la realización de \nsus operaciones, que paguen en efectivo o mediante otro tipo de compensación y que se \ndetermina con base en los resultados obtenidos, entre otros, por dichos empleados o personal, \nen la realización de las actividades que les son propias. \n \n(188) CXLIX. Remuneración Ordinaria: al conjunto de sueldos, prestaciones o contraprestaciones \nfijas que las instituciones de banca múltiple otorguen a sus empleados o personal que ostente \nalgún cargo, mandato o comisión o cualquier otro título jurídico que las propias instituciones \nde banca múltiple hayan otorgado para la realización de sus operaciones, que paguen en \nefectivo o mediante otro tipo de compensación y que no varía en atención a los resultados \nobtenidos por dichos empleados o personal, en la realización de las actividades que les son \npropias. \n \n(188) CL. Rendimiento Excedente en Esquemas de Bursatilización: a la recaudación bruta de ingresos \nfinancieros y de otra índole percibidos por el Vehículo de Propósito Especial en Esquemas de \nBursatilización, menos los intereses de los títulos bursatilizados, los gastos de administración \ny demás costos en los que incurra el citado vehículo. \n \n(188) CLI. Reporte de Información Crediticia: cualquiera de los reportes de crédito emitidos por \nsociedades de información crediticia a que se refiere el artículo 36 Bis de la Ley para Regular \nlas Sociedades de Información Crediticia, siguientes: \n \n(188) a) Aquel emitido por una sociedad de información crediticia en el que se incluya la \ninformación contenida en las bases de datos de las demás sociedades de información \ncrediticia, o \n \n(188) b) Los reportes de crédito individuales emitidos por la totalidad de las sociedades de \ninformación crediticia. \n \n(188) CLII. Reservas Admisibles Totales: a la suma de las reservas que se encuentren constituidas al \nmes correspondiente al cómputo de capitalización para las Operaciones Sujetas a Riesgo de \nCrédito, determinadas de conformidad con lo establecido en el Capítulo V del Título Segundo \nde las presentes disposiciones. \n \n(188) CLIII. Restablecimiento de Contraseñas y Números de Identificación Personal (NIP): al \nprocedimiento mediante el cual el Usuario puede definir una nueva Contraseña o Número de \nIdentificación Personal. \n    \n \n \n \n \n \n(188) CLIV. Revolvente: característica contractual de la apertura de crédito, que da derecho al \nacreditado a realizar pagos, parciales o totales, de las disposiciones que previamente hubiere \nhecho, quedando facultado, mientras el contrato no concluya, para disponer en la forma \npactada del saldo que resulte a su favor. \n  \npresentes disposiciones, no se considerarán como Revolventes aquellos créditos en los que la \ndisposición del saldo a favor del acreditado esté condicionado al pago de cierto monto de los \nsaldos dispuestos y que genere cambios en las condiciones originales del crédito, como una \nnueva tabla de amortización con pagos fijos y un plazo distinto al original preestablecido. \n \n(188) CLV. Riesgo Común: el que representen el deudor de la Institución de que se trate y las \npersonas siguientes: \n \n(188) a) Cuando el deudor sea persona física: \n \n(188) 1. Las personas físicas que dependan económicamente de este. \n \n(188) 2. Las personas morales que sean controladas, directa o indirectamente, por el propio \ndeudor, con independencia de que pertenezcan o no a un mismo Grupo Empresarial o \nConsorcio. \n  \n(188) Se entenderá por: \n \n(188) i. Grupo Empresarial, al conjunto de personas morales organizadas bajo esquemas \nde inversión directa o indirecta del capital social, controladas por una misma \nsociedad, incluyendo a esta última. \n \n(188) ii. Consorcio, al conjunto de Grupos Empresariales, vinculados entre sí, por una o \nmás personas físicas accionistas o titulares de partes sociales, que mantengan el \ncontrol de dichos grupos, con independencia de la forma o estructura que utilicen \npara integrar o controlar a dichos Grupos Empresariales. \n \n(188) b) Cuando el deudor sea persona moral: \n \n(188) 1. La persona o grupo de personas físicas y morales que actúen en forma concertada \ny ejerzan, directa o indirectamente, la administración a título de dueño, o el control \nde la persona moral acreditada. \n \n(188) 2. Las personas morales que sean controladas, directa o indirectamente por el propio \ndeudor, con independencia de que pertenezca o no a un mismo Grupo Empresarial y, \nen su caso, Consorcio. \n    \n \n \n \n \n \n(188) 3. Las personas morales que pertenezcan al mismo Grupo Empresarial o, en su caso, \nConsorcio. \n \n(188) Para efectos de lo dispuesto en los incisos a) numerales 2 (i) y 2 (ii), y b) numerales 2 \ny 3 anteriores, no quedarán comprendidas las Instituciones. \n \n(188) c) Cuando el deudor sea un fideicomiso, el fideicomitente, siempre que dicho \nfideicomitente se trate a su vez de una de las personas señaladas en los incisos a) y b) de \nla presente fracción y dichas personas, mantengan una participación mayoritaria en el \nfideicomiso deudor. \n \n(188) No obstante lo anterior, cuando el fideicomitente no mantenga una participación \nmayoritaria en el fideicomiso deudor, únicamente deberá considerase como un mismo \nRiesgo Común, la parte alícuota o proporcional del porcentaje de Financiamiento otorgado \nal fideicomiso, así como los Financiamientos que le sean otorgados en directo a cada \npersona que tenga el carácter de fideicomitente. \n \n (188) Para efectos de lo establecido en esta fracción, en las operaciones de factoraje, Descuento \ny Operaciones de Cesión de Derechos de Crédito, también se podrá considerar como deudor \nal factorado, descontatario o cedente de los derechos de crédito, únicamente cuando exista \nobligación solidaria de estos últimos; de lo contrario, se seguirá considerando como deudor al \nsujeto pasivo de los créditos adquiridos. \n \n(188) CLVI. Riesgo Consolidado: al riesgo de la Institución y sus Subsidiarias Financieras, tomadas en \nsu conjunto. \n \n(188) CLVII. Riesgo de Base: a la pérdida potencial que se generaría por cambios en los precios de \nMercancías o instrumentos financieros utilizados en una estrategia de cobertura de tal forma \nque se reduzca la efectividad de dicha estrategia a través del tiempo. \n \n(188) CLVIII. Riesgo Direccional: a la pérdida potencial que se generaría por el cambio del precio \nactual de una Mercancía en la fecha de su intercambio. \n \n(188) CLIX. Riesgo Operacional: a la pérdida potencial por fallas o deficiencias en los controles \ninternos, por errores en el procesamiento y almacenamiento de las Operaciones o en la \ntransmisión de información, así como por resoluciones administrativas y judiciales adversas, \nfraudes o robos y comprende, entre otros, al riesgo tecnológico y al riesgo legal, en el \nentendido de que: \n \n(188) a) El riesgo tecnológico se define como la pérdida potencial por daños, interrupción, \nalteración o fallas derivadas del uso del hardware, software, sistemas, aplicaciones, redes \n    \n \n \n \n \ny cualquier otro canal de transmisión de información en la prestación de servicios \nbancarios a los clientes de la Institución. \n \n(188) b) El riesgo legal se define como la pérdida potencial por el incumplimiento de las \ndisposiciones legales y administrativas aplicables, la emisión de resoluciones \nadministrativas y judiciales desfavorables y la aplicación de sanciones, en relación con las \nOperaciones que la Institución lleva a cabo. \n \n(188) CLX. Secretaría: a la Secretaría de Hacienda y Crédito Público. \n \n(188) CLXI. Seguro de Crédito: al seguro otorgado por instituciones de seguro especializadas, \nautorizadas por la Secretaría para cubrir el riesgo de no pago de un acreditado. \n \n(188) CLXII. Seguro de Crédito a la Vivienda: al seguro de crédito hipotecario otorgado por \ninstituciones de seguro especializadas, autorizadas por la Secretaría para cubrir el riesgo de \nno pago de un acreditado. \n \n(188) CLXIII. Seguro de Desempleo: al seguro que proporciona una institución de seguros autorizada \npara cubrir el monto exigible de un crédito de la Cartera Crediticia Hipotecaria de Vivienda, en \nel evento de que el acreditado pierda involuntariamente la relación laboral. \n \n(188) CLXIV. Servicios Complementarios o Auxiliares: a los que prestan las Empresas de Servicios a \nuna o más Instituciones, según sea el caso, relacionados con soporte o apoyo en su \nde la Ley. \n \n(188) CLXV. Sesión: al periodo en el cual los Usuarios podrán llevar a cabo consultas, Operaciones \nMonetarias o cualquier otro tipo de transacción bancaria, una vez que hayan ingresado al \nservicio de Banca Electrónica con su Identificador de Usuario. \n \n(188) CLXVI. Severidad de la Pérdida: al porcentaje del saldo insoluto del crédito expuesto a riesgo, \nuna vez tomado en cuenta el valor de las garantías. \n \n(188) CLXVII. Severidad de la Pérdida en caso de Incumplimiento (SP): a la intensidad de la pérdida \nen caso de incumplimiento expresada como porcentaje de la Exposición al Incumplimiento, \nuna vez tomados en cuenta el valor de las garantías y los costos asociados a los procesos de \nrealización (judiciales, administrativos de cobranza y de escrituración, entre otros). \n  \n(188) La Severidad de la Pérdida en caso de Incumplimiento para los métodos basados en \ncalificaciones internas básico y avanzado se sujetará a lo dispuesto respectivamente, en las \nfracciones I y II, del artículo 172 Bis 8 de las presentes disposiciones. \n \n    \n \n \n \n \n(188) CLXVIII. Siniestralidad: al resultado de dividir el número de Siniestros entre el número de \nSucursales. \n \n(188) CLXIX. Siniestro: al daño o pérdida que sufren las Instituciones, en particular sus Oficinas \nBancarias, sus empleados, su patrimonio o el Público Usuario, por actos del hombre o hechos \nde la naturaleza. \n \n(188) CLXX. Sistema de Control Interno: al conjunto de objetivos y los lineamientos necesarios para \nsu implementación, que establezcan las Instituciones con el propósito de: \n \n(188) a) Procurar que los mecanismos de operación sean acordes con las estrategias y fines de \nlas Instituciones, que permitan prever, identificar, administrar, dar seguimiento y evaluar \nlos riesgos que puedan derivarse del desarrollo de su objeto social, con el propósito de \nminimizar las posibles pérdidas en que puedan incurrir. \n \n(188) b) Delimitar las diferentes funciones y responsabilidades entre sus órganos sociales, \nunidades administrativas y personal, a fin de procurar eficiencia y eficacia en la realización \nde sus actividades. \n \n(188) c) Contar con información financiera, económica, contable, jurídica y administrativa, que \nsea completa, correcta, precisa, íntegra, confiable y oportuna, y que contribuya a la \nadecuada toma de decisiones. \n \n(188) d) Coadyuvar permanentemente a la observancia de la normatividad aplicable a las \nactividades de las Instituciones. \n \n(188) CLXXI. Sistema de Recepción y Asignación: al sistema automatizado de recepción de \ninstrucciones, registro y ejecución de Órdenes y asignación de operaciones con valores \ninscritos en el Registro. \n \n(188) CLXXII. Sistema de Remuneración: al conjunto de funciones, políticas y procedimientos que \ndeberán establecer las instituciones de banca múltiple a fin de que las remuneraciones \nordinarias y extraordinarias de sus empleados, de las diferentes unidades administrativas, de \ncontrol y de negocio, o personal que ostente algún cargo, mandato, comisión o cualquier otro \ntítulo jurídico que las instituciones de banca múltiple hayan otorgado para la realización de sus \noperaciones por cuenta propia o con el público, se determinen en atención a los riesgos \nactuales y potenciales que representan las actividades desempeñadas por dichos empleados \no personal en lo individual. \n \n(188) CLXXIII. SITI: al Sistema Interinstitucional de Transferencia de Información, el cual forma parte \nde la Oficialía de Partes de la Comisión Nacional Bancaria y de Valores. \n \n    \n \n \n \n \n(188) CLXXIV. Sociedad de Apoyo: a la empresa que, en su caso, constituyan una o más Instituciones \noperativos para auxiliar en el cumplimiento de las obligaciones que estas disposiciones le \nimponen a las Instituciones en materia de Medidas Básicas de Seguridad y que podrá, entre \notros: \n \n(188) a) Proporcionar asesoría a la Institución que corresponda, en relación con el estándar \ntecnológico vigente y programas de capacitación. \n \n(188) b) Coordinar la celebración de convenios de servicios y seguimiento a procesos con los \ncuerpos de seguridad pública competentes y las autoridades de procuración de justicia. \n \n(188) c) Coadyuvar y apoyar a las autoridades mencionadas en el inciso b) anterior, en la \nidentificación de los probables responsables y en la realización de sus actividades de \nprocuración de justicia. \n \n(188) CLXXV. Sociedades Inmobiliarias: a aquellas personas morales en cuyo capital participen una \no varias Instituciones y que tengan por objeto exclusivo la adquisición, arrendamiento, \nadministración, aprovechamiento, explotación, enajenación y uso de los inmuebles en que se \nubiquen oficinas y sucursales de las Instituciones que participen en su capital social, así como \nla ejecución de obras de adaptación, conservación, construcción, demolición, mantenimiento \ny modificación, respecto de tales inmuebles. \n \n(188) CLXXVI. Subsidiarias Financieras: a las entidades financieras que sean objeto de consolidación \ncontable de conformidad con los criterios de contabilidad para las Instituciones, expedidos por \nla Comisión, exceptuando aquellas que estén sujetas a normas prudenciales emitidas por una \nautoridad financiera mexicana distinta a la Comisión. \n \n(193) CLXXVII. Suplemento de Capital Contracíclico: a aquel determinado conforme al inciso c) de la \n \n(192) CLXXVIII. Suplemento de Conservación de Capital: a aquel determinado conforme a la fracción \nPonderados Sujetos a Riesgo Totales, así como aquel porcentaje de los Activos Ponderados \nSujetos a Riesgo Totales correspondiente al Suplemento de Capital Contracíclico de cada \nInstitución determinado conforme al Capítulo VI Bis 2 del Título Primero Bis de las presentes \ndisposiciones y, tratándose de Instituciones de Banca Múltiple de Importancia Sistémica Local, \npor un porcentaje adicional de los Activos Ponderados Sujetos a Riesgo Totales determinado \nde conformidad con el Capítulo VI Bis 1 del Título Primero Bis de las presentes disposiciones. \n \n(188) CLXXIX. Tarjeta Bancaria con Circuito Integrado: a las tarjetas de débito o crédito o con un \ncircuito integrado o chip, que pueda almacenar información y procesarla con el fin de verificar, \n    \n \n \n \n \nmediante procedimientos criptográficos, que la tarjeta y la terminal donde se utiliza son \nválidas. \n \n(188) CLXXX. Teléfono Móvil: a los Dispositivos de Acceso a servicios de telefonía, que tienen \nasignado un número único de identificación y utilizan comunicación celular o de \nradiofrecuencia pública. \n \n(188) CLXXXI. Terminal Punto de Venta: a los Dispositivos de Acceso al servicio de Banca Electrónica, \ntales como terminales de cómputo, teléfonos móviles y programas de cómputo, operados por \ncomercios o Usuarios para instruir el pago de bienes o servicios con cargo a una tarjeta o \ncuenta bancaria. \n \n(188) CLXXXII. Título o Instrumento Subyacente: a la variable financiera que es objeto o referencia \nde un contrato relativo a operaciones derivadas. \n \n(188) CLXXXIII. Truncamiento: a aquel proceso mediante el cual una Institución conserva en custodia \nlos cheques librados a cargo de otra Institución al recibirlos en pago o, en su caso, para abono \nen cuenta de sus clientes, sin que la primera efectúe la entrega del documento original a la \nsegunda, una vez efectuada su compensación. \n \n(188) CLXXXIV. \nInversión y reforma y adiciona diversas disposiciones del Código Fiscal de la Federación y de la \n1995, tal como el mismo sea modificado o adicionado de tiempo en tiempo. \n \n(220) \nreformadas y adicionadas diversas disposiciones de la Constitución Política de los Estados \npublicado en el Diario \nOficial de la Federación el 27 de enero de 2016, tal como sea modificado o adicionado de \ntiempo en tiempo. \n \n(188) CLXXXVI. Unidad de Negocio: a las áreas originadoras y tomadoras de riesgos discrecionales \nal interior de las Instituciones. \n \n(188) CLXXXVII. Unidad Especializada: al área responsable de la seguridad y protección de la \nInstitución y de sus Oficinas Bancarias, que represente a aquella en materia de seguridad ante \nlas autoridades. \n \n(188) CLXXXVIII. Usuario: al cliente de una Institución que haya suscrito un contrato con esta en el \nque se convenga la posibilidad de que, por sí mismo o a través de las personas facultadas por \ndicho cliente, utilice Medios Electrónicos para realizar consultas, Operaciones Monetarias y \ncualquier otro tipo de transacción bancaria. \n    \n \n \n \n \n \n (188) Asimismo, se considerarán Usuarios a los terceros con los que las Instituciones celebren \ncomisiones por cuenta y orden de la propia Institución, en términos de lo dispuesto por la \nSección Segunda del Capítulo XI del Título Quinto de las presentes disposiciones, que utilicen \nMedios Electrónicos para la realización de las citadas comisiones. \n \n(188) CLXXXIX. Valor de la Vivienda: al importe que sea menor entre el valor de la operación de \ncompra venta o el valor de avalúo. \n \n(188) CXC. Vehículo de Propósito Especial en Esquemas de Bursatilización: a la sociedad, fideicomiso \no cualquier otra entidad organizada cuyas actividades se limitan estrictamente a cumplir su \nfin específico y cuya estructura está diseñada para aislar a dicha sociedad del riesgo de crédito \nde un originador o vendedor de posiciones. Los Vehículos de Propósito Especial en Esquemas \nde Bursatilización se utilizan habitualmente como medios financieros en los que se venden \nactivos a un fideicomiso o entidad similar a cambio de efectivo o de otros activos financiados \nmediante deuda emitida por el Vehículo de Propósito Especial en Esquemas de Bursatilización. \n \n(188) CXCI. Vínculo de Negocio: a lo previsto por la fracción III del artículo 45-P de la Ley. \n \n(188) CXCII. Vínculo Patrimonial: a lo previsto por la fracción IV del artículo 45-P de la Ley. \n \n(214) CXCIII. VSM: a las Veces de Salario Mínimo diario o mensual, vigente en la Ciudad de México, \nque publique en el Diario Oficial de la Federación la Comisión Nacional de los Salarios Mínimos, \n \n \n(45) Capitulo II  \n(45) De los capitales mínimos \n \n",
        "descripcion": " Para efectos de las presentes disposiciones, se entenderá por:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 70",
        "id": 818,
        "contenido": " Las Instituciones que utilicen Metodologías Internas para cada grupo de \n(130) Artículo 2 Bis 70.- Las Instituciones que utilicen Metodologías Internas para cada grupo de \nriesgo, habrán de observar las condiciones siguientes: \n \n(50) I. Operaciones Sujetas a Riesgo de Crédito con las personas a que se refieren las fracciones I, II \n \n(50) Para cada una de las Operaciones Sujetas a Riesgo de Crédito, las Instituciones deberán \nincluir en sus métodos el efecto de los componentes de riesgo siguientes: \n \n(50) a) La Probabilidad de Incumplimiento asociada a cada uno de sus grados de calificación de \ndeudor, expresada en porcentaje y con un horizonte de cálculo anual. \n \n(50) b) La Severidad de la Pérdida en caso de Incumplimiento, expresada como porcentaje de la \nExposición al Incumplimiento. \n \n(50) c) La Exposición al Incumplimiento, expresada en moneda nacional. \n \n(50) d) El Plazo Efectivo o de Vencimiento, expresado en años. \n \n(130) Las Instituciones que utilicen el enfoque básico, deberán estimar la Probabilidad de \nIncumplimiento asociada a cada uno de sus grados de calificación de deudor y deberán utilizar \nla Exposición al Incumplimiento, así como las estimaciones establecidas por la Comisión \n    \n \n \n \n \nrelativas a la Severidad de la Pérdida en caso de Incumplimiento y Plazo Efectivo o de \nVencimiento, al momento de calcular sus requerimientos de capital por riesgo de crédito. \n \n(50) Tratándose de Instituciones que utilicen el método avanzado, éstas deberán estimar todos \nlos componentes de riesgo mencionados en esta fracción. \n \n(50) II. Operaciones Sujetas a Riesgo de Crédito con las personas a que se refiere la fracción IV del \n \n(50) Adicionalmente, las Instituciones deberán agrupar dentro de las subclases de activos \nOperaciones Sujetas a Riesgo de Crédito que presenten características de riesgo similares.  \n \n(130) Para las operaciones a que se refiere esta fracción, las Instituciones solamente podrán \noptar por el enfoque avanzado de Metodologías Internas, por lo que deberán proporcionar sus \npropias estimaciones de la Probabilidad de Incumplimiento, la Severidad de la Pérdida en caso \nde Incumplimiento y la Exposición al Incumplimiento para cada segmento definido, en apego a \nlo establecido en el Subapartado B del Apartado C de la presente sección y en el Anexo 15 de \nestas disposiciones. \n \n \n(50) Apartado C \n(50) Determinación del requerimiento de capital por riesgo de crédito \n \n(50) Subapartado A \n(50) Operaciones Sujetas a Riesgo de Crédito con las personas a que se refieren las \n \n",
        "descripcion": " Las Instituciones que utilicen Metodologías Internas para cada grupo de \n(130) Artículo 2 Bis 70.- Las Instituciones que utilicen Metodologías Internas para cada grupo de \nriesgo, habrán de observar las condiciones siguientes:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 71",
        "id": 825,
        "contenido": " Las Instituciones, para determinar el requerimiento de capital por riesgo de \n(50) Artículo 2 Bis 71.- Las Instituciones, para determinar el requerimiento de capital por riesgo de \ncrédito con las personas a las que se refiere este subapartado, deberán sujetarse a lo siguiente: \n \n(161) I. Tratándose de Operaciones Sujetas a Riesgo de Crédito sin incumplimiento, para calcular los \nactivos ponderados por riesgo de crédito (APRC), se sujetarán a la fórmula siguiente: \n \n \n(161) En donde EI, denota la Exposición al Incumplimiento, conforme a lo establecido en el \n(161) El ponderador del requerimiento de capital por riesgo de crédito (PRCRC) se define como: \n    \n \n \n \n \n \n \nBis 72 de las presentes disposiciones. \n \n(161) Severidad de la Pérdida en caso de Incumplimiento ( ): i) tratándose de la Metodología \ndisposiciones, y ii) en la Metodología Interna con enfoque avanzado, la que las Instituciones \ndisposiciones. \n \nBis 80 de las presentes disposiciones. \n \n(161) ln denota el logaritmo natural; N(x) denota la función de distribución acumulada de una \nvariable aleatoria normal estándar y G (z) denota la función de distribución inversa acumulada \npara una variable aleatoria normal estándar. \n \n(50) II. El ponderador del requerimiento de capital por riesgo de crédito para las posiciones que se \nlas presentes disposiciones, será de cero, toda vez que la Severidad de la Pérdida en caso de \nIncumplimiento será reservada en su totalidad. \n \n(162) III. La Correlación (R) referida en la fracción I del presente artículo se incrementará en un 25 \npor ciento para el caso de Operaciones Sujetas a Riesgo de Crédito con personas a las que se \ndisposiciones cuyo valor agregado total de sus activos, calculado en forma consolidada, sea \nmayor a 250 mil millones de UDIs. Asimismo, también se incrementará en un 25 por ciento la \ncorrelación tratándose de otras entidades financieras que no estén sujetas a la supervisión de \nla Comisión, de la Comisión Nacional del sistema de Ahorro para el Retiro o de alguna otra \nentidad nacional o extranjera con facultades de supervisión. \n \n",
        "descripcion": " Las Instituciones, para determinar el requerimiento de capital por riesgo de \n(50) Artículo 2 Bis 71.- Las Instituciones, para determinar el requerimiento de capital por riesgo de \ncrédito con las personas a las que se refiere este subapartado, deberán sujetarse a lo siguiente:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 72",
        "id": 829,
        "contenido": " Las Instituciones para calcular la Probabilidad de Incumplimiento, deberán \n(50) Artículo 2 Bis 72.- Las Instituciones para calcular la Probabilidad de Incumplimiento, deberán \nsujetarse a los criterios siguientes: \n \n    \n \n \n \n \n(50) I. Las estimaciones de la Probabilidad de Incumplimiento deberán consistir en una media a largo \nplazo de las tasas de incumplimiento anuales de los acreditados incluidos en cada grado de \nriesgo, obtenida con observaciones que correspondan como mínimo a cinco años. La Comisión \npodrá autorizar el uso de periodos de información menores si la Institución puede demostrar, \nentre otros aspectos, que la estimación de los datos más recientes proporciona una \nestimación razonable y conservadora. \n \n(50) II. La Probabilidad de Incumplimiento será la mayor entre la Probabilidad de Incumplimiento de \nun año asociada con la calificación interna del deudor y 0.03 por ciento.  \n \n(50) III. En el caso de deudores que se encuentren en incumplimiento, se aplicará una Probabilidad de \nIncumplimiento de 100 por ciento.  \n \n(50) IV. Las Instituciones deberán incluir en sus estimaciones, un margen suficiente a fin de poder \nhacer frente a los errores probables en la estimación de la Probabilidad de Incumplimiento. \nDicho margen deberá ser determinado por la propia Institución. \n \n(219) V. Las Instituciones, al calcular las Probabilidades de Incumplimiento asociadas a cada tipo de \ndeudor, deberán cumplir con los requerimientos mínimos establecidos al efecto en la Sección \nIV del Anexo 15 de estas disposiciones. \n \n",
        "descripcion": " Las Instituciones para calcular la Probabilidad de Incumplimiento, deberán \n(50) Artículo 2 Bis 72.- Las Instituciones para calcular la Probabilidad de Incumplimiento, deberán \nsujetarse a los criterios siguientes:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 73",
        "id": 835,
        "contenido": " Las Instituciones en la determinación de la Severidad de la Pérdida con un \n(130) Artículo 2 Bis 73.- Las Instituciones en la determinación de la Severidad de la Pérdida con un \nenfoque básico y avanzado, deberán observar lo siguiente: \n \n(130) I. En la Metodología Interna con un enfoque básico, deberán asignar una Severidad de la Pérdida \nde: \n \n(130) a) 45 por ciento a las Posiciones Preferentes sin garantías y en el caso de Posiciones \n2 Bis 74 de las presentes disposiciones. \n \n(130) b) 75 por ciento a las Posiciones Subordinadas. En el caso de créditos sindicados aquellos \nque para efectos de su prelación en el pago, contractualmente se encuentren \nsubordinados respecto de otros acreedores. \n \n(130) No obstante lo previsto por los incisos a) y b) anteriores, las Instituciones deberán asignar \nuna Severidad de la Pérdida del 100 por ciento a las Posiciones de la Cartera Crediticia \nComercial con 18 o más meses de atraso en el pago del monto exigible en los términos \npactados originalmente. \n \n(130) II. En la Metodología Interna con un enfoque avanzado, deberán ajustar la Severidad de la \nPérdida al considerar las condiciones económicas desfavorables. \n \n    \n \n \n \n \n(130) Para cada operación a la que se refiere este apartado, la Institución deberá estimar una \nSeveridad de la Pérdida que refleje una condición económica desfavorable ( ). La Severidad \nde la Pérdida no podrá ser inferior a la pérdida media a largo plazo ponderada por el número \nde incumplimientos, calculada a partir de la pérdida económica media de todos los \nincumplimientos observados dentro de la fuente de datos para dicho tipo de operación. \n \n(130) La definición de pérdida utilizada para estimar la Severidad de la Pérdida se establece en \n \n(219) Los flujos usados para la estimación de la pérdida económica deben ser traídos a valor \npresente usando una tasa de descuento adecuada al riesgo de la exposición, de conformidad \ncon el inciso a) del subnumeral (vii) de la Sección IV del Anexo 15 de estas disposiciones. \n \n(50) Las Instituciones, en casos en donde debido a una condición económica desfavorable se \npresenten variaciones cíclicas importantes en la magnitud de la pérdida, deberán incorporar dicha \nvariación en sus estimaciones de la Severidad de la Pérdida en caso de Incumplimiento. Para ello, \nlas Instituciones podrán utilizar valores medios de la Severidad de la Pérdida en caso de \nIncumplimiento observada, durante periodos de elevadas pérdidas crediticias, previsiones basadas \nen supuestos conservadores u otros métodos similares. Las Instituciones, durante dichos periodos, \npodrán adecuar las estimaciones de la Severidad de la Pérdida en caso de Incumplimiento, \nutilizando tanto datos internos como externos; estos últimos, siempre y cuando las Instituciones \npuedan demostrar la existencia de una estrecha relación entre lo siguiente: \n \n(50) a) El perfil interno de riesgo de la Institución y la composición de los datos externos; \n \n(50) b) El entorno económico y financiero del mercado donde actúa la Institución y el entorno \nde los datos externos; y \n \n(50) c) El sistema de calificación que da origen a los datos externos y el de la propia Institución. \n \n(219) Los sistemas que utilicen las Instituciones para determinar y validar la Severidad de la Pérdida, \ndeberán contar con procesos metodológicos debidamente documentados, que permitan evaluar \nlos efectos que tienen las coyunturas económicas desfavorables en las tasas de recuperación, así \ncomo para la determinación de las estimaciones de la Severidad de la Pérdida consistentes con las \ncondiciones económicas. Este proceso deberá incluir al menos lo que se establece en el inciso b) \nde la fracción (vii) de la Sección IV del Anexo 15 de estas disposiciones. \n \n",
        "descripcion": " Las Instituciones en la determinación de la Severidad de la Pérdida con un \n(130) Artículo 2 Bis 73.- Las Instituciones en la determinación de la Severidad de la Pérdida con un \nenfoque básico y avanzado, deberán observar lo siguiente:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 74",
        "id": 849,
        "contenido": " Las Instituciones que para obtener sus requerimientos de capital utilicen \n(130)Artículo 2 Bis 74.- Las Instituciones que para obtener sus requerimientos de capital utilicen \nla Metodología Interna con un enfoque básico o bien, que para calificar su cartera crediticia \nempleen la metodología general o una Metodología Interna con un enfoque básico, podrán ajustar \nel valor de la Severidad de la Pérdida de sus Posiciones Preferentes considerando las garantías \nreales financieras que cumplan con lo establecido en el inciso a) de la fracción II del Anexo 24 y en \nSP\n    \n \n \n \n \nrealizarse para cualquiera de los enfoques de Metodologías Internas contenidos en el presente \ntítulo, cuando las garantías reales elegibles cumplan los requisitos establecidos en el citado Anexo \n24. \n \n(130) Las garantías que se utilicen en el Método Estándar y que cumplan con lo establecido en el \ndeberán reconocerse como cobertura del riesgo de crédito ajustándose a lo dispuesto en el \nApartado E de la Sección Segunda del presente capítulo. \n \n(130) Las Instituciones que usen la Metodología Interna con enfoque básico contenido en el presente \ntítulo, no podrán utilizar el método simple de cobertura de riesgo de crédito, por lo que deberán \npresentes disposiciones. \n \n(130) La Severidad de la Pérdida ajustada por garantías reales financieras (SP*) aplicable a una \nPosición Preferente cubierta con la citada garantía real corresponderá a: \n \n \nDonde: \n \nSPi* = Severidad de la Pérdida de la i-ésima posición ajustada por garantías reales \nfinancieras \nSPi = 45 por ciento para Posiciones Preferentes sin garantía para efecto de \ncálculo de los requerimientos de capital y para efectos de calcular las \nreservas derivadas de la calificación de créditos de la cartera crediticia \ncomercial; o \n75 por ciento para las Posiciones Subordinadas. En el caso de créditos \nsindicados aquellos que para efectos de su prelación en el pago, \ncontractualmente se encuentren subordinados respecto de otros \nacreedores. \n100 por ciento para las Posiciones de la cartera crediticia comercial con 18 \no más meses de atraso en el pago del monto exigible en los términos \npactados originalmente en el cálculo de los requerimientos de capital y \npara efectos de la calificación de los créditos de la cartera crediticia \ncomercial, antes del reconocimiento de la garantía real. \nEIi* = Exposición al Incumplimiento de la i-ésima posición después de la cobertura \nde riesgo determinada de conformidad con la metodología integral \ndisposiciones) de garantías reales financieras a las que se refiere el inciso \na) de la fracción II del Anexo 24 de estas disposiciones. Este concepto \núnicamente se utiliza para calcular la Severidad de la Pérdida efectiva (SP*) \n    \n \n \n \n \nBis 33 de estas disposiciones. Las Instituciones deberán continuar \ncalculando la Exposición al Incumplimiento sin tomar en cuenta la \ncobertura mediante dicha garantía real, a menos que se especifique lo \ncontrario. \nEIi = Exposición al Incumplimiento de la í-  \n \n",
        "descripcion": " Las Instituciones que para obtener sus requerimientos de capital utilicen \n(130)Artículo 2 Bis 74.- Las Instituciones que para obtener sus requerimientos de capital utilicen \nla Metodología Interna con un enfoque básico o bien, que para calificar su cartera crediticia \nempleen la metodología general o una Metodología Interna con un enfoque básico, podrán ajustar \nel valor de la Severidad de la Pérdida de sus Posiciones Preferentes considerando las garantías \nreales financieras que cumplan con lo establecido en el inciso ",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 75",
        "id": 850,
        "contenido": " Las Instituciones podrán elegir entre utilizar los descuentos aplicables al \n(50) Artículo 2 Bis 75.- Las Instituciones podrán elegir entre utilizar los descuentos aplicables al \nmétodo integral de cobertura de riesgo de crédito mediante garantías reales o, emplear un \ndescuento o recorte (Hc) de cero tratándose de operaciones que satisfagan las condiciones para \naplicar un factor de ajuste de 0 (cero) por ciento, conforme a lo establecido para las operaciones \nsiempre que la contraparte de la operación sea un Participante Central del Mercado. \n \n",
        "descripcion": " Las Instituciones podrán elegir entre utilizar los descuentos aplicables al \n(50) Artículo 2 Bis 75.- Las Instituciones podrán elegir entre utilizar los descuentos aplicables al \nmétodo integral de cobertura de riesgo de crédito mediante garantías reales o, emplear un \ndescuento o recorte (Hc) de cero tratándose de operaciones que satisfagan las condiciones para \naplicar un factor de ajuste de 0 (cero) por ciento, conforme a lo establecido para las operaciones \nsiempre que la contraparte de la operación sea un Participante Central del Mercado. \n \n",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 76",
        "id": 851,
        "contenido": " Las Instituciones podrán obtener una Severidad de la Pérdida efectiva \n(130) Artículo 2 Bis 76.- Las Instituciones podrán obtener una Severidad de la Pérdida efectiva \n(SPi**) cuando den cumplimiento a lo siguiente: \n \n(219) I. Registren garantías reales elegibles en los términos del inciso c) del subnumeral (ix) de la \nSección IV del Anexo 15 de estas disposiciones u otros instrumentos asimilables para cubrir \nlos requerimientos de capital por Metodologías Internas de las operaciones clasificadas en los \n \n(130) II. Registren las garantías reales no financieras a las que se refiere el inciso b) de la fracción II \ndel Anexo 24 de estas disposiciones u otros instrumentos asimilables, cuyo fin sea ajustar la \nSeveridad de la Pérdida de la cartera crediticia comercial. \n \n(130) III. Se sujeten a la metodología siguiente: \n \n(130) a) La Severidad de la Pérdida efectiva (SPi**) para la i-ésima operación se determinará con \nbase en dos niveles del coeficiente CiGR; así como por el tipo de garantía real no financiera \nde que se trate u otros instrumentos asimilables de conformidad con la tabla siguiente: \n \n \nSeveridad de la Pérdida efectiva para Posiciones Preferentes \nTipo de garantía real no financiera o \ninstrumento asimilable \n(C*) \nNivel mínimo de \ncobertura \nadmisible \n(C**) \nNivel de sobre \ncobertura para \nreconocer una \nmenor SP  \n(SP i**) \nSeveridad de la \nPérdida mínima \ncorrespondiente a C** \nDerechos de cobro incluyendo derechos \nfiduciarios \n0% 125% 35% \nBienes inmuebles comerciales y \nresidenciales \n30% 140% 35% \n    \n \n \n \n \nO\ntr\na\ns\n g\na\nra\nn\ntí\na\ns\n r\ne\na\nle\ns\n n\no\n f\nin\na\nn\nc\nie\nra\ns\n \nBienes muebles y otras 30% 140% 40% \nFideicomiso de garantía o de \nadministración o de ambos, en \ntodos los supuestos con \nParticipaciones Federales o \nAportaciones Federales como \nfuente de pago o ambas. \n25% 125% 10% \nFideicomiso de garantía o de \nadministración, o de ambos, en \ntodos los supuestos con Ingresos \nPropios como fuente de pago. \n100% 200% 10% \nInstrucciones irrevocables o \ncontratos de mandato de garantía o \nde ambos, en todos los supuestos \ncon Participaciones Federales, o \nAportaciones Federales o Ingresos \nPropios como fuente de pago o \ncualquier combinación. \n100% 100% 25% \n \n(130) b) El coeficiente Ci\nGR para la i-ésima operación será lo que resulte de dividir el valor de la \ngarantía real no financiera recibida, entre la EIEi conforme a la expresión que se indica a \ncontinuación: \n \n \n \nEn donde, \n \nCi = Valor de la garantía real, el cual deberá corresponder a la última valuación \ndisponible de dicha garantía. \nTratándose de bienes inmuebles o muebles, deberá considerarse un valor \nque no exceda el valor razonable corriente de la garantía, en los términos \ndel Anexo 24 de estas disposiciones. En caso de contar con dos o más \ngarantías reales de un mismo tipo el valor de estas deberá ser considerado \nen conjunto. \nEn el caso de participaciones en ingresos federales o ingresos propios \ncedidos a un fideicomiso de administración y fuente de pago o algún otro \ntipo de instrumento legal que cumpla los mismos fines, se considerará el \nmonto comprometido de los próximos 12 meses. En caso de que el \nfideicomiso cuente con alguna cuenta de reserva que funja como respaldo \npara el pago del crédito correspondiente, ésta se sumará al monto anual \nmencionado anteriormente. \nEIEi = Exposición al Incumplimiento Estimada de la i-ésima posición. Cuando la EIEi \nesté garantizada con participaciones en ingresos federales o ingresos \n    \n \n \n \n \npropios cedidos a un fideicomiso de administración y fuente de pago o algún \notro tipo de instrumento legal que cumpla los mismos fines, se considerará \ncomo el flujo estimado de deuda de los próximos 12 meses (incluyendo \ncapital e intereses). En el caso de que la deuda esté referida directa o \nindirectamente a tasa variable y no cuente con algún mecanismo de \ncobertura de tasa, el flujo estimado anual de deuda deberá multiplicarse \npor 110%. \n \n(130) c) Para efectos de determinar SPi**, se considerarán las garantías reales no financieras \núnicamente cuando cumplan con los requisitos del Anexo 24 de las presentes \ndisposiciones y el coeficiente CiGR > C*, es decir, cuando dicho coeficiente alcance o supere \nel nivel mínimo de cobertura admisible. \n \n(130) d) Para cada tipo de garantía deberá utilizarse la SPi** y los niveles C* y C** establecidos \nen la tabla contenida en el inciso a) de la presente fracción. \n \n(130) e) Se asignará a la operación directamente la SPi** relacionada con el tipo de garantía, \ncuando el coeficiente CiGR > C**, es decir, cuando dicho coeficiente alcance o supere el nivel \nde sobre cobertura. \n \n(130) f) A las operaciones en donde CiGR < C* se les asignará una SPi** igual a: \n \n(130) 1. 45 por ciento para Posiciones Preferentes sin garantía para efectos de cálculo de \nlos requerimientos de capital y para efectos de calcular las reservas derivadas de la \ncalificación de créditos de la cartera crediticia comercial. \n \n(130) 2. 75 por ciento para las Posiciones Subordinadas. En el caso de créditos sindicados \naquellos que para efectos de su prelación en el pago, contractualmente se encuentren \nsubordinados respecto de otros acreedores. \n \n(130) 3. 100 por ciento para las Posiciones de cartera crediticia comercial que reporten 18 \no más meses de atraso en el pago del monto exigible en los términos pactados \noriginalmente. \n \n(130) g) Para operaciones cuyo coeficiente CiGR se encuentre entre los niveles C* y C**, se \naplicará lo siguiente: \n \n(130) 1. Para cada operación deberá identificarse la porción plenamente cubierta, dividendo \nel valor de la garantía real no financiera entre el nivel C** que corresponda al tipo de \ngarantía real no financiera (Ci / C**), de conformidad con la tabla contenida en el inciso \na) de la presente fracción. A dicha porción cubierta se le asignará la SPi** asociada al \nreferido nivel C**. \n \n    \n \n \n \n \n(130) 2. La porción expuesta se obtendrá restando a la EIEi la porción plenamente cubierta \ndeterminada conforme al numeral anterior. A esta porción se le asignará una SPi de \n45, 75 o 100 por ciento de conformidad con el inciso f) anterior. \n \n(130) Para efectos de lo dispuesto por el presente artículo, por otros instrumentos asimilables \ndeberá entenderse a los fideicomisos de garantía o de administración o ambos, celebrados al \namparo del artículo 382 de la Ley General de Títulos y Operaciones de Crédito, así como a las \ninstrucciones irrevocables o contratos de mandato de garantía o ambos, referidos en el artículo \n2596 del Código Civil Federal; ambos instrumentos contenidos en el numeral 4 del inciso b) de la \nfracción II del Anexo 24 de las presentes disposiciones. \n \n",
        "descripcion": " Las Instituciones podrán obtener una Severidad de la Pérdida efectiva \n(130) Artículo 2 Bis 76.- Las Instituciones podrán obtener una Severidad de la Pérdida efectiva \n(SPi**) cuando den cumplimiento a lo siguiente:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 77",
        "id": 867,
        "contenido": " La metodología para determinar la Severidad de la Pérdida efectiva de una \n(130) Artículo 2 Bis 77.- La metodología para determinar la Severidad de la Pérdida efectiva de una \noperación, tratándose de Instituciones que hayan tomado tanto una garantía real admisible, como \notra garantía real no financiera elegible por la Metodología Interna, deberá ser consistente con el \nMétodo Estándar y tomar en cuenta los lineamientos siguientes: \n \n(130) I. Las Instituciones que hayan obtenido distintas formas de cobertura de riesgo de crédito, \ndeberán subdividir el valor ajustado de la posición en diferentes porciones, cada una asociada \na un tipo de cobertura de riesgo de crédito única. Para ello, las Instituciones deberán dividir, en \nsu caso, la posición en la porción cubierta por la garantía real financiera admisible, la porción \ncubierta por los derechos de cobro, la porción cubierta por bienes inmuebles, la porción \ncubierta por otras garantías reales no financieras y la porción sin cobertura. \n \n(130) La porción cubierta por garantías reales financieras admisibles y su SPi* correspondiente, \nen tanto las porciones cubiertas por los derechos de cobro, los bienes inmuebles, otras \ngarantías reales no financieras y la porción expuesta sin cobertura, así como sus SPi** \n \n(130) II. Una vez reconocida la cobertura de las garantías reales financieras y no financieras \nadmisibles, a la porción restante se le asignará la SPi** de conformidad con el inciso f), fracción \ngarantías reales no financieras, entre el valor de la EIEi, se encuentre por debajo de un nivel de \n25%. En caso contrario, las porciones cubiertas conservaran la SPi** obtenida conforme a la \nfracción I anterior. \n \n(50) III. Los activos ponderados por riesgo, deberán calcularse por separado para cada porción \ncubierta plenamente. \n \n",
        "descripcion": " La metodología para determinar la Severidad de la Pérdida efectiva de una \n(130) Artículo 2 Bis 77.- La metodología para determinar la Severidad de la Pérdida efectiva de una \noperación, tratándose de Instituciones que hayan tomado tanto una garantía real admisible, como \notra garantía real no financiera elegible por la Metodología Interna, deberá ser consistente con el \nMétodo Estándar y tomar en cuenta los lineamientos siguientes:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 78",
        "id": 871,
        "contenido": " Las Instituciones podrán optar por reconocer o no la cobertura de riesgo \n(50) Artículo 2 Bis 78.- Las Instituciones podrán optar por reconocer o no la cobertura de riesgo \nde crédito mediante el uso de garantías personales y derivados de crédito, para los métodos \nbasados en calificaciones internas. \n \n    \n \n \n \n \n(50) Al respecto, la cobertura de riesgo de crédito en la forma de garantías personales y derivados \nde crédito no deberá reflejar el efecto mitigador del Doble Incumplimiento. Si la Institución opta \npor reconocer la cobertura de riesgo de crédito, la ponderación por riesgo ajustada no podrá ser \ninferior a la de una posición directa similar frente al garante. Las Instituciones podrán optar por no \nreconocer la cobertura de riesgo de crédito, si al hacerlo se determinara un requerimiento de \ncapital más elevado. \n \n(130) Las Instituciones, para efectos de reconocer la cobertura de riesgo de crédito mediante el uso \nde garantías personales y derivados de crédito, en la estimación de la Severidad de la Pérdida se \nsujetarán a lo siguiente: \n \n(130) I. Reconocimiento bajo la Metodología Internas con enfoque básico y bajo la metodología de \ncobertura de riesgo de crédito aplicable a la calificación de cartera crediticia comercial, \nestablecida en el Sub Apartado B del Apartado A de la Sección Tercera del Capítulo V del Título \nSegundo de las presentes disposiciones. \n \n(178) El método para el reconocimiento de garantías personales y derivados de crédito, deberá \nser consistente con el tratamiento bajo el Método Estándar de acuerdo con lo establecido en \nAsimismo, aquellas empresas a las que se les asigne una calificación interna con una \nProbabilidad de Incumplimiento anual menor a 1.26 por ciento, podrán ser reconocidas para \nlos mismos efectos. Este reconocimiento podrá ser realizado, siempre y cuando las \nInstituciones cumplan con los requisitos señalados en el Anexo 25 de estas disposiciones. \n \n (50) Las garantías personales admisibles deberán ser reconocidas de la siguiente manera: \n \n(50) a) Para la parte cubierta de la posición, se calculará la ponderación de riesgo utilizando: \n \n(50) 1. La función de ponderación de riesgo correspondiente al tipo de garante, y \n \n(50) 2. La Probabilidad de Incumplimiento correspondiente al garante.  \n \n(130) b) Las Instituciones podrán sustituir la Severidad de la Pérdida de la operación subyacente, \ncon la Severidad de la Pérdida correspondiente a la garantía, tomando en cuenta el grado \nde prelación del garante o del derivado crediticio. \n \n(50) A la parte expuesta de la posición se le asignará la ponderación de riesgo asociada al deudor \nsubyacente. \n \n(50) Cuando exista una cobertura parcial, o cuando exista un desfase de tipo de cambio entre \nla posición y la cobertura de crédito, las Instituciones deberán dividir la posición en el monto \ncubierto y el monto expuesto. El tratamiento en el enfoque básico deberá realizarse de \n    \n \n \n \n \nacuerdo a lo señalado en el Método Estándar y dependerá de que la cobertura sea proporcional \no por tramos. \n \n(50) II. Reconocimiento bajo el método de calificaciones internas avanzado. \n \n(130) Las Instituciones deberán reflejar el efecto de la cobertura del riesgo de crédito de las \ngarantías personales y los derivados de crédito, a través de un ajuste en la estimación de la \nProbabilidad de Incumplimiento o de la Severidad de la Pérdida. \n \n(130) Los ajustes que se realicen a la Probabilidad de Incumplimiento o a la Severidad de la \nPérdida, deberán realizarse de manera consistente para un mismo tipo de garantía o de \nderivado de crédito; al hacerlo, las Instituciones no deberán incluir en dichos ajustes el efecto \ndel Doble Incumplimiento. En este sentido, la ponderación por riesgo ajustada no podrá ser \ninferior a la de una posición directa similar frente al proveedor de protección. \n \n(219) Las Instituciones que utilicen sus propias estimaciones de Severidad de la Pérdida, podrán \noptar por la Metodología Interna con enfoque básico a que se refiere la fracción I anterior, o \nhacer un ajuste a su estimación de la Severidad de la Pérdida de la posición para reflejar la \nexistencia de la garantía personal o el derivado de crédito. Para efectos de esta última opción, \nno se encuentra limitado el conjunto de garantías personales admisibles. En todo caso, las \nInstituciones deberán cumplir con los requerimientos mínimos señalados en el subnumeral (ix) \nde la Sección IV del Anexo 15 y en el Anexo 25 de estas disposiciones. \n \n",
        "descripcion": " Las Instituciones podrán optar por reconocer o no la cobertura de riesgo \n(50) Artículo 2 Bis 78.- Las Instituciones podrán optar por reconocer o no la cobertura de riesgo \nde crédito mediante el uso de garantías personales y derivados de crédito, para los métodos \nbasados en calificaciones internas. \n \n    \n \n \n \n \n(50) Al respecto, la cobertura de riesgo de crédito en la forma de garantías personales y derivados \nde crédito no deberá reflejar el efecto mitigador del Doble Incumplimiento. Si la Institución opta \npor reconocer la cobertura de riesgo de crédito, la ponderación por riesgo ajustada no podrá ser \ninferior a la de una posición directa similar frente al garante. Las Instituciones podrán optar por no \nreconocer la cobertura de riesgo de crédito, si al hacerlo se determinara un requerimiento de \ncapital más elevado. \n \n(130) Las Instituciones, para efectos de reconocer la cobertura de riesgo de crédito mediante el uso \nde garantías personales y derivados de crédito, en la estimación de la Severidad de la Pérdida se \nsujetarán a lo siguiente:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 79",
        "id": 876,
        "contenido": " Las Instituciones, tanto en el método basado en calificaciones internas \n(50) Artículo 2 Bis 79.- Las Instituciones, tanto en el método basado en calificaciones internas \nbásico como en el avanzado, deberán considerar a la Exposición al Incumplimiento de una partida \ndentro del balance como la posición esperada bruta de reservas, de la operación de crédito en caso \nde producirse el incumplimiento del deudor. Dicha Exposición al Incumplimiento, no podrá ser \ninferior a la cantidad dispuesta de la operación al momento del cálculo del requerimiento de capital. \nEn todo caso, las reservas deberán determinarse a su vez, de conformidad con lo establecido en \nlos Capítulos I, II y V del Título Segundo de estas disposiciones. \n \n(50) Tratándose de posiciones fuera de balance, la Exposición al Incumplimiento será determinada \npor el monto total de la línea de crédito autorizada no dispuesta, multiplicada por un factor de \nconversión de crédito, de conformidad con lo siguiente: \n \n(50) I. Exposición al Incumplimiento bajo el método básico para la estimación de los factores de \nconversión de crédito. \n \n(50) Los factores de conversión de crédito son los mismos que se aplican en el Método Estándar \nseñalados en el Apartado C de la Sección Segunda del presente capítulo. Lo anterior no \nresultará aplicable para aquellas operaciones que no estén comprometidas, que sean \ncancelables incondicionalmente o bien, que permitan en la práctica una cancelación \nautomática en cualquier momento y sin previo aviso por parte de las Instituciones; lo anterior \n    \n \n \n \n \nsiempre y cuando dichas Instituciones demuestren que realizan un seguimiento constante de \nla situación financiera del prestatario y que sus Sistemas de Control Interno permiten cancelar \nla línea ante muestras de deterioro de la calidad crediticia del prestatario, en cuyo caso se \naplicará un factor de conversión de crédito del 0 (cero) por ciento. \n \n(50) El importe al que se aplicará el factor de conversión de crédito deberá ser el menor entre el \nvalor de la línea de crédito comprometida sin disponer y el valor que refleje cualquier posible \nlimitación a la ejecución de dicha línea por parte del prestatario, por ejemplo, cuando exista \nun límite máximo al importe del préstamo potencial que esté vinculado al flujo de efectivo \nestimado del prestatario. Si la línea de crédito se encuentra limitada con un mecanismo de \neste tipo, las Instituciones deberán contar con procedimientos suficientes para dar \nseguimiento y gestión a dicha operación, que permitan avalar este argumento.  \n \n(50) Las Instituciones, a fin de aplicar un factor de conversión de crédito del 0 (cero) por ciento \npara operaciones incondicionales y cancelables inmediatamente y otras líneas de crédito, \ndeberán demostrar que tienen una vigilancia activa de la condición financiera del deudor, y que \nsus Sistemas de Control Interno permiten cancelar la línea ante muestras de deterioro de la \ncalidad crediticia del prestatario. Las Instituciones que empleen el método básico, deberán \nutilizar el más bajo de los factores de conversión de crédito aplicables para compromisos \nobtenidos en otras exposiciones fuera de balance. \n \n(50) II. Exposición al Incumplimiento bajo el método avanzado para la estimación de factores de \nconversión de crédito. \n \n (219) Las Instituciones que cumplan con los requerimientos mínimos aplicables para el uso de \nestimaciones propias de Exposición al Incumplimiento conforme a lo establecido en el \nsubnumeral (viii) de la Sección IV del Anexo 15 de estas disposiciones, podrán utilizar sus \npropias estimaciones de factores de conversión de crédito para los diferentes tipos de \nposiciones, siempre que estas posiciones no se refieran a operaciones cuyo valor esté \ndeterminado por el saldo neto entre flujos activos y pasivos, en cuyo caso, deberá aplicarse \neste último saldo. \n \n(50) Aquellas operaciones para las que no se establece un tratamiento específico en el presente \ndisposiciones. \n \n",
        "descripcion": " Las Instituciones, tanto en el método basado en calificaciones internas \n(50) Artículo 2 Bis 79.- Las Instituciones, tanto en el método basado en calificaciones internas \nbásico como en el avanzado, deberán considerar a la Exposición al Incumplimiento de una partida \ndentro del balance como la posición esperada bruta de reservas, de la operación de crédito en caso \nde producirse el incumplimiento del deudor. Dicha Exposición al Incumplimiento, no podrá ser \ninferior a la cantidad dispuesta de la operación al momento del cálculo del requerimiento de capital. \nEn todo caso, las reservas deberán determinarse a su vez, de conformidad con lo establecido en \nlos Capítulos I, II y V del Título Segundo de estas disposiciones. \n \n(50) Tratándose de posiciones fuera de balance, la Exposición al Incumplimiento será determinada \npor el monto total de la línea de crédito autorizada no dispuesta, multiplicada por un factor de \nconversión de crédito, de conformidad con lo siguiente:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 80",
        "id": 879,
        "contenido": " Las Instituciones que adopten una Metodología Interna con enfoque \n(130) Artículo 2 Bis 80.- Las Instituciones que adopten una Metodología Interna con enfoque \nbásico, deberán utilizar un Plazo Efectivo o de Vencimiento de 2.5 años para sus operaciones \npresentes disposiciones, con excepción de las operaciones de reporto y préstamo de valores, para \nlas cuales deberán emplear un Plazo Efectivo o de Vencimiento de 6 meses. \n \n    \n \n \n \n \n(130) En todo caso, las Instituciones que adopten la Metodología Interna con enfoque avanzado, \npara la determinación de sus Operaciones Sujetas a Riesgo de Crédito con las personas a las que \nEfectivo o de Vencimiento para cada posición conforme a lo previsto por el presente artículo, de \nacuerdo con lo siguiente: \n \n(50) I. Para un instrumento sujeto a una determinada estructura de flujos de efectivo, el Plazo \nEfectivo o de Vencimiento se define como: \n \nPlazo Efectivo o de Vencimiento   \n \n(50) Donde CFt representa los flujos de efectivo (principal, pago de intereses y comisiones) que \ndeberán ser pagados contractualmente en el periodo t, expresado en años. \n \nII. Tratándose de Instituciones que se encuentren imposibilitadas para calcular el Plazo Efectivo \no de Vencimiento de acuerdo al método descrito en el punto anterior, podrán utilizar una \nmedida de Plazo Efectivo o de Vencimiento más conservadora, basada en el tiempo restante \nmáximo (en años) que puede emplear el prestatario para cancelar por completo su obligación \ncontractual (principal, intereses y comisiones) bajo los términos del contrato del préstamo. \nEste periodo corresponderá al plazo de vencimiento nominal del instrumento. \n \n(50) En ningún caso el Plazo Efectivo o de Vencimiento podrá ser menor a un año o mayor a \ncinco años. \n \n",
        "descripcion": " Las Instituciones que adopten una Metodología Interna con enfoque \n(130) Artículo 2 Bis 80.- Las Instituciones que adopten una Metodología Interna con enfoque \nbásico, deberán utilizar un Plazo Efectivo o de Vencimiento de 2.5 años para sus operaciones \npresentes disposiciones, con excepción de las operaciones de reporto y préstamo de valores, para \nlas cuales deberán emplear un Plazo Efectivo o de Vencimiento de 6 meses. \n \n    \n \n \n \n \n(130) En todo caso, las Instituciones que adopten la Metodología Interna con enfoque avanzado, \npara la determinación de sus Operaciones Sujetas a Riesgo de Crédito con las personas a las que \nEfectivo o de Vencimiento para cada posición conforme a lo previsto por el presente artículo, de \nacuerdo con lo siguiente:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 81",
        "id": 882,
        "contenido": " Sin perjuicio de lo establecido en el Artículo 2 Bis 80 anterior, tratándose \n(50) Artículo 2 Bis 81.- Sin perjuicio de lo establecido en el Artículo 2 Bis 80 anterior, tratándose \nde las posiciones a que se refieren las fracciones I a VI del presente artículo, cuyo plazo de \nvencimiento original haya sido inferior a 1 año, el Plazo Efectivo o de Vencimiento será el periodo \nmás largo que resulte de comparar un día, con el Plazo Efectivo o de Vencimiento calculado de \nconformidad con los procedimientos descritos anteriormente. \n \n(50) Para efectos de lo dispuesto en el párrafo anterior, se considerarán las posiciones siguientes: \n \n(50) I. Operaciones de reporto, así como préstamos y depósitos a corto plazo. \n \n(50) II. Préstamos de valores. \n \n(50) III. Operaciones comerciales revolventes a corto plazo. \n \n(50) IV. Las cartas de crédito de importación y exportación y las operaciones similares. \n \n(50) V. Las posiciones procedentes de la liquidación de la compra-venta de valores. \n \n\n \n\nt\nt\nt\nt\nCF\nCFt\nV\n    \n \n \n \n \n \n(50) VI. Posiciones resultantes de la liquidación de efectivo mediante transferencias electrónicas. \n \n(50) VII. Posiciones interbancarias procedentes de la liquidación de operaciones en divisas. \n \n(50) El tratamiento de las diferencias en los plazos de vencimiento bajo el método basado en \ncalificaciones internas básico y avanzado, será el mismo que en el Método Estándar señalado en \n \n \n(50) Subapartado B \n(50) Operaciones Sujetas a Riesgo de Crédito con las personas a que se refiere la fracción \n \n",
        "descripcion": " Sin perjuicio de lo establecido en el Artículo 2 Bis 80 anterior, tratándose \n(50) Artículo 2 Bis 81.- Sin perjuicio de lo establecido en el Artículo 2 Bis 80 anterior, tratándose \nde las posiciones a que se refieren las fracciones I a VI del presente artículo, cuyo plazo de \nvencimiento original haya sido inferior a 1 año, el Plazo Efectivo o de Vencimiento será el periodo \nmás largo que resulte de comparar un día, con el Plazo Efectivo o de Vencimiento calculado de \nconformidad con los procedimientos descritos anteriormente. \n \n(50) Para efectos de lo dispuesto en el párrafo anterior, se considerarán las posiciones siguientes:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 82",
        "id": 890,
        "contenido": " Las Instituciones, para determinar el requerimiento de capital así como los \n(50) Artículo 2 Bis 82.- Las Instituciones, para determinar el requerimiento de capital así como los \nactivos ponderados por riesgo de crédito con las personas a las que se refiere este subapartado, \ndeberán realizar sus propias estimaciones de la Probabilidad de Incumplimiento, Severidad de la \nPérdida en caso de Incumplimiento y Exposición al Incumplimiento para cada subclase de la cartera \n \n",
        "descripcion": " Las Instituciones, para determinar el requerimiento de capital así como los \n(50) Artículo 2 Bis 82.- Las Instituciones, para determinar el requerimiento de capital así como los \nactivos ponderados por riesgo de crédito con las personas a las que se refiere este subapartado, \ndeberán realizar sus propias estimaciones de la Probabilidad de Incumplimiento, Severidad de la \nPérdida en caso de Incumplimiento y Exposición al Incumplimiento para cada subclase de la cartera \n \n",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 83",
        "id": 891,
        "contenido": " Para las Operaciones Sujetas a Riesgo de Crédito a las que se refiere la \n(161) Artículo 2 Bis 83.- Para las Operaciones Sujetas a Riesgo de Crédito a las que se refiere la \nactividad empresarial y las personas morales, que se encuentren sin incumplimiento, los activos \nponderados por riesgo de crédito se determinarán conforme a lo siguiente: \n \n \nBis 90 de las presentes disposiciones. \n \n(161) El ponderador del requerimiento de capital por riesgo de crédito se define como: \n \n \n \n    \n \n \n \n \n \npresentes disposiciones. \n \nN(x) denota la función de distribución acumulada de una variable aleatoria normal estándar y G(z) \ndenota la función de distribución inversa acumulada para una variable aleatoria normal estándar. \n \n(220) Sin perjuicio de lo señalado en el primer párrafo del presente artículo, las Instituciones podrán \ndeterminar los activos ponderados por riesgo de crédito conforme a lo previsto en este artículo \npara las Operaciones Sujetas a Riesgo de Crédito con o a cargo de personas morales o físicas con \nactividad empresarial, siempre que: \n \n(220) I. El importe agregado de las operaciones frente a una misma contraparte no excedan el \nequivalente en moneda nacional a 4 millones de UDIs y el acreditado o contraparte \ndemuestren Ingresos Netos o Ventas Netas anuales menores al equivalente en moneda \nnacional a 14 millones de UDIs. \n  \n(220) Para determinar el importe agregado señalado en el párrafo anterior se deberá utilizar el \nvalor de la UDI a la fecha para la cual se realiza el cálculo del cómputo de capital, considerando \npara ello su equivalencia en moneda nacional publicada por el Banco de México en el Diario \nOficial de la Federación. \n  \n(220) Por su parte, para determinar si los Ingresos Netos o Ventas Netas anuales del acreditado \nson menores al umbral señalado, las Instituciones deberán utilizar el valor de la UDI a la fecha \nque corresponda al estado financiero anual del acreditado al que se refiere la fracción LXXXII \n \n(220) II. Las operaciones sean administradas de forma similar al del resto de las operaciones \noriginación y hasta su cobranza como un conjunto de posiciones que comparten \ncaracterísticas similares de riesgo, tanto en los sistemas como en la evaluación y \ncuantificación del riesgo mismo. \n \n(220) En ningún momento se podrán incluir en el tratamiento al que se refiere el párrafo anterior, las \nOperaciones Sujetas a Riesgo de Crédito con o a cargo de personas morales o físicas con actividad \nempresarial que se gestionen de manera individual. \n \n",
        "descripcion": " Para las Operaciones Sujetas a Riesgo de Crédito a las que se refiere la \n(161) Artículo 2 Bis 83.- Para las Operaciones Sujetas a Riesgo de Crédito a las que se refiere la \nactividad empresarial y las personas morales, que se encuentren sin incumplimiento, los activos \nponderados por riesgo de crédito se determinarán conforme a lo siguiente:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 84",
        "id": 894,
        "contenido": " Las Instituciones deberán asignar un valor de cero al ponderador del \nArtículo 2 Bis 84.- Las Instituciones deberán asignar un valor de cero al ponderador del \nrequerimiento de capital por riesgo de crédito para las Operaciones Sujetas a Riesgo de Crédito a \npersonas físicas con actividad empresarial y a las personas morales, que se encuentran en estado \nde incumplimiento, toda vez que la Severidad de la Pérdida en caso de Incumplimiento deberá \nreservarse en su totalidad. \nPS\n    \n \n \n \n \n \n",
        "descripcion": " Las Instituciones deberán asignar un valor de cero al ponderador del \nArtículo 2 Bis 84.- Las Instituciones deberán asignar un valor de cero al ponderador del \nrequerimiento de capital por riesgo de crédito para las Operaciones Sujetas a Riesgo de Crédito a \npersonas físicas con actividad empresarial y a las personas morales, que se encuentran en estado \nde incumplimiento, toda vez que la Severidad de la Pérdida en caso de Incumplimiento deberá \nreservarse en su totalidad. \nPS\n    \n \n \n \n \n \n",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 85",
        "id": 895,
        "contenido": " Tratándose de las Operaciones Sujetas a Riesgo de Crédito a las que se \n(161) Artículo 2 Bis 85.- Tratándose de las Operaciones Sujetas a Riesgo de Crédito a las que se \nincumplimiento y que estén total o parcialmente garantizadas mediante garantía hipotecaria \nsobre viviendas residenciales, los activos ponderados por riesgo de crédito se determinarán de \nconformidad con el procedimiento siguiente: \n \n𝐴𝑃𝑅𝐶 = 1.06 × 𝑃𝑅𝐶𝑅𝐶 × 12.5 × 𝐸𝐼 \n \n(161) El ponderador del requerimiento de capital por riesgo de crédito se define como: \n \n \n \nEn donde: \n \nCorrelación: R  = 0.15 \n \n \n \npresentes disposiciones.  \n \nDonde, N(x) denota la función de distribución acumulada de una variable aleatoria normal \nestándar y G (z) denota la función de distribución inversa acumulada para una variable aleatoria \nnormal estándar. \n \n",
        "descripcion": " Tratándose de las Operaciones Sujetas a Riesgo de Crédito a las que se \n(161) Artículo 2 Bis 85.- Tratándose de las Operaciones Sujetas a Riesgo de Crédito a las que se \nincumplimiento y que estén total o parcialmente garantizadas mediante garantía hipotecaria \nsobre viviendas residenciales, los activos ponderados por riesgo de crédito se determinarán de \nconformidad con el procedimiento siguiente:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 86",
        "id": 896,
        "contenido": " Las Instituciones deberán asignar un valor de cero al ponderador del \n(50) Artículo 2 Bis 86.- Las Instituciones deberán asignar un valor de cero al ponderador del \nrequerimiento de capital por riesgo de crédito para las Operaciones Sujetas a Riesgo de Crédito a \nencuentran en estado de incumplimiento, toda vez que la Severidad de la Pérdida en caso de \nIncumplimiento deberá reservarse en su totalidad. \n \n",
        "descripcion": " Las Instituciones deberán asignar un valor de cero al ponderador del \n(50) Artículo 2 Bis 86.- Las Instituciones deberán asignar un valor de cero al ponderador del \nrequerimiento de capital por riesgo de crédito para las Operaciones Sujetas a Riesgo de Crédito a \nencuentran en estado de incumplimiento, toda vez que la Severidad de la Pérdida en caso de \nIncumplimiento deberá reservarse en su totalidad. \n \n",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 87",
        "id": 897,
        "contenido": " Las Instituciones, para determinar el requerimiento de capital para las \n(219) Artículo 2 Bis 87.- Las Instituciones, para determinar el requerimiento de capital para las \nOperaciones Sujetas a Riesgo de Crédito con las personas físicas con actividad empresarial y las \ndisposiciones, correspondientes a aquellos créditos iguales o inferiores a 4 millones de UDIs, \ndisposiciones cuando se trate de posiciones sin incumplimiento, y podrán ajustar el cálculo de la \ncorrelación conforme a lo siguiente: \n     \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n___\n5.0\n5.0\n999.0\n1\n1 SPPIG\nR\nR\nPIGRNSPPRCRC\n    \n \n \n \n \n \nCorrela \nción:   \n \n(219) Donde MTO es el monto correspondiente a los Ingresos Netos o Ventas Netas anuales del \nacreditado en moneda nacional al momento del cómputo de capitalización del crédito y 14MUDIS \nes el monto equivalente en moneda nacional a 14 millones de UDIs. \n \n(220) Tratándose de Operaciones Sujetas a Riesgo de Crédito con o a cargo de personas morales o \nfísicas con actividad empresarial a las que se refiere el último párrafo del artículo 2 Bis 83, podrán \ndeterminar sus activos ponderados por riesgo de crédito utilizando la metodología establecida en \n \n(219) En todo caso las Operaciones Sujetas a Riesgo de Crédito a que se refiere este artículo y que \nse encuentren en estado de incumplimiento, las Instituciones deberán ajustarse a lo establecido \n \n",
        "descripcion": " Las Instituciones, para determinar el requerimiento de capital para las \n(219) Artículo 2 Bis 87.- Las Instituciones, para determinar el requerimiento de capital para las \nOperaciones Sujetas a Riesgo de Crédito con las personas físicas con actividad empresarial y las \ndisposiciones, correspondientes a aquellos créditos iguales o inferiores a 4 millones de UDIs, \ndisposiciones cuando se trate de posiciones sin incumplimiento, y podrán ajustar el cálculo de la \ncorrelación conforme a lo siguiente:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 88",
        "id": 898,
        "contenido": " Las Instituciones, para efectos de lo dispuesto en la presente sección, \n(50) Artículo 2 Bis 88.- Las Instituciones, para efectos de lo dispuesto en la presente sección, \ndeberán sujetarse a los criterios siguientes: \n \n(50) I. Para calcular la Probabilidad de Incumplimiento: \n \n(50) a) Las estimaciones de la Probabilidad de Incumplimiento deberán consistir en un promedio \nde las tasas de incumplimiento anuales de las posiciones incluidas en cada segmento de \ncartera a largo plazo de las tasas, obtenida con observaciones que correspondan como \nmínimo a cinco años. La Comisión podrá autorizar el uso de periodos de información \nmenores si la Institución puede demostrar, entre otros aspectos, que la estimación de los \ndatos más recientes proporciona una estimación razonable y conservadora. \n \n(50) b) La Probabilidad de Incumplimiento para las posiciones al menudeo es de horizonte anual \ny tendrá un piso de 0.03 por ciento. \n \n(50) c) En el caso de posiciones que se encuentren en incumplimiento, se aplicará una \nProbabilidad de Incumplimiento de 100 por ciento. \n  \n(50) d) Las Instituciones deberán incluir en sus estimaciones un margen suficiente a fin de poder \nhacer frente a los errores probables en la estimación de la Probabilidad de Incumplimiento. \nCuando los métodos y los datos sean menos satisfactorios este margen deberá ser mayor. \nDicho margen deberá ser determinado por la propia Institución. \n \n(219) e) Las Instituciones, al calcular las Probabilidades de Incumplimiento asociadas a cada \nsegmento de cartera, deberán cumplir con los requisitos específicos para la Estimación de \nla Probabilidad de Incumplimiento en operaciones sujetas a riesgo de crédito a las que se \n    \n \n \n \n \nefecto en el inciso (vi.2) del subnumeral (vi) de la Sección IV del Anexo 15 de estas \ndisposiciones. \n \n(50) II. Para calcular la Severidad de la Pérdida en caso de Incumplimiento: \n \n(50) a) Las Instituciones considerarán como pérdida utilizada para estimar la Severidad de la \nPérdida en caso de Incumplimiento, a la pérdida económica. Para tales efectos, las \nInstituciones deberán tomar en consideración todos los factores relevantes, incluyendo \nefectos de descuento importantes y costos directos e indirectos sustanciales \nrelacionados con el cobro de la posición para calcular dicha pérdida. Las Instituciones \ndeberán comparar las pérdidas contables con las económicas y deberán considerar su \nexperiencia en cuanto a la reestructuración y cobro de deudas, a fin de que lo anterior \nrepercuta en sus tasas de recuperación y se refleje en sus estimaciones de la Severidad de \nla Pérdida en caso de Incumplimiento.  \n \n(219) b) Los flujos usados para la estimación de la pérdida económica deben ser calculados a \nvalor presente usando una tasa de descuento adecuada al riesgo de la exposición, de \nconformidad con el inciso a) del subnumeral (vii) de la Sección IV del Anexo 15 de estas \ndisposiciones. \n \n(219) c) Los sistemas que utilicen las Instituciones para determinar y validar la Severidad de la \nPérdida en caso de Incumplimiento, deberán contar con procesos metodológicos \ndebidamente documentados que permitan evaluar los efectos que tienen las coyunturas \neconómicas desfavorables en las tasas de recuperación, así como para la determinación \nde las estimaciones de la Severidad de la Pérdida en caso de Incumplimiento consistentes \ncon las condiciones económicas. Este proceso deberá incluir al menos lo que se establece \nen el inciso b) del subnumeral (vii) de la Sección IV del Anexo 15 de estas disposiciones. \n \n (219) Para la estimación de la Severidad de la Pérdida en caso de Incumplimiento, las \nInstituciones deberán cumplir con los requisitos mencionados en este artículo y en el \nsubnumeral (vii) de la Sección IV del Anexo 15 de estas disposiciones. \n \n",
        "descripcion": " Las Instituciones, para efectos de lo dispuesto en la presente sección, \n(50) Artículo 2 Bis 88.- Las Instituciones, para efectos de lo dispuesto en la presente sección, \ndeberán sujetarse a los criterios siguientes:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 89",
        "id": 915,
        "contenido": " Las Instituciones podrán reconocer en el cálculo del requerimiento de \n(219) Artículo 2 Bis 89.- Las Instituciones podrán reconocer en el cálculo del requerimiento de \ncapital, el efecto de cobertura del riesgo que otorguen las garantías reales, personales y derivados \nde crédito, mediante un ajuste a la Probabilidad de Incumplimiento, o bien, en la estimación de la \nSeveridad de la Pérdida en caso de Incumplimiento. Estos ajustes podrán llevarse a cabo una vez \nque se cumpla con los requisitos establecidos en el subnumeral (ix) de la Sección IV del Anexo 15 \nde estas disposiciones. \n \n(50) Las Instituciones no deberán incluir en los ajustes que realicen el efecto del Doble \nIncumplimiento. De esta manera, la ponderación por riesgo ajustada no podrá ser inferior a la de \n    \n \n \n \n \nuna posición directa similar frente al garante. Asimismo, las Instituciones podrán optar por no \nreconocer la protección crediticia si al hacerlo generaran un requerimiento de capital más elevado. \n \n",
        "descripcion": " Las Instituciones podrán reconocer en el cálculo del requerimiento de \n(219) Artículo 2 Bis 89.- Las Instituciones podrán reconocer en el cálculo del requerimiento de \ncapital, el efecto de cobertura del riesgo que otorguen las garantías reales, personales y derivados \nde crédito, mediante un ajuste a la Probabilidad de Incumplimiento, o bien, en la estimación de la \nSeveridad de la Pérdida en caso de Incumplimiento. Estos ajustes podrán llevarse a cabo una vez \nque se cumpla con los requisitos establecidos en el subnumeral (ix) de la Sección IV del Anexo 15 \nde estas disposiciones. \n \n(50) Las Instituciones no deberán incluir en los ajustes que realicen el efecto del Doble \nIncumplimiento. De esta manera, la ponderación por riesgo ajustada no podrá ser inferior a la de \n    \n \n \n \n \nuna posición directa similar frente al garante. Asimismo, las Instituciones podrán optar por no \nreconocer la protección crediticia si al hacerlo generaran un requerimiento de capital más elevado. \n \n",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 90",
        "id": 916,
        "contenido": " La Exposición al Incumplimiento para las Operaciones Sujetas a Riesgo de \n(130) Artículo 2 Bis 90.- La Exposición al Incumplimiento para las Operaciones Sujetas a Riesgo de \nde balance, se determinará como mínimo por el saldo bruto de reservas constituidas de \nconformidad con lo establecido en los Capítulos I, II y V del Título Segundo de estas disposiciones. \n \n(50) En el caso de créditos revolventes al consumo cuyos saldos no dispuestos puedan ser utilizados \nen el futuro, las Instituciones deberán tomar en consideración el historial o las expectativas de \ndisposición por parte del deudor, previo al incumplimiento, para poder efectuar ajustes en las \nestimaciones de pérdida. En particular, cuando en las estimaciones de la Exposición al \nIncumplimiento no se reflejen los factores de conversión relativos a la parte no dispuesta, se \ndeberá reconocer en la estimación de la Severidad de la Pérdida en caso de Incumplimiento la \nposibilidad de que se efectúen usos adicionales de la línea de crédito antes del incumplimiento. \nAsimismo, si la Institución no incorpora la factibilidad de usos adicionales de la línea de crédito en \nla estimación de la Severidad de la Pérdida en caso de Incumplimiento, entonces deberá hacerlo en \nlas estimaciones de Exposición al Incumplimiento. \n \n \n(50) Subapartado C \n(50) Reconocimiento de reservas en el capital \n \n",
        "descripcion": " La Exposición al Incumplimiento para las Operaciones Sujetas a Riesgo de \n(130) Artículo 2 Bis 90.- La Exposición al Incumplimiento para las Operaciones Sujetas a Riesgo de \nde balance, se determinará como mínimo por el saldo bruto de reservas constituidas de \nconformidad con lo establecido en los Capítulos I, II y V del Título Segundo de estas disposiciones. \n \n(50) En el caso de créditos revolventes al consumo cuyos saldos no dispuestos puedan ser utilizados \nen el futuro, las Instituciones deberán tomar en consideración el historial o las expectativas de \ndisposición por parte del deudor, previo al incumplimiento, para poder efectuar ajustes en las \nestimaciones de pérdida. En particular, cuando en las estimaciones de la Exposición al \nIncumplimiento no se reflejen los factores de conversión relativos a la parte no dispuesta, se \ndeberá reconocer en la estimación de la Severidad de la Pérdida en caso de Incumplimiento la \nposibilidad de que se efectúen usos adicionales de la línea de crédito antes del incumplimiento. \nAsimismo, si la Institución no incorpora la factibilidad de usos adicionales de la línea de crédito en \nla estimación de la Severidad de la Pérdida en caso de Incumplimiento, entonces deberá hacerlo en \nlas estimaciones de Exposición al Incumplimiento. \n \n \n(50) Subapartado C \n(50) Reconocimiento de reservas en el capital \n \n",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 91",
        "id": 917,
        "contenido": " Derogado. \n(132) Artículo 2 Bis 91.- Derogado. \n \n",
        "descripcion": " Derogado. \n(132) Artículo 2 Bis 91.- Derogado. \n \n",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 92",
        "id": 918,
        "contenido": " El monto de Pérdidas Esperadas Totales para una Institución, se \n(50) Artículo 2 Bis 92.- El monto de Pérdidas Esperadas Totales para una Institución, se \ndeterminará como la suma de las Pérdidas Esperadas para cada una de las posiciones individuales \nsujetas a riesgo de crédito, calculadas como la multiplicación de los tres elementos siguientes: i) \nProbabilidad de Incumplimiento; ii) Severidad de la Pérdida en caso de Incumplimiento, y iii) \nExposición al Incumplimiento. \n \nPara tales efectos, las Instituciones deberán apegarse a los lineamientos siguientes: \n \n(130) I. Tratándose de Instituciones que utilicen el Método Estándar para calcular sus requerimientos \nde capital y la metodología general para obtener su calificación de cartera, deberán hacer uso \nde la Probabilidad de Incumplimiento, la Severidad de la Pérdida y la Exposición al \n91 Bis 1, 91 Bis 2, 91 Bis 3, 92, 99 Bis 1, 99 Bis 2, 99 Bis 3, 112, 113, 114 y 115 de las \npresentes disposiciones. \n \n(130) II. Tratándose de Instituciones autorizadas para utilizar una Metodología Interna con enfoque \nbásico, deberán utilizar sus propias estimaciones de Probabilidad de Incumplimiento, así como \n    \n \n \n \n \nlos parámetros supervisores para la Severidad de la Pérdida y la Exposición al Incumplimiento \n \n(130) III. En el caso de métodos avanzados, la Probabilidad de Incumplimiento, la Severidad de la \nPérdida en caso de Incumplimiento y la Exposición al Incumplimiento deberán ser \nBis 73, fracción II, 2 Bis 79, 2 Bis 88 y 2 Bis 90 de las presentes disposiciones. \n \n(131) IV. Tratándose de posiciones en situación de incumplimiento, la Probabilidad de \nIncumplimiento se establecerá en 100 por ciento, y la Severidad de la Pérdida en caso de \nIncumplimiento deberá ser determinada de conformidad con lo establecido en las fracciones I \ny II anteriores según corresponda. \n \n",
        "descripcion": " El monto de Pérdidas Esperadas Totales para una Institución, se \n(50) Artículo 2 Bis 92.- El monto de Pérdidas Esperadas Totales para una Institución, se \ndeterminará como la suma de las Pérdidas Esperadas para cada una de las posiciones individuales \nsujetas a riesgo de crédito, calculadas como la multiplicación de los tres elementos siguientes:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 93",
        "id": 923,
        "contenido": " Derogado.  \n(132) Artículo 2 Bis 93.- Derogado.  \n \n",
        "descripcion": " Derogado.  \n(132) Artículo 2 Bis 93.- Derogado.  \n \n",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 94",
        "id": 924,
        "contenido": " Derogado.  \n(132) Artículo 2 Bis 94.- Derogado.  \n \n",
        "descripcion": " Derogado.  \n(132) Artículo 2 Bis 94.- Derogado.  \n \n",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 95",
        "id": 925,
        "contenido": " Las Instituciones deberán comparar las Pérdidas Esperadas Totales con \n(130) Artículo 2 Bis 95.- Las Instituciones deberán comparar las Pérdidas Esperadas Totales con \nlas Reservas Admisibles Totales, de acuerdo con lo siguiente: \n \n(130) I. Cuando las Pérdidas Esperadas Totales sean superiores a las Reservas Admisibles Totales, \ndicha diferencia deberá ser deducida de conformidad con lo establecido en el inciso k) de la \n \n(130) II. Si las Reservas Admisibles Totales resultan superiores a las Pérdidas Esperadas Totales, \nde las presentes disposiciones. \n \n \n (50) Subapartado D \n(50) Disposiciones finales \n \n",
        "descripcion": " Las Instituciones deberán comparar las Pérdidas Esperadas Totales con \n(130) Artículo 2 Bis 95.- Las Instituciones deberán comparar las Pérdidas Esperadas Totales con \nlas Reservas Admisibles Totales, de acuerdo con lo siguiente:",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 96",
        "id": 928,
        "contenido": " Derogado. \n(132) Artículo 2 Bis 96.- Derogado. \n \n",
        "descripcion": " Derogado. \n(132) Artículo 2 Bis 96.- Derogado. \n \n",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 97",
        "id": 929,
        "contenido": " En caso de que una Institución deje de cumplir con los requisitos mínimos \n(130) Artículo 2 Bis 97.- En caso de que una Institución deje de cumplir con los requisitos mínimos \nestablecidos en el presente capítulo así como en el Anexo 15 de las presentes disposiciones, una \nvez que haya sido autorizada para usar una Metodología Internas con un enfoque básico o \navanzado, deberá elaborar un plan para subsanar dicho incumplimiento, el cual deberá ser \nautorizado por la Comisión, o bien, deberá demostrar, a satisfacción de la propia Comisión, que el \nefecto de tal incumplimiento no resulta significativo para el riesgo asumido por la Institución. \n \n(50) El plan para subsanar incumplimientos al que se refiere el párrafo anterior, deberá presentarse \na la Comisión durante los 90 días naturales posteriores a que se verifiquen dichos incumplimientos. \n    \n \n \n \n \nAsimismo, dicho plan deberá ser aprobado por el Consejo de la Institución de que se trate y deberá \ncontener al menos una descripción detallada de las acciones que se llevarán a cabo por parte de la \nInstitución para subsanar el o los posibles incumplimientos, así como el plazo en que dichas \nacciones se llevarán a cabo. \n \n(50) En caso de que no se corrija el incumplimiento, la Comisión podrá determinar que la Institución \neleve su requerimiento de capital o que calcule sus requerimientos de capital por riesgo de crédito \nconforme al Método Estándar, en la o las carteras que registren incumplimiento de los requisitos \nmínimos. \n \n",
        "descripcion": " En caso de que una Institución deje de cumplir con los requisitos mínimos \n(130) Artículo 2 Bis 97.- En caso de que una Institución deje de cumplir con los requisitos mínimos \nestablecidos en el presente capítulo así como en el Anexo 15 de las presentes disposiciones, una \nvez que haya sido autorizada para usar una Metodología Internas con un enfoque básico o \navanzado, deberá elaborar un plan para subsanar dicho incumplimiento, el cual deberá ser \nautorizado por la Comisión, o bien, deberá demostrar, a satisfacción de la propia Comisión, que el \nefecto de tal incumplimiento no resulta significativo para el riesgo asumido por la Institución. \n \n(50) El plan para subsanar incumplimientos al que se refiere el párrafo anterior, deberá presentarse \na la Comisión durante los 90 días naturales posteriores a que se verifiquen dichos incumplimientos. \n    \n \n \n \n \nAsimismo, dicho plan deberá ser aprobado por el Consejo de la Institución de que se trate y deberá \ncontener al menos una descripción detallada de las acciones que se llevarán a cabo por parte de la \nInstitución para subsanar el o los posibles incumplimientos, así como el plazo en que dichas \nacciones se llevarán a cabo. \n \n(50) En caso de que no se corrija el incumplimiento, la Comisión podrá determinar que la Institución \neleve su requerimiento de capital o que calcule sus requerimientos de capital por riesgo de crédito \nconforme al Método Estándar, en la o las carteras que registren incumplimiento de los requisitos \nmínimos. \n \n",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 98",
        "id": 930,
        "contenido": " La Institución deberá notificar y solicitar autorización a la Comisión para \n(130) Artículo 2 Bis 98.- La Institución deberá notificar y solicitar autorización a la Comisión para \nel uso de cualquier cambio realizado a la Metodología Interna tal que produzca una variación \nporcentual negativa de 20% en el monto de la estimación de la Pérdida Esperada en cualquier \nsegmento o grado de riesgo del sistema de calificación, o en 10% del monto total de la Pérdida \nEsperada de la cartera a la que le aplica dicho modelo. Para efectos de lo anterior, dicha variación \ndeberá calcularse considerando únicamente el cambio o cambios acumulados en el modelo, \nefectuados durante un periodo de seis meses, dejando el resto de las condiciones constantes, es \ndecir, se utilizarán los mismos clientes, el mismo periodo y la misma cartera de créditos. De igual \nforma la Institución deberá notificar a la Comisión cualquier cambio en la metodología o en los \nfactores de riesgo involucrados en el Sistema de Calificación. \n \n \n (162) Sección Cuarta \n(162) Requerimientos de capital adicionales para operaciones  \ncon instrumentos derivados \n \n(162) Apartado A \n(162) Requerimientos de capital por ajuste de valuación crediticia \n \n",
        "descripcion": " La Institución deberá notificar y solicitar autorización a la Comisión para \n(130) Artículo 2 Bis 98.- La Institución deberá notificar y solicitar autorización a la Comisión para \nel uso de cualquier cambio realizado a la Metodología Interna tal que produzca una variación \nporcentual negativa de 20% en el monto de la estimación de la Pérdida Esperada en cualquier \nsegmento o grado de riesgo del sistema de calificación, o en 10% del monto total de la Pérdida \nEsperada de la cartera a la que le aplica dicho modelo. Para efectos de lo anterior, dicha variación \ndeberá calcularse considerando únicamente el cambio o cambios acumulados en el modelo, \nefectuados durante un periodo de seis meses, dejando el resto de las condiciones constantes, es \ndecir, se utilizarán los mismos clientes, el mismo periodo y la misma cartera de créditos. De igual \nforma la Institución deberá notificar a la Comisión cualquier cambio en la metodología o en los \nfactores de riesgo involucrados en el Sistema de Calificación. \n \n \n (162) Sección Cuarta \n(162) Requerimientos de capital adicionales para operaciones  \ncon instrumentos derivados \n \n(162) Apartado A \n(162) Requerimientos de capital por ajuste de valuación crediticia \n \n",
        "type": ["Articulo"]
    }, {
        "label": "Artículo 2 Bis 98 a",
        "id": 931,
        "contenido": " Las Instituciones deberán calcular requerimientos de capital adicionales \n(162) Artículo 2 Bis 98 a.- Las Instituciones deberán calcular requerimientos de capital adicionales \npor ajuste de valuación crediticia para las Operaciones con derivados, conforme a lo siguiente: \n \n(162) I. Las Operaciones con derivados consideradas en el Grupo I-B conforme al Artículo 2 Bis 12.a. \nde las presentes disposiciones quedarán exentas del presente requerimiento. \n \n(162) II. Para obtener el requerimiento de capital, las instituciones se sujetarán a la fórmula siguiente: \n \n𝐾 = 2.33 ×\n√\n  \n  \n  \n  \n  \n \n(∑0.5 × 𝑊𝑖 × (𝑀𝑖 × 𝐸𝐼𝐷𝑖\n𝑡𝑜𝑡𝑎𝑙 − 𝑀𝑖\n𝐶𝑜𝑏 × 𝑁𝐷𝑖) − ∑ 𝑊𝑖𝑛𝑑𝑖𝑐𝑒 × 𝑀𝑖𝑛𝑑𝑖𝑐𝑒 × 𝑁𝐷𝑖𝑛𝑑𝑖𝑐𝑒\n𝑖𝑛𝑑𝑖𝑐𝑒𝑖\n)\n2\n+\n∑0.75 × 𝑊𝑖\n2 × (𝑀𝑖 × 𝐸𝐼𝐷𝑖\n𝑡𝑜𝑡𝑎𝑙 − 𝑀𝑖\n𝐶𝑜𝑏 × 𝑁𝐷𝑖)\n2\n𝑖\n \n \n    \n \n \n \n \nEn donde: \n \nK es el requerimiento de capital que corresponde al ajuste por valuación crediticia establecido en \nel presente artículo. \n \n98 b de las presentes disposiciones. \n \n𝑊𝑖𝑛𝑑𝑖𝑐𝑒 corresponde al ponderador de riesgo de crédito asociado a coberturas mediante derivados \nde incumplimiento crediticio suscritos sobre índices o canastas de entidades de referencia, el cual \nse obtendrá como el promedio ponderado de los ponderadores de cada entidad incluida en el \nefectos de calcular el promedio ponderado, las Instituciones utilizarán la representatividad de cada \nentidad incluida en el conjunto o índice de referencia. \n \n𝑀𝑖, es el Plazo Efectivo de las Operaciones con la contraparte i; \n𝑀𝑖\n𝐶𝑜𝑏 es el Plazo Efectivo de las coberturas individuales con la contraparte i; y \n \n𝑀𝑖𝑛𝑑𝑖𝑐𝑒 es el Plazo Efectivo de Coberturas mediante derivados de incumplimiento crediticio \nsuscritos sobre índices o canastas de entidades de referencia calculados de conformidad con el \n \nEIDi\ntotal corresponde a la exposición al incumplimiento descontada para la contraparte i conforme \n \n𝑁𝐷𝑖 corresponde al monto nocional descontado de las coberturas individuales para la contraparte \ni conforme a la expresión siguiente:  \n \n𝑁𝐷𝑖 = (\n1−𝑒−0.05×𝑀𝑖\n𝐶𝑜𝑏\n0.05×𝑀𝑖\n𝐶𝑜𝑏 ) × 𝑁𝑖, \nEn donde: \n \n𝑀𝑖\n𝐶𝑜𝑏 es el Plazo Efectivo de coberturas individuales con la contraparte i descrito anteriormente y \n𝑁𝑖 el monto nocional de las coberturas individuales con la contraparte i. \n \n𝑁𝐷𝑖𝑛𝑑𝑖𝑐𝑒 corresponde al monto nocional descontado de las coberturas obtenidas mediante \nderivados de incumplimiento crediticio suscritos sobre índices o canastas de entidades de \nreferencia, conforme a la expresión siguiente: \n \n𝑁𝐷𝑖𝑛𝑑𝑖𝑐𝑒 = (\n1−𝑒−0.05×𝑀𝑖𝑛𝑑𝑖𝑐𝑒\n0.05×𝑀𝑖𝑛𝑑𝑖𝑐𝑒\n) × 𝑁𝑖𝑛𝑑𝑖𝑐𝑒, \n \nEn donde: \n \n    \n \n \n \n \n𝑀𝑖𝑛𝑑𝑖𝑐𝑒 representa el Plazo Efectivo de coberturas mediante derivados de incumplimiento crediticio \nsuscritos sobre índices o canastas de entidades de referencia descrito anteriormente, y \n \n𝑁𝑖𝑛𝑑𝑖𝑐𝑒 el monto nocional de las coberturas mediante derivados de incumplimiento crediticio \nsuscritos sobre índices o canastas de entidades de referencia. \n \n",
        "descripcion": " Las Instituciones deberán calcular requerimientos de capital adicionales \n(162) Artículo 2 Bis 98 a.- Las Instituciones deberán calcular requerimientos de capital adicionales \npor ajuste de valuación crediticia para las Operaciones con derivados, conforme a lo siguiente:",
        "type": ["Articulo"]
    }, {
        "label": "V",
        "id": 121,
        "contenido": "Administración Integral de Riesgos: al proceso aplicado sistemáticamente por las \nInstituciones para identificar, analizar, medir, vigilar, limitar, controlar, revelar y dar \ntratamiento a los distintos riesgos a los que se encuentran expuestas tanto ellas como sus \nSubsidiarias Financieras. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "VI",
        "id": 122,
        "contenido": "Administrador de Comisionistas: a los comisionistas bancarios que operan al amparo de lo \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "VII",
        "id": 123,
        "contenido": "Alto Grado de Inversión: a la Calificación otorgada por alguna Institución Calificadora que \nse ubique dentro del Grado de Riesgo 1 en escala global tratándose de largo plazo, y Grados \nde Riesgo 1 y 2 en escala global tratándose de corto plazo, conforme a lo establecido en las \ntablas correspondientes para corto y largo plazo del Anexo 1-B. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "VIII",
        "id": 124,
        "contenido": "Amortización Anticipada en Esquemas de Bursatilización: a todo aquel mecanismo, que \nuna vez implementado, permite a los inversionistas obtener reembolsos previos al \nvencimiento inicialmente fijado de los valores emitidos. Para tales efectos, las amortizaciones \nanticipadas pueden estar controladas o no controladas, así como comprometidas y no \ncomprometidas, según los criterios que se establecen más adelante en el Apartado F de la \nSección Segunda, del Capítulo III, del Título Primero Bis de las presentes disposiciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "IX",
        "id": 125,
        "contenido": "Apoderados: a las personas físicas autorizadas por la Comisión para celebrar a nombre de \nla Institución y con el público, operaciones con valores inscritos en el Registro y listados en \n    \n \n \n \n \nBolsa, así como de asesoría y promoción de dichos valores, de conformidad con lo establecido \npor la Ley y la Ley del Mercado de Valores. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "X",
        "id": 126,
        "contenido": "Apoyo Implícito: a los mecanismos que se instrumenten por una Institución con el fin de \nrespaldar una operación de bursatilización adicionales a la obligación contractual original. \nDentro de los Apoyos Implícitos quedarán incluidas las compras de posiciones de \nbursatilización que lleve a cabo una Institución originadora o cedente de los activos \nsubyacentes, distintas a las compras que cumplan con lo establecido en la fracción I del Anexo \n1-K de las presentes disposiciones. \n \n(242)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XI",
        "id": 127,
        "contenido": "Auditor Externo Independiente: al contador público o licenciado en contaduría pública que \ngeneral aplicables a las entidades y emisoras supervisadas por la Comisión Nacional Bancaria \nsus respectivas modificaciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "L",
        "id": 128,
        "contenido": "Descuento: operación por virtud de la cual la Institución descontante se obliga a anticipar al \ndescontatario el importe de un crédito dinerario, contra tercero y de vencimiento futuro, a \ncambio de la enajenación a favor de la Institución descontante del citado crédito y de la \ndetracción de un interés. \n \n(244)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LI",
        "id": 129,
        "contenido": "Derogada. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LII",
        "id": 130,
        "contenido": "Dirección General: al director general de las instituciones de banca múltiple y de banca de \ndesarrollo, así como las unidades administrativas que lo auxilien en el desempeño de sus \nfunciones, cada uno conforme a sus atribuciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LIII",
        "id": 131,
        "contenido": "Dispositivo de Acceso: al equipo que permite a un Usuario acceder al servicio de Banca \nElectrónica. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LIV",
        "id": 132,
        "contenido": "Doble Incumplimiento: al evento de incumplimiento tanto del obligado original como del \ngarante admisible de una operación sujeta a riesgo de crédito. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LV",
        "id": 133,
        "contenido": "Empresas de Servicios: a las Empresas de Servicios Exclusivas o Empresas de Servicios \nGenéricas. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LVI",
        "id": 134,
        "contenido": "Empresas de Servicios Exclusivas: a aquellas personas morales en cuyo capital participe y \nejerza el control una Institución y que tengan por objeto prestarle exclusivamente a dicha \nInstitución Servicios Complementarios o Auxiliares. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LVII",
        "id": 135,
        "contenido": "Empresas de Servicios Genéricas: a aquellas personas morales en cuyo capital participen \nuna o varias Instituciones y, en su caso, otras personas, que tengan por objeto prestar a \nInstituciones Servicios Complementarios o Auxiliares, sin perjuicio de que podrán prestar \nservicios a otras personas, siempre que cuando menos el cinco por ciento de sus ingresos \n    \n \n \n \n \nbrutos durante el año calendario de que se trate, provengan de la prestación de dichos \nservicios a las Instituciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LVIII",
        "id": 136,
        "contenido": "Enganche: al importe positivo que resulte de la diferencia entre el valor de la vivienda y el \nimporte del crédito o, en su caso, los créditos a la vivienda en la fecha de otorgamiento del \ncrédito. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XII",
        "id": 137,
        "contenido": "Auditoría Interna: a la función que realizarán las Instituciones a través de un área \nindependiente de la Dirección General, para revisar periódica y sistemáticamente, acorde con \nel programa anual de trabajo, el funcionamiento del Sistema de Control Interno, en apego a lo \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XIII",
        "id": 138,
        "contenido": "Autenticación: al conjunto de técnicas y procedimientos utilizados para verificar la \nidentidad de: \n \n(188) a) Un Usuario y su facultad para realizar operaciones a través del servicio de Banca \nElectrónica. \n \n(188) b) Una Institución y su facultad para recibir instrucciones a través del servicio de Banca \nElectrónica. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 139,
        "contenido": "Un Usuario y su facultad para realizar operaciones a través del servicio de Banca \nElectrónica. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 157,
        "contenido": "Comercial: a los créditos directos o contingentes, incluyendo créditos puente \ndenominados en moneda nacional, extranjera, en UDIs, o en VSM, así como los intereses \nque generen, otorgados a personas morales o personas físicas con actividad empresarial \ny destinados a su giro comercial o financiero; incluyendo los otorgados a entidades \nfinancieras distintos de los de préstamos interbancarios menores a 3 días hábiles; las \noperaciones de factoraje, Descuento y Operaciones de Cesión de Derechos de Crédito; \noperaciones de arrendamiento financiero que sean celebradas con dichas personas \nmorales o físicas; los créditos otorgados a fiduciarios que actúen al amparo de \n    \n \n \n \n \nAsimismo, quedarán comprendidos los créditos concedidos a entidades federativas, \nmunicipios y sus organismos descentralizados, cuando sean objeto de calificación de \nconformidad con las disposiciones aplicables. \n \n(214) Las Instituciones, al clasificar un determinado crédito como de Consumo, Hipotecario de \nVivienda o Comercial, aplicarán supletoriamente el criterio D-\ngene  \n \n(214) La Cartera Crediticia estará sujeta a Calificación sin incluir aquellos créditos a cargo del \nGobierno Federal o con garantía expresa de la Federación, registrados ante la Unidad de Crédito \nPúblico de la Secretaría de Hacienda y Crédito Público, del IPAB o del Banco de México. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XXX",
        "id": 158,
        "contenido": "Central de Alarmas: a la instalación remota que la Institución deberá tener, a la cual \nconfluyen todas las señales de vigilancia y alarma, así como de transmisión de imágenes que \nse generan en cada una de las Sucursales Tipo B, Tipo C y Tipo",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "D",
        "id": 159,
        "contenido": "(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XXXI",
        "id": 160,
        "contenido": "Cifrado: al mecanismo que deberán utilizar las Instituciones para proteger la \nconfidencialidad de información mediante métodos criptográficos en los que se utilicen \nalgoritmos y llaves de encripción. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XXXII",
        "id": 161,
        "contenido": "Coeficiente Beta o Coeficiente : es el resultado de una regresión lineal que tiene como \nvariable dependiente la variación de las tasas de interés pasivas y como variable independiente \na la tasa de interés de mercado (Cetes 28), utilizando datos mensuales para un periodo \nmínimo de 48 meses. Para determinar el valor máximo de , se calcula un intervalo de \nconfianza para  al 95 por ciento. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XXXIII",
        "id": 162,
        "contenido": "Coeficiente de Capital Básico: al resultado de dividir el capital básico conforme al \nTotales, expresado en porcentaje redondeado a la centésima de punto porcentual más \ncercana. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XXXIV",
        "id": 163,
        "contenido": "Coeficiente de Capital Fundamental: al resultado de dividir el Capital Fundamental \nPonderados Sujetos a Riesgo Totales, expresado en porcentaje redondeado a la centésima de \npunto porcentual más cercana. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XXXV",
        "id": 164,
        "contenido": "Comisión: a la Comisión Nacional Bancaria y de Valores. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XXXVI",
        "id": 165,
        "contenido": "Comité de Auditoría: al comité constituido por el Consejo, que tendrá las funciones \n    \n \n \n \n \nmencionado órgano de gobierno en la definición y actualización de los objetivos del Sistema \nde Control Interno y los lineamientos para su implementación, así como en su evaluación. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XXXVII",
        "id": 166,
        "contenido": "Comité de Remuneración: al comité constituido por el consejo de administración de \nmencionado órgano de gobierno en sus funciones relativas al Sistema de Remuneración, y \ncuyo objeto será la implementación, mantenimiento y evaluación del Sistema de \ndisposiciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XXXVIII",
        "id": 169,
        "contenido": "Consejo: al consejo de administración en el caso de instituciones de banca múltiple y \nal consejo directivo tratándose de instituciones de banca de desarrollo. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XXXIX",
        "id": 189,
        "contenido": "Contingencia Operativa: a cualquier evento fortuito que dificulte o inhabilite a una \nInstitución a prestar sus servicios o realizar sus procesos, cuya actualización derive en daño o \npérdida para sus clientes, para el público en general, para sus contrapartes o para la Institución \nmisma. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XL",
        "id": 190,
        "contenido": "Contraloría Interna: a las funciones que de manera cotidiana y permanente deberán realizar \nlas Instituciones a través de la Dirección General, de un área específica o bien, mediante \npersonal distribuido en varias áreas, pudiendo llegar incluso, a ser independientes de la propia \nDirección General, a fin de propiciar, mediante el establecimiento de medidas y controles, el \napego, en la celebración de sus operaciones y prestación de servicios, al Sistema de Control \npresentes disposiciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XLI",
        "id": 203,
        "contenido": "Contraseña: a la cadena de caracteres que autentica a un Usuario en un medio electrónico \no en un servicio de Banca Electrónica. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XLII",
        "id": 204,
        "contenido": "Control: a lo previsto por la fracción II del artículo 22 Bis de la Ley. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XLIII",
        "id": 205,
        "contenido": "Convenio Judicial: al acuerdo por escrito, que tiene el carácter de cosa juzgada, que \ncelebran las partes en un proceso judicial para finalizar la controversia. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XLIV",
        "id": 206,
        "contenido": "Crédito Grupal: al crédito perteneciente a la Cartera Crediticia de Consumo no \nRevolvente, con periodo de facturación semanal o quincenal, que se otorga a grupos de \npersonas en los que cada miembro es obligado solidario por el pago total del crédito, aunque \nla calificación de dicho crédito se realice de manera individual para cada integrante del grupo. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XLV",
        "id": 207,
        "contenido": "el Capítulo Primero del Título Tercero y que se contienen en el Anexo 33 de las presentes \ndisposiciones. \n \n    \n \n \n \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XLVI",
        "id": 208,
        "contenido": "Cuentas Bancarias: a las cuentas bancarias a la vista a que se refiere el artículo 14 de la \nCircular 3/2012, emitida por el Banco de México. \n  \n(188) \nestablecido por la citada Circular 3/2012. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XLVII",
        "id": 209,
        "contenido": "Cuentas Destino: a las cuentas receptoras de recursos dinerarios en Operaciones \nMonetarias. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XLVIII",
        "id": 210,
        "contenido": "Cuentas Destino Recurrentes: a las Cuentas Destino que cumplan con los requisitos \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XLIX",
        "id": 211,
        "contenido": "Desbloqueo de Factores de Autenticación: al proceso mediante el cual la Institución \nhabilita el uso de un Factor de Autenticación que se encontraba bloqueado. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLX",
        "id": 212,
        "contenido": "Secretaría: a la Secretaría de Hacienda y Crédito Público. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LIX",
        "id": 230,
        "contenido": "Escenario Supervisor: en singular o plural al conjunto o conjuntos de supuestos \nestablecidos por la Comisión, que las instituciones de banca múltiple deben utilizar para \nrealizar su Evaluación de la Suficiencia de Capital bajo Escenarios Supervisores. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LX",
        "id": 231,
        "contenido": "Esquema de Bursatilización: al proceso estructurado mediante el cual activos y derechos \npor flujos de efectivo futuros, se agrupan y se suscriben para crear títulos o valores \nnegociables (posiciones de bursatilización), mismos que pueden colocarse entre el público \ninversionista en un mercado de valores organizado, o bien, ser utilizados como referencia para \nla transferencia de riesgo. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXI",
        "id": 232,
        "contenido": "Esquema de Cobertura de Primeras Pérdidas: al esquema contractual, bajo la figura de \ngarantía o de seguro, a través del cual el beneficiario o acreditante mitiga la pérdida derivada \ndel incumplimiento por la falta de pago de su acreditado al recibir por parte del proveedor de \nla cobertura un porcentaje del saldo del crédito en cuestión, a fin de cubrir con un monto \nlimitado las primeras pérdidas derivadas del crédito, una vez que se actualicen los términos y \ncondiciones pactados para el reclamo de la garantía o del seguro. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXII",
        "id": 233,
        "contenido": "Esquema de Cobertura en Paso y Medida (Pari-Passu): al esquema contractual, bajo la \nfigura de garantía o de seguro, a través del cual el beneficiario o acreditante mitiga la pérdida \nderivada del incumplimiento por la falta de pago de su acreditado al recibir por parte del \nproveedor de la cobertura un porcentaje del saldo del crédito en cuestión, con el fin de cubrir \nen la proporción convenida, las pérdidas derivadas del crédito. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXIII",
        "id": 234,
        "contenido": "Evaluación de la Suficiencia de Capital: al proceso incorporado en la Administración \nIntegral de Riesgos de las instituciones de banca múltiple, mediante el cual estas evalúan si su \nCapital Neto sería suficiente para cubrir las posibles pérdidas que deriven de los riesgos a los \nque dichas instituciones podrían estar expuestas en distintos escenarios, incluyendo aquellos \nen los que imperen condiciones económicas adversas, que cumpla con los requisitos \nestablecidos en el Anexo 13 de las presentes disposiciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXIV",
        "id": 235,
        "contenido": "Evaluación de la Suficiencia de Capital bajo Escenarios Supervisores: al proceso \nincorporado en la Administración Integral de Riesgos de las instituciones de banca múltiple, \nmediante el cual estas evalúan si su Capital Neto sería suficiente para cubrir las posibles \npérdidas que, en su caso, deriven de los riesgos a los que dichas instituciones están expuestas \nen cada uno de los Escenarios Supervisores que cumpla con los requisitos establecidos en el \nAnexo 12-D de las presentes disposiciones. \n    \n \n \n \n \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXV",
        "id": 236,
        "contenido": "Exposición al Incumplimiento (EI): a la posición esperada, bruta de reservas, de la \noperación de crédito si se produce el incumplimiento del deudor. La Exposición al \nIncumplimiento no podrá ser inferior a la cantidad dispuesta de la operación al momento del \ncálculo del requerimiento de capital. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXVI",
        "id": 237,
        "contenido": "Factor de Autenticación: al mecanismo de Autenticación, tangible o intangible, basado \nen las características físicas del Usuario, en dispositivos o información que solo el Usuario \nposea o conozca. Estos mecanismos podrán incluir: \n \n(188) a) Información que el Usuario conozca y que la Institución valide a través de cuestionarios \npracticados por operadores de centros de atención telefónica. \n \n(188) b) Información que solamente el Usuario conozca, tales como Contraseñas y Números de \nIdentificación Personal (NIP). \n \n(188) c) Información contenida o generada en medios o dispositivos respecto de los cuales el \nUsuario tenga posesión, tales como dispositivos o mecanismos generadores de \nContraseñas dinámicas de un solo uso y Tarjetas Bancarias con Circuito Integrado, que \ntengan propiedades que impidan la duplicación de dichos medios, dispositivos o de la \ninformación que estos contengan o generen. \n \n(188) d) Información del Usuario derivada de sus características físicas, tales como huellas \ndactilares, geometría de la mano o patrones en iris o retina, siempre que dicha información \nno pueda ser duplicada y utilizada posteriormente. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 238,
        "contenido": "Información que el Usuario conozca y que la Institución valide a través de cuestionarios \npracticados por operadores de centros de atención telefónica. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 239,
        "contenido": "Información que solamente el Usuario conozca, tales como Contraseñas y Números de \nIdentificación Personal (NIP). \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 240,
        "contenido": "Información contenida o generada en medios o dispositivos respecto de los cuales el \nUsuario tenga posesión, tales como dispositivos o mecanismos generadores de \nContraseñas dinámicas de un solo uso y Tarjetas Bancarias con Circuito Integrado, que \ntengan propiedades que impidan la duplicación de dichos medios, dispositivos o de la \ninformación que estos contengan o generen. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "d",
        "id": 241,
        "contenido": "Información del Usuario derivada de sus características físicas, tales como huellas \ndactilares, geometría de la mano o patrones en iris o retina, siempre que dicha información \nno pueda ser duplicada y utilizada posteriormente. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXVII",
        "id": 242,
        "contenido": "Factor de Riesgo: a la variable económica u operativa cuyo movimiento por sí sola o en \ncombinación con otras variables, tiene el potencial de generar cambios sobre el rendimiento, \nvalor o estabilidad de los activos, pasivos o patrimonio de la Institución, así como sobre la \nsolvencia, liquidez, estrategia o incidir en el cumplimiento de sus objetivos de negocio. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXVIII",
        "id": 243,
        "contenido": "Fideicomiso de Contragarantía: a los fideicomisos constituidos por instituciones de \nbanca de desarrollo, cuyas actividades se limitan a garantizar, total o parcialmente a través \ndel Esquema de Primeras Pérdidas, las garantías otorgadas por dichas instituciones o sus \nfideicomisos a otras Instituciones o entidades financieras y que cumplen con las condiciones \nsiguientes: \n \n(188) a) La institución de banca de desarrollo que lo constituye debe fungir como fiduciaria y \ncomo uno de los fideicomitentes o bien, como fideicomitente único; \n \n(188) b) La institución de banca de desarrollo cuente con garantía expresa del Gobierno Federal; \n \n    \n \n \n \n \n(188) c) El fideicomiso se encuentre inscrito ante la Unidad de Política Presupuestal de la \nSecretaría de Hacienda y Crédito Público; \n \n(188) d) El patrimonio del fideicomiso sea constituido con efectivo; \n \n(188) e) Los fondos líquidos del fideicomiso son invertidos en instrumentos de deuda \ngarantizados o avalados por el Gobierno Federal o por Instituciones, o bien en reportos de \npapel gubernamental o bancario; en el caso de inversiones en directo o reporto de papel \nbancario, las contrapartes deberán contar con una calificación crediticia emitida por una \nInstitución Calificadora reconocida, igual o mejor al grado de riesgo 3 del Anexo 1-B de las \npresentes disposiciones, y \n \n(188) f) El importe efectivamente garantizado por el fideicomiso sea menor a su patrimonio. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 244,
        "contenido": "La institución de banca de desarrollo que lo constituye debe fungir como fiduciaria y \ncomo uno de los fideicomitentes o bien, como fideicomitente único; \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 245,
        "contenido": "La institución de banca de desarrollo cuente con garantía expresa del Gobierno Federal; \n \n    \n \n \n \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 246,
        "contenido": "El fideicomiso se encuentre inscrito ante la Unidad de Política Presupuestal de la \nSecretaría de Hacienda y Crédito Público; \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "d",
        "id": 247,
        "contenido": "El patrimonio del fideicomiso sea constituido con efectivo; \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "e",
        "id": 248,
        "contenido": "Los fondos líquidos del fideicomiso son invertidos en instrumentos de deuda \ngarantizados o avalados por el Gobierno Federal o por Instituciones, o bien en reportos de \npapel gubernamental o bancario; en el caso de inversiones en directo o reporto de papel \nbancario, las contrapartes deberán contar con una calificación crediticia emitida por una \nInstitución Calificadora reconocida, igual o mejor al grado de riesgo 3 del Anexo 1-B de las \npresentes disposiciones, y \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "f",
        "id": 249,
        "contenido": "El importe efectivamente garantizado por el fideicomiso sea menor a su patrimonio. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXIX",
        "id": 250,
        "contenido": "Fideicomiso de Garantía: al contrato mediante el cual el fideicomitente transmite bienes \no derechos que serán ejecutados, conforme al procedimiento extrajudicial previsto en el \npropio contrato, para cubrir las obligaciones garantizadas al fideicomisario. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXX",
        "id": 251,
        "contenido": "Filial: en singular o plural: a la sociedad mexicana autorizada para organizarse y operar, \nconforme a la Ley, como institución de banca múltiple y en cuyo capital participe una \ninstitución financiera del exterior o una sociedad controladora filial. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXI",
        "id": 252,
        "contenido": "Financiamiento: a todo acto o contrato que implique la realización de una operación \nactiva, directa o contingente, mediante el otorgamiento, reestructuración, renovación o \nmodificación de cualquier préstamo o crédito, quedando también incluidas las inversiones en \nacciones o valores, que no deban restarse del Capital Neto de la Institución de que se trate. \n  \n(188) Los créditos hipotecarios relacionados con viviendas, los de consumo a cargo de personas \nfísicas que se dispongan mediante el uso de tarjeta de crédito, los que se utilicen para la \nadquisición de bienes de consumo duradero y los personales que se destinen al consumo, que \notorguen las instituciones de banca múltiple, cuyo monto no exceda el equivalente en moneda \nnacional a 700,000 UDIs a la fecha de su concertación, así como las operaciones financieras \nderivadas concertadas por las Instituciones en mercados reconocidos por las autoridades \nfinancieras del país, cuyo cumplimiento corresponda a una contraparte central, quedarán \nexcluidos de lo señalado en el párrafo anterior. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXII",
        "id": 253,
        "contenido": "Firma Electrónica Avanzada o Fiable: a la firma electrónica avanzada o fiable a que se \nrefiere el Código de Comercio. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXIII",
        "id": 254,
        "contenido": "Grabación: a aquel acto mediante el cual un libro, registro o documento original, es \ntransformado a una imagen en formato digital en medio óptico o magnético, utilizando \nequipos y programas de cómputo diseñados para tal efecto. \n \n    \n \n \n \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXIV",
        "id": 255,
        "contenido": "Grado de Inversión: a la Calificación otorgada por alguna Institución Calificadora que se \nubique dentro de los Grados de Riesgo 2 y 3 en escala global tratándose de largo plazo, y \nGrado de Riesgo 3 en escala global tratándose de corto plazo, conforme a lo establecido en \nlas tablas correspondientes para corto y largo plazo del Anexo 1-B. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXV",
        "id": 256,
        "contenido": "Grado de Riesgo: a los grados de riesgo indicados en las tablas de correspondencia de \ncalificaciones y grados de riesgo, a largo plazo y a corto plazo, tanto para la escala global como \npara la escala México, comprendidos en el Anexo 1-B. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXVI",
        "id": 257,
        "contenido": "Identificador de Usuario: a la cadena de caracteres, información de un dispositivo o \ncualquier otra información que conozca tanto la Institución como el Usuario, que permita \nreconocer la identidad del propio Usuario para el uso del servicio de Banca Electrónica. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXVII",
        "id": 258,
        "contenido": "Independencia: a la condición que presenta una persona, entidad, órgano \nadministrativo o cuerpo colegiado de Instituciones (incluyendo sin limitar una Unidad de \nNegocio) respecto a otra en términos de no tener conflicto de interés alguno que afecte el \nadecuado desempeño de sus funciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXVIII",
        "id": 259,
        "contenido": "Independiente: a la persona, entidad, órgano administrativo o cuerpo colegiado de \nInstituciones que mantenga Independencia frente a otra u otras. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXIX",
        "id": 260,
        "contenido": "Índice de Capitalización: al resultado de dividir el Capital Neto entre los Activos \nPonderados Sujetos a Riesgo Totales, expresado en porcentaje redondeado a la centésima de \npunto porcentual más cercana. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXX",
        "id": 261,
        "contenido": "Influencia Significativa: a lo previsto por la fracción III del artículo 45-P de la Ley. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXXI",
        "id": 262,
        "contenido": "Información Sensible del Usuario: a la información personal del Usuario que contenga \nnombres, domicilios, teléfonos o direcciones de correo electrónico, en conjunto con números \nde tarjetas bancarias, números de cuenta, límites de crédito, saldos, Identificadores de \nUsuarios o información de Autenticación. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXXII",
        "id": 263,
        "contenido": "Ingresos Netos o Ventas Netas: Al importe de los ingresos que genera el acreditado \npor la venta de inventarios, la prestación de servicios o por cualquier otro concepto que se \nderive de las actividades que representan su principal fuente de ingresos, una vez disminuidos \npor los descuentos y bonificaciones comerciales otorgados a sus clientes, así como las \ndevoluciones efectuadas. \n  \n(188) Este rubro deberá corresponder al del último estado financiero anual del acreditado, cuyas \ncifras no deberán tener una antigüedad mayor a 18 meses al momento del cómputo de \ncapitalización o de la calificación de cartera. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXXIII",
        "id": 264,
        "contenido": "INPC: al Índice Nacional de Precios al Consumidor. \n    \n \n \n \n \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXXIV",
        "id": 265,
        "contenido": "Institución de Banca Múltiple de Importancia Sistémica Local: a aquella institución de \nbanca múltiple que la Comisión clasifique como tal conforme al Capítulo VI Bis 1 del Título \nPrimero Bis de las presentes disposiciones y sea aprobada por su Junta de Gobierno. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXXV",
        "id": 266,
        "contenido": "Institución Originadora de Esquemas de Bursatilización: aquella Institución que: \n \n(188) a) Origina directa o indirectamente el conjunto de activos subyacentes incluidos en el \nEsquema de Bursatilización, o \n \n(188) b) Actúa como patrocinador de un vehículo de papel bursatilizado o de un programa similar \npor el que se adquieran posiciones a terceros. En el contexto de tales programas, una \nInstitución se considerará en términos generales un patrocinador y, a su vez, un originador \nsi en la práctica o en lo esencial proporciona asesoría o gestiona un programa de \nbursatilización, coloca los valores respaldados por los activos subyacentes en el mercado \no proporciona líneas de crédito por liquidez o mejoras crediticias. \n \nInstituciones de Crédito. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 267,
        "contenido": "Origina directa o indirectamente el conjunto de activos subyacentes incluidos en el \nEsquema de Bursatilización, o \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 268,
        "contenido": "Actúa como patrocinador de un vehículo de papel bursatilizado o de un programa similar \npor el que se adquieran posiciones a terceros. En el contexto de tales programas, una \nInstitución se considerará en términos generales un patrocinador y, a su vez, un originador \nsi en la práctica o en lo esencial proporciona asesoría o gestiona un programa de \nbursatilización, coloca los valores respaldados por los activos subyacentes en el mercado \no proporciona líneas de crédito por liquidez o mejoras crediticias. \n \nInstituciones de Crédito. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXXVII",
        "id": 269,
        "contenido": "Instituciones Calificadoras: a las Instituciones Calificadoras de Valores incluidas en \nel Anexo 1-B de estas Disposiciones. También se considerará como Instituciones Calificadoras \na aquellas que, atendiendo a los criterios contenidos en las presentes Disposiciones dé a \nconocer la Comisión en la red electrónica mundial denominada Internet en el sitio \nhttp://www.cnbv.gob.mx. \n \n(238)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXXVIII",
        "id": 270,
        "contenido": "Instrumentos de Capital: a las obligaciones subordinadas emitidas en México, así \ncomo a los títulos emitidos en mercados extranjeros, que cumplan con lo establecido en los \nAnexos 1-R o 1-S de las presentes disposiciones, según corresponda. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "LXXXIX",
        "id": 271,
        "contenido": "Inversionista Calificado: a la persona que mantenga en promedio, durante el último \naño, inversiones en valores po\nque haya obtenido en cada uno de los dos últimos años, ingresos brutos anuales iguales o \nmayores a 500,000 unidades de inversión. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XC",
        "id": 272,
        "contenido": "Inversionista Institucional: a la persona que conforme a las leyes federales tenga dicho \ncarácter o sea entidad financiera, incluso cuando actúen como fiduciarias al amparo de \nfideicomisos que conforme a las leyes se consideren como inversionistas institucionales. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XCI",
        "id": 273,
        "contenido": "IPAB: Instituto para la Protección al Ahorro Bancario. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XCII",
        "id": 274,
        "contenido": "Ley: a la Ley de Instituciones de Crédito, tal como la misma sea modificada de tiempo en \ntiempo. \n    \n \n \n \n \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XCIII",
        "id": 275,
        "contenido": "Límite Específico de Exposición al Riesgo: a la magnitud permisible de exposición a un \nriesgo discrecional determinado, asignada desde a una línea de negocio, Factor de Riesgo, \ncausa u origen del mismo hasta a un empleado o funcionario en específico al interior de una \nInstitución. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XCIV",
        "id": 276,
        "contenido": "Límite Global de Exposición al Riesgo: a la magnitud permisible de exposición a los \ndistintos tipos de riesgo discrecionales por Unidad de Negocio o por Factor de Riesgo, causa u \norigen de los mismos, para una Institución en su totalidad. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XCV",
        "id": 277,
        "contenido": "Límites de Exposición al Riesgo: a los Límites Específicos de Exposición al Riesgo y los \nLímites Globales de Exposición al Riesgo, conjuntamente. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XCVI",
        "id": 278,
        "contenido": "Línea de Crédito por Liquidez en Esquemas de Bursatilización: al mecanismo que \nmediante la inyección de fondos, busca mejorar o facilitar la gestión de la liquidez del Vehículo \nde Propósito Especial en Esquemas de Bursatilización, en virtud de los desfases que se \npresentan entre las fechas de recaudación de los flujos de los activos subyacentes y las fechas \nde pago a los tenedores de los títulos bursatilizados. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XCVII",
        "id": 279,
        "contenido": "Marco para la Administración Integral de Riesgos: al conjunto de objetivos, políticas, \nlineamientos y procedimientos que norman la actividad de la Administración Integral de \nRiesgos en la Institución. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XCVIII",
        "id": 280,
        "contenido": "Medidas Básicas de Seguridad: a aquellas que las Instituciones deberán implementar en \nsus Oficinas Bancarias y que comprenden las medidas indispensables, mínimas y concretas en \ntérminos del Capítulo XIII del Título Quinto de las presentes disposiciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XCIX",
        "id": 281,
        "contenido": "Medidas Correctivas: se refieren conjuntamente a las Medidas Correctivas Especiales \nAdicionales y a las Medidas Correctivas Mínimas. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "C",
        "id": 282,
        "contenido": "Medidas Correctivas Especiales Adicionales: a las medidas correctivas que la Comisión está \nfacultada a ordenar a las instituciones de banca múltiple, en términos de la fracción III del \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CI",
        "id": 283,
        "contenido": "Medidas Correctivas Mínimas: a las medidas que deba aplicar la Comisión conforme a lo \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CII",
        "id": 284,
        "contenido": "Medios Electrónicos: a los equipos, medios ópticos o de cualquier otra tecnología, sistemas \nautomatizados de procesamiento de datos y redes de telecomunicaciones, ya sean públicos o \n \n    \n \n \n \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CIII",
        "id": 285,
        "contenido": "Mejora Crediticia: al acuerdo contractual mediante el cual una Institución conserva o \nasume una posición de bursatilización, proporcionando cierto grado de protección a otras \npartes involucradas en la operación. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CIV",
        "id": 286,
        "contenido": "Mensajes de Texto SMS: al mensaje de texto disponible para su envío en servicios de \ntelefonía móvil. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CV",
        "id": 287,
        "contenido": "Mercancías: Se entenderá por mercancías a los activos referidos como tales en la Circular \n4/2012 emitida por el Banco de México, con excepción del oro. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CVI",
        "id": 288,
        "contenido": "Método Avanzado para el Cálculo de los Requerimientos de Capital por Riesgo \n \ndisposiciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CVIII",
        "id": 289,
        "contenido": "Método Estándar: al que se refiere la Sección Segunda del Capítulo III del Título Primero \nBis de estas disposiciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CVIX",
        "id": 290,
        "contenido": "Método Estándar Alternativo para el Cálculo de los Requerimientos de Capital por Riesgo \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CX",
        "id": 291,
        "contenido": "Método Estándar para el Cálculo de los Requerimientos de Capital por Riesgo Operacional: \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXI",
        "id": 292,
        "contenido": "Metodología Interna: en plural o singular, a las metodologías aprobadas por la Comisión \npara el cómputo de los requerimientos de capital por riesgo de crédito y para la calificación de \ncartera crediticia y la determinación de sus respectivas reservas preventivas. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXII",
        "id": 293,
        "contenido": "México: significan los Estados Unidos Mexicanos. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXIII",
        "id": 294,
        "contenido": "Microfilmación: a aquel acto mediante el cual un libro, registro o documento original, es \nfilmado en una película. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXIV",
        "id": 295,
        "contenido": "Nivel de Tolerancia al Riesgo: a la magnitud permisible de exposición a un riesgo no \ndiscrecional, para una Institución en su totalidad. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXV",
        "id": 296,
        "contenido": "Número de Identificación Personal (NIP): a la Contraseña que autentica a un Usuario en \nel servicio de Banca Electrónica mediante una cadena de caracteres numéricos. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXVI",
        "id": 297,
        "contenido": "Oficinas Bancarias: en singular o plural, a los establecimientos donde las Instituciones \nrealizan de manera habitual sus actividades y que pueden adoptar alguna de las siguientes \nmodalidades: \n    \n \n \n \n \n \n(188) a) Oficina Administrativa sin Atención al Público, aquellas instalaciones sin manejo de \nefectivo y valores, en las cuales la Institución no ofrece atención al público, pero en las que \nse realizan actividades administrativas de apoyo a los procesos bancarios de Oficinas \nBancarias. \n \n(188) b) Oficina Administrativa con Atención al Público, aquellas instalaciones en las cuales la \nInstitución asesora a sus clientes, realiza promoción, recibe aclaraciones o quejas, lleva a \ncabo la apertura y cierre de cuentas, entrega chequeras y tarjetas de débito y crédito, \ncelebra contratos, se realizan operaciones bancarias a través de Medios Electrónicos y \naquellas otras que no impliquen el manejo de efectivo o valores. \n \n(188) c) Módulos Bancarios, aquellas instalaciones que se encuentran dentro de locales con \nseguridad propia, en las que se realizan operaciones en efectivo hasta por un monto diario \nequivalente en moneda nacional a 2,000 UDIs, por cada tipo de operación y cuenta; \nademás de realizar la promoción, apertura y cierre de cuentas, entrega de chequeras, \ntarjetas de débito y crédito, recepción de depósitos y pagos de créditos, pago de remesas \ny disposiciones de efectivo. \n \n(188) d) Sucursales, en singular o plural, aquellas instalaciones destinadas a la atención al Público \nUsuario, para la celebración de operaciones y prestación de servicios a los que se refiere \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 298,
        "contenido": "Oficina Administrativa sin Atención al Público, aquellas instalaciones sin manejo de \nefectivo y valores, en las cuales la Institución no ofrece atención al público, pero en las que \nse realizan actividades administrativas de apoyo a los procesos bancarios de Oficinas \nBancarias. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 299,
        "contenido": "Oficina Administrativa con Atención al Público, aquellas instalaciones en las cuales la \nInstitución asesora a sus clientes, realiza promoción, recibe aclaraciones o quejas, lleva a \ncabo la apertura y cierre de cuentas, entrega chequeras y tarjetas de débito y crédito, \ncelebra contratos, se realizan operaciones bancarias a través de Medios Electrónicos y \naquellas otras que no impliquen el manejo de efectivo o valores. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 300,
        "contenido": "Módulos Bancarios, aquellas instalaciones que se encuentran dentro de locales con \nseguridad propia, en las que se realizan operaciones en efectivo hasta por un monto diario \nequivalente en moneda nacional a 2,000 UDIs, por cada tipo de operación y cuenta; \nademás de realizar la promoción, apertura y cierre de cuentas, entrega de chequeras, \ntarjetas de débito y crédito, recepción de depósitos y pagos de créditos, pago de remesas \ny disposiciones de efectivo. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "d",
        "id": 301,
        "contenido": "Sucursales, en singular o plural, aquellas instalaciones destinadas a la atención al Público \nUsuario, para la celebración de operaciones y prestación de servicios a los que se refiere \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXVII",
        "id": 302,
        "contenido": "Opción de Recompra en Esquemas de Bursatilización: al mecanismo que permite a la \nInstitución Originadora de Esquemas de Bursatilización comprar las posiciones de \nbursatilización (por ejemplo, títulos de bursatilización de activos) previamente al vencimiento \nde los activos subyacentes o de las posiciones de bursatilización. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXVIII",
        "id": 303,
        "contenido": "Operación Monetaria: a la transacción que implique transferencia o retiro de recursos \ndinerarios. Las operaciones monetarias podrán ser: \n \n(188) a) Micro Pagos: operaciones de hasta el equivalente en moneda nacional a 70 UDIs. \n \n(188) b) De Baja Cuantía: operaciones de hasta el equivalente en moneda nacional a 250 UDIs \ndiarias. \n \n(188) c) De Mediana Cuantía: operaciones de hasta el equivalente en moneda nacional a 1,500 \nUDIs diarias. \n \n(188) d) Por montos superiores al equivalente en moneda nacional a 1,500 UDIs diarias. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 304,
        "contenido": "Micro Pagos: operaciones de hasta el equivalente en moneda nacional a 70 UDIs. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 305,
        "contenido": "De Baja Cuantía: operaciones de hasta el equivalente en moneda nacional a 250 UDIs \ndiarias. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 306,
        "contenido": "De Mediana Cuantía: operaciones de hasta el equivalente en moneda nacional a 1,500 \nUDIs diarias. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "d",
        "id": 307,
        "contenido": "Por montos superiores al equivalente en moneda nacional a 1,500 UDIs diarias. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXIX",
        "id": 308,
        "contenido": "Operaciones: a las operaciones activas, operaciones pasivas, Operaciones Causantes de \nPasivo Contingente, así como operaciones distintas a las señaladas en la presente fracción que \n    \n \n \n \n \nrealicen las Instituciones, siempre que tales operaciones estén contempladas en las \ndisposiciones en materia de requerimientos de capitalización, a las que hace referencia el \nTítulo Primero Bis de estas disposiciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXX",
        "id": 309,
        "contenido": "Operaciones Causantes de Pasivo Contingente: a las obligaciones cuya exigibilidad se \nencuentra sujeta a condición suspensiva o resolutoria, así como aquellas que no se han \nreconocido en el balance, en virtud de que no es viable que las Instituciones tengan que \nsatisfacerla o cuando el importe de la obligación no pueda ser cuantificado con la suficiente \nconfiabilidad. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXI",
        "id": 310,
        "contenido": "Operaciones de Cesión de Derechos de Crédito: aquellas operaciones de financiamiento \npor virtud de las cuales se transmite a alguna Institución la titularidad de derechos de crédito. \nNo se considerarán Operaciones de Cesión de Derechos de Crédito las adquisiciones de \ncartera de crédito. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXII",
        "id": 311,
        "contenido": "Operaciones Sujetas a Riesgo de Crédito: a los depósitos, valores, créditos, operaciones \nde reporto, de intercambio de flujos de dinero (swap), contratos adelantados, préstamo de \nvalores, opciones, operaciones estructuradas, paquetes de instrumentos derivados y \noperaciones contingentes, así como a las demás operaciones bancarias expuestas a riesgo de \ncrédito conforme al Anexo 1-A. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXIII",
        "id": 312,
        "contenido": "Orden: a las instrucciones que reciban las Instituciones de sus clientes, para realizar \noperaciones de compra o venta de valores inscritos en el Registro. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXIV",
        "id": 313,
        "contenido": "Organismo de Fomento para la Vivienda: al Instituto del Fondo Nacional de la Vivienda \npara los Trabajadores y al Fondo de la Vivienda del Instituto de Seguridad y Servicios Sociales \nde los Trabajadores del Estado. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXV",
        "id": 314,
        "contenido": "Pago Móvil: al servicio de Banca Electrónica en el cual el Dispositivo de Acceso consiste \nen un Teléfono Móvil del Usuario, cuyo número de línea se encuentre asociado al servicio. \nÚnicamente se podrán realizar consultas de saldo respecto de las cuentas asociadas al \nservicio, Operaciones Monetarias limitadas a pagos o transferencias de recursos dinerarios de \nhasta el equivalente en moneda nacional a las Operaciones Monetarias de Mediana Cuantía, \ncon cargo a las tarjetas o cuentas bancarias que tenga asociadas, así como actos para la \nadministración de este servicio, que no requieran un Segundo Factor de Autenticación. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXVI",
        "id": 315,
        "contenido": "Participante Central del Mercado: se considerarán para efectos de la determinación del \nrequerimiento de capital por riesgo de crédito, participantes centrales del mercado, a los \nsiguientes: \n \n(188) a) El Gobierno Federal, el Banco de México, el IPAB, y \n \n(188) b) Los organismos de compensación reconocidos. \n    \n \n \n \n \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 316,
        "contenido": "El Gobierno Federal, el Banco de México, el IPAB, y \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 317,
        "contenido": "Los organismos de compensación reconocidos. \n    \n \n \n \n \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXVII",
        "id": 318,
        "contenido": "Patio de la Sucursal: a la zona de servicios de la Sucursal sin restricciones de acceso al \nPúblico Usuario para la realización de sus operaciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXVIII",
        "id": 319,
        "contenido": "Pérdida Esperada: en singular o plural, a la media de la distribución de probabilidad del \nimporte de las pérdidas de un activo. Para fines de cálculo de las reservas para riesgos \ncrediticios la Pérdida Esperada se determina multiplicando la Probabilidad de Incumplimiento \npor el producto de la Severidad de la Pérdida en caso de Incumplimiento y la Exposición al \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXIX",
        "id": 320,
        "contenido": "Pérdidas Esperadas Totales: a la suma de los montos de las Pérdidas Esperadas para \ncada una de las posiciones individuales sujetas a riesgo de crédito, conforme a lo establecido \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXX",
        "id": 321,
        "contenido": "Perfil de Riesgo: a la descripción cuantitativa y cualitativa de los diferentes riesgos a los \nque está expuesta la Institución en un momento dado. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXXI",
        "id": 322,
        "contenido": "Perfil de Riesgo Deseado: al Perfil de Riesgo que la Institución está dispuesta a asumir \nde acuerdo a su modelo de negocio y estrategias, para alcanzar sus objetivos. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXXII",
        "id": 323,
        "contenido": "Periodo de Facturación: para efectos de la calificación de Cartera Crediticia \nHipotecaria de Vivienda y de Cartera Crediticia de Consumo no Revolvente, al lapso entre cada \nuna de las fechas programadas en el contrato de crédito para que el acreditado realice los \npagos de los montos exigibles. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXXIII",
        "id": 324,
        "contenido": "Periodo de Pago: al plazo comprendido entre dos fechas de corte, entendida esta \núltima, como la fecha en la cual la Institución factura al cliente. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXXIV",
        "id": 325,
        "contenido": "Personas Relacionadas Relevantes: aquellas personas físicas o morales con domicilio \nen territorio nacional o en el extranjero, que tengan directa o indirectamente, el veinte por \nciento o más del capital social de una institución de banca múltiple de manera individual o \ncolectiva. En todo caso, se entenderá como tenencia accionaria colectiva, aquella que \nmantengan directa o indirectamente, en su conjunto: \n \n(188) a) Los cónyuges o las personas físicas que tengan parentesco por consanguinidad o \nafinidad hasta el segundo grado o civil, y \n \n(188) b) Los fideicomisos cuando la contraparte o fuente de pago dependa de una de las \npersonas físicas o morales señaladas en el primer párrafo de esta fracción y el inciso \nanterior. \n \n(188) A efecto de considerar que los supuestos señalados en los incisos a) y b) anteriores, no \nson Personas Relacionadas Relevantes, las instituciones de banca múltiple deberán \n    \n \n \n \n \ndocumentar fehacientemente que en dichos supuestos no se actúa de forma concertada ni se \nmantienen acuerdos, de cualquier naturaleza, para tomar decisiones en un mismo sentido. \n  \n(188) Adicionalmente, se considerarán como Personas Relacionadas Relevantes a todas aquellas \npersonas morales que formen parte de un mismo grupo empresarial o consorcio controlado \npor las personas físicas o morales señaladas en el primer párrafo de esta fracción. No quedarán \nincluidas en dicho concepto, las entidades financieras que formen parte del grupo financiero \nal que, en su caso, pertenezca la institución de banca múltiple, o aquellas entidades financieras \nen las que la institución de banca múltiple tenga una participación accionaria, a menos de que \ndichas entidades a su vez otorguen cualquier tipo de financiamiento a las personas señaladas \nen el primer párrafo de la presente fracción. \n  \n(188) Para efectos de lo establecido en esta fracción, se \nde la Ley. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 326,
        "contenido": "Los cónyuges o las personas físicas que tengan parentesco por consanguinidad o \nafinidad hasta el segundo grado o civil, y \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 327,
        "contenido": "Los fideicomisos cuando la contraparte o fuente de pago dependa de una de las \npersonas físicas o morales señaladas en el primer párrafo de esta fracción y el inciso \nanterior. \n \n(188) A efecto de considerar que los supuestos señalados en los incisos",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 328,
        "contenido": "y",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 329,
        "contenido": "anteriores, no \nson Personas Relacionadas Relevantes, las instituciones de banca múltiple deberán \n    \n \n \n \n \ndocumentar fehacientemente que en dichos supuestos no se actúa de forma concertada ni se \nmantienen acuerdos, de cualquier naturaleza, para tomar decisiones en un mismo sentido. \n  \n(188) Adicionalmente, se considerarán como Personas Relacionadas Relevantes a todas aquellas \npersonas morales que formen parte de un mismo grupo empresarial o consorcio controlado \npor las personas físicas o morales señaladas en el primer párrafo de esta fracción. No quedarán \nincluidas en dicho concepto, las entidades financieras que formen parte del grupo financiero \nal que, en su caso, pertenezca la institución de banca múltiple, o aquellas entidades financieras \nen las que la institución de banca múltiple tenga una participación accionaria, a menos de que \ndichas entidades a su vez otorguen cualquier tipo de financiamiento a las personas señaladas \nen el primer párrafo de la presente fracción. \n  \n(188) Para efectos de lo establecido en esta fracción, se \nde la Ley. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXXV",
        "id": 330,
        "contenido": "Plan de Acción Preventivo: al conjunto de acciones propuesto por las instituciones \nde banca múltiple, que les permitiría mantenerse en la categoría I conforme al artículo 220 de \ndurante los trimestres que comprenda la Evaluación de Suficiencia de Capital bajo Escenarios \nSupervisores. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXXVI",
        "id": 331,
        "contenido": "Plan de Contingencia: al conjunto de acciones que deben llevar a cabo las instituciones \nde banca múltiple para restablecer su situación financiera, ante escenarios adversos que \npudieran afectar su solvencia o liquidez, en términos de lo previsto por el artículo 119 de la \nLey y las presentes disposiciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXXVII",
        "id": 332,
        "contenido": "Plan de Continuidad de Negocio: al conjunto de estrategias, procedimientos y \nla verificación de Contingencias Operativas, la continuidad en la prestación de los servicios o \nen la realización de los procesos críticos de las Instituciones, o bien su restablecimiento \noportuno, así como la mitigación de las afectaciones producto de dichas Contingencias. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXXVIII",
        "id": 333,
        "contenido": "Plan de Financiamiento de Contingencia: al conjunto de estrategias, políticas y \nprocedimientos que se llevarán a cabo en caso de presentarse requerimientos inesperados de \ndisposiciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXXXIX",
        "id": 334,
        "contenido": "Plazo Efectivo o de Vencimiento (V): al periodo de tiempo efectivo expresado en años, \nen el que el propietario de un instrumento de deuda sujeto a una determinada estructura de \nflujos de efectivo recuperaría su capital. Las Instituciones que adopten el método basado en \n    \n \n \n \n \ncalificaciones internas básico deberán utilizar los parámetros supervisores de Plazo de \n \n (188) En el caso del método avanzado, las Instituciones deberán emplear una estimación propia \ndel Plazo de Vencimiento para cada posición. Tratándose de Operaciones Sujetas a Riesgo de \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXL",
        "id": 335,
        "contenido": "Posiciones Preferentes: en plural o singular, a la cartera de crédito y los valores que a \nefectos de prelación en pago tienen prioridad sobre otros acreedores del deudor. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXLI",
        "id": 336,
        "contenido": "Posiciones Subordinadas: en plural o singular, a la cartera de crédito y los valores que a \nefectos de su prelación en pago, se sitúan detrás de otros acreedores del deudor. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXLII",
        "id": 337,
        "contenido": "Probabilidad de Incumplimiento (PI): a la Probabilidad expresada como porcentaje de \nque ocurra cualquiera o ambas de las siguientes circunstancias en relación a un deudor \nespecífico: \n \n(188) a) El deudor se encuentra en situación de mora durante 90 días naturales o más respecto \na cualquier obligación crediticia importante frente a la Institución. La Comisión podrá \nautorizar excepcionalmente el uso de un plazo diferente al de 90 días naturales o más \npara las Operaciones Sujetas a Riesgo de Crédito con las personas a que se refiere la \ndefinición de incumplimiento se ajuste mejor al método basado en calificaciones internas \nde que se trate. \n \n(188) b) Se considere probable que el deudor no abone la totalidad de sus obligaciones crediticias \nfrente a la Institución. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 338,
        "contenido": "El deudor se encuentra en situación de mora durante 90 días naturales o más respecto \na cualquier obligación crediticia importante frente a la Institución. La Comisión podrá \nautorizar excepcionalmente el uso de un plazo diferente al de 90 días naturales o más \npara las Operaciones Sujetas a Riesgo de Crédito con las personas a que se refiere la \ndefinición de incumplimiento se ajuste mejor al método basado en calificaciones internas \nde que se trate. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 339,
        "contenido": "Se considere probable que el deudor no abone la totalidad de sus obligaciones crediticias \nfrente a la Institución. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXLIII",
        "id": 340,
        "contenido": "Programas de Papel Comercial Bursatilizados: a la emisión de papel comercial con un \nvencimiento inicial de un año o inferior, que esté respaldado por activos u otro tipo de \nposiciones mantenidos en una entidad de propósito especial, ajenas a insolvencias. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXLIV",
        "id": 341,
        "contenido": "Público Usuario: a aquellas personas que contratan o llevan a cabo operaciones y \nservicios prestados por las Instituciones. \n \n(197)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXLV",
        "id": 342,
        "contenido": "Razón de Apalancamiento: al resultado de dividir el Capital Básico, de conformidad con \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXLVI",
        "id": 343,
        "contenido": "Registro: al Registro Nacional de Valores a que se refiere el Capítulo II de la Ley del \nMercado de Valores, o cualquier otro que lo sustituya. \n \n    \n \n \n \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXLVII",
        "id": 344,
        "contenido": "Reglas de Capitalización: a las disposiciones contenidas en el Título Primero Bis de las \npresentes disposiciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXLVIII",
        "id": 345,
        "contenido": "Remuneración Extraordinaria: al conjunto de sueldos, prestaciones o \ncontraprestaciones variables que las instituciones de banca múltiple otorguen a sus \nempleados o personal que ostente algún cargo, mandato o comisión o cualquier otro título \njurídico que las propias instituciones de banca múltiple hayan otorgado para la realización de \nsus operaciones, que paguen en efectivo o mediante otro tipo de compensación y que se \ndetermina con base en los resultados obtenidos, entre otros, por dichos empleados o personal, \nen la realización de las actividades que les son propias. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXLIX",
        "id": 346,
        "contenido": "Remuneración Ordinaria: al conjunto de sueldos, prestaciones o contraprestaciones \nfijas que las instituciones de banca múltiple otorguen a sus empleados o personal que ostente \nalgún cargo, mandato o comisión o cualquier otro título jurídico que las propias instituciones \nde banca múltiple hayan otorgado para la realización de sus operaciones, que paguen en \nefectivo o mediante otro tipo de compensación y que no varía en atención a los resultados \nobtenidos por dichos empleados o personal, en la realización de las actividades que les son \npropias. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CL",
        "id": 347,
        "contenido": "Rendimiento Excedente en Esquemas de Bursatilización: a la recaudación bruta de ingresos \nfinancieros y de otra índole percibidos por el Vehículo de Propósito Especial en Esquemas de \nBursatilización, menos los intereses de los títulos bursatilizados, los gastos de administración \ny demás costos en los que incurra el citado vehículo. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLI",
        "id": 348,
        "contenido": "Reporte de Información Crediticia: cualquiera de los reportes de crédito emitidos por \nsociedades de información crediticia a que se refiere el artículo 36 Bis de la Ley para Regular \nlas Sociedades de Información Crediticia, siguientes: \n \n(188) a) Aquel emitido por una sociedad de información crediticia en el que se incluya la \ninformación contenida en las bases de datos de las demás sociedades de información \ncrediticia, o \n \n(188) b) Los reportes de crédito individuales emitidos por la totalidad de las sociedades de \ninformación crediticia. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 349,
        "contenido": "Aquel emitido por una sociedad de información crediticia en el que se incluya la \ninformación contenida en las bases de datos de las demás sociedades de información \ncrediticia, o \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 350,
        "contenido": "Los reportes de crédito individuales emitidos por la totalidad de las sociedades de \ninformación crediticia. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLII",
        "id": 351,
        "contenido": "Reservas Admisibles Totales: a la suma de las reservas que se encuentren constituidas al \nmes correspondiente al cómputo de capitalización para las Operaciones Sujetas a Riesgo de \nCrédito, determinadas de conformidad con lo establecido en el Capítulo V del Título Segundo \nde las presentes disposiciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLIII",
        "id": 352,
        "contenido": "Restablecimiento de Contraseñas y Números de Identificación Personal (NIP): al \nprocedimiento mediante el cual el Usuario puede definir una nueva Contraseña o Número de \nIdentificación Personal. \n    \n \n \n \n \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLIV",
        "id": 353,
        "contenido": "Revolvente: característica contractual de la apertura de crédito, que da derecho al \nacreditado a realizar pagos, parciales o totales, de las disposiciones que previamente hubiere \nhecho, quedando facultado, mientras el contrato no concluya, para disponer en la forma \npactada del saldo que resulte a su favor. \n  \npresentes disposiciones, no se considerarán como Revolventes aquellos créditos en los que la \ndisposición del saldo a favor del acreditado esté condicionado al pago de cierto monto de los \nsaldos dispuestos y que genere cambios en las condiciones originales del crédito, como una \nnueva tabla de amortización con pagos fijos y un plazo distinto al original preestablecido. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLV",
        "id": 354,
        "contenido": "Riesgo Común: el que representen el deudor de la Institución de que se trate y las \npersonas siguientes: \n \n(188) a) Cuando el deudor sea persona física: \n \n(188) 1. Las personas físicas que dependan económicamente de este. \n \n(188) 2. Las personas morales que sean controladas, directa o indirectamente, por el propio \ndeudor, con independencia de que pertenezcan o no a un mismo Grupo Empresarial o \nConsorcio. \n  \n(188) Se entenderá por: \n \n(188) i. Grupo Empresarial, al conjunto de personas morales organizadas bajo esquemas \nde inversión directa o indirecta del capital social, controladas por una misma \nsociedad, incluyendo a esta última. \n \n(188) ii. Consorcio, al conjunto de Grupos Empresariales, vinculados entre sí, por una o \nmás personas físicas accionistas o titulares de partes sociales, que mantengan el \ncontrol de dichos grupos, con independencia de la forma o estructura que utilicen \npara integrar o controlar a dichos Grupos Empresariales. \n \n(188) b) Cuando el deudor sea persona moral: \n \n(188) 1. La persona o grupo de personas físicas y morales que actúen en forma concertada \ny ejerzan, directa o indirectamente, la administración a título de dueño, o el control \nde la persona moral acreditada. \n \n(188) 2. Las personas morales que sean controladas, directa o indirectamente por el propio \ndeudor, con independencia de que pertenezca o no a un mismo Grupo Empresarial y, \nen su caso, Consorcio. \n    \n \n \n \n \n \n(188) 3. Las personas morales que pertenezcan al mismo Grupo Empresarial o, en su caso, \nConsorcio. \n \n(188) Para efectos de lo dispuesto en los incisos a) numerales 2 (i) y 2 (ii), y b) numerales 2 \ny 3 anteriores, no quedarán comprendidas las Instituciones. \n \n(188) c) Cuando el deudor sea un fideicomiso, el fideicomitente, siempre que dicho \nfideicomitente se trate a su vez de una de las personas señaladas en los incisos a) y b) de \nla presente fracción y dichas personas, mantengan una participación mayoritaria en el \nfideicomiso deudor. \n \n(188) No obstante lo anterior, cuando el fideicomitente no mantenga una participación \nmayoritaria en el fideicomiso deudor, únicamente deberá considerase como un mismo \nRiesgo Común, la parte alícuota o proporcional del porcentaje de Financiamiento otorgado \nal fideicomiso, así como los Financiamientos que le sean otorgados en directo a cada \npersona que tenga el carácter de fideicomitente. \n \n (188) Para efectos de lo establecido en esta fracción, en las operaciones de factoraje, Descuento \ny Operaciones de Cesión de Derechos de Crédito, también se podrá considerar como deudor \nal factorado, descontatario o cedente de los derechos de crédito, únicamente cuando exista \nobligación solidaria de estos últimos; de lo contrario, se seguirá considerando como deudor al \nsujeto pasivo de los créditos adquiridos. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 355,
        "contenido": "Cuando el deudor sea persona física: \n \n(188) 1. Las personas físicas que dependan económicamente de este. \n \n(188) 2. Las personas morales que sean controladas, directa o indirectamente, por el propio \ndeudor, con independencia de que pertenezcan o no a un mismo Grupo Empresarial o \nConsorcio. \n  \n(188) Se entenderá por: \n \n(188) i. Grupo Empresarial, al conjunto de personas morales organizadas bajo esquemas \nde inversión directa o indirecta del capital social, controladas por una misma \nsociedad, incluyendo a esta última. \n \n(188) ii. Consorcio, al conjunto de Grupos Empresariales, vinculados entre sí, por una o \nmás personas físicas accionistas o titulares de partes sociales, que mantengan el \ncontrol de dichos grupos, con independencia de la forma o estructura que utilicen \npara integrar o controlar a dichos Grupos Empresariales. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 356,
        "contenido": "Cuando el deudor sea persona moral: \n \n(188) 1. La persona o grupo de personas físicas y morales que actúen en forma concertada \ny ejerzan, directa o indirectamente, la administración a título de dueño, o el control \nde la persona moral acreditada. \n \n(188) 2. Las personas morales que sean controladas, directa o indirectamente por el propio \ndeudor, con independencia de que pertenezca o no a un mismo Grupo Empresarial y, \nen su caso, Consorcio. \n    \n \n \n \n \n \n(188) 3. Las personas morales que pertenezcan al mismo Grupo Empresarial o, en su caso, \nConsorcio. \n \n(188) Para efectos de lo dispuesto en los incisos",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 357,
        "contenido": "numerales 2 (",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "i",
        "id": 358,
        "contenido": "y 2 (i",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "i",
        "id": 359,
        "contenido": ", y",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 360,
        "contenido": "numerales 2 \ny 3 anteriores, no quedarán comprendidas las Instituciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 361,
        "contenido": "Cuando el deudor sea un fideicomiso, el fideicomitente, siempre que dicho \nfideicomitente se trate a su vez de una de las personas señaladas en los incisos",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 362,
        "contenido": "y",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 363,
        "contenido": "de \nla presente fracción y dichas personas, mantengan una participación mayoritaria en el \nfideicomiso deudor. \n \n(188) No obstante lo anterior, cuando el fideicomitente no mantenga una participación \nmayoritaria en el fideicomiso deudor, únicamente deberá considerase como un mismo \nRiesgo Común, la parte alícuota o proporcional del porcentaje de Financiamiento otorgado \nal fideicomiso, así como los Financiamientos que le sean otorgados en directo a cada \npersona que tenga el carácter de fideicomitente. \n \n (188) Para efectos de lo establecido en esta fracción, en las operaciones de factoraje, Descuento \ny Operaciones de Cesión de Derechos de Crédito, también se podrá considerar como deudor \nal factorado, descontatario o cedente de los derechos de crédito, únicamente cuando exista \nobligación solidaria de estos últimos; de lo contrario, se seguirá considerando como deudor al \nsujeto pasivo de los créditos adquiridos. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLVI",
        "id": 364,
        "contenido": "Riesgo Consolidado: al riesgo de la Institución y sus Subsidiarias Financieras, tomadas en \nsu conjunto. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLVII",
        "id": 365,
        "contenido": "Riesgo de Base: a la pérdida potencial que se generaría por cambios en los precios de \nMercancías o instrumentos financieros utilizados en una estrategia de cobertura de tal forma \nque se reduzca la efectividad de dicha estrategia a través del tiempo. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLVIII",
        "id": 366,
        "contenido": "Riesgo Direccional: a la pérdida potencial que se generaría por el cambio del precio \nactual de una Mercancía en la fecha de su intercambio. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLIX",
        "id": 367,
        "contenido": "Riesgo Operacional: a la pérdida potencial por fallas o deficiencias en los controles \ninternos, por errores en el procesamiento y almacenamiento de las Operaciones o en la \ntransmisión de información, así como por resoluciones administrativas y judiciales adversas, \nfraudes o robos y comprende, entre otros, al riesgo tecnológico y al riesgo legal, en el \nentendido de que: \n \n(188) a) El riesgo tecnológico se define como la pérdida potencial por daños, interrupción, \nalteración o fallas derivadas del uso del hardware, software, sistemas, aplicaciones, redes \n    \n \n \n \n \ny cualquier otro canal de transmisión de información en la prestación de servicios \nbancarios a los clientes de la Institución. \n \n(188) b) El riesgo legal se define como la pérdida potencial por el incumplimiento de las \ndisposiciones legales y administrativas aplicables, la emisión de resoluciones \nadministrativas y judiciales desfavorables y la aplicación de sanciones, en relación con las \nOperaciones que la Institución lleva a cabo. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 368,
        "contenido": "El riesgo tecnológico se define como la pérdida potencial por daños, interrupción, \nalteración o fallas derivadas del uso del hardware, software, sistemas, aplicaciones, redes \n    \n \n \n \n \ny cualquier otro canal de transmisión de información en la prestación de servicios \nbancarios a los clientes de la Institución. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 369,
        "contenido": "Coordinar la celebración de convenios de servicios y seguimiento a procesos con los \ncuerpos de seguridad pública competentes y las autoridades de procuración de justicia. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 370,
        "contenido": "El riesgo legal se define como la pérdida potencial por el incumplimiento de las \ndisposiciones legales y administrativas aplicables, la emisión de resoluciones \nadministrativas y judiciales desfavorables y la aplicación de sanciones, en relación con las \nOperaciones que la Institución lleva a cabo. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXI",
        "id": 371,
        "contenido": "Seguro de Crédito: al seguro otorgado por instituciones de seguro especializadas, \nautorizadas por la Secretaría para cubrir el riesgo de no pago de un acreditado. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXII",
        "id": 372,
        "contenido": "Seguro de Crédito a la Vivienda: al seguro de crédito hipotecario otorgado por \ninstituciones de seguro especializadas, autorizadas por la Secretaría para cubrir el riesgo de \nno pago de un acreditado. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXIII",
        "id": 373,
        "contenido": "Seguro de Desempleo: al seguro que proporciona una institución de seguros autorizada \npara cubrir el monto exigible de un crédito de la Cartera Crediticia Hipotecaria de Vivienda, en \nel evento de que el acreditado pierda involuntariamente la relación laboral. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXIV",
        "id": 374,
        "contenido": "Servicios Complementarios o Auxiliares: a los que prestan las Empresas de Servicios a \nuna o más Instituciones, según sea el caso, relacionados con soporte o apoyo en su \nde la Ley. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXV",
        "id": 375,
        "contenido": "Sesión: al periodo en el cual los Usuarios podrán llevar a cabo consultas, Operaciones \nMonetarias o cualquier otro tipo de transacción bancaria, una vez que hayan ingresado al \nservicio de Banca Electrónica con su Identificador de Usuario. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXVI",
        "id": 376,
        "contenido": "Severidad de la Pérdida: al porcentaje del saldo insoluto del crédito expuesto a riesgo, \nuna vez tomado en cuenta el valor de las garantías. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXVII",
        "id": 377,
        "contenido": "Severidad de la Pérdida en caso de Incumplimiento (SP): a la intensidad de la pérdida \nen caso de incumplimiento expresada como porcentaje de la Exposición al Incumplimiento, \nuna vez tomados en cuenta el valor de las garantías y los costos asociados a los procesos de \nrealización (judiciales, administrativos de cobranza y de escrituración, entre otros). \n  \n(188) La Severidad de la Pérdida en caso de Incumplimiento para los métodos basados en \ncalificaciones internas básico y avanzado se sujetará a lo dispuesto respectivamente, en las \nfracciones I y II, del artículo 172 Bis 8 de las presentes disposiciones. \n \n    \n \n \n \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXVIII",
        "id": 378,
        "contenido": "Siniestralidad: al resultado de dividir el número de Siniestros entre el número de \nSucursales. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXIX",
        "id": 379,
        "contenido": "Siniestro: al daño o pérdida que sufren las Instituciones, en particular sus Oficinas \nBancarias, sus empleados, su patrimonio o el Público Usuario, por actos del hombre o hechos \nde la naturaleza. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXX",
        "id": 380,
        "contenido": "Sistema de Control Interno: al conjunto de objetivos y los lineamientos necesarios para \nsu implementación, que establezcan las Instituciones con el propósito de: \n \n(188) a) Procurar que los mecanismos de operación sean acordes con las estrategias y fines de \nlas Instituciones, que permitan prever, identificar, administrar, dar seguimiento y evaluar \nlos riesgos que puedan derivarse del desarrollo de su objeto social, con el propósito de \nminimizar las posibles pérdidas en que puedan incurrir. \n \n(188) b) Delimitar las diferentes funciones y responsabilidades entre sus órganos sociales, \nunidades administrativas y personal, a fin de procurar eficiencia y eficacia en la realización \nde sus actividades. \n \n(188) c) Contar con información financiera, económica, contable, jurídica y administrativa, que \nsea completa, correcta, precisa, íntegra, confiable y oportuna, y que contribuya a la \nadecuada toma de decisiones. \n \n(188) d) Coadyuvar permanentemente a la observancia de la normatividad aplicable a las \nactividades de las Instituciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 381,
        "contenido": "Procurar que los mecanismos de operación sean acordes con las estrategias y fines de \nlas Instituciones, que permitan prever, identificar, administrar, dar seguimiento y evaluar \nlos riesgos que puedan derivarse del desarrollo de su objeto social, con el propósito de \nminimizar las posibles pérdidas en que puedan incurrir. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 382,
        "contenido": "Delimitar las diferentes funciones y responsabilidades entre sus órganos sociales, \nunidades administrativas y personal, a fin de procurar eficiencia y eficacia en la realización \nde sus actividades. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 383,
        "contenido": "Contar con información financiera, económica, contable, jurídica y administrativa, que \nsea completa, correcta, precisa, íntegra, confiable y oportuna, y que contribuya a la \nadecuada toma de decisiones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "d",
        "id": 384,
        "contenido": "Coadyuvar permanentemente a la observancia de la normatividad aplicable a las \nactividades de las Instituciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXI",
        "id": 385,
        "contenido": "Sistema de Recepción y Asignación: al sistema automatizado de recepción de \ninstrucciones, registro y ejecución de Órdenes y asignación de operaciones con valores \ninscritos en el Registro. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXII",
        "id": 386,
        "contenido": "Sistema de Remuneración: al conjunto de funciones, políticas y procedimientos que \ndeberán establecer las instituciones de banca múltiple a fin de que las remuneraciones \nordinarias y extraordinarias de sus empleados, de las diferentes unidades administrativas, de \ncontrol y de negocio, o personal que ostente algún cargo, mandato, comisión o cualquier otro \ntítulo jurídico que las instituciones de banca múltiple hayan otorgado para la realización de sus \noperaciones por cuenta propia o con el público, se determinen en atención a los riesgos \nactuales y potenciales que representan las actividades desempeñadas por dichos empleados \no personal en lo individual. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXIII",
        "id": 387,
        "contenido": "SITI: al Sistema Interinstitucional de Transferencia de Información, el cual forma parte \nde la Oficialía de Partes de la Comisión Nacional Bancaria y de Valores. \n \n    \n \n \n \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXIV",
        "id": 388,
        "contenido": "Sociedad de Apoyo: a la empresa que, en su caso, constituyan una o más Instituciones \noperativos para auxiliar en el cumplimiento de las obligaciones que estas disposiciones le \nimponen a las Instituciones en materia de Medidas Básicas de Seguridad y que podrá, entre \notros: \n \n(188) a) Proporcionar asesoría a la Institución que corresponda, en relación con el estándar \ntecnológico vigente y programas de capacitación. \n \n(188) b) Coordinar la celebración de convenios de servicios y seguimiento a procesos con los \ncuerpos de seguridad pública competentes y las autoridades de procuración de justicia. \n \n(188) c) Coadyuvar y apoyar a las autoridades mencionadas en el inciso b) anterior, en la \nidentificación de los probables responsables y en la realización de sus actividades de \nprocuración de justicia. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 389,
        "contenido": "Proporcionar asesoría a la Institución que corresponda, en relación con el estándar \ntecnológico vigente y programas de capacitación. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 390,
        "contenido": "Coadyuvar y apoyar a las autoridades mencionadas en el inciso",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 391,
        "contenido": "anterior, en la \nidentificación de los probables responsables y en la realización de sus actividades de \nprocuración de justicia. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXV",
        "id": 392,
        "contenido": "Sociedades Inmobiliarias: a aquellas personas morales en cuyo capital participen una \no varias Instituciones y que tengan por objeto exclusivo la adquisición, arrendamiento, \nadministración, aprovechamiento, explotación, enajenación y uso de los inmuebles en que se \nubiquen oficinas y sucursales de las Instituciones que participen en su capital social, así como \nla ejecución de obras de adaptación, conservación, construcción, demolición, mantenimiento \ny modificación, respecto de tales inmuebles. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXVI",
        "id": 393,
        "contenido": "Subsidiarias Financieras: a las entidades financieras que sean objeto de consolidación \ncontable de conformidad con los criterios de contabilidad para las Instituciones, expedidos por \nla Comisión, exceptuando aquellas que estén sujetas a normas prudenciales emitidas por una \nautoridad financiera mexicana distinta a la Comisión. \n \n(193)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXVII",
        "id": 394,
        "contenido": "Suplemento de Capital Contracíclico: a aquel determinado conforme al inciso c) de la \n \n(192)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXVIII",
        "id": 395,
        "contenido": "Suplemento de Conservación de Capital: a aquel determinado conforme a la fracción \nPonderados Sujetos a Riesgo Totales, así como aquel porcentaje de los Activos Ponderados \nSujetos a Riesgo Totales correspondiente al Suplemento de Capital Contracíclico de cada \nInstitución determinado conforme al Capítulo VI Bis 2 del Título Primero Bis de las presentes \ndisposiciones y, tratándose de Instituciones de Banca Múltiple de Importancia Sistémica Local, \npor un porcentaje adicional de los Activos Ponderados Sujetos a Riesgo Totales determinado \nde conformidad con el Capítulo VI Bis 1 del Título Primero Bis de las presentes disposiciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXIX",
        "id": 396,
        "contenido": "Tarjeta Bancaria con Circuito Integrado: a las tarjetas de débito o crédito o con un \ncircuito integrado o chip, que pueda almacenar información y procesarla con el fin de verificar, \n    \n \n \n \n \nmediante procedimientos criptográficos, que la tarjeta y la terminal donde se utiliza son \nválidas. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXX",
        "id": 397,
        "contenido": "Teléfono Móvil: a los Dispositivos de Acceso a servicios de telefonía, que tienen \nasignado un número único de identificación y utilizan comunicación celular o de \nradiofrecuencia pública. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXXI",
        "id": 398,
        "contenido": "Terminal Punto de Venta: a los Dispositivos de Acceso al servicio de Banca Electrónica, \ntales como terminales de cómputo, teléfonos móviles y programas de cómputo, operados por \ncomercios o Usuarios para instruir el pago de bienes o servicios con cargo a una tarjeta o \ncuenta bancaria. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXXII",
        "id": 399,
        "contenido": "Título o Instrumento Subyacente: a la variable financiera que es objeto o referencia \nde un contrato relativo a operaciones derivadas. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXXIII",
        "id": 400,
        "contenido": "Truncamiento: a aquel proceso mediante el cual una Institución conserva en custodia \nlos cheques librados a cargo de otra Institución al recibirlos en pago o, en su caso, para abono \nen cuenta de sus clientes, sin que la primera efectúe la entrega del documento original a la \nsegunda, una vez efectuada su compensación. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXXIV",
        "id": 401,
        "contenido": "Inversión y reforma y adiciona diversas disposiciones del Código Fiscal de la Federación y de la \n1995, tal como el mismo sea modificado o adicionado de tiempo en tiempo. \n \n(220) \nreformadas y adicionadas diversas disposiciones de la Constitución Política de los Estados \npublicado en el Diario \nOficial de la Federación el 27 de enero de 2016, tal como sea modificado o adicionado de \ntiempo en tiempo. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXXVI",
        "id": 402,
        "contenido": "Unidad de Negocio: a las áreas originadoras y tomadoras de riesgos discrecionales \nal interior de las Instituciones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXXVII",
        "id": 403,
        "contenido": "Unidad Especializada: al área responsable de la seguridad y protección de la \nInstitución y de sus Oficinas Bancarias, que represente a aquella en materia de seguridad ante \nlas autoridades. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXXVIII",
        "id": 404,
        "contenido": "Usuario: al cliente de una Institución que haya suscrito un contrato con esta en el \nque se convenga la posibilidad de que, por sí mismo o a través de las personas facultadas por \ndicho cliente, utilice Medios Electrónicos para realizar consultas, Operaciones Monetarias y \ncualquier otro tipo de transacción bancaria. \n    \n \n \n \n \n \n (188) Asimismo, se considerarán Usuarios a los terceros con los que las Instituciones celebren \ncomisiones por cuenta y orden de la propia Institución, en términos de lo dispuesto por la \nSección Segunda del Capítulo XI del Título Quinto de las presentes disposiciones, que utilicen \nMedios Electrónicos para la realización de las citadas comisiones. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CLXXXIX",
        "id": 405,
        "contenido": "Valor de la Vivienda: al importe que sea menor entre el valor de la operación de \ncompra venta o el valor de avalúo. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXC",
        "id": 406,
        "contenido": "Vehículo de Propósito Especial en Esquemas de Bursatilización: a la sociedad, fideicomiso \no cualquier otra entidad organizada cuyas actividades se limitan estrictamente a cumplir su \nfin específico y cuya estructura está diseñada para aislar a dicha sociedad del riesgo de crédito \nde un originador o vendedor de posiciones. Los Vehículos de Propósito Especial en Esquemas \nde Bursatilización se utilizan habitualmente como medios financieros en los que se venden \nactivos a un fideicomiso o entidad similar a cambio de efectivo o de otros activos financiados \nmediante deuda emitida por el Vehículo de Propósito Especial en Esquemas de Bursatilización. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXCI",
        "id": 407,
        "contenido": "Vínculo de Negocio: a lo previsto por la fracción III del artículo 45-P de la Ley. \n \n(188)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXCII",
        "id": 408,
        "contenido": "Vínculo Patrimonial: a lo previsto por la fracción IV del artículo 45-P de la Ley. \n \n(214)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "CXCIII",
        "id": 409,
        "contenido": "VSM: a las Veces de Salario Mínimo diario o mensual, vigente en la Ciudad de México, \nque publique en el Diario Oficial de la Federación la Comisión Nacional de los Salarios Mínimos, \n \n \n(45) Capitulo II  \n(45) De los capitales mínimos",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 411,
        "contenido": "El equivalente en moneda nacional al valor de noventa millones de UDIs, tratándose de \ninstituciones de banca múltiple que tengan expresamente contempladas en sus estatutos \n    \n \n \n \n \n \n(45)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 412,
        "contenido": "El equivalente en moneda nacional a cincuenta y cuatro millones de UDIs, tratándose de \ninstituciones de banca múltiple que contemplen exclusivamente en sus estatutos sociales, \nIII, IV, V, VI, VII, VIII, XI, XXIII, XXIV, XXV y",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "XXVI",
        "id": 413,
        "contenido": "(45) Adicionalmente, las instituciones de banca múltiple a las que se refiere esta fracción podrán \nsiguientes: IX, siempre que estas operaciones únicamente se realicen por cuenta propia; X, XII, \nXIV, XV, XVI, XXII y XXVII, cuando las operaciones a las que se refiere esta última fracción \nXXVII sean para el cumplimiento de su objeto social; así como las operaciones análogas o \nconexas a las establecidas en esta fracción, siempre y cuando se ajusten a lo dispuesto en la \n \n(45)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "III",
        "id": 414,
        "contenido": "El equivalente en moneda nacional a treinta y seis millones de UDIs, tratándose de \ninstituciones de banca múltiple que exclusivamente opten por alguno de los incisos siguientes: \n \n(45) a) Presten servicios financieros, contemplando exclusivamente en sus estatutos sociales, \nalgunas de las operaciones siguientes: \n \nlas operaciones previstas en el presente numeral deberán ser realizadas únicamente \ncon Inversionistas Calificados, Inversionistas Institucionales o con personas morales. \n \ncontinuación: V, IX, X, XI, XII, XV, XVII, XVIII, XIX, XX, XXI, XXII, XXIII y XXVII, cuando \nlas operaciones a las que se refiere esta última fracción XXVII sean necesarias para \nel cumplimiento de su objeto social. \n \n (45) Asimismo, podrán realizar operaciones análogas o conexas a las establecidas en \neste inciso, siempre y cuando se ajusten a lo dispuesto en la fracción XXVIII del referido \n \n(45) b) Celebren operaciones vinculadas con la emisión de medios de pago, contemplando \nexclusivamente en sus estatutos sociales, algunas de las operaciones previstas por las \nque se refiere al otorgamiento de préstamos o créditos, siempre que las operaciones a \nlas que se refiere esta última fracción se efectúen con otras Instituciones; IX, siempre \nque estas operaciones se realicen con valores gubernamentales o bancarios por cuenta \npropia; XI; XII, siempre que estas operaciones se realicen exclusivamente con divisas, \nincluyendo reportos sobre estas últimas; XXIII; XXVI bis y XXVII, en el entendido de que \nla realización de las operaciones a las que se refieren estas dos últimas fracciones serán \npara el cumplimiento de su objeto social. \n    \n \n \n \n \n \n45) Asimismo, podrán realizar operaciones análogas o conexas a las establecidas en este \ninciso, siempre y cuando se ajusten a lo dispuesto en la fracción XXVIII del referido \n \n(45)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 415,
        "contenido": "Presten servicios financieros, contemplando exclusivamente en sus estatutos sociales, \nalgunas de las operaciones siguientes: \n \nlas operaciones previstas en el presente numeral deberán ser realizadas únicamente \ncon Inversionistas Calificados, Inversionistas Institucionales o con personas morales. \n \ncontinuación: V, IX, X, XI, XII, XV, XVII, XVIII, XIX, XX, XXI, XXII, XXIII y XXVII, cuando \nlas operaciones a las que se refiere esta última fracción XXVII sean necesarias para \nel cumplimiento de su objeto social. \n \n (45) Asimismo, podrán realizar operaciones análogas o conexas a las establecidas en \neste inciso, siempre y cuando se ajusten a lo dispuesto en la fracción XXVIII del referido \n \n(45)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 416,
        "contenido": "Celebren operaciones vinculadas con la emisión de medios de pago, contemplando \nexclusivamente en sus estatutos sociales, algunas de las operaciones previstas por las \nque se refiere al otorgamiento de préstamos o créditos, siempre que las operaciones a \nlas que se refiere esta última fracción se efectúen con otras Instituciones; IX, siempre \nque estas operaciones se realicen con valores gubernamentales o bancarios por cuenta \npropia; XI; XII, siempre que estas operaciones se realicen exclusivamente con divisas, \nincluyendo reportos sobre estas últimas; XXIII; XXVI bis y XXVII, en el entendido de que \nla realización de las operaciones a las que se refieren estas dos últimas fracciones serán \npara el cumplimiento de su objeto social. \n    \n \n \n \n \n \n45) Asimismo, podrán realizar operaciones análogas o conexas a las establecidas en este \ninciso, siempre y cuando se ajusten a lo dispuesto en la fracción XXVIII del referido \n \n(45)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "IV",
        "id": 417,
        "contenido": "El equivalente en moneda nacional al valor de noventa millones de UDIs, tratándose de \ninstituciones de banca múltiple que contemplen expresamente en sus estatutos sociales \nse refieren las fracciones II y III anteriores. \n \n(45) Tratándose de la celebración de operaciones de reporto que deriven de la realización de alguna \ninstituciones de banca múltiple únicamente podrán actuar como reportadoras. \n \n(45) A las instituciones de banca múltiple a que se refieren las fracciones II, III y IV anteriores, les \nserán aplicables las presentes Disposiciones únicamente respecto de las operaciones que realicen. \n \n \n(50) TITULO PRIMERO BIS \n(50) REQUERIMIENTOS DE CAPITAL DE LAS INSTITUCIONES DE CREDITO \n \n(50) Capítulo I \n(50) Disposiciones generales",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "III",
        "id": 419,
        "contenido": "En lo que se refiere al riesgo de mercado, \nlas Instituciones utilizarán el método estándar. Para el Riesgo Operacional se podrán aplicar \ndistintos métodos de complejidad creciente conforme a lo que se establece en el presente título.",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 423,
        "contenido": "Se efectuará un cómputo de requerimientos de capital para cada entidad financiera filial del \nexterior, aplicando lo dispuesto en el presente título al total de las Operaciones de éstas, y \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 424,
        "contenido": "En caso de que el requerimiento de capital obtenido conforme al inciso anterior sea superior \nal importe del capital neto de la entidad financiera del exterior de que se trate, la diferencia \nentre ambas cantidades se sumará para todos los efectos a los requerimientos de capital de \nla Institución.",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 426,
        "contenido": "El cálculo de la equivalencia en moneda nacional de dólares de los Estados Unidos de América \nse realizará tomando en cuenta el tipo de cambio del día último del mes. Tratándose de \ncualquier otra moneda extranjera se convertirá a dólares de los Estados Unidos de América. \nEn todo caso, los tipos de cambio serán los aplicables conforme a lo dispuesto en los Criterios \nContables. \n  \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 427,
        "contenido": "El cálculo de la equivalencia en moneda nacional de las UDIs se realizará tomando en cuenta \nel valor en pesos de la UDI, al día último del mes, considerando para ello el valor en pesos de \nla UDI que el Banco de México publica en el Diario Oficial de la Federación. \n \n(50) La Comisión resolverá respecto de los coeficientes de cargo por riesgo de mercado, porcentajes \nde ponderación de riesgo de crédito, el procedimiento para determinar el cargo por Riesgo \nOperacional, y el procedimiento para determinar el valor de conversión aplicables en caso de que \nse presenten Operaciones que hubieren sido autorizadas por la Comisión y que no estén \ncomprendidas en el presente título. \n    \n \n \n \n \n \n(50) Asimismo y sin perjuicio de lo establecido en este título, la Comisión podrá solicitar al Banco de \nMéxico, en cualquier momento, que efectúe el cómputo del Indice de Capitalización de una \nInstitución con base en la información que la propia Comisión haya observado en el ejercicio de \nsus funciones de inspección y vigilancia. \n \n(50) El Índice de Capitalización calculado por el Banco de México, con base en la información que le \nproporcione la Comisión conforme al párrafo anterior, será el utilizado para todos los efectos \nlegales conducentes. \n \n \n(50) Capítulo II \n(50) Integración del capital",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 429,
        "contenido": "Un Coeficiente de Capital Básico por lo menos del 6 %, y \n \n(161)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 430,
        "contenido": "Un Coeficiente de Capital Fundamental por lo menos de 4.5 %. \n \n(189)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "III",
        "id": 431,
        "contenido": "Adicionalmente a los mínimos de capital establecidos en los párrafos precedentes, las \nInstituciones deberán mantener un Suplemento de Conservación de Capital constituido por \npresentes disposiciones, equivalente a: \n \n(192) a) 2.5 % de los Activos Ponderados Sujetos a Riesgo Totales. \n \n(189) b) Tratándose de Instituciones de Banca Múltiple de Importancia Sistémica Local, un \nporcentaje adicional de los Activos Ponderados Sujetos a Riesgo Totales, conforme a lo \n \n(193) c) El porcentaje de Suplemento de Capital Contracíclico determinado conforme al Capítulo \nVI Bis 2 del presente Título cuando este último sea exigible en términos de dicho Capítulo. \n \n(190) Último párrafo.- Derogado.",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 432,
        "contenido": "2.5 % de los Activos Ponderados Sujetos a Riesgo Totales. \n \n(189)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 433,
        "contenido": "Tratándose de Instituciones de Banca Múltiple de Importancia Sistémica Local, un \nporcentaje adicional de los Activos Ponderados Sujetos a Riesgo Totales, conforme a lo \n \n(193)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 434,
        "contenido": "El porcentaje de Suplemento de Capital Contracíclico determinado conforme al Capítulo \nVI Bis 2 del presente Título cuando este último sea exigible en términos de dicho Capítulo. \n \n(190) Último párrafo.- Derogado.",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 436,
        "contenido": "El Capital Fundamental se integrará por: \n \n(113) a) La suma de los conceptos del capital contable que se enumeran a continuación, \nincluyendo, en su caso, sus incrementos por actualizaciones: \n \n(113) 1. Títulos representativos del capital social de la Institución siempre que se cumpla \ncon las condiciones establecidas en el Anexo 1-Q de las presentes disposiciones, \nincluyendo, en su caso, su prima en venta de acciones. \n \n(113) 2. Aportaciones para futuros aumentos de capital, respecto de las cuales ya existe un \nacuerdo por parte de la asamblea de accionistas para dicho aumento y su respectiva \nsuscripción. \n \n(113) 3. Reservas de capital. \n \n(113) 4. Resultados de ejercicios anteriores. \n \n(113) 5. Resultado neto. \n \n(113) 6. Resultado por valuación de títulos disponibles para la venta. \n \n(214) 7. Resultado por valuación de instrumentos de cobertura de flujos de efectivo. \n \n(189) 8. Resultado por remediciones por beneficios definidos a los empleados. \n \n(113) MENOS: \n \n(113) b) Las inversiones en cualquier instrumento de deuda cuyo pago por parte del emisor o \ndeudor, según se trate, por haberlo así convenido, solamente pueda realizarse después de \ncubrir otros pasivos, entre las cuales quedan comprendidas las obligaciones subordinadas \nemitidas por otras entidades financieras. \n \n(113) c) Los beneficios sobre el remanente en operaciones de bursatilización, así como la utilidad \n \n(113) d) El monto de cualquier acción propia que la Institución adquiera de conformidad con lo \nprevisto en la Ley. \n \n(113) e) Tratándose de inversiones en valores referenciados a índices de valores que a su vez \nincluyan inversiones en el capital de la Institución, así como en el de las entidades referidas \n    \n \n \n \n \nen el inciso f) siguiente, la proporción que representen las acciones emitidas por la \nrespectiva Institución o entidad en los propios índices. En todo caso, las posiciones largas \nse podrán considerar netas de las posiciones cortas, siempre que se trate de la misma \nexposición subyacente. \n \n(219) f) Las inversiones, incluyendo los efectos de valuación por el método que corresponda, en \n81 de la Ley para Regular las Agrupaciones Financieras. Adicionalmente, el faltante del \ncapital mínimo regulatorio requerido por la autoridad, proporcional a la tenencia \naccionaria de las Subsidiarias Financieras sujetas a requerimientos de capital. También se \nconsiderarán todas las inversiones en acciones que se realicen en cualquier entidad \nfinanciera nacional o extranjera, considerando una a una dichas inversiones, sin perjuicio \nde que el capital de alguna de ellas provenga a su vez de otra de estas entidades \nfinancieras. Asimismo, las inversiones o aportaciones en el capital de empresas o en el \npatrimonio mínimo de fideicomisos u otro tipo de figuras similares que tengan por \nfinalidad actuar como socio liquidador, cámara de compensación, u otra figura \nequivalente, para compensar y liquidar Operaciones celebradas en bolsa, salvo la \nparticipación de dichas empresas o fideicomisos en esta última. Lo anterior, en el \nentendido que por capital de empresas o patrimonio mínimo de los fideicomisos deberá \nexcluirse las inversiones o aportaciones al fondo de aportaciones iniciales mínimas, fondo \nde compensación, fondo complementario o cualquier otra aportación que no sea \nmutualizable. Tratándose de fondos de inversión, únicamente se considerarán las \ninversiones en el capital fijo. \n \n(161) No obstante lo anterior, tratándose de las inversiones que las instituciones realicen \nen el capital de organismos multilaterales de desarrollo o de fomento de carácter \ninternacional que cuenten con Calificación al emisor, igual o mejor a las consideradas en \nel Grado de Riesgo 2 a largo plazo, se restará del Capital Fundamental un monto \nequivalente a: \n \n(113) 1. 25 por ciento del valor de las inversiones cuando la Institución mantenga hasta el \n10 por ciento del capital del citado organismo, o \n \n(113) 2. 50 por ciento del valor de las inversiones cuando la Institución mantenga más del \n10 por ciento del capital del citado organismo. \n \n (161) g) Las inversiones, incluyendo los efectos de valuación por el método que corresponda, en \n73 Bis y 73 Bis 1 de la Ley. \n \n(161) Tratándose de las inversiones en acciones que se deriven de capitalizaciones o \ndaciones en pago de adeudos, y que antes de efectuarse dicha capitalización o dación en \npago no se considerara a la correspondiente empresa como relacionada con la Institución \n    \n \n \n \n \nen los términos de los artículos citados, se restarán del Capital Fundamental transcurridos \ncinco años de haberse efectuado la capitalización o dación correspondiente. \n \n(179) Las inversiones a que se refiere este inciso, en tanto no sean restadas del capital, \nde estas disposiciones. \n \n(113) h) Las inversiones que las instituciones de banca de desarrollo realicen de acuerdo a sus \nleyes orgánicas, en capital de riesgo, se restarán en un monto equivalente al 50 por ciento \ndel valor de la inversión. \n \n(113) Las inversiones a que se refiere este inciso, en tanto no sean restadas en su totalidad \ndel capital, tendrán un requerimiento de capital de acuerdo con lo establecido en el \n \n(214) i) Las inversiones en acciones, distintas del capital fijo, de fondos de inversión tanto de \ncapitales como de objeto limitado, a las cuales se les dará el tratamiento previsto en los \ndos párrafos siguientes. \n  \n(214) En el caso de fondos de inversión tanto de capitales como de objeto limitado que no \nse encuentren cotizadas en las Bolsas, el portafolio del fondo se desagregará en sus \ndiversas posiciones individuales, considerando la participación que tenga la Institución en \ndichos fondos de inversión. La parte del fondo de inversión invertido en instrumentos de \ndisposiciones. \n  \n(214) Para el caso de los fondos de inversión mencionadas en el párrafo anterior, que se \nencuentren cotizados en la Bolsa, la inversión se restará cuando la Institución mantenga \nmás del 15 por ciento del capital contable del citado fondo de inversión. \n \n(113) Las inversiones a que se refiere este inciso que no sean restadas del capital, tendrán \ndisposiciones. \n \n(113) j) Las inversiones incluyendo los efectos de valuación por el método que corresponda, en \nel capital de sociedades distintas a las entidades financieras a que se refiere el inciso f) \nanterior, que sean a su vez accionistas de la propia Institución, de la sociedad controladora \ndel grupo financiero, de las demás entidades financieras integrantes del grupo al que \npertenezca la Institución o de las filiales financieras de estas. \n \n(113) k) Las reservas preventivas pendientes de constituirse, de acuerdo con lo dispuesto en el \nCapítulo V del Título Segundo de las presentes disposiciones, así como aquéllas \n    \n \n \n \n \nconstituidas con cargo a cuentas contables que no formen parte de las partidas de \nresultados o del capital contable. \n \n(113) Asimismo, la diferencia positiva entre las Pérdidas Esperadas Totales menos las \nReservas Admisibles Totales, en el caso de que las Instituciones utilicen métodos basados \nen calificaciones internas en la determinación de sus requerimientos de capital. \n \n(113) l) Cualquier tipo de aportación, incluyendo sus accesorios, cuyos recursos se destinen a la \nadquisición de acciones de la sociedad controladora del grupo financiero, de las demás \nentidades financieras integrantes del grupo al que pertenezca la Institución o de las filiales \nfinancieras de estas. Asimismo, deberán restarse los Financiamientos que se destinen a la \nadquisición de acciones de las subsidiarias financieras de las entidades financieras \nintegrantes del grupo al que pertenezca la Institución. \n \n(113) m) Los créditos que se otorguen y las demás Operaciones que se realicen en contravención \na las disposiciones aplicables. \n \n(113) n) Las partidas que se contabilicen en el activo de la Institución como intangibles o que, en \nsu caso, impliquen el diferimiento de gastos o costos en el capital de la Institución, tales \ncomo: \n \n(113) 1. Los intangibles de cualquier tipo incluyendo el crédito mercantil, y \n \n(113) 2. Cualquier partida con excepción de los activos fijos y los pagos anticipados menores \na un año, que represente erogaciones o gastos cuyo reconocimiento en el capital \ncontable se difiera en el tiempo. \n \n(113) Todos estos conceptos se considerarán netos de sus correspondientes \namortizaciones y sus impuestos diferidos pasivos. \n \n(163) o) Derogado. \n \n(113) p) Los impuestos diferidos activos correspondientes al impuesto a la utilidad derivados de \npérdidas fiscales y créditos fiscales por cualquier concepto; y la participación de los \ntrabajadores en las utilidades diferidas. \n \n(113) q) El monto de los impuestos diferidos activos que no hayan sido considerados en el inciso \np) anterior de la presente fracción, que rebasen el 10 por ciento de la cantidad positiva \nque resulte de restar, al importe de la suma de los conceptos referidos en el inciso a), el \nimporte de la suma de los conceptos referidos en los incisos b) a p). \n \n(113) Los impuestos diferidos activos a los que se refiere este inciso podrán considerarse \nnetos de los impuestos diferidos pasivos que correspondan a la misma autoridad fiscal y \n    \n \n \n \n \nrespecto de los cuales se tenga el derecho de compensar ante la citada autoridad. En \nningún caso, se podrán considerar los impuestos diferidos pasivos que hayan sido \ncontemplados para ajustar los montos referidos en el inciso n) anterior. \n \n(220) r) El monto del resultado por valuación de instrumentos de cobertura de flujos de efectivo, \núnicamente cuando correspondan a partidas valuadas a costo amortizado y siempre que \nsea positivo; en caso de que este monto sea negativo deberá sumarse al capital \nfundamental. Lo anterior, sin incluir el efecto de los impuestos a la utilidad diferida \ncorrespondientes a este resultado. \n \n(219) s) El monto agregado de las Operaciones Sujetas a Riesgo de Crédito a cargo de Personas \nRelacionadas Relevantes que rebase el 25 por ciento de la cantidad positiva que resulte \nde restar, al importe de la suma de los conceptos referidos en el inciso a) anterior, el \nimporte de la suma de los conceptos referidos en los incisos b) a r) del presente artículo. \n  \n(219) El monto a considerar dentro de las Operaciones Sujetas a Riesgo de Crédito a cargo \nde Personas Relacionadas Relevantes por concepto de operaciones con derivados, será el \nque corresponda a las posiciones netas a favor, determinadas conforme a lo dispuesto en \n  \n(219) El monto que rebase el 25 por ciento referido en el primer párrafo de este inciso, \ndeberá considerarse neto de las correspondientes reservas crediticias constituidas, que \nno computen como capital complementario en términos de lo dispuesto en la fracción III \n  \n(219) Para efectos de lo establecido en este inciso, no se considerarán dentro del monto de \nlas Operaciones Sujetas a Riesgo de Crédito a cargo de Personas Relacionadas Relevantes: \n \n(219) 1. El monto de las líneas de crédito para operaciones de comercio exterior. \n \n(219) 2. La parte cubierta de las propias Operaciones Sujetas a Riesgo de Crédito con \ngarantías reales o personales otorgadas por personas distintas a las Personas \nRelacionadas Relevantes, siempre que no se trate, en el caso de las garantías reales, \nde valores u otros instrumentos financieros emitidos por o a cargo de Personas \nRelacionadas Relevantes. \n \n(219) 3. La parte cubierta de las propias Operaciones Sujetas a Riesgo de Crédito con \ngarantías reales otorgadas por Personas Relacionadas Relevantes, siempre que se \nAnexo 1-P y que cumplan con los requerimientos establecidos en el Anexo 24 de las \npresentes disposiciones. \n \n    \n \n \n \n \n(219) 4. Las Operaciones Sujetas a Riesgo de Crédito respecto de las cuales las propias \ninstituciones de banca múltiple, constituyan provisiones preventivas adicionales a las \nque deban crear como resultado del proceso de calificación de su Cartera Crediticia a \n \n(219) 5. La parte no dispuesta de aquellos préstamos o créditos revocables. \n \n(219) 6. Los créditos otorgados a un fideicomiso, sociedad mercantil u otro tipo de \ninstrumento legal, en los que participe con un interés mayoritario alguna Persona \nRelacionada Relevante, cuyo único objeto sea el desarrollo de proyectos de inversión \ncon fuente de pago propia, que cumplan tanto con los requisitos establecidos en el \nAnexo 19 de las presentes disposiciones, como con los siguientes: \n \n(219) i. La fuente de pago del respectivo proyecto deberá estar constituida únicamente \npor los ingresos o derechos de cobro que deriven de la realización, puesta en \nmarcha o explotación del proyecto. \n \n(219) ii. El fideicomiso, sociedad mercantil, u otro tipo de instrumento legal, no podrá \ntener adeudos, ni haber otorgado garantías reales o personales, a favor de las \nPersonas Relacionadas Relevantes, salvo obligaciones derivadas de la adquisición \no arrendamiento de bienes, o la prestación de servicios contratados con dichas \npersonas a precios de mercado. \n \n(219) iii. El comité técnico u órgano administrativo del fideicomiso, sociedad mercantil u \notro tipo de instrumento legal, deberá garantizar que no se desvíen recursos \ndestinados al desarrollo del respectivo proyecto. \n \n(219) iv. Las Personas Relacionadas Relevantes, no podrán bajo cualquier título tener \nparticipación a fin de mejorar la calidad crediticia del proyecto de inversión; ni \notorgar apoyos implícitos o explícitos al proyecto en cuestión o responder por \nincumplimientos del proyecto. \n \n(219) v. Los activos del proyecto de inversión con fuente de pago propia se afecten a un \nfideicomiso de garantía para el pago del crédito, observándose lo establecido en \nel Anexo 1-P de las presentes disposiciones. Cuando la institución no otorgue el \n100 por ciento del crédito al proyecto con fuente de pago propia, deberá quedar \nen garantía al menos, la parte alícuota o proporcional del porcentaje de crédito \notorgado al proyecto. \n \n(161)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 437,
        "contenido": "La suma de los conceptos del capital contable que se enumeran a continuación, \nincluyendo, en su caso, sus incrementos por actualizaciones: \n \n(113) 1. Títulos representativos del capital social de la Institución siempre que se cumpla \ncon las condiciones establecidas en el Anexo 1-Q de las presentes disposiciones, \nincluyendo, en su caso, su prima en venta de acciones. \n \n(113) 2. Aportaciones para futuros aumentos de capital, respecto de las cuales ya existe un \nacuerdo por parte de la asamblea de accionistas para dicho aumento y su respectiva \nsuscripción. \n \n(113) 3. Reservas de capital. \n \n(113) 4. Resultados de ejercicios anteriores. \n \n(113) 5. Resultado neto. \n \n(113) 6. Resultado por valuación de títulos disponibles para la venta. \n \n(214) 7. Resultado por valuación de instrumentos de cobertura de flujos de efectivo. \n \n(189) 8. Resultado por remediciones por beneficios definidos a los empleados. \n \n(113) MENOS: \n \n(113)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 438,
        "contenido": "Las inversiones en cualquier instrumento de deuda cuyo pago por parte del emisor o \ndeudor, según se trate, por haberlo así convenido, solamente pueda realizarse después de \ncubrir otros pasivos, entre las cuales quedan comprendidas las obligaciones subordinadas \nemitidas por otras entidades financieras. \n \n(113)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 439,
        "contenido": "Los beneficios sobre el remanente en operaciones de bursatilización, así como la utilidad \n \n(113)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "d",
        "id": 440,
        "contenido": "El monto de cualquier acción propia que la Institución adquiera de conformidad con lo \nprevisto en la Ley. \n \n(113)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "e",
        "id": 441,
        "contenido": "Tratándose de inversiones en valores referenciados a índices de valores que a su vez \nincluyan inversiones en el capital de la Institución, así como en el de las entidades referidas \n    \n \n \n \n \nen el inciso",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "f",
        "id": 442,
        "contenido": "siguiente, la proporción que representen las acciones emitidas por la \nrespectiva Institución o entidad en los propios índices. En todo caso, las posiciones largas \nse podrán considerar netas de las posiciones cortas, siempre que se trate de la misma \nexposición subyacente. \n \n(219)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "f",
        "id": 443,
        "contenido": "Las inversiones, incluyendo los efectos de valuación por el método que corresponda, en \n81 de la Ley para Regular las Agrupaciones Financieras. Adicionalmente, el faltante del \ncapital mínimo regulatorio requerido por la autoridad, proporcional a la tenencia \naccionaria de las Subsidiarias Financieras sujetas a requerimientos de capital. También se \nconsiderarán todas las inversiones en acciones que se realicen en cualquier entidad \nfinanciera nacional o extranjera, considerando una a una dichas inversiones, sin perjuicio \nde que el capital de alguna de ellas provenga a su vez de otra de estas entidades \nfinancieras. Asimismo, las inversiones o aportaciones en el capital de empresas o en el \npatrimonio mínimo de fideicomisos u otro tipo de figuras similares que tengan por \nfinalidad actuar como socio liquidador, cámara de compensación, u otra figura \nequivalente, para compensar y liquidar Operaciones celebradas en bolsa, salvo la \nparticipación de dichas empresas o fideicomisos en esta última. Lo anterior, en el \nentendido que por capital de empresas o patrimonio mínimo de los fideicomisos deberá \nexcluirse las inversiones o aportaciones al fondo de aportaciones iniciales mínimas, fondo \nde compensación, fondo complementario o cualquier otra aportación que no sea \nmutualizable. Tratándose de fondos de inversión, únicamente se considerarán las \ninversiones en el capital fijo. \n \n(161) No obstante lo anterior, tratándose de las inversiones que las instituciones realicen \nen el capital de organismos multilaterales de desarrollo o de fomento de carácter \ninternacional que cuenten con Calificación al emisor, igual o mejor a las consideradas en \nel Grado de Riesgo 2 a largo plazo, se restará del Capital Fundamental un monto \nequivalente a: \n \n(113) 1. 25 por ciento del valor de las inversiones cuando la Institución mantenga hasta el \n10 por ciento del capital del citado organismo, o \n \n(113) 2. 50 por ciento del valor de las inversiones cuando la Institución mantenga más del \n10 por ciento del capital del citado organismo. \n \n (161)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "g",
        "id": 444,
        "contenido": "Las inversiones, incluyendo los efectos de valuación por el método que corresponda, en \n73 Bis y 73 Bis 1 de la Ley. \n \n(161) Tratándose de las inversiones en acciones que se deriven de capitalizaciones o \ndaciones en pago de adeudos, y que antes de efectuarse dicha capitalización o dación en \npago no se considerara a la correspondiente empresa como relacionada con la Institución \n    \n \n \n \n \nen los términos de los artículos citados, se restarán del Capital Fundamental transcurridos \ncinco años de haberse efectuado la capitalización o dación correspondiente. \n \n(179) Las inversiones a que se refiere este inciso, en tanto no sean restadas del capital, \nde estas disposiciones. \n \n(113)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "h",
        "id": 445,
        "contenido": "Las inversiones que las instituciones de banca de desarrollo realicen de acuerdo a sus \nleyes orgánicas, en capital de riesgo, se restarán en un monto equivalente al 50 por ciento \ndel valor de la inversión. \n \n(113) Las inversiones a que se refiere este inciso, en tanto no sean restadas en su totalidad \ndel capital, tendrán un requerimiento de capital de acuerdo con lo establecido en el \n \n(214)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "i",
        "id": 446,
        "contenido": "Las inversiones en acciones, distintas del capital fijo, de fondos de inversión tanto de \ncapitales como de objeto limitado, a las cuales se les dará el tratamiento previsto en los \ndos párrafos siguientes. \n  \n(214) En el caso de fondos de inversión tanto de capitales como de objeto limitado que no \nse encuentren cotizadas en las Bolsas, el portafolio del fondo se desagregará en sus \ndiversas posiciones individuales, considerando la participación que tenga la Institución en \ndichos fondos de inversión. La parte del fondo de inversión invertido en instrumentos de \ndisposiciones. \n  \n(214) Para el caso de los fondos de inversión mencionadas en el párrafo anterior, que se \nencuentren cotizados en la Bolsa, la inversión se restará cuando la Institución mantenga \nmás del 15 por ciento del capital contable del citado fondo de inversión. \n \n(113) Las inversiones a que se refiere este inciso que no sean restadas del capital, tendrán \ndisposiciones. \n \n(113)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "j",
        "id": 447,
        "contenido": "Las inversiones incluyendo los efectos de valuación por el método que corresponda, en \nel capital de sociedades distintas a las entidades financieras a que se refiere el inciso",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "f",
        "id": 448,
        "contenido": "anterior, que sean a su vez accionistas de la propia Institución, de la sociedad controladora \ndel grupo financiero, de las demás entidades financieras integrantes del grupo al que \npertenezca la Institución o de las filiales financieras de estas. \n \n(113)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "k",
        "id": 449,
        "contenido": "Las reservas preventivas pendientes de constituirse, de acuerdo con lo dispuesto en el \nCapítulo V del Título Segundo de las presentes disposiciones, así como aquéllas \n    \n \n \n \n \nconstituidas con cargo a cuentas contables que no formen parte de las partidas de \nresultados o del capital contable. \n \n(113) Asimismo, la diferencia positiva entre las Pérdidas Esperadas Totales menos las \nReservas Admisibles Totales, en el caso de que las Instituciones utilicen métodos basados \nen calificaciones internas en la determinación de sus requerimientos de capital. \n \n(113)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "l",
        "id": 450,
        "contenido": "Cualquier tipo de aportación, incluyendo sus accesorios, cuyos recursos se destinen a la \nadquisición de acciones de la sociedad controladora del grupo financiero, de las demás \nentidades financieras integrantes del grupo al que pertenezca la Institución o de las filiales \nfinancieras de estas. Asimismo, deberán restarse los Financiamientos que se destinen a la \nadquisición de acciones de las subsidiarias financieras de las entidades financieras \nintegrantes del grupo al que pertenezca la Institución. \n \n(113)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "m",
        "id": 451,
        "contenido": "Los créditos que se otorguen y las demás Operaciones que se realicen en contravención \na las disposiciones aplicables. \n \n(113)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "n",
        "id": 452,
        "contenido": "Las partidas que se contabilicen en el activo de la Institución como intangibles o que, en \nsu caso, impliquen el diferimiento de gastos o costos en el capital de la Institución, tales \ncomo: \n \n(113) 1. Los intangibles de cualquier tipo incluyendo el crédito mercantil, y \n \n(113) 2. Cualquier partida con excepción de los activos fijos y los pagos anticipados menores \na un año, que represente erogaciones o gastos cuyo reconocimiento en el capital \ncontable se difiera en el tiempo. \n \n(113) Todos estos conceptos se considerarán netos de sus correspondientes \namortizaciones y sus impuestos diferidos pasivos. \n \n(163)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "o",
        "id": 453,
        "contenido": "Derogado. \n \n(113)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "p",
        "id": 454,
        "contenido": "Los impuestos diferidos activos correspondientes al impuesto a la utilidad derivados de \npérdidas fiscales y créditos fiscales por cualquier concepto; y la participación de los \ntrabajadores en las utilidades diferidas. \n \n(113)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "q",
        "id": 455,
        "contenido": "El monto de los impuestos diferidos activos que no hayan sido considerados en el inciso",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "p",
        "id": 456,
        "contenido": "anterior de la presente fracción, que rebasen el 10 por ciento de la cantidad positiva \nque resulte de restar, al importe de la suma de los conceptos referidos en el inciso",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 457,
        "contenido": ", el \nimporte de la suma de los conceptos referidos en los incisos",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 458,
        "contenido": "a",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "p",
        "id": 459,
        "contenido": ". \n \n(113) Los impuestos diferidos activos a los que se refiere este inciso podrán considerarse \nnetos de los impuestos diferidos pasivos que correspondan a la misma autoridad fiscal y \n    \n \n \n \n \nrespecto de los cuales se tenga el derecho de compensar ante la citada autoridad. En \nningún caso, se podrán considerar los impuestos diferidos pasivos que hayan sido \ncontemplados para ajustar los montos referidos en el inciso",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "n",
        "id": 460,
        "contenido": "anterior. \n \n(220)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "r",
        "id": 461,
        "contenido": "El monto del resultado por valuación de instrumentos de cobertura de flujos de efectivo, \núnicamente cuando correspondan a partidas valuadas a costo amortizado y siempre que \nsea positivo; en caso de que este monto sea negativo deberá sumarse al capital \nfundamental. Lo anterior, sin incluir el efecto de los impuestos a la utilidad diferida \ncorrespondientes a este resultado. \n \n(219)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "s",
        "id": 462,
        "contenido": "El monto agregado de las Operaciones Sujetas a Riesgo de Crédito a cargo de Personas \nRelacionadas Relevantes que rebase el 25 por ciento de la cantidad positiva que resulte \nde restar, al importe de la suma de los conceptos referidos en el inciso",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 463,
        "contenido": "anterior, el \nimporte de la suma de los conceptos referidos en los incisos",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 464,
        "contenido": "a",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "r",
        "id": 465,
        "contenido": "del presente artículo. \n  \n(219) El monto a considerar dentro de las Operaciones Sujetas a Riesgo de Crédito a cargo \nde Personas Relacionadas Relevantes por concepto de operaciones con derivados, será el \nque corresponda a las posiciones netas a favor, determinadas conforme a lo dispuesto en \n  \n(219) El monto que rebase el 25 por ciento referido en el primer párrafo de este inciso, \ndeberá considerarse neto de las correspondientes reservas crediticias constituidas, que \nno computen como capital complementario en términos de lo dispuesto en la fracción III \n  \n(219) Para efectos de lo establecido en este inciso, no se considerarán dentro del monto de \nlas Operaciones Sujetas a Riesgo de Crédito a cargo de Personas Relacionadas Relevantes: \n \n(219) 1. El monto de las líneas de crédito para operaciones de comercio exterior. \n \n(219) 2. La parte cubierta de las propias Operaciones Sujetas a Riesgo de Crédito con \ngarantías reales o personales otorgadas por personas distintas a las Personas \nRelacionadas Relevantes, siempre que no se trate, en el caso de las garantías reales, \nde valores u otros instrumentos financieros emitidos por o a cargo de Personas \nRelacionadas Relevantes. \n \n(219) 3. La parte cubierta de las propias Operaciones Sujetas a Riesgo de Crédito con \ngarantías reales otorgadas por Personas Relacionadas Relevantes, siempre que se \nAnexo 1-P y que cumplan con los requerimientos establecidos en el Anexo 24 de las \npresentes disposiciones. \n \n    \n \n \n \n \n(219) 4. Las Operaciones Sujetas a Riesgo de Crédito respecto de las cuales las propias \ninstituciones de banca múltiple, constituyan provisiones preventivas adicionales a las \nque deban crear como resultado del proceso de calificación de su Cartera Crediticia a \n \n(219) 5. La parte no dispuesta de aquellos préstamos o créditos revocables. \n \n(219) 6. Los créditos otorgados a un fideicomiso, sociedad mercantil u otro tipo de \ninstrumento legal, en los que participe con un interés mayoritario alguna Persona \nRelacionada Relevante, cuyo único objeto sea el desarrollo de proyectos de inversión \ncon fuente de pago propia, que cumplan tanto con los requisitos establecidos en el \nAnexo 19 de las presentes disposiciones, como con los siguientes: \n \n(219) i. La fuente de pago del respectivo proyecto deberá estar constituida únicamente \npor los ingresos o derechos de cobro que deriven de la realización, puesta en \nmarcha o explotación del proyecto. \n \n(219) ii. El fideicomiso, sociedad mercantil, u otro tipo de instrumento legal, no podrá \ntener adeudos, ni haber otorgado garantías reales o personales, a favor de las \nPersonas Relacionadas Relevantes, salvo obligaciones derivadas de la adquisición \no arrendamiento de bienes, o la prestación de servicios contratados con dichas \npersonas a precios de mercado. \n \n(219) iii. El comité técnico u órgano administrativo del fideicomiso, sociedad mercantil u \notro tipo de instrumento legal, deberá garantizar que no se desvíen recursos \ndestinados al desarrollo del respectivo proyecto. \n \n(219) iv. Las Personas Relacionadas Relevantes, no podrán bajo cualquier título tener \nparticipación a fin de mejorar la calidad crediticia del proyecto de inversión; ni \notorgar apoyos implícitos o explícitos al proyecto en cuestión o responder por \nincumplimientos del proyecto. \n \n(219) v. Los activos del proyecto de inversión con fuente de pago propia se afecten a un \nfideicomiso de garantía para el pago del crédito, observándose lo establecido en \nel Anexo 1-P de las presentes disposiciones. Cuando la institución no otorgue el \n100 por ciento del crédito al proyecto con fuente de pago propia, deberá quedar \nen garantía al menos, la parte alícuota o proporcional del porcentaje de crédito \notorgado al proyecto. \n \n(161)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 466,
        "contenido": "El Capital Básico No Fundamental se integrará por: \n \n(161) a) Los títulos representativos del capital social de la Institución que no hayan sido \nconsiderados en el Capital Fundamental siempre que se cumpla con las condiciones \n    \n \n \n \n \nestablecidas en el Anexo 1-R de las presentes disposiciones, incluyendo, en su caso, su \nprima en venta de acciones, y \n \n(238) b) Los Instrumentos de Capital siempre que se cumpla con las condiciones establecidas en \nel Anexo 1-R de las presentes disposiciones. \n  \n(238) Tratándose de Instrumentos de Capital emitidos por instituciones de banca múltiple, \nsolamente quedarán incluidos aquellos que en su conjunto, correspondan a un monto en \nmoneda nacional o su equivalente, que no exceda del 50 % del Capital Fundamental de la \ninstitución de banca múltiple de que se trate. \n  \n(238) Como excepción a lo dispuesto en el párrafo anterior, podrán computar en el Capital \nBásico No Fundamental los Instrumentos de Capital que superen el límite señalado, \nsiempre y cuando: \n \n(238) 1. La institución de banca múltiple emisora mantenga un Coeficiente de Capital \nFundamental mayor o igual al 10 %. \n  \n(238) En caso de que dicho Coeficiente de Capital Fundamental se ubique por debajo del \n10 %, como consecuencia de cualquier mecanismo o acto que implique una \ntransferencia de beneficios patrimoniales a las personas a que se refiere el artículo 73 \nde la Ley o bien por el pago de dividendos, la institución de banca múltiple dejará de \ncomputar como Capital Neto el monto de los instrumentos que haya excedido el \nlímite del 50 % del Capital Fundamental señalado en el segundo párrafo del inciso b) \nanterior, y estarán a lo dispuesto en el cuarto párrafo de dicho inciso. \n \n(238) 2. La institución de banca múltiple emisora que cuente con un Coeficiente de Capital \nFundamental inferior a 10 %, en la solicitud de autorización que corresponde otorgar \nal Banco de México conforme al artículo 64 de la Ley, así como en el acta de emisión \no el documento equivalente, en los títulos representativos de dichos Instrumentos de \nCapital, en el prospecto informativo correspondiente y en el acta de asamblea general \nde accionistas que autorice la emisión respectiva, contemple expresamente la \nobligación incondicional a cargo de la institución de banca múltiple emisora de que el \nmonto del Capital Fundamental con el que esta cuente a la fecha en que presente la \nreferida solicitud de autorización, no disminuirá en términos absolutos, en virtud de \ncualquier mecanismo o acto que implique una transferencia de beneficios \npatrimoniales a las personas a que se refiere el artículo 73 de la Ley o bien por el pago \nde dividendos, hasta en tanto dichos Instrumentos de Capital sean amortizados en su \ntotalidad, o mientras mantenga un Coeficiente de Capital Fundamental inferior al 10 \n%. \n  \n(238) Si el Capital Fundamental de la institución de banca múltiple referido en los numerales \n1., y 2., anteriores disminuye como consecuencia de cualquier mecanismo o acto que \n    \n \n \n \n \nimplique una transferencia de beneficios patrimoniales a las personas a que se refiere el \nartículo 73 de la Ley o bien por el pago de dividendos, la institución de banca múltiple \ndeberá dejar de computar en el Capital Neto el monto de los instrumentos que haya \nexcedido el límite del 50 % del Capital Fundamental conforme a lo siguiente: \n \n(238) i. En primer lugar, la parte en exceso correspondiente a los Instrumentos de Capital \nelegibles para integrar la parte complementaria del Capital Neto que dicha institución \nde banca múltiple tuviera al momento de la determinación del monto en exceso, y \n \n(238) ii. En el evento de que el monto en exceso persista después de haber realizado la \ndeducción a que se refiere el numeral i. anterior, dejará de computar aquellos \nInstrumentos de Capital de la parte del Capital Básico No Fundamental que mantenga \nen ese momento hasta por el exceso correspondiente. \n  \n(238) En todo caso, las instituciones de banca múltiple que hayan dejado de reconocer \nInstrumentos de Capital como parte del Capital Neto podrán volverlos a computar cuando \nel porcentaje de su Coeficiente de Capital Fundamental sea igual o mayor a 10 %. \n \n(238) Para efectos del cálculo de los montos máximos de los Instrumentos de Capital que \nse incluyan como parte del Capital Neto, las instituciones de banca múltiple deberán \nsumar tanto los Instrumentos de Capital correspondientes al Capital Básico No \nFundamental señalados en el presente inciso b) de esta fracción como los Instrumentos \nde Capital a que se refiere la fracción II del artículo 2 Bis 7 de las presentes disposiciones. \n \n(216) Último párrafo.- Derogado.",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 467,
        "contenido": "Los títulos representativos del capital social de la Institución que no hayan sido \nconsiderados en el Capital Fundamental siempre que se cumpla con las condiciones \n    \n \n \n \n \nestablecidas en el Anexo 1-R de las presentes disposiciones, incluyendo, en su caso, su \nprima en venta de acciones, y \n \n(238)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 468,
        "contenido": "Los Instrumentos de Capital siempre que se cumpla con las condiciones establecidas en \nel Anexo 1-R de las presentes disposiciones. \n  \n(238) Tratándose de Instrumentos de Capital emitidos por instituciones de banca múltiple, \nsolamente quedarán incluidos aquellos que en su conjunto, correspondan a un monto en \nmoneda nacional o su equivalente, que no exceda del 50 % del Capital Fundamental de la \ninstitución de banca múltiple de que se trate. \n  \n(238) Como excepción a lo dispuesto en el párrafo anterior, podrán computar en el Capital \nBásico No Fundamental los Instrumentos de Capital que superen el límite señalado, \nsiempre y cuando: \n \n(238) 1. La institución de banca múltiple emisora mantenga un Coeficiente de Capital \nFundamental mayor o igual al 10 %. \n  \n(238) En caso de que dicho Coeficiente de Capital Fundamental se ubique por debajo del \n10 %, como consecuencia de cualquier mecanismo o acto que implique una \ntransferencia de beneficios patrimoniales a las personas a que se refiere el artículo 73 \nde la Ley o bien por el pago de dividendos, la institución de banca múltiple dejará de \ncomputar como Capital Neto el monto de los instrumentos que haya excedido el \nlímite del 50 % del Capital Fundamental señalado en el segundo párrafo del inciso",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 469,
        "contenido": "anterior, y estarán a lo dispuesto en el cuarto párrafo de dicho inciso. \n \n(238) 2. La institución de banca múltiple emisora que cuente con un Coeficiente de Capital \nFundamental inferior a 10 %, en la solicitud de autorización que corresponde otorgar \nal Banco de México conforme al artículo 64 de la Ley, así como en el acta de emisión \no el documento equivalente, en los títulos representativos de dichos Instrumentos de \nCapital, en el prospecto informativo correspondiente y en el acta de asamblea general \nde accionistas que autorice la emisión respectiva, contemple expresamente la \nobligación incondicional a cargo de la institución de banca múltiple emisora de que el \nmonto del Capital Fundamental con el que esta cuente a la fecha en que presente la \nreferida solicitud de autorización, no disminuirá en términos absolutos, en virtud de \ncualquier mecanismo o acto que implique una transferencia de beneficios \npatrimoniales a las personas a que se refiere el artículo 73 de la Ley o bien por el pago \nde dividendos, hasta en tanto dichos Instrumentos de Capital sean amortizados en su \ntotalidad, o mientras mantenga un Coeficiente de Capital Fundamental inferior al 10 \n%. \n  \n(238) Si el Capital Fundamental de la institución de banca múltiple referido en los numerales \n1., y 2., anteriores disminuye como consecuencia de cualquier mecanismo o acto que \n    \n \n \n \n \nimplique una transferencia de beneficios patrimoniales a las personas a que se refiere el \nartículo 73 de la Ley o bien por el pago de dividendos, la institución de banca múltiple \ndeberá dejar de computar en el Capital Neto el monto de los instrumentos que haya \nexcedido el límite del 50 % del Capital Fundamental conforme a lo siguiente: \n \n(238) i. En primer lugar, la parte en exceso correspondiente a los Instrumentos de Capital \nelegibles para integrar la parte complementaria del Capital Neto que dicha institución \nde banca múltiple tuviera al momento de la determinación del monto en exceso, y \n \n(238) ii. En el evento de que el monto en exceso persista después de haber realizado la \ndeducción a que se refiere el numeral i. anterior, dejará de computar aquellos \nInstrumentos de Capital de la parte del Capital Básico No Fundamental que mantenga \nen ese momento hasta por el exceso correspondiente. \n  \n(238) En todo caso, las instituciones de banca múltiple que hayan dejado de reconocer \nInstrumentos de Capital como parte del Capital Neto podrán volverlos a computar cuando \nel porcentaje de su Coeficiente de Capital Fundamental sea igual o mayor a 10 %. \n \n(238) Para efectos del cálculo de los montos máximos de los Instrumentos de Capital que \nse incluyan como parte del Capital Neto, las instituciones de banca múltiple deberán \nsumar tanto los Instrumentos de Capital correspondientes al Capital Básico No \nFundamental señalados en el presente inciso",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 470,
        "contenido": "de esta fracción como los Instrumentos \nde Capital a que se refiere la fracción II del artículo 2 Bis 7 de las presentes disposiciones. \n \n(216) Último párrafo.- Derogado.",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 472,
        "contenido": "Los títulos representativos del capital social de la Institución que no hayan sido considerados \nen el Capital Fundamental ni en el Capital Básico No Fundamental, y siempre que se cumpla \ncon las condiciones establecidas en el Anexo 1-S de las presentes disposiciones, incluyendo, \nen su caso, su prima en venta de acciones. \n \n(238)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 473,
        "contenido": "Los Instrumentos de Capital que no hayan sido considerados en el Capital Básico No \nFundamental y siempre que se cumpla con las condiciones establecidas en el Anexo 1-S de las \npresentes disposiciones. \n  \n(238) Tratándose de Instrumentos de Capital emitidos por instituciones de banca múltiple, \nsolamente quedarán incluidos aquellos que en su conjunto, correspondan a un monto en \nmoneda nacional o su equivalente, que una vez sumado al monto de los instrumentos \n    \n \n \n \n \ndisposiciones, no exceda del monto equivalente al 50 % del Capital Fundamental de la \ninstitución de banca múltiple de que se trate. \n  \n(238) Como excepción a lo dispuesto en el párrafo anterior, podrán computar en la parte \ncomplementaria del Capital Neto los Instrumentos de Capital que superen el límite señalado, \nsiempre y cuando: \n \n(238) a) La institución de banca múltiple emisora mantenga un Coeficiente de Capital \nFundamental mayor o igual al 10 %. \n \n (238) En caso de que dicho Coeficiente de Capital Fundamental se ubique por debajo del 10 \n%, como consecuencia de cualquier mecanismo o acto que implique una transferencia de \nbeneficios patrimoniales a las personas a que se refiere el artículo 73 de la Ley o bien por \nel pago de dividendos, la institución de banca múltiple dejará de computar como Capital \nNeto el monto de los instrumentos que haya excedido el límite del 50 % del Capital \nFundamental señalado en el segundo párrafo de este inciso, y estarán a lo dispuesto en el \ncuarto párrafo de la presente fracción",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 474,
        "contenido": "La institución de banca múltiple emisora mantenga un Coeficiente de Capital \nFundamental mayor o igual al 10 %. \n \n (238) En caso de que dicho Coeficiente de Capital Fundamental se ubique por debajo del 10 \n%, como consecuencia de cualquier mecanismo o acto que implique una transferencia de \nbeneficios patrimoniales a las personas a que se refiere el artículo 73 de la Ley o bien por \nel pago de dividendos, la institución de banca múltiple dejará de computar como Capital \nNeto el monto de los instrumentos que haya excedido el límite del 50 % del Capital \nFundamental señalado en el segundo párrafo de este inciso, y estarán a lo dispuesto en el \ncuarto párrafo de la presente fracción",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 475,
        "contenido": "(238) b) La institución de banca múltiple emisora que cuente con un Coeficiente de Capital \nFundamental inferior a 10 %, en la solicitud de autorización que corresponde otorgar al \nBanco de México conforme al artículo 64 de la Ley, así como en el acta de emisión o el \ndocumento equivalente, en los títulos representativos de dichos Instrumentos de Capital, \nen el prospecto informativo correspondiente y en el acta de asamblea general de \naccionistas que autorice la emisión respectiva, contemplen expresamente la obligación \nincondicional a cargo de la institución de banca múltiple emisora de que el monto del \nCapital Fundamental con el que esta cuente a la fecha en que presente la referida solicitud \nde autorización, no disminuirá en términos absolutos, en virtud de cualquier mecanismo o \nacto que implique una transferencia de beneficios patrimoniales a las personas a que se \nrefiere el artículo 73 de la Ley o bien por el pago de dividendos, hasta en tanto dichos \nInstrumentos de Capital sean amortizados en su totalidad, o mientras mantenga un \nCoeficiente de Capital Fundamental inferior al 10 %. \n  \n(238) Si el Capital Fundamental de la institución de banca múltiple referido en los incisos a) y b) \nanteriores disminuye como consecuencia de cualquier mecanismo o acto que implique una \ntransferencia de beneficios patrimoniales a las personas a que se refiere el artículo 73 de la \nLey o bien por el pago  de dividendos, la referida la institución de banca múltiple deberá dejar \nde computar en el Capital Neto el monto de los instrumentos que haya excedido el límite del \n50 % del Capital Fundamental conforme a lo siguiente: \n \n(238) i. En primer lugar, la parte en exceso correspondiente a los Instrumentos de Capital \nelegibles para integrar la parte complementaria del Capital Neto que dicha institución \ntuviera al momento de la determinación del monto en exceso, y \n \n    \n \n \n \n \n(238) ii. En el evento de que el monto en exceso persista después de haber realizado la deducción \na que se refiere el numeral i. anterior, dejará de computar aquellos Instrumentos de Capital \nde la parte del Capital Básico No Fundamental que mantenga en ese momento hasta por \nel exceso correspondiente. \n  \n(238) En todo caso, las instituciones de banca múltiple que hayan dejado de reconocer \nInstrumentos de Capital como parte del Capital Neto podrán volverlos a computar cuando el \nporcentaje de su Coeficiente de Capital Fundamental sea igual o mayor a 10 %. \n  \n(238) El importe de los instrumentos referidos en esta fracción computará como capital \ncomplementario en función del plazo por vencer o de la correspondiente amortización, de \nconformidad con lo siguiente: \n \n \n(238) Plazos y Porcentajes, Parte Complementaria  \n \nP lazo en años respecto de la fecha de \nlas correspondientes \namortizaciones o vencimientos \nPorcentajes del saldo \ninsoluto \nMás de 5 \nMás de 4 y hasta 5 \nMás de 3 y hasta 4 \nMás de 2 y hasta 3 \nMás de 1 y hasta 2 \nHasta 1 \n100 \n80 \n60 \n40 \n20 \n0 \n \n(130)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 476,
        "contenido": "La institución de banca múltiple emisora que cuente con un Coeficiente de Capital \nFundamental inferior a 10 %, en la solicitud de autorización que corresponde otorgar al \nBanco de México conforme al artículo 64 de la Ley, así como en el acta de emisión o el \ndocumento equivalente, en los títulos representativos de dichos Instrumentos de Capital, \nen el prospecto informativo correspondiente y en el acta de asamblea general de \naccionistas que autorice la emisión respectiva, contemplen expresamente la obligación \nincondicional a cargo de la institución de banca múltiple emisora de que el monto del \nCapital Fundamental con el que esta cuente a la fecha en que presente la referida solicitud \nde autorización, no disminuirá en términos absolutos, en virtud de cualquier mecanismo o \nacto que implique una transferencia de beneficios patrimoniales a las personas a que se \nrefiere el artículo 73 de la Ley o bien por el pago de dividendos, hasta en tanto dichos \nInstrumentos de Capital sean amortizados en su totalidad, o mientras mantenga un \nCoeficiente de Capital Fundamental inferior al 10 %. \n  \n(238) Si el Capital Fundamental de la institución de banca múltiple referido en los incisos",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 477,
        "contenido": "y",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 478,
        "contenido": "anteriores disminuye como consecuencia de cualquier mecanismo o acto que implique una \ntransferencia de beneficios patrimoniales a las personas a que se refiere el artículo 73 de la \nLey o bien por el pago  de dividendos, la referida la institución de banca múltiple deberá dejar \nde computar en el Capital Neto el monto de los instrumentos que haya excedido el límite del \n50 % del Capital Fundamental conforme a lo siguiente: \n \n(238) i. En primer lugar, la parte en exceso correspondiente a los Instrumentos de Capital \nelegibles para integrar la parte complementaria del Capital Neto que dicha institución \ntuviera al momento de la determinación del monto en exceso, y \n \n    \n \n \n \n \n(238) ii. En el evento de que el monto en exceso persista después de haber realizado la deducción \na que se refiere el numeral i. anterior, dejará de computar aquellos Instrumentos de Capital \nde la parte del Capital Básico No Fundamental que mantenga en ese momento hasta por \nel exceso correspondiente. \n  \n(238) En todo caso, las instituciones de banca múltiple que hayan dejado de reconocer \nInstrumentos de Capital como parte del Capital Neto podrán volverlos a computar cuando el \nporcentaje de su Coeficiente de Capital Fundamental sea igual o mayor a 10 %. \n  \n(238) El importe de los instrumentos referidos en esta fracción computará como capital \ncomplementario en función del plazo por vencer o de la correspondiente amortización, de \nconformidad con lo siguiente: \n \n \n(238) Plazos y Porcentajes, Parte Complementaria  \n \nP lazo en años respecto de la fecha de \nlas correspondientes \namortizaciones o vencimientos \nPorcentajes del saldo \ninsoluto \nMás de 5 \nMás de 4 y hasta 5 \nMás de 3 y hasta 4 \nMás de 2 y hasta 3 \nMás de 1 y hasta 2 \nHasta 1 \n100 \n80 \n60 \n40 \n20 \n0 \n \n(130)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "III",
        "id": 479,
        "contenido": "La diferencia positiva que resulte de restar a las Reservas Admisibles Totales las Pérdidas \nEsperadas Totales, hasta por un monto que no exceda del 0.6 por ciento de los activos \nponderados por riesgo de crédito. \n \n(130) Para efectos de lo anterior, se utilizará el monto de los activos ponderados por riesgo de \ncrédito del mes para el que se esté realizando el cómputo. \n \n(180) Último párrafo.- Derogado.",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 481,
        "contenido": "Tratándose de títulos de deuda, en el grupo a que corresponda el emisor, y \n \n(178)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 482,
        "contenido": "En el caso de inversiones en acciones, estas formarán parte del grupo IX al que se refiere el \n \n(178) Lo señalado en este artículo será aplicable solamente cuando el fondo de pensiones de la",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 485,
        "contenido": "El Método Estándar indicado en la Sección Segunda del presente capítulo. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 486,
        "contenido": "Alguno de los métodos basados en calificaciones internas, básico o avanzado, siempre y \ncuando obtengan autorización previa de la Comisión para el efecto, quien la podrá otorgar una \nvez que la Institución haya cumplido con los requisitos a que se refiere la Sección Tercera del \npresente capítulo. \n \n(50) En todo caso, una vez autorizado el uso del método basado en calificaciones internas, \nbásico o avanzado, para un tipo de cartera en particular, las Instituciones no podrán utilizar \notro método, salvo cuando la Comisión así se los autorice o así lo determine. \n \n \n(50) Sección Segunda \n(50) Método Estándar \n \n(50) Apartado A \n(50) Aspectos Generales",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 488,
        "contenido": "Caja. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 489,
        "contenido": "Operaciones Sujetas a Riesgo de Crédito con o a cargo del Banco de México. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "III",
        "id": 490,
        "contenido": "Operaciones Sujetas a Riesgo de Crédito con o a cargo del Gobierno Federal. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "IV",
        "id": 491,
        "contenido": "Operaciones Sujetas a Riesgo de Crédito con o a cargo del IPAB. \n \n(163)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "V",
        "id": 492,
        "contenido": "Derogada. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "VI",
        "id": 493,
        "contenido": "Operaciones Sujetas a Riesgo de Crédito con o a cargo de cualquiera de los siguientes \norganismos: Banco de Pagos Internacionales, Fondo Monetario Internacional, Banco Central \nEuropeo y Comunidad Europea. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "VII",
        "id": 494,
        "contenido": "Las demás Operaciones autorizadas que se asimilen a este grupo conforme a lo establecido \n \n(50) Las Operaciones y activos con o a cargo de las personas comprendidas en este grupo, tendrán \nuna ponderación por riesgo de crédito de 0 (cero) por ciento. \n \n    \n \n \n \n \n \n(162)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 495,
        "contenido": "Tipo de Operaciones. \n \n(162) a) Derivados negociados a través de: \n \n(162) i) Bolsas de derivados establecidas en México; \n \n(178) ii) Bolsas de derivados del exterior. \n \n(162) b) Derivados negociados a través de: \n \n(162) i) Sociedades que administran sistemas para facilitar operaciones con valores \nautorizadas por esta Comisión y que permitan la difusión de cotizaciones para la \nnegociación y celebración de operaciones derivadas; \n \n(162) ii) Instituciones del exterior que realicen funciones similares a las que llevan a cabo \nlas entidades señaladas en el numeral i) anterior y que reconozca esta Comisión. \n \n(162) Las operaciones mencionadas en los incisos anteriores tendrán un factor de ponderación del \n2% siempre y cuando se liquiden en cámaras de compensación que cuenten con los requisitos \nsiguientes: que estén autorizadas por la Secretaría o, tratándose de cámaras de compensación \nestablecidas en el exterior, que sean reconocidas por el Banco de México o que estén establecidas \nen países cuyas autoridades financieras sean miembros designados para conformar el consejo de \nla Organización Internacional de Comisiones de Valores y sobre las que dichas autoridades \npúblicamente reconozcan que aplican una supervisión que sea congruente con los Principios para \nlas Infraestructuras del Mercado Financiero publicados conjuntamente por la Organización \nreferida y por el Comité de Sistemas de Pago y Liquidación del Banco de Pagos Internacionales. \n \n(162) Las Operaciones que sean liquidadas en cámaras de compensación que no observen lo \nBis 14 de las presentes disposiciones en caso de encontrarse constituidas en México, o de \n \n(162) Cuando las instituciones efectúen las operaciones relativas al inciso a) y b) por cuenta de \nterceros y estén obligadas a indemnizar al cliente por las pérdidas que se deriven del \nincumplimiento de la cámara de compensación, también ponderarán al 2%. \n \n(162) Sin perjuicio de lo anterior, las autoridades financieras mexicanas, considerando la equivalencia \nregulatoria con las cámaras de compensación autorizadas por ellas mismas, podrán excluir del \ntratamiento señalado en el primer párrafo de la presente fracción a las cámaras de compensación \nque pertenezcan a países que sean miembros designados por el consejo de la Organización \nInternacional de Comisiones de Valores. En este caso, las Instituciones tendrán un periodo de hasta \ntres meses para sujetarse al tratamiento señalado en el párrafo anterior después de la fecha en \n    \n \n \n \n \nque dicha cámara fue excluida del tratamiento. El periodo podrá ser modificado por las propias \nautoridades mediante comunicado expreso. \n \n(162) En todo caso, el valor de conversión a riesgo crediticio se calculará de conformidad con lo \ndispuesto en el Anexo 1-L de estas disposiciones, por lo que las operaciones celebradas por cuenta \nde un mismo cliente también podrán compensarse según lo dispuesto en dicho anexo. \n \n(162) Cuando la Institución no pueda realizar directamente operaciones por cuenta propia ante una \ncámara de compensación y, a través de un socio liquidador actúe como cliente ante la cámara, \nestas operaciones tendrán una ponderación del 4 por ciento en caso de que la Institución no esté \nprotegida ante el incumplimiento del socio liquidador, siempre que dicha cámara cuente con los \nmecanismos de segregación de operaciones y garantías, así como la posibilidad de que el socio \nliquidador transfiera estas operaciones ante un escenario de incumplimiento. Para aquellas \nOperaciones en las que además de contar con los mecanismos de segregación y transferencia \nmencionados, la Institución esté protegida ante el incumplimiento del socio liquidador, estas \noperaciones tendrán una ponderación del 2 por ciento. Las Operaciones que no queden \ncomprendidas en ninguno de los dos casos anteriores formarán parte de las Operaciones \n \n(179) Para determinar el ponderador de las Operaciones a las que se refiere el presente artículo, las \n2 Bis 22 de las presentes disposiciones.",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 496,
        "contenido": "Derivados negociados a través de: \n \n(162)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "i",
        "id": 497,
        "contenido": "Bolsas de derivados establecidas en México; \n \n(178) i",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "i",
        "id": 498,
        "contenido": "Bolsas de derivados del exterior. \n \n(162)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 499,
        "contenido": "Derivados negociados a través de: \n \n(162)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "i",
        "id": 500,
        "contenido": "Sociedades que administran sistemas para facilitar operaciones con valores \nautorizadas por esta Comisión y que permitan la difusión de cotizaciones para la \nnegociación y celebración de operaciones derivadas; \n \n(162) i",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "i",
        "id": 501,
        "contenido": "Instituciones del exterior que realicen funciones similares a las que llevan a cabo \nlas entidades señaladas en el numeral",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "i",
        "id": 502,
        "contenido": "anterior y que reconozca esta Comisión. \n \n(162) Las operaciones mencionadas en los incisos anteriores tendrán un factor de ponderación del \n2% siempre y cuando se liquiden en cámaras de compensación que cuenten con los requisitos \nsiguientes: que estén autorizadas por la Secretaría o, tratándose de cámaras de compensación \nestablecidas en el exterior, que sean reconocidas por el Banco de México o que estén establecidas \nen países cuyas autoridades financieras sean miembros designados para conformar el consejo de \nla Organización Internacional de Comisiones de Valores y sobre las que dichas autoridades \npúblicamente reconozcan que aplican una supervisión que sea congruente con los Principios para \nlas Infraestructuras del Mercado Financiero publicados conjuntamente por la Organización \nreferida y por el Comité de Sistemas de Pago y Liquidación del Banco de Pagos Internacionales. \n \n(162) Las Operaciones que sean liquidadas en cámaras de compensación que no observen lo \nBis 14 de las presentes disposiciones en caso de encontrarse constituidas en México, o de \n \n(162) Cuando las instituciones efectúen las operaciones relativas al inciso",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 503,
        "contenido": "y",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 504,
        "contenido": "por cuenta de \nterceros y estén obligadas a indemnizar al cliente por las pérdidas que se deriven del \nincumplimiento de la cámara de compensación, también ponderarán al 2%. \n \n(162) Sin perjuicio de lo anterior, las autoridades financieras mexicanas, considerando la equivalencia \nregulatoria con las cámaras de compensación autorizadas por ellas mismas, podrán excluir del \ntratamiento señalado en el primer párrafo de la presente fracción a las cámaras de compensación \nque pertenezcan a países que sean miembros designados por el consejo de la Organización \nInternacional de Comisiones de Valores. En este caso, las Instituciones tendrán un periodo de hasta \ntres meses para sujetarse al tratamiento señalado en el párrafo anterior después de la fecha en \n    \n \n \n \n \nque dicha cámara fue excluida del tratamiento. El periodo podrá ser modificado por las propias \nautoridades mediante comunicado expreso. \n \n(162) En todo caso, el valor de conversión a riesgo crediticio se calculará de conformidad con lo \ndispuesto en el Anexo 1-L de estas disposiciones, por lo que las operaciones celebradas por cuenta \nde un mismo cliente también podrán compensarse según lo dispuesto en dicho anexo. \n \n(162) Cuando la Institución no pueda realizar directamente operaciones por cuenta propia ante una \ncámara de compensación y, a través de un socio liquidador actúe como cliente ante la cámara, \nestas operaciones tendrán una ponderación del 4 por ciento en caso de que la Institución no esté \nprotegida ante el incumplimiento del socio liquidador, siempre que dicha cámara cuente con los \nmecanismos de segregación de operaciones y garantías, así como la posibilidad de que el socio \nliquidador transfiera estas operaciones ante un escenario de incumplimiento. Para aquellas \nOperaciones en las que además de contar con los mecanismos de segregación y transferencia \nmencionados, la Institución esté protegida ante el incumplimiento del socio liquidador, estas \noperaciones tendrán una ponderación del 2 por ciento. Las Operaciones que no queden \ncomprendidas en ninguno de los dos casos anteriores formarán parte de las Operaciones \n \n(179) Para determinar el ponderador de las Operaciones a las que se refiere el presente artículo, las \n2 Bis 22 de las presentes disposiciones.",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 506,
        "contenido": "Operaciones Sujetas a Riesgo de Crédito con o a cargo de gobiernos centrales de países \nextranjeros y/o sus bancos centrales. \n \n(108)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 507,
        "contenido": "Operaciones Sujetas a Riesgo de Crédito con o a cargo de organismos multilaterales de \ndesarrollo o fomento de carácter internacional. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "III",
        "id": 508,
        "contenido": "Las demás Operaciones autorizadas que se asimilen a este grupo conforme a lo establecido \n \n(50) Las Operaciones con o a cargo de las personas comprendidas en este grupo deberán ser \nponderadas conforme al Grado de Riesgo a que corresponda la Calificación crediticia asignada por \nalguna de las Instituciones Calificadoras al emisor o contraparte de que se trate, según lo dispuesto \nen el Anexo 1-B. En caso de no existir Calificación para el emisor o la contraparte de que se trate, \nla ponderación por riesgo de crédito será la indicada en el referido Anexo 1-B para Operaciones \ndel grupo II no calificadas. \n \n    \n \n \n \n \n(161) Las Operaciones señaladas en la fracción II de este artículo que se realicen con organismos \nmultilaterales de desarrollo o fomento de carácter internacional incluidos en el listado al que se \nrefiere el párrafo siguiente, que cumplan con los requisitos establecidos en el Anexo 1-C de las \npresentes disposiciones, tendrán una ponderación por riesgo de crédito de 0 (cero) por ciento.  \n \n(108) La Comisión dará a conocer en la red electrónica mundial denominada Internet en el sitio \nhttp://www.cnbv.gob.mx, la lista de los organismos multilaterales de desarrollo o fomento de \ncarácter internacional que estarán comprendidos en este artículo.",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 510,
        "contenido": "Depósitos y Operaciones Sujetas a Riesgo de Crédito con o a cargo de entidades financieras \nfiliales de instituciones de banca múltiple o entidades financieras del grupo financiero al que \npertenezca la institución de banca múltiple, incluidas las entidades financieras filiales de éstas. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 511,
        "contenido": "Depósitos y Operaciones Sujetas a Riesgo de Crédito con o a cargo de instituciones de banca \nmúltiple y de casas de bolsa, constituidas en México. \n \n(88)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "III",
        "id": 512,
        "contenido": "Depósitos y Operaciones Sujetas a Riesgo de Crédito con o a cargo de instituciones de \nseguros autorizadas en México. \n \n(88)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "IV",
        "id": 513,
        "contenido": "Las demás Operaciones autorizadas que se asimilen a este grupo conforme a lo establecido \n \n(161)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "V",
        "id": 514,
        "contenido": "Depósitos y Operaciones Sujetas a Riesgo de Crédito con o a cargo de entidades \nconstituidas en México a las que hacen referencia los incisos a) y b) de la fracción I del artículo \n2 Bis 12.a de las presentes disposiciones que sean liquidadas en cámaras de compensación \nque no observen lo señalado en el segundo párrafo del citado artículo. \n \n(50) Las Operaciones con o a cargo de las personas comprendidas en este grupo deberán ser \nponderadas conforme al Grado de Riesgo a que corresponda la Calificación crediticia asignada por \nalguna de las Instituciones Calificadoras al emisor o contraparte de que se trate, según lo dispuesto \nen el Anexo 1-B. En caso de no existir Calificación para el emisor o la contraparte de que se trate, \nla ponderación por riesgo de crédito será la indicada en el referido Anexo 1-B para Operaciones \ndel grupo III no calificadas. \n \n(161) Asimismo, las Operaciones con o a cargo de instituciones de banca múltiple que no cuenten \ncon al menos dos calificaciones o que estas instituciones no las revelen conforme a lo establecido \nen la Sección Segunda del Capítulo VII del presente título, estarán sujetas a una ponderación por \nriesgo de crédito de 100 por ciento.",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 515,
        "contenido": "y",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 516,
        "contenido": "de la fracción I del artículo \n2 Bis 12.a de las presentes disposiciones que sean liquidadas en cámaras de compensación \nque no observen lo señalado en el segundo párrafo del citado artículo. \n \n(50) Las Operaciones con o a cargo de las personas comprendidas en este grupo deberán ser \nponderadas conforme al Grado de Riesgo a que corresponda la Calificación crediticia asignada por \nalguna de las Instituciones Calificadoras al emisor o contraparte de que se trate, según lo dispuesto \nen el Anexo 1-B. En caso de no existir Calificación para el emisor o la contraparte de que se trate, \nla ponderación por riesgo de crédito será la indicada en el referido Anexo 1-B para Operaciones \ndel grupo III no calificadas. \n \n(161) Asimismo, las Operaciones con o a cargo de instituciones de banca múltiple que no cuenten \ncon al menos dos calificaciones o que estas instituciones no las revelen conforme a lo establecido \nen la Sección Segunda del Capítulo VII del presente título, estarán sujetas a una ponderación por \nriesgo de crédito de 100 por ciento.",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 518,
        "contenido": "Depósitos y Operaciones Sujetas a Riesgo de Crédito con o a cargo de instituciones de banca \nde desarrollo. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 519,
        "contenido": "Operaciones Sujetas a Riesgo de Crédito con o a cargo de fideicomisos públicos constituidos \npor el Gobierno Federal para el fomento económico. \n \n(161)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "III",
        "id": 520,
        "contenido": "Operaciones Sujetas a Riesgo de Crédito con o a cargo de organismos descentralizados del \nGobierno Federal y empresas productivas del Estado. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "IV",
        "id": 521,
        "contenido": "Las demás Operaciones autorizadas que se asimilen a este grupo conforme a lo establecido \n \n(50) Las Operaciones comprendidas en este grupo tendrán una ponderación por riesgo de crédito \nde 20 por ciento. \n \nSin perjuicio de lo establecido en el párrafo anterior, las Operaciones Sujetas a Riesgo de Crédito \ncon o a cargo de instituciones de banca de desarrollo en las que, conforme a sus respectivas leyes \norgánicas, el Gobierno Federal responda en todo tiempo por dichas operaciones, tendrán una \nponderación por riesgo de crédito de 0 (cero) por ciento.",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 523,
        "contenido": "El 20 por ciento si se encuentran registrados ante la Secretaría, cuentan con Calificaciones de \nal menos dos Instituciones Calificadoras autorizadas por la Comisión y la calificación otorgada \nal estado, municipio u organismo descentralizado de que se trate corresponde al menos a la \nsegunda categoría de Calificación siguiente inferior a la Calificación otorgada al Gobierno \nFederal, según la escala que corresponda, corto plazo o largo plazo y deuda en pesos o deuda \nen moneda extranjera. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 524,
        "contenido": "El 50 por ciento si se encuentran registrados ante la Secretaría, cuentan con Calificaciones \nde al menos dos Instituciones Calificadoras autorizadas por la Comisión y la Calificación \notorgada al estado, municipio u organismo descentralizado de que se trate se encuentra en la \ntercera o cuarta categoría de Calificación siguiente inferior a la Calificación otorgada al \n    \n \n \n \n \nGobierno Federal, según la escala que corresponda, corto plazo o largo plazo y deuda en pesos \no deuda en moneda extranjera. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "III",
        "id": 525,
        "contenido": "El 115 por ciento si se encuentran registrados ante la Secretaría, cuentan con Calificaciones \nde al menos dos Instituciones Calificadoras autorizadas por la Comisión y la Calificación \notorgada al estado, municipio u organismo descentralizado de que se trate es menor a la \ncuarta categoría de Calificación siguiente inferior a la Calificación otorgada al Gobierno \nFederal, según la escala que corresponda, corto plazo o largo plazo y deuda en pesos o deuda \nen moneda extranjera. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "IV",
        "id": 526,
        "contenido": "El 150 por ciento si no se encuentran registrados ante la Secretaría o no cuentan con al \nmenos dos calificaciones de dos Instituciones Calificadoras autorizadas por la Comisión. \n \n(50) Para determinar la diferencia entre las categorías de calificación a que se refieren las fracciones \nI, II y III anteriores, se tomarán las Calificaciones de aquella Institución Calificadora que registre la \nmayor diferencia entre la categoría relativa al Gobierno Federal y la categoría relativa al Estado, \nmunicipio u organismo descentralizado de que se trate. \n \n(50) Los créditos y valores a cargo de municipios o sus organismos descentralizados que no cuenten \ncon Calificación propia, pero que estén avalados o garantizados por el estado al que pertenezcan, \ntendrán el porcentaje de ponderación que corresponda a dicho estado por una operación similar, \nconforme a los numerales I a IV anteriores. \n \n(50) Para efectos de lo establecido en las fracciones I a IV anteriores se entenderá como categoría \nde calificación siguiente inferior al grado de Calificación otorgado por las Instituciones \nCalificadoras reconocidas por la Comisión, representado por letras, que a su vez podrán tener \ndiferentes niveles representados por números y/o signos que representen una Calificación menor \ninmediata respecto a otra determinada, con base en las variaciones de las letras. \n \n(227) Sin perjuicio de lo establecido en el presente artículo, aquellas Operaciones Sujetas a Riesgo \nde Crédito con o a cargo de la Ciudad de México que correspondan a Financiamientos originados \nde conformidad con lo dispuesto en el artículo 33 de la Ley de Disciplina Financiera de las Entidades \nFederativas y los Municipios y cuenten con la garantía del Gobierno Federal, o bien que \ncorrespondan a deuda estatal garantizada en los términos del Capítulo IV del Título Tercero de la \nley citada, tendrán una ponderación por riesgo de crédito de 0 (cero) por ciento.",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "I",
        "id": 528,
        "contenido": "Créditos al Consumo. \n \n(50) Los Créditos al Consumo que satisfagan los criterios siguientes podrán ser considerados \ncomo créditos al menudeo a efecto del requerimiento de capital por riesgo de crédito \nconforme al presente artículo: \n    \n \n \n \n \n \n(50) a) Criterio de producto. \n \n(50)  Las Instituciones deberán considerar a las Operaciones cuyo riesgo se encuentra \nreferido a créditos directos, denominados en moneda nacional, extranjera o en UDIs, así \ncomo los intereses que generen, otorgados a personas físicas, personas físicas con \nactividad empresarial o personas morales, provenientes de operaciones de tarjeta de \ncrédito, de créditos personales, de créditos para la adquisición de bienes de consumo \nduradero y las operaciones de arrendamiento financiero que sean celebradas con las \npersonas antes mencionadas, incluyendo aquellos créditos otorgados para tales efectos \na los ex-empleados de las Instituciones. \n \n(50) b) Criterio de concentración.  \n \nLas Instituciones deberán considerar a las Operaciones cuyo riesgo se encuentra agregado \nfrente a una misma contraparte y dichas Operaciones no exceden del 1 por ciento del \ntotal de la cartera de menudeo. \n \n(50) c) Valor de las posiciones individuales.  \n \n(214) Las Instituciones deberán considerar a las Operaciones cuyo riesgo agregado frente a \nuna misma contraparte no excedan de un importe equivalente en moneda nacional a 4 \nmillones de UDIs o bien cuando el acreditado demuestre Ingresos Netos o Ventas Netas \nanuales menores al equivalente en moneda nacional a 14 millones de UDIs. \n \n(214) Para determinar el riesgo agregado señalado en el presente inciso se deberá utilizar el \nvalor de la UDI a la fecha para la cual se realiza el cálculo del cómputo de capital \nconsiderando para ello su equivalencia en moneda nacional publicada por el Banco de \nMéxico en el Diario Oficial de la Federación. \n \n(214) Por su parte, para determinar si los Ingresos Netos o Ventas Netas anuales del \nacreditado son menores al umbral señalado, las Instituciones deberán utilizar el valor de \nla UDI a la fecha a que corresponda al estado financiero anual del acreditado al que se \n \n(214) Los créditos comprendidos en este grupo tendrán una ponderación por riesgo de \ncrédito del 100 por ciento. \n \n(214) No obstante lo anterior, tratándose de Operaciones Sujetas a Riesgo de Crédito con \no a cargo de personas morales, o físicas con actividad empresarial, cuyo importe esté \ncomprendido en el inciso c) anterior y que cuenten con una Calificación crediticia asignada \npor alguna de las Instituciones Calificadoras al emisor o contraparte de que se trate, el \n    \n \n \n \n \nponderador por riesgo será determinado conforme al grupo VII-A referido en el Artículo 2 \nBis 18. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 529,
        "contenido": "Criterio de producto. \n \n(50)  Las Instituciones deberán considerar a las Operaciones cuyo riesgo se encuentra \nreferido a créditos directos, denominados en moneda nacional, extranjera o en UDIs, así \ncomo los intereses que generen, otorgados a personas físicas, personas físicas con \nactividad empresarial o personas morales, provenientes de operaciones de tarjeta de \ncrédito, de créditos personales, de créditos para la adquisición de bienes de consumo \nduradero y las operaciones de arrendamiento financiero que sean celebradas con las \npersonas antes mencionadas, incluyendo aquellos créditos otorgados para tales efectos \na los ex-empleados de las Instituciones. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 530,
        "contenido": "Criterio de concentración.  \n \nLas Instituciones deberán considerar a las Operaciones cuyo riesgo se encuentra agregado \nfrente a una misma contraparte y dichas Operaciones no exceden del 1 por ciento del \ntotal de la cartera de menudeo. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 531,
        "contenido": "Valor de las posiciones individuales.  \n \n(214) Las Instituciones deberán considerar a las Operaciones cuyo riesgo agregado frente a \nuna misma contraparte no excedan de un importe equivalente en moneda nacional a 4 \nmillones de UDIs o bien cuando el acreditado demuestre Ingresos Netos o Ventas Netas \nanuales menores al equivalente en moneda nacional a 14 millones de UDIs. \n \n(214) Para determinar el riesgo agregado señalado en el presente inciso se deberá utilizar el \nvalor de la UDI a la fecha para la cual se realiza el cálculo del cómputo de capital \nconsiderando para ello su equivalencia en moneda nacional publicada por el Banco de \nMéxico en el Diario Oficial de la Federación. \n \n(214) Por su parte, para determinar si los Ingresos Netos o Ventas Netas anuales del \nacreditado son menores al umbral señalado, las Instituciones deberán utilizar el valor de \nla UDI a la fecha a que corresponda al estado financiero anual del acreditado al que se \n \n(214) Los créditos comprendidos en este grupo tendrán una ponderación por riesgo de \ncrédito del 100 por ciento. \n \n(214) No obstante lo anterior, tratándose de Operaciones Sujetas a Riesgo de Crédito con \no a cargo de personas morales, o físicas con actividad empresarial, cuyo importe esté \ncomprendido en el inciso",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 532,
        "contenido": "anterior y que cuenten con una Calificación crediticia asignada \npor alguna de las Instituciones Calificadoras al emisor o contraparte de que se trate, el \n    \n \n \n \n \nponderador por riesgo será determinado conforme al grupo VII-A referido en el Artículo 2 \nBis 18. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "II",
        "id": 533,
        "contenido": "Créditos Hipotecarios de Vivienda. \n \n(50)Los Créditos Hipotecarios de Vivienda  que satisfagan el criterio de producto que se \nestablece a continuación: El riesgo se materializa en cualquiera de las siguientes formas: \ncréditos directos denominados en cualquier moneda así como los intereses que éstos generen, \notorgados a personas físicas y destinados a la adquisición, construcción, remodelación o \nmejoramiento de la vivienda sin propósito de especulación comercial, así como los créditos de \nliquidez garantizados por la vivienda del acreditado; incluyendo aquellos créditos otorgados \npara tales efectos a los empleados y ex-empleados de las Instituciones. \n \n(50) Los créditos comprendidos en este grupo no serán sujetos de reconocimiento de garantías \nreales o personales distintas a las señaladas en este numeral. \n \n(50) Los Créditos Hipotecarios de Vivienda tendrán una ponderación por riesgo de crédito del \n100 por ciento. \n \n(188) No obstante lo anterior, los Créditos Hipotecarios de Vivienda que cumplan con los \nrequisitos previstos por los incisos a) a f) siguientes, según corresponda, tendrán una \nponderación por riesgo de crédito del 50 o 75 por ciento, según sea el caso: \n \n(50) a) Tratándose de Créditos Hipotecarios de Vivienda otorgados a tasa fija, o bien, a tasa \nvariable que se encuentre sujeta a una tasa máxima, que cuenten con un Enganche \nexpresado como porcentaje del valor de la vivienda igual o mayor al 30 por ciento, tendrán \nuna ponderación por riesgo de crédito de 50 por ciento; mientras que los Créditos \nHipotecarios de Vivienda que cuenten con un Enganche expresado como porcentaje del \nvalor de la vivienda mayor al 20 por ciento y menor al 30 por ciento del Valor de la \nVivienda, tendrán una ponderación por riesgo de crédito de 75 por ciento. \n \n(50) En todo caso, los créditos citados en el párrafo anterior deberán amortizar el principal a \npartir de la originación del crédito y no deberán prever capitalización de intereses. \n \n(130) b) Los Créditos Hipotecarios de Vivienda que cuenten con una garantía otorgada por \nalguna institución de banca de desarrollo o por un fideicomiso público constituido por el \nGobierno Federal para el fomento económico, o bien, que cuenten con un Seguro de \nCrédito, siempre y cuando la institución de seguros cuente, a la fecha del cómputo de \ncapitalización, con Calificación de Grado de Inversión o superior emitida por al menos una \ndel Instituto del Fondo Nacional de la Vivienda para los Trabajadores o con un esquema \nde cofinanciamiento con el Fondo de la Vivienda del Instituto de Seguridad y Servicios \n    \n \n \n \n \nSociales de los Trabajadores del Estado, tendrán una ponderación por riesgo del 50 por \nciento. \n \n(50) En todo caso, los créditos citados en el párrafo anterior deberán contemplar lo \nsiguiente: \n \n(130) 1. Tratándose de Créditos Hipotecarios de Vivienda que cuenten con un Seguro de \nCrédito o garantía otorgada por alguna institución de banca de desarrollo o \nfideicomisos públicos constituidos por el Gobierno Federal para el fomento \neconómico: \n \n(130) i. En Esquemas de Cobertura en Paso y Medida, dichas garantías deberán contar \ncon una cobertura de cuando menos el 50 por ciento del saldo insoluto del crédito. \n \n(130) ii. En Esquemas de Cobertura de Primeras Pérdidas con garantías o Seguro de \nCrédito expresados en UDIs o en moneda nacional, la suma del Enganche \nexpresado como porcentaje del valor de la vivienda más el porcentaje del \nEsquema de Cobertura de la garantía o del Seguro de Crédito, expresado como \nporcentaje del saldo inicial del crédito, según sea el caso, deberá representar \ncuando menos el 30 por ciento del Valor de la Vivienda. \n \n(50) 2. Tratándose de Créditos Hipotecarios de Vivienda que cuenten con un esquema de \nVivienda para los Trabajadores o con un esquema de cofinanciamiento con el Fondo \nde la Vivienda del Instituto de Seguridad y Servicios Sociales de los Trabajadores del \nEstado: \n \n(130) i. \nexpresado como porcentaje del valor de la vivienda y en su caso las garantías, o \nbien, el Seguro de Crédito bajo Esquemas de Cobertura de Primeras Pérdidas, \nexpresado como porcentaje del saldo inicial del crédito, deberán representar \ncuando menos el 30 por ciento del valor de la vivienda para créditos denominados \nen UDIs o en moneda nacional. Al respecto, la subcuenta de vivienda del \nbeneficiario que funge como garantía del crédito se considerará como el \nequivalente a una cobertura de garantía por el valor de la subcuenta a la fecha de \nescrituración y podrá ser sumado al Enganche y, en su caso, a la garantía o Seguro \nde Crédito, según sea el caso. \n \n(130) ii. \nde la vivienda y, en su caso, las garantías o Seguro de Crédito bajo Esquemas de \nCobertura de Primeras Pérdidas expresado como porcentaje del saldo inicial del \n    \n \n \n \n \ncrédito deberán representar cuando menos el 30 por ciento del Valor de la \nVivienda para créditos denominados en UDIS o en moneda nacional. \n \n(130) c) Los Créditos Hipotecarios de Vivienda que cuenten con una garantía otorgada por \nalguna institución de banca de desarrollo o por un fideicomiso público constituido por el \nGobierno Federal para el fomento económico, o bien, que cuenten con un Seguro de \nCrédito, siempre y cuando la institución de seguros tenga a la fecha del cómputo de \ncapitalización una Calificación de Grado de Inversión o superior emitida por al menos una \ndel Instituto del Fondo Nacional de la Vivienda para los Trabajadores, o con un esquema \nde cofinanciamiento con el Fondo de la Vivienda del Instituto de Seguridad y Servicios \nSociales de los Trabajadores del Estado, tendrán una ponderación por riesgo de crédito \ndel 75 por ciento. \n \n(50) En todo caso os créditos citados en el párrafo anterior deberán contemplar lo siguiente: \n \n(130)1. Tratándose de créditos con Seguro de Crédito o garantía otorgada por la banca de \ndesarrollo o fideicomisos públicos constituidos por el Gobierno Federal para el \nfomento: \n \n(130) i. Con Esquemas de Cobertura en Paso y Medida, dichas garantías deberán contar \ncon una cobertura mayor o igual al 25 por ciento del saldo insoluto del crédito y \nmenor al 50 por ciento. \n \n(130) ii. Con garantías o Seguro de Crédito bajo Esquemas de Cobertura de Primeras \nPérdidas, expresados en UDIs o en moneda nacional, la suma del Enganche, \nexpresado como porcentaje del valor de la vivienda más el porcentaje del \nesquema de cobertura de la garantía o el Seguro de Crédito, expresado como \nporcentaje del saldo inicial del crédito, según sea el caso, deberá ser igual o mayor \nal 20 por ciento y menor al 30 por ciento del Valor de la Vivienda. \n \nInstituto del Fondo Nacional de la Vivienda para los Trabajadores, o bien, con un \nesquema de cofinanciamiento con el Fondo de la Vivienda del Instituto de Seguridad \ny Servicios Sociales de los Trabajadores del Estado, conforme a lo siguiente: \n \n(130) i. do como porcentaje \ndel valor de la vivienda y, en su caso, las garantías o Seguro de Crédito otorgados \nbajo un Esquema de Cobertura de Primeras Pérdidas, expresado como porcentaje \ndel saldo inicial del crédito, deberán ser iguales o mayores al 20 por ciento y \nmenores al 30 por ciento del Valor de la Vivienda para créditos denominados en \nUDIs o en moneda nacional. Asimismo, la subcuenta de vivienda del beneficiario \nque funge como garantía del crédito deberá considerarse como el equivalente a \n    \n \n \n \n \nuna cobertura de garantía por el valor de la subcuenta a la fecha de escrituración \ny podrá ser sumado al Enganche y, en su caso, a la garantía o Seguro de Crédito. \n \n(130) \no como porcentaje del valor de la vivienda y, \nen su caso, las garantías o Seguro de Crédito otorgados bajo el Esquema de \nCobertura de Primeras Pérdidas, expresado como porcentaje del saldo inicial del \ncrédito, deberán ser iguales o mayores al 20 y menores al 30 por ciento del Valor \nde la Vivienda para créditos denominados en UDIs o en moneda nacional. \n \n(130) d) Los Créditos Hipotecarios de Vivienda que en su originación no hubieren contado con \ngarantías o Seguro de Crédito, pero que a la fecha del cómputo de capitalización se tenga \nevidencia que cuentan con dichas garantías o seguros, según lo establecido en los incisos \nb) o c) anteriores, tendrán una ponderación por riesgo de crédito conforme a lo siguiente: \n \n(50) 1. Del 50 por ciento si cuentan con: \n \n(130) i. Esquemas de Cobertura en Paso y Medida, en las que se tenga una cobertura de \ncuando menos el 50 por ciento del saldo insoluto del crédito. \n \n(130) ii. Garantías o Seguro de Crédito, en los que la suma del Enganche, expresado \ncomo porcentaje del valor de la vivienda al momento de su otorgamiento, más el \nporcentaje del Esquema de Cobertura de la garantía o Seguro de Crédito, \nexpresado como porcentaje del saldo inicial del crédito, deberán representar \ncuando menos el 30 por ciento del Valor de la Vivienda. \n \n(50) 2. Del 75 por ciento si cuentan con: \n \n(130) i. Esquema de Cobertura en Paso y Medida, en las que se tenga una cobertura \nmayor o igual al 25 por ciento del saldo insoluto del crédito y menor al 50 por \nciento. \n \n(130) ii. Garantías o Seguro de Crédito, en los que la suma del Enganche, expresado \ncomo porcentaje del valor de la vivienda al momento de su otorgamiento, más el \nporcentaje del Esquema de Cobertura de la garantía o Seguro de Crédito, \nexpresado como porcentaje del saldo inicial del crédito, deberán ser igual o mayor \nal 20 por ciento y menor al 30 por ciento del Valor de la Vivienda. \n \n(50) e) Tratándose de créditos otorgados a partir del 1o. de junio de 2000 que hayan sido \nobjeto de alguna reestructura o que cuenten con un esquema de refinanciamiento de \nintereses; que hayan sido otorgados a tasas variables sin establecer una tasa máxima, o \nbien, de créditos cuyo saldo insoluto se determine en función de los incrementos del \nsalario mínimo tendrán una ponderación por riesgo de crédito conforme a lo siguiente: \n    \n \n \n \n \n \n(130) 1. Del 50 por ciento, si el Enganche expresado como porcentaje del valor de la \nvivienda más el porcentaje del Esquema de Cobertura de la garantía o Seguro de \nCrédito, expresado como porcentaje del saldo inicial del crédito, es mayor o igual \nal 35 por ciento del Valor de la Vivienda. \n \n(130) 2. Del 75 por ciento, si el Enganche, expresado como porcentaje del valor de la \nvivienda, más el porcentaje del Esquema de Cobertura de la garantía o Seguro de \nCrédito, expresado como porcentaje del saldo inicial del crédito, es mayor o igual \nal 25 por ciento y menor al 35 por ciento del Valor de la Vivienda. \n \n(189) f) Los Créditos Hipotecarios de Vivienda destinados a la remodelación o mejoramiento de \nla vivienda sin propósito de especulación comercial, otorgados al amparo del artículo 43 \nBIS de la Ley del Instituto del Fondo Nacional de la Vivienda para los Trabajadores y del \nartículo 176 Ley del Instituto de Seguridad y Servicios Sociales de los Trabajadores del \nEstado, en los que la subcuenta de vivienda del acreditado y sus aportaciones futuras \nfunjan como garantía y fuente de pago, respectivamente, o bien en los que los acreditados \ncuenten con una garantía otorgada por alguna institución de banca de desarrollo o por un \nfideicomiso público constituido por el Gobierno Federal para el fomento económico que \ncumpla con los requisitos del Anexo 25 de las presentes disposiciones, tendrán una \nponderación por riesgo de crédito conforme a lo siguiente: \n \n(189) 1. Del 50 por ciento, cuando el saldo insoluto del crédito represente 50 por ciento o \nmenos de la suma de los recursos de la subcuenta de vivienda del acreditado más la \ngarantía. \n \n(189) 2.  Del 75 por ciento, cuando el saldo insoluto del crédito represente más del 50 por \nciento y menos del 85 por ciento de la suma de los recursos de la subcuenta de \nvivienda del acreditado más la garantía. \n  \n(189) En todo caso, las aportaciones a la subcuenta de vivienda del acreditado y la garantía \ndeberán estar disponibles sin restricción legal alguna para la Institución en caso de \nincumplimiento del acreditado, así como estar libres de cualquier otro gravamen. \nAsimismo, ninguna otra persona podrá disponer de los recursos mientras subsista la \nobligación crediticia. \n \n(189) De no cumplirse con todas las condiciones previstas por el párrafo anterior, la \nponderación por riesgo de crédito para los créditos descritos en este inciso será de 100 \npor ciento. \n \n(130) En su caso, los créditos que cuenten con el Enganche descrito en los numerales 1 o 2, de \nlos incisos b) a e) de la presente fracción, pero que no hayan sido garantizados o no hayan \nsido objeto del proceso de originación establecido por los otorgantes de la garantía o Seguro \n    \n \n \n \n \nde Crédito, expresado como porcentaje del saldo inicial del crédito, no contarán con los \nbeneficios a los que se refieren las fracciones antes señaladas. \n \n(130) La Institución deberá documentar la garantía y el Seguro de Crédito, de tal forma que la \ncobertura sea a un plazo igual al correspondiente al crédito a la vivienda y le permita ejercerlo \nincondicionalmente en los plazos marcados en el contrato de cobertura, o bien, en la póliza \nmaestra, a menos que dicha Institución falte en el pago de la correspondiente prima de la \ngarantía o Seguro de Crédito; modifique sin autorización de la entidad otorgante de la garantía \no del Seguro de Crédito, las condiciones de los créditos cubiertos; cancele o transfiera los \nmismos en condiciones distintas a las pactadas, en su caso, en el respectivo contrato, o \ncometa algún fraude vinculado con el crédito. \n \n(50) El ponderador por riesgo de crédito citado en los incisos b) y e) de la presente fracción, no \npodrá ser aplicado por las Instituciones para sus créditos hipotecarios, si la institución de \nseguros que otorga la garantía pertenece al mismo grupo financiero que la Institución \nbeneficiaria. \n \n(188) Asimismo, los Créditos Hipotecarios de Vivienda a que se refiere este artículo deberán en \ntodo momento ser otorgados bajo estrictos criterios prudenciales y las Instituciones \nacreedoras de un Esquema de Cobertura de Primeras Pérdidas o Esquema de Cobertura en \ndisposiciones. Adicionalmente, los créditos referidos en los incisos a) a f) de la presente \nfracción deberán destinarse para adquirir vivienda (de uso habitacional). \n \n(189) En ningún caso, los créditos referidos en los incisos a) a f) debieron haber sido \nreestructurados sin la autorización expresa de la Institución otorgante de la garantía o Seguro \nde Crédito. \n \n(188) En su caso, los porcentajes mencionados en la presente fracción deberán cumplirse a la \nfecha de escrituración del crédito. \n \n(189)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 534,
        "contenido": "a",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "f",
        "id": 535,
        "contenido": "siguientes, según corresponda, tendrán una \nponderación por riesgo de crédito del 50 o 75 por ciento, según sea el caso: \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 536,
        "contenido": "Tratándose de Créditos Hipotecarios de Vivienda otorgados a tasa fija, o bien, a tasa \nvariable que se encuentre sujeta a una tasa máxima, que cuenten con un Enganche \nexpresado como porcentaje del valor de la vivienda igual o mayor al 30 por ciento, tendrán \nuna ponderación por riesgo de crédito de 50 por ciento; mientras que los Créditos \nHipotecarios de Vivienda que cuenten con un Enganche expresado como porcentaje del \nvalor de la vivienda mayor al 20 por ciento y menor al 30 por ciento del Valor de la \nVivienda, tendrán una ponderación por riesgo de crédito de 75 por ciento. \n \n(50) En todo caso, los créditos citados en el párrafo anterior deberán amortizar el principal a \npartir de la originación del crédito y no deberán prever capitalización de intereses. \n \n(130)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 537,
        "contenido": "Los Créditos Hipotecarios de Vivienda que cuenten con una garantía otorgada por \nalguna institución de banca de desarrollo o por un fideicomiso público constituido por el \nGobierno Federal para el fomento económico, o bien, que cuenten con un Seguro de \nCrédito, siempre y cuando la institución de seguros cuente, a la fecha del cómputo de \ncapitalización, con Calificación de Grado de Inversión o superior emitida por al menos una \ndel Instituto del Fondo Nacional de la Vivienda para los Trabajadores o con un esquema \nde cofinanciamiento con el Fondo de la Vivienda del Instituto de Seguridad y Servicios \n    \n \n \n \n \nSociales de los Trabajadores del Estado, tendrán una ponderación por riesgo del 50 por \nciento. \n \n(50) En todo caso, los créditos citados en el párrafo anterior deberán contemplar lo \nsiguiente: \n \n(130) 1. Tratándose de Créditos Hipotecarios de Vivienda que cuenten con un Seguro de \nCrédito o garantía otorgada por alguna institución de banca de desarrollo o \nfideicomisos públicos constituidos por el Gobierno Federal para el fomento \neconómico: \n \n(130) i. En Esquemas de Cobertura en Paso y Medida, dichas garantías deberán contar \ncon una cobertura de cuando menos el 50 por ciento del saldo insoluto del crédito. \n \n(130) ii. En Esquemas de Cobertura de Primeras Pérdidas con garantías o Seguro de \nCrédito expresados en UDIs o en moneda nacional, la suma del Enganche \nexpresado como porcentaje del valor de la vivienda más el porcentaje del \nEsquema de Cobertura de la garantía o del Seguro de Crédito, expresado como \nporcentaje del saldo inicial del crédito, según sea el caso, deberá representar \ncuando menos el 30 por ciento del Valor de la Vivienda. \n \n(50) 2. Tratándose de Créditos Hipotecarios de Vivienda que cuenten con un esquema de \nVivienda para los Trabajadores o con un esquema de cofinanciamiento con el Fondo \nde la Vivienda del Instituto de Seguridad y Servicios Sociales de los Trabajadores del \nEstado: \n \n(130) i. \nexpresado como porcentaje del valor de la vivienda y en su caso las garantías, o \nbien, el Seguro de Crédito bajo Esquemas de Cobertura de Primeras Pérdidas, \nexpresado como porcentaje del saldo inicial del crédito, deberán representar \ncuando menos el 30 por ciento del valor de la vivienda para créditos denominados \nen UDIs o en moneda nacional. Al respecto, la subcuenta de vivienda del \nbeneficiario que funge como garantía del crédito se considerará como el \nequivalente a una cobertura de garantía por el valor de la subcuenta a la fecha de \nescrituración y podrá ser sumado al Enganche y, en su caso, a la garantía o Seguro \nde Crédito, según sea el caso. \n \n(130) ii. \nde la vivienda y, en su caso, las garantías o Seguro de Crédito bajo Esquemas de \nCobertura de Primeras Pérdidas expresado como porcentaje del saldo inicial del \n    \n \n \n \n \ncrédito deberán representar cuando menos el 30 por ciento del Valor de la \nVivienda para créditos denominados en UDIS o en moneda nacional. \n \n(130)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 538,
        "contenido": "Los Créditos Hipotecarios de Vivienda que cuenten con una garantía otorgada por \nalguna institución de banca de desarrollo o por un fideicomiso público constituido por el \nGobierno Federal para el fomento económico, o bien, que cuenten con un Seguro de \nCrédito, siempre y cuando la institución de seguros tenga a la fecha del cómputo de \ncapitalización una Calificación de Grado de Inversión o superior emitida por al menos una \ndel Instituto del Fondo Nacional de la Vivienda para los Trabajadores, o con un esquema \nde cofinanciamiento con el Fondo de la Vivienda del Instituto de Seguridad y Servicios \nSociales de los Trabajadores del Estado, tendrán una ponderación por riesgo de crédito \ndel 75 por ciento. \n \n(50) En todo caso os créditos citados en el párrafo anterior deberán contemplar lo siguiente: \n \n(130)1. Tratándose de créditos con Seguro de Crédito o garantía otorgada por la banca de \ndesarrollo o fideicomisos públicos constituidos por el Gobierno Federal para el \nfomento: \n \n(130) i. Con Esquemas de Cobertura en Paso y Medida, dichas garantías deberán contar \ncon una cobertura mayor o igual al 25 por ciento del saldo insoluto del crédito y \nmenor al 50 por ciento. \n \n(130) ii. Con garantías o Seguro de Crédito bajo Esquemas de Cobertura de Primeras \nPérdidas, expresados en UDIs o en moneda nacional, la suma del Enganche, \nexpresado como porcentaje del valor de la vivienda más el porcentaje del \nesquema de cobertura de la garantía o el Seguro de Crédito, expresado como \nporcentaje del saldo inicial del crédito, según sea el caso, deberá ser igual o mayor \nal 20 por ciento y menor al 30 por ciento del Valor de la Vivienda. \n \nInstituto del Fondo Nacional de la Vivienda para los Trabajadores, o bien, con un \nesquema de cofinanciamiento con el Fondo de la Vivienda del Instituto de Seguridad \ny Servicios Sociales de los Trabajadores del Estado, conforme a lo siguiente: \n \n(130) i. do como porcentaje \ndel valor de la vivienda y, en su caso, las garantías o Seguro de Crédito otorgados \nbajo un Esquema de Cobertura de Primeras Pérdidas, expresado como porcentaje \ndel saldo inicial del crédito, deberán ser iguales o mayores al 20 por ciento y \nmenores al 30 por ciento del Valor de la Vivienda para créditos denominados en \nUDIs o en moneda nacional. Asimismo, la subcuenta de vivienda del beneficiario \nque funge como garantía del crédito deberá considerarse como el equivalente a \n    \n \n \n \n \nuna cobertura de garantía por el valor de la subcuenta a la fecha de escrituración \ny podrá ser sumado al Enganche y, en su caso, a la garantía o Seguro de Crédito. \n \n(130) \no como porcentaje del valor de la vivienda y, \nen su caso, las garantías o Seguro de Crédito otorgados bajo el Esquema de \nCobertura de Primeras Pérdidas, expresado como porcentaje del saldo inicial del \ncrédito, deberán ser iguales o mayores al 20 y menores al 30 por ciento del Valor \nde la Vivienda para créditos denominados en UDIs o en moneda nacional. \n \n(130)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "d",
        "id": 539,
        "contenido": "Los Créditos Hipotecarios de Vivienda que en su originación no hubieren contado con \ngarantías o Seguro de Crédito, pero que a la fecha del cómputo de capitalización se tenga \nevidencia que cuentan con dichas garantías o seguros, según lo establecido en los incisos",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 540,
        "contenido": "o",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 541,
        "contenido": "anteriores, tendrán una ponderación por riesgo de crédito conforme a lo siguiente: \n \n(50) 1. Del 50 por ciento si cuentan con: \n \n(130) i. Esquemas de Cobertura en Paso y Medida, en las que se tenga una cobertura de \ncuando menos el 50 por ciento del saldo insoluto del crédito. \n \n(130) ii. Garantías o Seguro de Crédito, en los que la suma del Enganche, expresado \ncomo porcentaje del valor de la vivienda al momento de su otorgamiento, más el \nporcentaje del Esquema de Cobertura de la garantía o Seguro de Crédito, \nexpresado como porcentaje del saldo inicial del crédito, deberán representar \ncuando menos el 30 por ciento del Valor de la Vivienda. \n \n(50) 2. Del 75 por ciento si cuentan con: \n \n(130) i. Esquema de Cobertura en Paso y Medida, en las que se tenga una cobertura \nmayor o igual al 25 por ciento del saldo insoluto del crédito y menor al 50 por \nciento. \n \n(130) ii. Garantías o Seguro de Crédito, en los que la suma del Enganche, expresado \ncomo porcentaje del valor de la vivienda al momento de su otorgamiento, más el \nporcentaje del Esquema de Cobertura de la garantía o Seguro de Crédito, \nexpresado como porcentaje del saldo inicial del crédito, deberán ser igual o mayor \nal 20 por ciento y menor al 30 por ciento del Valor de la Vivienda. \n \n(50)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "e",
        "id": 542,
        "contenido": "Tratándose de créditos otorgados a partir del 1o. de junio de 2000 que hayan sido \nobjeto de alguna reestructura o que cuenten con un esquema de refinanciamiento de \nintereses; que hayan sido otorgados a tasas variables sin establecer una tasa máxima, o \nbien, de créditos cuyo saldo insoluto se determine en función de los incrementos del \nsalario mínimo tendrán una ponderación por riesgo de crédito conforme a lo siguiente: \n    \n \n \n \n \n \n(130) 1. Del 50 por ciento, si el Enganche expresado como porcentaje del valor de la \nvivienda más el porcentaje del Esquema de Cobertura de la garantía o Seguro de \nCrédito, expresado como porcentaje del saldo inicial del crédito, es mayor o igual \nal 35 por ciento del Valor de la Vivienda. \n \n(130) 2. Del 75 por ciento, si el Enganche, expresado como porcentaje del valor de la \nvivienda, más el porcentaje del Esquema de Cobertura de la garantía o Seguro de \nCrédito, expresado como porcentaje del saldo inicial del crédito, es mayor o igual \nal 25 por ciento y menor al 35 por ciento del Valor de la Vivienda. \n \n(189)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "f",
        "id": 543,
        "contenido": "Los Créditos Hipotecarios de Vivienda destinados a la remodelación o mejoramiento de \nla vivienda sin propósito de especulación comercial, otorgados al amparo del artículo 43 \nBIS de la Ley del Instituto del Fondo Nacional de la Vivienda para los Trabajadores y del \nartículo 176 Ley del Instituto de Seguridad y Servicios Sociales de los Trabajadores del \nEstado, en los que la subcuenta de vivienda del acreditado y sus aportaciones futuras \nfunjan como garantía y fuente de pago, respectivamente, o bien en los que los acreditados \ncuenten con una garantía otorgada por alguna institución de banca de desarrollo o por un \nfideicomiso público constituido por el Gobierno Federal para el fomento económico que \ncumpla con los requisitos del Anexo 25 de las presentes disposiciones, tendrán una \nponderación por riesgo de crédito conforme a lo siguiente: \n \n(189) 1. Del 50 por ciento, cuando el saldo insoluto del crédito represente 50 por ciento o \nmenos de la suma de los recursos de la subcuenta de vivienda del acreditado más la \ngarantía. \n \n(189) 2.  Del 75 por ciento, cuando el saldo insoluto del crédito represente más del 50 por \nciento y menos del 85 por ciento de la suma de los recursos de la subcuenta de \nvivienda del acreditado más la garantía. \n  \n(189) En todo caso, las aportaciones a la subcuenta de vivienda del acreditado y la garantía \ndeberán estar disponibles sin restricción legal alguna para la Institución en caso de \nincumplimiento del acreditado, así como estar libres de cualquier otro gravamen. \nAsimismo, ninguna otra persona podrá disponer de los recursos mientras subsista la \nobligación crediticia. \n \n(189) De no cumplirse con todas las condiciones previstas por el párrafo anterior, la \nponderación por riesgo de crédito para los créditos descritos en este inciso será de 100 \npor ciento. \n \n(130) En su caso, los créditos que cuenten con el Enganche descrito en los numerales 1 o 2, de \nlos incisos",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 544,
        "contenido": "a",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "e",
        "id": 545,
        "contenido": "de la presente fracción, pero que no hayan sido garantizados o no hayan \nsido objeto del proceso de originación establecido por los otorgantes de la garantía o Seguro \n    \n \n \n \n \nde Crédito, expresado como porcentaje del saldo inicial del crédito, no contarán con los \nbeneficios a los que se refieren las fracciones antes señaladas. \n \n(130) La Institución deberá documentar la garantía y el Seguro de Crédito, de tal forma que la \ncobertura sea a un plazo igual al correspondiente al crédito a la vivienda y le permita ejercerlo \nincondicionalmente en los plazos marcados en el contrato de cobertura, o bien, en la póliza \nmaestra, a menos que dicha Institución falte en el pago de la correspondiente prima de la \ngarantía o Seguro de Crédito; modifique sin autorización de la entidad otorgante de la garantía \no del Seguro de Crédito, las condiciones de los créditos cubiertos; cancele o transfiera los \nmismos en condiciones distintas a las pactadas, en su caso, en el respectivo contrato, o \ncometa algún fraude vinculado con el crédito. \n \n(50) El ponderador por riesgo de crédito citado en los incisos",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "b",
        "id": 546,
        "contenido": "y",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "e",
        "id": 547,
        "contenido": "de la presente fracción, no \npodrá ser aplicado por las Instituciones para sus créditos hipotecarios, si la institución de \nseguros que otorga la garantía pertenece al mismo grupo financiero que la Institución \nbeneficiaria. \n \n(188) Asimismo, los Créditos Hipotecarios de Vivienda a que se refiere este artículo deberán en \ntodo momento ser otorgados bajo estrictos criterios prudenciales y las Instituciones \nacreedoras de un Esquema de Cobertura de Primeras Pérdidas o Esquema de Cobertura en \ndisposiciones. Adicionalmente, los créditos referidos en los incisos",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 548,
        "contenido": "a",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "f",
        "id": 549,
        "contenido": "de la presente \nfracción deberán destinarse para adquirir vivienda (de uso habitaciona",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "l",
        "id": 550,
        "contenido": ". \n \n(189) En ningún caso, los créditos referidos en los incisos",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 551,
        "contenido": "a",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "f",
        "id": 552,
        "contenido": "debieron haber sido \nreestructurados sin la autorización expresa de la Institución otorgante de la garantía o Seguro \nde Crédito. \n \n(188) En su caso, los porcentajes mencionados en la presente fracción deberán cumplirse a la \nfecha de escrituración del crédito. \n \n(189)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "III",
        "id": 553,
        "contenido": "Los portafolios de Créditos Hipotecarios de Vivienda destinados a la remodelación o \nmejoramiento de la vivienda que mantengan características similares entre sí que se puedan \nubicar en los incisos a) a e) de la fracción II anterior y que cuenten con la garantía otorgada \npor alguna institución de banca de desarrollo que tenga garantía expresa del Gobierno Federal \no de un fideicomiso público constituido para el fomento económico bajo Esquemas de \nCobertura de Primeras Pérdidas, siempre que dicha garantía cumpla con lo señalado en el \nriesgo de crédito conforme al procedimiento señalado en los incisos a) a c) siguientes: \n \n(189) a) Calcularán los requerimientos de capital para cada crédito del portafolio conforme a lo \nestablecido en los incisos a) a e) de la fracción II anterior. Una vez obtenido el \nrequerimiento de capital para cada uno de los créditos, estos deberán sumarse para \n    \n \n \n \n \nobtener un monto total de los requerimientos de capital del portafolio antes del \nreconocimiento del Esquema de Cobertura de Primeras Pérdidas (RK_PortafolioARC). \n \n \n(189) b) Calcularán el monto de reservas para riesgos crediticios para cada crédito del portafolio, \ndisposiciones sin reconocer el Esquema de Cobertura de Primeras Pérdidas. Una vez \nobtenido el requerimiento de reservas para cada uno de los créditos, deberán sumarse \npara calcular el monto total de reservas requeridas del portafolio (Rvas_Portafolio). \n \n \n(189) c) Para reconocer el efecto del Esquema de Cobertura de Primeras Pérdidas en materia de \ncapital, se deberá determinar el exceso del Esquema de Cobertura de Primeras Pérdidas \nque puede ser considerado para efectos de disminuir el requerimiento de capital. Esto es, \nal monto de la cobertura del esquema de primeras pérdidas (Mto_Cobpp) se le restará el \nmonto de reservas obtenido conforme al inciso b) anterior. \n \n \n(189) 1. Cuando la variable Gar_RKpp resulte ser cero o negativa, las Instituciones \nbeneficiarias del Esquema de Cobertura Primeras Pérdidas deberán constituir el \nmonto total de los requerimientos de capital obtenidos conforme al inciso a) \n(RK_PortafolioARC). \n \n(189) 2.  Cuando Gar_RKpp obtenido conforme al párrafo anterior resulte ser positivo, las \nInstituciones beneficiarias del Esquema de Cobertura de Primeras Pérdidas deberán \ncomparar este monto con los requerimientos de capital obtenidos de conformidad \ncon el inciso a) aplicando la regla de decisión siguiente: \n \ni. \nSi el Gar_RKpp     > \nRK_PortafolioARC \nentonces: \nLas Instituciones no deberán \nconstituir requerimiento de capital \nalguno para el portafolio beneficiario \ndel Esquema de Cobertura de \nPrimeras Pérdidas. \nii. \nSi el Gar_RKpp   \n< \nRK_PortafolioARC \nentonces: \nEl requerimiento de capital para dicho \nportafolio será por el monto que \nsumado al valor de Gar_RKpp iguale \nel monto total de requerimientos de \n    \n \n \n \n \ncapital de los créditos del portafolio \nobtenido conforme al numeral 1 \n \n \n \n(130)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 554,
        "contenido": "a",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "e",
        "id": 555,
        "contenido": "de la fracción II anterior y que cuenten con la garantía otorgada \npor alguna institución de banca de desarrollo que tenga garantía expresa del Gobierno Federal \no de un fideicomiso público constituido para el fomento económico bajo Esquemas de \nCobertura de Primeras Pérdidas, siempre que dicha garantía cumpla con lo señalado en el \nriesgo de crédito conforme al procedimiento señalado en los incisos",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 556,
        "contenido": "a",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "c",
        "id": 557,
        "contenido": "siguientes: \n \n(189)",
        "descripcion": null,
        "type": ["Apartado"]
    }, {
        "label": "a",
        "id": 558,
        "contenido": "Calcularán los requerimientos de capital para cada crédito del portafolio conforme a lo \nestablecido en los incisos",
        "descripcion": null,
        "type": ["Apartado"]
    }],
    "links": [{
        "source": 87,
        "target": 409,
        "type": "TieneApartado",
        "id": 375
    }, {
        "source": 87,
        "target": 408,
        "type": "TieneApartado",
        "id": 374
    }, {
        "source": 87,
        "target": 407,
        "type": "TieneApartado",
        "id": 373
    }, {
        "source": 87,
        "target": 406,
        "type": "TieneApartado",
        "id": 372
    }, {
        "source": 87,
        "target": 405,
        "type": "TieneApartado",
        "id": 371
    }, {
        "source": 87,
        "target": 404,
        "type": "TieneApartado",
        "id": 370
    }, {
        "source": 87,
        "target": 403,
        "type": "TieneApartado",
        "id": 369
    }, {
        "source": 87,
        "target": 402,
        "type": "TieneApartado",
        "id": 368
    }, {
        "source": 87,
        "target": 401,
        "type": "TieneApartado",
        "id": 367
    }, {
        "source": 87,
        "target": 400,
        "type": "TieneApartado",
        "id": 366
    }, {
        "source": 87,
        "target": 399,
        "type": "TieneApartado",
        "id": 365
    }, {
        "source": 87,
        "target": 398,
        "type": "TieneApartado",
        "id": 364
    }, {
        "source": 87,
        "target": 397,
        "type": "TieneApartado",
        "id": 343
    }, {
        "source": 87,
        "target": 396,
        "type": "TieneApartado",
        "id": 342
    }, {
        "source": 87,
        "target": 395,
        "type": "TieneApartado",
        "id": 341
    }, {
        "source": 87,
        "target": 394,
        "type": "TieneApartado",
        "id": 340
    }, {
        "source": 87,
        "target": 393,
        "type": "TieneApartado",
        "id": 339
    }, {
        "source": 87,
        "target": 392,
        "type": "TieneApartado",
        "id": 338
    }, {
        "source": 87,
        "target": 388,
        "type": "TieneApartado",
        "id": 362
    }, {
        "source": 87,
        "target": 387,
        "type": "TieneApartado",
        "id": 361
    }, {
        "source": 87,
        "target": 386,
        "type": "TieneApartado",
        "id": 360
    }, {
        "source": 87,
        "target": 385,
        "type": "TieneApartado",
        "id": 359
    }, {
        "source": 87,
        "target": 380,
        "type": "TieneApartado",
        "id": 354
    }, {
        "source": 87,
        "target": 379,
        "type": "TieneApartado",
        "id": 353
    }, {
        "source": 87,
        "target": 378,
        "type": "TieneApartado",
        "id": 352
    }, {
        "source": 87,
        "target": 377,
        "type": "TieneApartado",
        "id": 351
    }, {
        "source": 87,
        "target": 376,
        "type": "TieneApartado",
        "id": 350
    }, {
        "source": 87,
        "target": 375,
        "type": "TieneApartado",
        "id": 349
    }, {
        "source": 87,
        "target": 374,
        "type": "TieneApartado",
        "id": 348
    }, {
        "source": 87,
        "target": 373,
        "type": "TieneApartado",
        "id": 347
    }, {
        "source": 87,
        "target": 372,
        "type": "TieneApartado",
        "id": 346
    }, {
        "source": 87,
        "target": 371,
        "type": "TieneApartado",
        "id": 345
    }, {
        "source": 87,
        "target": 212,
        "type": "TieneApartado",
        "id": 166
    }, {
        "source": 87,
        "target": 367,
        "type": "TieneApartado",
        "id": 332
    }, {
        "source": 87,
        "target": 366,
        "type": "TieneApartado",
        "id": 331
    }, {
        "source": 87,
        "target": 365,
        "type": "TieneApartado",
        "id": 330
    }, {
        "source": 87,
        "target": 364,
        "type": "TieneApartado",
        "id": 329
    }, {
        "source": 87,
        "target": 354,
        "type": "TieneApartado",
        "id": 312
    }, {
        "source": 87,
        "target": 353,
        "type": "TieneApartado",
        "id": 311
    }, {
        "source": 87,
        "target": 352,
        "type": "TieneApartado",
        "id": 310
    }, {
        "source": 87,
        "target": 351,
        "type": "TieneApartado",
        "id": 309
    }, {
        "source": 87,
        "target": 348,
        "type": "TieneApartado",
        "id": 306
    }, {
        "source": 87,
        "target": 347,
        "type": "TieneApartado",
        "id": 305
    }, {
        "source": 87,
        "target": 346,
        "type": "TieneApartado",
        "id": 304
    }, {
        "source": 87,
        "target": 345,
        "type": "TieneApartado",
        "id": 303
    }, {
        "source": 87,
        "target": 344,
        "type": "TieneApartado",
        "id": 302
    }, {
        "source": 87,
        "target": 343,
        "type": "TieneApartado",
        "id": 301
    }, {
        "source": 87,
        "target": 342,
        "type": "TieneApartado",
        "id": 300
    }, {
        "source": 87,
        "target": 341,
        "type": "TieneApartado",
        "id": 299
    }, {
        "source": 87,
        "target": 340,
        "type": "TieneApartado",
        "id": 298
    }, {
        "source": 87,
        "target": 337,
        "type": "TieneApartado",
        "id": 295
    }, {
        "source": 87,
        "target": 336,
        "type": "TieneApartado",
        "id": 294
    }, {
        "source": 87,
        "target": 335,
        "type": "TieneApartado",
        "id": 293
    }, {
        "source": 87,
        "target": 334,
        "type": "TieneApartado",
        "id": 292
    }, {
        "source": 87,
        "target": 333,
        "type": "TieneApartado",
        "id": 291
    }, {
        "source": 87,
        "target": 332,
        "type": "TieneApartado",
        "id": 290
    }, {
        "source": 87,
        "target": 331,
        "type": "TieneApartado",
        "id": 289
    }, {
        "source": 87,
        "target": 330,
        "type": "TieneApartado",
        "id": 288
    }, {
        "source": 87,
        "target": 325,
        "type": "TieneApartado",
        "id": 281
    }, {
        "source": 87,
        "target": 324,
        "type": "TieneApartado",
        "id": 280
    }, {
        "source": 87,
        "target": 323,
        "type": "TieneApartado",
        "id": 279
    }, {
        "source": 87,
        "target": 322,
        "type": "TieneApartado",
        "id": 278
    }, {
        "source": 87,
        "target": 321,
        "type": "TieneApartado",
        "id": 277
    }, {
        "source": 87,
        "target": 320,
        "type": "TieneApartado",
        "id": 276
    }, {
        "source": 87,
        "target": 319,
        "type": "TieneApartado",
        "id": 275
    }, {
        "source": 87,
        "target": 318,
        "type": "TieneApartado",
        "id": 274
    }, {
        "source": 87,
        "target": 315,
        "type": "TieneApartado",
        "id": 271
    }, {
        "source": 87,
        "target": 314,
        "type": "TieneApartado",
        "id": 270
    }, {
        "source": 87,
        "target": 313,
        "type": "TieneApartado",
        "id": 269
    }, {
        "source": 87,
        "target": 312,
        "type": "TieneApartado",
        "id": 268
    }, {
        "source": 87,
        "target": 311,
        "type": "TieneApartado",
        "id": 267
    }, {
        "source": 87,
        "target": 310,
        "type": "TieneApartado",
        "id": 266
    }, {
        "source": 87,
        "target": 309,
        "type": "TieneApartado",
        "id": 265
    }, {
        "source": 87,
        "target": 308,
        "type": "TieneApartado",
        "id": 264
    }, {
        "source": 87,
        "target": 303,
        "type": "TieneApartado",
        "id": 259
    }, {
        "source": 87,
        "target": 302,
        "type": "TieneApartado",
        "id": 258
    }, {
        "source": 87,
        "target": 297,
        "type": "TieneApartado",
        "id": 253
    }]


};

console.log("This data: " , data)
    var session = driver.session();
    session
    .run('MATCH (a)-[r1]->(b) , (b)-[r2]->(c) WHERE NOT b.nombre="Artículo 1" OR  a.nombre="Artículo 1" OR c.nombre="Artículo 1" RETURN a,r1,b,r2 LIMIT 5')
    .then(function (result) {
      result.records.forEach(function (record) {
        // Nodos A
        console.log("Propiedades Nodo A:" , record.get('a').properties);
        let dictionaryOfFirtstNodeProperties = record.get('a').properties
        dictionaryOfFirtstNodeProperties['id'] = record.get('a').identity.low
        console.log("Resultado Nodo A: " , dictionaryOfFirtstNodeProperties);
        data.nodes.push(dictionaryOfFirtstNodeProperties)
      
        // Nodos B
        console.log("Propiedades Nodo B:" , record.get('b').properties);
        let dictionaryOfSecondtNodeProperties = record.get('b').properties
        dictionaryOfSecondtNodeProperties['id'] = record.get('b').identity.low
        console.log("Resultado Nodo B: " , dictionaryOfSecondtNodeProperties);
        data.nodes.push(dictionaryOfSecondtNodeProperties)
      });
      console.log("This data 2 : " , data)
      session.close();
    })
    .catch(function (error) {
      console.log(error);
    });

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {
  "automaticRearrangeAfterDropNode": false,
  "collapsible": false,
  "directed": true,
  "focusAnimationDuration": 0.75,
  "focusZoom": 1,
  "height": 1400,
  "highlightDegree": 1,
  "highlightOpacity": 1,
  "linkHighlightBehavior": true,
  "maxZoom": 8,
  "minZoom": 0.1,
  "nodeHighlightBehavior": true,
  "panAndZoom": false,
  "staticGraph": false,
  "width": 1000,
  "d3": {
    "alphaTarget": 0.05,
    "gravity": -100,
    "linkLength": 100,
    "linkStrength": 1
  },
  "node": {
    "color": "#00ACAB",
    "fontColor": "black",
    "fontSize": 10,
    "fontWeight": "normal",
    "highlightColor": "#F9F871",
    "highlightFontSize": 8,
    "highlightFontWeight": "normal",
    "highlightStrokeColor": "black",
    "highlightStrokeWidth": "SAME",
    "labelProperty": "label",
    "mouseCursor": "pointer",
    "opacity": 1,
    "renderLabel": true,
    "size": 300,
    "strokeColor": "#906DB1",
    "strokeWidth": 1.5,
    "svg": "",
    "symbolType": "circle"
  },
  "link": {
    "color": "#E6F4F1",
    "fontColor": "black",
    "fontSize": 8,
    "fontWeight": "normal",
    "highlightColor": "black",
    "highlightFontSize": 12,
    "highlightFontWeight": "normal",
    "labelProperty": "type",
    "mouseCursor": "pointer",
    "opacity": 1,
    "renderLabel": true,
    "semanticStrokeWidth": false,
    "strokeWidth": 1.5
  }
};

class Grapho extends Component {
  ref = React.createRef();

  componentDidMount(){
    console.log(this.ref);
  }

  render() {
    return (
        <Graph
        id="graph-container" // id is mandatory, if no id is defined rd3g will throw an error
        data={data}
        config={myConfig}
        />
    )
  }
}
export default Grapho;