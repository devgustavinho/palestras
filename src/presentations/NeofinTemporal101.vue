<script setup lang="ts">
import axios from 'axios';
import FinalSlide from '../components/FinalSlide.vue';
import Folder from '../components/Folder.vue';
import BlockPass from '../components/interactives/BlockPass.vue';
import WhoAmI from '../components/WhoAmI.vue';
import QuoteSomething from '../components/QuoteSomething.vue';
import QrCodeTemporalCourses from '../assets/qr_code_temporal_courses.png';
import { defaultLogo, imageDictionary } from '../utils/imagePicker';
import RoundedImg from '../atoms/RoundedImg.vue';
import IframeSection from '../components/IframeSection.vue';

document.title = "Introdução ao Temporal.io | Palestras";
const blockFunction = async () => {
  const { data } = await axios.get("http://localhost:3340/");
  return data;
}

const presentations = [
  'Novo <b>Integrante</b> do time de <b>Integrações</b> <small class="fragment">(curtiu? 🤏🕶️😉)</small>',
  'Trabalhando desde 2019 com Typescript, Python, Golang <small class="fragment">e ...PHP </small>',
  'Palestrante em comunidades de tecnologia no <b>Estado</b> do <b>Ceará</b>',
  'Ex-Tech Leader do Hemocentro do Estado do Ceará. <span class="fragment">Doe Sangue 🩸.</span>',
];
</script>

