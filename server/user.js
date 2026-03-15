// This replaces the Mongoose Schema with a simple object creator
const createUserObject = (data) => {
  return {
    id: Date.now(), // Unique ID based on time
    name: data.name,
    email: data.email,
    createdAt: new Date().toISOString()
  };
};

module.exports = createUserObject;