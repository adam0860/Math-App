import type { CheatSheet } from '../types';
import { algebraCheatSheets } from './algebra';
import { trigCheatSheets } from './trig';
import { calc1CheatSheets } from './calc1';
import { calc2CheatSheets } from './calc2';
import { linalgCheatSheets } from './linalg';

export const cheatSheets: CheatSheet[] = [...algebraCheatSheets, ...trigCheatSheets, ...calc1CheatSheets, ...calc2CheatSheets, ...linalgCheatSheets];
