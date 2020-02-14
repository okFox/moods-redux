import { getEmoji } from './selector';

describe('Mood selectors', () => {
  describe('mood selectors', () => {
    it('knows if it is tired', () => {
      const state = { coffees: 0, naps: 0 };
      expect(getEmoji(state)).toEqual('😴');
    });

    it('knows if it is not tired', () => {
      const state = { coffees: 1, naps: 0 };
      expect(getEmoji(state)).toEqual('😀');
    });

    it('knows if it is hyper', () => {
      const state = { coffees: 4 };
      expect(getEmoji(state)).toEqual('🙀');
    });

    it('knows if it is not hyper', () => {
      const state =  { coffees: 3 };
      expect(getEmoji(state)).toEqual('😀');
    });

    it('knows if it is educated', () => {
      const state = { studies: 3 };
      expect(getEmoji(state)).toEqual('🤯');
    });

    it('knows if it is not educated', () => {
      const state = { studies: 2 };
      expect(getEmoji(state)).toEqual('😀');
    });

    it('knows if it is hungry', () => {
      const state = { snacks: 0 };
      expect(getEmoji(state)).toEqual('😡');
    });

    it('knows if it is not hungry', () => {
      const state = { studies: 2 };
      expect(getEmoji(state)).toEqual('😀');
    });

    it('is very angry if tired and hungry', () => {
      const state = { coffees: 0, naps: 0, snacks: 0 };
      expect(getEmoji(state)).toEqual('🤬');
    });

    it('is sick if hyper and hungry', () => {
      const state = { coffees: 4, snacks: 0 };
      expect(getEmoji(state)).toEqual('🤮');
    });

    it('is sleeping if tired', () => {
      const state = { coffees: 0, naps: 0 };
      expect(getEmoji(state)).toEqual('😴');
    });

    it('is crazy if hyper', () => {
      const state = { coffees: 4 };
      expect(getEmoji(state)).toEqual('🙀');
    });

    it('is mindblown if educated', () => {
      const state = { coffees: 1, naps: 0, snacks: 1, studies: 3 };
      expect(getEmoji(state)).toEqual('🤯');
    });

    it('is angry if hungry', () => {
      const state = { coffees: 1, naps: 0, snacks: 0, studies: 0 };
      expect(getEmoji(state)).toEqual('😡');
    });

    it('is happy if not tired, hungry, educated, or hungry', () => {
      const state = { coffees: 1, naps: 0, snacks: 1, studies: 0 };
      expect(getEmoji(state)).toEqual('😀');
    });
  });
});
