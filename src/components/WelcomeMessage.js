import React from 'react';

const WelcomeMessage = ({ username }) => {
  return (
    <div style={styles.container}>
      <div style={styles.message}>
        <h4 style={{ fontSize: '25px',color: '#000000' }}>
          Welcome back {username}, What are you <br /> looking for today?
        </h4>
        
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    width: '85%',
    margin: '0 auto',
    marginBottom: '10px', 
    marginTop: '10px',
  },
  message: {
    padding: '30px',
    borderRadius: '10px',
    background: 'rgb(241 245 249)',
    textAlign: 'left',
  },
};

export default WelcomeMessage;
