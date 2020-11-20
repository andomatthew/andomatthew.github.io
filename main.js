var data = []
var done = []

function formSubmit (event) {
  event.preventDefault()

  let input = document.getElementById("input-field").value
  data.push(input)
  let ul = document.getElementById("mid")
  ul.innerHTML = ""
  for (let i = 0; i < data.length; i++) {
    ul.innerHTML += `<li>                      
                        <p>
                          <span>${data[i]}</span><button class="button-done" onclick="doneList(event,${i})">✓</button>
                        </p>
                      </li>`
  }
}


function doneList (event, idx) {
  event.preventDefault()
  done.push(data[idx])
  data.splice(idx,1)
  let ul = document.getElementById("bot")
  ul.innerHTML = ""

  for (let i = 0; i < done.length; i++) {
    ul.innerHTML += `<li>
                        <p>
                          ${done[i]}
                        </p> 
                      </li>`
  }

  ul = document.getElementById("mid")
  ul.innerHTML = ""
  for (let i = 0; i < data.length; i++) {
    ul.innerHTML += `<li>                      
                        <p>
                          <span>${data[i]}</span><button class="button-done" onclick="doneList(event,${i})">✓</button>
                        </p>
                      </li>`
  }
}








