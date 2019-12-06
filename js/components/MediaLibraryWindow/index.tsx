import * as React from "react";
import Sidebar from "./Sidebar";
import ArtistsTable from "./ArtistsTable";
import AlbumsTable from "./AlbumsTable";
import TracksTable from "./TracksTable";
import LibraryLayout from "./LibraryLayout";

export default class MediaLibraryWindow extends React.Component<{}> {
  render() {
    return (
      <LibraryLayout
        sidebar={<Sidebar />}
        artists={<ArtistsTable />}
        albums={<AlbumsTable />}
        tracks={<TracksTable />}
      />
    );
  }
}
