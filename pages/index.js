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
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjR0MHprOW9qcHBvdzUxaGdrOW5rc3Z3eW11Z3JyYjRvODc1YmNuNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lgcUUCXgC8mEo/giphy.gif"
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