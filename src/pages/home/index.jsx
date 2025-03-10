import React from "react";
import * as s from "../../modules/styles/home";
import * as c from "../../modules/styles/common";
import VenueSearch from "./components/venueSearch";
import useApi from "../../modules/hooks/useApi";
import venueFilter from "../../modules/utils/topRatedFilter";
import TopRated from "../../modules/components/topRated";
import Recent from "../../modules/components/recent";
import url from "../../modules/utils/urls/allVenues";
import callApi from "../../modules/utils/apiCall";
import HeroBanner from "../../modules/components/heroBanner";

function App() {
  const title = document.querySelector("title");
  title.innerHTML = "Holidaze | Home";
  let endpoint = url;

  const { data, setData } = useApi(endpoint, "GET", null);

  async function getAllResults() {
    if (data.length === 100) {
      let offset = 100;
      for (let i = 0; i < 20; i++) {
        endpoint = url + `?offset=${offset}`;
        const response = await callApi(endpoint, "GET", null);
        setData([...data, ...response]);
        offset += 100;
        if (response.length < 100) {
          break;
        }
      }
    }
  }
  getAllResults();
  const topRated = venueFilter(data);
  return (
    <s.HomeContainer>
      <HeroBanner />
      <div>
        <c.CenteredText>Find your next adventure</c.CenteredText>
      </div>
      <s.VenueSearchContainer>
        <VenueSearch />
      </s.VenueSearchContainer>
      <TopRated data={topRated} id="top-rated-container" />
      <Recent data={data} id="recent-container" />
    </s.HomeContainer>
  );
}

export default App;
