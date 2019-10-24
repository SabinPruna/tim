<template>
    <div 
    :class="cardClasses"
    @click="tap"
    :style="cardTransform">
        <div class="innerCard">
            <div class="frontCard">
            </div>
            <div
            :data-matchkey="card.matchkey"
            class="backCard">
                <img :src="`${card.imgUrl}`" class="cardImg">
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        card: {
            type: Object,
            default: () => {},
        },
        cardTransform: {
            type: String,
            default: () => {},
        },
    },

    data() {
        return {
            orientation: {
                alpha: 4,
                beta: 0,
                gamma: 0,
            },
        };
    },

    computed: {
        cardClasses() {
            return {
                'card': true,
                'card--flipped': this.card.flipped,
                'card--matched': this.card.matched,
            };
        },
    },

    methods: {
        tap() {
            this.$emit('tapped', this.card.id);
        },

        randomFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
    },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.text {
  color: orange;
}
.card {
  width: auto;
  max-width: 100%;
  display: block;
  perspective: 1000px;
  // overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.innerCard {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}
.card--flipped .innerCard {
  transform: rotateY(180deg);
}
.card--matched .innerCard {
  opacity: 0.2;
}
.innerCard,
.frontCard,
.backCard {
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
.backCard {
  align-items: center;
  display: flex;
  justify-content: center;
}
.cardImg {
  display: block;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.card * {
  pointer-events: none;
}
.frontCard,
.backCard {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.frontCard {
  background: linear-gradient(45deg, #222, rgb(200, 39, 92));
  z-index: 2;
}
.backCard {
  transform: rotateY(180deg);
}
</style>