"use client";
import { useState, useContext } from 'react';
import { Search, MapPin, Navigation, Loader2 } from 'lucide-react';
import axios from 'axios';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getLocationFromPointsAndUpdateUser_Fn } from '../../Axios/methods/POST';
import { UserContext } from '../../context/userContext';

const LocationSearchModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showList, setShowList] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const { setUser, user } = useContext(UserContext);

  // Debounce function to limit API calls
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  // Debounced version of fetchLocation
  const debouncedFetchLocation = debounce(async (query) => {
    if (!query) {
      setSuggestions([]);
      setShowList(false);
      return;
    }

    setSearchLoading(true);
    const mapboxToken = "pk.eyJ1IjoiYW5hcy1uYSIsImEiOiJjbHJocnlwcmMwMm4wMmltbDhmOWFieXI1In0.-HhwhnfkjKGXxpVSxyXWQg";
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxToken}&country=in`
      );
      setSuggestions(response.data.features);
      setShowList(true);
    } catch (error) {
      console.error("Error fetching location:", error);
      setShowList(false);
    } finally {
      setSearchLoading(false);
    }
  }, 300);

  const handleLocationSelect = (location) => {
    const response =  getLocationFromPointsAndUpdateUser_Fn(latitude, longitude);
    setUser({
      ...user,
      locationInText: location.place_name,
      latitude: location.center[1],
      longitude: location.center[0]
    });
    setSearchQuery(location.place_name);
    setShowList(false);
  };

  async function getLocation() {
    setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const response = await getLocationFromPointsAndUpdateUser_Fn(latitude, longitude);
            const location = response.data.locationName;
            setUser({ ...user, locationInText: location, latitude, longitude });
            setSearchQuery(location);
          } catch (err) {
            console.log(err);
          } finally {
            setIsLoading(false);
          }
        },
        (err) => {
          console.log(err);
          setIsLoading(false);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-lg font-normal">Welcome to</span>
            <span className="text-lg font-bold text-[#4CAF50]">Book Hub</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="text-gray-400" size={24} />
            <p className="text-sm text-gray-600">
              Please provide your location to see books at nearby locations.
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={getLocation}
              disabled={isLoading}
              className="flex items-center gap-2 bg-[#4CAF50] hover:bg-[#45a049]"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Navigation size={16} />
              )}
              Detect my location
            </Button>
            <span className="flex items-center text-gray-400">OR</span>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Search delivery location"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                debouncedFetchLocation(e.target.value);
              }}
              className="pl-10 border-gray-300"
            />
            
            {searchLoading && (
              <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-gray-400" />
            )}
          </div>

          {showList && suggestions.length > 0 && (
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
              {suggestions.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleLocationSelect(location)}
                  className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <MapPin className="text-gray-400 flex-shrink-0" size={20} />
                  <div className="text-left">
                    <p className="text-sm">{location.place_name}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationSearchModal;