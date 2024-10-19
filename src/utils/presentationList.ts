
import { DefineComponent } from 'vue';
import NeofinTemporal101 from '../presentations/NeofinTemporal101.vue';
import { formatDate } from './dates';

type SlideOption = {
    component: DefineComponent<any, any, any>,
    name: string;
    date: Date;
    route: `/${string}`;
    formatedDate: string;
    description?: string;
}

export const slidesOptions: SlideOption[] = [
    {
      component: NeofinTemporal101,
      route: `/NeofinTemporal101` as `/${string}`,
      name: "Temporal 101 - Neofin",
      date: new Date(2024, 9, 24),
      formatedDate: formatDate(new Date(2024, 9, 24)),
      description: "Introdução ao Temporal, explicando brevemente como é utilizado na equipe de Integrações."
    },
  ].sort((a, b) => { 
    return  b.date.getTime() - a.date.getTime()
});