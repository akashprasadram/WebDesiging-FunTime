//Akash Prasad Ram
var button=document.getElementById("click");
var input=document.getElementById("item");
var ol=document.querySelector("ol");
var table=document.getElementById("myTable");
var tableB=document.getElementById("tableBody");
var dButton=document.getElementsByClassName("delete");
function addItemAfterClick()
{
	addItem();
	Testing();
}

function addItemAfterKeypress()
{
	if(event.which ==13)
	{
		addItem();
	}
}


function testing()
{
	for (var i = 0; i < dButton.length; i++)
	{

		(function(index){
	        dButton[i].onclick = function(){
	              var x = document.getElementsByTagName("li")[index].value;
	              myDeleteFunction(index);
	        }    
	    })(i);

	}
}

function addItem()
{
	
	if(input.value.trim().length>0)
	{
		var li=document.createElement("li");
		var str=document.createTextNode(input.value);
		li.appendChild(str);
		var p=ol.appendChild(li);

		var row=document.createElement("tr");
		var cell=document.createElement("td");
		cell.appendChild(p);
		row.appendChild(cell);

		var p=document.createElement("button");
		var text = document.createTextNode("Delete");
		p.appendChild(text);
		p.classList.add("delete");

		var cell=document.createElement("td");
		cell.appendChild(p);
		row.appendChild(cell);
		tableB.appendChild(row);
		table.appendChild(tableB);
		var p1=dButton.length;
	}
	input.value="";
	testing();
}
function myDeleteFunction(a) {
	dButton[a]=null;
    table.deleteRow(a);
    testing();
}
button.addEventListener("click",addItemAfterClick);

input.addEventListener("keypress",addItemAfterKeypress);

testing();