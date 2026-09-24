import React from 'react';
import { Question } from '../types/quiz';

interface QuestionNavigatorProps {
  questions: Question[];
  currentQuestionId: number;
  userAnswers: Record<number, { selectedOption: string; isCorrect: boolean }>;
  bookmarkedIds: Set<number>;
  onSelectQuestion: (questionId: number) => void;
}

export const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
  questions,
  currentQuestionId,
  userAnswers,
  bookmarkedIds,
  onSelectQuestion,
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
      <div className="flex items-center justify-between gap-2 mb-3">
        <h3 className="font-bold text-sm text-slate-900">
          Question Navigator (1 — 60)
        </h3>
        <span className="text-xs text-slate-500 font-mono tabular-nums">
          {Object.keys(userAnswers).length} / {questions.length} answered
        </span>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
          <span>Correct</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
          <span>Incorrect</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-200 inline-block" />
          <span>Unanswered</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
          <span>Bookmarked</span>
        </div>
      </div>

      {/* Grid of 60 Buttons */}
      <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-10 gap-1.5">
        {questions.map((q) => {
          const ans = userAnswers[q.id];
          const isCurrent = q.id === currentQuestionId;
          const isBookmarked = bookmarkedIds.has(q.id);

          let bgClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
          let borderClass = 'border-transparent';

          if (ans) {
            if (ans.isCorrect) {
              bgClass = 'bg-emerald-600 text-white font-semibold';
            } else {
              bgClass = 'bg-rose-500 text-white font-semibold';
            }
          }

          if (isCurrent) {
            borderClass = 'ring-2 ring-slate-900 ring-offset-1 z-10 scale-105';
          }

          return (
            <button
              key={q.id}
              onClick={() => onSelectQuestion(q.id)}
              className={`relative h-8 rounded-lg text-xs font-mono tabular-nums transition-all flex items-center justify-center border ${bgClass} ${borderClass}`}
              title={`Question ${q.id} - ${q.topic}`}
            >
              <span>{q.id}</span>
              {isBookmarked && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400 ring-1 ring-white"
                  title="Bookmarked"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
