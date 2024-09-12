import { myAgeDetails, myNextBirthDayDetails } from "./dates";

const birthDate = new Date(1996, 8, 30);
const carreiraAge = new Date(2019, 11, 1);
const { age, since } = myAgeDetails(birthDate);
const carreiraAgeDetails = myAgeDetails(carreiraAge);
const { days, months, weeks } = myNextBirthDayDetails(birthDate);

const yearsOld: Message[] = [
    { msg: `Jovem senhor de ${age} anos`, shouldBeExecuted: true },
    { msg: `Dor nas costas desde ${since}, rumo a ${age + 1} anos de fisioterapia`, shouldBeExecuted: true },
    { msg: `${age + 1} anos, mas só daqui a ${days} dias`, shouldBeExecuted: days > 1 },
    { msg: `Conquistou o título de eterno júnior aos ${age} anos (tenho ${age})`, shouldBeExecuted: true },
    { msg: `Tenho ${months} meses ainda para dizer que ainda tenho ${age} anos`, shouldBeExecuted: months > 1 },
    { msg: `${age} anos, mas me pergunte a idade de novo daqui a ${weeks} semanas`, shouldBeExecuted: weeks > 1 },
]; 

const whatIDo: Message[] = [
    { msg: "Fissurado em Typescript, gosto de Golang, recém-casado com o Python e PHP existe;", shouldBeExecuted: true},
    { msg: "Palestrante, mentor e palhaço. Não nessa exata ordem.", shouldBeExecuted: true},
    { msg: "Melhor amigo do Typescript, mas traio ele com o Python quando posso.", shouldBeExecuted: true},
    { msg: `${carreiraAgeDetails.age} anos resolvendo problemas que o usuário nem sabia que tinha.`, shouldBeExecuted: true},
    { msg: "Definitivamente um dos palestrantes que você verá no dia de hoje. ANOTEM.", shouldBeExecuted: true},
    { msg: `Vestindo a camisa da empresa e botando a mão na massa para desenvolver soluções fora da caixa desde ${carreiraAgeDetails.since}. — FariaLimeiro, Gustavinho`, shouldBeExecuted: true},
    { msg: "Inimigo do inimigo do else. Pode usar.", shouldBeExecuted: true},
    { msg: `Júnior de ${carreiraAgeDetails.age} anos. Ainda não sei nada sobre o último framework da moda.`, shouldBeExecuted: true}    
]

export const yearsOldMessages = yearsOld.filter( s => s.shouldBeExecuted).map( s => s.msg );
export const whatIDoMessages = whatIDo.filter( s => s.shouldBeExecuted).map( s => s.msg );

type Message = {
    msg: string;
    shouldBeExecuted: boolean,
}