Meteor.publish("myData", function() {
  return MyData.find()
})

if (MyData.find().count() === 0) {
  _.each(_.range(25), function() {
    MyData.insert({
      name: "Toy " + faker.commerce.product(),
      image: faker.image.abstract(),
      details: faker.lorem.sentence()
    })
  })
}
