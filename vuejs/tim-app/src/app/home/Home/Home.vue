<template>
  <div>
    <stage :disable-particles="disableParticles" />
    <home-section
      image="https://images.unsplash.com/photo-1549082984-1323b94df9a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=60"
      alternative
    >
      <vue-headline level="2">1st Slide</vue-headline>
      <br />
      <vue-headline level="3">sub1</vue-headline>
      <p>Something</p>
      <br />
      <vue-headline level="3">sub2</vue-headline>
      <p>Something2</p>
      <br />
      <vue-headline level="3">sub3</vue-headline>
      <p>Something3</p>
      <br />
    </home-section>

    <home-section
      image="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=60"
      flip
    >
      <vue-headline level="2">1st Slide</vue-headline>
      <br />
      <vue-headline level="3">sub1</vue-headline>
      <p>
        Something
        <a href="http://animejs.com/" target="_blank" rel="noopener">anime.js</a>).
      </p>
      <br />
      <vue-headline level="3">sub2</vue-headline>
      <p>
        Something2
        <a href="/storybook" target="_blank" rel="noopener">components</a>.
      </p>
      <br />
      <vue-headline level="3">sub3</vue-headline>
      <p>Something3</p>
      <br />
    </home-section>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import { IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  metaInfo: {
    title: 'OurApp - Menu Name',
    meta: [
      {
        name: 'description',
        content: "Don't care about meta right now.",
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW',
      },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    Stage,
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        (state.app.config && state.app.config.features && state.app.config.features.disableParticles) || false,
    }),
  },
};
</script>
