export default {
  global: {
    componenteFormativo: 'Competencias del joven emprendedor',
    descripcionCurso:
      'En este componente formativo encontrarás los elementos que conforman el comportamiento del joven emprendedor, desarrollados a partir de las investigaciones realizadas por David McClelland en la década de los años 60, desde el campo de la psicología, y basados en la definición de emprendimiento como una actitud que motiva a las personas hacia el logro de objetivos. ',
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
        titulo: 'Características del joven emprendedor',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La visión emprendedora juvenil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de motivación (Hernández, 2014)',
            hash: 't2-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Los sueños y la visión emprendedora juvenil',
            hash: 't2-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Competencias Emprendedoras juveniles',
            hash: 't2-3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Dimensiones emprendedoras',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
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
        cargo: 'Líder del equipo SENA',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico SENA',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mónica Bibiana Gallego Madrid',
        cargo: 'Diseñador Instruccional Fundación CA',
        centro: 'Fundación CA',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo SENA',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhoana Hincapie Herrera',
        cargo: 'Diseño y desarrollo Fundación CA',
        centro: 'Fundación CA',
      },
    ],
    gestoresRepositorio: [
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
