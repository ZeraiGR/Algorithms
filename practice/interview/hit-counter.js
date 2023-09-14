// Design Hit Counter

/*

In this question, you need to design a HitCounter class.

In this class, there are the following functions:

HitCounter(): No-argument constructor
void hit(int timestamp): Indicates that a tap occurs at the specified time
int getHits(int timestamp): Returns the total number of hits within 300 seconds before the specified time
Where timestamp is in seconds.

["hit(1)", "hit(2)", "hit(3)", "getHits(3)", "hit(301)", "getHits(301)"]
[null, null, null, 3, null, 3]

["hit(1)", "hit(1)", "hit(1)", "getHits(2)"]
[null, null, null, 3]

*/

class HitCounter {
  constructor() {
    this.time = new Array(300).fill(0);
    this.count = new Array(300).fill(0);
  }

  hit(timestamp) {
    const index = timestamp % 300;

    if (this.time[index] !== timestamp) {
      this.time[index] = timestamp;
      this.count[index] = 1;
    } else {
      this.count[index] += 1;
    }
  }

  getHits(timestamp) {
    let ans = 0;

    for (let i = 0; i < 300; i++) {
      if (this.time[i] > timestamp - 300) {
        ans += this.count[i];
      }
    }

    return ans;
  }
}