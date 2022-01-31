import { useState, useEffect, useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
import "./TripList.css";

export default function TripList() {
  //   const [trips, setTrips] = useState([]);
  const [URL, setURL] = useState("http://localhost:3000/trips");
  const { data: trips, isPending: isPending, error } = useFetch(URL);
  //   const fetchTrips = useCallback(async () => {
  //     const res = await fetch(URL);
  //     const json = await res.json();
  //     setTrips(json);
  //   }, [URL]);

  //   useEffect(() => {
  //     fetchTrips();
  //   }, [fetchTrips]);

  //   useEffect(() => {
  //     fetch(URL)
  //       .then((res) => res.json())
  //       .then((json) => setTrips(json));
  //   }, [URL]);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending && <div> 로딩중임 ㅅㄱ </div>}
      {error && <p>에러났음 ㅅㄱ</p>}
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p> {trip.price}</p>
            </li>
          ))}
      </ul>
      <button onClick={() => setURL("http://localhost:3000/trips?loc=제주")}>
        제주도행
      </button>
      <button onClick={() => setURL("http://localhost:3000/trips")}>
        모든 여정
      </button>
    </div>
  );
}
