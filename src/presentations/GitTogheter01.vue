<script setup lang="ts">
import FinalSlide from '../components/FinalSlide.vue';
import Folder from '../components/Folder.vue';
import WhoAmI from '../components/WhoAmI.vue';
import TemporalKeyWords from '../components/temporal_related/TemporalKeyWords.vue';
import { defaultLogo, temporalLogo } from '../utils/imagePicker';
import RoundedImg from '../atoms/RoundedImg.vue';
import DefaultImg from '../atoms/DefaultImg.vue';
import IKnowNothing from '../components/temporal_related/IKnowNothing.vue';

document.title = "Temporal.io: como trabalhar com times de várias linguagens sem dificuldades.";
</script>

<template>
  <section>
    <div class="flex-important">
      <Folder title="Temporal.io:" subtitle="como trabalhar com times de várias linguagens sem dificuldades."></Folder>
      <div class="row base-line">
        <RoundedImg :src="temporalLogo" alt="Logo Temporal"/>
        <RoundedImg :src="defaultLogo" alt="Logo DevGustavinho"/>
      </div>
    </div>
  </section>
  <section data-background="#6272A4">
    <WhoAmI />
  </section>
  <section>
    <h3>O que é o Temporal?</h3>
    <p>
      Temporal.io é uma plataforma de código aberto que facilita a construção e a execução de aplicativos resilientes e
      escaláveis, trabalhando com <b>gRPC</b> para conectar múltiplos <b>SDKs</b>.
    </p>
    <p class="fragment"><b>Massa 👍</b>, agora o que isso significa?</p>
  </section>
  <TemporalKeyWords />
  <section>
    <h2>Conhecendo</h2>
    <small><b>Mostrarei um Worker criado em Typescript.</b> O trabalho dele será ir na empresa <b>XX-BANK</b>, que possui sede no país <b>Timor-Leste</b> e nossa conexão com eles é exatamente como vocês imaginam.</small>
    <ol>
      <li>
        <strong>/kwanzas</strong><br>
        <small>Devemos ir na nossa API e saber o valor que temos, em Kwanzas.</small>
      </li>
      <li>
        <strong>Observando no Cluster</strong>
        <small>Podemos ver mais detalhadamente que Temporal executou com precisão</small>
      </li>
      <li>
        <strong>Aguardar os dados</strong>
        <small>Mesmo com 90% de chances da API do XX-BANK falhar, o retorno foi garantido.</small>
      </li>
    </ol>
  </section>
  <section>
    <span>Com Temporal, todo o processo <b>deve ser descrito nos Workflows</b>. Todas as etapas menores devem ser
      <b>Activities</b>.</span><br>
    <small>Precisa ser feito do zero em caso de falha? <b>Workflow</b></small>
    <small>Precisa ser refeita apenas essa etapa em caso de falha? <b>Activity</b></small>
  </section>
  <section>
    <small>Mas nem só de Typescript vive o homem. Trabalhando em empresas com projetos complexos, também teremos algumas outras linguagens, e o Temporal pode se encaixar nisso.</small>
    <small>Hoje, a plataforma possui SDKs para 6 diferentes Linguagens e 1 não oficial, em Ruby:</small>
    <div><b class="fragrment"> Java; </b><b class="fragrment">PHP; </b><b class="fragrment">Python; </b><b class="fragrment">.NET; </b><b class="fragrment">Typescript; </b><b class="fragrment">Golang;</b></div>
  </section>
  <section>
    <h2>Python, mas só assim🤏</h2>
    <small>Matemática é coisa séria: deve ser deixada para profissionais. Já que para o Javascript 0.1 + 0.2 não é 0.3, vamos usar Python para saber se nossas Kwanzas são suficientes para nos aposentarmos.</small>
    <ol>
      <li>
        <strong>Kwanzas em reais HOJE</strong>
        <small>Nosso Typescript nunca mais será o mesmo, agora ele sabe calcular.</small>
      </li>
      <li>
        <strong>Quanto temos?</strong>
        <small>Chegou a hora: utilizando o motor do Python, vamos calcular (avançadamente) o nosso valor em reais.</small>
      </li>
    </ol>
  </section>
  <section>
    <h1>History</h1>
  </section>
  <section>
    <h2>Encerramento</h2>
    <small>Você pode facilmente tentar criar seu primeiro Workflow. No meu Github, vou deixar links para o código presente nessa palestra e outras samples do Temporal.io.</small>
    <ol>
      <li>
        <strong>E lá vem mais</strong>
        <small>Vou rapidamente mostrar um Workflow avançado, para mostrar o potencial da ferramenta.</small>
      </li>
      <li>
        <strong>Agora é a sua vez</strong>
        <small>Cria um cenário em que o Temporal seria ideal na sua empresa e fale comigo!
          Vou estar aguardando por você. <span class="fragment">Sim, <b>VOCÊ</b> especificamente.</span></small>
      </li>
    </ol>
  </section>
  <section>
    <DefaultImg src="" alt="" />
  </section>
  <section>
    <IKnowNothing />
  </section>
  <section data-background="#282a43">
    <FinalSlide />
  </section>
</template>

<style>
.flex-important {
  display: flex!important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>