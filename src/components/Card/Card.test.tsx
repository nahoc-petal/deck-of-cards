import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { Card, ICard } from "./Card.component";
(enzyme as any).configure({ adapter: new Adapter() });

describe("Card", () => {
  let props: ICard;
  let mountedCard: any;

  const card = () => {
    if (!mountedCard) {
      mountedCard = enzyme.mount(
        <Card {...props} />
      );
    }
    return mountedCard;
  }

  beforeEach(() => {
    props = {
      rank: 6,
      suit: 'diamond',
    };
    mountedCard = undefined;
  });

  it("always renders a `div`", () => {
    const divs = card().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("always renders two `h2`", () => {
    expect(card().find("h2").length).toBe(2);
  });

  it("always renders a `img`", () => {
    expect(card().find("img").length).toBe(1);
  });

  describe("when `suit` is passed", () => {
    it("assigns the diamond image if the suit is diamond", () => {
      props.suit = "diamond";
      const img = card().find("img").first();
      expect(img.prop('src')).toBe('/images/diamond.svg');
    });

    it("assigns the spade image if the suit is spade", () => {
      props.suit = "spade";
      const img = card().find("img").first();
      expect(img.prop('src')).toBe('/images/spade.svg');
    });

    it("assigns the heart image if the suit is heart", () => {
      props.suit = "heart";
      const img = card().find("img").first();
      expect(img.prop('src')).toBe('/images/heart.svg');
    });

    it("assigns the club image if the suit is club", () => {
      props.suit = "club";
      const img = card().find("img").first();
      expect(img.prop('src')).toBe('/images/club.svg');
    });
  });
});