import React, { useState } from 'react';
import { Question } from '../types/quiz';
import { RotateCw, Check, ArrowRight, ArrowLeft, Bookmark, Pill } from 'lucide-react';

interface FlashcardsViewProps {
  questions: Question[];
  bookmarkedIds: Set<number>;
  onToggleBookmark: (id: number) => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  questions,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownIds, setKnownIds] = useState<Set<number>>(new Set());

  if (questions.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center">
        <p className="text-slate-600">No flashcards available in this category.</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const isBookmarked = bookmarkedIds.has(currentQ.id);
  const isKnown = knownIds.has(currentQ.id);
  const correctOption = currentQ.options.find((o) => o.key === currentQ.correctAnswer);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + questions.length) % questions.length);
  };

  const handleToggleKnown = () => {
    setKnownIds((prev) => {
      const next = new Set(prev);
      if (next.has(currentQ.id)) next.delete(currentQ.id);
      else next.add(currentQ.id);
      return next;
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Header info */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-2">
        <div className="flex items-center gap-2">
          <span>Card {currentIndex + 1} of {questions.length}</span>
          <span aria-hidden="true">·</span>
          <span>{currentQ.topic}</span>
        </div>
        <div>
          <span>Mastered: <strong className="text-emerald-700 font-mono">{knownIds.size}</strong></span>
        </div>
      </div>

      {/* Flip Card Container */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="cursor-pointer min-h-[380px] bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 md:p-8 flex flex-col justify-between hover:border-emerald-600/40 transition-all select-none relative"
      >
        {/* Top Badges */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-emerald-800">
            {isFlipped ? 'Answer & Explanation' : 'Question'}
          </span>

          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => onToggleBookmark(currentQ.id)}
              className={`p-1.5 rounded-lg border text-xs ${
                isBookmarked
                  ? 'bg-amber-50 text-amber-600 border-amber-200'
                  : 'text-slate-400 border-slate-200 hover:text-slate-600'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
            </button>
            <div className="text-slate-400 flex items-center gap-1 text-xs">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Click to flip</span>
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div className="my-auto py-6">
          {!isFlipped ? (
            /* Front of Card: Question & Options Preview */
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-relaxed text-left">
                {currentQ.questionEn}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {currentQ.options.map((opt) => (
                  <div key={opt.key} className="text-xs p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                    <strong className="font-mono text-emerald-800 mr-1.5">{opt.key}:</strong> {opt.textEn}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Back of Card: Answer & Scientific Explanation */
            <div className="space-y-3 animate-fadeIn">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold font-mono text-base shrink-0">
                  {currentQ.correctAnswer}
                </div>
                <div className="text-left flex-1">
                  <div className="text-xs text-emerald-800 font-semibold">Correct Answer</div>
                  <div className="text-sm font-bold text-slate-900">{correctOption?.textEn}</div>
                </div>
              </div>

              <div className="text-xs md:text-sm text-slate-700 space-y-2 pt-2">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 leading-relaxed">
                  <strong className="text-slate-900 block mb-0.5">Scientific Rationale:</strong>
                  {currentQ.explanationEn}
                </div>

                {currentQ.pharmaceuticalInsight && (
                  <div className="bg-emerald-950 text-emerald-100 p-3 rounded-lg text-xs leading-relaxed flex items-start gap-2">
                    <Pill className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-emerald-300 block mb-0.5">Pharmaceutical Insight:</strong>
                      <span className="font-mono text-[11px] text-emerald-100/90">{currentQ.pharmaceuticalInsight}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Card Footer */}
        <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-100">
          {isFlipped ? 'Click to view question' : 'Click to reveal answer & rationale'}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          onClick={handlePrev}
          className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <button
          onClick={handleToggleKnown}
          className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-colors flex items-center gap-1.5 ${
            isKnown
              ? 'bg-emerald-700 text-white border-emerald-700'
              : 'border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
          }`}
        >
          <Check className="w-4 h-4" />
          <span>{isKnown ? 'Mastered ✓' : 'I Know This'}</span>
        </button>

        <button
          onClick={handleNext}
          className="px-5 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
        >
          <span>Next</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
