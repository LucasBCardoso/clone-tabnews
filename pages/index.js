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
                <div className="tenor-gif-embed" data-postid="25206401" data-share-method="host" data-aspect-ratio="1" data-width="200px" style={{width: '200px', height: '200px'}}>
                    <a href="https://tenor.com/view/rick-roll-rick-rolled-rick-astley-never-gonna-give-you-up-hd-gif-25206401">Rick Roll Rick Rolled GIF</a>
                    from <a href="https://tenor.com/search/rick+roll-gifs">Rick Roll GIFs</a>
                </div>
                <p style={{marginTop: '20px', fontSize: '18px'}}>Nunca vou te abandonar.</p>
                <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
            </div>
        </>
    );
}

export default Home;