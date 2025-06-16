import { User } from 'lucide-react';
import { useReducer } from 'react';
import { initial_state, StateReducer } from '../../state_management/StateReducer';

const ArticleCard = ({ 
  title, 
  desc, 
  month, 
  day, 
  category, 
  author, 
  image,
  homeRendered
}) => {
  // const [state, dispatch] = useReducer(StateReducer, initial_state);
  return (
    <div className={homeRendered ? "keen-slider__slide" : "xl:w-1/4 md:w-1/2 p-4"}>
      <article className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 h-full shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
        {/* Header with date and category */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                {month}
              </div>
              <div className="text-white text-2xl font-bold">
                {day}
              </div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-slate-600 to-transparent"></div>
          </div>
          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-500/30">
            {category}
          </span>
        </div>

        {/* Article image */}
        {image && (
          <div className="mb-4 overflow-hidden rounded-xl">
            <img
              src={image}
              alt={title}
              className="w-full h-32 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-grow">
          <h2 className="text-white text-lg font-bold mb-3 line-clamp-2 hover:text-blue-300 transition-colors duration-200">
            {title}
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {desc}
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center pt-4 border-t border-slate-700/50">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <User size={14} className="text-white" />
          </div>
          <div className="ml-3">
            <span className="text-slate-200 text-sm font-medium">{author}</span>
          </div>
          <div className="ml-auto">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;