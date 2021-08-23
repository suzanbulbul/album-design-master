<template>
  <div class="home">
    <b-modal id="modal" title="BootstrapVue">
      <p class="my-4" v-if="modalValue">{{ modalValue.cardDescription }}</p>
    </b-modal>
    <app-body></app-body>
    <div class="pt-3 mt-5" style="width: 100%; background-color: #f8f9fa">
      <b-container class="mt-5 d-flex justify-content-between flex-wrap">
        <app-card
          v-for="(data, index) in values"
          :key="index"
          :value="data"
          @openModal="openModal1"
        />
        <app-card
          v-for="(data, index) in values2"
          :key="index"
          :value="data"
          @openModal="openModal1"
        />
      </b-container>
    </div>
  </div>
</template>

<script>
import Body from "../components/Body.vue";
import Card from "../components/Card.vue";
import { veriler, veriler2 } from "../data/";

export default {
  components: {
    appBody: Body,
    appCard: Card,
  },
  data() {
    return {
      values: [],
      values2: [],
      modalValue: null,
    };
  },
  methods: {
    openModal1(modalData) {
      this.modalValue = modalData;
      this.$bvModal.show("modal");
    },
    getDatas() {
        veriler.forEach((data) => {
          fetch("https://picsum.photos/600/300", { method: "GET" })
            .then((resp) => {
              data.cardImage = resp.url;
            })
            .catch((error) => {
              console.log(error);
            });
        });
        this.values = veriler;
       this.values2 = veriler2;
      
    },
  },
  created() {
    this.getDatas();
  },
};
</script>
