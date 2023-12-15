import React, { version } from "react";
import { useLocation } from "react-router-dom";
import AddUpdateInput from "./AddUpdateInput";
import AdminButton from "./AdminButton";
function AddUpdateVenue() {
  // Navigate parametrelerini alma
  const { state } = useLocation();
  // Gönderilen venue -> getVenue servisi çalışmıyor
  const { venue } = state;

  return (
    <>
      {venue ? (
        <h1>{venue.name} Mekanını Güncelle</h1>
      ) : (
        <h1>Yeni Mekan Ekle</h1>
      )}
      <hr />
      <form className="form-horizontal">
        <AddUpdateInput
          id="venueName"
          defaultValue={venue ? venue.name : ""}
          label={"Mekan Adı"}
        />
        <AddUpdateInput
          id="venueAddress"
          defaultValue={venue ? venue.address : ""}
          label={"Mekan Adresi"}
        />
        <AddUpdateInput
          id="venueFoodAndDrinks"
          defaultValue={venue ? venue.foodanddrink.toString() : ""}
          label={"İmkanlar"}
        />
        <AddUpdateInput
          id="venueLatitude"
          defaultValue={venue ? venue.coordinates[0] : ""}
          label={"Enlem"}
        />
        <AddUpdateInput
          id="venueLongitude"
          defaultValue={venue ? venue.coordinates[1] : ""}
          label={"Boylam"}
        />
        <AddUpdateInput
          id="venueDaysOne"
          defaultValue={venue ? venue.hours[0].days : ""}
          label={"Günler-1"}
        />
        <AddUpdateInput
          id="venueOpeningOne"
          defaultValue={venue ? venue.hours[0].open : ""}
          label={"Açılış-1"}
        />
        <AddUpdateInput
          id="venueClosingOne"
          defaultValue={venue ? venue.hours[0].close : ""}
          label={"Kapanış-1"}
        />
        <AddUpdateInput
          id="venueClosedOne"
          defaultValue={
            venue ? [venue.hours[0].open, venue.hours[0].close] : []
          }
          type="checkbox"
          label={"Kapalı-1"}
        />
        <AddUpdateInput
          id="venueDaysTwo"
          defaultValue={venue ? venue.hours[1].days : ""}
          label={"Günler-2"}
        />
        <AddUpdateInput
          id="venueOpeningTwo"
          defaultValue={venue ? venue.hours[1].open : ""}
          label={"Açılış-2"}
        />
        <AddUpdateInput
          id="venueClosingTwo"
          defaultValue={venue ? venue.hours[1].close : ""}
          label={"Kapanış-2"}
        />
        <AddUpdateInput
          id="venueClosedTwo"
          defaultValue={
            venue ? [venue.hours[1].open, venue.hours[1].close] : []
          }
          type="checkbox"
          label={"Kapalı-2"}
        />
      </form>
      <AdminButton
        name={venue ? "Mekanı Güncelle" : "Mekanı Ekle"}
        onClick={() => console.log("BUTONA BASILDI")}
        type="primary"
      />
    </>
  );
}

export default AddUpdateVenue;
