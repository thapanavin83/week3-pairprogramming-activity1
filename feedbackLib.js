let feedbackArray = [];

let nextId = 1;

function addOne(sender, message, rating, platform) {
  const newFeedback = {
    id: nextId++,
    sender,
    message,
    rating,
    platform,
  };

  feedbackArray.push(newFeedback);

  return newFeedback;
}

function getAll() {
  return feedbackArray;
}

if (require.main === module) {
  addOne(
    "John Smith",
    "Great session!",
    5,
    "mobile"
  );

  addOne(
    "Anna Brown",
    "Very useful examples.",
    4,
    "desktop"
  );

  console.log("getAll called:", getAll());
}

module.exports = {
  addOne,
  getAll,
};