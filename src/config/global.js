export default {
  global: {
    componenteFormativo: 'Comportamiento del Joven Emprendedor',
    descripcionCurso:
      'En esta Unidad de aprendizaje encontrarás los elementos que conforman el comportamiento del joven emprendedor, desarrollados a partir de las investigaciones realizadas por David McClelland en la década de los años 60, desde el campo de la psicología, y basados en la definición de emprendimiento como una actitud que motiva a las personas hacia el logro de objetivos. ',
    imagenBannerPrincipal: require('@/assets/curso/inicio.png'),
    fondoBannerPrincipal: require('@/assets/curso/bg.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Componentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Encabezados',
            hash: 'encabezados',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Párrafos',
            hash: 'parrafos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Botones',
            hash: 'botones',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Listas',
            hash: 'listas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Tablas',
            hash: 'tablas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Imagen',
            hash: 'imagen',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Imagen Infográfica',
            hash: 'imagen_infografica',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Video',
            hash: 'video',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Bloques de texto destacado',
            hash: 'texto_destacado',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Sliders',
            hash: 'sliders',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo: 'Acordiones',
            hash: 'acordiones',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.12',
            titulo: 'Pestañas o Tabs',
            hash: 'tabs',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.13',
            titulo: 'Líneas de tiempo',
            hash: 'lineas_tiempo',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.14',
            titulo: 'Pasos',
            hash: 'pasos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.15',
            titulo: 'Llamados a la acción',
            hash: 'llamados_accion',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.16',
            titulo: 'Tarjetas',
            hash: 'tarjetas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.17',
            titulo: 'Tarjetas con número',
            hash: 'tarjeta_numero',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.18',
            titulo: 'Modal',
            hash: 'modal',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Producción Audiovisual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Infografía Animada',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Video Motion',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Motion + Presentador',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Animación 2D',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Video interactivo',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Infografías',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fundamentación Textil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Clasificación y conceptualización de las fibras naturales, químicas (artificiales y sintéticas).',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Identificación fibras por combustión',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Clasificación de los hilos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Clasificación de tejidos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Caracterización de los tejidos',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Procesos textiles',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acosta, G., Pérez, J., Rodríguez, M., y Valenzuela, M. (2016). Cartilla Emprendimiento. Colombia: SENA. Primera Edición.',
    },
    {
      referencia: 'Ariza, C. (2019). Pensar, sentir y actuar. ',
      link: 'https://mejorapsicologia.com/pensar-sentir-actuar/',
    },
    {
      referencia:
        'CENPROMYPE (s.f.) Proceso de acompañamiento a emprendimientos dinámicos. Caja de herramientas. ',
      link:
        'http://cenpromype.synology.me/wordpress/Usb/Caja%20de%20Herramientas%20Emprendimientos%20por%20Oportunidad/LinkedDocuments/Manual%20Participante%20Taller%20de%20Caracteristicas%20Emprendedoras%20PErsonales.pdf',
    },
    {
      referencia:
        'Fernández, A. (2010). Otra vez esa sensación, Capítulo 1: Los sentimientos. ',
      link:
        'http://catarina.udlap.mx/u_dl_a/tales/documentos/lda/fernandez_f_a/capitulo1.pdf',
    },
    {
      referencia:
        'Gutiérrez, R., Martínez, L., Gómez, M., García, G., y Caycedo, M. (2020). Cartilla de comportamiento emprendedor ¡camino al logro!. Servicio Nacional de Aprendizaje SENA.',
    },
    {
      referencia:
        'Hernández, E. (2014). Avances de EMPRETEC® en Colombia, como programa para el fortalecimiento de las características del comportamiento emprendedor. INVENTUM, 9(16), 33-39.',
    },
    {
      referencia:
        'McClelland, D. C. (1961). Characteristics of entrepreneurs. In D. C. McClelland, The achieving society (p. 259–300). D Van Nostrand Company.',
      link: 'https://doi.org/10.1037/14359-007',
    },
    {
      referencia:
        'McClelland, D. C. (1961). Entrepreneurial behavior. In D. C. McClelland, The achieving society (p. 205–258). D Van Nostrand Company.',
      link: 'https://doi.org/10.1037/14359-006',
    },
    {
      referencia:
        'McClelland, D. C. (1965). N achievement and entrepreneurship: A longitudinal study. Journal of Personality and Social Psychology, 1(4), 389–392.',
      link: 'https://doi.org/10.1037/h0021956',
    },
    {
      referencia:
        'Monsalve, J. (2013). Jóvenes, talento y perfil emprendedor. ',
      link:
        'http://www.injuve.es/conocenos/ediciones-injuve/guia-jovenes-talento-y-perfil-emprendedor',
    },
    {
      referencia:
        'Pulgarín, S., y Cardona, M. (2011). Caracterización del Comportamiento Emprendedor para los estudiantes de Administración de la Universidad del Rosario. Revista EAN, (71), 22 – 30.',
    },
    {
      referencia:
        'Sánchez, J. (2011). Entrepreneurship as a legitimate field of knowledge. Psicothema, 23 (3), 427-432',
    },
    {
      referencia:
        'Universidad de Alicante. (2007). El pensamiento, Psicología Básica. ',
      link:
        'https://rua.ua.es/dspace/bitstream/10045/4298/5/TEMA%205.EL%20PENSAMIENTO.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Comportamiento del emprendedor',
      significado:
        'Conjunto de respuestas generadas por los individuos a estímulos de su entorno, basadas en la automotivación. El comportamiento emprendedor se manifiesta en una persona que es capaz de asumir una tarea, perseverar en ella, desarrollarla y resolver cualquier contratiempo que se produzca en el proceso.',
    },
    {
      termino: 'Características emprendedoras personales',
      significado:
        'Rasgos de la personalidad ligadas a las motivaciones de los individuos (logro, afiliación y poder) y que están asociadas al éxito de cualquier proyecto personal. Se basan en las investigaciones del psicólogo David McClelland realizadas en la década de los años 60.',
    },
    {
      termino: 'Visión emprendedora',
      significado:
        'Identificación de la meta u objetivo que se planea alcanzar en el futuro. De manera simple la visión puede definirse como los sueños en acción. La visión une los deseos, las expectativas y las metas que desea lograr en su vida, en distintos órdenes y esferas, situados en el ámbito del trabajo.',
    },
    {
      termino: 'Motivación',
      significado:
        'Es un estado interno que incita, dirige y mantiene la conducta. Es el impulso y el esfuerzo para satisfacer un deseo o meta.',
    },
    {
      termino: 'Triángulo de la responsabilidad',
      significado:
        'Esquema que vincula a la persona, el proyecto y la situación, mostrando el equilibrio que es necesario lograr en todo accionar emprendedor. Responsabilidad se entiende como la capacidad de la persona de responder ante las diferentes situaciones que se puedan presentar de una manera proactiva. ',
    },
  ],
  complementario: [
    // {
    //   texto:
    //     'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
    //   tipo: 'Video',
    //   link: 'https://www.google.com/',
    // },
    // {
    //   texto:
    //     'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
    //   tipo: 'Página web',
    //   descarga: '/downloads/prueba.pdf',
    // },
    // {
    //   texto:
    //     'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
    //   tipo: 'Artículo científico',
    //   link: 'https://www.google.com/',
    // },
    // {
    //   texto: 'Economía de Rosquilla. (s.f.).',
    //   tipo: 'Página web',
    //   descarga: ['/downloads/prueba.pdf', '/downloads/prueba.pdf'],
    // },
    // {
    //   texto: '2 minutos para entender el desarrollo sostenible – Spanish',
    //   tipo: 'Video',
    //   link: ['https://www.google.com/', 'https://www.google.com/'],
    // },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
