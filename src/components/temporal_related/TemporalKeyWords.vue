<template>
    <IframeSection iframe-url="http://localhost:3000/">
        <h3>Arquitetura do Temporal</h3>
        <p>Cluster</p>
        <img src="">
        <small>A plataforma do Temporal, onde é visível todo o processo</small>
    </IframeSection>
    <section>
        <Code carbon-url="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=shades-of-purple&wt=none&l=python&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=worker%2520%253D%2520Worker%28%250A%2520%2520%2520%2520client%253Dclient%252C%250A%2520%2520%2520%2520task_queue%253D%2522billing_queue%2522%252C%250A%2520%2520%2520%2520workflows%253D%255BHelloWorkflow%255D%252C%250A%2520%2520%2520%2520activities%253D%255Bhello%255D%252C%250A%2520%2520%2520%2520debug_mode%253DTrue%252C%250A%2520%2520%2520%2520workflow_runner%253DUnsandboxedWorkflowRunner%28%29%252C%250A%29%250A%250Aawait%2520worker.run%28%29" />
        <h3>Arquitetura do Temporal</h3>
        <p>Worker</p>
        <small>Nosso código. Ele terá um nome interno (task-queue) e será exposto para todo o Temporal.</small>
    </section>
    <section>
        <Code carbon-url="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=shades-of-purple&wt=none&l=python&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=await%2520Client.connect%28%250A%2520%2520%2520%2520self.address%252C%250A%2520%2520%2520%2520namespace%253Dself.namespace%252C%250A%2520%2520%2520%2520tls%253Dtls%252C%250A%2520%2520%2520%2520data_converter%253Dpydantic_data_converter%252C%250A%2520%2520%2520%2520runtime%253Druntime%252C%250A%29%250A%250A%2523%2523%2520OU%2520VIA%2520CLI%250A%250A%2524%2520temporal%2520env%2520set%2520prod.namespace%2520production.f45a2%250A%2524%2520temporal%2520workflow%2520list%2520--env%2520prod" />
        <h3>Arquitetura do Temporal</h3>
        <p>Client</p>
        <small>Forma de acesso à plataforma do Temporal Cluster. Pode ser via UI, CLI e servidores com SDKs.</small>
    </section>
    <section>
        <h3>Arquitetura do Temporal</h3>
        <p>Workflows</p>
        <small>Contém o passo-a-passo do nosso processo no Temporal. Durável.</small>
    </section>
    <section>
        <Code 
            carbon-url="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=shades-of-purple&wt=none&l=python&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2540workflow.defn%250Aclass%2520SubscriptionWorkflow%253A%250A%2520%2520%2520%2520%2540workflow.run%250A%2520%2520%2520%2520async%2520def%2520run%28self%252C%2520subscription_in%253A%2520SubscriptionIn%29%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520billing_period_number%2520%253D%25201%250A%2520%2520%2520%2520%2520%2520%2520%2520while%2520True%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520if%2520billing_period_number%2520%253E%2520subscription_in.customer.subscription.max_billing_periods%253A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520break%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520await%2520workflow.execute_activity%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520activity%253Dcharge_customer_for_billing_period%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520args%253D%255Bsubscription_in.customer%252C%2520subscription_in.billing_period_charge_amount%255D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520billing_period_number%2520%252B%253D%25201%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520await%2520asyncio.sleep%28subscription_in.customer.subscription.billing_period%29%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520await%2520workflow.execute_activity%28%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520activity%253Dsend_subscription_over_email%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520args%253D%255Bsubscription_in.customer%255D%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%29"
            :style-options="{
                width: '968px',
                height: '600px',
            }"
        />
    </section>
    <section>
        <h3>Arquitetura do Temporal</h3>
        <p>Activities</p>
        <small>Processo simples e que pode ser retentado nos Workflows.</small>
        <Code carbon-url="https://carbon.now.sh/embed?bg=rgba%28171%2C184%2C195%2C0%29&t=shades-of-purple&wt=none&l=python&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2540activity.defn%250Aasync%2520def%2520hello%28hello_input%253A%2520HelloInput%29%2520-%253E%2520str%253A%250A%2520%2520%2520%2520return%2520f%2522hello%252C%2520%257Bhello_input.name%257D%2522" />
    </section>
</template>

<script setup lang="ts">
import Code from '../../atoms/Code.vue';
import IframeSection from '../IframeSection.vue';
</script>