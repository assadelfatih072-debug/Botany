import React, { useEffect } from 'react';
import { Question, OptionKey, OptionItem } from '../types/quiz';
import { 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  Pill,
  ArrowRight,
  ArrowLeft,
  RotateCcw
} from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalFilteredCount: number;
  selectedOption?: OptionKey;
  isAnswered: boolean;
  onSelectOption: (optionKey: OptionKey) => void;
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onClearAnswer: () => void;
  isInstantMode: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalFilteredCount,
  selectedOption,
  isAnswered,
  onSelectOption,
  onNext,
  onPrev,
  hasPrev,
  hasNext,
  isBookmarked,
  onToggleBookmark,
  onClearAnswer,
  isInstantMode,
}) => {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key) && !isAnswered) {
        onSelectOption(key as OptionKey);
      } else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        if (hasNext) onNext();
      } else if (e.key === 'ArrowLeft') {
        if (hasPrev) onPrev();
      } else if (key === 'M' || key === 'B') {
        onToggleBookmark();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnswered, onSelectOption, hasNext, hasPrev, onNext, onPrev, onToggleBookmark]);

  const isCorrect = selectedOption === question.correctAnswer;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200">
      {/* Top Metadata Header */}
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-emerald-800">
            Question {questionNumber} of {totalFilteredCount}
          </span>
          <span aria-hidden="true">·</span>
          <span>{question.topic}</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span className="hidden sm:inline font-mono text-slate-400">ID: Q{question.id}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Bookmark Button */}
          <button
            onClick={onToggleBookmark}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark this question'}
            className={`p-2 rounded-lg transition-colors border ${
              isBookmarked
                ? 'bg-amber-50 text-amber-600 border-amber-200'
                : 'bg-white text-slate-400 border-slate-200 hover:text-slate-700 hover:bg-slate-50'
            }`}
            aria-label="Bookmark question"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Question Body */}
      <div className="p-6 md:p-8">
        {/* Question Text (Single Question Centric) */}
        <div className="mb-6">
          <h2
            className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight leading-relaxed"
          >
            {question.questionEn}
          </h2>
        </div>

        {/* Options List */}
        <div className="space-y-3" role="radiogroup">
          {question.options.map((option: OptionItem) => {
            const isSelected = selectedOption === option.key;
            const isThisOptionCorrect = option.key === question.correctAnswer;

            let cardClasses = 'bg-white border-slate-200 hover:border-emerald-600/60 hover:bg-emerald-50/20 text-slate-800';
            let badgeClasses = 'bg-slate-100 text-slate-700 border-slate-200 group-hover:bg-emerald-100 group-hover:text-emerald-800';
            let iconElement: React.ReactNode = null;

            if (isAnswered && isInstantMode) {
              if (isThisOptionCorrect) {
                // Correct option (highlighted in emerald green)
                cardClasses = 'bg-emerald-50/90 border-emerald-500 text-emerald-950 font-medium ring-1 ring-emerald-500';
                badgeClasses = 'bg-emerald-600 text-white border-emerald-600';
                iconElement = <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-auto" />;
              } else if (isSelected && !isThisOptionCorrect) {
                // Wrong option chosen
                cardClasses = 'bg-rose-50/90 border-rose-400 text-rose-950 font-medium ring-1 ring-rose-400';
                badgeClasses = 'bg-rose-600 text-white border-rose-600';
                iconElement = <XCircle className="w-5 h-5 text-rose-500 shrink-0 ml-auto" />;
              } else {
                // Other options fade slightly
                cardClasses = 'bg-slate-50/50 border-slate-200 text-slate-400 opacity-60';
                badgeClasses = 'bg-slate-100 text-slate-400 border-slate-200';
              }
            } else if (isAnswered && !isInstantMode) {
              if (isSelected) {
                cardClasses = 'bg-emerald-50/70 border-emerald-600 text-emerald-950 font-medium ring-1 ring-emerald-500';
                badgeClasses = 'bg-emerald-700 text-white border-emerald-700';
              }
            }

            return (
              <button
                key={option.key}
                type="button"
                onClick={() => {
                  if (!isAnswered || !isInstantMode) {
                    onSelectOption(option.key);
                  }
                }}
                disabled={isAnswered && isInstantMode}
                className={`w-full group text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3.5 focus-visible:outline-2 focus-visible:outline-emerald-600 ${cardClasses}`}
              >
                {/* Option Letter Tag */}
                <span
                  className={`w-8 h-8 rounded-lg border font-mono font-bold text-sm flex items-center justify-center shrink-0 transition-colors ${badgeClasses}`}
                >
                  {option.key}
                </span>

                {/* Option Content in pure English */}
                <div className="flex-1 pt-1">
                  <div className="text-sm md:text-base font-medium leading-snug">
                    {option.textEn}
                  </div>
                </div>

                {/* Instant validation icon */}
                {iconElement}
              </button>
            );
          })}
        </div>

        {/* Immediate Feedback Card (Instant Mode) */}
        {isAnswered && isInstantMode && (
          <div className="mt-6 pt-6 border-t border-slate-200 animate-fadeIn">
            <div
              className={`p-5 rounded-xl border ${
                isCorrect
                  ? 'bg-emerald-50/60 border-emerald-200'
                  : 'bg-amber-50/60 border-amber-200'
              }`}
            >
              {/* Header with status badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">
                      {isCorrect ? 'Correct Answer!' : `Incorrect · The correct answer is (${question.correctAnswer})`}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                      <span>Instant Feedback</span>
                      <span aria-hidden="true">·</span>
                      <span>Scientific Rationale</span>
                    </div>
                  </div>
                </div>

                {/* Clear / Retake button */}
                <button
                  onClick={onClearAnswer}
                  title="Retry this question"
                  className="px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-lg border border-slate-300 transition-colors flex items-center gap-1 shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retry</span>
                </button>
              </div>

              {/* Scientific Explanation in English */}
              <div className="space-y-2.5 text-xs md:text-sm text-slate-700 mt-3 pt-3 border-t border-slate-200/60">
                <div className="font-sans leading-relaxed bg-white/70 p-3 rounded-lg border border-slate-200/50">
                  <span className="text-slate-900 font-semibold block mb-1">Scientific Explanation:</span>
                  {question.explanationEn}
                </div>

                {/* Pharmaceutical & Pharmacognosy Insight */}
                {question.pharmaceuticalInsight && (
                  <div className="p-3 bg-emerald-950 text-emerald-100 rounded-lg text-xs leading-relaxed flex items-start gap-2.5 mt-2">
                    <Pill className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-emerald-300 block mb-0.5">
                        Pharmaceutical & Pharmacognosy Insight:
                      </span>
                      <span className="text-emerald-100/90 font-mono text-[11px] leading-relaxed">
                        {question.pharmaceuticalInsight}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Keywords */}
              <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-500">
                <span className="font-medium text-slate-700">Key Concepts:</span>
                {question.keywords.map((kw, i) => (
                  <React.Fragment key={kw}>
                    <span>{kw}</span>
                    {i < question.keywords.length - 1 && <span aria-hidden="true">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Action / Question Navigation Buttons */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-colors flex items-center gap-1.5 ${
                hasPrev
                  ? 'border-slate-200 text-slate-700 hover:bg-slate-100 active:scale-98'
                  : 'border-slate-100 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={onNext}
              disabled={!hasNext}
              className={`px-5 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
                hasNext
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm active:scale-98'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Keyboard shortcut legend */}
          <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-400 font-mono">
            <span>Select: [A, B, C, D]</span>
            <span aria-hidden="true">·</span>
            <span>Next: [Space / →]</span>
            <span aria-hidden="true">·</span>
            <span>Bookmark: [B]</span>
          </div>
        </div>
      </div>
    </div>
  );
};
