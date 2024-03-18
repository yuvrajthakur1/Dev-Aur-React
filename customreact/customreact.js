function customRender(reactElement,container)
{

    //creating domElement  for injection  we have reactElement for injection so we apply reactElement.type by it we we will
    //get what type element we will be getting  here,


/*
    const domElement=document.createElement(reactElement.type);

    domElement.innerHTML= reactElement.children;

    domElement.setAttribute('href',reactElement.props.href);
    
    domElement.setAttribute('target',reactElement.props.target);

    container.appendChild(domElement);

*/

//----------->above code is not generalised hence we made loop based code which will suits to all kind of attributes 

//single double.

//This code will work for all kind of elelments

//react mei behind the scenes  ese hi custom ke jese kaam karta hei

const domElement=document.createElement(reactElement.type);

 domElement.innerHTML= reactElement.children;

 for(const prop in reactElement.props)
{
    if(prop === 'children') con
    
    domElement.setAttribute(prop,reactElement.props[prop])

    container.appendChild(domElement);
}


}




//type: property Show karti hai type of element 

//props show karti hei properties reactElement ki hum create karte hei

//children : example--> <a>Click me to visit google website</a> the text inside tag is children 

//react Creates tree of an react element. which is also known as virtual DOM tree

const reactElement=
{
  type:'a',

  props:{

    href:'http://google.com',

    target:'_blank'
  },

  children:'Click me to visit google website'
}

//ye upar jo hei hmei milta hei react ke through.


//grabing root element

const mainContainer= document.querySelector("#root");

//rendering a tag as a example



// ab hum create karenge method jo humare reactElement ko root ke andar render karde 

//Syntax customRender(Kyinject karna hei , kaha pe inject karna hei)

customRender(reactElement,mainContainer);