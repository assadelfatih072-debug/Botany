import React from 'react';
import { Question } from '../types/quiz';
import { Printer, X } from 'lucide-react';

interface SummaryPrintViewProps {
  questions: Question[];
  onClose: () => void;
}

export const SummaryPrintView: React.FC<SummaryPrintViewProps> = ({ questions, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      {/* Top action bar (hidden during print) */}
      <div className="sticky top-0 bg-slate-900 text-white px-6 py-4 flex items-center justify-between no-print shadow-md">
        <div>
          <h2 className="text-base font-bold">
            Pharmaceutical Botany — Comprehensive Revision & Answer Key
          </h2>
          <p className="text-xs text-slate-300">
            All 60 Multiple-Choice Questions with Official Answers & Rationales
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Printable Sheet */}
      <div className="max-w-4xl mx-auto p-8 sm:p-12 space-y-8 font-sans text-left">
        {/* Document Header */}
        <div className="border-b-2 border-slate-900 pb-4 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Pharmaceutical Botany — 60 MCQs & Answer Key
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Official Course Examination Bank with Detailed Scientific Rationales
          </p>
        </div>

        {/* Quick Answer Key Matrix */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <h3 className="font-bold text-xs text-slate-700 mb-2 uppercase tracking-wider text-center">
            Master Answer Key (Questions 1 - 60)
          </h3>
          <div className="grid grid-cols-10 gap-1.5 text-center font-mono text-xs">
            {questions.map((q) => (
              <div key={q.id} className="p-1.5 bg-white border border-slate-200 rounded">
                <span className="text-slate-400 block text-[10px]">Q{q.id}</span>
                <span className="font-bold text-emerald-800 text-sm">{q.correctAnswer}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question List */}
        <div className="space-y-6">
          {questions.map((q) => {
            return (
              <div key={q.id} className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 break-inside-avoid">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-slate-400">Question {q.id} · {q.topic}</div>
                    <div className="font-semibold text-slate-900 text-sm">
                      {q.id}. {q.questionEn}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                    {q.correctAnswer}
                  </div>
                </div>

                {/* Options */}
                <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                  {q.options.map((opt) => (
                    <div
                      key={opt.key}
                      className={`p-2 rounded border ${
                        opt.key === q.correctAnswer
                          ? 'bg-emerald-50 border-emerald-400 font-semibold text-emerald-950'
                          : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      <strong className="mr-1">{opt.key}:</strong> {opt.textEn}
                    </div>
                  ))}
                </div>

                {/* Concise Rationale */}
                <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100 space-y-1 mt-2">
                  <div>
                    <strong className="text-emerald-900">Explanation:</strong> {q.explanationEn}
                  </div>
                  {q.pharmaceuticalInsight && (
                    <div className="text-emerald-800 font-mono text-[11px]">
                      <strong>Pharmaceutical Insight:</strong> {q.pharmaceuticalInsight}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
