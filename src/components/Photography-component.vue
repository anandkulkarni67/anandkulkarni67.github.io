<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
  
const images1 = [
  {
    id: 1,
    url: 'https://www.anandkulkarni.me/photography/IWIWB7oeoW.jpg'
  },
  {
    id: 2,
    url: 'https://www.anandkulkarni.me/photography/oAjyMaf7nf.jpg'
  },
  {
    id: 3,
    url: 'https://www.anandkulkarni.me/photography/bnKxCMRQUR.jpg'
  },
  {
    id: 4,
    url: 'https://www.anandkulkarni.me/photography/LDLzmjNLo5.jpg'
  },
  {
    id: 5,
    url: 'https://www.anandkulkarni.me/photography/RSof4bm8fO.jpg'
  },
  {
    id: 6,
    url: 'https://www.anandkulkarni.me/photography/QRPMLsj0oL.jpg'
  },
  {
    id: 7,
    url: 'https://www.anandkulkarni.me/photography/zbMXoBgIJy.jpg'
  },
  {
    id: 8,
    url: 'https://www.anandkulkarni.me/photography/hh7w80bJmo.jpg'
  },
  {
    id: 9,
    url: 'https://www.anandkulkarni.me/photography/Dkhb8UYnFF.jpg'
  },
  {
    id: 10,
    url: 'https://www.anandkulkarni.me/photography/vxeBEDLr0v.jpg'
  },
  {
    id: 11,
    url: 'https://www.anandkulkarni.me/photography/WHhmomNd1I.jpg'
  },
  {
    id: 12,
    url: 'https://www.anandkulkarni.me/photography/zqL3noSrWW.jpg'
  }
];

const images2 = [
  {
    id: 1,
    url: 'https://www.anandkulkarni.me/photography/rdDiBSjzVK.jpg'
  },
  {
    id: 2,
    url: 'https://www.anandkulkarni.me/photography/z6rPIX4VRq.jpg'
  },
  {
    id: 3,
    url: 'https://www.anandkulkarni.me/photography/jEiRehU7Jo.jpg'
  },
  {
    id: 4,
    url: 'https://www.anandkulkarni.me/photography/BNxdm1rHkn.jpg'
  },
  {
    id: 5,
    url: 'https://www.anandkulkarni.me/photography/YjEkDvuXby.jpg'
  },
  {
    id: 6,
    url: 'https://www.anandkulkarni.me/photography/Zjv4U7if4P.jpg'
  },
  {
    id: 7,
    url: 'https://www.anandkulkarni.me/photography/v3XNC6wHdI.jpg'
  },
  {
    id: 8,
    url: 'https://www.anandkulkarni.me/photography/spRiiTjYYw.jpg'
  },
  {
    id: 9,
    url: 'https://www.anandkulkarni.me/photography/SP5jdhvCAP.jpg'
  },
  {
    id: 10,
    url: 'https://www.anandkulkarni.me/photography/R2tVNcUkJC.jpg'
  },
  {
    id: 11,
    url: 'https://www.anandkulkarni.me/photography/MX4U2uT8zv.jpg'
  },
  {
    id: 12,
    url: 'https://www.anandkulkarni.me/photography/KauGIerw6M.jpg'
  }
];

const images3 = [
  {
    id: 1,
    url: 'https://www.anandkulkarni.me/photography/jeuBKpLDJF.jpg'
  },
  {
    id: 2,
    url: 'https://www.anandkulkarni.me/photography/aFJfv0g2Cq.jpg'
  },
  {
    id: 3,
    url: 'https://www.anandkulkarni.me/photography/275LQ5oQ8t.jpg'
  },
  {
    id: 4,
    url: 'https://www.anandkulkarni.me/photography/95M1GuGfP9.jpg'
  },
  {
    id: 5,
    url: 'https://www.anandkulkarni.me/photography/79rSTv2xJE.jpg'
  },
  {
    id: 6,
    url: 'https://www.anandkulkarni.me/photography/3vSC6BEQxR.jpg'
  },
  {
    id: 7,
    url: 'https://www.anandkulkarni.me/photography/77eDC93PQT.jpg'
  },
  {
    id: 8,
    url: 'https://www.anandkulkarni.me/photography/82ryZNO4y4.jpg'
  },
  {
    id: 9,
    url: 'https://www.anandkulkarni.me/photography/OxWmasL3Yd.jpg'
  },
  {
    id: 10,
    url: 'https://www.anandkulkarni.me/photography/HW4RBfKa7u.jpg'
  },
  {
    id: 11,
    url: 'https://www.anandkulkarni.me/photography/QKtAWujn00.jpg'
  },
  {
    id: 12,
    url: 'https://www.anandkulkarni.me/photography/0sO5AqJYwJ.jpg'
  }
];

const config1 = {
  height: 200,
  itemsToShow: 3,
  gap: 5,
  dir: 'ltr',
  autoplay: 4000,
  wrapAround: true,
  transition: 1000,
  pauseAutoplayOnHover: true,
}

const config2 = {
  height: 200,
  itemsToShow: 3,
  gap: 5,
  dir: 'rtl',
  autoplay: 4000,
  wrapAround: true,
  transition: 1000,
  pauseAutoplayOnHover: true,
}

</script>

<template>
  <div class="row">
    <div class="col-1">
      
    </div>
    <div class="col-10">
      <div class="row">
        <div class="col-12">
          <Carousel v-bind="config1">
            <Slide v-for="image in images1" :key="image.id">
              <img :src="image.url" alt="image" />
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12">
          <Carousel v-bind="config2">
            <Slide v-for="image in images2" :key="image.id">
              <img :src="image.url" alt="image" />
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12">
          <Carousel v-bind="config1">
            <Slide v-for="image in images3" :key="image.id">
              <img :src="image.url" alt="image" />
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>

    </div>
    <div class="col-1">
      
    </div>
  </div>
</template>

<style>
:root {
  background-color: #242424;
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

.carousel__viewport {
  border-radius: 20px;
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>