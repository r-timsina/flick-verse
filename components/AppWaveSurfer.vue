<script setup>
import { ref, onMounted } from "vue";
import WaveSurfer from "wavesurfer.js";
import Button from "~/components/ui/button/Button.vue";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const waveform = ref(null);
let wavesurfer;

onMounted(() => {
  wavesurfer = WaveSurfer.create({
    container: waveform.value,
    waveColor: "white",
    progressColor: "#7b57e4",
    height: 48,
    barWidth: 3,
    barGap: 3,
    barRadius: 2,
  });
  wavesurfer.load("/sample.mp3");
  wavesurfer.on("play", () => {
    console.log("Play");
  });
});

const playPause = () => {
  if (wavesurfer) {
    wavesurfer.playPause();
  }
};

const isPlaying = () => {
  if (wavesurfer) {
    wavesurfer.on("play");
  }
};

// wavesurfer.on("play", () => {
//   console.log("Play");
// });
</script>

<template>
  <div>
    <Card
      class="card-background flex flex-col gap-4 border-none text-white rounded-3xl"
    >
      <CardHeader>
        <CardTitle class="flex items-center justify-between">
          <span>Christmas Song</span>
          <IconEllipsisVertical></IconEllipsisVertical>
        </CardTitle>
      </CardHeader>
      <CardContent class="">
        <div ref="waveform" class="w-full"></div>
      </CardContent>
      <CardFooter class="flex items-center justify-between p-4">
        <Button variant="transparent" size="icon">
          <IconHeart fill="#D0C3E5" stroke="#D0C3E5" />
        </Button>
        <Button variant="transparent" size="icon">
          <IconPrevious fill="#D0C3E5" />
        </Button>
        <Button
          variant="secondary"
          class="h-16 w-16 button-gradient relative overflow-hidden"
          size="icon"
          @click="playPause()"
        >
          <IconPlay />/
          <IconPause />

          <div
            class="absolute top-5 w-14 h-14 rounded-full rotate-45 bg-gradient-to-b from-[#7150D0] to-[#AE92FF] blur-2xl"
          ></div>
        </Button>
        <Button variant="transparent" size="icon">
          <IconNext fill="#D0C3E5" />
        </Button>
        <Button variant="transparent" size="icon">
          <IconRepeat stroke="#D0C3E5" />
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
<style scoped>
.card-background {
  background-image: url("~/assets/images/card.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.button-gradient {
  background-image: linear-gradient(200deg, #a98bff, #5e31e3);
}
</style>
