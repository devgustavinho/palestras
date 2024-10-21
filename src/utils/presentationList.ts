
import { DefineComponent } from 'vue';
import { formatDate } from './dates';
import { ForticsAcademy01, GitTogheter01, NeofinTemporal101 } from '../presentations';

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
    {
      component: ForticsAcademy01,
      route: `/ForticsAcademy01` as `/${string}`,
      name: "Temporal.io: Primeiros passos para o entendimento",
      date: new Date(2024, 6, 11),
      formatedDate: formatDate(new Date(2024, 6, 11)),
      description: "Introdução ao Temporal, explicando como a Fortics se beneficia do uso dele."
    },
    {
      component: GitTogheter01,
      route: `/GitTogheter01` as `/${string}`,
      name: "Temporal.io na GitTogether",
      date: new Date(2024, 6, 6),
      formatedDate: formatDate(new Date(2024, 6, 6)),
      description: "Abordarei o quanto o Temporal facilita a minha vida ao trabalhar com várias linguagens."
    },
  ].sort((a, b) => { 
    return  b.date.getTime() - a.date.getTime()
});