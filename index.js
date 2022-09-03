
function AddNew(){
	var newTask=prompt("Add new task","Learn C++");


	let divElem=document.createElement('div');
	let text=document.createTextNode(newTask);

	let heading=document.createElement('div');
	heading.appendChild(text);
	divElem.appendChild(heading);

	heading.innerHTML+="<hr/>";

	divElem.setAttribute('class','con');
	let container=document.querySelector('.container');
	let first=document.getElementById('insertHere');

	

	container.insertBefore(divElem,first);
	
	// add eventListener to the div element

	heading.addEventListener('click',function(){

		let newDiv=document.createElement('div');

		var newItem=prompt("Add new item","Solve Questions");
		let newElem=document.createElement('input');
		newElem.type='checkbox';
		let textItem=document.createTextNode(newItem);
		newElem.setAttribute('class','abc');

		let label=document.createElement('label');
		label.appendChild(textItem);
		
		
		newDiv.appendChild(newElem);
		newDiv.appendChild(label);
		divElem.appendChild(newDiv);
	})

}
