import { User, Calendar, Tag } from "lucide-react";

const ActivityCard = ({ img, title, subtitle, desc, month, day, author }) => {
  return (
    <div class="xl:w-1/4 md:w-1/2 p-4">
      <article className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group">
        {/* Header with date and category */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="text-center">
              <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                {month}
              </div>
              <div className="text-white text-xl sm:text-2xl font-bold">
                {day}
              </div>
            </div>
            <div className="h-10 sm:h-12 w-px bg-gradient-to-b from-slate-600 to-transparent"></div>
          </div>
          <div className="flex items-center">
            <Tag className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mr-1 sm:mr-2" />
            <span className="bg-blue-500/20 text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-blue-500/30">
              {subtitle}
            </span>
          </div>
        </div>

        {/* Article image */}
        {img && (
          <div className="mb-4 overflow-hidden rounded-lg sm:rounded-xl">
            <img
              src={img}
              alt={title}
              className="w-full h-24 sm:h-32 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex-grow">
          <h2 className="text-white text-base sm:text-lg font-bold mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors duration-200 leading-tight">
            {title}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
            {desc}
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center pt-3 sm:pt-4 border-t border-slate-700/50">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
            <User
              size={12}
              className="sm:w-4 sm:h-4 text-white"
            />
          </div>
          <div className="ml-2 sm:ml-3 flex-grow">
            <span className="text-slate-200 text-xs sm:text-sm font-medium">
              {author}
            </span>
          </div>
          <div className="flex items-center text-slate-400">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span className="text-xs">
              {month} {day}
            </span>
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl pointer-events-none"></div>
      </article>
    </div>
  );
};

export default ActivityCard;
