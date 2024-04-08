import React from "react";
import { MdApps, MdNotifications, MdVideoCall } from "react-icons/md";
import { Tooltip } from 'react-tooltip'

const RightNav = () =>{
  return(
    <div className="buttons">
      <button className="icon-container">
        <MdVideoCall size={25} data-tooltip-content="Create" data-tooltip-id="navbar"></MdVideoCall>
      </button>
      <button className="icon-container">
        <MdApps size={25} data-tooltip-content="YouTube Apps" data-tooltip-id="navbar"></MdApps>
      </button>
      <button className="icon-container">
        <MdNotifications size={25} data-tooltip-content="Notifications" data-tooltip-id="navbar"></MdNotifications>
      </button>

      <Tooltip id="navbar" backgroundColor="gray" effect="solid" delayHide={150} arrowColor='transparent' ></Tooltip>
    </div>
  )
}

export default RightNav