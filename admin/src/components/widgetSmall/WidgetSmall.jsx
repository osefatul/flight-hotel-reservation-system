import { Visibility } from "@material-ui/icons";
import React from "react";
import "./widgetSmall.css";

function WidgetSmall() {
  return (
    <div className="widgetSmall">
      <span className="widgetSmallTitle">New Join Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img
            src="https://cinemalisted.com/wp-content/uploads/2020/05/Rambo-m60.jpg"
            className="widgetSmallImg"
          />
          <div className="widgetsmallUser">
            <span className="widgetSmallUsername">John Rambo</span>
            <span className="widgetSmallUserTitle">Freeing countries</span>
          </div>
          <button className="widgetSmallbtn">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://cinemalisted.com/wp-content/uploads/2020/05/Rambo-m60.jpg"
            className="widgetSmallImg"
          />
          <div className="widgetsmallUser">
            <span className="widgetSmallUsername">John Rambo</span>
            <span className="widgetSmallUserTitle">Freeing countries</span>
          </div>
          <button className="widgetSmallbtn">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://cinemalisted.com/wp-content/uploads/2020/05/Rambo-m60.jpg"
            className="widgetSmallImg"
          />
          <div className="widgetsmallUser">
            <span className="widgetSmallUsername">John Rambo</span>
            <span className="widgetSmallUserTitle">Freeing countries</span>
          </div>
          <button className="widgetSmallbtn">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://cinemalisted.com/wp-content/uploads/2020/05/Rambo-m60.jpg"
            className="widgetSmallImg"
          />
          <div className="widgetsmallUser">
            <span className="widgetSmallUsername">John Rambo</span>
            <span className="widgetSmallUserTitle">Freeing countries</span>
          </div>
          <button className="widgetSmallbtn">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img
            src="https://cinemalisted.com/wp-content/uploads/2020/05/Rambo-m60.jpg"
            className="widgetSmallImg"
          />
          <div className="widgetsmallUser">
            <span className="widgetSmallUsername">John Rambo</span>
            <span className="widgetSmallUserTitle">Freeing countries</span>
          </div>
          <button className="widgetSmallbtn">
            <Visibility className="widgetSmallIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSmall;
