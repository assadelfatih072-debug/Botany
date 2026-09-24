import React from 'react';
import { Flame, CheckCircle2, XCircle, Percent } from 'lucide-react';

interface StatsBarProps {
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  incorrectCount: number;
  currentStreak: number;
  maxStreak: number;
  topicName: string;
}

export const StatsBar: React.FC<StatsBarProps> = ({
  totalQuestions,
  answeredCount,
  correctCount,
  incorrectCount,
  currentStreak,
  maxStreak,
  topicName,
}) => {
  const percentage = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
        {/* Topic & answered progress */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-800">{topicName}</span>
          <span aria-hidden="true">·</span>
          <span>
            Progress: <strong className="text-slate-900 font-mono tabular-nums">{answeredCount}</strong> /{' '}
            <strong className="text-slate-900 font-mono tabular-nums">{totalQuestions}</strong>
          </span>
        </div>

        {/* Real-time metrics */}
        <div className="flex items-center gap-4 text-xs font-medium">
          {/* Correct */}
          <div className="flex items-center gap-1.5 text-emerald-700">
            <CheckCircle2 className="w-4 h-4" />
            <span className="font-mono tabular-nums font-bold text-sm">{correctCount}</span>
            <span className="text-slate-500 text-[11px]">Correct</span>
          </div>

          {/* Incorrect */}
          <div className="flex items-center gap-1.5 text-rose-600">
            <XCircle className="w-4 h-4" />
            <span className="font-mono tabular-nums font-bold text-sm">{incorrectCount}</span>
            <span className="text-slate-500 text-[11px]">Incorrect</span>
          </div>

          {/* Accuracy */}
          <div className="flex items-center gap-1.5 text-slate-700">
            <Percent className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-mono tabular-nums font-bold text-sm">{percentage}%</span>
            <span className="text-slate-500 text-[11px]">Accuracy</span>
          </div>

          {/* Streak */}
          {currentStreak > 1 && (
            <div className="flex items-center gap-1 bg-amber-50 text-amber-800 px-2 py-0.5 rounded-lg border border-amber-200/70 animate-pulse-subtle">
              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="font-mono tabular-nums font-bold">{currentStreak}</span>
              <span className="text-[10px]">streak</span>
            </div>
          )}
        </div>
      </div>

      {/* Progress track */}
      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden flex">
        <div
          className="bg-emerald-600 h-full transition-all duration-300"
          style={{ width: `${totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0}%` }}
          title={`Correct: ${correctCount}`}
        />
        <div
          className="bg-rose-500 h-full transition-all duration-300"
          style={{ width: `${totalQuestions > 0 ? (incorrectCount / totalQuestions) * 100 : 0}%` }}
          title={`Incorrect: ${incorrectCount}`}
        />
      </div>
    </div>
  );
};
