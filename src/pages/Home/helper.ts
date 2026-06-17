import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/FontAwesome';

import Icon1 from 'react-native-vector-icons/FontAwesome5';


export const actions = [
  {
    id: 1,
    title: 'Pix',
    icon: Icon2,
    iconName: 'pix',
  },
  {
    id: 2,
    title: 'Pagar',
    icon: Icon3,
    iconName: 'barcode',
  },
  {
    id: 3,
    title: 'Transferir',
    icon: Icon3,
    iconName: 'cash-minus',
  },
  {
    id: 4,
    title: 'Depositar',
    icon: Icon3,
    iconName: 'cash-plus',
  },
  {
    id: 5,
    title: 'Recarga',
    icon: Icon3,
    iconName: 'cellphone',
  },
  {
    id: 6,
    title: 'Pagar fatura',
    icon: Icon3,
    iconName: 'credit-card-outline',
  },
  {
    id: 7,
    title: 'Caixinhas',
    icon: Icon3,
    iconName: 'piggy-bank-outline',
  },
];

export const discoveryItems = [
  {
    id: 1,
    title: "Convidar Amigos",
    description:
      "Tire seus amigos da fila do banco e livre eles da burocracia",
    buttonText: "Convidar",
    new: true
  },
  {
    id: 2,
    title: "WhatsApp",
    description:
      "Pagamentos seguros, rápidos e sem tarifa. A experiência Nubank sem nem sair da conversa.",
    buttonText: "Quero Conhecer",
    new: false
  },
  {
    id: 3,
    title: "Caixinhas",
    description:
      "Guarde dinheiro por objetivos e veja ele render automaticamente de forma simples e organizada.",
    buttonText: "Criar Caixinha",
    new: false
  }
];


export const services = [
  {
    id: 1,
    title: 'Empréstimos',
    description: 'Até R$ 20.000.000,00 para você',
    icon: Icon3,
    iconName: 'hand-coin',
    iconSize: 24,
    hasDots: true,
  },
  {
    id: 2,
    title: 'Investimentos',
    description: 'Conheça nossos fundos de investimentos',
    icon: Icon4,
    iconName: 'signal',
    iconSize: 20,
    hasDots: false,
  },
  {
    id: 3,
    title: 'Seguro de Vida',
    description: 'Um seguro completo que cabe no seu bolso',
    icon: Icon4,
    iconName: 'heart-o',
    iconSize: 20,
    hasDots: false,
  },
];