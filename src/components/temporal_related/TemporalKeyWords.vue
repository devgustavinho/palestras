<template>
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
</template>

<script setup lang="ts"></script>