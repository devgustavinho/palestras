import { createApp } from 'vue'
import Slides from './Slides.vue'
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/dracula.css';

let deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();
createApp(Slides).mount('#app')
