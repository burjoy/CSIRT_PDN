import React, { useState } from "react";
import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import ArticleList from "../components/lists/ArticleList";
import { ChevronLeft, ChevronRight, Newspaper } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ArticleCard from "../components/page-components/ArticleCard";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 480px)": {
        slides: {
          perView: 1.2,
          spacing: 16,
        },
      },
      "(min-width: 640px)": {
        slides: {
          perView: 1.8,
          spacing: 20,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 2.2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 2.8,
          spacing: 24,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 3.2,
          spacing: 28,
        },
      },
      "(min-width: 1536px)": {
        slides: {
          perView: 3.5,
          spacing: 32,
        },
      },
    },
    initial: 0,
    slideChanged(slider) {
      console.log(slider.track.details);
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  
  return (
    <>
      <Hero />
      <Stats />
      <div className=""> 
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="p-2 sm:p-3 bg-blue-500/20 rounded-xl sm:rounded-2xl border border-blue-500/30">
                <Newspaper className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Articles
              </span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
              Stay updated with the latest trends, insights, and stories from
              the world of technology and development
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative px-4 sm:px-8 lg:px-12">
            {/* Navigation Arrows - Hidden on mobile */}
            {loaded && instanceRef.current && (
              <>
                <button
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 transition-all duration-200 hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentSlide === 0}
                  aria-label="Previous article"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={(e) => {
                    console.log(instanceRef.current);
                    e.stopPropagation() || instanceRef.current?.next();
                  }}
                  className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full items-center justify-center text-white hover:bg-white/20 transition-all duration-200 hover:scale-110 shadow-lg"
                  aria-label="Next article"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Slider */}
            <div
              ref={sliderRef}
              className="keen-slider"
            >
              <ArticleList homeRendered={true}/>
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex sm:hidden justify-center mt-6 space-x-4">
              <button
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === 0}
                aria-label="Previous article"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
                aria-label="Next article"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Dots indicator */}
            {loaded && instanceRef.current && (
              <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
                {[
                  ...Array(
                    Math.min(instanceRef.current.track.details.slides.length, 8)
                  ).keys(),
                ].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      currentSlide === idx
                        ? "bg-blue-400 w-6 sm:w-8"
                        : "bg-slate-600 hover:bg-slate-500 w-2"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 text-sm sm:text-base">
              View All Articles
            </button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
