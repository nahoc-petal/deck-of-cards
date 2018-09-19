import * as React from 'react';

export interface INotification {
  message: string;
  type: string;
}

export const Notification: React.SFC<INotification> = ({ message, type }) => (
  <section className='section'>
    <div className={`container notification ${type}`}>
        <span className="subtitle">{message}</span>
    </div>
  </section>
);