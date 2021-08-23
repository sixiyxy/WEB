const data = {
    name:'yxy'
};

function handle(data){
    const result = document.getElementById('result');
    result.innerHTML = data.name;
}

handle(data);