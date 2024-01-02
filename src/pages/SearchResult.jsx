// SearchResult.js
import React from 'react';
import { useSelector } from 'react-redux';
import CardsContainer from '../components/common/CardsContainer';
import { trendingData } from '../utils/data';
import Header from '../components/common/search/header';
import SideBar from '../components/common/search/SideBar';
import Section5 from '../components/common/Section5';

const SearchResult = () => {
  const selectedTags = useSelector((state) => state.filters.selectedTags);
  const selectedDuration = useSelector((state) => state.filters.selectedDuration);
  const selectedRatings = useSelector((state) => state.filters.selectedRatings);
  const selectedAgeGroups = useSelector((state) => state.filters.selectedAgeGroups);
  const selectedSpecials = useSelector((state) => state.filters.selectedSpecials);
  const minPrice = useSelector((state) => state.filters.minPrice);
  const maxPrice = useSelector((state) => state.filters.maxPrice);

  const filteredData = trendingData.filter((item) => {
    if (selectedTags.length > 0 && !selectedTags.some((tag) => item.tags.includes(tag))) {
      return false;
    }

    if (selectedDuration.length > 0 && !selectedDuration.includes(item.duration)) {
      return false;
    }

    if (selectedRatings.length > 0 && !selectedRatings.includes(item.rating)) {
      return false;
    }

    if (selectedAgeGroups.length > 0 && !selectedAgeGroups.includes(item.ageGroup)) {
      return false;
    }

    if (selectedSpecials.length > 0 && !selectedSpecials.some((special) => item.specials.includes(special))) {
      return false;
    }

    if (minPrice > 1 && item.price < minPrice) {
      return false;
    }

    if (maxPrice < 10000 && item.price > maxPrice) {
      return false;
    }

    return true; 
  });

  return (
    <div className="search-result">
      <Header />
      <div className="bottom-container">
        <SideBar />
        <CardsContainer data={filteredData} />
      </div>
      <Section5 style={{ width: '100%', marginLeft: '0', marginTop: '136px' }} title="Recently Viewed" />
    </div>
  );
};

export default SearchResult;
