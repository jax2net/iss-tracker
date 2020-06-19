import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

export const WebMapView = (props) => {
    const mapRef = useRef();

    useEffect(
        () => {
            // lazy load the required ArcGIS API for JavaScript modules and CSS
            loadModules(['esri/Map', 'esri/views/MapView', 'esri/Graphic'], { css: true })
                .then(([ArcGISMap, MapView, Graphic]) => {
                    const map = new ArcGISMap({
                        basemap: 'topo-vector'
                    });

                    let pos = {
                        type: 'point',
                        longitude: props.long,
                        latitude: props.lat
                    }
                    let color = {
                        type: 'simple-marker',
                        color: [226, 119, 40],
                        outline: {
                            color: [225, 225, 225],
                            width: 1
                        }
                    };
                    
                    const posGraphic = new Graphic({
                        geometry: pos,
                        symbol: color
                    })

                    // load the map view at the ref's DOM node
                    const view = new MapView({
                        container: mapRef.current,
                        map: map,
                        center: [-118, 35],
                        zoom: 1,
                    });

                    view.graphics.add(posGraphic);



                    return () => {
                        if (view) {
                            // destroy the map view
                            view.container = null;
                        }
                    };
                });
        }
    );

    return <div className="webmap" ref={mapRef} style={{ height:'400px',}}/>;
};
