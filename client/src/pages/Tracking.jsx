import React, { useEffect, useRef } from 'react';
import { io } from 'socket.io-client'; // Import Socket.IO client
import L from 'leaflet'; // Import Leaflet for map rendering
import 'leaflet/dist/leaflet.css';

const MapEmbed = () => {
  const mapRef = useRef(null); // Reference to the map div
  const markers = useRef({}); // Keep track of markers to update them later

  useEffect(() => {
    // Initialize the map when the component mounts
    const map = L.map(mapRef.current).setView([51.505, -0.09], 13); // Default initial position (can be changed)

    // Add OpenStreetMap tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'PANTHER',
    }).addTo(map);

    // Connect to the backend WebSocket server
    const socket = io('http://localhost:3000'); // Replace with your backend URL

    // Handle receiving location updates via WebSocket
    socket.on('receive-location', (data) => {
      const { id, latitude, longitude } = data;

      // Ensure the received coordinates are valid
      if (!latitude || !longitude) {
        console.error('Received invalid location data');
        return;
      }

      // Pan the map to the new location with smooth animation
      map.panTo([latitude, longitude], { animate: true, duration: 1.5 });

      // If the marker already exists for this user, update its position
      if (markers.current[id]) {
        markers.current[id].setLatLng([latitude, longitude]);
      } else {
        // Otherwise, create a new marker and add it to the map
        markers.current[id] = L.marker([latitude, longitude]).addTo(map);
      }

      console.log(`User ID: ${id}, Location: (${latitude}, ${longitude})`);
    });

    // Handle user disconnections
    socket.on('user-disconnected', (id) => {
      if (markers.current[id]) {
        map.removeLayer(markers.current[id]);
        delete markers.current[id];
      }
    });

    // Get the user's current location and send updates to the server
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Emit the user's location to the server
          socket.emit('send-location', { latitude, longitude });
        },
        (error) => {
          console.log('Error getting location', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser');
    }

    // Cleanup the WebSocket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []); // Empty dependency array ensures this effect only runs once

  return (
    <div className="w-full h-screen">
      {/* Div to hold the map */}
      <div id="map" ref={mapRef} style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
};

export default MapEmbed;
