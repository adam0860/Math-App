import type { Unit } from '../../types';
import { lesson as dmModularArithmetic } from './dm-modular-arithmetic';
import { lesson as dmPrimesGcd } from './dm-primes-gcd';
import { lesson as dmInversesCrt } from './dm-inverses-crt';
import { lesson as dmCryptography } from './dm-cryptography';

export const unit: Unit = {
  id: "dm-u04-number-theory",
  title: "Number Theory and Cryptography",
  description: "Divisibility and modular arithmetic, primes and the Euclidean algorithm, modular inverses and the Chinese remainder theorem, and RSA, hashing and pseudorandom numbers.",
  icon: "🔐",
  lessons: [dmModularArithmetic, dmPrimesGcd, dmInversesCrt, dmCryptography],
};
