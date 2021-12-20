<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.texto-blanco i
      h1 Introducción

    .bloque-texto-a.color-especial.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/intro-01.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-3 El concepto de emprendimiento viene del término “entrepreneur” que significa “pionero”. Un pionero es una persona que tiene la capacidad de hacer un esfuerzo adicional para alcanzar una meta; alguien que comienza una travesía en busca de nuevos horizontes. 
            p.mb-0 Cuando hablamos de emprendimiento juvenil nos referimos a la actitud que le permite a un joven decidirse por una idea que se convertirá en su proyecto de vida, ya sea en términos sociales, individuales, culturales y económicos. El interés primordial del emprendimiento juvenil no se centra únicamente en la posibilidad de consolidar una idea de negocio y crear una empresa, en este es primordial el desarrollo humano y económico, así como el mejoramiento de las condiciones de vida de quien decide emprender.

    p.mb-0 En resumen, el emprendedor joven es una persona que se compromete con el desarrollo de un proyecto, que no es más que una idea que genera valor para un individuo o una comunidad, en un determinado contexto. En esta Unidad conocerás las características que te ayudarán como emprendedor joven en el logro de sus objetivos, mediante el desarrollo de las características emprendedoras personales.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
