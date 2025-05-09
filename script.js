//your code here
document.addEventListener("DOMContentLoaded", ()=>{
	const newTodoInput=document.getElementById("newTodoInput");
	const btn = document.getElementById("addTodoBtn");
	const list = document.getElementById("todoList");

	btn.addEventListener('click', ()=>{
		const input = newTodoInput.value.trim();
		if(input!==""){
			const li= document.createElement("li");
			li.textContent= input;
			list.appendChild(li);
			newTodoInput.value="";
		}
	})
})

