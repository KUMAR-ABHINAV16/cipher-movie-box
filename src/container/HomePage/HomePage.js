import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";

function HomePage() {
  return (
    <div>
      <Navbar showSignInButton={false} logOut={true} />
      <Banner />
      <Row
        title="MOVIE BOX HITS"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=b2147ed8b55f9f9bee2a012ea6eef07e&language=en-US"
        isLargeRow
      />
      <Row
        title="MOVIE BOX HITS"
        fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=b2147ed8b55f9f9bee2a012ea6eef07e&language=en-US"
      />
      <Row
        title="MOVIE BOX HITS"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=b2147ed8b55f9f9bee2a012ea6eef07e&with_genres=10749&language=en-US"
      />
      <Row
        title="MOVIE BOX HITS"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=b2147ed8b55f9f9bee2a012ea6eef07e&with_genres=99&language=en-US"
      />
      <Row
        title="MOVIE BOX HITS"
        fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=b2147ed8b55f9f9bee2a012ea6eef07e&with_genres=27&language=en-US"
      />
    </div>
  );
}

export default HomePage;