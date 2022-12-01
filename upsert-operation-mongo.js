exports.controller = () => {
  await Model.updateOne(
    { filter: 'by value' },
    { update: 'value' },
    { upsert: true }
  );
};

// update value if document exists or create new one.
