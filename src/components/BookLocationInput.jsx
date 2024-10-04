"use client";
import { useState } from "react";
import axios from "axios";
import { TbCurrentLocation } from "react-icons/tb";
import { getLocationFromPoints_Fn } from "../../Axios/methods/POST";

export default function BookLocationInput({ location, setLocation }) {
  const [suggestions, setSuggestions] = useState([]);
  const [showList, setShowList] = useState(false);

  // Function to fetch location suggestions
  async function fetchLocation(query) {
    if (!query) {
      setSuggestions([]);
      setShowList(false);
      return;
    }

    const mapboxToken = "pk.eyJ1IjoiYW5hcy1uYSIsImEiOiJjbHJocnlwcmMwMm4wMmltbDhmOWFieXI1In0.-HhwhnfkjKGXxpVSxyXWQg";
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxToken}`
      );
      setSuggestions(response.data.features);
      console.log(response.data);
      setShowList(true);
    } catch (error) {
      console.error("Error fetching location:", error);
      setShowList(false);
    }
  }

  //Get current location
  async function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Here")
        const response = await getLocationFromPoints_Fn(latitude, longitude);
        const location = response.data;
        console.log(location)
        setLocation({
          latitude,
          longitude,
          locationInText: location
        })
      }, (err) => {
        console.log(err);
        setIsLoading(false);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
      setIsLoading(false);
    }
  }


  return (
    <>
      <label htmlFor="location" className="mt-8 text-sm font-semibold">Location</label>
      <div className="flex items-center gap-1">
        <input
          placeholder="(optional)"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            fetchLocation(e.target.value); // Fetch location as user types
          }}
          type="text"
          name="location"
          className="border rounded-lg focus:outline-0 focus:border-green-800 w-72 p-1"
        />
        <TbCurrentLocation className="hover:cursor-pointer border w-8 h-8" onClick={getLocation} />
      </div>



      {/* Display location suggestions */}
      {showList && suggestions.length > 0 && (
        <div className="absolute w-full mt-1 border bg-white rounded-lg shadow-lg max-h-40 overflow-y-auto z-10">
          {suggestions.map((place) => (
            <div
              key={place.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setLocation({
                  locationInText: place.place_name,
                  latitude: place.center[1],
                  longitude: place.center[0]
                });
                setShowList(false); // Hide suggestions
              }}
            >
              {place.place_name}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
