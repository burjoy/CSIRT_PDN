import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight, Newspaper } from 'lucide-react';
import 'keen-slider/keen-slider.min.css';
import ArticleCard from './../page-components/ArticleCard';
import { ListCoba } from '../../src/db/ListCoba';

const ArticleList = () => {
  const [articles] = useState(ListCoba);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
      '(min-width: 1280px)': {
        slides: {
          perView: 3.5,
          spacing: 28,
        },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-blue-500/20 rounded-2xl border border-blue-500/30">
              <Newspaper className="w-8 h-8 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Articles</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and stories from the world of technology and development
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {loaded && instanceRef.current && (
            <>
              <button
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 hover:scale-110 shadow-lg"
                disabled={currentSlide === 0}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 hover:scale-110 shadow-lg"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                desc={article.desc}
                month={article.month}
                day={article.day}
                category={article.category}
                author={article.author}
                image={article.image}
              />
            ))}
          </div>

          {/* Dots indicator */}
          {loaded && instanceRef.current && (
            <div className="flex justify-center mt-8 space-x-2">
              {[
                ...Array(instanceRef.current.track.details.slides.length).keys(),
              ].map((idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    currentSlide === idx
                      ? 'bg-blue-400 w-8'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticleList;