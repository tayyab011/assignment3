// Create

export const createTask = async (req, res) => {
  return res.json({ message: `Blog created successfully` });
};

// Read
export const readTask = async (req, res) => {
  return res.json({ message: `Blog read successfully` });
};

// Update
export const updateTask = async (req, res) => {
  return res.json({ message: `Blog update successfully` });
};

// Delete
export const deleteTask = async (req, res) => {
  return res.json({ message: `Blog delete successfully` });
};
