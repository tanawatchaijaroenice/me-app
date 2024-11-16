<template>
  <!-- <NavBar /> -->

  <section
    id="video"
    class="h-screen flex flex-col relative justify-center items-center"
  >
    <div
      class="backdrop-blur-sm w-full h-full bg-white/20 absolute left-0 z-10"
    ></div>
    <video class="w-full h-full absolute z-0 object-cover" autoplay loop muted>
      <source :src="Sea" type="video/mp4" />
    </video>
    <p class="text-2xl text-white z-50 bg-[#00000061] p-10 rounded-lg">
      Journey beyond the shore and uncover stories that inspire, places that
      captivate, and moments that last forever.
    </p>
  </section>

  <section
    id="welcome"
    class="h-screen absolute top-0 flex flex-col justify-center items-center bg-[#081f3c] wave"
  >
    <p
      class="text-[5rem] font-bold text-white leading-[70px] p-[12rem] text-center z-50"
    >
      Welcome to a world of endless horizons and tranquil waves
      <span class="text-[#23598f] text-[3rem] block">
        let the ocean's beauty guide your journey
      </span>
    </p>
  </section>

  <section id="1" class="h-screen flex flex-row">
    <div
      class="basis-2/4 bg-no-repeat bg-cover"
      style="
        background-image: url('https://images.pexels.com/photos/4321194/pexels-photo-4321194.jpeg');
      "
    >
      <div
        class="backdrop-blur-sm bg-white/30 w-full h-screen flex justify-center items-center"
      ></div>
    </div>
    <div
      class="basis-2/4 bg-[#272727] flex flex-col justify-center gap-6 p-[10rem]"
    >
      <p class="text-[5rem] font-bold text-white leading-[70px]">
        Sea Me Gallery
      </p>
      <p class="text-xl text-white">
        Immerse yourself in the serene beauty of the ocean, where endless waves
        meet the horizon, inviting you to explore and unwind
      </p>
    </div>
  </section>

  <section id="multi_pic" class="h-screen">
    <div class="grid grid-cols-4 grid-rows-1 h-[46.5%]">
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-buwanekab-1561982.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-athena-1586795.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-asadphoto-1320674.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-earano-1298684.jpg"
      />
    </div>
    <div class="relative h-[7%]">
      <svg class="absolute inset-0 h-full w-full">
        <defs>
          <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
            <path
              d="M 1,0 C 0.98,0.2 0.95,0.4 1,0.6 C 0.95,0.8 0.98,1 1,1 L 0,1 L 0,0 Z"
            />
          </clipPath>
        </defs>
      </svg>
      <!-- style="clip-path: url(#waveClip); -webkit-clip-path: url(#waveClip)" -->
      <span id="swimming" class="bg-[#0d2850] relative flex h-full"> </span>
      <p
        class="absolute inset-0 text-3xl font-semibold text-[#ffffff] z-50 py-4 h-[7%] flex justify-center items-center top-[30%]"
      >
        Life is like swimming in the vast ocean
      </p>
    </div>

    <div class="grid grid-cols-4 grid-rows-1 h-[46.5%]">
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-gya-den-768256-2303781.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-ollivves-931018.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-pixabay-64219.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-pixabay-67566.jpg"
      />
    </div>
    <!-- <div class="w-full h-screen grid grid-cols-4 grid-rows-3 z-0">
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-buwanekab-1561982.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-athena-1586795.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-asadphoto-1320674.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-earano-1298684.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-gya-den-768256-2303781.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-ollivves-931018.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-pixabay-64219.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-pixabay-67566.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-pixabay-68767.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-pixabay-237272.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-pixabay-533923.jpg"
      />
      <img
        class="w-full h-full object-cover"
        src="./assets/images/pexels-pixabay-533937.jpg"
      />
    </div> -->
  </section>

  <section id="3" class="h-screen relative justify-center items-center">
    <p class="p-8 text-4xl font-bold text-center">Sea Gallery</p>
  </section>
</template>

<script setup lang="ts">
import Sea from "./assets/videos/sea.mp4";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const pinOpenPage = () => {
  gsap.to("#video", {
    scrollTrigger: {
      trigger: "#video",
      start: "top top",
      pin: true,
      end: "bottom top",
      scrub: 1,
    },
  });
};

const multiImageShow = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
  });
  tl.set("img", {
    transformOrigin: `left`,
  }).to("img", {
    scale: 0,
    scrollTrigger: {
      trigger: "#multi_pic",
      start: "top top",
      pin: true,
      end: "bottom top",
      scrub: 1,
    },
  });
};

const swimming = () => {
  gsap.fromTo(
    "#swimming",
    {
      x: "-100vw", // เริ่มจากขอบซ้ายของหน้าจอ
    },
    {
      scrollTrigger: {
        trigger: "#multi_pic",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%",
      },
      x: "0vw", // เคลื่อนที่ไปขวาสุดของหน้าจอ
      ease: "none",
    }
  );
  // gsap.from("#swimming", {
  //   scrollTrigger: {
  //     trigger: "#multi_pic",
  //     scrub: true,
  //     pin: true,
  //     start: "top top",
  //     end: "+=100%",
  //   },
  //   x: "100vw", // ใช้ '100vw' เพื่อให้เลื่อนไปขวาสุดของหน้าจอ
  //   transformOrigin: "left center",
  //   ease: "none",
  // });
};

onMounted(() => {
  pinOpenPage();
  swimming();
  // multiImageShow()
  // gsap.from(".line-2", {
  //   scrollTrigger: {
  //     trigger: "#welcome",
  //     scrub: true,
  //     pin: true,
  //     start: "top top",
  //     end: "+=100%",
  //   },
  //   scaleX: 0,
  //   transformOrigin: "left center",
  //   ease: "none",
  // });
  // const tl = gsap.timeline({
  //   defaults: {
  //     ease: "none",
  //   },
  // });
  // tl.set("#video", {
  //   transformOrigin: `left`,
  // }).to("#video", {
  //   scale: 0,
  //   scrollTrigger: {
  //     trigger: "#video",
  //     start: "top top",
  //     pin: true,
  //     end: "bottom top",
  //     scrub: 1,
  //   },
  // });
  // gsap.from("#red900", {
  //   scrollTrigger: {
  //     trigger: "#welcome",
  //     scrub: true,
  //     pin: true,
  //     start: "top top",
  //     end: "+=100%",
  //   },
  //   scaleX: 0,
  //   transformOrigin: "left center",
  //   ease: "none",
  // });
});
</script>

<style>
.clip-wave {
  clip-path: polygon(
    100% 0%,
    90% 10%,
    100% 20%,
    90% 30%,
    100% 40%,
    90% 50%,
    100% 60%,
    90% 70%,
    100% 80%,
    90% 90%,
    100% 100%,
    0% 100%,
    0% 0%
  );
}

.wave {
  --size: 50px;
  --m: 0.5;
  --p: calc(var(--m) * var(--size));
  --R: calc(var(--size) * sqrt(var(--m) * var(--m) + 1));

  mask: radial-gradient(
        var(--R) at 50% calc(100% - (var(--size) + var(--p))),
        #000 99%,
        #0000 101%
      )
      calc(50% - 2 * var(--size)) 0 / calc(4 * var(--size)) 100%,
    radial-gradient(var(--R) at 50% calc(100% + var(--p)), #0000 99%, #000 101%)
      50% calc(100% - var(--size)) / calc(4 * var(--size)) 100% repeat-x;
}
</style>
