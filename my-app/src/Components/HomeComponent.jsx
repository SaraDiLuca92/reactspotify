import SideBar from "./NavbarComponent";
import React from "react";
import TakefourAlbums from "./DataFetching";

function HomeComponent() {
  return (
    <>
      <div className="Home">
        <SideBar />
        <div className="great">
          <div className="navbaron">
            <a href="#action1">TRENDING</a>
            <a href="#action1">PODCAST</a>{" "}
            <a href="#action1">MOODS AND GENRES</a>{" "}
            <a href="#action1">NEW RELEASES</a> <a href="#action1">DISCOVER</a>
          </div>
          <h2>The New Rock</h2>
          <div className="Music">
            <TakefourAlbums query="yungblud" />
            <TakefourAlbums query="machinegunkelly taurus" />
            <TakefourAlbums query="tokiohotel scream" />
            <TakefourAlbums query="maneskin gossip" />
          </div>{" "}
          <h2>Strong Music</h2>
          <div className="Music">
            <TakefourAlbums query="guns n roses" />
            <TakefourAlbums query="mychemicalromance" />
            <TakefourAlbums query="nirvana" />
            <TakefourAlbums query="thedoors" />
          </div>{" "}
          <h2>Idols</h2>
          <div className="Music">
            <TakefourAlbums query="Michael Jackson dangerous" />
            <TakefourAlbums query="prince" />
            <TakefourAlbums query="john lennon" />
            <TakefourAlbums query="lady gaga chromatica" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
