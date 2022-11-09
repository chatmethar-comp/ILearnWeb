
<template>
  <main class="container text-white">
    <!-- search -->
    <div class="pt-4 mb-8 relative">
      <input
        type="text"
        v-model="searchQuery"
        @input="getSearchResults"
        placeholder="Search for a city or state"
        class="
          px-1
          py-2
          w-full
          bg-primary
          border-b
          focus:border-secondary
          focus:outline-none
          focus:shadow-[0px_1px_0_0_#004E71]
        "
      />
      <ul
        v-if="mapboxSearchResult"
        class="
          absolute
          bg-secondary
          text-white
          w-full
          shadow-md
          py-2
          px-1
          top-[66px]
        "
      >
        <p v-if="searchError">Sorry somthing was wrong, please try again.</p>
        <p v-if="!searchError && mapboxSearchResult.length === 0">
          No result match your query, try a different term.
        </p>
        <template v-else>
          <li
            v-for="searchResult in mapboxSearchResult"
            :key="searchResult.id"
            class="py-2 cursor-pointer"
            @click="previewCity(searchResult)"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const previewCity = (searchResult) => {
  console.log(searchResult);
  const [city, state] = searchResult.place_name.split(",");

  router.push({
    name: "cityView",
    params: { state: state.replaceAll(" ", ""), city: city },
    query: {
      lat: searchResult.geometry.coordinates[1],
      lng: searchResult.geometry.coordinates[0],
      preview: true,
    },
  });
};

const searchQuery = ref("");
const queryTimeOut = ref(null);
const mapboxApiKey =
  "pk.eyJ1IjoiY2hhbWVscGMiLCJhIjoiY2xhNWVwZXB2MGQ2YjNxcDg4Z2R1NGo2diJ9.o97NFdC0fQ5ls9YGMhTpHg";
const mapboxSearchResult = ref("");
const SearchError = ref(null);

const getSearchResults = () => {
  clearTimeout(queryTimeOut.value);
  queryTimeOut.value = setTimeout(async () => {
    if (searchQuery.value !== "") {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxApiKey}&types=place`
        );
        mapboxSearchResult.value = result.data.features;
        return;
      } catch {
        SearchError.value = true;
      }
    }
    mapboxSearchResult.value = null;
  }, 300);
};
</script>
