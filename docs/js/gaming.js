// There is a Chrome bug preventing text from being shown. I don't really know how to properly work around it. This helps I guess.
setTimeout(() => {
    document.querySelector('.heading-first').style.top = '2px';
    document.querySelector('.heading-first').getBoundingClientRect();
    document.querySelector('.heading-first').style.top = '';
}, 100);


