

const myPromise = new Promise<number>((resolve, reject) =>{
    setTimeout(() =>{
        //yo quiero mi dinero !!
        // resolve(300);
        reject("Mi amigo se olvido...");
    },2000)
});

myPromise.then(
    myMoneyIsBack => {
        console.log(`Tengo mi dinero! ${myMoneyIsBack}`);
    }
)
.catch((reason) => {
    console.warn(reason)
})
.finally(() =>{
    console.log('Pues la vida sigue...')
})