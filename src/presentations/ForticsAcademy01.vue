<script setup lang="ts">
import FinalSlide from '../components/FinalSlide.vue';
import Folder from '../components/Folder.vue';
import WhoAmI from '../components/WhoAmI.vue';
import QuoteSomething from '../components/QuoteSomething.vue';
import QrCodeTemporalCourses from '../assets/qr_code_temporal_courses.png';
import { defaultLogo, temporalLogo } from '../utils/imagePicker';
import RoundedImg from '../atoms/RoundedImg.vue';
import DefaultImg from '../atoms/DefaultImg.vue';
import TemporalKeyWords from '../components/temporal_related/TemporalKeyWords.vue';
import IKnowNothing from '../components/temporal_related/IKnowNothing.vue';

document.title = "Temporal.io: Primeiros passos para o entendimento";
</script>

<template>
  <section>
    <div class="flex-important">
      <Folder title="Temporal.io:" subtitle="Primeiros passos para o entendimento"></Folder>
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
  <section>
    <h3>Fundamentos do Temporal</h3>
    <p><b>Workflow</b> é a principal abstração do Temporal.</p>
    <p>Os Workflows do <i></i>Temporal são códigos resilientes que podem rodar <i>(e continuar rodando)</i> por anos e anos, mesmo que a infraestrutura dos microsserviços quebrem, mesmo que a conexão de uma API seja perdida e etc.</p>
    <p>Se algum imprevisto acontecer, o Temporal vai recriar o estado anterior a falha e vai continuar como se nada tivesse acontecido.</p>
  </section>
  <TemporalKeyWords />
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
    <span>Com Temporal, todo o processo <b>deve ser descrito nos Workflows</b>. Todas as etapas menores devem ser
      <b>Activities</b>.</span><br>
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
    <small>Dessa vez tem prêmio: <b>Cada vez que você fizer a request, você vai ser registrado. O Temporal vai decidir quem vai ganhar.</b></small>
    <ol>
      <li>
        <strong>O que espero disso?</strong>
        <small>Mostrar como funciona o Temporal History, como funcionam queries e um código simples sobre signals.</small>
      </li>
      <li>
        <strong>O que vocês ganham</strong>
        <small>Dois belos brindes. Ou não, vai depender de onde e quando a palestra vai ser feita. Tchau, obrigado.</small>
      </li>
    </ol>
  </section>
  <section>
    <DefaultImg src="" alt="" />
  </section>
  <section data-markdown>
    <textarea data-template>
      ## Slide 1
      A paragraph with some text and a [link](https://hakim.se).
      ---
      ## Slide 2
      ---
      ## Slide 3
    </textarea>
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