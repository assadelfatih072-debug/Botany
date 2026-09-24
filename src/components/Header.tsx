import React from 'react';
import { Volume2, VolumeX, RotateCcw, Printer, Bookmark, Sparkles, BookOpen, AlertCircle } from 'lucide-react';
import { QuizMode } from '../types/quiz';

interface HeaderProps {
  currentMode: QuizMode;
  onSelectMode: (mode: QuizMode) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onReset: () => void;
  onOpenPrint: () => void;
  bookmarksCount: number;
  mistakesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentMode,
  onSelectMode,
  soundEnabled,
  onToggleSound,
  onReset,
  onOpenPrint,
  bookmarksCount,
  mistakesCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onSelectMode('instant');
            }}
            className="flex items-center gap-2.5 group text-left"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:bg-emerald-800 transition-colors">
              PB
            </div>
            <div>
              <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 block leading-tight">
                Pharmaceutical Botany
              </span>
              <span className="text-xs text-emerald-700 font-medium block">
                Question Bank · 60 MCQs
              </span>
            </div>
          </a>
        </div>

        {/* Navigation modes (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl">
          <button
            onClick={() => onSelectMode('instant')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
              currentMode === 'instant'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Correction</span>
          </button>

          <button
            onClick={() => onSelectMode('exam')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
              currentMode === 'exam'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Exam Mode</span>
          </button>

          <button
            onClick={() => onSelectMode('flashcards')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              currentMode === 'flashcards'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <span>Flashcards</span>
          </button>

          <button
            onClick={() => onSelectMode('mistakes')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
              currentMode === 'mistakes'
                ? 'bg-rose-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Mistakes</span>
            {mistakesCount > 0 && (
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                currentMode === 'mistakes' ? 'bg-white/20 text-white' : 'bg-rose-100 text-rose-700 font-bold'
              }`}>
                {mistakesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onSelectMode('bookmarks')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
              currentMode === 'bookmarks'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Bookmark className="w-3 h-3" />
            <span>Bookmarked</span>
            {bookmarksCount > 0 && (
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                currentMode === 'bookmarks' ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800 font-bold'
              }`}>
                {bookmarksCount}
              </span>
            )}
          </button>
        </nav>

        {/* Actions & utilities */}
        <div className="flex items-center gap-2">
          {/* Sound toggle */}
          <button
            onClick={onToggleSound}
            title={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
            aria-label="Toggle sound"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-700" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Printable Cheat Sheet */}
          <button
            onClick={onOpenPrint}
            title="Print or export Answer Key & Review Sheet"
            className="px-2.5 py-1.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 hidden sm:flex items-center gap-1.5 text-xs font-medium"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>Print Sheet</span>
          </button>

          {/* Reset progress */}
          <button
            onClick={onReset}
            title="Reset answers & progress"
            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors border border-slate-200"
            aria-label="Reset progress"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Mode Bar */}
      <div className="lg:hidden flex items-center justify-between px-3 py-2 border-t border-slate-100 bg-slate-50 overflow-x-auto gap-1">
        <button
          onClick={() => onSelectMode('instant')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap ${
            currentMode === 'instant' ? 'bg-emerald-700 text-white' : 'text-slate-600'
          }`}
        >
          Instant Correction
        </button>
        <button
          onClick={() => onSelectMode('exam')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap ${
            currentMode === 'exam' ? 'bg-emerald-700 text-white' : 'text-slate-600'
          }`}
        >
          Exam Mode
        </button>
        <button
          onClick={() => onSelectMode('flashcards')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap ${
            currentMode === 'flashcards' ? 'bg-emerald-700 text-white' : 'text-slate-600'
          }`}
        >
          Cards
        </button>
        <button
          onClick={() => onSelectMode('mistakes')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap flex items-center gap-1 ${
            currentMode === 'mistakes' ? 'bg-rose-700 text-white' : 'text-slate-600'
          }`}
        >
          Mistakes ({mistakesCount})
        </button>
        <button
          onClick={() => onSelectMode('bookmarks')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap flex items-center gap-1 ${
            currentMode === 'bookmarks' ? 'bg-amber-600 text-white' : 'text-slate-600'
          }`}
        >
          Bookmarked ({bookmarksCount})
        </button>
      </div>
    </header>
  );
};
