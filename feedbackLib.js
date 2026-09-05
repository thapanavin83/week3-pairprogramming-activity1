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

if (require.main === module) {
  const result = addOne(
    "John Smith",
    "Great session on React components!",
    5,
    "mobile"
  );

  console.log(result);
}

module.exports = {
  addOne,
};