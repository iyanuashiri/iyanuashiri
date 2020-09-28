<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
        <div class="overflow-x-hidden">
          <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
            <h2 class="font-bold mb-6" id="projects">Here are some projects I've worked on:</h2>

            <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
              <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
            </div>

            <ul class="text-lg sm:text-xl space-y-6">
              <li class="checkmark">
                <div>Project One</div>
                <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
              </li>
              <li class="checkmark">
                <div>Project Two</div>
                <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
              </li>
              <li class="checkmark">
                <div>Project Three</div>
                <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
              </li>
              <li class="checkmark">
                <div>Project Four</div>
                <div class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab nam animi iure nemo exercitationem a, eius non culpa itaque!</div>
              </li>

            </ul>
          </div> <!-- end projects -->
        </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Projects'
  }
}
</script>

<style scoped>

</style>