<script setup lang="ts">
import axios from 'axios';
import FinalSlide from '../components/FinalSlide.vue';
import Folder from '../components/Folder.vue';
import BlockPass from '../components/interactives/BlockPass.vue';
import WhoAmI from '../components/WhoAmI.vue';
import QuoteSomething from '../components/QuoteSomething.vue';
import QrCodeTemporalCourses from '../assets/qr_code_temporal_courses.png';

const blockFunction = async () => {
  const { data } = await axios.get("http://localhost:3340/");
  return data;
}
</script>

<template>
  <section>
    <Folder title="Temporal 101" subtitle="Introdução"></Folder>
  </section>
  <section data-background="#6272a4">
    <WhoAmI :hasShadow="true" />
  </section>
  <section>
    <div class="row">
      <div class="column">
        <h3 style="text-align: start;">Shoutout to:</h3>
        <div class="row">
          <QuoteSomething
            imgSrc="https://media.licdn.com/dms/image/v2/D4E03AQEy5pBxNXR0zQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708357359221?e=1734566400&v=beta&t=JxmAgzftBEI6_ypScnKfKxBpVOzegc9eP8sOW2V9upI"
            name="Angela Zhou" :titles="['Senior Technical Curriculum Engineer']" />
          <QuoteSomething
            imgSrc="https://media.licdn.com/dms/image/v2/D5603AQFssBDwG_9BYg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709680387191?e=1734566400&v=beta&t=pVkYHwwUeaCWu3JewxP1ZouqYbTCd0xPUcE26fjqi_s"
            name="Tom Wheeler" :titles="['Principal Curriculum Developer', 'Developer Advocate']" />
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
  <section>
    <h3>Arquitetura do Temporal</h3>
    <p>Cluster</p>
    <img src="">
    <small>A plataforma do Temporal, onde é visível todo o processo</small>
  </section>
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
    <p>Montaremos nosso pequeno Workflow. Vamos fazer um processo que pode dar falha várias vezes, mas se ao menos UMA
      delas der OK, segue o baile.</p>
    <ol>
      <li>
        <strong>getUserWorkflow</strong>
        <p>Vamos pegar um usuário de uma função que propositalmente falhará.</p>
      </li>
      <li>
        <strong>Observando no Cluster</strong>
        <p>Podemos ver mais detalhadamente que Temporal executou com precisão</p>
      </li>
      <li>
        <strong>Aguardar os dados</strong>
        <p>Todos os clients que estavam aguardando um resultado desse workflow será encerrado.</p>
      </li>
    </ol>
  </section>
  <section>
    <i>Com Temporal, todo o processo <b>deve ser descrito nos Workflows</b>. Todas as etapas menores devem ser
      <b>Activities</b>.</i>
    <p>Precisa ser feito do zero em caso de falha? <b>Workflow</b></p>
    <p>Precisa ser refeita apenas essa etapa em caso de falha? <b>Activity</b></p>
  </section>
  <section>
    <p>O Temporal não se limita a apenas execuções. Com ele é possível mudar e obter o estado de um <b>Workflow de longa
        duração</b>, alterando seus dados internos.</p>
    <p>Quando eu falar de signals, pense como o <b>addEventListener</b> do Javascript. Ele é registrado e aguarda
      eventos do tipo acontecer para interagir.</p>
    <p>Quando eu falar de queries, pense nos famosos <b>getters do POO</b>, principalmente do <b>Java</b>, que gosta de
      encapsular tudo.</p>
  </section>
  <section>
    <h2>Longa duração</h2>
    <p>Preciso que vocês entrem no link a seguir, botem seu nome e o nome de uma fruta. O próximo slide <b>só
        passará</b> quando alguém acertar.</p>
    <ol>
      <li>
        <strong>O que espero disso?</strong>
        <p>Mostrar como funciona o Temporal History, como funcionam queries e um código simples sobre signals.</p>
      </li>
      <li>
        <strong>Imaginem as possibilidades</strong>
        <p>Enquanto eu estiver mostrando o código, quero que imagem cenários reais da sua equipe em que o
          <b>Temporal</b> pode ser implementado.</p>
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
    <p>Dito tudo isto, como nós podemos aplicar no dia-a-dia?</p>
    <ol>
      <li>
        <strong>Como a <b>Integration Team</b> utiliza?</strong>
        <p>Vamos ver um caso em que constantemente precisamos ter os dados de autenticação mais atuais de um usuário e
          não
          podemos deixar o Workflow morrer de forma alguma.</p>
      </li>
      <li>
        <strong>Shark Bowl</strong>
        <p>Se alguém quiser, podemos imaginar agora uma solução para sua equipe.</p>
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
.row {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
}
</style>