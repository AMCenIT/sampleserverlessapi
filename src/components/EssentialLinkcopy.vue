<template>
  <div>
    <div class="row q-pa-md">
      <div>
        <button id="count" @click="count++">{{ count }}</button>
        <q-input v-model="count"></q-input>
      </div>
      <q-card
        class="my-card col-md-4col-sm-3 q-ma-sm"
        v-for="item in testarray"
        :key="item.id"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w500` + item.backdrop_path"
          alt="click"
        />
        <!-- <q-img v-bind:src="item.poster_path"></q-img> -->
        <!-- <img v-bind:src="students.Url" width="100px" height="120px" alt=""> -->
        <!-- <q-card-section>
          <img
            :src="`https://image.tmdb.org/t/p/w500` + item.backdrop_path"
            alt="click"
          />
        </q-card-section> -->
        <q-card-section>
          <div class="text-h6">{{ item.title }}</div>
          <div class="text-subtitle2">{{ item.release_date }}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ item.overview }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script>
import { onMounted, ref, computed, onUpdated } from "vue";
import { getAllData } from "src/axioshelper.js";

export default {
  setup() {
    let testarray = ref([]);
    const text = ref("");
    const count = ref(0);

    async function getallDataAPI() {
      const res = await getAllData();
      testarray.value = res.results;
      console.log("testarray.value", res.results);
    }

    onUpdated(() => {
      // text content should be the same as current `count.value`
      console.log(document.getElementById("count").textContent);
    });

    onMounted(() => {
      getallDataAPI();
    });

    return {
      getallDataAPI,
      testarray,
      text,
      count,
    };
  },
};
</script>
