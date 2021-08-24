import * as React from 'react';
import { useEffect,useState } from 'react';
import ReactMapGL, { Marker ,Popup} from 'react-map-gl';
import {Room} from "@material-ui/icons";
import { format, render, cancel, register } from 'timeago.js';
import "./app.css";
import axios from 'axios';

function Map() {
    const [event,setEvent]=useState([]);
    const [currentPlaceId, setCurrentPlaceId] = useState(null);
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 37,
        longitude: 10,
        zoom: 8
    });

    const handleMarkerClick = (id, lat, long) => {
        setCurrentPlaceId(id);
        setViewport({ ...viewport, latitude: lat, longitude: long });
      };

    useEffect(() => {
        const getPins = async () => {
          try {
            const allPins = await axios.get("http://localhost:3001/event/allevents");
            setEvent(allPins.data);
          } catch (err) {
            console.log(err);
          }
        };
        getPins();
      }, []);

    return (
        <div className="Map">
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapStyle="mapbox://styles/waelbannani/cksq95crz10te18quix081ygw"
            >
                {event.map(e=>(
                    

              <> 
                <Marker 
                        latitude={e.lat}
                        longitude={e.lng}
                        offsetLeft={-20}
                        offsetTop={-10}>

                      <Room style={{ fontSize:viewport.zoom *5, color: 'tomato' ,cursor: "pointer",}}
                        onClick={() => handleMarkerClick(e._id, e.lat, e.lng)}
                      />
                </Marker>
                {e._id=== currentPlaceId && (
                <Popup
                key={e._id}
                latitude={e.lat}
                longitude={e.lng}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPlaceId(null)}
               
                anchor="bottom" >
                <div className="card">
                  <label>Place</label>
                  <h2 className="place">{e.summary}</h2>
                  <label>Review</label>
                  <p className="desc">{e.description}</p>
                  <span className="label label-default shipping">
                <i className="fa fa-calendar mr-1" /> From
                </span>
                <div>{(new Date(e.dateTime).toDateString())} 
                {(new Date(e.dateTime).getUTCHours()+1)}:{(new Date(e.dateTime).getMinutes())}:{(new Date(e.dateTime).getSeconds())}</div>
                <span className="label label-default shipping ">
                <i className="fa fa-calendar mr-1" /> To
                </span>
                <div>{(new Date(e.enddateTime).toDateString())} {(new Date(e.enddateTime).getUTCHours()+1)}:{(new Date(e.enddateTime).getMinutes())}:{(new Date(e.enddateTime).getSeconds())}</div>
                  <label>Information</label>
                  <span className="username">
                    Created by <b>{e.organizer}</b>
                  </span>
                 
                  <span className="date">{format(e.createdAt)}</span>
                </div>
                </Popup>)}
                </>
                
            ))}

            </ReactMapGL>
        </div>
    );
}
export default Map;
