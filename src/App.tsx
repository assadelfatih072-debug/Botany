/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { QUESTIONS_DATA, TOPICS_LIST } from './data/questions';
import { OptionKey, QuizMode } from './types/quiz';
import { soundEffects } from './utils/audio';
import { Header } from './components/Header';
import { StatsBar } from './components/StatsBar';
import { FilterControls } from './components/FilterControls';
import { QuestionCard } from './components/QuestionCard';
import { QuestionNavigator } from './components/QuestionNavigator';
import { FlashcardsView } from './components/FlashcardsView';
import { ExamResultsModal } from './components/ExamResultsModal';
import { SummaryPrintView } from './components/SummaryPrintView';
import { 
  Sparkles, 
  HelpCircle, 
  ListFilter
} from 'lucide-react';

const HERO_IMAGE_PATH = '/src/assets/images/botany_pharmacy_hero_1790281613044.jpg';

export default function App() {
  // Modes & Filtering
  const [currentMode, setCurrentMode] = useState<QuizMode>('instant');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'unanswered' | 'wrong' | 'bookmarked'>('all');
  
  // Selected question in filtered list (strictly one-by-one single question view)
  const [currentFilteredIndex, setCurrentFilteredIndex] = useState<number>(0);

  // User responses & bookmarks
  const [userAnswers, setUserAnswers] = useState<Record<number, { selectedOption: OptionKey; isCorrect: boolean }>>(() => {
    try {
      const saved = localStorage.getItem('botany_user_answers_en');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem('botany_bookmarks_en');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Streaks & Audio
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);

  // Modals
  const [showExamResults, setShowExamResults] = useState<boolean>(false);
  const [showPrintSheet, setShowPrintSheet] = useState<boolean>(false);

  // Persist answers
  useEffect(() => {
    try {
      localStorage.setItem('botany_user_answers_en', JSON.stringify(userAnswers));
    } catch {
      // Ignore
    }
  }, [userAnswers]);

  // Persist bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('botany_bookmarks_en', JSON.stringify(Array.from(bookmarkedIds)));
    } catch {
      // Ignore
    }
  }, [bookmarkedIds]);

  // Sync sound settings
  useEffect(() => {
    soundEffects.enabled = soundEnabled;
  }, [soundEnabled]);

  // Calculate filtered questions list
  const filteredQuestions = useMemo(() => {
    return QUESTIONS_DATA.filter((q) => {
      // Topic filter
      if (selectedTopic !== 'all' && q.topic !== selectedTopic) {
        return false;
      }

      // Mode-specific pre-filters
      if (currentMode === 'mistakes') {
        const ans = userAnswers[q.id];
        return ans && !ans.isCorrect;
      }
      if (currentMode === 'bookmarks') {
        return bookmarkedIds.has(q.id);
      }

      // Status sub-filters
      if (filterStatus === 'unanswered') {
        return !userAnswers[q.id];
      }
      if (filterStatus === 'wrong') {
        const ans = userAnswers[q.id];
        return ans && !ans.isCorrect;
      }
      if (filterStatus === 'bookmarked') {
        return bookmarkedIds.has(q.id);
      }

      return true;
    });
  }, [selectedTopic, currentMode, filterStatus, userAnswers, bookmarkedIds]);

  // Keep index within bounds
  useEffect(() => {
    if (currentFilteredIndex >= filteredQuestions.length) {
      setCurrentFilteredIndex(Math.max(0, filteredQuestions.length - 1));
    }
  }, [filteredQuestions.length, currentFilteredIndex]);

  // Stats calculation
  const stats = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    let answered = 0;
    const wrongIds: number[] = [];

    QUESTIONS_DATA.forEach((q) => {
      const ans = userAnswers[q.id];
      if (ans) {
        answered++;
        if (ans.isCorrect) correct++;
        else {
          incorrect++;
          wrongIds.push(q.id);
        }
      }
    });

    const unanswered = QUESTIONS_DATA.length - answered;

    return {
      total: QUESTIONS_DATA.length,
      answered,
      correct,
      incorrect,
      unanswered,
      wrongIds,
      bookmarksCount: bookmarkedIds.size,
    };
  }, [userAnswers, bookmarkedIds]);

  // Current active question (strictly 1 question at a time)
  const currentQuestion = filteredQuestions[currentFilteredIndex] || QUESTIONS_DATA[0];

  // Option selection handler
  const handleSelectOption = (optionKey: OptionKey) => {
    if (!currentQuestion) return;

    const isCorrect = optionKey === currentQuestion.correctAnswer;
    const isInstant = currentMode === 'instant' || currentMode === 'mistakes' || currentMode === 'bookmarks';

    if (isInstant) {
      if (isCorrect) {
        soundEffects.playCorrect();
        setCurrentStreak((prev) => {
          const next = prev + 1;
          if (next > maxStreak) setMaxStreak(next);
          return next;
        });
      } else {
        soundEffects.playIncorrect();
        setCurrentStreak(0);
      }
    } else {
      soundEffects.playClick();
    }

    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        selectedOption: optionKey,
        isCorrect,
      },
    }));
  };

  // Clear answer for current question to retry
  const handleClearAnswer = () => {
    if (!currentQuestion) return;
    setUserAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
  };

  // Bookmark toggle
  const handleToggleBookmark = (id?: number) => {
    const targetId = id !== undefined ? id : currentQuestion?.id;
    if (!targetId) return;

    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(targetId)) next.delete(targetId);
      else next.add(targetId);
      return next;
    });
  };

  // Reset entire progress
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all answers and start fresh?')) {
      setUserAnswers({});
      setCurrentStreak(0);
      try {
        localStorage.removeItem('botany_user_answers_en');
      } catch {
        // Ignore
      }
    }
  };

  // Jump to specific question
  const handleSelectQuestionById = (questionId: number) => {
    const idx = filteredQuestions.findIndex((q) => q.id === questionId);
    if (idx !== -1) {
      setCurrentFilteredIndex(idx);
    } else {
      setSelectedTopic('all');
      setFilterStatus('all');
      if (currentMode === 'mistakes' || currentMode === 'bookmarks') {
        setCurrentMode('instant');
      }
      const allIdx = QUESTIONS_DATA.findIndex((q) => q.id === questionId);
      if (allIdx !== -1) {
        setCurrentFilteredIndex(allIdx);
      }
    }
  };

  // Random question picker
  const handleRandomQuestion = () => {
    if (filteredQuestions.length === 0) return;
    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    setCurrentFilteredIndex(randomIndex);
    soundEffects.playClick();
  };

  const handleNextQuestion = () => {
    if (currentFilteredIndex < filteredQuestions.length - 1) {
      setCurrentFilteredIndex(currentFilteredIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentFilteredIndex > 0) {
      setCurrentFilteredIndex(currentFilteredIndex - 1);
    }
  };

  const activeTopicObj = TOPICS_LIST.find((t) => t.id === selectedTopic);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-emerald-600 selection:text-white">
      {/* Header */}
      <Header
        currentMode={currentMode}
        onSelectMode={(mode) => {
          setCurrentMode(mode);
          setCurrentFilteredIndex(0);
        }}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        onReset={handleReset}
        onOpenPrint={() => setShowPrintSheet(true)}
        bookmarksCount={stats.bookmarksCount}
        mistakesCount={stats.wrongIds.length}
      />

      {/* Hero Banner Section */}
      <section className="bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src={HERO_IMAGE_PATH}
            alt="Pharmaceutical Botany Illustration"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-emerald-950/80 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8 relative z-10">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Instant Feedback & Scientific Rationales</span>
              <span aria-hidden="true">·</span>
              <span>One Question at a Time (60 MCQs)</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
              Pharmaceutical Botany Examination Bank
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Master the core foundations: Characteristics of Life, Cellular Architecture, Metabolism & Homeostasis, Growth & DNA, Reproduction, Plant vs Animal Tropisms, and Modern Botanical Scopes.
            </p>
          </div>

          {/* Metrics summary */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-slate-800/60 backdrop-blur-xs p-2.5 rounded-xl border border-slate-700/60">
              <span className="text-slate-400 block text-[11px]">Active Mode</span>
              <strong className="text-emerald-400 font-medium text-xs sm:text-sm">
                {currentMode === 'instant' && 'Instant Correction'}
                {currentMode === 'exam' && 'Full Exam Mode'}
                {currentMode === 'flashcards' && 'Flashcards'}
                {currentMode === 'mistakes' && 'Mistakes Review'}
                {currentMode === 'bookmarks' && 'Bookmarked'}
              </strong>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xs p-2.5 rounded-xl border border-slate-700/60">
              <span className="text-slate-400 block text-[11px]">Completed</span>
              <strong className="text-white font-mono font-bold text-xs sm:text-sm">
                {stats.answered} / 60 ({Math.round((stats.answered / 60) * 100)}%)
              </strong>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xs p-2.5 rounded-xl border border-slate-700/60">
              <span className="text-slate-400 block text-[11px]">Overall Accuracy</span>
              <strong className="text-emerald-300 font-mono font-bold text-xs sm:text-sm">
                {stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 0}%
              </strong>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xs p-2.5 rounded-xl border border-slate-700/60 flex items-center justify-between">
              <div>
                <span className="text-slate-400 block text-[11px]">Best Streak</span>
                <strong className="text-amber-400 font-mono font-bold text-xs sm:text-sm">
                  {maxStreak} in a row
                </strong>
              </div>
              {currentMode === 'exam' && (
                <button
                  onClick={() => setShowExamResults(true)}
                  className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[11px] font-semibold transition-colors"
                >
                  Finish Exam
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8 flex-1 w-full">
        {/* Flashcards View */}
        {currentMode === 'flashcards' ? (
          <div className="space-y-6">
            <FilterControls
              selectedTopic={selectedTopic}
              onSelectTopic={(topicId) => {
                setSelectedTopic(topicId);
                setCurrentFilteredIndex(0);
              }}
              filterStatus={filterStatus}
              onChangeFilterStatus={(status) => {
                setFilterStatus(status);
                setCurrentFilteredIndex(0);
              }}
              onRandomQuestion={handleRandomQuestion}
              unansweredCount={stats.unanswered}
              wrongCount={stats.wrongIds.length}
              bookmarkedCount={stats.bookmarksCount}
            />

            <FlashcardsView
              questions={filteredQuestions}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
            />
          </div>
        ) : (
          /* Single-Question Centric Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Primary Column: Question Card & Controls (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              {/* Stats & Progress Bar */}
              <StatsBar
                totalQuestions={filteredQuestions.length}
                answeredCount={filteredQuestions.filter((q) => !!userAnswers[q.id]).length}
                correctCount={filteredQuestions.filter((q) => userAnswers[q.id]?.isCorrect).length}
                incorrectCount={
                  filteredQuestions.filter((q) => userAnswers[q.id] && !userAnswers[q.id].isCorrect).length
                }
                currentStreak={currentStreak}
                maxStreak={maxStreak}
                topicName={activeTopicObj?.nameEn || 'All Topics'}
              />

              {/* Topic & Status Filter Controls */}
              <FilterControls
                selectedTopic={selectedTopic}
                onSelectTopic={(topicId) => {
                  setSelectedTopic(topicId);
                  setCurrentFilteredIndex(0);
                }}
                filterStatus={filterStatus}
                onChangeFilterStatus={(status) => {
                  setFilterStatus(status);
                  setCurrentFilteredIndex(0);
                }}
                onRandomQuestion={handleRandomQuestion}
                unansweredCount={stats.unanswered}
                wrongCount={stats.wrongIds.length}
                bookmarkedCount={stats.bookmarksCount}
              />

              {/* Pure Single Question View with Instant Correction */}
              {filteredQuestions.length > 0 ? (
                <QuestionCard
                  question={currentQuestion}
                  questionNumber={currentFilteredIndex + 1}
                  totalFilteredCount={filteredQuestions.length}
                  selectedOption={userAnswers[currentQuestion.id]?.selectedOption}
                  isAnswered={!!userAnswers[currentQuestion.id]}
                  onSelectOption={handleSelectOption}
                  onNext={handleNextQuestion}
                  onPrev={handlePrevQuestion}
                  hasPrev={currentFilteredIndex > 0}
                  hasNext={currentFilteredIndex < filteredQuestions.length - 1}
                  isBookmarked={bookmarkedIds.has(currentQuestion.id)}
                  onToggleBookmark={() => handleToggleBookmark(currentQuestion.id)}
                  onClearAnswer={handleClearAnswer}
                  isInstantMode={currentMode !== 'exam'}
                />
              ) : (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 mx-auto flex items-center justify-center">
                    <ListFilter className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-slate-800">No questions match the current filter</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Try switching topic categories or selecting "All Questions" to display all 60 items.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedTopic('all');
                      setFilterStatus('all');
                    }}
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    View All 60 Questions
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar Column: Question Navigator Matrix (4 Cols) */}
            <div className="lg:col-span-4 space-y-4">
              {/* Question Navigator (1..60) */}
              <QuestionNavigator
                questions={QUESTIONS_DATA}
                currentQuestionId={currentQuestion?.id || 1}
                userAnswers={userAnswers}
                bookmarkedIds={bookmarkedIds}
                onSelectQuestion={handleSelectQuestionById}
              />

              {/* Topics Performance Breakdown Card */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
                    Topics Breakdown
                  </h4>
                  <span className="text-[11px] text-slate-400">7 Units</span>
                </div>

                <div className="space-y-2 text-xs">
                  {TOPICS_LIST.filter((t) => t.id !== 'all').map((topic) => {
                    const topicQuestions = QUESTIONS_DATA.filter((q) => q.topic === topic.id);
                    const answeredTopic = topicQuestions.filter((q) => !!userAnswers[q.id]);
                    const correctTopic = topicQuestions.filter((q) => userAnswers[q.id]?.isCorrect);
                    const pct = answeredTopic.length > 0 ? Math.round((correctTopic.length / answeredTopic.length) * 100) : 0;

                    return (
                      <button
                        key={topic.id}
                        onClick={() => {
                          setSelectedTopic(topic.id);
                          setCurrentFilteredIndex(0);
                        }}
                        className={`w-full text-left p-2.5 rounded-xl border transition-colors flex items-center justify-between gap-2 ${
                          selectedTopic === topic.id
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold'
                            : 'bg-slate-50 border-slate-200/70 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="truncate">
                          <span className="block truncate text-xs">{topic.nameEn}</span>
                          <span className="text-[10px] text-slate-400 block font-normal">
                            {answeredTopic.length}/{topicQuestions.length} answered
                          </span>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-mono text-xs font-bold text-emerald-800">
                            {answeredTopic.length > 0 ? `${pct}%` : '—'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Study Tips Card */}
              <div className="bg-emerald-950 text-emerald-100 rounded-2xl p-5 shadow-xs text-xs space-y-2">
                <div className="flex items-center gap-2 text-emerald-300 font-bold">
                  <HelpCircle className="w-4 h-4" />
                  <span>How to Study Effectively</span>
                </div>
                <p className="text-emerald-100/90 leading-relaxed text-[11px]">
                  In <strong>Instant Correction</strong> mode, click any option [A, B, C, D] to immediately validate your answer. Detailed scientific explanations and pharmacognosy insights appear instantly below the card. Use <strong>Next</strong> or keyboard shortcut [Space / Right Arrow] to move smoothly to the next question.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Exam Results Modal */}
      <ExamResultsModal
        isOpen={showExamResults}
        onClose={() => setShowExamResults(false)}
        questions={QUESTIONS_DATA}
        userAnswers={userAnswers}
        onReviewMistakes={() => {
          setShowExamResults(false);
          setCurrentMode('mistakes');
          setCurrentFilteredIndex(0);
        }}
        onRetakeExam={() => {
          setShowExamResults(false);
          setUserAnswers({});
          setCurrentFilteredIndex(0);
        }}
      />

      {/* Printable Cheat-Sheet Sheet */}
      {showPrintSheet && (
        <SummaryPrintView
          questions={QUESTIONS_DATA}
          onClose={() => setShowPrintSheet(false)}
        />
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">Pharmaceutical Botany MCQs</span>
            <span aria-hidden="true">·</span>
            <span>Comprehensive 60 Questions Bank</span>
            <span aria-hidden="true">·</span>
            <span>Instant Feedback & Scientific Insights</span>
          </div>
          <div>
            <span>Tailored for Pharmacy, Pharmacognosy & Botanical Science Curricula</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
