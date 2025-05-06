window.onload=function(){
    home();
};

function refresh(){
  location.reload();
}

function home(){
  document.getElementById("lecturerHome").style.display="none"
  document.getElementById("logOutBtn").style.display="none"
  document.getElementById('lecturerLoginAccepted').style.display="none";
 document.getElementById('registration').style.display="none"; 
 document.getElementById('home').style.display="none";
 document.getElementById('lecturerLogin').style.display="none";
 document.getElementById("denyresubmission").style.display="none"
  document.getElementById("fakeSubmit").style.display="none"
  document.getElementById("lecturerLogin-btn").style.display="block"
  document.getElementById("logOutBtn").style.display="none"
  document.getElementById("denyresubmission").style.display="none"
    document.getElementById('registration').style.display="none";
    document.getElementById("home").style.removeProperty("display");
    document.getElementById('p2').style.display="none";
    document.getElementById('commingsoon').style.display="none";
    document.getElementById('homenav').style.display="none";
};
function lecturerLogin(){
  document.getElementById("lecturerHome").style.display="none"
  document.getElementById("lecturerLoginPage").style.display="block";
  document.getElementById("logOutBtn").style.display="none"
  document.getElementById('lecturerLoginAccepted').style.display="none";
 document.getElementById('registration').style.display="none"; 
 document.getElementById('home').style.display="none";
 document.getElementById('lecturerLogin').style.display="block";
 document.getElementById("denyresubmission").style.display="none"
}
function lecturerLoginAccepted(){
  document.getElementById('ViewMarkedAssignments').style.display='none'
  document.getElementById("lecturerLoginPage").style.display="block"
  const staffId = document.getElementById('staffID').value.toLowerCase();
  const password = document.getElementById('lecturerPassword').value.toLowerCase();
  const validId = "sa0876";
  const validPassword = "staff";

  if (staffId !== validId || password !== validPassword) {
    alert('Invalid Login Details');
    document.getElementById('staffID').value = '';
    document.getElementById('lecturerPassword').value = '';
    return false; // prevent submission
  }
  document.getElementById("lecturerLoginPage").style.display="none";
  document.getElementById('lecturerLoginAccepted').style.display="none";
 document.getElementById('registration').style.display="none"; 
 document.getElementById("lecturerLoginAccepted").style.display="block"
 document.getElementById("lecturerLogin-btn").style.display="none"
 document.getElementById("realSubmit").style.display="none"
 document.getElementById("fakeSubmit").style.display="none"
 document.getElementById("logOutBtn").style.display="block"
 document.getElementById("lecturerHome").style.display="block"
 document.getElementById("viewBtn").style.display="none"
 document.getElementById("MarkNewSubmission").style.display="none"
  return true;
}
function home2(){
  document.getElementById("lecturerHome").style.display="none"
  document.getElementById('lecturerLogin').style.display="none";
  document.getElementById("fakeSubmit").style.display="block"
  document.getElementById("logOutBtn").style.display="none"
    document.getElementById('registration').style.display="none";
    document.getElementById('lecturerLogin-btn').style.display="block";
    document.getElementById("home").style.removeProperty("display");
    document.getElementById('p1').style.display="none";
    document.getElementById("p2").style.removeProperty("display");
    document.getElementById('commingsoon').style.display="none";
    document.getElementById('homenav').style.display="none";
    document.getElementById('lecturerLogin').style.display="none";
    
    
    
const matric=document.getElementById("matric").value ;

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
  document.getElementById("lecturerHome").style.display="none"
  document.getElementById("logOutBtn").style.display="none"
  document.getElementById("fakeSubmit").style.display="block"
  document.getElementById("realSubmit").style.display="none"
 document.getElementById('home').style.display="none";
 document.getElementById('lecturerLogin').style.display="none";
    document.getElementById("registration").style.removeProperty("display");
    document.getElementById('commingsoon').style.display="none";
    document.getElementById("#row10").style.display="block"
};






const form=document.getElementById("myform");
const button=document.getElementById("submit")
const table=document.getElementById("table")


function login() {
  document.getElementById("lecturerHome").style.display="none"
  document.getElementById("logOutBtn").style.display="none"
    document.getElementById('registration').style.display="none";
    document.getElementById('home').style.display="none";
    document.getElementById('denyresubmission').style.display="none";
    
    document.getElementById('register-btn').style.display="none";
    document.getElementById("commingsoon").style.removeProperty("display");
    document.getElementById("homenav").style.removeProperty("display");
}
    const fileInput = document.getElementById('fileInput');
    const viewBtn = document.getElementById('viewBtn');
    const filePreview = document.getElementById('filePreview');
    let selectedFile;

    fileInput.addEventListener('change', (e) => {
      selectedFile = e.target.files[0];
    });

    viewBtn.addEventListener('click', () => {
      if (selectedFile) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          if (selectedFile.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = fileReader.result;
            filePreview.innerHTML = '';
            filePreview.appendChild(img);
          } else {
            filePreview.innerHTML = fileReader.result;
          }
        };
        fileReader.readAsDataURL(selectedFile);
      } else {
        alert('Please select a file first.');
      }
    });