<template>
  <section>
    <div class="flex-important">
      <Folder title="Temporal 101" subtitle="Introdução"></Folder>
      <RoundedImg :src="defaultLogo" alt="Logo DevGustavinho"/>
    </div>
  </section>
  <section data-background="#6272A4">
    <WhoAmI :img-src="imageDictionary.NormalPhoto2" :override-presentations="presentations" :has-shadow="true" />
  </section>
  <section>
    <div class="row">
      <div class="column">
        <h3 style="text-align: start;">Shoutout to:</h3>
        <div class="row">
          <QuoteSomething
            imgSrc="https://media.licdn.com/dms/image/v2/D4E03AQEy5pBxNXR0zQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708357359221?e=1734566400&v=beta&t=JxmAgzftBEI6_ypScnKfKxBpVOzegc9eP8sOW2V9upI"
            name="Angela Zhou" 
            :titles="['Senior Technical Curriculum Engineer']"
            href="https://www.linkedin.com/in/zhoua1115/"
          />
          <QuoteSomething
            imgSrc="https://media.licdn.com/dms/image/v2/D5603AQFssBDwG_9BYg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709680387191?e=1734566400&v=beta&t=pVkYHwwUeaCWu3JewxP1ZouqYbTCd0xPUcE26fjqi_s"
            name="Tom Wheeler" 
            :titles="['Principal Curriculum Developer', 'Developer Advocate']"
            href="https://www.linkedin.com/in/tomwheelerstl/"
          />
        </div>
      </div>
      <div style="display: flex; align-items: flex-end;">
        <QuoteSomething 
          :imgSrc="QrCodeTemporalCourses" 
          name="Temporal Courses" 
          :titles="[]" 
          :is-squared="true"
          :width="250"
          href="https://learn.temporal.io/courses/"
        />
      </div>
    </div>
  </section>
  <section>
    <h3>O que é o Temporal?</h3>
    <p>
      Temporal.io é uma plataforma de código aberto que facilita a construção e a execução de aplicativos resilientes e
      escaláveis, trabalhando com <b>gRPC</b> para conectar múltiplos <b>SDKs</b>.
    </p>
    <p class="fragment"><b>Massa 👍</b>, agora o que isso significa?</p>
  </section>
  <IframeSection iframe-url="http://localhost:8233/namespaces/default/workflows">
    <h3>Arquitetura do Temporal</h3>
    <p>Cluster</p>
    
    <small>A plataforma do Temporal, onde é visível todo o processo</small>
  </IframeSection>
  <section>
    <h3>Arquitetura do Temporal</h3>
    <p>Worker</p>
    <img src="">
    <small>Nosso código. Ele terá um nome interno (task-queue) e será exposto para todo o Temporal.</small>
  </section>
  <section>
    <h3>Arquitetura do Temporal</h3>
    <p>Client</p>
    <img src="">
    <small>Forma de acesso à plataforma do Temporal Cluster. Pode ser via UI, CLI e servidores com SDKs.</small>
  </section>
  <section>
    <h3>Arquitetura do Temporal</h3>
    <p>Workflows</p>
    <img src="">
    <small>Contém o passo-a-passo do nosso processo no Temporal. Durável.</small>
  </section>
  <section>
    <h3>Arquitetura do Temporal</h3>
    <p>Activities</p>
    <img src="">
    <small>Processo simples e que pode ser retentado nos Workflows.</small>
  </section>
  <section>
    <h2>Mão na massa</h2>
    <small>Montaremos nosso pequeno Workflow. Vamos fazer um processo que pode dar falha várias vezes, mas se ao menos UMA
      delas der OK, segue o baile.</small>
    <ol>
      <li>
        <strong>getUserWorkflow</strong>
        <small>Vamos pegar um usuário de uma função que propositalmente falhará.</small>
      </li>
      <li>
        <strong>Observando no Cluster</strong>
        <small>Podemos ver mais detalhadamente que Temporal executou com precisão</small>
      </li>
      <li>
        <strong>Aguardar os dados</strong>
        <small>Todos os clients que estavam aguardando um resultado desse workflow será encerrado.</small>
      </li>
    </ol>
  </section>
  <section>
    <i>Com Temporal, todo o processo <b>deve ser descrito nos Workflows</b>. Todas as etapas menores devem ser
      <b>Activities</b>.</i>
    <small>Precisa ser feito do zero em caso de falha? <b>Workflow</b></small>
    <small>Precisa ser refeita apenas essa etapa em caso de falha? <b>Activity</b></small>
  </section>
  <section>
    <small>O Temporal não se limita a apenas execuções. Com ele é possível mudar e obter o estado de um <b>Workflow de longa
        duração</b>, alterando seus dados internos.</small>
    <small>Quando eu falar de signals, pense como o <b>addEventListener</b> do Javascript. Ele é registrado e aguarda
      eventos do tipo acontecer para interagir.</small>
    <small>Quando eu falar de queries, pense nos famosos <b>getters do POO</b>, principalmente do <b>Java</b>, que gosta de
      encapsular tudo.</small>
  </section>
  <section>
    <h2>Longa duração</h2>
    <small>Preciso que vocês entrem no link a seguir, botem seu nome e o nome de uma fruta. O próximo slide <b>só
        passará</b> quando alguém acertar.</small>
    <ol>
      <li>
        <strong>O que espero disso?</strong>
        <small>Mostrar como funciona o Temporal History, como funcionam queries e um código simples sobre signals.</small>
      </li>
      <li>
        <strong>Imaginem as possibilidades</strong>
        <small>Enquanto eu estiver mostrando o código, quero que imagem cenários reais da sua equipe em que o
          <b>Temporal</b> pode ser implementado.</small>
      </li>
    </ol>
  </section>
  <section>
    <Folder title="⚠️ Palestra Interativa ⚠️" subtitle="Seu celular vai trazer alegria ao meu dia"></Folder>
  </section>
  <section>
    <Suspense>
      <template #default>
        <BlockPass :is-blocked-fn="blockFunction" :timeout-in-seconds="5"></BlockPass>
      </template>
      <template #fallback>
        Aguardando suas tentativas.
      </template>
    </Suspense>
    <img src="">
  </section>
  <section>
    <h2>Encerramento</h2>
    <small>Dito tudo isto, como nós podemos aplicar no dia-a-dia?</small>
    <ol>
      <li>
        <strong>Como a <b>Integration Team</b> utiliza?</strong>
        <small>Vamos ver um caso em que constantemente precisamos ter os dados de autenticação mais atuais de um usuário e
          não
          podemos deixar o Workflow morrer de forma alguma.</small>
      </li>
      <li>
        <strong>Shark Bowl</strong>
        <small>Se alguém quiser, podemos imaginar agora uma solução para sua equipe.</small>
      </li>
    </ol>
  </section>
  <section>
    <p>O mais assustador de tudo é: <b>ainda conheço todas as features</b>. Sigo aprendendo novas maluquices que
      <b>transformam totalmente</b> minha forma de trabalhar.
    </p>
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