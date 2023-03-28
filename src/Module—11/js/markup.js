
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
      placeholder="Search using Classes..."
    />
    <button class="search-btn" type="submit"> ${lens} </button>
  </form>
</div>

<div class="gallery"></div>

<button type="button" class="load-more is-hidden">Load more</button>
<button class="back-to-top"></button>
`





export function itemTpl () {
  const { id, largeImageURL, webformatURL, tags, likes, views, comments, downloads } = image;
  return `
    <a class="gallery__link" href="${largeImageURL}">
      <div class="gallery-item" id="${id}">
        <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes</b>${likes}</p>
          <p class="info-item"><b>Views</b>${views}</p>
          <p class="info-item"><b>Comments</b>${comments}</p>
          <p class="info-item"><b>Downloads</b>${downloads}</p>
        </div>
      </div>
    </a>
  `;} 


  export const icon_pirat = `
<svg viewBox="0 0 23 32"  height="32" width="23" class="icon_pirat">
<path d="M2.85 0.294c0.39-0.557 1.167-0.284 1.562 0.548 0.272 0.572 0.275 1.253 0.008 1.918-0.288 0.72-0.070 1.489 0.616 2.175 0.462 0.462 0.564 0.506 0.979 0.429 0.88-0.165 1.786 0.551 1.786 1.413 0 0.641-0.558 0.793-1.587 0.43-0.309-0.109-0.733-0.198-0.942-0.198-0.473 0-0.487 0.205-0.102 1.506 0.944 3.197 2.401 5.556 4.775 7.732 0.537 0.492 0.677 0.559 1.021 0.483 0.326-0.072 0.414-0.172 0.486-0.556 0.048-0.258 0.016-0.789-0.071-1.18-0.144-0.643-0.194-0.712-0.513-0.715-0.528-0.004-1.427-0.457-1.683-0.848-0.156-0.238-0.204-0.502-0.157-0.855l0.068-0.51-0.603-0.082c-1.374-0.188-2.409-1.347-2.409-2.696 0-0.834 0.531-1.352 1.387-1.352 0.774 0 1.125-0.184 1.125-0.59 0-0.261 0.295-0.732 0.459-0.732 0.024 0 0.169 0.212 0.321 0.471l0.278 0.471 0.691-0.372c0.867-0.467 2.103-1.705 2.481-2.486 0.336-0.694 0.828-1.125 1.285-1.125 0.476 0 1.047 0.641 1.158 1.3l0.095 0.559 0.517-0.467c0.591-0.534 0.808-0.572 1.17-0.21 0.896 0.896 0.538 3.327-0.589 3.992-0.416 0.245-0.709 0.704-0.551 0.862 0.037 0.037 0.399 0.026 0.804-0.025 0.714-0.089 0.742-0.107 0.87-0.586 0.162-0.601 0.649-1.153 1.124-1.272 1.146-0.288 1.806 1.448 0.988 2.598-0.216 0.303-0.236 0.431-0.119 0.74 0.317 0.834-0.266 2.129-1.196 2.659-0.765 0.436-1.168 0.797-1.413 1.267-0.177 0.341-0.242 0.368-0.682 0.29-0.267-0.047-0.596-0.119-0.731-0.158-0.223-0.066-0.22-0.038 0.041 0.315 0.392 0.53 0.397 1.2 0.012 1.512-0.561 0.454-1.042 0.289-1.619-0.554l-0.224-0.328-0.007 0.547c-0.004 0.335 0.083 0.656 0.225 0.827 0.218 0.264 0.278 0.271 1.055 0.124 0.727-0.137 0.853-0.129 1.071 0.068 0.427 0.386 0.571 1.167 0.476 2.568-0.105 1.542 0.070 2.411 0.484 2.411 0.425 0 1.046-0.382 1.046-0.643 0-0.253-0.594-0.604-0.803-0.475-0.266 0.164-0.104-0.335 0.172-0.527 0.395-0.277 0.711-0.259 1.028 0.059 0.145 0.145 0.289 0.264 0.32 0.264s0.157-0.312 0.281-0.694 0.317-0.798 0.428-0.926c0.441-0.505 1.155-0.161 1.893 0.912 0.438 0.636 0.628 0.702 0.366 0.126-0.121-0.266-0.123-0.388-0.007-0.505s0.237-0.076 0.498 0.169c0.441 0.412 0.674 0.864 0.849 1.648 0.388 1.733-1.231 3.674-3.309 3.966-0.491 0.069-0.661 0.033-0.957-0.199-0.198-0.156-0.405-0.456-0.461-0.666l-0.101-0.383-1.008 0.644c-2.952 1.884-8.118 4.924-10.099 5.942l-1.19 0.611-1.455-0.002c-1.521-0.002-2.509-0.197-3.787-0.746l-0.669-0.288 1.897-0.658c1.043-0.362 3.324-1.23 5.068-1.929 3.080-1.235 3.179-1.286 3.478-1.8 0.271-0.466 0.301-0.654 0.247-1.587-0.037-0.639-0.204-1.503-0.423-2.182-0.397-1.231-0.441-1.781-0.274-3.375l0.111-1.062-0.973-0.749c-0.535-0.412-1.358-1.139-1.829-1.616-0.708-0.718-0.93-0.868-1.289-0.868-0.758 0-1.184-0.674-1.066-1.685 0.042-0.356-0.051-0.735-0.333-1.355-0.215-0.473-0.615-1.545-0.89-2.381l-0.499-1.521-0.603-0.072c-0.778-0.092-1.132-0.432-1.674-1.608-0.482-1.047-0.448-1.589 0.105-1.668 0.181-0.026 0.295-0.135 0.295-0.281 0-0.518 0.482-0.631 1.422-0.335 0.287 0.091 0.298 0.065 0.297-0.748 0-0.522-0.101-1.107-0.264-1.538-0.318-0.837-0.331-1.199-0.058-1.589zM2.964 0.592c-0.048 0.19 0.041 0.733 0.21 1.289 0.22 0.722 0.275 1.157 0.222 1.749-0.053 0.586-0.002 0.998 0.199 1.608 0.309 0.941 0.214 1.542-0.253 1.611-0.151 0.022-0.306 0.163-0.345 0.313-0.058 0.223-0.15 0.261-0.509 0.211-0.241-0.034-0.557-0.105-0.703-0.158-0.188-0.069-0.153-0.001 0.12 0.233 0.212 0.181 0.538 0.359 0.725 0.395 0.505 0.097 1.067-0.247 1.16-0.709 0.082-0.409 0.31-0.543 0.31-0.182 0 0.116 0.074 0.179 0.165 0.141 0.885-0.367 1.164-0.39 1.928-0.159 0.424 0.128 0.885 0.212 1.025 0.185 0.442-0.084 0.386-0.602-0.12-1.107-0.517-0.517-0.933-0.586-1.178-0.195-0.211 0.338-0.317 0.334-0.408-0.013-0.042-0.161-0.135-0.239-0.22-0.187-0.099 0.061-0.104 0.143-0.016 0.25 0.094 0.113 0.062 0.158-0.111 0.158-0.133 0-0.219-0.062-0.191-0.137 0.056-0.148-0.69-0.639-0.996-0.656-0.223-0.012-0.365-0.341-0.147-0.341 0.083 0 0.114 0.059 0.069 0.132s-0.019 0.132 0.058 0.132c0.179 0 0.178-0.009-0.058-0.575-0.226-0.541-0.249-0.748-0.083-0.748 0.064 0 0.15 0.17 0.191 0.378 0.081 0.402 0.685 1.209 0.907 1.209 0.073 0-0.016-0.176-0.197-0.392s-0.433-0.662-0.559-0.992c-0.126-0.33-0.285-0.6-0.353-0.6s0-0.158 0.152-0.351c0.174-0.221 0.246-0.448 0.194-0.612-0.055-0.172-0.033-0.23 0.064-0.17 0.256 0.158 0.175-0.864-0.085-1.077-0.127-0.104-0.157-0.152-0.066-0.106 0.251 0.127 0.198-0.119-0.109-0.509-0.361-0.459-0.88-0.47-0.993-0.020zM13.458 4.066c-0.112 0.127-0.297 0.418-0.412 0.645-0.327 0.646-1.536 1.899-2.313 2.397-0.932 0.597-0.77 0.725 0.192 0.15 0.999-0.597 1.899-1.485 2.356-2.325 0.388-0.714 0.596-0.88 0.94-0.748 0.395 0.151 0.617 0.863 0.712 2.281 0.104 1.554 0.25 1.952 0.76 2.080 0.557 0.14 0.988-0.099 1.323-0.732 0.695-1.316 0.159-3.408-0.75-2.921-0.145 0.078-0.264 0.201-0.264 0.274 0 0.088 0.082 0.088 0.246 0.001 0.176-0.094 0.317-0.080 0.496 0.051 0.206 0.151 0.25 0.355 0.25 1.175 0 1.22-0.283 1.716-1.016 1.779-0.698 0.060-0.833-0.198-0.846-1.614-0.017-1.809-0.028-1.878-0.397-2.316-0.392-0.466-0.952-0.543-1.274-0.175zM1.722 4.529c0.002 0.164 0.242 0.55 0.534 0.859 0.562 0.595 0.69 0.679 0.573 0.374-0.040-0.103 0.034-0.349 0.163-0.546 0.233-0.356 0.232-0.361-0.155-0.671-0.521-0.417-1.119-0.426-1.114-0.016zM0.973 5.223c-0.042 0.109-0.040 0.343 0.004 0.519 0.093 0.37 0.7 1.134 0.902 1.134 0.080 0 0.066-0.085-0.033-0.204-0.142-0.171-0.123-0.237 0.116-0.404 0.389-0.273 0.359-0.496-0.121-0.901-0.46-0.387-0.756-0.436-0.868-0.144zM3.969 5.837c0.003 0.26 0.154 0.448 0.511 0.636 0.255 0.134 0.335 0.133 0.422-0.009 0.059-0.096 0.052-0.241-0.016-0.323s-0.088-0.185-0.043-0.229c0.044-0.044-0.031-0.075-0.166-0.069s-0.351-0.033-0.478-0.087c-0.155-0.066-0.231-0.039-0.229 0.081zM2.909 6.347c0 0.073 0.063 0.132 0.14 0.132s0.103-0.059 0.058-0.132c-0.045-0.073-0.108-0.132-0.14-0.132s-0.058 0.059-0.058 0.132zM4.298 6.744c0.045 0.073 0.141 0.132 0.214 0.132s0.095-0.059 0.051-0.132c-0.045-0.073-0.141-0.132-0.214-0.132s-0.095 0.059-0.051 0.132zM2.655 6.953c0.006 0.154 0.038 0.185 0.080 0.080 0.038-0.095 0.033-0.21-0.010-0.253s-0.075 0.034-0.069 0.173zM8.828 7.502c-0.104 0.773 0.080 1.565 0.491 2.124 0.198 0.269 0.481 0.686 0.629 0.927 0.193 0.313 0.329 0.411 0.483 0.345 0.118-0.051 0.378-0.12 0.578-0.155 0.325-0.056 0.364-0.118 0.364-0.582 0-0.379 0.090-0.61 0.333-0.853 0.35-0.35 0.624-0.345 1.206 0.021 0.325 0.205 0.541 0.092 0.242-0.126-0.163-0.12-0.136-0.149 0.155-0.166 0.194-0.011 0.299 0.019 0.234 0.066-0.22 0.16-0.192 0.411 0.036 0.324 0.158-0.061 0.189-0.036 0.11 0.091-0.074 0.119-0.057 0.144 0.051 0.077 0.122-0.075 0.123-0.142 0.004-0.285-0.12-0.145-0.114-0.187 0.027-0.189 0.148-0.002 0.15-0.022 0.007-0.113-0.303-0.192-1.709-0.168-2.201 0.038-0.388 0.162-0.468 0.263-0.468 0.591 0 0.218-0.059 0.432-0.132 0.477-0.076 0.047-0.132-0.078-0.132-0.297 0-0.431-0.51-1.255-1.361-2.201l-0.582-0.647-0.071 0.531zM4.049 7.549c-0.19 0.15-0.346 0.38-0.346 0.512 0 0.295 0.931 3.016 1.377 4.025 0.243 0.549 0.38 0.718 0.533 0.659 0.257-0.098 0.266 0.060 0.020 0.335-0.417 0.467-0.261 1.414 0.254 1.543 0.181 0.045 0.409 0.051 0.508 0.013 0.106-0.041 0.608 0.364 1.224 0.987 0.574 0.581 1.415 1.355 1.87 1.719 0.46 0.369 0.826 0.768 0.826 0.9 0 0.13 0.093 0.459 0.206 0.73s0.283 1.037 0.378 1.702l0.172 1.209 0.232-0.527c0.18-0.408 0.218-0.766 0.172-1.587-0.073-1.285-0.454-2.712-0.724-2.712-0.335 0-1.306-0.758-2.152-1.681-1.050-1.145-2.111-2.739-2.764-4.153-0.54-1.169-1.206-3.13-1.206-3.553 0-0.381-0.197-0.422-0.579-0.122zM8.992 7.677c-0 0.113 0.267 0.586 0.594 1.051s0.595 0.982 0.595 1.15c0 0.168 0.059 0.305 0.132 0.305 0.268 0 0.121-0.759-0.257-1.329-0.596-0.899-1.063-1.416-1.064-1.176zM19.451 8.418c0.227 0.466 0.246 0.631 0.127 1.074-0.077 0.288-0.27 0.687-0.428 0.888l-0.287 0.365 0.286-0.153c0.714-0.382 0.918-1.716 0.36-2.353l-0.326-0.371 0.268 0.551zM6.777 8.263c-0.236 0.103-0.43 0.256-0.43 0.342 0 0.109 0.063 0.102 0.214-0.023 0.118-0.098 0.609-0.248 1.091-0.334l0.877-0.157-0.661-0.008c-0.364-0.004-0.855 0.077-1.091 0.179zM18.43 8.258c-0.040 0.106-0.033 0.257 0.016 0.337 0.129 0.209 0.468-0.098 0.375-0.34-0.094-0.244-0.296-0.242-0.391 0.003zM11.71 9.55c-0.231 0.33-0.262 0.734-0.079 1.025 0.142 0.224 0.202 0.183 0.325-0.216 0.048-0.158 0.026-0.325-0.050-0.372-0.095-0.058-0.091-0.174 0.013-0.367l0.151-0.282 0.246 0.304c0.136 0.167 0.246 0.491 0.246 0.72 0 0.365 0.061 0.435 0.495 0.571 0.272 0.085 0.509 0.14 0.527 0.122s0.052-0.21 0.076-0.426c0.024-0.216 0.087-0.465 0.142-0.552 0.153-0.247 0.347-0.188 0.347 0.105 0 0.306 0.121 0.332 0.445 0.096 0.254-0.186 0.185-0.558-0.126-0.677-0.276-0.106-0.829 0.183-0.924 0.482-0.074 0.232-0.106 0.218-0.326-0.144-0.435-0.716-1.149-0.9-1.507-0.389zM13.223 9.637c0 0.073 0.059 0.169 0.132 0.214s0.132 0.022 0.132-0.050c0-0.073-0.059-0.169-0.132-0.214s-0.132-0.022-0.132 0.050zM16.178 9.923c-0.836 0.165-1.636 0.622-2.278 1.3-0.392 0.415-0.551 0.521-0.492 0.329 0.072-0.233 0.014-0.309-0.333-0.43-0.536-0.187-1.619-0.187-2.292 0-0.611 0.17-1.34 0.846-1.47 1.363-0.113 0.449 0.145 0.964 0.6 1.197 0.184 0.095 0.73 0.234 1.213 0.308 1.297 0.201 2.147 0.817 3.069 2.225 0.422 0.645 0.707 0.808 1.119 0.641 0.194-0.078 0.184-0.106-0.073-0.205-0.163-0.063-0.491-0.393-0.727-0.734s-0.847-1.054-1.356-1.584c-0.867-0.903-0.963-0.966-1.521-0.984-0.327-0.011-0.625-0.006-0.661 0.010s-0.201 0.043-0.365 0.060c-0.238 0.025-0.268-0.005-0.15-0.148 0.082-0.098 0.194-0.15 0.251-0.116s0.176-0.025 0.266-0.134c0.231-0.279 0.466-0.246 0.246 0.034-0.164 0.21-0.16 0.214 0.050 0.050 0.127-0.1 0.231-0.137 0.231-0.083s0.080 0.032 0.177-0.049c0.098-0.081 0.215-0.11 0.26-0.064s0.189-0.103 0.318-0.331c0.318-0.559 0.603-0.582 0.305-0.025-0.106 0.197-0.064 0.267 0.231 0.382 0.911 0.357 2.074 0.567 3.539 0.639 1.331 0.065 1.661 0.042 2.017-0.142 0.234-0.121 0.425-0.278 0.425-0.349 0-0.272 0.026-0.335 0.241-0.592 0.22-0.262 0.22-0.262-0.076-0.013-0.164 0.139-0.298 0.206-0.298 0.149s-0.089-0.029-0.198 0.062c-0.303 0.252-0.236 0.425 0.099 0.254 0.281-0.144 0.285-0.139 0.076 0.080-0.122 0.128-0.409 0.247-0.637 0.265l-0.416 0.033 0.257-0.283c0.413-0.454 0.555-0.822 0.555-1.439 0-0.489-0.061-0.624-0.395-0.871-0.217-0.161-0.432-0.44-0.477-0.62-0.090-0.359-0.314-0.391-1.331-0.19zM16.264 10.711c0 0.073 0.063 0.132 0.14 0.132s0.103-0.059 0.058-0.132c-0.045-0.073-0.108-0.132-0.14-0.132s-0.058 0.059-0.058 0.132zM16.397 11.24c0 0.073 0.063 0.132 0.14 0.132s0.103-0.059 0.058-0.132c-0.045-0.073-0.108-0.132-0.14-0.132s-0.058 0.059-0.058 0.132zM17.587 11.504c0 0.073 0.059 0.132 0.132 0.132s0.132-0.059 0.132-0.132c0-0.073-0.059-0.132-0.132-0.132s-0.132 0.059-0.132 0.132zM16.926 11.769c0 0.073 0.059 0.132 0.132 0.132s0.132-0.059 0.132-0.132c0-0.073-0.059-0.132-0.132-0.132s-0.132 0.059-0.132 0.132zM18.83 12.198l-0.252 0.298 0.298-0.252c0.164-0.139 0.298-0.272 0.298-0.298 0-0.106-0.106-0.028-0.343 0.252zM17.256 12.165c-0.045 0.073 0.011 0.132 0.124 0.132s0.206-0.059 0.206-0.132c0-0.073-0.056-0.132-0.124-0.132s-0.161 0.059-0.206 0.132zM12.033 12.43c-0.085 0.158-0.124 0.317-0.088 0.353s0.135-0.063 0.22-0.221c0.085-0.158 0.124-0.317 0.088-0.353s-0.135 0.063-0.22 0.221zM11.565 12.703c-0.048 0.078-0.059 0.169-0.024 0.204s0.098-0.029 0.141-0.141c0.089-0.233 0.013-0.274-0.117-0.063zM16.727 12.694c-0.045 0.073-0.019 0.132 0.058 0.132s0.14-0.059 0.14-0.132c0-0.073-0.026-0.132-0.058-0.132s-0.095 0.059-0.14 0.132zM12.614 13.331c0.406 0.463 1.462 1.082 2.424 1.421 0.924 0.326 1.756 0.418 1.756 0.194 0-0.070 0.177-0.329 0.393-0.575l0.393-0.448-1.286-0.083c-1.128-0.073-2.876-0.405-3.666-0.697-0.261-0.096-0.261-0.093-0.014 0.188zM11.584 14.711c0.054 0.164 0.093 0.706 0.087 1.205-0.010 0.817 0.031 0.964 0.407 1.484 0.23 0.317 0.649 0.941 0.932 1.387 0.477 0.751 1.115 1.311 1.496 1.312 0.239 0.001 0.344-0.813 0.182-1.4-0.201-0.726-0.328-0.881-0.723-0.881-0.19 0-0.346-0.046-0.346-0.102s-0.173-0.287-0.385-0.514c-0.212-0.227-0.368-0.515-0.348-0.642s-0.022-0.304-0.094-0.395c-0.072-0.091-0.087-0.165-0.033-0.165s0.033-0.079-0.048-0.176c-0.109-0.131-0.094-0.241 0.060-0.43 0.113-0.139 0.162-0.17 0.11-0.068-0.064 0.123-0.044 0.153 0.058 0.090 0.231-0.143 0.070-0.311-0.648-0.675-0.792-0.402-0.831-0.403-0.708-0.031zM14.207 14.942c0.116 0.182 0.285 0.331 0.374 0.331s0.164 0.149 0.165 0.329c0.002 0.216 0.088 0.345 0.252 0.377 0.243 0.047 0.243 0.038-0.002-0.382-0.138-0.236-0.299-0.418-0.358-0.405s-0.227-0.111-0.374-0.278l-0.268-0.303 0.211 0.331zM15.343 15.584c0.083 0.171 0.122 0.424 0.086 0.562s-0.012 0.251 0.054 0.251c0.195 0 0.137-0.59-0.086-0.867-0.196-0.244-0.198-0.242-0.054 0.054zM12.9 15.797c0.185 0.14 0.204 0.195 0.066 0.198-0.14 0.003-0.125 0.052 0.056 0.184 0.322 0.235 0.389 0.624 0.089 0.517-0.12-0.043-0.189-0.053-0.152-0.022 0.648 0.544 0.605 0.545 0.551-0.016-0.027-0.285-0.115-0.505-0.195-0.489s-0.149-0.031-0.154-0.104c-0.013-0.218-0.208-0.463-0.368-0.463-0.082 0-0.034 0.087 0.107 0.194zM15.299 17.679c-0.131 0.034-0.22 0.102-0.197 0.15 0.246 0.526 0.915 1.741 0.958 1.741 0.069 0-0.137-0.731-0.263-0.934-0.069-0.111-0.020-0.111 0.188 0 0.38 0.203 0.39-0.124 0.011-0.361-0.277-0.173-0.234-0.491 0.047-0.35 0.086 0.043 0.041-0.016-0.101-0.13s-0.29-0.201-0.331-0.193c-0.041 0.008-0.181 0.043-0.313 0.077zM10.557 18.22c0.097 0.068 0.171 0.162 0.165 0.208s-0.004 0.114 0.005 0.15c0.009 0.036 0.029 0.17 0.044 0.298 0.047 0.391 0.322 0.959 0.465 0.959 0.184 0 0.171-0.177-0.030-0.377-0.091-0.091-0.173-0.222-0.182-0.291s-0.031-0.155-0.050-0.192c-0.018-0.036-0.048-0.126-0.066-0.198s-0.048-0.162-0.066-0.198c-0.018-0.036-0.040-0.136-0.050-0.22s-0.106-0.179-0.215-0.208c-0.158-0.043-0.162-0.029-0.022 0.070zM14.134 18.551c0.069 0.069 0.097 0.204 0.060 0.298s0.065 0.242 0.225 0.328c0.238 0.127 0.27 0.123 0.179-0.023-0.061-0.098-0.119-0.238-0.128-0.311s-0.026-0.197-0.037-0.275c-0.011-0.079-0.111-0.143-0.223-0.143-0.129 0-0.157 0.046-0.076 0.126zM14.942 19.085c0 0.229 0.071 0.353 0.203 0.353 0.168 0 0.177-0.051 0.048-0.298-0.228-0.438-0.251-0.443-0.251-0.055zM12.959 19.306c0 0.073 0.063 0.132 0.14 0.132s0.103-0.059 0.058-0.132c-0.045-0.073-0.108-0.132-0.14-0.132s-0.058 0.059-0.058 0.132zM19.523 20.066c-0.102 0.2-0.227 0.572-0.277 0.826l-0.091 0.463 0.288-0.562c0.393-0.768 0.579-0.714 0.224 0.066-0.296 0.652-0.388 1.969-0.189 2.711 0.082 0.307 0.168 0.364 0.549 0.364 0.612 0 1.012-0.169 1.578-0.666 0.613-0.539 0.615-0.906 0.006-1.92-0.941-1.568-1.702-2.035-2.088-1.281zM13.225 20.263c0.004 0.346 0.22 0.46 1.026 0.542 0.456 0.047 0.977 0.122 1.157 0.167 0.373 0.094 0.44-0.138 0.154-0.529-0.219-0.299-2.341-0.463-2.338-0.18zM21.818 20.34c0 0.060 0.178 0.438 0.397 0.841 0.566 1.044 0.642 1.787 0.256 2.476-0.444 0.791-1.528 1.496-2.41 1.569-0.505 0.042-0.743 0.005-0.858-0.133-0.228-0.275-0.595-2.334-0.509-2.862 0.098-0.608-0.219-1.206-0.64-1.206-0.457 0-0.529 0.218-0.152 0.465 0.456 0.299 0.502 0.468 0.599 2.203 0.104 1.862 0.235 2.092 1.196 2.092 1.132 0 2.638-1.008 3-2.009 0.275-0.759 0.215-1.781-0.147-2.501-0.179-0.356-0.291-0.647-0.248-0.647s0.003-0.089-0.088-0.198c-0.178-0.215-0.397-0.264-0.397-0.090zM20.628 20.559c0 0.117 0.955 1.854 1.093 1.987 0.217 0.21 0.003-0.3-0.512-1.223-0.411-0.736-0.581-0.959-0.581-0.764zM18.355 21.488c0.067 0.145 0.155 0.354 0.195 0.463 0.063 0.171 0.075 0.17 0.084-0.008 0.006-0.113-0.082-0.322-0.195-0.463-0.202-0.253-0.204-0.252-0.084 0.008zM13.488 21.756c0 0.397 0.050 0.416 1.289 0.506 0.937 0.068 0.959 0.062 0.959-0.24 0-0.276-0.089-0.325-0.837-0.455-1.269-0.221-1.411-0.202-1.411 0.189zM20.638 21.497c-0.014 0.2 0.406 1.404 0.468 1.342 0.028-0.028-0.064-0.373-0.203-0.767s-0.259-0.653-0.264-0.575zM22.349 22.331c-0.003 0.472-0.465 1.129-0.996 1.415-0.259 0.14-0.506 0.389-0.547 0.555-0.136 0.54-0.899 0.744-1.297 0.346-0.134-0.134-0.181-0.317-0.127-0.496 0.078-0.261 0.067-0.267-0.135-0.074-0.183 0.175-0.193 0.268-0.062 0.555 0.545 1.197 3.43-0.339 3.424-1.823-0.001-0.218-0.059-0.486-0.13-0.595-0.102-0.159-0.129-0.135-0.13 0.117zM20.366 22.438c-0.001 0.159 0.058 0.326 0.13 0.371 0.168 0.104 0.168-0.202 0-0.463-0.104-0.161-0.129-0.144-0.13 0.091zM13.62 23.242c0 0.402 0.005 0.404 0.826 0.458 0.698 0.045 0.863 0.013 1.063-0.208 0.334-0.369 0.146-0.484-0.943-0.575l-0.946-0.079v0.404zM16.397 24.483c-3.194 1.597-11.524 5.061-14.439 6.004-0.632 0.205-1.126 0.41-1.097 0.457 0.059 0.095 1.172 0.349 1.982 0.452 0.366 0.047 0.468 0.028 0.331-0.059-0.149-0.095-0.155-0.127-0.021-0.129 0.097-0.001 0.573-0.186 1.058-0.41s1.744-0.794 2.798-1.267c2.436-1.091 10.542-5.119 10.96-5.445 0.173-0.136 0.292-0.303 0.264-0.371s-0.854 0.277-1.836 0.768zM17.058 24.884c-0.905 0.53-5.836 3-8.86 4.44-0.541 0.258-0.556 0.276-0.163 0.207 0.362-0.064 0.419-0.042 0.35 0.139-0.046 0.118-0.225 0.223-0.399 0.232-0.368 0.019-0.417 0.029-0.806 0.162-0.16 0.055-0.328 0.215-0.372 0.357s-0.16 0.258-0.255 0.258c-0.223 0-0.496-0.326-0.375-0.448 0.051-0.051-0.052-0.039-0.23 0.026-0.255 0.094-0.32 0.209-0.31 0.545 0.016 0.543-0.385 0.722-1.407 0.628-0.57-0.052-0.656-0.038-0.397 0.066 0.589 0.236 1.721 0.020 2.973-0.566 3.533-1.655 11.441-6.192 11.441-6.563 0-0.092-0.015-0.161-0.033-0.153s-0.539 0.31-1.157 0.671zM19.998 24.292c-0.165 0.032-0.265 0.113-0.224 0.18 0.117 0.189 0.538 0.145 0.721-0.076 0.177-0.214 0.126-0.225-0.498-0.105zM13.488 24.595c0 0.23 0.068 0.274 0.364 0.24 0.216-0.025 0.364-0.122 0.364-0.24s-0.147-0.215-0.364-0.24c-0.296-0.034-0.364 0.010-0.364 0.24z"></path>

</svg>
`