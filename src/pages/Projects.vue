<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16">
        <div class="overflow-x-hidden">
          <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
            <h2 class="font-bold mb-6" id="projects">Here are open source applications I have worked on:</h2>

            <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
              <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
            </div>

            <ul class="text-lg sm:text-xl space-y-6">
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/chaperone">chaperone</a></div>
                <div class="text-lg text-gray-600">A browser extension to reduce social media usage.</div>
              </li>
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/summarizerbot">summarizerbot</a></div>
                <div class="text-lg text-gray-600">An AI Twitter bot to summarize any type of information.</div>
              </li>
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/meethub">meethub</a></div>
                <div class="text-lg text-gray-600">This is a Python/Django based event management system. A meetup clone.</div>
              </li>
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/twilio-sms-action">twilio-sms-action</a></div>
                <div class="text-lg text-gray-600">A GitHub action for Twilio SMS.</div>
              </li>
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/celeroku">celeroku</a></div>
                <div class="text-lg text-gray-600">monitor Celery processes on Heroku.</div>
              </li>

            </ul>
          </div>
          <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">

            <h2 class="font-bold mb-6 padding-box" id="libraries">Here are open source libraries I have worked on:</h2>

            <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
              <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
            </div>

            <ul class="text-lg sm:text-xl space-y-6">
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/twitter-threader">twitter-threader</a></div>
                <div class="text-lg text-gray-600"> A Twitter API library for threads.</div>
              </li>
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/wikipedia-reference-scraper">Wikipedia-reference-scraper</a></div>
                <div class="text-lg text-gray-600">A Wikipedia API wrapper for references.</div>
              </li>
              <li class="checkmark">Ayomide Oyekanmi
                <div><a href="https://github.com/iyanuashiri/dj-cart">dj-cart</a></div>
                <div class="text-lg text-gray-600">A simple shopping cart app for Django that is not session based.</div>
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