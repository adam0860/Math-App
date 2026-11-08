import type { Unit } from '../../types';
import { lesson as ochemRadicals } from './ochem-radicals';
import { lesson as ochemAlcohols } from './ochem-alcohols';
import { lesson as ochemEthersEpoxides } from './ochem-ethers-epoxides';

export const unit: Unit = {
  id: "ochem-u07-radicals-alcohols-ethers",
  title: "Radicals, Alcohols and Ethers",
  description: "Radical halogenation and its selectivity, the preparation and reactions of alcohols, and ethers and epoxides.",
  icon: "🍷",
  lessons: [ochemRadicals, ochemAlcohols, ochemEthersEpoxides],
};
