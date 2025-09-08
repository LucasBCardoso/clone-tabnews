function Home() {
    //return <h1>Task 1 - Tabnews</h1>
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                textAlign: 'center'
            }}>
                <img 
                    src="https://media.tenor.com/x62iRrI_b2QAAAAC/rick-roll-rick-rolled.gif"
                    alt="Rick Roll GIF"
                    style={{
                        width: '200px', 
                        height: '200px',
                        objectFit: 'cover'
                    }}
                />
                <p style={{marginTop: '20px', fontSize: '18px'}}>Nunca vou te abandonar.</p>
            </div>
        </>
    );
}

export default Home;