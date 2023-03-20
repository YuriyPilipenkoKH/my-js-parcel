
export const lens = `
<div class="lens-wrap">
<svg viewBox="0 0 32 32"  height="30" width="30" class="lens">
<path d="M31.278 28.622l-7.077-7.077c1.704-2.268 2.624-5.029 2.621-7.866 0-7.247-5.896-13.142-13.142-13.142s-13.142 5.896-13.142 13.142c0 7.247 5.896 13.142 13.142 13.142 2.837 0.003 5.598-0.917 7.866-2.621l7.077 7.077c0.358 0.32 0.826 0.491 1.306 0.478s0.937-0.21 1.277-0.55c0.34-0.34 0.537-0.797 0.55-1.277s-0.157-0.948-0.478-1.306zM4.292 13.679c0-1.857 0.551-3.672 1.582-5.215s2.498-2.747 4.213-3.457c1.715-0.71 3.603-0.896 5.424-0.534s3.494 1.256 4.806 2.569c1.313 1.313 2.207 2.986 2.569 4.806s0.176 3.708-0.534 5.424c-0.71 1.715-1.914 3.181-3.457 4.213s-3.359 1.582-5.215 1.582c-2.489-0.003-4.875-0.993-6.635-2.753s-2.75-4.146-2.753-6.635z"></path>
</svg>
</div>
`;


export const headerOfClassSearch = `
<div class="header">
<form class="search-form " id="search-form">
    <input
    class="field"
      type="text"
      name="searchQuery"
      autocomplete="off"
      placeholder="Search images..."
    />
    <button class="search-btn" type="submit"> ${lens} </button>
  </form>
</div>

<div class="gallery"></div>

<button type="button" class="load-more is-hidden">Load more</button>
`
