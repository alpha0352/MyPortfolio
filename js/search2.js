const projectData = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dwa1jtluu/image/upload/v1673204918/kenjimmy.me/veet-shot_lerl5h.jpg",
        title: "Project 1",
        description: "Description of project 1",
        link: "#",
        language: ["C","C#"]
    },
    {
        id:2,
        image: "https://res.cloudinary.com/dwa1jtluu/image/upload/v1673204918/kenjimmy.me/veet-shot_lerl5h.jpg",
        title: "Project 2",
        description: "Description of project 2",
        link: "#",
        language: ["C#"]
    },
    {
        id:3,
        image: "https://res.cloudinary.com/dwa1jtluu/image/upload/v1673204918/kenjimmy.me/veet-shot_lerl5h.jpg",
        title: "Project 3",
        description: "Description of project 3",
        link: "#",
        language: ["HTML","JavaScript","Python"]
    }
];
    
  const windowList = document.querySelector('#project_list');
  
  projectData.forEach(project => {
    const listItem = document.createElement('div');
    listItem.classList.add('list-item',project.id,'hide');
    listItem.setAttribute('id','project-item')
  
    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.title;
    listItem.appendChild(image);
  
    const title = document.createElement('h3');
    title.textContent = project.title;
    listItem.appendChild(title);
  
    const description = document.createElement('p');
    description.textContent = project.description;
    listItem.appendChild(description);
  
    const link = document.createElement('a');
    link.textContent = "Learn More";
    link.href = project.link;
    listItem.appendChild(link);
  
    windowList.appendChild(listItem);
  });

function langToid(lang){
    let tmp 
    projectData.forEach((project) =>{
        if (project.language == lang){
            tmp = project.id
        }
    });
    return tmp
}

function filterProject(lang) 
{
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (lang.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all project items
  let elements = document.querySelectorAll("#project-item");
  //loop through all items

  elements.forEach((element) => {
    //display all items on 'all' button click
    if (lang == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains language class
    //   console.log(element.classList)
      console.log(langToid(lang))
    //   console.log(element.classList.contains(String(langToid(lang))))

      if (element.classList.contains(String(langToid(lang)))) {
        //display element based on language
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
window.onload = () => {
    filterProject("all");
  }
  
  