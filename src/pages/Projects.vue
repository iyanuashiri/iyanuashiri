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
                <div><a href="https://github.com/iyanuashiri/meethub">MeetHub</a></div>
                <div class="text-lg text-gray-600">This is a Python/Django based event management system. A meetup clone.</div>
              </li>
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/stock-manager">stock-manager</a></div>
                <div class="text-lg text-gray-600"></div>
              </li>
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/stock-manager-vue">stock-manager-vue</a></div>
                <div class="text-lg text-gray-600"></div>
              </li>
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/twitterivity">Twitterivity</a></div>
                <div class="text-lg text-gray-600">A browser extension that improves your productivity by reducing your Twitter usage</div>
              </li>
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/twilio-sms-action">twilio-sms-action</a></div>
                <div class="text-lg text-gray-600">Twilio sms action</div>
              </li>
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/celeroku">celeroku</a></div>
                <div class="text-lg text-gray-600">Deploy Celery Flower to Heroku </div>
              </li>
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/wikipedia-reference-scraper">Wikipedia-reference-scraper</a></div>
                <div class="text-lg text-gray-600">Wikipedia API wrapper for references </div>
              </li>
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/store">store</a></div>
                <div class="text-lg text-gray-600">A tool to store terminal commands and create a backup on Google drive.</div>
              </li>
              <li class="checkmark">
                <div><a href="https://github.com/iyanuashiri/africastalking_USSD_demo">africastalking_USSD_demo</a></div>
                <div class="text-lg text-gray-600">Africastalking USSD Demo</div>
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