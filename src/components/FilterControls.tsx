import React from 'react';
import { TOPICS_LIST } from '../data/questions';
import { Shuffle, BookmarkCheck } from 'lucide-react';

interface FilterControlsProps {
  selectedTopic: string;
  onSelectTopic: (topicId: string) => void;
  filterStatus: 'all' | 'unanswered' | 'wrong' | 'bookmarked';
  onChangeFilterStatus: (status: 'all' | 'unanswered' | 'wrong' | 'bookmarked') => void;
  onRandomQuestion: () => void;
  unansweredCount: number;
  wrongCount: number;
  bookmarkedCount: number;
}

export const FilterControls: React.FC<FilterControlsProps> = ({
  selectedTopic,
  onSelectTopic,
  filterStatus,
  onChangeFilterStatus,
  onRandomQuestion,
  unansweredCount,
  wrongCount,
  bookmarkedCount,
}) => {
  return (
    <div className="space-y-3">
      {/* Category Horizontal Scrolling Tabs (English) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {TOPICS_LIST.map((topic) => {
          const isActive = selectedTopic === topic.id;
          return (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors shrink-0 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              <span>{topic.nameEn}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {topic.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filter by answer state & Randomizer */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl">
          <button
            onClick={() => onChangeFilterStatus('all')}
            className={`px-2.5 py-1 rounded-lg transition-colors font-medium ${
              filterStatus === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All Questions
          </button>

          <button
            onClick={() => onChangeFilterStatus('unanswered')}
            className={`px-2.5 py-1 rounded-lg transition-colors font-medium flex items-center gap-1 ${
              filterStatus === 'unanswered'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Unanswered</span>
            {unansweredCount > 0 && (
              <span className="text-[10px] text-slate-500 bg-slate-200/80 px-1 rounded">
                {unansweredCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onChangeFilterStatus('wrong')}
            className={`px-2.5 py-1 rounded-lg transition-colors font-medium flex items-center gap-1 ${
              filterStatus === 'wrong'
                ? 'bg-white text-rose-700 shadow-xs'
                : 'text-slate-600 hover:text-rose-700'
            }`}
          >
            <span>Incorrect</span>
            {wrongCount > 0 && (
              <span className="text-[10px] text-rose-600 bg-rose-100 px-1 rounded font-bold">
                {wrongCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onChangeFilterStatus('bookmarked')}
            className={`px-2.5 py-1 rounded-lg transition-colors font-medium flex items-center gap-1 ${
              filterStatus === 'bookmarked'
                ? 'bg-white text-amber-800 shadow-xs'
                : 'text-slate-600 hover:text-amber-700'
            }`}
          >
            <BookmarkCheck className="w-3 h-3 text-amber-600" />
            <span>Bookmarked</span>
            {bookmarkedCount > 0 && (
              <span className="text-[10px] text-amber-700 bg-amber-100 px-1 rounded font-bold">
                {bookmarkedCount}
              </span>
            )}
          </button>
        </div>

        {/* Random Question Button */}
        <button
          onClick={onRandomQuestion}
          className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium transition-colors flex items-center gap-1.5 text-xs shadow-xs"
        >
          <Shuffle className="w-3.5 h-3.5 text-slate-500" />
          <span>Random Question</span>
        </button>
      </div>
    </div>
  );
};
