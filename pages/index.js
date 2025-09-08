function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <img
        src="https://i.imgur.com/VbwQ9eY.gif"
        alt="Rick Roll GIF"
        style={{
          width: '200px',
          height: '200px',
          objectFit: 'cover'
        }}
      />
      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        Nunca vou te abandonar.
      </p>
    </div>
  );
}

export default Home;