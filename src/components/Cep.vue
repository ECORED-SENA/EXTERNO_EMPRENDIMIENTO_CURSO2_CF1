<template lang="pug">
.cep

  .cep__img
    figure
      img(src='@/assets/curso/t1-02.svg')

  .img-infografica__item.c1.reverse(
    :class="{show: selected === 1}"
    @mouseover="selected = 1"
    @mouseleave="selected = 0"
    style="top: 10%; left: 46%"
  )
    .cep__dot
      .img-infografica__item__dot
      .img-infografica__item__numero 1
    .cep__titulo
      h5 Planificar sistemáticamente

  .img-infografica__item.c2(
    :class="{show: selected === 2}"
    @mouseover="selected = 2"
    @mouseleave="selected = 0"
    style="top: 10%; left: 53.5%"
  )
    .cep__dot
      .img-infografica__item__dot
      .img-infografica__item__numero 2
    .cep__titulo
      h5 Fijar metas

  .img-infografica__item.c3(
    :class="{show: selected === 3}"
    @mouseover="selected = 3"
    @mouseleave="selected = 0"
    style="top: 24%; left: 60%"
  )
    .cep__dot
      .img-infografica__item__dot
      .img-infografica__item__numero 3
    .cep__titulo
      h5 Crear redes de apoyo

  .img-infografica__item.c4(
    :class="{show: selected === 4}"
    @mouseover="selected = 4"
    @mouseleave="selected = 0"
    style="top: 49.5%; left: 63%"
  )
    .cep__dot
      .img-infografica__item__dot
      .img-infografica__item__numero 4
    .cep__titulo
      h5 Buscar oportunidades<br>y tener iniciativa

  .img-infografica__item.c5(
    :class="{show: selected === 5}"
    @mouseover="selected = 5"
    @mouseleave="selected = 0"
    style="top: 74%; left: 60.5%"
  )
    .cep__dot
      .img-infografica__item__dot
      .img-infografica__item__numero 5
    .cep__titulo
      h5 Exigir eficiencia y calidad

  .img-infografica__item.c1(
    :class="{show: selected === 6}"
    @mouseover="selected = 6"
    @mouseleave="selected = 0"
    style="top: 89%; left: 53.5%"
  )
    .cep__dot
      .img-infografica__item__dot
      .img-infografica__item__numero 6
    .cep__titulo
      h5 Tener autoconfianza

  .img-infografica__item.c2.reverse(
    :class="{show: selected === 7}"
    @mouseover="selected = 7"
    @mouseleave="selected = 0"
    style="top: 89%; left: 46%"
  )
    .cep__dot
      .img-infografica__item__dot
      .img-infografica__item__numero 7
    .cep__titulo
      h5 Ser persistente

  .img-infografica__item.c3.reverse(
    :class="{show: selected === 8}"
    @mouseover="selected = 8"
    @mouseleave="selected = 0"
    style="top: 74%; left: 39.5%"
  )
    .cep__dot
      .img-infografica__item__dot
      .img-infografica__item__numero 8
    .cep__titulo
      h5 Buscar información

  .img-infografica__item.c4.reverse(
    :class="{show: selected === 9}"
    @mouseover="selected = 9"
    @mouseleave="selected = 0"
    style="top: 49.5%; left: 37%"
  )
    .cep__dot
      .img-infografica__item__dot
      .img-infografica__item__numero 9
    .cep__titulo
      h5 Cumplir compromisos

  .img-infografica__item.c5.reverse(
    :class="{show: selected === 10}"
    @mouseover="selected = 10"
    @mouseleave="selected = 0"
    style="top: 24%; left: 40%"
  )
    .cep__dot
      .img-infografica__item__dot
      .img-infografica__item__numero 10
    .cep__titulo
      h5 Correr riesgos moderados


</template>

<script>
export default {
  name: 'CEP',
  data: () => ({
    selected: 0,
  }),
}
</script>

<style lang="sass" scoped></style>
