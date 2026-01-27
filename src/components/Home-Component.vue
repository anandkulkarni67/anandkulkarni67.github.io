<template>
  <div class="container container-body" fluid>
    <div class="row">
      <div class="col-2">
      </div>
      <div class="col-8">
        <div class="card">
          <div class="card-body">
            <div class="col-12">
              <div class="row">
                <div class="col-12">
                  <span class="text">Hi, I am</span>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <span class="name">Anand Kulkarni</span>
                </div>
              </div>
              <div class="row">
              <div class="col-12">
                <span class="text">I am a software engineer based in California.</span>
              </div>
            </div>
            <div class="row">
              <div class="col-4">                
              </div>
              <div class="col-1">
                <a href="https://www.github.com/anandkulkarni67" target="_blank" class="btn bi bi-github" role="button"></a>
              </div>
              <div class="col-1">
                <a href="https://www.linkedin.com/in/anandkulkarni67/" target="_blank" class="btn bi bi-linkedin text-decoration-none" role="button"></a>
              </div>
              <div class="col-1">
                <a href="https://www.facebook.com/anandkulkarni67/" target="_blank" class="btn bi bi-facebook text-decoration-none" role="button"></a>
              </div>
              <div class="col-1">
                <a href="https://www.instagram.com/anandkul67/" target="_blank" class="btn bi bi-instagram text-decoration-none" role="button"></a>
              </div>
              <div class="col-4">
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.name {
  font-size: 10vmin;
  color: var(--bright-text-color);
  padding-left: 1rem;
  opacity: 1;
}

.text {
  font-size: 4vmin;
}

@media (max-width: 500px) or (max-height: 500px) {
  .do-not-display {
    display: none;
  }
}
</style>
