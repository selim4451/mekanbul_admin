import Header from "./Header";
import VenueDataService from "../services/VenueDataService";
import { useReducer, useEffect, useState } from "react";
import VenueReducer from "../services/VenueReducer";
import VenueList from "./VenueList";

function Admin() {
  // Mekanların verileri
  const [venues, dispatchVenues] = useReducer(VenueReducer, {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  // Mekanların verilerini çekme
  useEffect(() => {
    dispatchVenues({ type: "FETCH_INIT" });
    try {
      VenueDataService.listJsonVenues().then((result) => {
        dispatchVenues({
          type: "FETCH_SUCCESS",
          payload: result.data,
        });
      });
    } catch {
      dispatchVenues({ type: "FETCH_FAILURE" });
    }
  }, []);

  return (
    <>
      <Header headerText="MekanBul-Admin" motto="Mekanları Yönetin" />
      {venues.isError ? (
        <p>
          <strong>Birşeyler ters gitti! ...</strong>
        </p>
      ) : venues.isLoading ? (
        <p>
          <strong>Mekanlar yükleniyor ...</strong>
        </p>
      ) : (
        venues.isSuccess && (
          <div className="row">
            {/* Mekanlar listesi */}
            <VenueList venues={venues.data} admin={true} />
          </div>
        )
      )}
    </>
  );
}

export default Admin;