function preview(){
  document.getElementById("lecturerHome").style.display="block"
  document.getElementById('myform').style.display="none";
  document.getElementById("logOutBtn").style.display="block"
  
}
function denySameMatric(){
  document.getElementById("lecturerHome").style.display="none"
  document.getElementById("logOutBtn").style.display="none";
  const matric1 = document.getElementById('matric').value.toLowerCase();
  const course1 = document.getElementById('course').value.toLowerCase();
  const coursetitle1 = document.getElementById('coursetitle').value.toLowerCase();

  const matric2 = document.getElementById('denySameMatric').value.toLowerCase();
  const course2 = document.getElementById('resubmitcourse').value.toLowerCase();
  const coursetitle2 = document.getElementById('resubmitcoursetitle').value.toLowerCase();

  if (matric2 === matric1 && course2 === course1 && coursetitle2 === coursetitle1) {
    alert('You cannot resubmit the same assignment');
    document.getElementById('denySameMatric').value = '';
    document.getElementById('resubmitcourse').selectedIndex = 0;
    document.getElementById('resubmitcoursetitle').selectedIndex = 0;
    return false; // prevent submission
  } else if (matric2 === matric1 && course2 === course1) {
    alert('You are resubmitting the same course, choose another course title or another matric number');
    document.getElementById('resubmitcoursetitle').selectedIndex = 0;
    return false;
  } else if (matric2 === matric1 && coursetitle2 === coursetitle1) {
    alert('You are resubmitting the same assignment title, choose another course or another matric number');
    document.getElementById('resubmitcourse').selectedIndex = 0;
    return false;
  } else if (course2 === course1 && coursetitle2 === coursetitle1) {
    alert('You are resubmitting the same course and assignment title, choose another matric number');
    document.getElementById('denySameMatric').value = '';
    return false;
  } else if (matric2 === matric1) {
    alert('You have submitted this matric number before, change it');
    document.getElementById('denySameMatric').value = '';
    return false;
  } else if (course2 === course1) {
    alert('You have submitted this course before, change it');
    document.getElementById('resubmitcourse').selectedIndex = 0;
    return false;
  } else if (coursetitle2 === coursetitle1) {
    alert('You have submitted this assignment title before, change it');
    document.getElementById('resubmitcoursetitle').selectedIndex = 0;
    return false;
  }
  // allow submission
  return true;
}
function resubmit(){
  document.getElementById("lecturerHome").style.display="none"
  document.getElementById("logOutBtn").style.display="none"
  document.getElementById('home').style.display="none";
  document.getElementById("denyresubmission").style.display="block"
  document.getElementById("lecturerLogin").style.display="none";
}
function viewNewSubmmision(){
  document.getElementById("viewBtn").style.display="block"
  document.getElementById("MarkNewSubmission").style.display="block"
  document.getElementById("markedAssingments").style.display="none"
  document.getElementById("NewSubmission").style.display="none"
}
function viewMarkedSubmmision(){
  document.getElementById("viewBtn").style.display="block"
  document.getElementById("MarkNewSubmission").style.display="none"
  document.getElementById("markedAssingments").style.display="none"
  document.getElementById("NewSubmission").style.display="none"
  document.getElementById('ViewMarkedAssignments').style.display='block'
}
function lecturerHome(){
  document.getElementById("MarkNewSubmission").style.display="none";
  document.getElementById('NewSubmission').style.display='block'
  document.getElementById('markedAssingments').style.display='block'
  document.getElementById("lecturerLoginPage").style.display="block"
  document.getElementById("lecturerLoginPage").style.display="none";
  document.getElementById('lecturerLoginAccepted').style.display="block";
 document.getElementById('registration').style.display="none"; 
 document.getElementById("lecturerLoginAccepted").style.display="block"
 document.getElementById("lecturerLogin-btn").style.display="none"
 document.getElementById("realSubmit").style.display="none"
 document.getElementById("fakeSubmit").style.display="none"
 document.getElementById("logOutBtn").style.display="block"
 document.getElementById("lecturerHome").style.display="block"
 document.getElementById("viewBtn").style.display="none"
 document.getElementById("ViewMarkedAssignments").style.display="none"
}
function record(){
  document.getElementById("MarkNewSubmission").style.display="none";
  const matric1= document.getElementById("matric").value
  const course1= document.getElementById("course").value
  const title1= document.getElementById("coursetitle").value
  const score1= document.getElementById("assignmentScore").value

  const matric2= document.getElementById('markedMatrictable')
  const course2= document.getElementById('MarkedCoursecodetable')
  const title2= document.getElementById('MarkedCoursetitletable')
  const score2= document.getElementById('scoretable')

  matric2.innerHTML=matric1
  course2.innerHTML=course1
  title2.innerHTML=title1
  score2.innerHTML=score1


  document.getElementById('NewSubmission').style.display='block'
  document.getElementById('markedAssingments').style.display='block'
  document.getElementById("lecturerLoginPage").style.display="block"
  document.getElementById("lecturerLoginPage").style.display="none";
  document.getElementById('lecturerLoginAccepted').style.display="block";
 document.getElementById('registration').style.display="none"; 
 document.getElementById("lecturerLoginAccepted").style.display="block"
 document.getElementById("lecturerLogin-btn").style.display="none"
 document.getElementById("realSubmit").style.display="none"
 document.getElementById("fakeSubmit").style.display="none"
 document.getElementById("logOutBtn").style.display="block"
 document.getElementById("lecturerHome").style.display="block"
 document.getElementById("viewBtn").style.display="none"
 document.getElementById("ViewMarkedAssignments").style.display="none"
}

 