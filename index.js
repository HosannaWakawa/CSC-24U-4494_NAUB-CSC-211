window.onload=function(){
    home();
};

function home(){
    document.getElementById('registration').style.display="none";
    document.getElementById("home").style.removeProperty("display");
    document.getElementById('p2').style.display="none";
    document.getElementById('commingsoon').style.display="none";
    document.getElementById('homenav').style.display="none";
};
function home2(){
    document.getElementById('registration').style.display="none";
    document.getElementById('register-btn').style.display="none";
    document.getElementById("home").style.removeProperty("display");
    document.getElementById('p1').style.display="none";
    document.getElementById("p2").style.removeProperty("display");
    document.getElementById('commingsoon').style.display="none";
    document.getElementById('homenav').style.display="none";
    
    
    
const matric=document.getElementById("matric").value;

matrictable.innerHTML=matric;
const matricetable=document.getElementById("matrictable")
matric.innerHTML=matric;
const course=document.getElementById("course").value

const coursecodetable=document.getElementById("coursecodetable")
coursecodetable.innerHTML=course;

const coursetitle=document.getElementById("coursetitle").value
const coursetitletable=document.getElementById("coursetitletable")
coursetitletable.innerHTML=coursetitle;

const gender=document.querySelector('input[name="gender"]:checked').value;

const gendertable=document.getElementById("gendertable")
gendertable.innerHTML=gender;
};



function submit() {
 document.getElementById('home').style.display="none";
    document.getElementById("registration").style.removeProperty("display");
    document.getElementById('commingsoon').style.display="none";
};






const form=document.getElementById("myform");
const button=document.getElementById("submit")
const table=document.getElementById("table")


function login() {
    document.getElementById('registration').style.display="none";
    document.getElementById('home').style.display="none";
    
    document.getElementById('register-btn').style.display="none";
    document.getElementById("commingsoon").style.removeProperty("display");
    document.getElementById("homenav").style.removeProperty("display");
}