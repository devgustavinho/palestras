import { createApp } from 'vue'
import App from './App.vue'
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom'

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/dracula.css';
import './style.css'

let deck = new Reveal({
  plugins: [Markdown, Zoom],
});
deck.initialize();
createApp(App).mount('#app')
