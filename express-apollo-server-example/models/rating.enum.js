export class RatingEnum {
  static FIVE_STARS = new RatingEnum("FIVE_STARS", "⭐️⭐️⭐️⭐️⭐️");
  static FOUR_STARS = new RatingEnum("FOUR_STARS", "⭐️⭐️⭐️⭐️");
  static THREE_STARS = new RatingEnum("THREE_STARS", "⭐️⭐️⭐️");
  static TWO_STARS = new RatingEnum("TWO_STARS", "⭐️⭐️");
  static ONE_STAR = new RatingEnum("ONE_STAR", "⭐️");

  constructor(name, star) {
    this.name = name;
    this.star = star;
  }

  getName = () => {
    return this.name;
  }

  getStar = () => {
    return this.star;
  }

  static getValues = () => {
    return [RatingEnum.FIVE_STARS, RatingEnum.FOUR_STARS, RatingEnum.THREE_STARS, RatingEnum.TWO_STARS, RatingEnum.ONE_STAR];
  }

  static valueOf = (rating) => {
    switch (rating) {
      case 'FIVE_STARS':
        return RatingEnum.FIVE_STARS;
        break;
      case 'FOUR_STARS':
        return RatingEnum.FOUR_STARS;
        break;
      case 'THREE_STARS':
        return RatingEnum.THREE_STARS;
        break;
      case 'TWO_STARS':
        return RatingEnum.TWO_STARS;
        break;
      case 'ONE_STAR':
        return RatingEnum.ONE_STAR;
        break;
      default:
        return null;
    }
  }

  toString() {
    return {
      "name": this.name,
      "star": this.star
    }
  }
}