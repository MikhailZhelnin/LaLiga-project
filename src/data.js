import alaves from './image/alaves.png';
import atletico from './image/atletico.png';
import barca from './image/barca.png';
import bilbao from './image/bilbao.png';
import cadiz from './image/cadiz.png';
import celta from './image/celta.png';
import eibar from './image/eibar.png';
import elche from './image/elche.png';
import getafe from './image/getafe.png';
import granada from './image/granada.png';
import huesca from './image/huesca.png';
import levante from './image/levante.png';
import osasuna from './image/osasuna.png';
import real_betis from './image/real_betis.png';
import real_madrid from './image/real_madrid.png';
import sevilla from './image/sevilla.png';
import sociedad from './image/sociedad.png';
import valencia from './image/valencia.png';
import valladolid from './image/valladolid.png';
import villareal from './image/villareal.png';

const clubs = [
  {
    id: 1,
    name: 'Athletic Bilbao',
    stadium: 'San Mamés',
    coach: 'Marcelino',
    logo: bilbao,
    city: 'Bilbao',
    foundation: '1898',
    website: 'http://www.athletic-club.eus/en/home.html',
  },
  {
    id: 2,
    name: 'Atlético Madrid',
    stadium: 'Wanda Metropolitano',
    coach: 'Diego Simeone',
    logo: atletico,
    city: 'Madrid',
    foundation: '1903',
    website: 'http://en.atleticodemadrid.com/',
  },
  {
    id: 3,
    name: 'CA Osasuna',
    stadium: 'El Sadar',
    coach: 'Jagoba Arrasate',
    logo: osasuna,
    city: 'Pamplona',
    foundation: '1920',
    website: 'http://www.osasuna.es/',
  },
  {
    id: 4,
    name: 'Cádiz CF',
    stadium: 'Ramón de Carranza',
    coach: 'Álvaro Cervera',
    logo: cadiz,
    city: 'Cádiz',
    foundation: '1910',
    website: 'http://www.cadizcf.com/',
  },
  {
    id: 5,
    name: 'Deportivo Alavés',
    stadium: 'Mendizorrotza',
    coach: 'Abelardo Fernández',
    logo: alaves,
    city: 'Vitoria-Gasteiz',
    foundation: '1921',
    website: 'http://www.alaves.com/',
  },
  {
    id: 6,
    name: 'Elche CF',
    stadium: 'Manuel Martínez Valero',
    coach: 'Fran Escribá',
    logo: elche,
    city: '  Elche',
    foundation: '1923',
    website: 'http://www.elchecf.es/',
  },
  {
    id: 7,
    name: 'FC Barcelona',
    stadium: 'Camp Nou',
    coach: 'Ronald Koeman',
    logo: barca,
    city: 'Barcelona',
    foundation: '1899',
    website: 'http://www.fcbarcelona.com/',
  },
  {
    id: 8,
    name: 'Getafe CF',
    stadium: 'Coliseum Alfonso Pérez',
    coach: 'José Bordalás',
    logo: getafe,
    city: 'Getafe',
    foundation: '1983',
    website: 'https://www.getafecf.com/',
  },
  {
    id: 9,
    name: 'Granada CF',
    stadium: 'Nuevo Los Cármenes',
    coach: 'Diego Martínez',
    logo: granada,
    city: 'Granada',
    foundation: '1931',
    website: 'http://www.granadacf.es/',
  },
  {
    id: 10,
    name: 'Levante UD',
    stadium: 'Ciutat de València',
    coach: 'Paco López',
    logo: levante,
    city: ' Valencia',
    foundation: '1909',
    website: 'http://www.levanteud.com/',
  },
  {
    id: 11,
    name: 'RC Celta',
    stadium: 'Balaídos',
    coach: 'Eduardo Coudet',
    logo: celta,
    city: ' Vigo',
    foundation: '1923',
    website: 'http://www.rccelta.es/',
  },
  {
    id: 12,
    name: 'Real Betis',
    stadium: 'Benito Villamarín',
    coach: 'Manuel Pellegrini',
    logo: real_betis,
    city: 'Seville',
    foundation: '1907',
    website: 'http://www.realbetisbalompie.es/',
  },
  {
    id: 13,
    name: 'Real Madrid',
    stadium: 'Santiago Bernabéu',
    coach: 'Zinedine Zidane',
    logo: real_madrid,
    city: 'Madrid',
    foundation: '1902',
    website: 'http://www.realmadrid.com/',
  },
  {
    id: 14,
    name: 'Real Sociedad',
    stadium: 'Anoeta',
    coach: 'Imanol Alguacil',
    logo: sociedad,
    city: 'San Sebastián',
    foundation: '1909',
    website: 'https://www.realsociedad.eus/en',
  },
  {
    id: 15,
    name: 'Real Valladolid CF',
    stadium: 'José Zorrilla',
    coach: 'Sergio González',
    logo: valladolid,
    city: 'Valladolid',
    foundation: '1928',
    website: 'http://www.realvalladolid.es/',
  },
  {
    id: 16,
    name: 'SD Eibar',
    stadium: 'Ipurua Municipal',
    coach: 'José Luis Mendilibar',
    logo: eibar,
    city: ' Eibar',
    foundation: '1940',
    website: 'http://www.sdeibar.com/',
  },
  {
    id: 17,
    name: 'SD Huesca',
    stadium: 'El Alcoraz',
    coach: 'Pacheta',
    logo: huesca,
    city: 'Huesca',
    foundation: '1960',
    website: 'http://www.sdhuesca.es/',
  },
  {
    id: 18,
    name: 'Sevilla FC',
    stadium: 'Ramón Sánchez Pizjuán',
    coach: 'Julen Lopetegui',
    logo: sevilla,
    city: ' Seville',
    foundation: '1905',
    website: 'https://www.sevillafc.es/',
  },
  {
    id: 19,
    name: 'Valencia CF',
    stadium: 'Mestalla',
    coach: 'Javi Gracia',
    logo: valencia,
    city: 'Valencia',
    foundation: '1919',
    website: 'http://www.valenciacf.com/',
  },
  {
    id: 20,
    name: 'Villarreal CF',
    stadium: 'Estadio de la Cerámica',
    coach: 'Unai Emery',
    logo: villareal,
    city: 'Villarreal',
    foundation: '1923',
    website: 'http://www.villarrealcf.es/',
  },
];

export default clubs;
