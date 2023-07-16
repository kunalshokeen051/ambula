import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import LanguageDropdown from './languages';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { SearchIcon, TrendingUpIcon, GlobeIcon } from '@heroicons/react/outline';

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const observer = useRef();

  const fetchMovies = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API}&language=en-US&sort_by=popularity.desc&page=${page}&query=${searchQuery}`
      );
      setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [page, searchQuery]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        fetchMovies();
      }
    }, options);

    if (observer.current && observer.current.root) {
      observer.current.observe(observer.current.root);
    }

    return () => {
      if (observer.current && observer.current.root) {
        observer.current.disconnect();
      }
    };
  }, [isLoading]);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setModalOpen(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  const sentinelRef = useRef(null);

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <button className=" button flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none">
            <TrendingUpIcon className="w-5 h-5" />
            <span>Trending</span>
          </button>
          <LanguageDropdown/>
          <div className="relative md:flex hidden">
            <input
              type="text"
              placeholder="Search Movies"
              className="border border-gray-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg px-4 py-2"
              value={searchQuery}
              onChange={handleSearch}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {movies.map((movie, index) => {
          if (index === movies.length - 1) {
            return (
              <div ref={sentinelRef} key={movie.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openModal(movie)}
                  className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-48 object-cover lazy"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium">{movie.title}</h3>
                    <p className="text-gray-500">{movie.release_date}</p>
                  </div>
                </motion.div>
              </div>
            );
          } else {
            return (
              <motion.div
                key={movie.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openModal(movie)}
                className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-48 object-cover lazy"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium">{movie.title}</h3>
                  <p className="text-gray-500">{movie.release_date}</p>
                </div>
              </motion.div>
            );
          }
        })}
      </div>
      {isLoading && (
        <div className="flex justify-center mt-4">
          <div className="animate-pulse bg-gray-100 rounded-lg overflow-hidden">
            <div className="w-full h-48" />
            <div className="p-4">
              <div className="w-2/3 h-6 bg-gray-200 mb-2" />
              <div className="w-1/4 h-4 bg-gray-200" />
            </div>
          </div>
        </div>
      )}
      <Dialog
        open={modalOpen}
        onClose={closeModal}
        className="fixed inset-0 z-10 flex items-center justify-center"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
        {selectedMovie && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed  bg-white rounded-lg p-2 shadow-lg md:p-6 md:mx-0 md:my-0 my-8 mx-4 md:h-fit z-20"
          >
            <div className="flex space-x-4">
              <img
                src={`https://image.tmdb.org/t/p/w300${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
                className="md:w-48 w-20 h-auto object-cover"
              />
              <div>
                <h2 className="text-2xl mb-4">{selectedMovie.title}</h2>
                <p>{selectedMovie.overview}</p>
                <p className="mt-2 text-blue/70">
                  <span className="font-medium">Rating:</span> {selectedMovie.vote_average}/10
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 space-x-2">
                  <a
                    href={"https://in.bookmyshow.com/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 flex button hover:scale-90 duration-200 transition-all"
                  >
                    Buy Tickets
                  </a>
                  <a
                    href={"https://www.netflix.com/in/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 border-2 border-blue hover:scale-90 duration-200 button transition-all p-2 rounded-lg "
                  >
                    Watch Trailer
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </Dialog>
      <div ref={sentinelRef} />
    </div>
  );
};

export default MovieGrid;
