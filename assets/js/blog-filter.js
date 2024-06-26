const e = document.querySelector('[data-blog-filter]');
const flags = document.querySelectorAll('[data-tag-flag]');
const posts = document.querySelectorAll('[data-tags]');
const visibleFlags = [];

const areFlagsActive = () => {
  flags.forEach((flag) => {
    if (flag.checked) return true;
  });
  return false;
};

const countTags = () => {
  flags.forEach((flag) => {
    const tag = flag.getAttribute('data-tag-flag');
    let count = 0;
    console.log(tag);

    posts.forEach((post) => {
      console.log(post.getAttribute('data-tags'));

      if (
        post
          .getAttribute('data-tags')
          .toLowerCase()
          .indexOf(tag.toLowerCase()) > -1
      ) {
        count++;
      }
    });

    // After posts are cycled, update the flag
    flag.innerHTML += ` (${count})`;
  });
};

const setHandlers = () => {
  flags.forEach((flag) => {
    flag.addEventListener('change', (e) => {
      e.preventDefault();
      if (flag.checked) {
        visibleFlags.push(flag.getAttribute('data-tag-flag'));
        updatePosts();
      } else {
        const index = visibleFlags.indexOf(flag.getAttribute('data-tag-flag'));
        visibleFlags.splice(index, 1);
        updatePosts();
      }
    });
  });
};

const updatePosts = () => {
  // If no filters active, show all posts.

  if (visibleFlags.length === 0) {
    console.log('No flags active');

    posts.forEach((post) => {
      post.style.display = 'flex';
    });
  } else {
    // Else only show the posts selected.

    posts.forEach((post) => {
      const postTags = post.getAttribute('data-tags').toLowerCase();

      let visible = false;

      visibleFlags.forEach((flag) => {
        if (postTags.indexOf(flag) > -1) {
          visible = true;
        }
      });

      post.style.display = visible ? 'flex' : 'none';
    });
  }
};

const blogFilter = () => {
  countTags();
  setHandlers();
  updatePosts();
};

export default blogFilter;
