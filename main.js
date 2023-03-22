
var openNav = false;
function navBtn()
{
  if(!openNav)
  {
    document.querySelector("#mobileNav").style.display = "block";
    openNav = true;
  }
  else
  {
    document.querySelector("#mobileNav").style.display = "none";
    openNav = false;
  }
}





