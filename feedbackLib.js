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

function findById(id) {
  const feedback = feedbackArray.find((item) => item.id == id);

  if (feedback) {
    return feedback;
  }

  return false;
}

if (require.main === module) {
  const result1 = addOne(
    "John Smith",
    "Great session on React components!",
    5,
    "mobile"
  );

  const result2 = addOne(
    "Alice Brown",
    "Very useful session!",
    4,
    "desktop"
  );

  console.log("Added:", result1);
  console.log("Added:", result2);
  console.log("getAll called:", getAll());
  console.log("findById(1):", findById(1));
  console.log("findById(98):", findById(98));
}

module.exports = {
  addOne,
  getAll,
  findById,
};