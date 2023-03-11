const addComment = async (event) => {
    event.preventDefault();
    // document.querySelector('#comment-form').style.display = "block";
    const message = document.querySelector('#commentContent').value.trim();
  
    const splitURL = window.location.href.split("/");
    
    const blog_id = splitURL[splitURL.length - 1];

    if (message) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ 
          message ,
          blog_id
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/blogpost/${blog_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');

      const splitURL = window.location.href.split("/");
    
    const blog_id = splitURL[splitURL.length - 1];
  
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace(`/blogpost/${blog_id}`);
      } else {
        alert('Failed to delete post');
      }
    }
  };

  
  document
  .querySelector('.commentForm')
  .addEventListener('submit', addComment);

  
document
.querySelector('.blogpost-list')
.addEventListener('click', delButtonHandler);

