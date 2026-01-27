<template>
  <div class="container-body accordion" id="myGroup">
    <div class="row">
      <div class="col-2">
      </div>
      <div class="col-8 accordion" role="tablist">
        <div class="card bg-transparent border-secondary" >
          <div class="card-header d-grid p-0">
            <button class="btn btn-primary borderTopBottom" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1"><span class="projectTitle"> Fast Word Count Visitor </span></button>
          </div>
          <div class="collapse" id="accordion-1" data-bs-parent="#myGroup" visible accordion="my-accordion" role="tabpanel">
            <div class="card-body">
              <div class="card-text">
                <div class="row pb-2">
                  <div class="col-12">
                    <span class="badge bg-dark ">Java</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <ul>
                      <li>Implemented a Visitor design pattern to develop a word Count Application.</li>
                      <li>Used memory mapped IO to improve performance of input file read operation by reading a file in chunks, effectively reducing the number of IO operations.</li>
                      <li>Used binary search tree data structure to store words extracted from an input file.</li>
                      <li>Implemented a word count visitor which iterates over a tree to count total number of words, most frequently used word(s), frequency of most frequent word(s) and total number of characters in an input file.</li>
                      <li>Implemented a grep visitor to search and return the number of occurrences of given word.</li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <a href="https://github.com/anandkulkarni67/Word-Count" target="_blank" class="btn bi bi-github text-decoration-none" role="button"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-2">
      </div>
      <div class="col-8">
        <div class="card bg-transparent border-secondary" >
          <div class="card-header d-grid p-0">
            <button class="btn btn-primary borderTopBottom" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-2"><span class="projectTitle"> Generic Object Check-pointing </span></button>
          </div>
          <div class="collapse" id="accordion-2" data-bs-parent="#myGroup" accordion="my-accordion" role="tabpanel">
            <div class="card-body">
              <div class="card-text">
                <div class="row pb-2">
                  <div class="col-12">
                    <span class="badge bg-dark ">Java</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <ul>
                      <li>Performed object serialization and de-serialization using Java Reflection.</li>
                      <li>Implemented dynamic proxy pattern to intercept readxxx() and writexxx() method calls on the proxy instance and to delegate control to underlying implementation.</li>
                      <li>Implemented a strategy pattern so that the application is extensible to different formats such as XML, String, JSON, etc.</li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <a href="https://github.com/anandkulkarni67/Generic-Object-Checkpointing" target="_blank" class="btn bi bi-github text-decoration-none" role="button"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-2">
      </div>
      <div class="col-8">
        <div class="card bg-transparent border-secondary"  target="_blank">
          <div class="card-header d-grid p-0" header-tag="header" role="tab">
            <button class="btn btn-primary borderTopBottom" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-3"><span class="projectTitle"> Chandy-Lamport Global Snapshot Algorithm </span></button>
          </div>
          <div class="collapse" id="accordion-3" data-bs-parent="#myGroup" accordion="my-accordion" role="tabpanel">
            <div class="card-body">
              <div class="card-text">
                <div class="row pb-2">
                  <div class="col-12">
                    <span class="badge bg-dark ">Java</span>
                    &nbsp;
                    <span class="badge bg-dark ">Apache Thrift</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <ul>
                      <li>Developed a distributed banking application to implement CHandy-Lamport Global Snapshot algorithm.</li>
                      <li>Multiple bank servers (instances of the application) are initialized with a random amount of balance.</li>
                      <li>Once initialized, these servers then start transferring random amount to each other at random intervals of time.</li>
                      <li>Thread synchronization was used to make sure money transfer messaged are processed in FIFO order.</li>
                      <li>Then a controller was designed to initiate a new snapshot at regular intervals with a goal to get an accurate snapshot of the amount held by each bank server as well as the amount in transit.</li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <a href="https://github.com/anandkulkarni67/Chandy-Lamport-Global-Snapshot-Algorithm" target="_blank" class="btn bi bi-github text-decoration-none" role="button"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2">
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-2">
      </div>
      <div class="col-8">
        <div class="card bg-transparent border-secondary" >
          <div class="card-header d-grid p-0" header-tag="header" role="tab">
            <button class="btn btn-primary borderTopBottom" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-4"><span class="projectTitle"> Pro Gesture Cursor </span></button>
          </div>
          <div class="collapse" id="accordion-4" data-bs-parent="#myGroup" accordion="my-accordion" role="tabpanel">
            <div class="card-body">
              <div class="card-text">
                <div class="row pb-2">
                  <div class="col-12">
                    <span class="badge bg-dark ">Java</span> &nbsp;
                    <span class="badge bg-dark ">OpenCV</span> &nbsp;
                    <span class="badge bg-dark ">Visual Basic</span> &nbsp;
                    <span class="badge bg-dark ">Haar Classifier</span> &nbsp;
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <ul>
                      <li>This was final year graduation project.</li>
                      <li>Aim of the project was to design and implement a low cost human computer interaction mechanism that dispense with devices such as mouse, keyboard or other hand-held devices while delivering presentations, seminars, etc.</li>
                      <li>We used a web camera placed next to the projector to capture presenter's hand gestures.</li>
                      <li>We used a Haar classifier to train the system in order to identify objects such as hands, fingers, heads, etc.</li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3">
                    <img loading="lazy" class="img-fluid rounded" :src="require('../assets/ProGestureCursor-3.jpg')" alt="Image 1">
                  </div>
                  <div class="col-3">
                    <img loading="lazy" class="img-fluid rounded" :src="require('../assets/ProGestureCursor-2.jpg')" alt="Image 1">
                  </div>
                  <div class="col-3">
                    <img loading="lazy" class="img-fluid rounded" :src="require('../assets/ProGestureCursor-1.jpg')" alt="Image 1">
                  </div>
                  <div class="col-3">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2">
      </div>
    </div>
    <div class="row mt-3 pb-3">
      <div class="col-2">
      </div>
      <div class="col-8">
        <div class="card bg-transparent border-secondary">
          <div class="card-header d-grid p-0" header-tag="header" role="tab">
            <button class="btn btn-primary borderTopBottom" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-5"><span class="projectTitle"> The Amazing Race </span></button>
          </div>
          <div class="collapse" id="accordion-5" accordion="my-accordion" data-bs-parent="#myGroup" role="tabpanel">
            <div class="card-body">
              <div class="card-text">
                <div class="row pb-2">
                  <div class="col-12">
                    <span class="badge bg-dark ">Visual Basic</span>
                    &nbsp;
                    <span class="badge bg-dark ">Microsoft Access Database</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <ul>
                      <li>This game was developed as part of a annual technical event.</li>
                      <li>Goal of the project was to design an application to be able to play a snake an ladder game in a distributed environment.</li>
                      <li>A player has to answer correctly to a question related to windows or linux systems in order go forward in the game. If the answer is
                        incorrect, a player will be moved back the same number of steps.
                      </li>
                      <li>The number of steps a player can take was determined by the difficulty level of a question (1 to 6) selected by the player.</li>
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3">
                    <img loading="lazy" class="img-fluid rounded" :src="require('../assets/TheAmazingRace.jpeg')" alt="Image 1">
                  </div>
                  <div class="col-9">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2">
      </div>
    </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding-inline-start: 20px !important;
}

.projectTitle {
  color: var(--bright-text-color);
}

.btn-primary {
  border: none;
  background-color: var(--section-bg-color) !important;
  color: var(--base-text-color) !important;
}

.btn .btn-primary .collapsed {
  border: none;
}

.borderTopBottom.btn-primary:hover {
  box-shadow: 1px 1px 1px var(--bright-text-color);
}

.card-body {
  color: var(--base-text-color) !important;
  border-bottom-right-radius: var(--border-radius) var(--border-radius);
  border-bottom-left-radius: var(--border-radius) var(--border-radius);
  border-bottom: 1px solid var(--base-text-color) !important;
}
</style>