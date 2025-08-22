export function MyAwesomeApp () {

    const letras = 'zxdc';
    const numeros = 123;

    const isActive = true;


    const address = {
        lugar: 'myz',
        cordenada: '123-ZXC'

    }

    const favoriteGames = ['Smash', 'Fortnite', 'Overwatch'];

    return(
        <>
        <h1>{letras}</h1>
        <h3>{numeros}</h3>



        <h1>{isActive ? 'Activo' : 'No Activo'}</h1>


        <p>{ favoriteGames.join(', ') }</p>


        <p>{JSON.stringify(address)}</p>
        </>
    )
}