import logo from './logo.svg';
import './App.css';
import React from 'react';
import web3 from './web3';
import Web3 from 'web3'; // For static properties like version
import lottery from './lottery'; // Assumes lottery.js exports the contract instance

class App extends React.Component {
  state = { manager: '', players: [], balance: '', value: '', message: '' };

  async componentDidMount() {
    try {
      // Log the Web3.js library version
      console.log('Web3.js version:', Web3.version);

      // Ensure MetaMask is available and accounts are accessible
      const accounts = await web3.eth.getAccounts();
      console.log('Accounts:', accounts);

      if (accounts.length === 0) {
        console.warn('No accounts found. Ensure MetaMask is connected.');
        alert('No Ethereum accounts found. Please connect MetaMask.');
        return; // Stop further execution if no accounts are found
      }

      // Fetch the manager address from the contract
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);
      console.log('Balance:', balance);
      console.log('Manager:', manager);
      console.log('Players:', players);

      // Update state with the fetched manager
      this.setState({ manager, players, balance });
    } catch (error) {
      console.error('Error during initialization:', error);
      alert(
        'An error occurred while connecting to the Ethereum network. Check the console for details.'
      );
    }
  }

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ message: 'Waiting on transaction success...' });
    const accounts = await web3.eth.getAccounts();
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether'),
    });

    this.setState({ message: 'You have been entered!' });
  };

  onClick = async () => {
    this.setState({ message: 'Waiting on transaction success...' });
    const accounts = await web3.eth.getAccounts();
    await lottery.methods.pickWinner().send({
      from: accounts[0],
    });
    this.setState({ message: 'A winner has been picked!' });
  };

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager || 'loading...'}
          There are currently {this.state.players.length} people entered,
          competing to win {web3.utils.fromWei(this.state.balance, 'ether')}{' '}
          ether!
        </p>
        <hr />
        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter</label>
            <input
              value={this.state.value}
              onChange={(event) => this.setState({ value: event.target.value })}
            />
          </div>
          <button>Enter</button>
        </form>
        <hr />
        <h4>Ready to pick up a winner</h4>
        <button onClick={this.onClick}> Pick a winner</button>

        <hr />
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
