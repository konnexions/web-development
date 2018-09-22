document.querySelector('.grid').addEventListener('click', function(e){
  console.log(e.target.tagName);
  if(e.target.tagName === 'IMG')
  {
    var howmany = this.querySelectorAll('li').length;

    if(howmany > 1)
    {
      var removeTarget = e.target.parentNode;
      console.log(e.target.parentNode);
      removeTarget.parentNode.removeChild(removeTarget);
    }else {
      var photoTitle = e.target.alt;
      document.querySelector('#art p').innerHTML = "<p>You've picked: " + photoTitle + "</p>";
    }
  }
});
