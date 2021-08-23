<template>
  <b-navbar toggleable type="dark" variant="dark">
      <b-container>
        <b-collapse class="mt-2 mb-3" id="navbar-toggle-collapse" is-nav>
          <div
            class="d-flex d-row justify-content-between"
            style="color: white"
          >
            <div
              class="d-flex flex-column align-items-start"
              style="max-width: 40%; text-align: start"
            >
              <h5>About</h5>
              <span class="text-muted">
                Add some information about the album below, the author, or any
                other background context. Make it a few sentences long so folks
                can pick up some informative tidbits. Then, link them off to
                some social networking sites or contact information.
              </span>
            </div>
            <div></div>
            <div
              class="d-flex flex-column align-items-start"
              style="width: 40%; text-align: start"
            >
              <strong>Contact</strong>
              <a href="#">Follow on Twitter</a>
              <a href="#">Like on Facebook</a><a href="#">Email me</a>
            </div>
          </div>
        </b-collapse>
        <b-navbar-brand href="#">
          <b-icon class="navbar-margin" icon="camera"></b-icon>
          <strong>Albüm</strong>
        </b-navbar-brand>

        <b-navbar-toggle target="navbar-toggle-collapse">
          <span class="navbar-toggler-icon"></span>
        </b-navbar-toggle>
      </b-container>
    </b-navbar>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
  color: white !important;
}

</style>