import { courses } from '../content';
import { effectiveStreak, progressStore, type Progress } from './store';
import { sfx } from './sound';
import { toast } from './ui';

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  test: (p: Progress) => boolean;
}

const completedCount = (p: Progress) => Object.keys(p.lessons).length;
const unitDone = (unitId: string) => (p: Progress) => {
  const unit = courses.flatMap((c) => c.units).find((u) => u.id === unitId);
  return !!unit && unit.lessons.every((l) => p.lessons[l.id]);
};
const courseDone = (courseId: string) => (p: Progress) => {
  const course = courses.find((c) => c.id === courseId);
  return !!course && course.units.every((u) => u.lessons.every((l) => p.lessons[l.id]));
};
const anyUnitDone = (p: Progress) => courses.some((c) => c.units.some((u) => u.lessons.every((l) => p.lessons[l.id])));

export const achievements: Achievement[] = [
  { id: 'first-lesson', icon: '🌱', title: 'First Steps', description: 'Complete your first lesson.', test: (p) => completedCount(p) >= 1 },
  { id: 'flawless', icon: '💎', title: 'Flawless', description: 'Finish a lesson with 100% accuracy.', test: (p) => p.stats.perfectLessons >= 1 },
  { id: 'five-perfect', icon: '🏹', title: 'Sharpshooter', description: 'Finish 5 lessons with 100% accuracy.', test: (p) => p.stats.perfectLessons >= 5 },
  { id: 'lessons-5', icon: '🔥', title: 'Warming Up', description: 'Complete 5 lessons.', test: (p) => completedCount(p) >= 5 },
  { id: 'lessons-25', icon: '📚', title: 'Dedicated', description: 'Complete 25 lessons.', test: (p) => completedCount(p) >= 25 },
  { id: 'lessons-60', icon: '🎓', title: 'Scholar', description: 'Complete 60 lessons.', test: (p) => completedCount(p) >= 60 },
  { id: 'lessons-100', icon: '🏛️', title: 'Centurion', description: 'Complete 100 lessons.', test: (p) => completedCount(p) >= 100 },
  { id: 'unit-cleared', icon: '🧱', title: 'Unit Cleared', description: 'Complete every lesson in a unit.', test: anyUnitDone },
  { id: 'streak-3', icon: '⚡', title: 'On a Roll', description: 'Reach a 3-day streak.', test: (p) => Math.max(p.streak.best, effectiveStreak(p)) >= 3 },
  { id: 'streak-7', icon: '📅', title: 'Week Warrior', description: 'Reach a 7-day streak.', test: (p) => p.streak.best >= 7 },
  { id: 'streak-30', icon: '🌋', title: 'Unstoppable', description: 'Reach a 30-day streak.', test: (p) => p.streak.best >= 30 },
  { id: 'xp-500', icon: '✨', title: 'XP Collector', description: 'Earn 500 XP.', test: (p) => p.xp >= 500 },
  { id: 'xp-2500', icon: '🌟', title: 'XP Hoarder', description: 'Earn 2,500 XP.', test: (p) => p.xp >= 2500 },
  { id: 'reviewer', icon: '🔁', title: 'Second Chances', description: 'Complete a practice session.', test: (p) => p.stats.practiceSessions >= 1 },
  { id: 'reviewer-10', icon: '🧠', title: 'Spaced Out', description: 'Complete 10 practice sessions.', test: (p) => p.stats.practiceSessions >= 10 },
  { id: 'quadratic-quest', icon: '🎯', title: 'Quadratic Quest', description: 'Finish the Quadratics and Complex Numbers unit.', test: unitDone('alg-u06-quadratics') },
  { id: 'function-fluent', icon: '🧩', title: 'Function Fluent', description: 'Finish the Functions unit.', test: unitDone('alg-u07-functions') },
  { id: 'log-cabin', icon: '🪵', title: 'Log Cabin', description: 'Finish the Exponential and Logarithmic Functions unit.', test: unitDone('alg-u09-exp-log') },
  { id: 'algebra-graduate', icon: '🎖️', title: 'Algebra Graduate', description: 'Complete the entire College Algebra course.', test: courseDone('algebra') },
  { id: 'full-circle', icon: '⭕', title: 'Full Circle', description: 'Finish the Unit Circle unit.', test: unitDone('trig-u03-unit-circle') },
  { id: 'identity-crisis', icon: '🔑', title: 'Identity Crisis Averted', description: 'Finish the Trigonometric Identities unit.', test: unitDone('trig-u06-identities') },
  { id: 'trig-graduate', icon: '📐', title: 'Trig Graduate', description: 'Complete the entire Trigonometry course.', test: courseDone('trig') },
  { id: 'limitless', icon: '🎯', title: 'Limitless', description: 'Finish the Limits unit.', test: unitDone('calc1-u01-limits') },
  { id: 'chain-reaction', icon: '⛓️', title: 'Chain Reaction', description: 'Finish the Differentiation Rules unit.', test: unitDone('calc1-u04-rules') },
  { id: 'peak-performer', icon: '🏔️', title: 'Peak Performer', description: 'Finish the Analyzing Functions unit.', test: unitDone('calc1-u06-analysis') },
  { id: 'calc1-graduate', icon: '🏅', title: 'Calculus I Graduate', description: 'Complete the entire Calculus I course.', test: courseDone('calc1') },
  { id: 'by-parts', icon: '🧰', title: 'Toolkit Complete', description: 'Finish the Techniques of Integration unit.', test: unitDone('calc2-u02-techniques') },
  { id: 'convergent', icon: '♾️', title: 'Convergent', description: 'Finish the Sequences and Series unit.', test: unitDone('calc2-u05-series') },
  { id: 'calc2-graduate', icon: '🏆', title: 'Calculus II Graduate', description: 'Complete the entire Calculus II course.', test: courseDone('calc2') },
  {
    id: 'night-owl',
    icon: '🦉',
    title: 'Night Owl',
    description: 'Complete a lesson after 10 pm.',
    test: (p) => Object.values(p.lessons).some((l) => new Date(l.completedAt).getHours() >= 22),
  },
  {
    id: 'early-bird',
    icon: '🐦',
    title: 'Early Bird',
    description: 'Complete a lesson before 7 am.',
    test: (p) => Object.values(p.lessons).some((l) => new Date(l.completedAt).getHours() < 7),
  },
];

/** Check for newly earned achievements, store them and announce them. */
export function checkAchievements(): Achievement[] {
  const p = progressStore.get();
  const fresh = achievements.filter((a) => !p.achievements[a.id] && a.test(p));
  if (fresh.length) {
    const now = Date.now();
    progressStore.set({ achievements: { ...p.achievements, ...Object.fromEntries(fresh.map((a) => [a.id, now])) } });
    fresh.forEach((a, i) =>
      setTimeout(() => {
        sfx.achievement();
        toast({ icon: a.icon, title: `Achievement unlocked: ${a.title}`, body: a.description, tone: 'achievement' }, 4200);
      }, 900 + i * 1200),
    );
  }
  return fresh;
}
