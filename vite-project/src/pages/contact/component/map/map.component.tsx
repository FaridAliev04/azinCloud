import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMapStyle } from './map.style';
import useLocalization from '../../../../assets/lang';
import insta from '../../../../assets/images/statics/inst.png';
import tg from '../../../../assets/images/statics/tg.png';
import yt from '../../../../assets/images/statics/yt.png';
import User from '../../../../assets/images/icons/user';
import Call from '../../../../assets/images/icons/call';
import Message from '../../../../assets/images/icons/message';
import Location from '../../../../assets/images/icons/location';

const AZERBAIJAN_COORDS = [40.4093, 49.8671];

const MapComponent = () => {
    const classes = useMapStyle();
    const translate = useLocalization();

    return (
        <div className={classes.mainDiv}>
            <div className={classes.contactDiv}>
                <div className={classes.infoMainDiv}>
                <h1 className={classes.mapHeader}>{translate("Our_contacts")}</h1>
                    <div className={classes.infoDiv}>
                        <User />
                        <p>157</p>
                    </div>
                    <div className={classes.infoDiv}>
                        <Call />
                        <p>+994 12 200 00 20</p>
                    </div>
                    <div className={classes.infoDiv}>
                        <Message />
                        <p>info@azincloud.az</p>
                    </div>
                    <div className={classes.infoDiv}>
                        <Location />
                        <p className={classes.info}>{translate("unvan")}</p>
                    </div>
                    <div className={classes.border}></div>
                    <div className={classes.sosialIconsDiv}>
                        <div>
                            <img src={insta} alt="Instagram" />
                        </div>
                        <div>
                            <img src={tg} alt="Telegram" />
                        </div>
                        <div>
                            <img src={yt} alt="YouTube" />
                        </div>
                    </div>
                </div>

                
                <div className={classes.mapContainer}>
                    <MapContainer center={AZERBAIJAN_COORDS} zoom={10} style={{ height: "100%", width: "100%" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={AZERBAIJAN_COORDS}>
                            <Popup>
                                {translate("unvan")} <br /> Azərbaycan
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default MapComponent;
