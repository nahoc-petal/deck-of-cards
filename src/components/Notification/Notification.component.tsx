import * as React from 'react';
import './Notification.style.css';

export interface INotification {
  message: string;
  type: string;
}

export const Notification: React.SFC<INotification> = ({ message, type }) => (
  <div className={`container notification ${type}`}>
    <span className="subtitle">{message}</span>
  </div>
);