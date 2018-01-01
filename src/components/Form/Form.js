import React, { Component } from 'react';
import { Section, Title, Input, Button } from '../index.styles';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameError: null,
      passwordError: null,
      passwordCheckError: null,
    };
  }

  render() {
    let passwordInput = null;

    const getUsernameError = value => {
      if (value.length < 3)
        return 'Username must contain at least 3 characters';
      else return null;
    };

    const getPasswordError = value => {
      if (value.length < 8) return 'Password must be at least 8 characters';
      else if (!value.match(/\d/))
        return 'Password must contain at least one number';
      else if (!value.match(/^(?=.*[a-z])(?=.*[A-Z])/))
        return 'Password must contain both uppercase and lowercase letters';
      else return null;
    };

    const getPasswordCheck = value => {
      console.log(this.passwordInput);
      if (value !== this.passwordInput) return 'Passwords must match';
      else return null;
    };

    const handleUsernameChange = event => {
      const { value } = event.target;
      this.setState({ usernameError: getUsernameError(value) });
    };

    const handlePasswordChange = event => {
      const { value } = event.target;
      this.setState({ passwordError: getPasswordError(value) });
    };
    const handlePasswordCheck = event => {
      const { value } = event.target;
      this.setState({ passwordCheckError: getPasswordCheck(value) });
    };

    const handleSubmit = event => {
      event.preventDefault();
    };

    const { usernameError, passwordError, passwordCheckError } = this.state;

    return (
      <Section id="form">
        <Title small>
          Pick a username and a password of at least 8 characters which includes
          both upper and lower case, and at least one number
        </Title>
        <form onSubmit={handleSubmit}>
          <div>
            <label for="username" style={{ color: 'white' }}>
              Username:
              <Input long name="username" onChange={handleUsernameChange} />
            </label>
            {usernameError ? (
              <div style={{ color: 'pink' }}>{usernameError}</div>
            ) : null}
          </div>
          <div>
            <label for="password" style={{ color: 'white' }}>
              Password:
              <Input
                long
                type="password"
                ref={input => {
                  passwordInput = input;
                }}
                onChange={handlePasswordChange}
              />
            </label>
            {passwordError ? (
              <div style={{ color: 'pink' }}>{passwordError}</div>
            ) : null}
          </div>
          <div>
            <label for="password" style={{ color: 'white' }}>
              Confirm password:
              <Input long type="password" onChange={handlePasswordCheck} />
            </label>
            {passwordCheckError ? (
              <div style={{ color: 'pink' }}>{passwordCheckError}</div>
            ) : null}
          </div>
        </form>
        <Button
          form
          disabled={Boolean(
            usernameError || passwordError || passwordCheckError
          )}
          type="submit"
        >
          Submit
        </Button>
      </Section>
    );
  }
}

export default Form;
