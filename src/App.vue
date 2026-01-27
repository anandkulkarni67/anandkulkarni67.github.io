<template>
  <div class="container-body" fluid id="app">
    <div class="row">
      <div class="col-12">
        <nav class="navbar bg-transparent">
          <div class="container-fluid">
            <div class="navbar-brand">
              <a href="/" class="btn name text-decoration-none" role="button">AK</a>
            </div>
            <div>
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link active links" href="/home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link links" href="/photography">Photography</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link links" href="/projects">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link links" href="/resume">Resume</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="row mt-5 vh-100">
      <div class="col-12">
        <router-view/>
      </div>
    </div>
      <div class="row">
        <div class="col-12">
          <nav class="navbar fixed-bottom justify-content-center app-footer">
            <div>
              Application Version: &nbsp; {{ appVersion }}
            </div>
          </nav>
        </div>
      </div>
  </div>
</template>

<script>

import appInfo from '../package.json';

  export default {
    data: function() {
      return {
        appVersion: appInfo.version
      };
    }
  };
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');

#app {
  font-family: 'Bree Serif', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   color: var(--base-text-color) !important;
}

.footer {
  line-height: 0.1rem;
}

.name {
  color: var(--bright-text-color) !important;
}

.name:hover {
  text-shadow: 1px 1px 1px var(--bright-text-color);
}

.name:hover {
  background-color: transparent !important;
  text-shadow: 1px 1px 20px var(--bright-text-color);
  color: var(--bright-text-color) !important;
}

.links {
  color: var(--bright-text-color) !important;
}

.links:hover {
  text-shadow: 1px 1px 20px var(--bright-text-color);
}

.app-footer {
  background-color: var(--section-bg-color);
  padding: 0 !important;
}

</style>