import React from "react";
import "./Notifications.scss";
import { useSelector } from "react-redux";

export default function Notifications() {
    const newNotification = useSelector((state) => state.newNotification);

    return (
        <div
            className="notification_dd"
            style={{
                position: "fixed",
            }}
        >
            <ul className="notification_ul">
                {newNotification !== undefined || newNotification !== null
                    ? newNotification.map((notification) => (
                          <li className="success">
                              <div
                                  className="notify_icon"
                                  style={{
                                      background: `url(${notification.image}) no-repeat`,
                                      backgroundSize: "cover",
                                  }}
                              >
                                  <span className="icon"></span>
                              </div>
                              <div className="notify_data">
                                  <div className="title">
                                      <span>{notification.title}</span>
                                  </div>
                                  <div className="sub_title">
                                      {notification.message}
                                  </div>
                              </div>
                              <div className="notify_status">
                                  <p>{notification.type}</p>
                              </div>
                          </li>
                      ))
                    : null}
                <li className="show_all">
                    <p className="link">Show All Activities</p>
                </li>
            </ul>
        </div>
    );
}
