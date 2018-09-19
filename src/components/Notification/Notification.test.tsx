import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { INotification, Notification } from "./Notification.component";
(enzyme as any).configure({ adapter: new Adapter() });

describe("Notification", () => {
  let props: INotification;
  let mountedNotification: any;

  const notification = () => {
    if (!mountedNotification) {
      mountedNotification = enzyme.mount(
        <Notification {...props} />
      );
    }
    return mountedNotification;
  }

  beforeEach(() => {
    props = {
      message: 'Notification message',
      type: 'is-success'
    };
    mountedNotification = undefined;
  });

  it("always renders a `div`", () => {
    const divs = notification().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("always renders a `span`", () => {
    expect(notification().find("span").length).toBe(1);
  });
});