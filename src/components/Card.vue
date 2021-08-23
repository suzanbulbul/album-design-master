<template>
  <div>
    <b-card
      :img-src="value.cardImage"
      img-alt="Image"
      img-top
      tag="article"
      style="text-align: start; max-width: 25rem"
      class="mb-2"
    >
      <b-card-text>
        {{ value.cardDescription }}
      </b-card-text>

      <div class="d-flex flex-row justify-content-between">
        <div class="btn-group">
          <b-button href="#" variant="outline-primary" @click="$emit('openModal', value)" size="sm">View</b-button>
          <b-button href="#" variant="outline-success" size="sm">Edit</b-button>
        </div>
        <div>{{ value.cardMinutes }}</div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style>
</style>