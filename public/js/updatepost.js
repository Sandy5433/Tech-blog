const updateBlogPost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blogpost-title').value.trim();
    const content = document.querySelector('#blogpost-content').value.trim();
  
    const splitURL = window.location.href.split("/");
    
    const id = splitURL[splitURL.length - 1];

    if (title && content) {
      const response = await fetch(`/api/blogposts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(id)
      const splitURL = window.location.href.split("/");
    
    const blog_id = splitURL[splitURL.length - 1];
  
      const response = await fetch(`/api/blogposts/${id}`, {
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
  .querySelector('.update-blogpost-form')
  .addEventListener('submit', updateBlogPost);

  document
.querySelector('.editPost')
.addEventListener('click', delButtonHandler);
  