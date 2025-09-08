import Image from "next/image";

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
      <Image
        src="https://media.tenor.com/x62iRrI_b2QAAAAC/rick-roll-rick-rolled.gif"
        alt="Rick Roll GIF"
        width={200}
        height={200}
        priority // força o pré-carregamento imediato
      />
      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        Nunca vou te abandonar.
      </p>
    </div>
  );
}

export default Home;