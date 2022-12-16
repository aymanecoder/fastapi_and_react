import React from "react";

const Dashboard =()=>{
    return (

<div>
        <div id="img_div">
            </div>
                <button onclick="show_all_streams()" id="show_all_button">View All Streams</button>
            <div id="map"></div>
            <div id="popup" class="ol-popup">
        </div>
</div>
    );
}




export default Dashboard;