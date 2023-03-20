class User {
    constructor({ username, email, name }) {
      this.username = username;
      this.email = email;
      this.name = name;
    }
  
    key() {
      return {
        PK: `USER#${this.username}`,
        SK: `USER#${this.username}`,
      };
    }
  
    toItem() {
      return {
        ...this.key(),
        Type: "USER",
        Email: this.email,
        Name: this.name,
      };
    }
  }
  
  const userFromItem = (attributes) => {
    return new User({
      username: attributes.Username,
      email: attributes.Email,
      name: attributes.Name,
    });
  };
  
  module.exports = { User, userFromItem };