import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { CardCount, ICardCount } from "./CardCount.component";
(enzyme as any).configure({ adapter: new Adapter() });

describe("CardCount", () => {
  let props: ICardCount;
  let mountedCardCount: any;

  const cardCount = () => {
    if (!mountedCardCount) {
      mountedCardCount = enzyme.mount(
        <CardCount {...props} />
      );
    }
    return mountedCardCount;
  }

  beforeEach(() => {
    props = {
      amountOfCardsRemaining: 40,
    };
    mountedCardCount = undefined;
  });

  it("always renders a `section`", () => {
    const sections = cardCount().find("section");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("always renders a `h6`", () => {
    expect(cardCount().find("h6").length).toBe(1);
  });
});