<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-0
    .p-4.p-md-5
      .titulo-principal.color-acento-botones
        .titulo-principal__numero
          span.texto-blanco 3
        h1 Dimensiones emprendedoras

      figure
        img(src='@/assets/curso/t3-01.png')

      .row.justify-content-center.overlap
        .col-lg-11
          .tarjeta.fondo-especial.p-4.mb-5
            p Una de las preguntas que guiaron el trabajo sobre el emprendimiento realizado por McClelland (1961) es: 
              b ¿Qué elementos influyen en el éxito de un emprendedor?  
              | Los rasgos de la personalidad tienen una importancia significativa, pero hay otros factores que van más allá de las características personales que interfieren en el éxito.
            p.mb-0 De esta manera, conozcamos los factores internos y externos que determinan el logro de tus objetivos.

      h3.text-center Factores internos

      p.mb-4 Son todos aquellos aspectos que caracterizan a una persona e inciden en su comportamiento, así como en sus decisiones. Gran parte de estos factores se generan de forma natural a través de los años en su desarrollo formativo y familiar. 


      .row.mb-5
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta.tarjeta-flip.color-gradiente-azul(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-4
                .d-flex.flex-column.justify-content-center.align-items-center.h-100
                  img.w-50.mb-3(src='@/assets/curso/t3-02.svg')
                  h5.mb-0 Intereses

              .tarjeta-flip__contenido.p-4.p-xl-5.shadow
                h5.text-center Intereses
                p.text-center.mb-0.text-small Son los aspectos que agradan a la persona, por los que generalmente presta mayor atención. 

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta.tarjeta-flip.color-gradiente-azul(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-4
                .d-flex.flex-column.justify-content-center.align-items-center.h-100
                  img.w-50.mb-3(src='@/assets/curso/t3-03.svg')
                  h5.mb-0 Habilidades

              .tarjeta-flip__contenido.p-4.p-xl-5.shadow
                h5.text-center Habilidades
                p.text-center.mb-0.text-small Son las capacidades que tiene una persona para hacer una actividad con destreza y facilidad.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta.tarjeta-flip.color-gradiente-azul(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-4
                .d-flex.flex-column.justify-content-center.align-items-center.h-100
                  img.w-50.mb-3(src='@/assets/curso/t3-04.svg')
                  h5.mb-0 Actitud

              .tarjeta-flip__contenido.p-4.p-xl-5.shadow
                h5.text-center Actitud
                p.text-center.mb-0.text-small Es la respuesta emocional frente a diferentes situaciones que se presentan en la vida. 

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta.tarjeta-flip.color-gradiente-azul(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-4
                .d-flex.flex-column.justify-content-center.align-items-center.h-100
                  img.w-50.mb-3(src='@/assets/curso/t3-05.svg')
                  h5.mb-0 Valores

              .tarjeta-flip__contenido.p-4.p-xl-5.shadow
                h5.text-center Valores
                p.text-center.mb-0.text-small Son los principios o virtudes que destacan a un individuo que considera valiosos y apoyan sus acciones. 

      h3.text-center Factores externos

      p.mb-4 Son todos aquellos elementos que inciden en la capacidad del logro de objetivos de las personas, estos elementos surgen en el contexto de la persona, generalmente no son controlables, aunque en cierto grado se pueden gestionar. 


      .row.mb-5
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta.tarjeta-flip.color-gradiente-azul(@mouseover="indicadorTarjetaFlip2 = false")
            .indicador--hover(v-if="indicadorTarjetaFlip2")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-4
                .d-flex.flex-column.justify-content-center.align-items-center.h-100
                  img.w-50.mb-3(src='@/assets/curso/t3-02.svg')
                  h5.mb-0 Familiares

              .tarjeta-flip__contenido.p-4.p-xl-5.shadow
                h5.text-center Familiares
                p.text-center.mb-0.text-small Aunque no siempre es tenido en cuenta o es consciente de su importancia, los factores familiares tienden a tener una gran influencia en el logro de objetivos.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta.tarjeta-flip.color-gradiente-azul(@mouseover="indicadorTarjetaFlip2 = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-4
                .d-flex.flex-column.justify-content-center.align-items-center.h-100
                  img.w-50.mb-3(src='@/assets/curso/t3-03.svg')
                  h5.mb-0 Económicos

              .tarjeta-flip__contenido.pt-4.px-3.pb-3.shadow
                h5.text-center Económicos
                p.text-center.mb-0.text-small Este aspecto puede ser visto desde dos enfoques, uno micro en el que se determinan los recursos con los que cuenta para lograr sus objetivos, y otro macro, en el que interfiere la economía local o nacional, así como las dinámicas del mercado para el desarrollo de objetivos. 

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta.tarjeta-flip.color-gradiente-azul(@mouseover="indicadorTarjetaFlip2 = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-4
                .d-flex.flex-column.justify-content-center.align-items-center.h-100
                  img.w-50.mb-3(src='@/assets/curso/t3-04.svg')
                  h5.mb-0 Sociales

              .tarjeta-flip__contenido.p-4.p-xl-5.shadow
                h5.text-center Sociales
                p.text-center.mb-0.text-small Hace referencia al ambiente en el que se encuentra y con las personas que se relaciona. 

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta.tarjeta-flip.color-gradiente-azul(@mouseover="indicadorTarjetaFlip2 = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-4
                .d-flex.flex-column.justify-content-center.align-items-center.h-100
                  img.w-50.mb-3(src='@/assets/curso/t3-05.svg')
                  h5.mb-0 Culturales

              .tarjeta-flip__contenido.p-4.p-xl-5.shadow
                h5.text-center Culturales
                p.text-center.mb-0.text-small Está ligado con las creencias del lugar en el que se encuentra. Posiblemente si el objetivo es una actividad específica dependerá del lugar, hay lugares en los que ciertas actividades están prohibidas. 

      .row.justify-content-center
        .col-lg-10
          .cajon.color-acento-botones.p-4.mb-4
            p.mb-0 Ser consciente que para la consecución de sus objetivos es necesario situarse en un contexto e identificar las variables que lo afectan positiva y negativamente, te permitirá definir acciones concretas y generar alternativas que estén encaminadas en el logro de lo que se ha propuesto. 

    .p-4.p-md-5.f-04
      .row.justify-content-center.align-items-center
        .col-lg-6
          h4 Matriz FODA

          p Es una herramienta tradicional que permite conocer los factores internos y externos dentro de nuestro proyecto. Aunque esta matriz es usada generalmente para diagnósticos empresariales, también resulta de gran utilidad para su aplicación en el análisis personal e individual. Su importancia radica en que permite realizar un diagnóstico detallado y pormenorizado de nuestro proyecto, modelo de negocio o emprendimiento, facilitando así, la optimización en la dirección y en la toma de decisiones estratégicas sea a nivel personal u organizacional. Finalmente, se trata de la posibilidad de identificar las oportunidades existentes dentro del entorno inmediato en él se encuentra nuestro idea o proyecto a concretar.

        .col-lg-6
          figure
            img(src='@/assets/curso/t3-10.svg')

    .p-4.p-md-5.f-04
      .row.justify-content-center.align-items-center
        .col-lg-6
          h4 Triángulo de la responsabilidad

          p Luego de abordar y conocer acerca de la importancia del análisis del entorno para el logro de los objetivos y de los factores que influyen en este propósito, puedes conocer de forma más amplia uno de los elementos del comportamiento emprendedor, el “Triángulo de la responsabilidad”. 
          p Este es el último elemento que se trabaja ya que combina de cierta manera los aspectos vistos en los temas anteriores de una forma sencilla para que puedas comprender las dimensiones emprendedoras y aplicarlas a su vida. 
          p El Triángulo de la responsabilidad está conformado por tres vértices, véamos:

        .col-lg-6

          ImagenInfografica.color-acento-contenido.imagen-ifografica-especial.dot-xl
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t3-11.svg')

            .tarjeta.color-primario-3.p-3(x="22%" y="49%" numero="1")
              .h6.mb-2.text-white Persona
              p.mb-0.text-small.text-white Es donde se identifican las fortalezas y puntos de mejora a partir de las características personales de cada individuo. 

            .tarjeta.color-secundario-2.p-3(x="50%" y="100%" numero="2")
              .h6.mb-2 Proyecto
              p.mb-0.text-small Son los objetivos que se ha planteado cumplir a futuro, ya sea a corto, mediano o largo plazo. Puede ser entendido desde la visión emprendedora. 

            .tarjeta.color-primario-2.p-3(x="78%" y="49%" numero="3")
              .h6.mb-2.text-white Situación
              p.mb-0.text-small.text-white Hace referencia al contexto que rodea a la persona para cumplir con su proyecto, que como ha podido evidenciar es el punto que se trata precisamente en el tema de dimensiones emprendedoras a través del análisis del entorno.

    .px-4.px-md-5.f-05.pb-4.pb-md-5
      .row.justify-content-center.mb-5
        .col-lg-10
          .cajon.color-acento-botones.p-4.mb-4
            p A su vez, el triángulo, está conformado por las dimensiones de la persona, que unen los vértices para generar un equilibrio en los emprendedores que lo lleve a su accionar: 
            p.mb-0 Las dimensiones son tres procesos que emplea en su vida, y que se deben combinar de manera equilibrada con el fin de tener mejores relaciones y un mejor desempeño en todos los ámbitos de la vida (Ariza, 2019).

      .row.justify-content-center.mb-5
        .col-lg-5.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/t3-12.svg')
          
        .col-lg
          
          LineaTiempoD.color-primario
            div(numero="1" titulo="Pensar") 
              p Es la actividad mental asociada a la comprensión, procesamiento, capacidad de recordar y comunicar. Se relaciona con la razón y la planificación. (Universidad de Alicante, 2007).
              p En el Triángulo de la responsabilidad se relaciona con:

              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-layer-group
                  | La fijación de objetivos, en la cual se pone el acento en el desarrollo de claridad de propósitos, en los objetivos de vida, en el corto y largo plazo.
                li 
                  i.fas.fa-layer-group
                  | Establecimiento de estrategias o planes de acción orientados a generar crecimiento.
              p.mb-0 Es por esta razón que une el vértice de la persona con el proyecto, pues como se menciona anteriormente, es a través del pensamiento que se pueden estructurar mentalmente las acciones que se desean desarrollar a futuro. 
            
            div(numero="2" titulo="Sentir") 
              p Se relaciona directamente con la intuición, son estados de ánimo, los cuales son intervenidos por la conciencia, sino que surgen inesperadamente (Fernández, 2010).

              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-layer-group
                  | El autoconocimiento, en este aspecto los aprendices son incentivados a examinar quiénes son, aclarar sus propios valores y evaluar su personalidad, motivaciones, capacidad y recursos personales.
                li 
                  i.fas.fa-layer-group
                  | La aceptación o reconocimiento de las fortalezas y debilidades de cada uno. No todas las personas tienen que ser líderes, pero es probable que ser más creativo, innovador y competente genere gratificaciones en cualquier profesión.
              
              p.mb-0 Por lo cual, une el vértice de la persona con la situación, ya que es en el presente o en el contexto actual (realidad), donde se generan las emociones y sentimientos que pueden afectar la consecución de los proyectos. 

            div(numero="3" titulo="Actuar") 
              p Se fundamenta en la acción, la consecución de actividades y metas.

              ul.lista-ul--color.mb-0
                li 
                  i.fas.fa-layer-group
                  | La experiencia directa donde se enfatiza el trabajo; experiencias de aprendizaje estructuradas y el enfrentamiento de situaciones de la “vida real”, contribuyen en la intensificación de esta experiencia, en la cual se comprueban, evalúan y modifican estrategias.
                li 
                  i.fas.fa-layer-group
                  | Transformación y atribución de facultades, en la que las competencias adquiridas, se reúnen en un modelo que combina fortalezas y debilidades personales, con los objetivos.

              p.mb-0 Finalmente, es donde se une la situación con el proyecto, pues solo en el contexto actual se pueden llevar a cabo acciones que lo guíen al cumplimiento de sus proyectos. 

      p Generalmente las personas tienden a tener uno de los lados del triángulo más largo, es decir, hay personas, que tienden a pensar más de lo que sienten o actúan, o hay personas que actúan sin pensar o sentir.
      p.mb-0 Ahora, se preguntará, por que se llama el triángulo de la responsabilidad, y la palabra “responsabilidad” hace referencia a la habilidad de saber responder, es decir a saber generar un equilibrio en las dimensiones del pensar, sentir y actuar y a asumir el compromiso frente a su comportamiento a partir del contexto que se le presenta para lograr lo que se propone. Ese compromiso surge de esa fuerza interna que lo lleva a actuar.















</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaFlip2: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
