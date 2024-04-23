window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

//const localFunctionApi = 'http://localhost:7071/api/GetCounter';
const functionApiUrl = "https://paakowazureresume.azurewebsites.net/api/GetCounter?code=kNrPQy8RJEv_PTWlKW-3a7KaPE90-nsjkixleXUSaJosAzFu56Ba6w=="

const getVisitCount = () => {
    let count = 30;

    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then (response => {
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error)
    });

    return count;

}