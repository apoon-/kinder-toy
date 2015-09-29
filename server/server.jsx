Meteor.publish("myData", function() {
  return MyData.find()
})

if (MyData.find().count() === 0) {
  MyData.insert({
    name: "Toy Boat",
    image: "/toys/boat.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Bowling",
    image: "/toys/bowling.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Bull",
    image: "/toys/bull.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Bulldozer",
    image: "/toys/bulldozer.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Car",
    image: "/toys/car.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Construction Crane",
    image: "/toys/construction.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Fox",
    image: "/toys/fox.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Guitar",
    image: "/toys/guitar.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Horse",
    image: "/toys/horse.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Mouse",
    image: "/toys/mouse.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Octopus",
    image: "/toys/octopus.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Rocking Horse",
    image: "/toys/rockinghorse.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Sports Car",
    image: "/toys/sportscar.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Teddy",
    image: "/toys/teddy.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Telephone",
    image: "/toys/telephone.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Towtruck",
    image: "/toys/towtruck.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Train",
    image: "/toys/train.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Wood Castle",
    image: "/toys/woodcastle.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Wood Puzzle",
    image: "/toys/woodpuzzle.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Etch A Sketch",
    image: "/toys/etch.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Motocycle",
    image: "/toys/motorcycle.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Smart Bear",
    image: "/toys/smartbear.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Train with Lights",
    image: "/toys/trainlights.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Turtle",
    image: "/toys/turtle.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Transformer",
    image: "/toys/transformer.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "My Little Pony",
    image: "/toys/pony.JPG",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Elephant",
    image: "/toys/elephant.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Toy Corn Popper",
    image: "/toys/corn.jpg",
    details: faker.lorem.sentence()
  });
  MyData.insert({
    name: "Little Tikes",
    image: "/toys/little.jpg",
    details: faker.lorem.sentence()
  });
}
