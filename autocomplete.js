const fruits = ['Apple','angel','anaconda', 'Orange', 'Mango', 'Watermelon', 'Kiwi', 'Banana', 'Grapes'];
document.getElementById('search').addEventListener('input', (e)=>{
    let fruitsArray = [];
    
    if(e.target.value){
        // fruit.toLowerCase().substring(0,1) === e.target.value
        fruitsArray = fruits.filter(fruit =>  fruit.toLowerCase().substring(0,1) === e.target.value.substring(0,1)
        );
        fruitsArray = fruitsArray.map(fruit => `<li>${fruit}</li>`)
    }
    showFruitsArray(fruitsArray);
});
function showFruitsArray(fruitsArray){
    const html = !fruitsArray.length ? '' : fruitsArray.join('');
    document.querySelector('ul').innerHTML = html;
}