console.log("hi")
fetch('http://localhost:3000/hamsters')
    .then(response => response.json())
    .then(displayHamster)

    function displayHamster(hamsters) {
        hamsters.forEach(hamster => {
            const h3 = document.createElement('h3')
            const button = document.createElement('button')
            h3.innerText = hamster.name
            button.textContent = "Delete"

            button.addEventListener('click', () => {
                h3.remove()
                button.remove()
            })

            document.body.append(h3, button)
        }
        )}

const form = document.querySelector('#add-hamster')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = formData.get("name")
    const age = formData.get("age")

    name.innerText = name
    age.innerText = age

    document.body.append
    
fetch('http://localhost:3000/hamsters', {
    method: "POST",
    headers: {
        "content-type": "application/json",
        "accept": "application/json"
},
body: JSON.stringify(
    {hamster:
        {
        name: name,
        age: age
    }}
)}
)}
)
