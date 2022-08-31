export class Sorter {


  // Above is equivalent to below
  constructor(public collection: /*TODO: fix me*/) {}
  sort(): void {
    // const length = this.collection.length;
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // If collection is an array of numbers
      
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
    
    }
    }
  }
}
