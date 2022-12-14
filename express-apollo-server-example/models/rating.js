const Rating = {
    FIVE_STARS:  {"ordinal": 0, "name": "FIVE_STARS",  "start": "⭐️⭐️⭐️⭐️⭐️"},
    FOUR_STARS:  {"ordinal": 1, "name": "FOUR_STARS",  "start": "⭐️⭐️⭐️⭐️"},
    THREE_STARS: {"ordinal": 2, "name": "THREE_STARS", "start": "⭐️⭐️⭐️"},
    TWO_STARS:   {"ordinal": 3, "name": "TWO_STARS",   "start": "⭐️⭐️"},
    ONE_STAR:    {"ordinal": 4, "name": "ONE_STAR",    "start": "⭐️"},
}
export default Object.freeze(Rating);

export const getOrdinal = (rating) => {
    switch (rating) {
        case 'FIVE_STARS':
            return Rating.FIVE_STARS.ordinal;
          break;
        case 'FOUR_STARS':
            return Rating.FOUR_STARS.ordinal;
            break;
        case 'THREE_STARS':
            return Rating.THREE_STARS.ordinal;
          break;
        case 'TWO_STARS':
            return Rating.TWO_STARS.ordinal;
          break;
        case 'ONE_STAR':
            return Rating.ONE_STAR.ordinal;
          break;
        default:
          return null;
      }
}

export const getValues = () => {
    return [Rating.FIVE_STARS, Rating.FOUR_STARS, Rating.THREE_STARS, Rating.TWO_STARS, Rating.ONE_STAR];
}

export const valueOf = (rating) => {
    switch (rating) {
        case 'FIVE_STARS':
            return Rating.FIVE_STARS.name;
          break;
        case 'FOUR_STARS':
            return Rating.FOUR_STARS.name;
            break;
        case 'THREE_STARS':
            return Rating.THREE_STARS.name;
          break;
        case 'TWO_STARS':
            return Rating.TWO_STARS.name;
          break;
        case 'ONE_STAR':
            return Rating.ONE_STAR.name;
          break;
        default:
          return null;
      }
}

export const getStar = (rating) => {
    switch (rating) {
        case 'FIVE_STARS':
            return Rating.FIVE_STARS.start;
          break;
        case 'FOUR_STARS':
            return Rating.FOUR_STARS.start;
            break;
        case 'THREE_STARS':
            return Rating.THREE_STARS.start;
          break;
        case 'TWO_STARS':
            return Rating.TWO_STARS.start;
          break;
        case 'ONE_STAR':
            return Rating.ONE_STAR.start;
          break;
        default:
          return null;
      }
}