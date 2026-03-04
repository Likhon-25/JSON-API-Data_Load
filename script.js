const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        //*
        .then(res => res.json())
        //* promise of json data
        .then(data => console.log(data));
}

