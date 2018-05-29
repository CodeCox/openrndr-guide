const configs = {
    repoLink: 'https://github.com/openrndr/openrndr-guide'
};


window.$docsify = {
    repo: 'openrndr',
    name: 'OPENRNDR',
    auto2top: true,
    loadSidebar: true,
    coverpage: true,
    executeScript: true,
    formatUpdated: '{MM}/{DD} {HH}:{mm}',
    search: {
        noData: {
            '/': 'No results!'
        },
        paths: 'auto',
        placeholder: {
            '/': 'Search ...'
        }
    },
    ga: 'UA-109731993-1',
    plugins: [
        plugins.linkify,
        plugins.editLink,
        // window.DocsifyCopyCodePlugin.init()
    ]
};

const invertPage = () => {
    if(document.body.classList.contains('inverted')){
        document.body.classList.remove('inverted');
    }else{
        document.body.classList.add('inverted');
    }
};

const setBodyHeight = () => {
  setTimeout(()=>{
    const main = document.querySelector('#main');
    const height = Math.max(main.offsetHeight + 200, window.innerHeight);
    document.body.style.height = `${height}px`;
  }, 200);
};

window.onload = () => {
    const invertHandler = document.querySelector('.invert-handler');
    invertHandler.onclick = invertPage;

    setBodyHeight();
    document.body.classList.add("loaded");

    //to fix content background issue in invert mode
    // const content = document.querySelector('.content');
    // const article = document.querySelector('#main');
    // content.style.height = `${article.offsetHeight+200}px`;
};


window.onhashchange = function(e) {
  setBodyHeight();
};


