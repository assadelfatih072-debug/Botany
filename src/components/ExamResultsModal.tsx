import React from 'react';
import { Question } from '../types/quiz';
import { Trophy, CheckCircle2, XCircle, RotateCcw, Eye } from 'lucide-react';

interface ExamResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  userAnswers: Record<number, { selectedOption: string; isCorrect: boolean }>;
  onReviewMistakes: () => void;
  onRetakeExam: () => void;
}

export const ExamResultsModal: React.FC<ExamResultsModalProps> = ({
  isOpen,
  onClose,
  questions,
  userAnswers,
  onReviewMistakes,
  onRetakeExam,
}) => {
  if (!isOpen) return null;

  const total = questions.length;
  let correctCount = 0;
  let answeredCount = 0;

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (ans) {
      answeredCount++;
      if (ans.isCorrect) correctCount++;
    }
  });

  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const incorrectCount = answeredCount - correctCount;
  const unansweredCount = total - answeredCount;

  let grade = 'Distinction (Excellent)';
  let gradeColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
  if (percentage < 60) {
    grade = 'Needs Improvement';
    gradeColor = 'text-rose-700 bg-rose-50 border-rose-200';
  } else if (percentage < 75) {
    grade = 'Good';
    gradeColor = 'text-amber-700 bg-amber-50 border-amber-200';
  } else if (percentage < 85) {
    grade = 'Very Good';
    gradeColor = 'text-blue-700 bg-blue-50 border-blue-200';
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 animate-fadeIn my-8">
        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Exam Performance Summary
          </h2>
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${gradeColor}`}>
            {grade}
          </div>
        </div>

        {/* Score Visual */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 mb-6 text-center">
          <div className="text-4xl md:text-5xl font-mono font-bold text-slate-900 mb-1">
            {correctCount} <span className="text-xl text-slate-400 font-sans">/ {total}</span>
          </div>
          <div className="text-sm font-semibold text-emerald-700">
            Score: {percentage}%
          </div>

          {/* Breakdown Stats */}
          <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-slate-200 text-center">
            <div>
              <div className="text-xs text-slate-500 mb-1">Correct</div>
              <div className="text-lg font-mono font-bold text-emerald-600 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> {correctCount}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-1">Incorrect</div>
              <div className="text-lg font-mono font-bold text-rose-500 flex items-center justify-center gap-1">
                <XCircle className="w-4 h-4" /> {incorrectCount}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500 mb-1">Unanswered</div>
              <div className="text-lg font-mono font-bold text-slate-400">
                {unansweredCount}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          {incorrectCount > 0 && (
            <button
              onClick={onReviewMistakes}
              className="w-full py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-sm font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Eye className="w-4 h-4" />
              <span>Review Incorrect Questions ({incorrectCount})</span>
            </button>
          )}

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onRetakeExam}
              className="py-2.5 px-4 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4 text-slate-500" />
              <span>Retake Exam</span>
            </button>

            <button
              onClick={onClose}
              className="py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Back to Quiz</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
