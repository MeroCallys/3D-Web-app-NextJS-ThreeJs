const boxes = [
  {
    value: 1,
    getValue() {
      return this.value;
    },
  },
  {
    value: 2,
    getValue() {
      return this.value;
    },
  },
  {
    value: 3,
    getValue() {
      return this.value;
    },
  },
];

console.log(boxes.map((e) => e.getValue()));
