/* eslint-disable no-plusplus */

// test userebis data

export function seedDatabase(firebase) {
  const users = [
    {
      userId: "suYEmtPpkCYGRuhwd4lAYCfW9C73",
      username: "Nikoloz",
      fullName: "Nikoloz Lomtadze",
      emailAddress: "lomtadzenikusha@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "Mariam",
      fullName: "Mariam Lomtadze",
      emailAddress: "mariam@sanzio.com",
      following: [],
      followers: ["suYEmtPpkCYGRuhwd4lAYCfW9C73"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "dali",
      fullName: "Salvador Dalí",
      emailAddress: "salvador@dali.com",
      following: [],
      followers: ["suYEmtPpkCYGRuhwd4lAYCfW9C73"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "orwell",
      fullName: "George Orwell",
      emailAddress: "george@orwell.com",
      following: [],
      followers: ["suYEmtPpkCYGRuhwd4lAYCfW9C73"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/nikoloz/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "dali",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "orwell",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
